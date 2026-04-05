# Worklog: App page style consolidation

Date: 2026-04-05
Status: done
Related Files:
- assets/site.css
- ko/apps/edsn-frame/index.html
- en/apps/edsn-frame/index.html
- ko/apps/edsn-frame/legal/privacy/index.html
- ko/apps/edsn-frame/legal/terms/index.html
- en/apps/edsn-frame/legal/privacy/index.html
- en/apps/edsn-frame/legal/terms/index.html
- docs/CHANGELOG.md

## Goal
- 앱 상세와 앱 법률 페이지의 중복 인라인 CSS를 공통 자산으로 통합한다.
- 일반 페이지와 충돌 없이 유지보수 가능한 스타일 구조로 정리한다.

## Scope
- 포함 범위:
  - 앱 상세/법률 페이지 공통 스타일을 `assets/site.css`로 이동
  - 페이지별 `<style>` 블록 제거
  - 일반 페이지 최신 라우팅 기준으로 관련 링크 정리
- 제외 범위:
  - 법률 문구 자체 변경
  - 일반 페이지 디자인 변경
  - 실제 배포

## Plan
1. 앱 상세/법률 페이지의 중복 스타일을 식별한다. -> verify: 공통화 가능한 클래스 집합이 정리된다.
2. `assets/site.css`에 앱 전용 네임스페이스 스타일을 추가한다. -> verify: 일반 페이지 스타일과 충돌하지 않는다.
3. 각 페이지에서 인라인 스타일을 제거하고 공통 자산을 연결한다. -> verify: 앱 관련 HTML에 `<style>` 블록이 남지 않는다.
4. 정적 응답과 주요 경로를 다시 확인한다. -> verify: 앱 상세/법률 페이지가 정상 응답한다.

## Findings
- 앱 상세 2개와 법률 4개가 거의 같은 레이아웃/타이포/카드 스타일을 각 파일에 중복 보관하고 있었다.
- 일반 페이지는 이미 `assets/site.css`를 사용 중이므로, 앱 페이지는 `body.app-page` 네임스페이스를 두는 방식이 가장 안전했다.
- 앱/법률 페이지에서 일반 페이지로 이동하는 링크는 새 한국어 우선 루트 구조에 맞춰 직접 연결하는 편이 더 단순했다.

## Decisions
- 결정: 앱/법률 페이지 공통 스타일은 `body.app-page`와 modifier class(`app-detail-page`, `app-legal-page`)로 스코프를 나눈다.
  이유: 기존 일반 페이지 클래스명(`.nav`, `.hero`, `.card`, `.footer`)과 충돌하지 않게 하면서 중복 CSS를 제거하기 위해서다.

## Changes
- `assets/site.css`에 앱 상세/법률 페이지 전용 공통 스타일을 추가했다.
- 앱 상세 2개와 법률 4개 페이지에서 인라인 `<style>` 블록을 제거하고 공통 CSS 링크를 연결했다.
- 법률 페이지의 소규모 inline `style`도 `callout-copy` 클래스로 대체했다.
- 앱 관련 페이지에서 일반 페이지로 가는 링크를 한국어 우선 루트 및 `?lang=en` 구조에 맞게 정리했다.

## Verification
- 실행한 검증:
  - `rg -n "<style>|style=\"" ko/apps/edsn-frame en/apps/edsn-frame`
  - `curl -I http://127.0.0.1:8000/ko/apps/edsn-frame/`
  - `curl -I http://127.0.0.1:8000/en/apps/edsn-frame/`
  - `curl -I http://127.0.0.1:8000/ko/apps/edsn-frame/legal/privacy/`
  - `curl -I http://127.0.0.1:8000/en/apps/edsn-frame/legal/terms/`
- 결과:
  - PASS
- 미실행 항목:
  - 실제 브라우저에서 앱/법률 페이지의 최종 시각 비교
  - 이유: 현재는 정적 응답과 마크업/스타일 제거 여부 중심으로 검증했다.

## Handoff / Next
- 현재 상태 요약:
  - 앱 상세/법률 페이지 스타일이 공통화되어 이후 수정 시 `assets/site.css` 한 곳에서 조정할 수 있다.
- 남은 이슈 / 리스크:
  - 실제 GitHub Pages 배포 후 캐시 상태에 따라 스타일 반영 여부를 한 번 더 보는 것이 좋다.
- 다음 세션 시작 TODO:
  - 브라우저 기준 최종 QA
  - 실제 GitHub Pages 업로드
- 우선순위:
  - 1순위: 배포 전 브라우저 QA
