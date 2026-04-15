# Studio YONA Homepage MVP Plan

Date: 2026-04-05
Status: deployed-on-github-pages, operational-decisions-pending

## 1. Goal

- `Studio YONA`의 공식 회사 홈페이지를 최소 비용으로 빠르게 공개한다.
- 앱스토어 심사 대응에 필요한 필수 URL과 기본 회사 정보를 제공한다.
- 현재는 `EDSN Frame`을 중심으로 시작하되, `탐정의 녹음기`를 포함한 다앱 구조로 자연스럽게 확장할 수 있게 설계한다.

## 2. Inputs Confirmed

### Business direction

- 회사명: `Studio YONA`
- 현재 공개/준비 앱:
  - `EDSN Frame`
  - `탐정의 녹음기`
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
  - 상단 메뉴 노출이 거의 없는 첫 화면
  - 햄버거 오버레이 메뉴
  - 긴 스크롤 안에서 이어지는 정보 흐름

## 3. MVP Success Criteria

- App Store 제출에 필요한 회사/앱/법률/지원 URL이 모두 준비된다.
- `EDSN Frame` 앱 소개 페이지가 한/영으로 제공된다.
- `탐정의 녹음기` 앱 소개 페이지가 한/영으로 제공된다.
- `Studio YONA` 회사 소개와 제작 스토리가 포함된다.
- 고객지원과 문의 경로가 `studioyona.official@gmail.com`으로 연결된다.
- GitHub Pages에 바로 올릴 수 있는 정적 구조로 설계된다.
- 외부 서버, DB, 관리자 페이지 없이 운영 가능하다.
- 홈은 원페이지 랜딩 구조로 작동하고, 햄버거 메뉴에서 각 섹션으로 이동할 수 있다.

## 4. Recommended Product Scope

### In scope for MVP

- 정적 회사 홈페이지
- 한국어 우선 일반 페이지 + 영어 토글
- 원페이지 홈 랜딩
- 다앱 확장 가능한 앱 목록 구조
- `EDSN Frame` 앱 상세 소개
- `탐정의 녹음기` 앱 상세 소개
- 개인정보처리방침
- 이용약관
- 고객지원 / 문의하기
- GitHub Pages 배포 기준 문서화
- 로컬 미리보기 실행 흐름 정리

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
/                          -> Korean-first one-page landing, English via ?lang=en, section anchors
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
/ko/apps/detective-recorder/
/ko/apps/detective-recorder/legal/privacy/
/ko/apps/detective-recorder/legal/terms/
/en/apps/detective-recorder/
/en/apps/detective-recorder/legal/privacy/
/en/apps/detective-recorder/legal/terms/
/en/support/               -> compatibility wrapper to /support/?lang=en
/en/contact/               -> compatibility wrapper to /contact/?lang=en
/apps/edsn-frame/legal/privacy/
/apps/edsn-frame/legal/terms/
/apps/detective-recorder/legal/privacy/
/apps/detective-recorder/legal/terms/
```

운영 원칙:

- 일반 회사 페이지는 루트 경로에 한국어 우선으로 두고, 영어는 같은 경로에서 토글한다.
- 홈은 별도 하위 페이지로 분리하지 않고, 루트 경로에서 원페이지 랜딩으로 운영한다.
- 홈 내부 탐색은 `#home`, `#about`, `#apps`, `#support`, `#contact` 섹션 앵커를 사용한다.
- 공용 회사 소개/지원 페이지와 앱별 법률 페이지를 분리한다.
- App Store 제출용 URL은 neutral 앱별 개인정보처리방침/이용약관 URL을 사용하고, 한국어/영어 상세 정책은 그 아래에서 분기한다.
- 이후 앱이 늘어나면 같은 패턴으로 `/apps/<slug>/legal/...`를 추가한다.
- 기존 `/ko/...`, `/en/...` 일반 페이지 경로는 외부 링크와 호환을 위해 유지하되, 실제 콘텐츠는 루트 일반 페이지 기준으로 관리한다.

콘텐츠 기준점 규칙:

