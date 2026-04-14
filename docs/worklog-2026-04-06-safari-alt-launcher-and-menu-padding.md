# Worklog - Safari Alt Launcher And Menu Padding

Date: 2026-04-06
Status: done

## Summary

- Safari 캐시 문제를 피하기 위한 별도 미리보기 런처를 준비했다.
- 햄버거 메뉴 오버레이의 내부 패딩을 더 줄여 더 컴팩트하게 다듬었다.

## Scope

- `assets/site.css`
- `scripts/local-preview-safari-fresh.command`
- `docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md`
- `docs/CHANGELOG.md`

## Requested Fixes

- Safari 전용 새 미리보기 아이콘 추가
- 햄버거 메뉴 패딩까지 같이 줄이기

## Changes

- `menu-sheet`, `menu-sheet-top`, `menu-nav`, `menu-nav a`의 내부 패딩과 간격을 더 줄였다.
- Safari 캐시 충돌을 피하기 위해 새 포트를 사용하는 별도 런처 스크립트를 추가했다.

## Verification

- `rg -n "padding: 0.64rem|padding-bottom: 0.52rem|padding-top: 0.52rem|padding: 0.52rem 0.6rem|local-preview-safari-fresh" assets/site.css scripts/local-preview-safari-fresh.command`

## Result

- 메뉴는 더 압축된 인상으로 조정됐고, Safari는 새 포트 기반 런처로 기존 캐시 흐름과 분리할 수 있게 됐다.

## Handoff / Next

- 새 Safari 전용 아이콘으로 열린 창에서 최신 수정본이 안정적으로 보이는지 확인한다.
