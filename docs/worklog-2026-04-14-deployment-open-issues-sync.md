# Worklog - 2026-04-14 - deployment-open-issues-sync

## Summary

- Recorded the current deployment outcome after the GitHub Pages + custom domain launch.
- Captured the two remaining operational issues as explicit pending decisions:
  - whether to continue public GitHub Pages hosting once admin-like features are required
  - unresolved GitHub Desktop push failures

## Changes

- Updated `docs/ARCHITECTURE.md` with open operational decisions and pending issue notes.
- Updated `docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md` to reflect deployed status and pending operational choices.
- Updated `docs/CHANGELOG.md` with the deployment milestone and unresolved issue tracking.

## Verification

- Manual verification confirmed:
  - GitHub Pages deployment was enabled from `main` root
  - custom domain DNS reached success state
  - Safari could open the public site

## Handoff / Next

- Check whether `Enforce HTTPS` becomes available and enable it.
- Do a final public-site smoke test for KR/EN toggle, support email links, and app legal links.
- Revisit the hosting strategy before introducing admin features or secrets.
- Revisit GitHub Desktop push troubleshooting only when Desktop-based collaboration becomes necessary again.