- 홈 원페이지 섹션은 브랜드 서사를 압축해 보여주는 요약판으로 취급한다.
- `/about/`, `/apps/`, `/support/`, `/contact/`는 각 주제의 원본 정보 페이지(source of truth)로 취급한다.
- 회사 소개, 앱 설명, 고객지원, 문의 안내 문구를 수정할 때는 먼저 각 개별 페이지를 기준으로 고치고, 그다음 홈 요약 섹션을 같은 의미로 맞춘다.
- 홈과 개별 페이지가 완전히 같은 분량을 유지할 필요는 없지만, 의미와 링크 대상은 어긋나지 않아야 한다.
- 향후 비개발자 요청으로 문구 수정이 들어오면 `원본 페이지 수정 -> 홈 요약 동기화` 순서를 기본 운영 규칙으로 삼는다.

## 5-1. URL Strategy

- canonical 도메인은 `https://www.studioyona.co.kr`로 고정한다.
- apex 도메인 `https://studioyona.co.kr`는 `www` canonical로 정리한다.
- `/`는 `www` 기준 한국어 우선 홈으로 사용한다.
- 일반 페이지 영어는 `/en/...` 복제 대신 `?lang=en` query parameter로 전환한다.
- 기존 `/en/...` 일반 페이지 경로는 `?lang=en` 기반 루트 일반 페이지로 연결하는 호환 래퍼로 둔다.
- 모든 내부 링크와 메타 태그는 canonical 기준 URL을 사용한다.

언어/canonical 운영 규칙:

- 한국어 일반 페이지의 canonical은 query parameter가 없는 기본 URL(`/`, `/about/`, `/apps/`, `/support/`, `/contact/`)을 사용한다.
- 영어 일반 페이지는 `?lang=en` URL로 접근하더라도 canonical은 같은 기본 경로를 유지하고, 영어는 UI 전환 상태로 취급한다.
- 따라서 일반 페이지는 SEO용 완전 분리 locale URL 세트가 아니라, 한국어 우선 canonical + 영어 토글 구조로 운영한다.
- App Store 제출이나 직접 공유가 필요한 법률 문서는 query parameter가 없는 앱별 고정 URL(`/apps/<slug>/legal/...`)을 기준으로 사용한다.
- 언어별 앱 상세/법률 페이지는 각 locale path를 유지하되, 필요 시 별도 `hreflang`은 추후 확장 항목으로 남긴다.
- 배포 후 브라우저 기준으로 `KR / EN` 전환 시 canonical, title, description이 의도와 어긋나지 않는지 수동 확인한다.

## 6. Page-by-Page Planning

### Home

목표:
- `Studio YONA`의 정체성과 현재 앱 라인업을 감성적인 원페이지 흐름으로 소개한다.

필수 섹션:
- 상단 소형 언어 전환
- 햄버거 오버레이 메뉴
- 큰 브랜드 메시지
- Studio YONA 소개 요약
- `EDSN Frame` 하이라이트
- `탐정의 녹음기` 소개
- 고객지원 섹션
- 문의하기 섹션
- 하단 법률/지원 링크

추가 방향:
- 첫 화면의 가장 큰 메시지는 앱명이 아니라 `Studio YONA` 회사명 중심으로 시작한다.
- 카피는 짧고 간결하게 유지한다.
- 홈 섹션 순서는 `메인 비주얼 -> 회사 소개 -> EDSN Frame -> 탐정의 녹음기 -> 고객지원 -> 문의하기`를 기본으로 한다.

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
- 다음 앱 카드

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

### App Detail: Detective's Recorder

목표:
- 다음 출시 앱의 방향과 핵심 기능을 미리 소개한다.

필수 섹션:
- 앱 이름
- 한 줄 소개
- 주요 기능 3~5개
- 출시 준비 상태
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

- 현재는 실제 이미지가 없으므로 텍스트 중심 MVP로 시작하되, 홈은 그라디언트/오브/노이즈 배경과 플레이스홀더 비주얼로 무드를 만든다.
- 스크린샷 위치는 placeholder 블록으로 설계한다.
- 추후 에셋 추가 시 레이아웃이 흔들리지 않게 슬롯 구조를 먼저 잡는다.

