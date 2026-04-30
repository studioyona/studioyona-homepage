# Public Legal Pages Final Update

- Date: 2026-04-30
- Scope: EDSN Frame public legal pages final update review

## Summary

Reviewed `PUBLIC_LEGAL_PAGES_FINAL_UPDATE_HANDOFF_2026-04-30.md` against the current Korean and English EDSN Frame public privacy policy and terms pages. Confirmed that the required DeviceCheck, under-14, subscription, and anti-abuse wording changes are already present in the working tree.

## Changes

- Re-read the 2026-04-30 handoff and compared it against:
  - `ko/apps/edsn-frame/legal/privacy/index.html`
  - `en/apps/edsn-frame/legal/privacy/index.html`
  - `ko/apps/edsn-frame/legal/terms/index.html`
  - `en/apps/edsn-frame/legal/terms/index.html`
- Confirmed the following required updates are present in both Korean and English pages:
  - DeviceCheck token / verification result disclosure in Privacy section 2
  - Raw DeviceCheck token non-storage disclosure
  - Updated Apple Inc. international transfer row for DeviceCheck verification
  - Softened under-14 wording in Terms article 5
  - Auto-renewing subscription wording in Terms article 9
  - DeviceCheck / device-level abuse-prevention language in Terms article 10
  - Regrant limitation wording for deletion/reinstall/guest recreation in Terms article 10
- Added the optional section 9 DeviceCheck bullet to both Korean and English privacy pages after confirming it should appear on the public pages as well.
- Updated `docs/CHANGELOG.md`.

## Verification

- Re-read the handoff source from `~/Downloads/PUBLIC_LEGAL_PAGES_FINAL_UPDATE_HANDOFF_2026-04-30.md`.
- Searched the four legal pages for the required keywords and replacement clauses.
- Reviewed the current `git diff` for the four legal page files to confirm the requested replacements are present in the working tree.

## Handoff / Next

- If the current public/legal wording is approved visually, commit and push the legal-page working-tree changes together with the updated documentation.
- Re-open the Korean and English privacy pages locally and confirm the new section 9-1 DeviceCheck bullet renders naturally with the existing automatically collected information list.
