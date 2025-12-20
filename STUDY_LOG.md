# 🚀 Vue 3 FrontEnd 마스터 학습 체크리스트

**작성자:** 모비 (Mobee)  
**기술 스택:** Vue 3, Composition API, Pinia, Vite, SCSS

---

## ✅ 1주 차: Vue 3 핵심 문법 및 생태계 (완료)

> 목표: Vue 3의 동작 원리를 이해하고, 데이터를 다루는 기본기를 다진다.

- [x] **Day 1: 개발 환경 설정 & 반응성 기초**
  - [x] Node.js & Vite 프로젝트 생성 (`npm create vue@latest`)
  - [x] Options API vs Composition API 차이 이해
  - [x] 반응형 데이터 선언 (`ref`, `reactive`)
  - [x] 기본 디렉티브 사용 (`v-bind`, `v-model`, `v-on`)

- [x] **Day 2: 컴포넌트 시스템**
  - [x] 컴포넌트 구조 이해 및 파일 분리
  - [x] 부모 → 자식 데이터 전달 (`defineProps`)
  - [x] 자식 → 부모 이벤트 전달 (`defineEmits`)
  - [x] 유연한 UI 구조 설계 (`Slot`, `Named Slots`)

- [x] **Day 3: 페이지 라우팅 (Vue Router)**
  - [x] 라우터 설정 및 페이지 이동 (`useRouter`, `RouterLink`)
  - [x] 현재 주소 정보 활용 (`useRoute`)
  - [x] 동적 라우팅 구현 (`/post/:id`) 및 파라미터 추출

- [x] **Day 4: 전역 상태 관리 (Pinia) & 환경 설정**
  - [x] Pinia 스토어 생성 (`defineStore`) 및 State/Action/Getter 이해
  - [x] `storeToRefs`를 이용한 반응성 유지
  - [x] 컴포넌트 간 데이터 공유 실습
  - [x] SCSS, ESLint, Prettier 개발 환경 세팅

- [x] **Day 5: 서버 통신 (Axios)**
  - [x] Axios 인스턴스 설정 (BaseURL)
  - [x] 비동기 데이터 호출 (`async/await`)
  - [x] 데이터 로딩(`Loading`) 및 에러(`Error`) 처리
  - [x] API 데이터 화면 렌더링 (사용자 목록 등)

---

## ✅ 2주 차: 실전 프로젝트 [To-Do App] (완료)

> 목표: CRUD(생성, 조회, 수정, 삭제)를 완벽하게 구현하고, 앱다운 앱을 만든다.

- [x] **Day 1: 프로젝트 세팅 & Create**
  - [x] Pinia를 활용한 할 일 데이터 설계
  - [x] 입력 폼 구현 및 유효성 검사 (`trim`, 빈 값 방지)
  - [x] 키보드 이벤트 처리 (`@keyup.enter`)

- [x] **Day 2: Read, Update, Delete & Filtering**
  - [x] 리스트 렌더링 (`v-for`)
  - [x] 완료 상태 토글 (Update) 및 삭제 (Delete) 구현
  - [x] `computed`를 활용한 필터링 (완료 항목 숨기기)

- [x] **Day 3: 데이터 영속성 (Local Storage)**
  - [x] 브라우저 저장소(Local Storage) 연동
  - [x] `watch`를 이용한 데이터 자동 저장 (`deep: true`)
  - [x] 앱 초기화 시 데이터 불러오기 로직 구현
  - [x] 전체 삭제 기능 구현

- [x] **Day 4: 리팩토링 (Component Separation)**
  - [x] 단일 파일(`App.vue`)을 기능별 컴포넌트로 분리
  - [x] `Header`, `Input`, `List` 컴포넌트 구조화
  - [x] 자식 컴포넌트에서 Pinia 스토어 직접 연결

- [x] **Day 5: 애니메이션 & UX 개선**
  - [x] Vue 내장 컴포넌트 `<Transition>` 이해
  - [x] 리스트 애니메이션 `<TransitionGroup>` 적용
  - [x] SCSS를 활용한 Enter/Leave 트랜지션 효과 구현

---

## ⬜ 3주 차: 재사용성과 고급 패턴 (예정)

> 목표: 중급 개발자로 도약하기 위한 커스텀 훅과 고급 기능을 익힌다.

- [ ] **Day 1: Composables (커스텀 훅)**
  - [ ] 로직의 재사용성 이해 (React Hooks와 유사)
  - [ ] `useTodo`, `useStorage` 등 나만의 함수 만들기
- [ ] **Day 2: Teleport & Modal**
  - [ ] HTML 구조 탈출하기 (`<Teleport>`)
  - [ ] 재사용 가능한 모달(팝업) 컴포넌트 만들기
- [ ] **Day 3: 비동기 심화 & Suspense**
  - [ ] 스켈레톤 UI (Skeleton Loading) 구현
  - [ ] 비동기 컴포넌트 처리
- [ ] **Day 4: 사용자 정의 디렉티브 (Custom Directives)**
  - [ ] `v-focus`, `v-click-outside` 등 나만의 태그 속성 만들기
- [ ] **Day 5: 성능 최적화 맛보기**
  - [ ] `v-memo`, `Lazy Loading` 개념 익히기

---

## ⬜ 4주 차: 파이널 프로젝트 & 배포 (예정)

> 목표: 나만의 포트폴리오를 완성하고 세상에 배포한다.

- [ ] **Day 1~3: 종합 프로젝트 (쇼핑몰 or 게시판)**
  - [ ] 인증/인가 (로그인 로직)
  - [ ] 복합적인 데이터 관계 처리
- [ ] **Day 4: 배포 (Deployment)**
  - [ ] Vercel 또는 Netlify를 통한 실서버 배포
- [ ] **Day 5: 최종 회고 및 포트폴리오 정리**
