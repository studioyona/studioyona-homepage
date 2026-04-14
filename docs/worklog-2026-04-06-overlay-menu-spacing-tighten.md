# Worklog - Overlay Menu Spacing Tighten

Date: 2026-04-06
Status: done

## Summary

- 햄버거 메뉴에서 폰트 크기는 유지하고 내부 여백만 더 줄였다.

## Scope

- `assets/site.css`
- `docs/CHANGELOG.md`

## Requested Fix

- 폰트는 유지, 여백만 축소

## Changes

- `menu-sheet` 패딩을 더 줄였다.
- `menu-sheet-top` 간격과 하단 패딩을 줄였다.
- `menu-nav` 간격과 상단 패딩을 줄였다.
- `menu-nav a` 내부 패딩을 줄였다.
- 모바일 구간 패널 패딩도 함께 줄였다.

## Verification

- `rg -n "padding: 0.42rem|padding-bottom: 0.34rem|padding-top: 0.34rem|padding: 0.34rem 0.4rem|padding: 0.38rem" assets/site.css`

## Result

- 메뉴는 폰트 크기 변화 없이 더 압축된 간격으로 보이도록 조정됐다.

## Handoff / Next

- 실제 브라우저에서 열어 폰트는 유지되고 내부 여백만 줄어든 인상인지 확인한다.
