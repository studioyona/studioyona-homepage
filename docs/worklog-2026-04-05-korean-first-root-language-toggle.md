# Worklog: Korean-first root and general page language toggle

Date: 2026-04-05
Status: done
Related Files:
- index.html
- about/index.html
- apps/index.html
- support/index.html
- contact/index.html
- assets/site.js
- docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md
- docs/CHANGELOG.md
- docs/ARCHITECTURE.md

## Goal
- 일반 페이지를 한국어 우선 루트 경로 기준으로 재정렬한다.
- 영어는 별도 일반 페이지를 복제하지 않고 같은 경로에서 토글되도록 만든다.
- 문서와 실제 구현 구조를 다시 일치시킨다.

## Scope
- 포함 범위:
  - 루트 일반 페이지의 한국어 우선 구조
  - `?lang=en` 기반 영어 토글
  - 기존 `/ko/...`, `/en/...` 일반 페이지 경로의 호환 래퍼 처리
  - 관련 문서 동기화
- 제외 범위:
  - 앱 상세/법률 페이지의 URL 체계 변경
  - 실제 GitHub Pages 배포
  - DNS 설정

## Plan
1. 루트 일반 페이지와 언어 토글 스크립트를 정리한다. -> verify: `/`, `/about/`, `/apps/`, `/support/`, `/contact/`가 한국어 기본으로 열린다.
2. 기존 일반 페이지 경로를 호환용 래퍼로 바꾼다. -> verify: `/ko/...`, `/en/...`가 새 경로로 자연스럽게 연결된다.
3. 문서와 검증 기록을 최신 구조에 맞춘다. -> verify: README, MVP plan, architecture, changelog, worklog가 같은 구조를 설명한다.

## Findings
- 일반 페이지는 앱/법률 페이지와 달리 App Store 제출 URL에 직접 묶이지 않으므로 같은 경로에서 언어 토글로 단순화해도 운영 리스크가 낮다.
- 앱 상세와 법률 페이지는 언어별 직접 링크가 더 안전하므로 별도 경로를 유지하는 편이 적합하다.
- 기존 리뷰에서 지적된 `/`의 언어 혼선은 한국어 우선 홈으로 정리하면 해소된다.

## Decisions
- 결정: 일반 페이지는 한국어 우선 루트 경로에 두고 영어는 `?lang=en` 토글로 제공한다.
  이유: 비개발자 운영 부담과 일반 페이지 유지보수 비용을 줄이기 위해서다.
- 결정: 앱 상세/법률 페이지는 계속 `/ko/...`, `/en/...` 언어별 직접 경로를 유지한다.
  이유: App Store 제출 URL과 문서 명확성을 유지해야 하기 때문이다.

## Changes
- 루트 일반 페이지를 한국어 우선 구조로 재구성했다.
- `assets/site.js`에 query parameter 기반 언어 토글 로직을 추가했다.
- `/ko/...`, `/en/...` 일반 페이지를 새 구조로 연결하는 호환 래퍼로 전환했다.
- README와 기획/구조 문서를 최신 URL 전략에 맞게 갱신했다.

## Verification
- 실행한 검증:
  - `curl -I http://127.0.0.1:8000/`
  - `curl -I 'http://127.0.0.1:8000/about/?lang=en'`
  - `curl -I http://127.0.0.1:8000/ko/support/`
  - `curl -I 'http://127.0.0.1:8000/contact/?lang=en'`
- 결과:
  - PASS
- 미실행 항목:
  - 실제 브라우저에서 토글 클릭 후 히스토리/상태 점검
  - 이유: 현재는 정적 파일 구조와 응답 확인 위주로 검증했다.

## Handoff / Next
- 현재 상태 요약:
  - 일반 페이지는 한국어 우선 루트 기준으로 정리됐고, 영어는 같은 경로 안에서 토글된다.
- 남은 이슈 / 리스크:
  - 앱/법률 페이지의 인라인 스타일 중 일부는 추후 공통 CSS로 더 끌어올릴 수 있다.
  - 실제 GitHub Pages 배포 후 query parameter 기반 언어 토글과 canonical 동작을 다시 확인해야 한다.
- 다음 세션 시작 TODO:
  - 실제 GitHub Pages 업로드 후 브라우저 기준 최종 QA
  - 필요 시 앱/법률 페이지 공통 스타일 추가 정리
- 우선순위:
  - 1순위: 실제 배포 전 최종 QA
