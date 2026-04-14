# Worklog: Plan gap closure loop

Date: 2026-04-06
Status: done
Related Files:
- docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md
- index.html
- assets/site.css
- assets/site.js
- README.md
- docs/CHANGELOG.md

## Goal
- MVP 기획안의 단계별 완료 조건을 현재 구현 상태와 대조해 누락을 찾고, 최종 단계 완료까지 구현-리뷰-수정 루프를 수행한다.

## Scope
- 포함 범위:
  - 기획안 완료 조건 기준 gap analysis
  - 누락 구현 및 문서 동기화
  - 서브 에이전트 병렬 리뷰
  - 최종 검증
- 제외 범위:
  - 기획안 범위를 넘는 신규 기능 추가
  - 실제 GitHub Pages 배포 실행

## Plan
1. 기획안 완료 조건과 현재 구현 상태를 대조할 기준을 수집한다. -> verify: 필요한 문서와 핵심 구현 파일이 확인된다.
2. 서브 에이전트로 누락/리스크를 병렬 리뷰한다. -> verify: 독립적인 gap list가 수집된다.
3. 확인된 누락을 구현하고 관련 문서를 갱신한다. -> verify: 코드/문서 변경이 반영된다.
4. 검증 후 최종 완료 조건 충족 여부를 판단한다. -> verify: 명시한 완료 조건에 대해 PASS/PARTIAL을 정리할 수 있다.

## Findings
- 홈 히어로는 현재 구현 기준으로 이미 `Studio YONA`를 가장 큰 H1으로 사용하고 있어, 회사명 우선 위계 요구와 맞는 상태였다.
- 일반 페이지 footer는 이번 시점의 구현에서 이미 다앱 링크 구조를 상당 부분 반영하고 있었고, 남은 어긋남은 404 페이지와 로컬 미리보기 실행 흐름에 더 가까웠다.
- `scripts/local-preview.command`는 문서상 핵심 검증 흐름이지만, 실제 테스트에서는 서버가 유지되지 않아 별도 보강이 필요했다.

## Decisions
- 결정: 기획안 완료 기준 충족 여부는 문서, 링크, 언어 토글, 홈 UX, 로컬 검증 관점으로 나눠 점검한다.
  이유: 이번 작업은 단순 UI 수정이 아니라 “계획 대비 남은 누락 닫기”가 목적이기 때문이다.

## Handoff / Next
- 현재 상태 요약:
  - 저장소 내부 기준으로 Phase 1~3 완료 조건을 충족하는 데 필요한 구조, 링크, 로컬 미리보기 흐름까지 정리한 상태다.
- 남은 이슈 / 리스크:
  - 시네마틱 전환과 줄바꿈 품질은 브라우저 기준 수동 시각 검수가 여전히 중요하다.
  - 실제 GitHub Pages 업로드와 DNS 연결은 외부 작업으로 남아 있다.
- 다음 세션 시작 TODO:
  - 홈 카피, 간격, 모션 디테일을 추가 보정하면서 수동 QA 항목 재검토
  - GitHub Pages 업로드 및 도메인 연결 실행
- 우선순위:
  - 1순위: 시각 QA 마감

## Changes
- `404.html`을 현재 한국어 우선 루트/영문 토글 구조에 맞게 정리했다.
- `scripts/local-preview.command`를 실제로 `8123` 서버가 유지되도록 Terminal 기반 실행 흐름으로 보강했고, 바탕화면 미리보기 런처에도 같은 내용을 반영했다.
- `docs/CHANGELOG.md`에 이번 gap closure 결과를 기록했다.

## Verification
- 실행한 검증:
  - `node --check assets/site.js`
  - `curl -I http://127.0.0.1:8124/`
  - `curl -I 'http://127.0.0.1:8124/?lang=en'`
  - `curl -I http://127.0.0.1:8124/about/`
  - `curl -I http://127.0.0.1:8124/apps/`
  - `curl -I http://127.0.0.1:8124/ko/apps/detective-recorder/`
  - `curl -I http://127.0.0.1:8124/en/apps/detective-recorder/legal/privacy/`
  - `curl -I http://127.0.0.1:8124/404.html`
  - `curl -s http://127.0.0.1:8124/ | rg -n "<h1 class=\"hero-title\">Studio YONA</h1>|탐정의 녹음기|data-menu-toggle"`
  - `curl -s http://127.0.0.1:8124/404.html | rg -n "한국어 홈|English Home|탐정의 녹음기|/\\?lang=en|/apps/"`
  - `zsh scripts/local-preview.command`
  - `lsof -nP -iTCP:8123 -sTCP:LISTEN`
  - `curl -I 'http://127.0.0.1:8123/?preview=verify2'`
- 결과:
  - PARTIAL
- 미실행 항목:
  - 브라우저 기준 시네마틱 모션/줄바꿈의 최종 수동 시각 검수는 별도 진행 필요
  - 실제 GitHub Pages 업로드 / DNS 연결은 저장소 밖 외부 작업이라 이번 루프 범위에서 제외
