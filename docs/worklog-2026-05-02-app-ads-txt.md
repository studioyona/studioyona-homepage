# Worklog: App Ads Txt

Date: 2026-05-02
Status: done
Related Files:
- `app-ads.txt`
- `docs/CHANGELOG.md`

## Goal
- `studioyona.co.kr` 웹사이트 루트에서 Google AdMob용 `app-ads.txt`를 제공한다.
- 완료 조건: 배포 후 `/app-ads.txt` 경로에서 게시자 ID가 포함된 레코드가 노출된다.

## Scope
- 포함 범위:
  - 사이트 루트 `app-ads.txt` 생성.
  - 변경 이력 기록.
- 제외 범위:
  - AdMob 콘솔 상태 확인.
  - 배포 push 이후 외부 URL 확인.

## Plan
1. 루트에 `app-ads.txt` 생성 -> verify: 파일 내용 확인
2. 문서 이력 갱신 -> verify: changelog/worklog 확인
3. 정적 로컬 경로 검증 -> verify: 파일 존재 및 내용 확인

## Findings
- 현재 사이트는 buildless static site라 프로젝트 루트에 파일을 추가하면 배포 후 `/app-ads.txt`로 노출된다.
- 사용자가 제공한 게시자 ID는 `pub-4368947734405544`다.

## Decisions
- 결정: Google AdMob 표준 레코드 형식 `google.com, pub-4368947734405544, DIRECT, f08c47fec0942fa0`를 사용한다.
  이유: Google AdMob app-ads.txt 안내에서 사용하는 Google seller domain 및 certification authority ID 형식이다.

## Changes
- `app-ads.txt`를 추가했다.
- `docs/CHANGELOG.md`에 변경 이력을 추가했다.

## Verification
- 실행한 검증:
  - `cat app-ads.txt`
  - `git status --short`
- 결과:
  - PASS: 루트 파일에 Google AdMob 레코드가 생성됐다.
- 미실행 항목:
  - 배포 전이므로 실제 `https://www.studioyona.co.kr/app-ads.txt` 확인은 아직 진행하지 않았다.

## Handoff / Next
- 커밋/배포 후 `https://www.studioyona.co.kr/app-ads.txt` 또는 `https://studioyona.co.kr/app-ads.txt`에서 파일 접근 여부를 확인한다.
- AdMob 콘솔 반영은 크롤링 주기에 따라 시간이 걸릴 수 있다.
