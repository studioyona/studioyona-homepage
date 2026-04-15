# Worklog - 2026-04-15 - github-desktop-root-cause-reframe

## Summary

- Reframed the unresolved `GitHub Desktop push` issue after checking HTTPS, OAuth, SSH, and anonymous web access.
- Confirmed the problem is no longer best described as a local Desktop/cache/path issue.
- Captured the stronger working diagnosis: the repository is shown as `Public` to the owner, but GitHub still returns `404` to anonymous web/API/git transport access.

## What I Checked

- Verified local repository path and Git state were normal.
- Confirmed `origin` had been changed to an SSH alias for `studioyona`.
- Generated a dedicated `studioyona` SSH key and added an SSH config alias.
- Verified SSH auth for `studioyona` succeeded.
- Observed `git fetch origin` still fail with `Repository not found`.
- Observed anonymous `curl` and incognito browser access to `https://github.com/studioyona/studioyona-homepage` return `404`.
- Compared that with the logged-in GitHub UI, which still showed the repository as `Public`.

## Conclusion

- The trash/recovery event likely contributed to early GitHub Desktop confusion but does not explain the current persistent failure.
- The stronger root-cause hypothesis is now a GitHub-side visibility/access inconsistency for the repository.
- Until the repository URL resolves correctly for anonymous/public access, GitHub Desktop and normal git fetch/push attempts are expected to remain unreliable.

## Follow-up

- Keep the site operational via the already-successful web upload + GitHub Pages deployment path.
- Treat the remaining git issue as a GitHub-side access anomaly first, not a pure Desktop issue.
- Next recommended check:
  - Validate whether the repository URL becomes publicly reachable outside a logged-in session.
  - If not, contact GitHub Support with the contradictory state:
    - repo shows `Public` in owner UI
    - repo returns `404` in anonymous browser/API/git access

## Handoff / Next

- If continuing this issue, prioritize GitHub Support / repository visibility diagnosis over more local Desktop resets.
- Only resume `GitHub Desktop` troubleshooting after the repository URL itself is confirmed reachable outside the owner session.
