# Worklog - Fixed Line Break Refinement

Date: 2026-04-06
Status: done

## Summary

- 홈 한국어 핵심 카피의 줄바꿈이 최대화 화면에서 다시 흐트러지는 문제를 보강했다.

## Scope

- `assets/site.css`
- `docs/CHANGELOG.md`

## Requested Fixes

- 창 크기가 커져도 아래 문구들의 줄바꿈이 의도대로 유지되게 보정
  - `거창한 문제보다 / 진짜 생활의 불편에서 / 출발합니다.`
  - `EDSN Frame / (어디서나 프레임)`
  - `탐정의 녹음기`
  - `앱을 쓰다가 / 막히는 순간도 / 가볍게 물어볼 수 있게.`
  - `Studio YONA에 대해 / 더 이야기하고 / 싶다면`

## Changes

- `line-stack-title` 계열 제목의 `max-width` 제한을 풀었다.
- `641px` 이상 화면에서는 각 줄 조각과 앱 제목 보조 타이포에 `white-space: nowrap`를 적용했다.
- `EDSN Frame` 보조 괄호 문구는 더 작은 크기로 조정했다.
- 모바일에서는 다시 자연스러운 줄바꿈이 가능하도록 `white-space: normal`을 유지했다.

## Verification

- `rg -n "line-stack-title|white-space: nowrap|app-title-sub" assets/site.css`
- `curl -s http://127.0.0.1:8123/ | rg -n "line-stack-title|app-title-sub|탐정의 녹음기|Studio YONA에 대해|막히는 순간도"`

## Result

- 데스크톱/확대 화면에서는 요청한 줄 단위가 더 강하게 유지되도록 보정됐다.

## Handoff / Next

- 실제 Safari에서 창을 최대화한 뒤, 위 다섯 문구가 정확히 기대한 줄 수로 보이는지 다시 육안 확인한다.
