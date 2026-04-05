# Studio YONA Homepage MVP Plan

Date: 2026-04-05
Status: reviewed baseline

## 1. Goal

- `Studio YONA`의 공식 회사 홈페이지를 최소 비용으로 빠르게 공개한다.
- 앱스토어 심사 대응에 필요한 필수 URL과 기본 회사 정보를 제공한다.
- 현재는 `EDSN Frame` 1개 앱을 중심으로 시작하되, 향후 다앱 구조로 자연스럽게 확장할 수 있게 설계한다.

## 2. Inputs Confirmed

### Business direction

- 회사명: `Studio YONA`
- 출시 예정 앱: `EDSN Frame`
- 핵심 목적:
  - 1순위: 앱스토어 심사 대응
  - 2순위: 일반 사용자 대상 기본 정보 제공
- 운영 언어: 한국어 + 영어
- 도메인 방향: `www.studioyona.co.kr`

### Required pages

- 홈
- 회사 소개
- 앱 소개
- 개인정보처리방침
- 앱 이용약관
- 고객지원
- 문의하기

### Operating preferences

- 비용 최소화
- GitHub 업로드 기반의 쉬운 배포
- 유지보수는 Codex 중심
- 보안 이슈 최소화
- 고객지원은 이메일 링크 기반
- 비개발자 2명이 콘텐츠 변경 요청을 할 수 있음

### Brand direction

- 세련됨
- 미니멀
- 감성적
- 참고 무드:
  - 큰 타이포
  - 감성적인 이미지
  - 여백 중심 구성

## 3. MVP Success Criteria

- App Store 제출에 필요한 회사/앱/법률/지원 URL이 모두 준비된다.
- `EDSN Frame` 앱 소개 페이지가 한/영으로 제공된다.
- `Studio YONA` 회사 소개와 제작 스토리가 포함된다.
- 고객지원과 문의 경로가 `studioyona.official@gmail.com`으로 연결된다.
- GitHub Pages에 바로 올릴 수 있는 정적 구조로 설계된다.
- 외부 서버, DB, 관리자 페이지 없이 운영 가능하다.

## 4. Recommended Product Scope

### In scope for MVP

- 정적 회사 홈페이지
- 한국어 우선 일반 페이지 + 영어 토글
- 다앱 확장 가능한 앱 목록 구조
- `EDSN Frame` 앱 상세 소개
- 개인정보처리방침
- 이용약관
- 고객지원 / 문의하기
- GitHub Pages 배포 기준 문서화

### Out of scope for MVP

- CMS
- 관리자 페이지
- 블로그
- 실시간 문의 폼
- 파일 업로드 폼
- 사용자 계정
- 분석 도구
- 뉴스레터
- 데이터베이스

## 5. Information Architecture

추천 구조:

```text
/                          -> Korean-first home, English via ?lang=en
/about/                    -> Korean-first about, English via ?lang=en
/apps/                     -> Korean-first app listing, English via ?lang=en
/support/                  -> Korean-first support, English via ?lang=en
/contact/                  -> Korean-first contact, English via ?lang=en
/ko/                       -> compatibility wrapper to /
/ko/about/                 -> compatibility wrapper to /about/
/ko/apps/                  -> compatibility wrapper to /apps/
/ko/apps/edsn-frame/
/ko/apps/edsn-frame/legal/privacy/
/ko/apps/edsn-frame/legal/terms/
/ko/support/               -> compatibility wrapper to /support/
/ko/contact/               -> compatibility wrapper to /contact/
/en/                       -> compatibility wrapper to /?lang=en
/en/about/                 -> compatibility wrapper to /about/?lang=en
/en/apps/                  -> compatibility wrapper to /apps/?lang=en
/en/apps/edsn-frame/
/en/apps/edsn-frame/legal/privacy/
/en/apps/edsn-frame/legal/terms/
/en/support/               -> compatibility wrapper to /support/?lang=en
/en/contact/               -> compatibility wrapper to /contact/?lang=en
/apps/edsn-frame/legal/privacy/
/apps/edsn-frame/legal/terms/
```