## 7-1. Home UX Direction

- 홈은 별도 멀티페이지 허브가 아니라 원페이지 랜딩으로 운영한다.
- 초기 화면에서는 상단 내비게이션을 드러내지 않고, 작은 `KR / EN` 전환과 햄버거 메뉴만 노출한다.
- 메뉴를 열면 전체 화면 오버레이에서 각 섹션으로 이동한다.
- 햄버거 메뉴 항목은 `홈 / 회사 소개 / 앱 소개 / 고객지원 / 문의하기`로 고정한다.
- 햄버거 오버레이 메뉴의 타이포는 레퍼런스 무드보다 과장되지 않게 조절하고, 화면을 채우더라도 텍스트가 과하게 커 보이지 않도록 한다.
- 메뉴 안의 보조 캡션 문구는 생략하고, 섹션 링크만 깔끔하게 보이는 방향을 우선한다.
- 카피는 `큰 문장 + 작은 설명` 구조를 기본으로 하고, 여백과 긴 스크롤 리듬을 우선한다.
- 첫 화면 카피는 회사명을 먼저 보여주고, 앱 이름은 아래 섹션에서 등장하게 배치한다.
- 첫 화면의 보조 카피는 `Tiny app studio` 기준으로 정리한다.
- 홈 앱 섹션은 각 앱마다 `앱 이름 + 한 줄 소개 + 주요 기능 3개 내외 + 상세 보기 버튼` 구조를 사용한다.
- 배경은 이미지 대신 추상적인 오브젝트, 그라디언트, 빛 번짐을 섞은 방향으로 설계한다.
- 줄바꿈은 모바일/태블릿/데스크톱에서 다르게 제어할 수 있도록 설계한다.
- 법률 링크는 상단에서 숨기고 앱 섹션 및 하단 문의 영역에 배치한다.
- `EDSN Frame`을 첫 번째 강조 앱으로 둔다.
- 전환은 과한 모션보다 조금 더 시네마틱한 등장 흐름을 목표로 한다.
- 정보 구조보다 감성적인 카피 배치와 시선 흐름을 우선한다.
- 스크롤 시 상단 브랜드/언어 전환/햄버거는 최소한의 고정 영역 또는 배경 보강을 통해 본문 타이포와 겹쳐 보이지 않게 설계한다.
- 첫 히어로 카드는 화면 중심선에 더 가깝게 놓이도록 수평 정렬을 관리한다.
- 비주얼 카드와 주요 섹션 사이의 세로 여백은 조금 넉넉하게 두어 답답함을 줄인다.

## 7-2. Visual QA Principles

- 핵심 카피는 모바일/태블릿/데스크톱에서 각각 의도한 줄바꿈으로 읽히는지 확인한다.
- 시네마틱 전환은 과한 애니메이션보다 부드러운 등장, 깊이감 있는 배경, 스크롤 리듬으로 판단한다.
- 홈 첫 화면은 상단 메뉴 노출이 거의 없는 정제된 첫인상을 유지해야 한다.
- 앱 섹션은 `EDSN Frame`이 먼저 시선을 받고, `탐정의 녹음기`는 다음 흐름으로 읽혀야 한다.
- 감성적인 카피 배치가 우선 목표이므로, 정보량이 많아질 때도 카드/목록 나열보다 문장 흐름을 먼저 점검한다.
- Safari 기준 좁은 창 폭에서도 가로 스크롤이 생기지 않아야 한다.
- 상단 브랜드 영역과 본문 카피가 스크롤 중 겹쳐 보이지 않는지 실제 브라우저에서 확인한다.

## 7-3. Current UI Refinement Backlog

이번 라운드에서 우선 반영해야 하는 화면 수정 항목:

