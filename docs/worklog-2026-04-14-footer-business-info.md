# Worklog - 2026-04-14 - footer-business-info

## Goal

홈페이지 최하단에 Studio YONA 사업자 정보를 간결하게 노출한다.

## Scope

- 홈 원페이지 푸터
- 일반 페이지 푸터
- 관련 스타일과 변경 이력 문서

## Plan

1. 현재 푸터 구조를 확인한다. -> verify: 홈/일반 페이지 footer 마크업 확인
2. 사업자 정보 블록을 각 푸터에 추가한다. -> verify: 주요 페이지에 정보 문자열 존재 확인
3. 스타일과 changelog를 동기화한다. -> verify: CSS 규칙과 changelog/worklog 확인

## Facts

- 홈은 `footer-cluster`, 일반 페이지는 `footer` 구조를 사용한다.
- 사용자 제공 정보에는 상호, 대표, 개인정보관리책임자, 이메일, 사업자등록번호, 주소, 통신판매 번호가 포함된다.

## Decisions

- 링크 아래에 2줄 텍스트 형태의 사업자 정보 블록을 추가한다.
- 한국어/영어 페이지 모두 표시하되, 영어는 라벨만 번역하고 주소는 로마자 표기로 유지한다.

## Changes

- 홈과 일반 페이지 footer에 사업자 정보 블록 추가
- footer business info 공통 스타일 추가

## Verification

- `rg -n "사업자등록번호: 392-20-02356|통신판매: 제 2026-서울영등포-0975 호"`로 주요 한국어 페이지 반영 여부를 확인했다.
- `rg -n "footer-business|footer-business-line" assets/site.css`로 공통 스타일 규칙 추가를 확인했다.

## Handoff / Next

- 브라우저에서 실제 하단 간격과 가독성을 확인하고, 필요하면 줄 수나 크기를 미세 조정한다.
