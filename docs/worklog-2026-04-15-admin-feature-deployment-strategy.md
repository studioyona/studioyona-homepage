# Worklog - 2026-04-15 - Admin Feature Deployment Strategy

## Summary

- 사용자가 향후 관리자 기능 도입 시 무료 운영 가능 범위와 배포 전략을 미리 정리해두길 원했다.
- 현재 `GitHub Pages + public static site` 구조를 유지하면서, 이후 관리자/API만 서버리스로 분리하는 기본 전략을 문서에 추가했다.

## Why

- 현재 공개 사이트는 정적 구조라 GitHub Pages에 적합하지만, 관리자 기능은 인증/비밀키/API 보호가 필요할 수 있다.
- 이후 의사결정을 빠르게 하려면, “언제 GitHub Pages를 유지하고 언제 함수/플랫폼 이전을 검토할지” 기준이 문서에 있어야 한다.

## Changes

- `README.md`
  - 관리자 기능이 생길 때의 기본 운영 방향을 짧게 추가했다.
- `docs/ARCHITECTURE.md`
  - 관리자 기능 도입 시 `GitHub Pages + 서버리스 분리`를 1차 기본 경로로 두는 구조적 결정을 추가했다.
- `docs/STUDIO_YONA_HOMEPAGE_MVP_PLAN_2026-04-05.md`
  - Post-MVP 관점의 배포 전략 비교표를 추가했다.
- `docs/CHANGELOG.md`
  - 위 문서화 내용을 변경 이력에 기록했다.

## Verification

- 문서 간 메시지가 일관되는지 수동으로 검토했다.
- 확인 포인트:
  - 현재 기본값이 `GitHub Pages 유지`인지
  - 관리자 기능이 생기면 1차 추천이 `관리자/API만 별도 서버리스`인지
  - 전체 플랫폼 이전은 조건부 후속 선택지로 남아 있는지

## Handoff / Next

- 향후 관리자 기능 요구가 실제로 들어오면, 여기 정리한 세 가지 옵션 중 `B. GitHub Pages + 별도 서버리스`를 기준점으로 구체 설계를 시작한다.
- 그 시점에 사용할 플랫폼 후보는 `Cloudflare`, `Vercel`, `Netlify` 중 기능/비용/비밀값 처리 요구에 맞춰 다시 비교한다.
