# Worklog: Hide Stampho Public Exposure

Date: 2026-05-02
Status: done
Related Files:
- `index.html`
- `apps/index.html`
- `ko/apps/stampho/index.html`
- `en/apps/stampho/index.html`
- `apps/stampho/legal/privacy/index.html`
- `apps/stampho/legal/terms/index.html`
- `ko/apps/stampho/legal/privacy/index.html`
- `ko/apps/stampho/legal/terms/index.html`
- `en/apps/stampho/legal/privacy/index.html`
- `en/apps/stampho/legal/terms/index.html`
- `docs/CHANGELOG.md`

## Goal
- 아직 출시 전인 `Stampho`가 홈페이지 일반 탐색에서 노출되지 않게 한다.
- 이미 배포된 Stampho 페이지가 검색 노출되지 않도록 최소한의 차단 신호를 추가한다.

## Scope
- 포함 범위:
  - 홈 앱 섹션에서 Stampho 패널 제거.
  - `/apps/` 앱 목록에서 Stampho 소개/링크/메타 설명 제거.
  - 기존 Stampho 상세/법률 페이지에 `noindex, nofollow` 메타 태그 추가.
- 제외 범위:
  - Stampho 파일 삭제.
  - 기존 Stampho legal draft 내용 삭제.

## Plan
1. 홈 노출 제거 -> verify: `index.html`에 visible Stampho 앱 패널이 없는지 확인
2. 앱 목록 노출 제거 -> verify: `/apps/` 카피와 카드에서 Stampho가 빠졌는지 확인
3. 검색 노출 방지 태그 추가 -> verify: Stampho 페이지 8개에 `noindex, nofollow`가 있는지 확인
4. 커밋/푸시 -> verify: 원격 main에 후속 커밋 반영

## Findings
- `Stampho`는 이전 커밋에서 이미 원격 main에 올라갔다.
- 사용자는 출시 전이므로 홈페이지에 노출되지 않기를 원한다.

## Decisions
- 결정: Stampho 파일은 삭제하지 않고 공개 진입점과 검색 노출을 차단한다.
  이유: 출시 전 문서 작업물은 보존하면서, 일반 방문자가 홈페이지 탐색으로 발견하지 못하게 하기 위해서다.

## Changes
- 홈과 앱 목록에서 Stampho 관련 표시/링크를 제거했다.
- Detective's Recorder 문구를 기존 `Next app`/`Coming soon` 흐름으로 되돌렸다.
- Stampho 상세/법률 HTML 8개에 `noindex, nofollow`를 추가했다.
- `docs/CHANGELOG.md`에 변경 이력을 추가했다.

## Verification
- 실행한 검증:
  - `rg -n "Stampho|stampho|Second release|Planned after Stampho|STAMP" index.html apps/index.html`
  - `rg -l "noindex, nofollow" ko/apps/stampho en/apps/stampho apps/stampho`
- 결과:
  - PASS: 홈과 앱 목록에서는 Stampho 문자열/링크가 더 이상 검색되지 않는다.
  - PASS: Stampho 상세/법률 페이지 8개에 `noindex, nofollow`가 추가됐다.

## Handoff / Next
- 배포 후 `https://www.studioyona.co.kr/`와 `https://www.studioyona.co.kr/apps/`에서 Stampho가 보이지 않는지 확인한다.
- 이미 배포된 URL 자체는 직접 접근 가능하지만, 검색 노출 차단 태그가 들어간다.
