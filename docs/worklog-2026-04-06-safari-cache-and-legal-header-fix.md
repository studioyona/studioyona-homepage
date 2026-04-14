# Worklog - Safari Cache And Legal Header Fix

Date: 2026-04-06
Status: done

## Summary

- Safari에서 수정사항이 바로 보이지 않던 문제를 줄이기 위해 공통 자산에 버전 쿼리 스트링을 붙였다.
- 앱 법률 페이지에 남아 있던 예전식 상단 카테고리 헤더를 햄버거 기반 축약형 헤더로 바꿨다.
- 앱 상세 페이지의 앱 이름 줄바꿈을 고정하기 위해 `app-lockup` 구조를 적용했다.

## Scope

- `assets/site.css`
- `index.html`
- `about/index.html`
- `apps/index.html`
- `support/index.html`
- `contact/index.html`
- `404.html`
- `ko/apps/edsn-frame/index.html`
- `en/apps/edsn-frame/index.html`
- `ko/apps/detective-recorder/index.html`
- `en/apps/detective-recorder/index.html`
- `ko/apps/edsn-frame/legal/privacy/index.html`
- `ko/apps/edsn-frame/legal/terms/index.html`
- `en/apps/edsn-frame/legal/privacy/index.html`
- `en/apps/edsn-frame/legal/terms/index.html`
- `ko/apps/detective-recorder/legal/privacy/index.html`
- `ko/apps/detective-recorder/legal/terms/index.html`
- `en/apps/detective-recorder/legal/privacy/index.html`
- `en/apps/detective-recorder/legal/terms/index.html`
- `docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md`
- `docs/CHANGELOG.md`

## Requested Fixes

- Safari에서 수정 반영이 바로 보이지 않는 문제 해결
- 앱 소개 > 개인정보처리방침/이용약관에서 구식 상단 카테고리 메뉴가 보이는 문제 해결
- 햄버거 메뉴 전체 크기 축소
- 앱 소개 보기 클릭 시 앱 이름 줄바꿈 고정

## Changes

- 공통 자산 링크를 `site.css?v=20260406f`, `site.js?v=20260406f`로 바꿔 캐시 우회를 강화했다.
- 오버레이 메뉴 패널 폭, 패딩, 링크 높이, 폰트 크기를 전반적으로 더 줄였다.
- 앱 상세 4개 페이지의 제목을 `app-lockup` 구조로 바꿔 앱 이름이 의도와 다르게 꺾이지 않도록 했다.
- 앱 법률 페이지 8개에 공통 스크립트와 축약형 헤더 + 오버레이 메뉴를 적용했다.

## Verification

- `node --check assets/site.js`
- `rg -n "site.css\\?v=20260406f|site.js\\?v=20260406f|class=\\\"app-lockup\\\"|<header class=\\\"topbar\\\"" ...`

## Result

- Safari 계열 캐시 영향은 줄였고, 앱 상세/법률 페이지의 헤더 경험도 홈과 더 일관되게 맞춰졌다.

## Handoff / Next

- Safari에서 기존 탭 대신 새로 열린 미리보기 주소로 확인하고, 필요하면 메뉴 크기를 한 단계 더 줄인다.
