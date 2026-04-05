# Worklog: Hosting.kr click guide for deployment

Date: 2026-04-05
Status: done
Related Files:
- docs/DEPLOYMENT.md
- docs/CHANGELOG.md

## Goal
- `summerjelly` GitHub 계정과 `호스팅케이알` 기준으로 실제 입력값이 들어간 DNS 가이드를 문서에 추가한다.
- 비개발자도 클릭 순서대로 따라갈 수 있게 배포 가이드를 더 구체화한다.

## Scope
- 포함 범위:
  - Hosting.kr DNS 설정 클릭 순서
  - `www` CNAME 실제 값
  - apex 설정 대안
  - 배포 직후 점검 순서
- 제외 범위:
  - 실제 GitHub 저장소 생성
  - 실제 DNS 반영
  - 외부 계정 작업

## Plan
1. Hosting.kr 공식 가이드에서 DNS 설정 순서를 확인한다. -> verify: 도메인 관리, 네임서버/DNS, 새 레코드 추가 순서가 확인된다.
2. GitHub Pages 대상값을 `summerjelly` 기준으로 구체화한다. -> verify: `summerjelly.github.io`가 문서에 반영된다.
3. 배포 문서에 Hosting.kr 전용 가이드를 추가한다. -> verify: 사용자가 문서만 보고 클릭 순서를 따라갈 수 있다.

## Findings
- Hosting.kr은 일반 CNAME에서 호스트 이름에 `www` 같은 서브도메인만 넣어야 하고, 루트 도메인은 일반 CNAME으로 설정할 수 없다.
- 루트 도메인 CNAME 대체는 `CNAME(Alias)`이며, 이는 `호스팅케이알 Cloud` 네임서버일 때만 지원된다.
- Hosting.kr 가이드는 DNS 반영에 최대 24~48시간이 걸릴 수 있다고 안내한다.

## Decisions
- 결정: 배포 문서에 `Hosting.kr Click Guide`를 별도 섹션으로 추가한다.
  이유: 사용자가 외부 UI를 열었을 때 그대로 따라가기 쉽게 만들기 위해서다.

## Changes
- `docs/DEPLOYMENT.md`에 Hosting.kr 전용 클릭 순서와 `summerjelly.github.io` 기준 입력 예시를 추가했다.
- `www` CNAME, apex `CNAME(Alias)`/A 레코드 대안, 배포 후 최종 점검 순서를 문서화했다.

## Verification
- 실행한 검증:
  - Hosting.kr 공식 가이드 확인
  - GitHub Pages custom domain 가이드 확인
- 결과:
  - PASS
- 미실행 항목:
  - 실제 Hosting.kr UI에서 저장 테스트
  - 이유: 외부 계정 접근과 DNS 변경이 필요하다.

## Handoff / Next
- 현재 상태 요약:
  - 배포 문서에 `summerjelly` + `호스팅케이알` 기준 실전 가이드가 추가됐다.
- 남은 이슈 / 리스크:
  - 실제 네임서버가 Hosting.kr Cloud인지 여부에 따라 apex 설정 방법이 달라질 수 있다.
- 다음 세션 시작 TODO:
  - 저장소 생성/업로드
  - GitHub Pages 활성화
  - Hosting.kr DNS 반영
- 우선순위:
  - 1순위: 실제 외부 설정
