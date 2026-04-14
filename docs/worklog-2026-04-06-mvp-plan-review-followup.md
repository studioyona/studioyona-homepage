# Worklog: MVP plan review follow-up

Date: 2026-04-06
Status: done
Related Files:
- docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md
- docs/CHANGELOG.md

## Goal
- 기획안 리뷰에서 지적된 운영/구조 모호성을 문서에 명확한 규칙으로 반영한다.

## Scope
- 포함 범위:
  - 콘텐츠 기준점(source of truth) 규칙 추가
  - 영어 일반 페이지 canonical 운영 기준 추가
  - 디자인/카피 품질의 수동 검수 완료 조건 추가
- 제외 범위:
  - 실제 UI 구현 수정
  - 배포 설정 변경

## Plan
1. 리뷰에서 나온 세 가지 보완 항목의 반영 위치를 정한다. -> verify: IA, URL 전략, 완료 조건 섹션에 각각 들어갈 수 있는지 확인한다.
2. 기획안에 운영 규칙을 추가한다. -> verify: 문서만 읽어도 콘텐츠 기준점, 영어 URL 정책, 디자인 QA 기준이 이해된다.
3. 변경 사실을 changelog와 worklog에 남긴다. -> verify: 관련 문서가 갱신된다.

## Findings
- 홈 원페이지와 개별 일반 페이지를 함께 운영하는 구조에서는 어느 쪽이 원본인지 문서에 명시하지 않으면 drift가 생기기 쉽다.
- 영어 일반 페이지를 `?lang=en`으로 운영할 때 canonical과 locale path의 역할을 구분하지 않으면 배포 후 판단이 흔들린다.
- 감성적인 카피 배치, 줄바꿈, 시네마틱 전환은 링크/파일 존재만으로는 완료 판단이 어렵다.

## Decisions
- 결정: 홈은 요약판, `/about/`, `/apps/`, `/support/`, `/contact/`는 원본 페이지로 문서에 못 박는다.
  이유: 비개발자 요청과 반복 수정 과정에서 문안 기준점을 잃지 않기 위해서다.
- 결정: 일반 영어 페이지는 canonical 분리 대상이 아니라 한국어 우선 canonical + UI 토글 구조로 유지한다.
  이유: 현재 정적 구조와 운영 복잡도 최소화 원칙에 더 잘 맞기 때문이다.
- 결정: 디자인 감도는 수동 검수 완료 조건으로 관리한다.
  이유: 레퍼런스 무드는 자동 검증만으로는 충분히 판단하기 어렵기 때문이다.

## Changes
- Information Architecture 아래에 홈 요약판과 개별 원본 페이지의 역할 분리를 추가했다.
- URL Strategy에 영어 일반 페이지 canonical 운영 규칙을 추가했다.
- `Visual QA Principles` 섹션을 추가하고, 각 Phase 완료 조건과 최종 done criteria에 수동 시각 검수 항목을 넣었다.

## Verification
- `nl -ba docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md | sed -n '97,180p'`
- `nl -ba docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md | sed -n '145,320p'`
- `nl -ba docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md | sed -n '374,460p'`
- 수정 후 문서에서 세 가지 리뷰 항목이 모두 명시적으로 읽히는지 수동 검토했다.

## Handoff / Next
- 현재 상태 요약:
  - 기획안은 콘텐츠 기준점, 영어 URL 운영, 디자인 QA 기준까지 포함한 실행 문서가 되었다.
- 남은 이슈 / 리스크:
  - 실제 구현이 더 바뀌면 QA 기준과 Current Implementation Snapshot도 함께 갱신해야 한다.
- 다음 세션 시작 TODO:
  - 홈 디자인 디테일 수정 시 수동 QA 항목까지 같이 체크
- 우선순위:
  - 1순위: 홈 UI 세부 보정
