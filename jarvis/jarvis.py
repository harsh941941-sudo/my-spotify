from __future__ import annotations

import asyncio
import os
import re
import subprocess
import sys
import threading
import time
from pathlib import Path

import pyautogui
import speech_recognition as sr
from flask import Flask, jsonify, render_template

from config import (
    ADB_HOST,
    ADB_PORT,
    APP_HOST,
    APP_PORT,
    GENERATED_SCRIPT,
    LOG_FILE,
    MODEL_NAME,
    ROOT_DIR,
    SCREENSHOT_FILE,
    SPEAKER_SCRIPT,
    SYSTEM_PROMPT,
    THREAD_POOL,
)

try:
    from google.antigravity import Agent, LocalAgentConfig
except Exception:
    Agent = None
    LocalAgentConfig = None

try:
    from ppadb.client import Client as ADBClient
except Exception:
    ADBClient = None


app = Flask(__name__, template_folder="templates", static_folder="static")


class JarvisRuntime:
    def __init__(self) -> None:
        self.recognizer = sr.Recognizer()
        self.microphone = None
        self.logs: list[dict[str, str]] = []
        self.agent = self._initialize_agent()
        self.adb = self._initialize_adb()
        self.latest_response = "JARVIS ready."
        self.voice_available = self._initialize_microphone()
        if self.voice_available:
            self._log("JARVIS initialized and listening for commands.")
        else:
            self._log("JARVIS initialized without voice input support.")

    def _initialize_microphone(self):
        try:
            self.microphone = sr.Microphone()
            self._log("Microphone initialized.")
            return True
        except Exception as exc:
            self.microphone = None
            self._log(f"Microphone unavailable: {exc}")
            return False

    def _initialize_agent(self):
        if Agent is None or LocalAgentConfig is None:
            self._log("google.antigravity is unavailable. Agent features are disabled.")
            return None
        try:
            config = LocalAgentConfig(
                model=MODEL_NAME,
                system_instruction=SYSTEM_PROMPT,
                streaming=True,
            )
            self._log("Google Antigravity agent initialized.")
            return Agent(config=config)
        except Exception as exc:
            self._log(f"Agent initialization failed: {exc}")
            return None

    def _initialize_adb(self):
        if ADBClient is None:
            self._log("ppadb is unavailable. ADB automation will be unavailable.")
            return None
        try:
            client = ADBClient(host=ADB_HOST, port=ADB_PORT)
            devices = client.devices()
            if devices:
                self._log(f"ADB connected to device: {devices[0][0]}")
                return client
            self._log("ADB server available, but no Android devices are currently connected.")
            return client
        except Exception as exc:
            self._log(f"ADB initialization failed: {exc}")
            return None

    def _log(self, message: str, level: str = "INFO") -> None:
        timestamp = time.strftime("%H:%M:%S")
        entry = {"time": timestamp, "message": message, "level": level}
        self.logs.append(entry)
        with LOG_FILE.open("a", encoding="utf-8") as fh:
            fh.write(f"[{timestamp}] {level} {message}\n")

    async def _run_in_thread(self, func, *args, **kwargs):
        loop = asyncio.get_running_loop()
        return await loop.run_in_executor(THREAD_POOL, func, *args)

    async def generate_response(self, prompt: str) -> str:
        if self.agent is None:
            self._log("Agent unavailable; local command handling only.")
            return "Google Antigravity is unavailable, but I can still assist with local controls."

        try:
            response = await self.agent.generate(prompt=prompt, stream=True)
            parts: list[str] = []
            async for token in response:
                parts.append(str(token))
            result = "".join(parts).strip()
            if not result:
                result = "I heard you."
            self.latest_response = result
            return result
        except Exception as exc:
            self._log(f"Agent response error: {exc}")
            return f"I hit an error while processing that: {exc}"

    def _get_adb_device(self):
        if self.adb is None:
            return None
        try:
            devices = self.adb.devices()
            if not devices:
                self._log("No connected ADB devices found.")
                return None
            return self.adb.device(devices[0][0])
        except Exception as exc:
            self._log(f"ADB device lookup failed: {exc}")
            return None

    def process_command(self, command: str) -> None:
        cmd = command.strip().lower()

        if cmd.startswith("create folder named"):
            name = cmd.replace("create folder named", "", 1).strip()
            target = ROOT_DIR / name
            target.mkdir(parents=True, exist_ok=True)
            self._log(f"Created folder: {target}")
            self._speak(f"Created folder {name}.")
            return

        if cmd.startswith("write a python script"):
            code = "print('Hello from JARVIS')\n"
            GENERATED_SCRIPT.write_text(code, encoding="utf-8")
            self._log(f"Generated script at {GENERATED_SCRIPT}")
            self._speak("Generated the Python script and opening it in VS Code.")
            self._launch_vscode(GENERATED_SCRIPT)
            return

        if cmd.startswith("time") or cmd.startswith("what time"):
            current_time = time.strftime("%H:%M:%S")
            self._log(f"Time query returned: {current_time}")
            self._speak(f"The current time is {current_time}.")
            return

        if cmd.startswith("shutdown") or "turn off pc" in cmd:
            self._log("Shutdown requested by user.")
            self._speak("Initiating shutdown in five seconds.")
            try:
                subprocess.Popen(
                    ["shutdown", "/s", "/t", "5"],
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.DEVNULL,
                    stdin=subprocess.DEVNULL,
                    creationflags=subprocess.CREATE_NO_WINDOW if os.name == "nt" else 0,
                )
            except Exception as exc:
                self._log(f"Shutdown command failed: {exc}")
            return

        if "capture" in cmd or "screenshot" in cmd:
            pyautogui.screenshot(str(SCREENSHOT_FILE))
            self._log(f"Screenshot saved to {SCREENSHOT_FILE}")
            self._speak("Captured a screenshot.")
            return

        if "unlock" in cmd:
            self._unlock_phone()
            return

        if "hotstar" in cmd:
            self._launch_android_app("in.startv.hotstar")
            return

        if "call" in cmd:
            number = self._extract_phone_number(cmd)
            if number:
                self._voice_call(number)
            else:
                self._speak("I did not catch the number clearly.")
            return

        self._log("No local command matched; delegating to AI response path.")

    def _speak(self, text: str) -> None:
        text = (text or "").strip()
        if not text:
            return
        self._log(f"Speaking: {text}")
        try:
            subprocess.Popen(
                [sys.executable, SPEAKER_SCRIPT, text],
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                stdin=subprocess.DEVNULL,
                creationflags=subprocess.CREATE_NO_WINDOW if os.name == "nt" else 0,
            )
        except Exception as exc:
            self._log(f"Speech failed: {exc}")

    def _launch_vscode(self, file_path: Path) -> None:
        try:
            subprocess.Popen(
                ["code", str(file_path)],
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                stdin=subprocess.DEVNULL,
                creationflags=subprocess.CREATE_NO_WINDOW if os.name == "nt" else 0,
            )
        except Exception as exc:
            self._log(f"VS Code launch failed: {exc}")

    def _unlock_phone(self) -> None:
        device = self._get_adb_device()
        if device is None:
            self._speak("ADB device not available.")
            return
        try:
            self._speak("Unlocking the phone.")
            device.shell("input keyevent 26")
            time.sleep(0.5)
            device.shell("input swipe 500 1500 500 300")
            self._log("ADB unlock sequence executed successfully.")
        except Exception as exc:
            self._log(f"ADB unlock failed: {exc}")
            self._speak("Unlock command failed.")

    def _launch_android_app(self, package: str) -> None:
        device = self._get_adb_device()
        if device is None:
            self._speak("ADB device not available.")
            return
        try:
            device.shell(f"am start {package}")
            self._log(f"Launched Android app: {package}")
            self._speak("Launching the requested application.")
        except Exception as exc:
            self._log(f"Android app launch failed: {exc}")
            self._speak("Application launch failed.")

    def _voice_call(self, number: str) -> None:
        device = self._get_adb_device()
        if device is None:
            self._speak("ADB device not available.")
            return
        try:
            device.shell(f"am start -a android.intent.action.CALL -d tel:{number}")
            self._log(f"Initiated voice call to {number}")
            self._speak(f"Calling {number}.")
        except Exception as exc:
            self._log(f"Voice call failed: {exc}")
            self._speak("Call initiation failed.")

    @staticmethod
    def _extract_phone_number(command: str) -> str:
        match = re.search(r"\d{10,15}", command)
        return match.group(0) if match else ""

    async def listen_loop(self) -> None:
        if not self.voice_available or self.microphone is None:
            self._log("Voice input is unavailable; the web dashboard will remain running.")
            while True:
                await asyncio.sleep(60)

        self._log("Listening for voice input...")

        with self.microphone as source:
            self.recognizer.adjust_for_ambient_noise(source, duration=0.5)
            while True:
                try:
                    audio = self.recognizer.listen(source, timeout=3, phrase_time_limit=5)
                    text = await self._run_in_thread(self.recognizer.recognize_google, audio)
                    if not text:
                        continue

                    self._log(f"User said: {text}")
                    self.process_command(text)
                    response = await self.generate_response(text)
                    if response:
                        self._speak(response)
                except sr.WaitTimeoutError:
                    continue
                except Exception as exc:
                    self._log(f"Speech recognition error: {exc}")
                    await asyncio.sleep(0.5)


runtime = JarvisRuntime()


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/get_logs")
def get_logs():
    return jsonify({"logs": runtime.logs[-50:]})


def start_flask_server() -> None:
    app.run(host=APP_HOST, port=APP_PORT, debug=False, use_reloader=False, threaded=True)


async def main() -> None:
    flask_thread = threading.Thread(target=start_flask_server, daemon=True)
    flask_thread.start()
    time.sleep(1)
    await runtime.listen_loop()


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("JARVIS shutdown requested.")
