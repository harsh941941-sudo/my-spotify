from __future__ import annotations

import os
import shutil
import subprocess
import sys
from pathlib import Path


def _resolve_voice_engine() -> str:
    if shutil.which("python"):
        return "python"
    return sys.executable


def speak(text: str) -> None:
    text = (text or "").strip()
    if not text:
        return

    try:
        engine = _resolve_voice_engine()
        command = [engine, "-c", f"import pyttsx3; pyttsx3.speak({text!r})"]
        subprocess.Popen(
            command,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            stdin=subprocess.DEVNULL,
            creationflags=subprocess.CREATE_NO_WINDOW if os.name == "nt" else 0,
        )
    except Exception:
        try:
            subprocess.Popen(
                ["powershell", "-NoProfile", "-Command", f"Add-Type -AssemblyName System.Speech; (New-Object System.Speech.Synthesis.SpeechSynthesizer).Speak('{text.replace(chr(39), chr(39) + chr(39))}')"],
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                stdin=subprocess.DEVNULL,
                creationflags=subprocess.CREATE_NO_WINDOW if os.name == "nt" else 0,
            )
        except Exception:
            print(text)


if __name__ == "__main__":
    if len(sys.argv) > 1:
        speak(" ".join(sys.argv[1:]))
