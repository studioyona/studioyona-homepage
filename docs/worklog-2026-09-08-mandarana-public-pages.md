# Mandarana public pages — 2026-09-08

## Scope and authorization

사용자가 기존 앱과 같은 소개 페이지 제작과 오늘 시행 법률 문서의 공개 배포를 명시적으로 요청했다. 일반 Gmail 유지, 문의 처리 완료 후 1년 보관, 생성 작품의 개인적·비상업적 이용과 공유는 운영자가 결정한 기준이다.

기존 `Homepage` checkout의 README, DEPLOYMENT, DOCS_RULES, skill 문서와 `.github/` 변경을 보존하기 위해 원격 main `50a8116edaf2972270efe689bfdfd3ea4f6e6905`와 같은 별도 작업 사본에서 진행했다. 배포 대상은 `StudioYONA-official/studioyona-homepage`, GitHub Pages의 main 루트와 CNAME `www.studioyona.co.kr`로 API 확인했다. DNS와 Pages 설정은 변경하지 않는다.

## Changes

- 기존 한국어 소개 페이지의 공통 디자인을 재사용해 실제 홈·집중 화면 2장과 사용 흐름을 추가했다. App Store 출시 준비 상태를 유지했다.
- 홈과 앱 목록의 한국어·영어 영역에서 소개·법률 문서에 접근할 수 있다. 영어 영역은 한국어 페이지임을 링크에 표시한다.
- `/apps/mandarana/`, `/apps/mandarana/support/`, `/apps/mandarana/legal/privacy/`, `/apps/mandarana/legal/terms/`를 한국어 전문으로 연결하는 언어 중립 진입점으로 추가했다.
- 법률 본문 원본은 Mandarana 앱 저장소의 `docs/legal/privacy-policy.ko.md`, `docs/legal/terms-of-service.ko.md`다. HTML의 source 주석에는 변환한 원문의 SHA256을 기록했다. 서식 변환 외의 본문 추가·삭제는 없다.
- `docs/site-copy.md`에 새 소개와 홈·목록 카피를 기록했다.

## Validation

- 10개 관련 페이지 HTML 태그 균형, 내부 링크·앵커, 이미지 경로와 대체 텍스트 검사 통과.
- 공개할 법률 본문의 전체 텍스트와 앱 Markdown 원문의 정규화 대조 통과. 두 문서 시행일, 1년 보관, 작품 이용 범위 일치.
- 스크린샷 2장은 앱 저장소의 App Store 준비 파일과 바이트 일치. 실제 기기 재촬영 결과는 아니다.
- Safari 데스크톱과 390px iframe 뷰포트에서 소개·개인정보 본문 표시, 메뉴 열기·Escape 닫기, 사용 흐름 이미지 배치를 확인했다. Aside 연결 실패로 Safari를 사용했다.
- `git diff --check` 통과. 앱 코드 변경이 없어 Xcode 빌드·테스트는 실행하지 않았다.

## Publication and remaining boundary

사용자의 공개 요청에 따라 위 문서를 게시한다. Google 일반 Gmail의 구체적인 처리 국가는 확인되지 않았으며, 해당 사실을 개인정보 처리방침에 그대로 남겼다. Google의 data processor/DPA 관련 안내만으로 한국법상 지위를 확정하지 않는다. 본 게시를 국외 이전 요건 충족이나 자격 있는 법률 검토 완료로 기록하지 않는다.

배포 후 커밋·Pages 결과·공개 URL 응답과 원문 일치 여부는 Mandarana 앱 저장소의 `docs/CURRENT_STATE.md`에 기록한다. 새 배포 앱에 이 법률 문서를 포함하는 작업과 App Store 심사 제출은 이번 웹 배포와 별개다.
