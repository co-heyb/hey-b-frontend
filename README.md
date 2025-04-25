# HeyB – 취미로 연결되는 사람들

HeyB는 '나만의 취미를 발견하고, 공유하고, 함께할 수 있는' 소셜 플랫폼입니다.

누군가의 취미가 다른 누군가의 새로운 시작이 되기를 바라는 마음으로 시작했습니다.
‘취미’ 자체가 중심이 되는 구조를 어떻게 구현할 수 있을지 꾸준히 고민하고 있으며, 기존의 다양한 커뮤니티와 챌린지 서비스에서 얻은 인사이트도 함께 반영하고 있습니다.
현재는 모바일과 PC 모두에서 자연스럽게 사용할 수 있도록 vw 기반의 반응형 작업을 진행 중이며, 추후에는 웹뷰를 통해 앱으로 확장하는 방향도 고려하고 있습니다.

---

## 🛠 기술 스택

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla Extract
- **State Management**: Zustand
- **Data Fetching**: React Query
- **Design System**: Storybook 기반 문서화

---

## 📂 프로젝트 구조

```
public/
  ├─ content/        # 회원가입 약관 등 정적 파일
  ├─ icons/          # SVG 등 아이콘 리소스
  ├─ images/         # 이미지 리소스
  └─ favicon.ico

src/
  ├─ app/            # Next.js App Router 페이지 및 레이아웃
  ├─ components/
  │   ├─ PageComponents/  # 페이지 단위로 삽입되는 컴포넌트들
  │   └─ ...              # 쓰임이 다양한 UI 컴포넌트들 (일부 Storybook 포함)
  ├─ hoc/            # 고차 컴포넌트(Higher Order Components)
  ├─ hooks/          # 커스텀 훅
  ├─ lib/
  │   ├─ auth/       # 인증 관련 유틸리티
  │   ├─ api/        # fetcher, mock 등 API 유틸
  │   ├─ constants/  # 상수 모음
  │   └─ utils/      # 일반 유틸 함수
  ├─ stores/         # Zustand 스토어 정의
  ├─ styles/         # 전역 스타일 (reset, theme, hexToRgb, px-to-vw 등)
  └─ types/

```

---

## 🎯 코딩 컨벤션

- [Airbnb JavaScript 스타일 가이드](https://github.com/airbnb/javascript)를 기반으로 구성
- ESLint, Prettier 설정 적용
- 파일 및 폴더는 컴포넌트일 경우 **PascalCase**로 작성
- `index.ts` 파일을 활용해 디렉토리 단위 import 관리

---

## 📚 관련 문서 및 링크

- Storybook: [https://storybook.heyb.kr](https://storybook.heyb.kr)
- 개인 블로그: [https://blog.heyb.kr](https://blog.heyb.kr)

블로그에는 개발 과정에서의 기술적 선택, 시행착오, 설계 고민 등이 기록되어 있습니다.

---

## ▶ 실행 방법

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

# Storybook 실행
yarn storybook
```
