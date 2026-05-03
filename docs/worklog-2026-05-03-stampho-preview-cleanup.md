# Worklog: Stampho Preview Cleanup

Date: 2026-05-03
Status: done
Related Files:
- `assets/site.js`
- `docs/CHANGELOG.md`
- `docs/worklog-2026-05-02-local-only-stampho-preview.md`

## Goal
- EDSN Frame 출시 문구 수정 커밋에 함께 들어간 `Stampho` 로컬 전용 미리보기 변경을 제거한다.
- 운영 사이트뿐 아니라 로컬 개발 흐름에서도 `Stampho`가 요청 없이 홈/앱 목록에 다시 나타나지 않도록 정리한다.

## Scope
- 포함 범위:
  - `assets/site.js`의 로컬 전용 Stampho 주입 로직 제거
  - 관련 changelog/worklog 정리
- 제외 범위:
  - 기존 `Stampho` 상세/법률 페이지 자체 삭제
  - `Stampho` 비노출 정책 변경

## Plan
1. accidental inclusion 범위 재확인 -> verify: `git show 0d43816`와 `rg` 결과
2. 로컬 전용 Stampho JS 제거 -> verify: `rg "localPreviewOnly|createLocalStampho|addLocalStampho"` 결과 없음
3. 관련 문서 정리 -> verify: cleanup worklog/changelog 반영
4. 후속 커밋/푸시 -> verify: 작업 트리 clean

## Findings
- `0d43816` 커밋에는 사용자가 요청한 EDSN 출시 문구 수정 외에, 이미 스테이징돼 있던 `assets/site.js`와 `docs/worklog-2026-05-02-local-only-stampho-preview.md`가 함께 포함돼 있었다.
- 해당 JS는 운영 노출을 발생시키지는 않았지만, 요청 범위를 넘는 로컬 전용 기능이었다.

## Decisions
- 결정: Stampho 로컬 전용 홈/앱 목록 주입 로직을 제거한다.
  이유: 사용자가 `Stampho`가 아직 홈페이지에 노출되지 않기를 원했고, 해당 변경은 이번 요청 범위를 벗어난 accidental inclusion이었기 때문이다.

## Changes
- `assets/site.js`에서 로컬 환경 감지와 Stampho 패널/카드 동적 삽입 로직을 제거했다.
- `docs/worklog-2026-05-02-local-only-stampho-preview.md`를 삭제했다.
- `docs/CHANGELOG.md`에서 관련 항목을 정리하고 cleanup 기록을 추가했다.

## Verification
- 실행한 검증:
  - `git diff -- assets/site.js docs/CHANGELOG.md`
  - `rg -n "localPreviewOnly|createLocalStampho|addLocalStampho|Second release" assets/site.js docs`
- 결과:
  - PASS: 로컬 전용 Stampho 주입 로직 제거 확인
  - PASS: 관련 worklog 삭제 및 changelog 정리 확인

## Handoff / Next
- 이 cleanup은 후속 커밋/푸시로 원격에 반영한다.
- 이후 `Stampho` 관련 작업은 별도 요청이 있을 때만 다시 진행한다.
