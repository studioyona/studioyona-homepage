# Worklog - Home Line Break Target Update

Date: 2026-04-06
Status: done

## Summary

- 사용자가 다시 지정한 홈 한국어 핵심 카피 3종의 줄바꿈 목표를 기획안과 실제 홈 마크업에 같이 반영했다.

## Scope

- `index.html`
- `docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md`
- `docs/CHANGELOG.md`

## Requested Targets

- `거창한 문제보다 / 진짜 생활의 / 불편에서 / 출발합니다.`
- `앱을 쓰다가 / 막히는 순간도 / 가볍게 / 물어볼 수 있게.`
- `Studio YONA에 / 대해 더 / 이야기하고 싶다면`

## Changes

- 홈 `About`, `Support`, `Contact` 섹션 제목의 `span` 단위를 새 줄바꿈 목표에 맞게 다시 쪼갰다.
- MVP 기획안의 refinement backlog도 같은 문구 기준으로 갱신했다.

## Verification

- `rg -n "진짜 생활의|불편에서|가볍게|물어볼 수 있게|Studio YONA에|대해 더|이야기하고 싶다면" index.html docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md`

## Result

- 문서와 구현이 같은 줄 단위를 기준으로 다시 맞춰졌다.

## Handoff / Next

- 실제 Safari 최대화 상태에서 세 문구가 기대한 줄 수로 보이는지 육안으로 한 번 더 확인한다.
