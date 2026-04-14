# Studio YONA HomePage

## Overview

- `Studio YONA`의 회사 및 앱 홍보용 홈페이지 프로젝트다.
- 1차 목표는 `앱스토어 심사 대응`에 필요한 필수 웹 페이지를 비용 최소화 방식으로 빠르게 공개하는 것이다.
- 현재는 `EDSN Frame`을 우선 공개하고, `탐정의 녹음기`를 포함한 다앱 구조로 확장하는 것을 전제로 한다.

## Current Status

- 이 저장소는 `초기 세팅`, `MVP 기획`, `원페이지 홈 리디자인`, `정적 사이트 MVP 구현`까지 완료된 상태다.
- 현재는 한국어 우선 원페이지 홈, 같은 경로 내 영어 토글, `EDSN Frame`과 `탐정의 녹음기` 앱 상세, 앱별 개인정보처리방침/이용약관, GitHub Pages 배포 문서가 들어 있다.
- 실제 온라인 배포는 아직 수행하지 않았고, 로컬 미리보기와 GitHub Pages 업로드만 남아 있다.

## Project Goals

- GitHub Pages 기반의 저비용 정적 홈페이지 운영
- 한국어/영어 이중 언어 지원
- 회사 소개, 앱 소개, 개인정보처리방침, 이용약관, 고객지원, 문의하기 제공
- 보안 리스크를 최소화하는 단순한 운영 방식 유지

## Planned Delivery

- 한국어 우선 원페이지 홈 + 보조 일반 페이지 구조
- 일반 페이지는 한국어 우선 루트 경로(`/`, `/about/`, `/apps/`, `/support/`, `/contact/`)에서 `?lang=en` 토글로 영어 전환
- 앱 상세/법률 문서는 언어별 경로 유지: `/ko/apps/...`, `/en/apps/...`
- 기존 `/ko/...`, `/en/...` 일반 페이지 경로는 호환용 래퍼로 유지
- App Store 제출을 위한 neutral 법률 URL과 언어별 정책 경로
- 문의 방식: `mailto:` 기반 이메일 연결
- 커스텀 도메인: `www.studioyona.co.kr`

## Useful Commands

```bash
# local preview launcher
zsh scripts/local-preview.command

# manual static preview
python3 -m http.server 8123

# file listing
rg --files
```

## Documentation

- [docs/DOCS_RULES.md](/Users/Captain/Projects/VibeCoding/Studio YONA HomePage/docs/DOCS_RULES.md)
- latest `docs/worklog-*.md`
- [docs/CHANGELOG.md](/Users/Captain/Projects/VibeCoding/Studio YONA HomePage/docs/CHANGELOG.md)
- [docs/ARCHITECTURE.md](/Users/Captain/Projects/VibeCoding/Studio YONA HomePage/docs/ARCHITECTURE.md)
- [docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md](/Users/Captain/Projects/VibeCoding/Studio YONA HomePage/docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md)
- [docs/DEPLOYMENT.md](/Users/Captain/Projects/VibeCoding/Studio YONA HomePage/docs/DEPLOYMENT.md)
