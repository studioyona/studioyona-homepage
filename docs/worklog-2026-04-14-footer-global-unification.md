# Worklog - 2026-04-14 - footer-global-unification

## Goal

홈에 보이는 하단 별도구역과 동일한 footer strip을 모든 페이지에 적용한다.

## Scope

- 일반 페이지 footer 링크 구성 통일
- 앱 상세/정책 페이지 footer 링크 구성 통일
- 공통 footer strip 스타일 추가
- 변경 이력 기록

## Plan

1. 각 페이지 footer 마크업 차이를 확인한다. -> verify: 주요 footer tail 확인
2. 홈 기준의 법률 링크 4개 + 사업자 정보 구성으로 통일한다. -> verify: footer 문자열 확인
3. 공통 `footer-global` 스타일을 추가하고 changelog를 갱신한다. -> verify: CSS 규칙 확인

## Facts

- 홈 footer는 법률 링크 4개만 보여준다.
- 다른 페이지들은 앱 링크, 고객지원, 문의하기, 언어 전환 링크 등이 섞여 있었다.

## Decisions

- 모든 페이지 footer는 홈과 같은 정보 구조를 사용한다.
- 링크 구성은 현재 언어 기준 앱별 개인정보처리방침/이용약관 4개만 유지한다.

## Changes

- 일반/앱/정책 페이지 footer를 `footer-global` 구조로 통일
- footer 링크를 홈과 같은 법률 링크 4개로 정리
- 공통 footer strip 스타일 추가

## Verification

- `rg -n "footer-global|footer-legal" about/index.html apps/index.html support/index.html contact/index.html`
- `rg -n "footer-global|footer-legal" ko/apps/edsn-frame/index.html en/apps/edsn-frame/index.html ko/apps/detective-recorder/index.html en/apps/detective-recorder/index.html`
- `rg -n "footer-global" assets/site.css`

## Handoff / Next

- Safari에서 홈과 다른 페이지 footer strip이 같은 모양과 링크 구성으로 보이는지 확인한다.
