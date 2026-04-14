# Worklog: Home simplification and EN link fix

Date: 2026-04-05
Status: done
Related Files:
- index.html
- about/index.html
- apps/index.html
- support/index.html
- contact/index.html
- assets/site.css
- docs/CHANGELOG.md

## Goal
- 홈 화면에서 불필요한 정보 블록을 제거해 더 간결하게 만든다.
- 영어 상태에서 일반 페이지 탐색 시 `?lang=en`가 유지되도록 수정한다.

## Scope
- 포함 범위:
  - 홈 화면의 `한국어`, `Light`, `Overview`, `Navigation` 관련 블록 제거
  - 일반 페이지 영문 헤더 내비게이션 링크 수정
  - 홈 레이아웃 단일 컬럼 대응
- 제외 범위:
  - 앱 상세/법률 페이지 구조 변경
  - 회사 소개/지원 페이지 본문 카피 변경

## Plan
1. 홈에서 제거할 블록과 영어 링크가 깨지는 위치를 확인한다. -> verify: 홈 불필요 섹션과 EN 헤더 링크 문제가 식별된다.
2. 홈을 더 간결한 단일 히어로 구조로 정리한다. -> verify: 삭제 요청 블록이 화면에서 사라진다.
3. 일반 페이지 영문 헤더 링크를 `?lang=en` 유지 방식으로 수정한다. -> verify: EN 상태에서 Home/About/Apps/Support/Contact 이동 시 영어 상태가 유지된다.

## Findings
- 홈은 한/영 히어로 외에 설명용 카드와 보조 섹션이 많아 첫 인상이 다소 산만했다.
- EN 헤더 메뉴 링크가 대부분 루트 경로(`/about/`, `/apps/`)만 가리켜, 이동 즉시 한국어 상태로 돌아가는 문제가 있었다.

## Decisions
- 결정: 홈은 히어로만 남기고 나머지 보조 설명 섹션은 제거한다.
  이유: 사용자가 원하는 더 미니멀한 첫 화면에 맞추기 위해서다.

## Changes
- 홈 화면에서 `한국어`, `Light`, `Overview`, `Navigation` 관련 블록을 제거했다.
- 홈 히어로를 단일 컬럼 레이아웃으로 정리했다.
- 일반 페이지 영문 헤더 내비게이션을 `/?lang=en`, `/about/?lang=en` 등으로 수정했다.

## Verification
- 실행한 검증:
  - 수동 마크업 점검
  - 일반 페이지 EN 헤더 링크 점검
- 결과:
  - PASS
- 미실행 항목:
  - 실제 브라우저에서 EN 상태 이동 체험 확인
  - 이유: 현재는 로컬 코드 수정 직후라 링크 경로 정합성을 먼저 검토했다.

## Handoff / Next
- 현재 상태 요약:
  - 홈이 더 간결해졌고, 일반 페이지 EN 헤더에서 영어 상태가 유지되도록 링크가 수정됐다.
- 남은 이슈 / 리스크:
  - 같은 언어 유지 요구가 앱 상세/법률 페이지까지 필요하면 별도 정책을 정해야 한다.
- 다음 세션 시작 TODO:
  - 홈 타이포/문구 추가 미세 조정
  - 실제 브라우저 동작 재확인
- 우선순위:
  - 1순위: 로컬 미리보기 확인