- 햄버거 오버레이 메뉴의 폰트 크기를 한 단계 낮추고, 메뉴 보조 문구 `스크롤로 이어지는 스튜디오 소개`는 제거한다.
- 홈 히어로의 보조 카피는 `Small app studio` 대신 `Tiny app studio`를 사용한다.
- 스크롤 시 상단 `Studio YONA` 브랜드와 본문 타이포가 겹치지 않도록 헤더 고정 방식과 배경 처리 규칙을 보강한다.
- 회사 소개 문구에서는 `멀리 있는 사람보다` 표현을 제거해 더 직접적이고 단정한 톤으로 정리한다.
- Safari 창 너비가 좁아져도 가로 스크롤이 생기지 않도록 레이아웃 폭과 장식 요소의 overflow를 제어한다.
- 핵심 카피 줄바꿈은 자동 흐름에 맡기지 않고, 브레이크포인트별 의도된 줄바꿈을 우선 적용한다.

핵심 카피 줄바꿈 목표:

- `거창한 문제보다 / 진짜 생활의 / 불편에서 / 출발합니다.`
- `EDSN Frame / (어디서나 프레임)`에서 괄호 구간은 본문보다 작은 보조 타이포로 처리한다.
- `탐정의 녹음기`는 앱명 자체가 어색하게 쪼개지지 않도록 유지한다.
- `앱을 쓰다가 / 막히는 순간도 / 가볍게 / 물어볼 수 있게.`
- `Studio YONA에 / 대해 더 / 이야기하고 / 싶다면`
- 회사 소개 첫 비주얼 카드는 카드 내부 텍스트 정렬뿐 아니라 카드 블록 자체도 화면에서 중앙에 놓이도록 배치한다.

상세/일반 페이지 헤더 일관성:

- 홈에서 `앱 소개 보기`로 진입하는 앱 상세 페이지와, 그 안에서 연결되는 고객지원/문의 페이지도 홈과 같은 계열의 축약 헤더 경험을 따라야 한다.
- 앱 상세에서 `개인정보처리방침` 또는 `이용약관`으로 이동한 법률 페이지도 동일한 축약 헤더 경험을 따라야 한다.
- 즉, 상단에 예전식 카테고리 내비게이션을 다시 노출하기보다 `작은 브랜드 + 언어 전환 + 햄버거` 또는 그에 준하는 축약형 헤더로 수렴시키는 방향을 우선한다.
- 이 정리는 홈만의 스타일이 아니라 일반 페이지 전체의 브랜드 일관성 문제로 취급한다.

로컬 브라우저 캐시 대응:

- Safari처럼 정적 자산 캐시가 강한 환경에서는 `site.css`, `site.js`에 버전 쿼리 스트링을 붙여 최신 수정본을 강제로 읽게 한다.
- 로컬 미리보기는 preview query parameter와 자산 버전 둘 다 사용해, HTML과 CSS/JS가 동시에 최신 상태로 보이게 유지한다.
- Safari 캐시가 반복되면 기존 포트를 재사용하지 않는 Safari 전용 신규 미리보기 아이콘을 별도로 둔다.

우측 추상 비주얼 해석 원칙:

- 홈과 섹션 우측의 도형/오브젝트 비주얼은 실제 제품 스크린샷을 대신하는 `무드 비주얼`로 본다.
- 목적은 기능 설명이 아니라 여백, 감정선, 빛 번짐, 앱의 분위기를 보강하는 것이다.
- 사용자가 의미를 이해하기 어렵거나 정보 흐름을 방해한다고 느끼면, 장식 강도를 낮추거나 단순화하는 것을 허용한다.

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

### Local preview workflow

- 로컬 확인은 정적 서버 기반으로 진행한다.
- 바탕화면 `Studio YONA Local Preview.command` 또는 `scripts/local-preview.command`로 미리보기 창을 열 수 있게 유지한다.
- 로컬 미리보기는 `http://127.0.0.1:8123/` 기준으로 확인한다.
- 캐시 혼선을 줄이기 위해 preview query parameter를 붙여 새 창으로 여는 방식을 사용한다.

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
- 원페이지 홈 랜딩 골격

완료 조건:

