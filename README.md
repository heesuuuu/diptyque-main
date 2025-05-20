# DIPTYQUE E-COMMERCE 쇼핑몰 리디자인 프로젝트

> **Original Site:** 기존 Diptyque 공식 사이트를 바탕으로  
> **기간:** 2025.02.27 ― 2025.03.34  
> **팀 구성:**
>
> - 프론트엔드: 4명
> - 디자이너: 1명
>
> **내 역할:**
>
> - **디자인 기획 & 페이지 구성:** 서비스 페이지, 프로모션 페이지
> - **프론트엔드 구현:** Promotion & Collection 페이지

---

## 📖 프로젝트 개요

기존 Diptyque 사이트의 UI/UX를 리뉴얼하고,  
API 기반 데이터 상태 관리를 통해 상품 및 프로모션 콘텐츠를 강화한  
모바일·데스크탑 대응형 e-commerce 쇼핑몰 리디자인 프로젝트입니다.

---

## 🛠 주요 기능 및 특징

- **데이터 페칭 & 상태 관리**

  - 기존 사이트 API에서 데이터를 불러오고
  - Redux를 이용해 상품·카테고리·컬렉션 상태를 중앙 집중 관리

- **사용자 인터페이스 (UI)**

  - 메인, 제품 상세, 컬렉션, 프로모션, 이벤트, 향별(Fragrance) 페이지 구성
  - Tailwind CSS + SCSS 믹스인으로 반응형 레이아웃 구현

- **프로모션 & 이벤트**

  - 시즌별 프로모션 배너
  - 기획전 상세 소개 섹션

- **반응형 디자인**
  - 모바일 / 태블릿 / 데스크탑 화면 최적화
  - CSS 변수 & 유틸 믹스인 활용

---

## ⚙️ Tech Stack

| 분류            | 기술/라이브러리         |
| --------------- | ----------------------- |
| 프레임워크      | React (Vite)            |
| 상태 관리       | Redux (+ Redux Toolkit) |
| 스타일링        | Tailwind CSS, SCSS      |
| 빌드 & 배포     | Vite, Vercel            |
| 디자인 & 프로토 | Figma                   |

---

## 🎨 디자인 & 프로토타입

- **Figma 링크:**  
  https://url.kr/bjjrtl

---

## 📂 주요 폴더 구조

```bash
├─ public/                      # 정적 에셋 (비디오, 이미지 등)
├─ src/
│  ├─ assets/                   # font, icons, svg
│  ├─ common/                   # 공통 레이아웃 & 컴포넌트
│  ├─ components/               # 주요 비즈니스 컴포넌트
│  ├─ pages/                    # 라우팅 페이지 컴포넌트
│  ├─ store/                    # Redux slice & store 설정
│  └─ styles/                   # SCSS, Tailwind 설정
├─ ui/                          # 재사용 UI 컴포넌트 라이브러리
├─ utils/                       # 유틸리티 함수
├─ vite.config.js               # Vite 설정
├─ tailwind.config.js           # Tailwind 설정
└─ README.md
```

## 🚀 Getting Started

```
# 1. 저장소 클론
git clone https://github.com/your-org/diptyque-redesign.git
cd diptyque-redesign

# 2. 의존성 설치
yarn install

# 3. 개발 서버 실행
yarn run dev

# 4. 빌드
yarn run build
```
<!--
## 🚀 시연 영상

<details><summary>Promotion</summary> 

</details>
-->
