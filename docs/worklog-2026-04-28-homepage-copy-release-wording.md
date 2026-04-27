# Worklog - 2026-04-28 - Homepage Copy Release Wording

## Summary

- EDSN Frame의 공개 상태가 아직 `출시 예정`임을 반영해, 홈/회사 소개/앱 소개/앱 상세의 한국어·영어 문구를 같이 조정했다.

## Why

- 기존 문구 중 일부가 이미 App Store에 출시된 것처럼 읽혀 실제 공개 상태와 어긋났다.
- 사용자가 한국어 기준 문구 수정을 요청했고, 영어 페이지도 같은 의미로 맞추길 원했다.

## Changed Files

- `about/index.html`
- `apps/index.html`
- `ko/apps/edsn-frame/index.html`
- `en/apps/edsn-frame/index.html`
- `docs/CHANGELOG.md`

## Decisions

- 한국어 `출시 예정`에 대응하는 영어 태그는 `Planned for iOS`로 정리했다.
- 앱 상세 상태 문구는 App Store 출시 완료처럼 읽히지 않도록 `coming soon` 계열 표현으로 통일했다.

## Verification

- `rg -n "출시 예정|Planned for iOS|coming soon|expected to arrive on the App Store" about/index.html apps/index.html ko/apps/edsn-frame/index.html en/apps/edsn-frame/index.html`
- 로컬 Safari 미리보기로 수정 페이지 재확인

## Handoff / Next

- 사용자가 표현 톤을 더 바꾸고 싶으면 한국어 원문 기준으로 영어 카피도 함께 다시 다듬는다.
