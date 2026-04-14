# Worklog: Hidden attribute menu fix

Date: 2026-04-05
Status: done
Related Files:
- assets/site.css
- docs/CHANGELOG.md

## Goal
- 일반 페이지 상단 메뉴가 한글/영문으로 중복 노출되는 현상을 막는다.

## Scope
- 포함 범위:
  - 공통 CSS의 `hidden` 처리 보강
- 제외 범위:
  - 언어 토글 구조 전면 리팩터링
  - 앱 상세/법률 페이지 수정

## Plan
1. 메뉴 중복 노출 원인을 확인한다. -> verify: 헤더가 언어별 중복 구조인지 확인된다.
2. `hidden` 속성이 항상 강제 적용되도록 공통 CSS를 수정한다. -> verify: 숨김 블록이 CSS 기준으로 확실히 감춰진다.

## Findings
- 일반 페이지는 한국어/영문 블록을 같은 HTML에 함께 두고 `hidden` 속성으로 전환하는 구조다.
- 공통 CSS에 `[hidden] { display: none !important; }` 규칙이 없어 브라우저/환경에 따라 중복 노출 가능성이 있었다.

## Decisions
- 결정: 언어별 블록 구조는 유지하고, `hidden` 속성의 CSS 보장을 먼저 추가한다.
  이유: 가장 작은 수정으로 중복 메뉴 버그를 안정적으로 막을 수 있기 때문이다.

## Changes
- `assets/site.css`에 `[hidden] { display: none !important; }` 규칙을 추가했다.

## Verification
- 실행한 검증:
  - `rg -n "\\[hidden\\]" assets/site.css`
- 결과:
  - PASS
- 미실행 항목:
  - 실제 브라우저 시각 확인
  - 이유: 현재는 로컬 파일 기반 수정 직후라 구조와 CSS 규칙 반영 여부를 먼저 확인했다.

## Handoff / Next
- 현재 상태 요약:
  - `hidden` 속성이 공통 CSS에서 강제 적용된다.
- 남은 이슈 / 리스크:
  - 만약 같은 현상이 다시 보이면 다음 단계는 일반 페이지 헤더를 단일 구조로 리팩터링하는 것이다.
- 다음 세션 시작 TODO:
  - 필요 시 단일 헤더 구조로 전환 검토
- 우선순위:
  - 1순위: 실제 브라우저 재확인