- `index.html`, `/about/`, `/apps/`, `/support/`, `/contact/`가 한국어 우선 일반 페이지로 실제 파일로 존재한다.
- 일반 페이지에서 `?lang=en` 토글이 동작하고, 기존 `/ko/...`, `/en/...` 일반 페이지 경로가 새 구조로 연결된다.
- 홈에서 상단 소형 언어 전환과 햄버거 메뉴가 동작하고, 메뉴 클릭 시 각 섹션 앵커로 이동한다.
- `EDSN Frame`과 `탐정의 녹음기` 앱 상세 및 앱별 법률 페이지 경로가 실제 링크로 연결된다.
- 홈뿐 아니라 앱 상세/지원/문의 페이지도 브랜드 일관성을 해치지 않는 축약형 헤더 패턴으로 연결될 방향이 문서에 정의된다.
- placeholder 상태여도 레이아웃이 모바일/데스크톱에서 깨지지 않는다.
- 홈의 핵심 카피가 모바일/태블릿/데스크톱에서 의도한 줄바꿈으로 유지되는지 수동 검수한다.
- Safari 좁은 창 폭에서도 가로 스크롤이 생기지 않는지 수동 검수한다.

### Phase 2. Copy draft

- 브랜드 문구
- 회사 소개
- 앱 소개
- 고객지원/문의 문구
- 개인정보처리방침 / 이용약관 초안

완료 조건:

- 홈 원페이지 섹션, 회사 소개, 앱 소개, 지원, 문의 페이지에 사용자 공개 가능한 실제 문구가 들어간다.
- 한국어/영어 핵심 메시지가 의미상 대응되며, 기계 번역 티가 과하지 않다.
- `EDSN Frame`과 `탐정의 녹음기` 개인정보처리방침/이용약관 초안이 App Store 제출용으로 읽을 수 있는 수준으로 작성된다.
- Gmail 기반 문의 처리, 정적 홈페이지 특성, 실제 수집 범위가 정책 문서에 반영된다.
- 홈 요약 섹션과 `/about/`, `/apps/`, `/support/`, `/contact/` 원본 페이지 사이에 의미 충돌이 없는지 수동 검토한다.
- 홈 보조 카피와 회사 소개 문구에서 불필요하게 장황하거나 어색한 표현이 제거되고, 예: `Tiny app studio`, `멀리 있는 사람보다` 제거 같은 세부 톤 수정이 반영된다.

### Phase 3. Deployment setup

- GitHub Pages 설정
- 도메인 연결 준비
- 배포 체크리스트 정리

완료 조건:

- GitHub Pages에 올릴 수 있는 배포 파일 세트가 저장소 루트 기준으로 정리된다.
- `www.studioyona.co.kr` canonical 기준과 루트/apex 연결 원칙이 배포 문서 또는 설정 파일에 반영된다.
- GitHub Pages 업로드 후 사용자가 따라 할 수 있는 배포 절차가 README 또는 별도 문서에 정리된다.
- 로컬 정적 미리보기 기준으로 주요 링크와 페이지 진입이 모두 확인된다.
- 일반 페이지의 `KR / EN` 전환 시 canonical, title, description이 의도한 구조와 어긋나지 않는지 수동 검수한다.
- 배포 전 최종 브라우저 점검에서 오버레이 메뉴, 헤더 고정, 핵심 카피 줄바꿈, 추상 비주얼 강도가 레퍼런스 무드와 크게 어긋나지 않는지 확인한다.

## 12-1. Current Implementation Snapshot

- 홈은 원페이지 랜딩으로 구현되었고, `KR / EN` 전환과 햄버거 오버레이 메뉴를 사용한다.
- 홈 섹션 순서는 `메인 비주얼 -> 회사 소개 -> EDSN Frame -> 탐정의 녹음기 -> 고객지원 -> 문의하기`로 정리되었다.
- `EDSN Frame`과 `탐정의 녹음기` 모두 한/영 상세 페이지와 앱별 개인정보처리방침/이용약관 URL이 있다.
- 일반 페이지는 루트 경로 + `?lang=en` 구조를 유지하고, 기존 `/ko/...`, `/en/...` 일반 페이지는 호환용 래퍼로 남겨두었다.
- 로컬 미리보기는 `8123` 포트 기준으로 확인하도록 정리되어 있다.
- 다만 오버레이 메뉴 타이포 크기, 핵심 카피 줄바꿈, 스크롤 중 헤더 겹침, 좁은 Safari 창 overflow, 상세/일반 페이지 헤더의 구식 카테고리 노출은 아직 refinement 대상이다.

