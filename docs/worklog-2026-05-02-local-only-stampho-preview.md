# Worklog: Local Only Stampho Preview

Date: 2026-05-02
Status: done
Related Files:
- `assets/site.js`
- `docs/CHANGELOG.md`

## Goal
- 운영 홈페이지에서는 `Stampho`를 숨긴 상태를 유지한다.
- 로컬 미리보기에서는 홈과 앱 목록에서 `Stampho`를 다시 확인할 수 있게 한다.

## Scope
- 포함 범위:
  - `localhost`, `127.0.0.1`, `0.0.0.0`, `::1`, `file:` 환경에서만 Stampho UI를 동적으로 삽입.
  - 변경 이력 기록.
- 제외 범위:
  - 운영 사이트에서 Stampho 공개 노출.
  - Stampho 파일 삭제 또는 URL 차단 강화.

## Plan
1. 로컬 환경 감지 추가 -> verify: production hostname에서는 실행 조건이 false
2. 홈 앱 섹션에 로컬 전용 Stampho 패널 삽입 -> verify: 로컬 HTML 응답 후 DOM에서 확인
3. `/apps/` 목록에 로컬 전용 Stampho 카드 삽입 -> verify: 로컬 HTML 응답 후 DOM에서 확인
4. 운영 공개 노출 유지 차단 -> verify: 정적 HTML의 홈/앱 목록에는 Stampho 문자열이 없음

## Findings
- 이전 후속 커밋으로 운영 정적 HTML에서는 `Stampho`가 제거됐다.
- 기존 Stampho 상세/법률 페이지는 보존되어 있고 `noindex, nofollow`가 적용되어 있다.

## Decisions
- 결정: 정적 HTML에 다시 노출하지 않고 JS가 로컬 환경에서만 UI를 삽입한다.
  이유: 운영 사이트는 숨김 상태를 유지하면서 로컬 미리보기 확인만 가능하게 하기 위해서다.

## Changes
- `assets/site.js`에 로컬 환경 감지와 Stampho 패널/카드 동적 삽입 로직을 추가했다.
- `docs/CHANGELOG.md`에 변경 이력을 추가했다.

## Verification
- 실행한 검증:
  - `node --check assets/site.js`
  - `curl -I http://127.0.0.1:8123/`
  - Playwright: `http://127.0.0.1:8123/` 로컬 홈 스냅샷에서 `Stampho` 패널 확인
  - Playwright: `http://127.0.0.1:8123/apps/` 로컬 앱 목록 스냅샷에서 `Stampho` 카드 확인
  - `rg -n "Stampho|stampho|Second release|Planned after Stampho|STAMP" index.html apps/index.html`
- 결과:
  - PASS: `assets/site.js` 문법 오류 없음.
  - PASS: 로컬 미리보기 서버 응답 정상.
  - PASS: 로컬 홈/앱 목록에서 Stampho가 표시됨.
  - PASS: 운영 정적 홈/앱 목록 파일에는 Stampho 문자열이 없음.
- 미실행 항목:
  - 없음.

## Handoff / Next
- 운영 URL에서는 기존처럼 Stampho가 보이지 않아야 한다.
- 로컬 미리보기 URL에서는 JS 실행 후 Stampho가 보인다.
