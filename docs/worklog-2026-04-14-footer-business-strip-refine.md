# Worklog - 2026-04-14 - footer-business-strip-refine

## Goal

사업자 정보가 기존 푸터 링크와 섞여 보이지 않도록, 페이지 최하단의 작은 정보줄처럼 보이게 다듬는다.

## Scope

- footer business info 스타일 조정
- 변경 이력 기록

## Plan

1. 현재 사업자 정보 스타일을 확인한다. -> verify: CSS footer-business 규칙 확인
2. 더 작은 크기와 구분선 기반 하단 정보줄 스타일로 조정한다. -> verify: CSS 수정 반영 확인
3. changelog를 갱신한다. -> verify: 변경 이력 문구 확인

## Facts

- 사업자 정보는 이미 홈, 일반 페이지, 앱 상세/정책 페이지 footer에 추가되어 있다.
- 사용자는 예시처럼 `하단에서만 작게 보이는 별도 정보 영역`을 원한다.

## Decisions

- 마크업은 유지하고, `footer-business`를 더 작은 글씨와 구분선이 있는 하단 strip처럼 보이게 조정한다.
- 홈/앱 페이지에서도 같은 원칙을 유지하되 각 테마 색에 맞는 약한 구분선만 사용한다.

## Changes

- `footer-business` 기본 글자 크기와 줄 간격 축소
- `footer-business` 위쪽 구분선과 상단 여백 추가
- 홈/앱 페이지용 세부 크기와 여백을 더 작게 조정
- 홈에서는 사업자 정보 블록을 `Contact` 섹션 오른쪽 컬럼이 아니라, 별도의 `home-footer-band` 하단 구역으로 분리
- `home-footer-band`는 더 작은 패딩, 더 약한 그림자, 더 작은 타이포를 사용해 얇은 하단 strip처럼 보이게 재조정
- 홈 하단 구역은 공통 카드 배경/테두리/그림자를 제거해 박스 없는 footer strip처럼 다시 정리

## Verification

- `sed -n '520,590p' assets/site.css`
- `sed -n '1170,1245p' assets/site.css`
- `sed -n '1740,1775p' assets/site.css`
- `sed -n '296,380p' index.html`

## Handoff / Next

- 실제 브라우저에서 너무 작거나 답답해 보이면, 글자 크기만 소폭 재조정한다.
