#!/usr/bin/env python3
"""Simple local preview server that disables browser caching."""

from __future__ import annotations

import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class NoCacheRequestHandler(SimpleHTTPRequestHandler):
    """Serve files with headers that discourage browser caching."""

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run a no-cache static file server.")
    parser.add_argument("--port", type=int, required=True, help="Port to listen on")
    parser.add_argument(
        "--directory",
        type=Path,
        required=True,
        help="Directory to serve",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    serve_dir = args.directory.expanduser().resolve()
    handler = partial(NoCacheRequestHandler, directory=str(serve_dir))
    httpd = ThreadingHTTPServer(("127.0.0.1", args.port), handler)
    print(f"Serving {serve_dir} at http://127.0.0.1:{args.port}", flush=True)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        httpd.server_close()


if __name__ == "__main__":
    main()