운영 원칙:

- 일반 회사 페이지는 루트 경로에 한국어 우선으로 두고, 영어는 같은 경로에서 토글한다.
- 공용 회사 소개/지원 페이지와 앱별 법률 페이지를 분리한다.
- App Store 제출용 URL은 neutral 앱별 개인정보처리방침/이용약관 URL을 사용하고, 한국어/영어 상세 정책은 그 아래에서 분기한다.
- 이후 앱이 늘어나면 같은 패턴으로 `/apps/<slug>/legal/...`를 추가한다.
- 기존 `/ko/...`, `/en/...` 일반 페이지 경로는 외부 링크와 호환을 위해 유지하되, 실제 콘텐츠는 루트 일반 페이지 기준으로 관리한다.

## 5-1. URL Strategy

- canonical 도메인은 `https://www.studioyona.co.kr`로 고정한다.
- apex 도메인 `https://studioyona.co.kr`는 `www` canonical로 정리한다.
- `/`는 `www` 기준 한국어 우선 홈으로 사용한다.
- 일반 페이지 영어는 `/en/...` 복제 대신 `?lang=en` query parameter로 전환한다.
- 기존 `/en/...` 일반 페이지 경로는 `?lang=en` 기반 루트 일반 페이지로 연결하는 호환 래퍼로 둔다.
- 모든 내부 링크와 메타 태그는 canonical 기준 URL을 사용한다.

## 6. Page-by-Page Planning

### Home

목표:
- `Studio YONA`의 정체성과 현재 출시 예정 앱을 짧고 명확하게 소개한다.

필수 섹션:
- 브랜드 메시지
- Studio YONA 소개 요약
- 대표 앱 하이라이트
- 법률/지원 링크

### About

목표:
- 회사 소개와 제작 스토리를 간결하게 전달한다.

필수 섹션:
- 회사 소개 한 문단
- 제작 스토리
- 앞으로의 앱 확장 방향

### Apps

목표:
- 현재 앱과 향후 앱 구조를 한눈에 보여준다.

필수 섹션:
- 현재 공개 앱 카드
- upcoming placeholder

### App Detail: EDSN Frame

목표:
- 앱스토어 심사자와 일반 사용자에게 앱의 핵심 정보를 제공한다.

필수 섹션:
- 앱 이름
- 한 줄 소개
- 주요 기능 3~5개
- 출시 예정 시기
- 스크린샷 슬롯
- 지원 / 앱별 개인정보처리방침 / 앱별 이용약관 링크

### Support

목표:
- 지원 채널과 문의 방법을 명확히 안내한다.

필수 섹션:
- 지원 이메일
- 문의 시 포함하면 좋은 정보
- 응답 안내

### Contact

목표:
- 회사 일반 문의를 이메일로 받는다.

필수 섹션:
- 메일 링크
- 문의 범위 안내

### Privacy Policy

목표:
- 앱스토어 심사 대응용 개인정보처리방침을 제공한다.

작성 방향:
- `NARANGYO-4-CUTS` 문서 톤을 참고해 최소 수집, 실제 운영 범위, 제3자 도구 여부를 과장 없이 명시한다.
- 홈페이지와 앱의 데이터 처리 범위를 구분해 작성한다.
- 고객지원 이메일 수신/응답 과정에서 `Gmail/Google Workspace` 계열 메일 시스템을 통해 정보가 처리될 수 있음을 명시한다.
- 홈페이지 자체가 정적 사이트라는 점과, 홈페이지 방문 분석/추적 도구를 붙이지 않는다는 점을 분리해 서술한다.
- 사용자가 이메일에 첨부하는 스크린샷, 파일, 기기 정보가 문의 처리 과정에 포함될 수 있음을 반영한다.

### Terms of Service

