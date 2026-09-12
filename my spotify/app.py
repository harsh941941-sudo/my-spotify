import json
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import quote_plus
from urllib.request import Request, urlopen

from flask import Flask, abort, jsonify, render_template, request, send_from_directory

BASE_DIR = Path(__file__).resolve().parent
TEMPLATE_DIR = BASE_DIR / 'templates'
MUSIC_FOLDER = BASE_DIR / 'music'

app = Flask(__name__, template_folder=str(TEMPLATE_DIR))


def ensure_music_folder() -> Path:
    MUSIC_FOLDER.mkdir(parents=True, exist_ok=True)
    return MUSIC_FOLDER


def get_songs() -> list[str]:
    ensure_music_folder()
    return sorted(
        [item.name for item in MUSIC_FOLDER.iterdir() if item.is_file() and item.suffix.lower() == '.mp3']
    )


def get_safe_audio_path(filename: str) -> Path:
    ensure_music_folder()
    music_root = MUSIC_FOLDER.resolve()
    requested = (music_root / filename).resolve()

    try:
        requested.relative_to(music_root)
    except ValueError:
        abort(404)

    if not requested.is_file() or requested.suffix.lower() != '.mp3':
        abort(404)

    return requested


@app.route('/')
def index():
    return render_template('index.html', songs=get_songs())


@app.route('/download/<path:filename>')
def download_file(filename):
    get_safe_audio_path(filename)
    return send_from_directory(str(MUSIC_FOLDER), filename, as_attachment=False)


@app.route('/play/<path:filename>')
def play_file(filename):
    return download_file(filename)


@app.route('/api/external-trending')
def external_trending():
    term = request.args.get('term', 'popular').strip() or 'popular'
    url = f'https://itunes.apple.com/search?term={quote_plus(term)}&entity=song&limit=5'

    try:
        req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urlopen(req, timeout=10) as response:
            payload = json.loads(response.read().decode('utf-8'))
    except (HTTPError, URLError, TimeoutError, ValueError):
        return jsonify({'tracks': []})

    tracks = []
    for item in payload.get('results', [])[:5]:
        tracks.append(
            {
                'title': item.get('trackName', 'Unknown Title'),
                'artist': item.get('artistName', 'Unknown Artist'),
                'preview': item.get('previewUrl', ''),
                'image': item.get('artworkUrl100', '').replace('100x100', '300x300'),
            }
        )

    return jsonify({'tracks': tracks})


if __name__ == '__main__':
    print('Server starting...')
    print(f'Looking for templates in: {TEMPLATE_DIR}')
    print(f'Looking for music in:     {MUSIC_FOLDER}')
    app.run(debug=True, port=5000)