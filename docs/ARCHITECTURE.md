# Architecture

## Current Structure

- 작업 기록은 작업별 `worklog` 파일로 남긴다.
- 실제 변경 이력은 `CHANGELOG.md`에 누적한다.
- 구조적 결정과 장기 규칙은 `ARCHITECTURE.md`에 유지한다.
- handoff는 별도 파일이 아니라 worklog의 `Handoff / Next` 섹션에 통합한다.

## Decisions

### 2026-04-05 - Documentation System Bootstrapped For Homepage Project

- Context:
  - `Studio YONA HomePage` 워크스페이스는 실질적인 문서 체계 없이 빈 디렉터리 상태로 시작했다.
  - 이후 Codex 기반 작업을 지속하려면 문서 읽기 순서와 기록 방식이 먼저 필요했다.
- Decision:
  - `project-initial-setup` 기준으로 최소 문서 세트를 먼저 만든다.
  - 기본 읽기 순서는 `README -> DOCS_RULES -> latest worklog -> CHANGELOG -> ARCHITECTURE`로 둔다.
- Consequences:
  - 장점:
    - 다음 세션에서도 같은 기준으로 빠르게 재진입할 수 있다.
    - 초기 구현 전에 기획/결정/변경 이력이 분산되지 않는다.
  - 단점:
    - 초기 문서 작업이 구현보다 먼저 생기므로 첫 커밋이 문서 중심이 된다.

### 2026-04-05 - Homepage MVP Will Start As A Buildless Static Site

- Context:
  - 사용자는 비용 최소화, 쉬운 유지보수, GitHub 업로드 기반 배포, 보안 이슈 최소화를 원한다.
  - 현재 운영 인력은 비개발자 2명이고, 고객 문의는 이메일 링크만으로 충분하다.
- Decision:
  - MVP는 GitHub Pages에 배포하는 `buildless static site`로 시작한다.
  - 구조는 한국어/영어 분리, 다앱 확장, 앱별 법률 페이지 연결을 전제로 설계한다.
  - 동적 폼, 관리자 페이지, DB, 외부 분석 스크립트는 초기 범위에서 제외한다.
- Consequences:
  - 장점:
    - 비용이 거의 없고 보안 표면이 작다.
    - HTML/CSS/JS만으로 배포할 수 있어 운영이 단순하다.
    - App Store 심사 대응에 필요한 URL 세트를 빠르게 확보할 수 있다.
  - 단점:
    - 콘텐츠 업데이트 자동화나 비개발자용 CMS는 제공되지 않는다.
    - 페이지 수가 늘어나면 정적 구조 관리 규칙이 더 중요해진다.

### 2026-04-05 - Legal URLs Are App-Scoped And Canonical Domain Is WWW

- Context:
  - MVP 기획안 리뷰에서 다앱 구조인데도 법률 문서 URL이 공용 경로만 있는 점, `www`/apex/언어 진입 규칙이 불명확한 점, Gmail 기반 문의 처리의 제3자 경로 고지가 빠진 점이 확인됐다.
- Decision:
  - 앱스토어 제출용 개인정보처리방침/이용약관은 앱별 경로(`/apps/<slug>/legal/...`)를 사용한다.
  - canonical 도메인은 `https://www.studioyona.co.kr`로 고정하고, apex는 `www` 기준으로 정리한다.
  - 지원 이메일을 통한 문의 데이터는 제3자 메일 인프라를 통과할 수 있음을 정책 문서에 명시한다.
- Consequences:
  - 장점:
    - 앱이 늘어나도 각 앱의 법률 문서와 App Store 메타데이터 연결이 명확해진다.
    - 배포와 내부 링크, canonical 설정이 한 기준으로 정리된다.
    - 실제 처리 경로를 숨기지 않아 개인정보처리방침의 정확도가 올라간다.
  - 단점:
    - 초기 MVP에서도 공용 페이지와 앱별 문서를 함께 관리해야 하므로 파일 구조가 약간 더 깊어진다.

### 2026-04-05 - App Store Legal Entry Uses Neutral App Routes

- Context:
  - 리뷰에서 App Store 제출용 법률 URL이 `/ko/`와 `/en/`에만 있으면 제출 기준 URL이 흔들릴 수 있다는 점이 확인됐다.
- Decision:
  - App Store 제출용 기본 정책 URL은 `/apps/<slug>/legal/privacy/`, `/apps/<slug>/legal/terms/` 같은 neutral 앱 경로를 사용한다.
  - 언어별 전문 문서는 계속 `/ko/...`, `/en/...`에 두고 neutral 경로는 언어 선택/진입용으로 사용한다.
- Consequences:
  - 장점:
    - App Store 메타데이터에 넣을 단일 안정 URL을 확보할 수 있다.
    - 앱이 늘어나도 정책 URL 규칙을 일관되게 유지할 수 있다.
  - 단점:
    - neutral entry와 locale 문서를 함께 관리해야 한다.

### 2026-04-05 - General Pages Use Korean-First Root Routes With In-Page English Toggle

- Context:
  - 일반 페이지까지 `/ko/...`, `/en/...`를 완전히 분리하면 작은 정적 사이트에서 중복 관리가 커진다.
  - 리뷰에서는 `/`가 한국어 우선 홈인지, neutral landing인지 실제 구현과 문서가 어긋나 있다는 점이 드러났다.
- Decision:
  - 홈, 회사 소개, 앱 목록, 고객지원, 문의하기 같은 일반 페이지는 루트 경로(`/`, `/about/`, `/apps/`, `/support/`, `/contact/`)에 한국어 우선으로 둔다.
  - 영어는 같은 경로에서 `?lang=en` query parameter와 공통 스크립트로 전환한다.
  - 기존 `/ko/...`, `/en/...` 일반 페이지 경로는 외부 링크 호환을 위한 래퍼로 유지한다.
  - 앱 상세와 법률 페이지는 계속 `/ko/...`, `/en/...` 직접 경로를 사용한다.
- Consequences:
  - 장점:
    - 일반 페이지 유지보수 포인트를 줄일 수 있다.
    - `/`의 언어 의미가 한국어 우선 홈으로 명확해진다.
    - 일반 페이지와 앱/법률 페이지의 URL 전략을 목적에 맞게 나눌 수 있다.
  - 단점:
    - 영어 일반 페이지는 query parameter에 의존하므로 URL 체계가 완전한 locale path 분리보다 덜 직관적일 수 있다.
    - canonical과 language toggle 동작은 배포 후 브라우저 기준 재확인이 필요하다.
