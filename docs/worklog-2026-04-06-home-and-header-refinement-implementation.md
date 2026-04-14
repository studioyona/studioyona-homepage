# Worklog - Home And Header Refinement Implementation

Date: 2026-04-06
Status: done

## Summary

- 홈 원페이지의 카피/줄바꿈/오버레이 메뉴 디테일을 사용자가 요청한 방향으로 조정했다.
- 일반 페이지와 앱 상세 페이지를 홈과 같은 축약형 헤더 경험으로 맞춰, 예전식 상단 카테고리 내비게이션이 다시 보이던 문제를 정리했다.

## Scope

- `index.html`
- `assets/site.css`
- `about/index.html`
- `apps/index.html`
- `support/index.html`
- `contact/index.html`
- `ko/apps/edsn-frame/index.html`
- `en/apps/edsn-frame/index.html`
- `ko/apps/detective-recorder/index.html`
- `en/apps/detective-recorder/index.html`
- `docs/ARCHITECTURE.md`
- `docs/CHANGELOG.md`

## Requested Fixes

- 햄버거 메뉴 폰트 크기 축소 및 보조 문구 제거
- `Small app studio`를 `Tiny app studio`로 변경
- 스크롤 중 헤더와 본문 타이포 겹침 완화
- `멀리 있는 사람보다` 문구 제거
- Safari 좁은 창 폭에서 가로 스크롤 억제
- 핵심 한국어 카피의 줄바꿈 고정
- 홈에서 앱 상세/고객지원으로 이동했을 때 예전식 상단 카테고리 메뉴가 다시 보이지 않게 정리

## Changes

- 홈 오버레이 메뉴에서 캡션 문구를 제거하고 링크 타이포를 축소했다.
- 홈 히어로 보조 카피를 `Tiny app studio`로 바꿨다.
- 홈 헤더에 배경/블러 레이어를 추가하고, 섹션 상단 여백을 늘려 스크롤 시 겹침을 줄였다.
- 홈 한국어 섹션 제목을 `span` 단위의 고정 줄바꿈 구조로 바꿨다.
- `EDSN Frame` 제목의 괄호 보조 문구는 작은 타이포로 분리했고, `탐정의 녹음기`는 한 덩어리로 유지되게 처리했다.
- `about`, `apps`, `support`, `contact` 일반 페이지의 상단 헤더를 축약형 패턴으로 교체했다.
- 앱 상세 4개 페이지에 공통 스크립트를 추가하고, 상단 `topbar`를 축약형 헤더 + 오버레이 메뉴 구조로 바꿨다.
- `overflow-x: clip`을 홈/compact page 계열에 추가해 좁은 Safari 폭에서의 가로 스크롤 가능성을 줄였다.

## Verification

- `node --check assets/site.js`
- `rg -n "site-header|<header class=\"topbar\"|Small app studio|스크롤로 이어지는 스튜디오 소개|멀리 있는 사람보다" index.html about/index.html apps/index.html support/index.html contact/index.html ko/apps/edsn-frame/index.html en/apps/edsn-frame/index.html ko/apps/detective-recorder/index.html en/apps/detective-recorder/index.html`
- `curl -s http://127.0.0.1:8123/ | rg -n "Tiny app studio|거창한 문제보다|막히는 순간도|Studio YONA에 대해|app-title-sub|탐정의 녹음기"`
- `curl -s http://127.0.0.1:8123/support/ | rg -n "data-menu-toggle|site-header|menu-kicker|Studio YONA"`
- `curl -s http://127.0.0.1:8123/ko/apps/edsn-frame/ | rg -n "data-menu-toggle|topbar|menu-kicker|Studio YONA"`

## Result

- 요청된 텍스트/헤더/줄바꿈 수정은 코드에 반영되었고, 일반/상세 페이지에서도 햄버거 기반 헤더가 보이도록 정리됐다.

## Handoff / Next

- 실제 Safari 브라우저에서 홈 상단 겹침, 가로 스크롤, 오버레이 메뉴 체감 크기, 우측 추상 비주얼 강도를 눈으로 한 번 더 확인한다.
- 필요하면 다음 턴에서 우측 추상 비주얼의 강도나 수를 더 낮춘다.
