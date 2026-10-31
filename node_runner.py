#!/usr/bin/env python3
"""Serve the AI for Money project workbench; no earning workers are started."""
import json
import os
from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import unquote, urlparse

BASE_DIR = Path(__file__).resolve().parent
PORT = int(os.environ.get('PORT', '8888'))
HOST = os.environ.get('HOST', '127.0.0.1')


class WorkbenchHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        path = unquote(urlparse(self.path).path)
        if any(part.startswith('.') for part in path.split('/') if part):
            self.send_error(403)
            return
        if path == '/api/status':
            try:
                projects = json.loads((BASE_DIR / 'recipes.json').read_text())
                payload = {
                    'system': 'AI for Money project workbench',
                    'version': '2.0.0',
                    'status': 'serving',
                    'mode': 'research-and-local-records',
                    'project_count': len(projects),
                    'workers_started': 0,
                    'payment_verification': False,
                }
                body = json.dumps(payload, ensure_ascii=False).encode('utf-8')
            except (OSError, ValueError):
                self.send_error(503, 'Project data unavailable')
                return
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Content-Length', str(len(body)))
            self.send_header('Cache-Control', 'no-store')
            self.end_headers()
            self.wfile.write(body)
            return
        return super().do_GET()

    def list_directory(self, path):
        self.send_error(403, 'Directory listing is disabled')
        return None


def main():
    os.chdir(BASE_DIR)
    print(f'AI for Money project workbench: http://{HOST}:{PORT}', flush=True)
    print('Serves the project library, local experiment records and cost calculator. No earning or trading workers are started.', flush=True)
    server = HTTPServer((HOST, PORT), WorkbenchHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == '__main__':
    main()
