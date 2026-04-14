# Worklog - Overlay Menu Size Reduction

Date: 2026-04-06
Status: done

## Summary

- 햄버거 메뉴를 눌렀을 때 열리는 오버레이 패널의 크기와 폰트 크기를 한 단계 더 줄였다.

## Scope

- `assets/site.css`
- `docs/CHANGELOG.md`

## Requested Fix

- 햄버거 바 클릭 시 열리는 블록 크기와 폰트 크기 축소

## Changes

- `menu-sheet` 폭, 패딩, 반경을 줄였다.
- `menu-kicker`, `menu-close`, `menu-nav a`의 폰트 크기와 높이를 줄였다.
- 모바일 구간에서도 같은 방향으로 더 작은 값으로 맞췄다.

## Verification

- `rg -n "menu-sheet|menu-kicker|menu-close|menu-nav a" assets/site.css`

## Result

- 오버레이 메뉴가 이전보다 더 작고 조용한 느낌으로 보이도록 보정됐다.

## Handoff / Next

- 실제 Safari/Chrome에서 메뉴를 열어 체감 크기를 확인하고, 필요하면 한 단계 더 축소한다.