목표:
- 앱 이용약관을 기본 수준으로 제공한다.

작성 방향:
- 서비스 설명, 사용자 책임, 지식재산권, 금지행위, 책임 제한, 변경 가능성을 포함한다.
- 웹사이트 안내와 앱 이용약관이 혼동되지 않도록 앱 중심으로 쓴다.

## 7. Content Strategy

### Tone

- 감성적이되 과장되지 않음
- 차분하고 세련된 문장
- 짧은 헤드라인 + 충분한 여백

### Copy strategy

- 홈과 앱 소개는 짧고 명확하게
- 회사 소개는 한 문단 중심
- 법률 문서는 간결하지만 필수 조항은 빠지지 않게
- App Store 심사자가 바로 이해할 수 있게 지원/정책 URL의 역할을 명확히 구분한다

### Asset strategy

- 현재는 실제 이미지가 없으므로 텍스트 중심 MVP로 시작한다.
- 스크린샷 위치는 placeholder 블록으로 설계한다.
- 추후 에셋 추가 시 레이아웃이 흔들리지 않게 슬롯 구조를 먼저 잡는다.

## 8. Technical Recommendation

### Recommended stack

- `HTML + CSS + minimal JavaScript`
- `GitHub Pages`
- `custom domain`

### Why

- 비용이 거의 0원이다.
- 서버가 없어 보안 표면이 작다.
- 사용자가 원하는 “HTML/CSS 파일 업로드 후 바로 반영” 흐름에 맞다.
- 추후 Codex가 수정하기도 쉽다.

### Non-recommended for MVP

- Next.js
- Astro
- headless CMS
- Firebase/Supabase 연동

이유:
- MVP 기준으로는 운영 복잡도와 보안 관리 범위가 불필요하게 커진다.

## 9. Deployment Plan

### Repository plan

- 저장소 이름 추천: `studioyona-homepage`
- GitHub Pages는 branch publishing 방식 사용
- 커스텀 도메인 `www.studioyona.co.kr` 연결
- GitHub Pages 설정 시 custom domain은 `www.studioyona.co.kr`를 기준으로 등록한다.

### Deployment flow

1. 정적 파일을 저장소에 반영
2. GitHub Pages가 브랜치 소스에서 자동 배포
3. DNS에서 `www`를 GitHub Pages로 연결
4. apex 도메인은 `www` canonical을 기준으로 함께 연결 또는 리디렉션 정리
5. 각 App Store 메타데이터에는 앱별 정책 URL을 연결

## 10. Security And Privacy Principles

- 동적 폼을 두지 않는다.
- 사용자 파일 업로드 기능을 두지 않는다.
- 외부 분석 스크립트를 붙이지 않는다.
- 고객지원은 이메일 링크만 사용한다.
- 민감정보를 입력하라는 안내를 하지 않는다.
- 개인정보처리방침에는 실제 수집 범위만 기재한다.
- 고객지원 이메일은 제3자 메일 인프라를 통과하므로, 문의 정보의 처리 경로와 보관 범위를 정책에 명시한다.
- 회사 공용 페이지와 앱별 정책 문서는 목적을 분리해 운영한다.

## 11. Legal Document Drafting Principles

참고 기준:

- `NARANGYO-4-CUTS`의 보안/삭제/외부 링크 관련 문서 톤

적용 원칙:

- 최소 수집
- 실제 운영 범위만 기재
- 과장된 compliance 표현 금지
- 향후 앱 기능 변경 시 문서도 함께 업데이트
- 앱별 정책 문서와 회사 공용 안내 문서를 혼용하지 않는다.
- 지원 이메일을 통해 수신되는 개인정보는 문의 대응 목적 범위로만 설명한다.

## 12. MVP Implementation Phases

### Phase 1. Static structure

- 공통 레이아웃
- 한국어 우선 일반 페이지와 언어 토글
- 앱 목록 / 앱 상세 / 법률 페이지 골격

