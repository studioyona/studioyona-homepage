# Worklog - 2026-04-14 - footer-top-spacing

## Goal

푸터 상단 라인이 바로 위 카드/박스에 붙어 보이지 않도록 여백을 늘린다.

## Scope

- 일반 페이지 footer strip
- 홈 footer band
- 앱 상세/정책 페이지 footer strip
- 변경 이력 기록

## Plan

1. footer strip 상단 여백 규칙을 확인한다. -> verify: 관련 CSS 규칙 확인
2. 상단 padding을 늘려 라인이 아래로 내려가 보이게 조정한다. -> verify: CSS 수정 반영 확인
3. changelog를 갱신하고 Safari로 확인한다. -> verify: 브라우저 재오픈

## Facts

- 사용자는 `© 2026 Studio YONA` 위쪽 라인이 바로 위 박스와 너무 붙어 보인다고 느꼈다.
- 현재 footer strip은 상단 `padding-top`이 얕아서 경계가 빡빡하게 보일 수 있다.

## Decisions

- 라인 위치 자체를 바꾸기보다 footer strip의 상단 padding을 늘려 시각적으로 더 아래에서 시작되게 만든다.
- 일반 페이지, 홈, 앱 페이지 footer strip 모두 같은 폭으로 조정한다.

## Changes

- `.footer.footer-global`, `.home-footer-band`, `.app-page .footer.footer-global`의 상단 padding 확대
- `.footer.footer-global`, `.home-footer-band`, `.app-page .footer.footer-global`의 `margin-top`도 함께 확대해 라인 위치가 실제로 아래로 내려가 보이게 조정
- 같은 footer strip들의 하단 padding을 줄여 주소 아래 빈 공간을 축소

## Verification

- `rg -n "padding: 1.45rem 0 3.2rem" assets/site.css`
- `rg -n "margin-top: 1.1rem|margin: 1.1rem auto 0" assets/site.css`
- `rg -n "padding: 1.45rem 0 1.55rem" assets/site.css`

## Handoff / Next

- Safari에서 라인이 카드와 충분히 떨어져 보이는지 확인하고, 필요하면 1단계 더 늘리거나 줄인다.
