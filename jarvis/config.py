from __future__ import annotations

import os
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent
TEMPLATES_DIR = ROOT_DIR / "templates"
LOG_FILE = ROOT_DIR / "jarvis.log"
SPEAKER_SCRIPT = ROOT_DIR / "speaker.py"
GENERATED_SCRIPT = ROOT_DIR / "generated_script.py"
SCREENSHOT_FILE = ROOT_DIR / "screenshot.png"

APP_HOST = os.getenv("JARVIS_APP_HOST", "127.0.0.1")
APP_PORT = int(os.getenv("JARVIS_APP_PORT", "5000"))
ADB_HOST = os.getenv("JARVIS_ADB_HOST", "127.0.0.1")
ADB_PORT = int(os.getenv("JARVIS_ADB_PORT", "5037"))
MODEL_NAME = os.getenv("JARVIS_MODEL_NAME", "gemini-2.5-flash")
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY", "")
THREAD_WORKERS = int(os.getenv("JARVIS_THREAD_WORKERS", "6"))
THREAD_POOL = ThreadPoolExecutor(max_workers=THREAD_WORKERS)

SYSTEM_PROMPT = (
    "You are JARVIS, a concise, polite, and highly capable voice-first assistant. "
    "Respond in 1-2 sentences max, using elegant English and Hindi where helpful. "
    "Keep responses brief, confident, and Stark-inspired in tone."
)


def init_directories() -> None:
    TEMPLATES_DIR.mkdir(parents=True, exist_ok=True)
    LOG_FILE.touch(exist_ok=True)


init_directories()