완료 조건:

- `index.html`, `/about/`, `/apps/`, `/support/`, `/contact/`가 한국어 우선 일반 페이지로 실제 파일로 존재한다.
- 일반 페이지에서 `?lang=en` 토글이 동작하고, 기존 `/ko/...`, `/en/...` 일반 페이지 경로가 새 구조로 연결된다.
- 공통 헤더/푸터/언어 전환/핵심 네비게이션이 모든 주요 페이지에서 일관되게 동작한다.
- `EDSN Frame` 앱 상세와 앱별 법률 페이지 경로가 실제 링크로 연결된다.
- placeholder 상태여도 레이아웃이 모바일/데스크톱에서 깨지지 않는다.

### Phase 2. Copy draft

- 브랜드 문구
- 회사 소개
- 앱 소개
- 고객지원/문의 문구
- 개인정보처리방침 / 이용약관 초안

완료 조건:

- 홈, 회사 소개, 앱 소개, 지원, 문의 페이지에 사용자 공개 가능한 실제 문구가 들어간다.
- 한국어/영어 핵심 메시지가 의미상 대응되며, 기계 번역 티가 과하지 않다.
- `EDSN Frame` 개인정보처리방침과 이용약관 초안이 App Store 제출용으로 읽을 수 있는 수준으로 작성된다.
- Gmail 기반 문의 처리, 정적 홈페이지 특성, 실제 수집 범위가 정책 문서에 반영된다.

### Phase 3. Deployment setup

- GitHub Pages 설정
- 도메인 연결 준비
- 배포 체크리스트 정리

완료 조건:

- GitHub Pages에 올릴 수 있는 배포 파일 세트가 저장소 루트 기준으로 정리된다.
- `www.studioyona.co.kr` canonical 기준과 루트/apex 연결 원칙이 배포 문서 또는 설정 파일에 반영된다.
- GitHub Pages 업로드 후 사용자가 따라 할 수 있는 배포 절차가 README 또는 별도 문서에 정리된다.
- 로컬 정적 미리보기 기준으로 주요 링크와 페이지 진입이 모두 확인된다.

## 13. Risks

- 앱 실제 기능/권한/SDK 정보가 확정되지 않으면 개인정보처리방침 문구 일부는 추후 조정이 필요하다.
- 비주얼 에셋이 없으므로 첫 MVP는 텍스트 중심으로 보일 수 있다.
- GitHub Pages 커스텀 도메인 연결은 GitHub 계정/저장소/도메인 DNS 상태에 따라 후속 조정이 필요하다.
- `/` 한국어 우선 진입과 완전한 언어 선택형 진입 사이의 UX 결정은 구현 직전에 확정해야 한다.
- Gmail 운영 방식이 바뀌면 개인정보처리방침의 제3자 처리 고지도 함께 갱신해야 한다.

## 14. Recommended Next Step

다음 작업에서는 아래를 한 번에 진행하는 것이 효율적이다.

1. 정적 사이트 파일 구조 구현
2. 한/영 페이지 골격 작성
3. `EDSN Frame` 법률 문서 초안 구현
4. GitHub Pages 배포 기준 파일 작성

## 15. Done Criteria For Next Implementation Task

- 로컬에서 정적 페이지가 열린다.
- 일반 페이지에서 한/영 전환이 가능하다.
- 앱 소개 / 법률 / 지원 링크가 모두 연결된다.
- GitHub Pages 배포용 최소 설정이 준비된다.

## 16. Implementation Loop Rules

- 구현은 `Phase 1 -> Phase 2 -> Phase 3` 순서로 진행한다.
- 각 Phase는 완료 조건을 충족해야 다음 Phase로 넘어간다.
- 서브 에이전트 결과는 메인 에이전트가 통합 전에 구조/문구/링크를 검토한다.
- 리뷰에서 발견된 문제는 같은 작업 턴 안에서 우선 수정하고 다시 검증한다.
