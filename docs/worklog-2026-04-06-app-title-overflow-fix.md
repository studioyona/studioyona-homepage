# Worklog - App Title Overflow Fix

Date: 2026-04-06
Status: done

## Summary

- 앱 소개 페이지 첫 화면에서 앱 이름이 카드 밖으로 잘려 보이던 문제를 수정했다.

## Scope

- `assets/site.css`
- `docs/CHANGELOG.md`

## Requested Fix

- 앱 소개에 들어가면 어플 이름이 잘려 보이는 문제 보완

## Changes

- 앱 상세 `h1` 기본 크기를 한 단계 낮췄다.
- `app-lockup` 최대 폭을 제목 카드 안쪽 폭 기준으로 제한했다.
- 모바일/좁은 화면에서는 `nowrap` 제약을 풀어 카드 밖 overflow를 막았다.

## Verification

- `rg -n "app-page h1|app-lockup|max-width: min\\(100%, 12.5ch\\)|white-space: normal" assets/site.css`

## Result

- Safari 기준 앱 상세 첫 카드에서 `EDSN Frame` 같은 긴 제목이 카드 밖으로 잘리지 않도록 보정됐다.

## Handoff / Next

- Safari에서 `EDSN Frame`과 `탐정의 녹음기` 상세 페이지 첫 화면을 각각 열어 제목이 자연스럽게 보이는지 확인한다.
