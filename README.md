# Neonflix App

Neonflix 를 만들고 나서, NextJS 를 독학하며 만든 app 버전입니다.  
NextJs, React, TypeScript 를 사용했습니다 :)

---

### 🌐 프로젝트 링크

[Neonflix app 바로가기](https://neonflix-nextjs-app.vercel.app/)

---

### 🚀 개발환경

- 언어 : JavaScript(ES6), TypeScript
- 프론트 : NextJS, React
- 배포 : vercel
- 라이브러리 : npm, React-Hook -Form

---

### ⚙️ 기능 설명

- Movie & Series
  - popluar 카테고리에 해당되는 영화 &시리즈 출력
  - 클릭 시 디테일 페이지로 이동
- Search
  - React-Hook-Form 을 사용한 검색 기능
  - Search 페이지 검색 기능 구현

---

### 📝 프로젝트 구조

-📂[src]
├──[components]/  
 └── Footer.tsx 　# Footer 컴포넌트.tsx  
 └── Layout.tsx 　# 레이아웃 구성 컴포넌트.tsx  
 └── NavBar.tsx 　 # 네비게이션바 컴포넌트.tsx  
 └── Seo.tsx 　　 　# next/head 컴포넌트.tsx  
└── [pages]/ 　　　　# 라우트 페이지  
 └── [movies]/*　　　# 동적 라우팅을 사용한 영화 디테일 페이지  
 └── [tv]/*　　　　　# 동적 라우팅을 사용한 Tv 디테일 페이지  
 └── [search]/\*　　　# 동적 라우팅을 사용한 검색 디테일 페이지  
├── \_app.tsx 　　　　# app 구성 요소 정의 컴포넌트.tsx  
├── \_document.tsx 　# HTML 커스텀 컴포넌트.tsx  
├── 404.jsx 　　　　　# 404 error page 커스텀 컴포넌트.tsx  
├── index.tsx 　　　　# Movie(메인) 컴포넌트.tsx  
├── search.tsx 　　　# 검색 기능 컴포넌트.tsx  
└── tv.tsx 　　　　　# Tv(serise) 컴포넌트.tsx

---

#### 🤯 추후 추가 예정인 기능

- React-Query 를 사용한 여러 카테고리 데이터 fetch
- 접속 시 첫 화면에 Netflix 로고 애니메이션

---

#### 🤗 후기

- SPA/SSR/CSR에 대해 공부할 수 있던 경험이었다! 기존 Neonflix 에서는 경험하지 못했던 빠른 페이지 전환이 정말 인상적이였다.
- 라이브러리와 프레임워크의 차이에 대해서는 늘 모호하게만 알고 있었는데, 이번 기회에 확실히 공부하게 되어 좋았다!
- 아쉬웠던 점은, 반응형 CSS 가 약한 나 자신이였다. PC 와 모바일에서 모두 충족하는 APP 을 만들고 싶었으나 부족한 점이 많이 보여 역시 공부는 끝이 없다고 느꼈다.
