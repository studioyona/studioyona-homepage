# Worklog: Studio YONA MVP plan review alignment

Date: 2026-04-05
Status: done
Related Files:
- docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md
- docs/ARCHITECTURE.md
- docs/CHANGELOG.md

## Goal
- MVP 기획안 리뷰에서 나온 주요 리스크를 문서에 반영한다.
- 이후 구현 단계에서 URL 체계와 법률 문서 범위가 흔들리지 않도록 기준을 고정한다.

## Scope
- 포함 범위:
  - MVP 기획안 수정
  - 구조 결정 문서 갱신
  - 변경 이력 반영
- 제외 범위:
  - 실제 정적 사이트 구현
  - 법률 문서 본문 초안 작성
  - GitHub Pages 설정 실행

## Plan
1. 리뷰 지적사항을 변경 항목으로 정리한다. -> verify: 반영 대상이 세 가지로 명확히 정리된다.
2. 기획안에 URL, 법률 문서, Gmail 처리 고지를 추가한다. -> verify: 관련 섹션에 구체 규칙이 명시된다.
3. CHANGELOG와 ARCHITECTURE를 동기화한다. -> verify: 변경 이력과 구조 결정이 문서에 남는다.

## Findings
- 다앱 구조를 전제로 하면서도 공용 법률 URL만 두면 App Store 메타데이터 연결이 모호해질 수 있다.
- `studioyona.co.kr`와 `www.studioyona.co.kr` 중 canonical 기준이 없으면 배포 직전에 링크 체계가 흔들릴 수 있다.
- Gmail 기반 문의는 비용 효율적이지만, 개인정보처리방침에서 제3자 메일 인프라 경유 가능성을 숨기면 안 된다.

## Decisions
- 결정: 앱스토어 제출용 개인정보처리방침/이용약관은 앱별 경로를 기본으로 한다.
  이유: 추후 다앱 구조에서도 각 앱의 정책 문서 책임 범위를 분리하기 쉽다.
- 결정: canonical 도메인은 `www.studioyona.co.kr`로 둔다.
  이유: 배포/내부 링크/App Store URL 기준을 하나로 맞추기 위함이다.
- 결정: Gmail 기반 문의 처리 경로를 정책 문서 작성 원칙에 포함한다.
  이유: 실제 개인정보 처리 경로를 정확히 반영해야 하기 때문이다.

## Changes
- MVP 기획안에 앱별 법률 URL 구조를 추가했다.
- URL strategy 섹션을 추가해 canonical 및 루트 진입 규칙을 명시했다.
- Gmail 기반 문의 처리 고지를 개인정보처리방침 작성 원칙과 보안 원칙에 반영했다.
- 구조 결정과 변경 이력을 각각 `ARCHITECTURE.md`, `CHANGELOG.md`에 반영했다.

## Verification
- 실행한 검증:
  - 수정된 문서 섹션 수동 검토
- 결과:
  - PASS
- 미실행 항목:
  - 실제 링크 라우팅 검증
  - 이유: 이번 작업은 기획 문서 정렬 범위만 포함한다.

## Handoff / Next
- 현재 상태 요약:
  - 구현 전 기준 문서가 리뷰 반영 상태로 정리됐다.
- 남은 이슈 / 리스크:
  - `/`의 한국어 우선 진입 여부는 구현 시 최종 선택이 필요하다.
  - 앱 실제 권한/SDK가 확정되면 정책 문구도 구체화해야 한다.
- 다음 세션 시작 TODO:
  - 앱별 법률 URL을 반영한 정적 파일 구조 구현
  - `EDSN Frame` 개인정보처리방침/이용약관 초안 작성
  - GitHub Pages canonical 및 custom domain 설정 파일 준비
- 우선순위:
  - 1순위: 정적 사이트 구현
  - 2순위: 법률 문서 초안
  - 3순위: 배포 설정
