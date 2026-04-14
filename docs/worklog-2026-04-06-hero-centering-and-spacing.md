# Worklog - Hero Centering And Spacing

Date: 2026-04-06
Status: done

## Summary

- 홈 첫 히어로 카드가 더 가운데 보이도록 정렬을 조정했다.
- 비주얼 카드와 주요 섹션 사이 세로 여백을 조금 더 넓혔다.

## Scope

- `assets/site.css`
- `docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md`
- `docs/CHANGELOG.md`

## Requested Fixes

- 첫 카드가 실제로 가운데 정렬처럼 보이게 보정
- 비주얼 카드별 간격, 빈 공간 높이 확대

## Changes

- `hero-section`에 수평 중앙 정렬을 추가했다.
- `hero-copy`를 `width + margin-inline: auto` 구조로 바꿔 카드가 중심선에 더 가깝게 오도록 했다.
- `home-section` 상하 패딩을 늘리고, `apps-stack` 간격과 주요 섹션 간 `margin-top`을 추가해 세로 리듬을 더 넓혔다.

## Verification

- `rg -n "justify-content: center|margin-inline: auto|apps-stack|story-section \\+ \\.apps-section|padding: 9.5rem 0 3rem" assets/site.css`

## Result

- 홈 첫 카드가 이전보다 중앙에 더 가깝게 보이고, 카드/섹션 사이 여백도 조금 더 넓어졌다.

## Handoff / Next

- 실제 Safari에서 카드가 충분히 가운데 보이는지 확인하고, 아직 왼쪽으로 느껴지면 카드 최대 폭을 더 줄이거나 섹션 폭을 다시 조정한다.
