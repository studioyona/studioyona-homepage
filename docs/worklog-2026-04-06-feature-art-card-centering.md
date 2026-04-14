# Worklog - Feature Art Card Centering

Date: 2026-04-06
Status: done

## Summary

- 회사 소개 첫 비주얼 카드의 텍스트가 아니라 카드 블록 자체를 화면에서 더 중앙에 오도록 조정했다.

## Scope

- `assets/site.css`
- `docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md`
- `docs/CHANGELOG.md`

## Requested Fix

- 회사 소개 첫 카드 자체를 화면에서 가운데 정렬

## Changes

- `feature-art`에 최대 폭과 `justify-self: center`를 적용해 카드 블록 자체가 그리드 안에서 중앙에 오도록 했다.
- 기획안 문구도 “텍스트 중앙 정렬”이 아니라 “카드 블록 중앙 배치” 의미로 수정했다.

## Verification

- `rg -n "feature-art|justify-self: center|width: min\\(100%, 420px\\)" assets/site.css`

## Result

- 회사 소개의 첫 비주얼 카드는 이제 카드 내용뿐 아니라 카드 자체의 위치도 더 중앙에 가깝게 정리됐다.

## Handoff / Next

- 실제 Safari에서 회사 소개 섹션의 카드 위치가 원하는 만큼 중앙에 왔는지 확인하고, 필요하면 최대 폭을 더 줄이거나 늘린다.
