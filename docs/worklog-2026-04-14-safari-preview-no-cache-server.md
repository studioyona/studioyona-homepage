# Worklog - 2026-04-14 - safari-preview-no-cache-server

## Summary

- Added a no-cache local preview server for homepage QA.
- Updated the Safari and default local preview launchers to use the no-cache server instead of the default Python static server.
- Focused on resolving repeated cases where Safari showed stale homepage styles after local edits.

## Changes

- Added `scripts/no_cache_server.py`.
- Updated `scripts/local-preview.command`.
- Updated `scripts/local-preview-safari-fresh.command`.
- Logged the behavior change in `docs/CHANGELOG.md`.

## Verification

- Run `python3 scripts/no_cache_server.py --port 8132 --directory .`
- Confirm `curl -I http://127.0.0.1:8132/` includes `Cache-Control: no-store`
- Launch the Safari preview script and confirm a fresh `localhost:84xx` page opens

## Handoff / Next

- If Safari still appears stale after this change, inspect the exact URL shown in the address bar and compare it against the current local preview port to distinguish cache issues from viewing the wrong tab/window.
