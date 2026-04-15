# Portfolio

이 저장소는 이종희의 포트폴리오 웹사이트입니다.

React, TypeScript, Vite 기반으로 구성되어 있으며 이력, 경력, 프로젝트 경험을 웹 페이지 형태로 정리합니다.

## Tech Stack

- React 19
- TypeScript
- Vite
- ESLint
- GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

기본 개발 서버는 Vite를 사용합니다.

## Build

```bash
npm run build
```

빌드 결과물은 `dist/` 디렉터리에 생성됩니다.

## Deployment

GitHub Actions를 통해 `master` 브랜치 푸시 시 GitHub Pages로 배포되도록 설정되어 있습니다.

수동 확인이 필요할 때는 아래 명령을 사용할 수 있습니다.

```bash
npm run preview
```

## Project Structure

```text
src/
  components/sections/   주요 섹션 컴포넌트
  components/ui/         공통 UI 컴포넌트
  data/                  포트폴리오 데이터 및 타입 정의
  styles/                전역 스타일
```

## Commit Message Convention

형식: `type: 메세지 내용`

| type | 설명 |
| --- | --- |
| `feat` | 신규 기능 추가 |
| `fix` | 버그 수정 |
| `chore` | 기능 수정 |
| `style` | 스타일 변경 |
| `refactor` | 코드 및 폴더 리팩토링 |
| `build` | 빌드 관련 파일 수정 |

## TODO

- `resume.json` 기반 정적 데이터 구조를 DB 기반 구조로 전환
- DB 후보 선정 (후보 PostgreSQL)
- React 프론트엔드 + Python 백엔드(`FastAPI`) 구조로 확장 검토
- JWT 기반 로그인/인증 흐름 구현
- 게시판 기능 추가
- 클라우드 환경 배포 경험을 위한 백엔드/DB 호스팅 구성
