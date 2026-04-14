# Worklog: Local preview launcher refresh fix

Date: 2026-04-06
Status: done
Related Files:
- docs/CHANGELOG.md

## Goal
- 바탕화면 로컬 미리보기 아이콘 실행 시 최신 홈페이지 수정사항이 바로 보이도록 보정한다.

## Scope
- 포함 범위:
  - 런처 동작 원인 확인
  - Safari 캐시 회피 방식 적용
- 제외 범위:
  - 홈페이지 본문 UI 변경
  - 배포용 설정 변경

## Plan
1. 런처 파일과 현재 8123 포트 응답을 점검한다. -> verify: 실제로 최신 HTML이 서빙되는지 확인한다.
2. 런처가 새 창에서 캐시 회피 URL을 열도록 조정한다. -> verify: 실행 시 timestamp query가 붙은 주소로 열린다.
3. 변경 사실을 문서에 남긴다. -> verify: worklog와 changelog가 갱신된다.

## Findings
- `127.0.0.1:8123`은 이미 최신 원페이지 홈 HTML을 정상적으로 서빙하고 있었다.
- 문제는 서버가 아니라 Safari가 같은 로컬 URL을 재사용하면서 예전 리소스를 강하게 캐시하는 쪽에 가까웠다.

## Decisions
- 결정: 바탕화면 런처는 매 실행마다 `?preview=<timestamp>` query를 붙여 새 창을 연다.
  이유: 로컬 서버 구조를 바꾸지 않고도 캐시 문제를 가장 간단하게 우회할 수 있기 때문이다.

## Changes
- 바탕화면 `Studio YONA Local Preview.command`가 `http://127.0.0.1:8123/?preview=<timestamp>` 형식으로 열리도록 조정했다.

## Verification
- `curl -I http://127.0.0.1:8123/`로 로컬 서버가 최신 홈을 `200 OK`로 제공하는지 확인했다.
- `curl -s http://127.0.0.1:8123/ | sed -n '1,80p'`로 원페이지 홈 마크업이 실제 응답에 포함되는지 확인했다.
- `zsh '/Users/Captain/Desktop/Studio YONA Local Preview.command'` 실행으로 런처가 새 Safari 창을 여는지 확인했다.

## Handoff / Next
- 현재 상태 요약:
  - 로컬 미리보기 아이콘은 최신 화면을 더 안정적으로 열도록 보정된 상태다.
- 남은 이슈 / 리스크:
  - Safari 자체 캐시가 극단적으로 남아 있는 경우에는 기존 창을 닫고 아이콘을 다시 실행하는 편이 가장 확실하다.
- 다음 세션 시작 TODO:
  - 필요 시 앱 상세 페이지도 별도 미리보기 아이콘으로 분리
- 우선순위:
  - 1순위: 홈 디자인 디테일 조정
