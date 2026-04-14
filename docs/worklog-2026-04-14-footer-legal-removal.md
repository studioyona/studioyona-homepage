# Worklog - 2026-04-14 - footer-legal-removal

## Goal

푸터 하단 별도구역에서 법률 링크를 제거하고 사업자 정보만 남긴다.

## Scope

- 홈 footer strip
- 일반 페이지 footer strip
- 앱 상세/정책 페이지 footer strip
- 관련 스타일 정리와 변경 이력 기록

## Plan

1. footer legal 링크 사용 위치를 확인한다. -> verify: `rg -n "footer-legal"` 결과 확인
2. 모든 footer에서 법률 링크 블록을 제거한다. -> verify: HTML에서 `footer-legal` 미존재 확인
3. changelog/worklog를 갱신하고 Safari로 확인한다. -> verify: 브라우저 재오픈

## Facts

- App Store 대응에는 법률 페이지 URL의 존재가 중요하며, footer 상시 노출은 필수는 아니다.
- 사용자는 footer strip을 더 단순한 사업자 정보 영역으로 원한다.

## Decisions

- footer strip에서는 법률 링크를 제거한다.
- 법률 페이지 접근은 앱 소개/상세 페이지의 개별 링크로 유지한다.

## Changes

- 모든 footer에서 `footer-legal` 마크업 제거
- footer legal 전용 CSS 제거
- footer strip은 `© Studio YONA + 사업자 정보`만 남도록 정리

## Verification

- `rg -n "footer-legal" index.html about/index.html apps/index.html support/index.html contact/index.html ko/apps/edsn-frame/index.html en/apps/edsn-frame/index.html ko/apps/detective-recorder/index.html en/apps/detective-recorder/index.html ko/apps/edsn-frame/legal/privacy/index.html ko/apps/edsn-frame/legal/terms/index.html en/apps/edsn-frame/legal/privacy/index.html en/apps/edsn-frame/legal/terms/index.html ko/apps/detective-recorder/legal/privacy/index.html ko/apps/detective-recorder/legal/terms/index.html en/apps/detective-recorder/legal/privacy/index.html en/apps/detective-recorder/legal/terms/index.html assets/site.css`

## Handoff / Next

- Safari에서 홈과 다른 페이지 footer strip이 더 단순한 형태로 보이는지 확인한다.
