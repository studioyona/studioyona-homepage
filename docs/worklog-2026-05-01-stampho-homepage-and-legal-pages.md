# Worklog: Stampho Homepage And Legal Pages

Date: 2026-05-01
Status: done
Related Files:
- `index.html`
- `apps/index.html`
- `assets/site.css`
- `ko/apps/stampho/index.html`
- `en/apps/stampho/index.html`
- `apps/stampho/legal/privacy/index.html`
- `apps/stampho/legal/terms/index.html`
- `ko/apps/stampho/legal/privacy/index.html`
- `ko/apps/stampho/legal/terms/index.html`
- `en/apps/stampho/legal/privacy/index.html`
- `en/apps/stampho/legal/terms/index.html`
- `docs/CHANGELOG.md`

## Goal
- Studio YONA 홈페이지에 새 앱 `Stampho`를 EDSN Frame 아래 두 번째 출시 예정 앱으로 추가한다.
- 다운로드 폴더의 Stampho 한글 개인정보처리방침/이용약관 초안을 참고해 공개용 한글/영문 법률 페이지를 만든다.

## Scope
- 포함 범위:
  - 홈 앱 섹션과 `/apps/` 앱 목록의 Stampho 노출.
  - Stampho 한글/영문 앱 상세 페이지.
  - Stampho neutral App Store 법률 진입 URL과 한글/영문 전문 페이지.
  - 문서 변경 이력 기록.
- 제외 범위:
  - 실제 App Store 심사 제출.
  - 법률 전문가 검토.
  - 실제 앱 스크린샷/스토어 배지 추가.

## Plan
1. 홈/앱 목록에 Stampho 추가 -> verify: EDSN Frame 다음에 노출되는지 확인
2. Stampho 앱 상세 페이지 생성 -> verify: 한글/영문 언어 전환과 문서 링크 확인
3. Stampho 법률 페이지 생성 -> verify: neutral/ko/en URL 파일 존재 확인
4. 문서 갱신 -> verify: changelog/worklog 반영 확인
5. 정적 검증 -> verify: placeholder 및 주요 링크 스캔

## Findings
- 프로젝트는 buildless static site이며 앱별 상세/법률 페이지는 `/ko/apps/<slug>/...`, `/en/apps/<slug>/...`, neutral `/apps/<slug>/legal/...` 구조를 사용한다.
- 루트 `/apps/`는 query 기반 한/영 토글이고, `/ko/apps/`, `/en/apps/`는 wrapper redirect로 유지된다.
- Stampho 초안에는 공개 전 메모(`DRAFT`, `[확정 필요]`)가 있어 공개 페이지에는 제거하고 현재 사이트의 이메일 지원/공개 URL 기준으로 정리했다.

## Decisions
- 결정: `Stampho`를 `Second release`로 배치하고 `탐정의 녹음기`는 이후 준비 앱으로 유지한다.
  이유: 사용자가 Stampho를 두 번째 출시 예정 앱으로 홈페이지에 추가해 달라고 요청했다.
- 결정: Stampho 공개 법률 문서 시행일은 2026년 5월 1일로 표기한다.
  이유: 현재 작업일 기준 공개 페이지에 남길 확정형 날짜가 필요했고, draft placeholder를 노출하지 않기 위해서다.
- 결정: 고객지원 전화번호 placeholder는 제거하고 이메일 지원 채널만 표기한다.
  이유: 기존 사이트 footer/support 운영과 일치하고, 확정되지 않은 전화번호를 공개하지 않기 위해서다.

## Changes
- 홈 앱 섹션에 Stampho 패널을 추가하고 EDSN Frame 다음에 배치했다.
- `/apps/` 앱 목록과 히어로 카피를 Stampho 포함 구조로 갱신했다.
- Stampho용 stamp visual CSS를 추가했다.
- Stampho 한글/영문 앱 상세 페이지와 neutral/한글/영문 개인정보처리방침·이용약관 페이지를 추가했다.
- `docs/CHANGELOG.md`에 변경 이력을 추가했다.

## Verification
- 실행한 검증:
  - `rg -n "DRAFT|확정 필요|Stampho|stampho|Second release|Future app|Planned later" index.html apps/index.html ko/apps/stampho en/apps/stampho apps/stampho`
  - `curl -I http://127.0.0.1:8123/ko/apps/stampho/`
  - `curl -I http://127.0.0.1:8123/en/apps/stampho/`
  - `curl -I http://127.0.0.1:8123/apps/stampho/legal/privacy/`
  - `curl -I http://127.0.0.1:8123/ko/apps/stampho/legal/privacy/`
  - `curl -I http://127.0.0.1:8123/en/apps/stampho/legal/terms/`
- 결과:
  - PASS: Stampho 링크/문구가 의도한 위치에 있고 공개 법률 페이지에 `DRAFT`/`확정 필요` 문구가 남지 않았다.
  - PASS: 대표 Stampho 상세/법률 URL이 로컬 서버에서 `200 OK`로 응답했다.
- 미실행 항목:
  - 별도 브라우저 스크린샷 검증은 진행하지 않았다.

## Handoff / Next
- Stampho 홈페이지/앱 상세/법률 URL 추가는 완료됐다.
- 후속 사용자 확인으로 개인정보처리방침 7항/8항은 원문 형식 보존이 더 중요하다는 점을 반영해, 한글/영문 페이지 모두 문단/목록 구조를 복원했다.
- 사용자가 한글 개인정보처리방침에서 직접 복원한 누락 문구를 기준으로 영문본에도 2항·9항·12항 도입문, 13항 변경 고지 목록, 14항 시행일 상태를 맞췄다.
- 사용자가 한글 이용약관에서 직접 복원한 누락 문구를 기준으로 영문본에도 제2조 정의 도입문, 제12조 제한/중단 사유 목록, 제14조 개인정보처리방침 별도 공개 문구, 제16조 시행일 상태를 맞췄다.
- 사용자가 추가로 정리한 한글 개인정보처리방침/이용약관을 기준으로 영문본에도 개인정보처리방침 1항·4항·6항·11항·13항과 이용약관 제3조 표현을 맞췄다.
- 한글 개인정보처리방침 1항의 `li` 닫는 태그는 이미 정상 상태임을 확인했고, 한글 이용약관 제12조의 목록 태그 오타를 수정했다.
- 실제 앱 화면 이미지가 준비되면 앱 상세 페이지의 `Screenshot 01~03` placeholder를 교체하면 된다.
- 법률 문서는 공개용 placeholder를 제거했지만, 실제 출시 전 법률 전문가 검토를 권장한다.
