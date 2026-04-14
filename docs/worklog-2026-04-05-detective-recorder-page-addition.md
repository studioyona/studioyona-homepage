# Worklog: Detective's Recorder page addition

Date: 2026-04-05
Status: done
Related Files:
- apps/index.html
- ko/apps/detective-recorder/index.html
- en/apps/detective-recorder/index.html
- ko/apps/detective-recorder/legal/privacy/index.html
- ko/apps/detective-recorder/legal/terms/index.html
- en/apps/detective-recorder/legal/privacy/index.html
- en/apps/detective-recorder/legal/terms/index.html
- apps/detective-recorder/legal/privacy/index.html
- apps/detective-recorder/legal/terms/index.html
- docs/CHANGELOG.md

## Goal
- `EDSN Frame` 다음 앱인 `탐정의 녹음기` 소개 페이지를 기존 구조로 추가한다.

## Scope
- 포함 범위:
  - 한/영 앱 상세 페이지 추가
  - 앱별 개인정보처리방침/이용약관 초안 추가
  - neutral 법률 URL 추가
  - 앱 목록 페이지 링크 연결
- 제외 범위:
  - 새로운 이미지 자산 추가
  - 앱별 별도 디자인 변경

## Plan
1. 기존 EDSN Frame 구조를 새 앱용으로 복제한다. -> verify: 상세/법률 경로가 모두 생성된다.
2. 새 앱명과 기본 소개 문구, 내부 링크를 탐정의 녹음기 기준으로 바꾼다. -> verify: 모든 링크가 새 slug로 연결된다.
3. 앱 목록 페이지에서 새 페이지로 진입 가능하게 만든다. -> verify: apps 목록 카드와 hero CTA에서 접근 가능하다.

## Findings
- 현재 정보 구조는 앱 상세와 앱별 법률 문서를 세트로 두는 방식이라, 소개 페이지만 추가하면 내부 링크가 비게 된다.
- 따라서 기존 패턴을 유지하려면 최소한 앱 상세와 앱별 법률 URL을 같이 만드는 편이 더 자연스럽다.

## Decisions
- 결정: 새 앱 slug는 `detective-recorder`로 사용한다.
  이유: URL에 안정적으로 사용할 수 있는 ASCII slug가 필요하기 때문이다.

## Changes
- `탐정의 녹음기` 한/영 앱 상세 페이지를 추가했다.
- `탐정의 녹음기` 한/영 개인정보처리방침/이용약관 및 neutral 법률 URL을 추가했다.
- 앱 목록 hero CTA와 카드에서 새 앱 상세 페이지로 이동할 수 있게 연결했다.

## Verification
- 실행한 검증:
  - `find ko/apps/detective-recorder en/apps/detective-recorder apps/detective-recorder -maxdepth 3 -type f | sort`
  - `rg -n "EDSN Frame|/apps/edsn-frame/" ko/apps/detective-recorder en/apps/detective-recorder apps/detective-recorder`
- 결과:
  - PASS
- 미실행 항목:
  - 실제 브라우저에서 새 페이지 탐색 확인
  - 이유: 현재는 파일 추가와 링크 정합성 중심으로 점검했다.

## Handoff / Next
- 현재 상태 요약:
  - `탐정의 녹음기`가 기존 앱 구조와 같은 방식으로 사이트에 추가됐다.
- 남은 이슈 / 리스크:
  - 앱별 실제 법률 문구는 출시 전 기능 확정 시 더 구체화가 필요할 수 있다.
- 다음 세션 시작 TODO:
  - 새 앱 카피 미세 조정
  - 실제 브라우저 확인
- 우선순위:
  - 1순위: 로컬 미리보기 검토
