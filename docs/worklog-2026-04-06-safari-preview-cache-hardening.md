# Worklog - 2026-04-06 - safari-preview-cache-hardening

## Goal

Safari 로컬 미리보기에서 예전 화면이 반복 노출되는 문제를 구조적으로 줄인다.

## Scope

- 로컬 프리뷰 서버의 캐시 헤더 비활성화
- Safari 전용 런처를 고정 포트에서 가변 포트 방식으로 전환
- 관련 변경 이력 문서화

## Plan

1. 기존 Safari 런처와 포트 사용 방식을 점검한다. -> verify: 스크립트 내용 확인
2. 캐시 방지 프리뷰 서버와 새 포트 런처를 구현한다. -> verify: 새 서버 응답 헤더 확인
3. 문서를 동기화하고 새 Safari 런처를 재배포한다. -> verify: 데스크탑 아이콘과 서버 동작 확인

## Facts

- 기존 Safari 전용 런처는 `8124` 고정 포트에서 `python -m http.server`를 실행했다.
- 자산 버전 쿼리 스트링만으로는 Safari의 반복 캐시 문제를 완전히 피하기 어려웠다.

## Decisions

- Safari 전용 런처는 실행 시 사용 가능한 포트를 선택해 열어, 기존 세션/탭 재사용 가능성을 낮춘다.
- 로컬 프리뷰 서버는 macOS/Codex 환경에서 가장 안정적인 기본 `python -m http.server`를 사용한다.

## Changes

- `scripts/local-preview-safari-fresh.command`를 가변 포트 방식으로 변경
- 기본/사파리 런처 모두 프로젝트 디렉터리를 직접 서빙하도록 정리
- 전용 no-cache 서버 실험은 Codex 환경 포트 제한과 충돌해 제거

## Verification

- 예정

## Handoff / Next

- 데스크탑 Safari 전용 아이콘을 최신 스크립트로 교체한다.
- 새 런처로 Safari가 최신 수정본을 안정적으로 보여주는지 확인한다.
