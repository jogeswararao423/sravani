import http.server
import socketserver
import os
import threading

PORTS = [8080, 80, 3000]
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

class ThreadedHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True

def serve_on_port(port):
    try:
        with ThreadedHTTPServer(('0.0.0.0', port), NoCacheHandler) as httpd:
            print(f'Serving live on port {port}...', flush=True)
            httpd.serve_forever()
    except Exception as e:
        print(f'Could not bind port {port}: {e}', flush=True)

if __name__ == '__main__':
    threads = []
    for port in PORTS:
        t = threading.Thread(target=serve_on_port, args=(port,), daemon=False)
        t.start()
        threads.append(t)
    for t in threads:
        t.join()
