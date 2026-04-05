# Worklog: Deployment checklist refinement

Date: 2026-04-05
Status: done
Related Files:
- docs/DEPLOYMENT.md
- docs/CHANGELOG.md

## Goal
- 현재 구조에 맞는 GitHub Pages 배포 체크리스트를 실전형으로 정리한다.
- `www`, apex, App Store 법률 URL, 영어 토글 확인 항목이 한 문서에 보이게 만든다.

## Scope
- 포함 범위:
  - GitHub Pages 설정 순서 명확화
  - DNS 레코드 설명 보강
  - 로컬/배포 후 확인 항목 최신화
  - quick checklist 추가
- 제외 범위:
  - 실제 GitHub 업로드
  - 실제 DNS 설정
  - 외부 계정 작업

## Plan
1. 현재 배포 문서와 실제 사이트 구조를 비교한다. -> verify: 빠진 경로와 확인 항목이 보인다.
2. GitHub 공식 가이드를 기준으로 Pages/DNS 설명을 보강한다. -> verify: branch publishing, custom domain, verification 흐름이 반영된다.
3. 현재 프로젝트 기준 체크리스트를 완성한다. -> verify: 사용자가 업로드 직전부터 배포 후 확인까지 한 문서로 따라갈 수 있다.

## Findings
- 기존 문서는 일반 페이지가 `/ko/`, `/en/` 분리 구조였던 시점 기준 일부 설명이 남아 있었다.
- 현재 구조에서는 일반 페이지의 영어 확인 항목에 `?lang=en`가 반드시 들어가야 한다.
- GitHub Pages custom domain과 DNS 설명은 `www CNAME -> <github-username>.github.io` 원칙을 명시해두는 것이 실수 방지에 도움이 된다.

## Decisions
- 결정: 배포 문서에 `Quick Start Checklist`를 별도 섹션으로 둔다.
  이유: 비개발자도 바로 순서대로 확인할 수 있게 하기 위해서다.

## Changes
- `docs/DEPLOYMENT.md`를 현재 사이트 구조와 GitHub Pages 운영 방식에 맞게 갱신했다.
- `www`, apex, verified domain, 로컬 확인 경로, 배포 후 확인 경로를 더 구체적으로 적었다.

## Verification
- 실행한 검증:
  - 문서 수동 점검
  - GitHub 공식 문서 기준 확인
- 결과:
  - PASS
- 미실행 항목:
  - 실제 GitHub Pages 설정 화면 검증
  - 이유: 외부 계정 작업이 필요하다.

## Handoff / Next
- 현재 상태 요약:
  - 배포 전 체크리스트 문서가 현재 정적 사이트 구조에 맞게 정리됐다.
- 남은 이슈 / 리스크:
  - 실제 GitHub username 값과 DNS 제공자 UI는 배포 시점에 확정해야 한다.
- 다음 세션 시작 TODO:
  - GitHub 저장소 생성/업로드
  - Pages 활성화
  - DNS 반영
- 우선순위:
  - 1순위: 실제 업로드와 DNS 설정
