# Worklog - 2026-04-14 - home-about-routing

## Goal

홈에서 회사 소개 상세 내용으로 더 자연스럽게 진입할 수 있게 한다.

## Scope

- 홈 햄버거 메뉴의 `회사 소개` 링크 조정
- 홈 About 요약 섹션에 상세 페이지 이동 버튼 추가
- 변경 이력 기록

## Plan

1. 홈 메뉴와 About 섹션 구조를 확인한다. -> verify: `index.html` 링크/섹션 확인
2. 메뉴와 CTA를 상세 `/about/` 경로로 연결한다. -> verify: `index.html` 수정 반영 확인
3. changelog를 갱신한다. -> verify: 변경 이력 문구 확인

## Facts

- 홈 햄버거 메뉴의 `회사 소개`는 기존에 `#about` 요약 섹션으로만 이동했다.
- 상세한 `우리 이야기`, `걸어온 길` 내용은 `/about/` 페이지에만 있다.

## Decisions

- 홈 햄버거 메뉴의 `회사 소개`는 상세 페이지 `/about/`로 이동하게 바꾼다.
- 홈 About 요약 섹션에는 별도의 상세 이동 버튼을 추가한다.

## Changes

- 홈 메뉴 `회사 소개` 링크를 `/about/`와 `/about/?lang=en`으로 변경
- 홈 About 요약 섹션에 `회사 소개 더 보기` / `Read our story` 버튼 추가

## Verification

- `rg -n "href=\"/about/|href=\"/about/\\?lang=en|회사 소개 더 보기|Read our story" index.html`

## Handoff / Next

- Safari에서 홈 메뉴와 About 버튼 흐름을 직접 눌러 확인한다.