## 13. Risks

- 앱 실제 기능/권한/SDK 정보가 확정되지 않으면 개인정보처리방침 문구 일부는 추후 조정이 필요하다.
- 비주얼 에셋이 없으므로 첫 MVP는 텍스트 중심으로 보일 수 있다.
- 홈은 이미지를 대체하는 추상 비주얼 중심이므로, 실제 브랜드 이미지가 들어오면 무드가 더 달라질 수 있다.
- GitHub Pages 커스텀 도메인 연결은 GitHub 계정/저장소/도메인 DNS 상태에 따라 후속 조정이 필요하다.
- `/` 한국어 우선 진입과 완전한 언어 선택형 진입 사이의 UX 결정은 구현 직전에 확정해야 한다.
- Gmail 운영 방식이 바뀌면 개인정보처리방침의 제3자 처리 고지도 함께 갱신해야 한다.

## 13-1. Current Deployment Snapshot

- GitHub 웹 업로드와 이후 Git remote 정리를 통해 현재 정적 파일 세트가 `studioyona/studioyona-homepage` 저장소에 반영되었다.
- GitHub Pages는 `main` 브랜치 `/ (root)` 기준으로 활성화되었다.
- 커스텀 도메인 `www.studioyona.co.kr`는 GitHub Pages에 연결되었고, DNS check success 상태까지 확인되었다.
- 실제 Safari 브라우저에서 `https://www.studioyona.co.kr` 접속 확인이 끝난 상태다.
- GitHub Desktop / CLI fetch-push 흐름도 저장소명 오타 수정과 SSH remote 교정 이후 정상화되었다.

## 13-2. Open Operational Decisions

- GitHub Pages 무료/public 운영을 계속 유지할지, 향후 관리자 기능 도입 전에 다른 배포 방식 또는 유료 플랜으로 전환할지 결정이 필요하다.
- 따라서 현재 배포와 기본 Git 운영 흐름은 정상화되었고, 남은 의사결정은 장기 배포 방식에 대한 것뿐이다.

## 14. Recommended Next Step

다음 작업에서는 아래를 한 번에 진행하는 것이 효율적이다.

1. 실제 운영 브라우저 기준으로 한국어/영어 전환, 앱별 법률 링크, 지원 이메일 링크 최종 점검
2. `Enforce HTTPS` 활성화 여부 확인 및 적용
3. 앱별 실제 스크린샷/브랜드 에셋 반영
4. 정책 문구 최종 검토
5. GitHub Pages public 운영 지속 여부와 향후 관리자 기능 도입 시 배포 전략 결정

## 15. Done Criteria For Next Implementation Task

- 로컬에서 최신 홈 원페이지 구조가 안정적으로 열린다.
- 홈의 메뉴, 언어 전환, 섹션 이동이 자연스럽게 동작한다.
- 앱 소개 / 법률 / 지원 링크가 모두 연결된다.
- GitHub Pages 배포용 최소 설정이 준비된다.
- 핵심 카피 줄바꿈, 시네마틱 전환, 감성적인 카피 배치가 브라우저 기준으로 수동 검수된다.
- 홈 요약 섹션과 개별 원본 페이지 사이의 의미 불일치가 없다.
- 좁은 Safari 창에서도 가로 스크롤이 생기지 않는다.
- 홈에서 앱 상세/지원/문의로 이동했을 때도 예전식 상단 카테고리 내비게이션이 다시 튀어나오지 않는다.

## 16. Implementation Loop Rules

- 구현은 `Phase 1 -> Phase 2 -> Phase 3` 순서로 진행한다.
- 각 Phase는 완료 조건을 충족해야 다음 Phase로 넘어간다.
- 서브 에이전트 결과는 메인 에이전트가 통합 전에 구조/문구/링크를 검토한다.
- 리뷰에서 발견된 문제는 같은 작업 턴 안에서 우선 수정하고 다시 검증한다.
