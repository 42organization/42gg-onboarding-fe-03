# 42gg 프론트엔드 온보딩 3단계

## 실행 방법

```
yarn install
yarn dev
```

## 구현된 기능

### 유저 정보

유저 정보는 `src/data/userData.json`에서 관리합니다.

```
username: 'red',
password: 'qwe123!@#',
role: Admin
---
username: 'blue',
password: 'qwe123!@#',
role: Manager
---
username: 'green',
password: 'qwe123!@#',
role: Normal
```

### 로그인, 로그아웃, 유저 정보

`src/pages/api`

- 로그인: `POST /login`
- 로그아웃: `POST /logout`
- 유저 정보: `GET /user`

### 유저 권한별 routing page

권한은 각각 Public, Normal, Manager, Admin으로 구분합니다.

- Public: 로그인하지 않은 유저도 접근 가능한 페이지 (Login 페이지)
- Normal: 로그인한 유저만 접근 가능한 페이지 (Normal 페이지)
- Manager: Manager, Admin 권한을 가진 유저만 접근 가능한 페이지 (Manager 페이지)
- Admin: Admin 권한을 가진 유저만 접근 가능한 페이지 (Admin 페이지)

사이드 네비게이션바에는 현재 로그인한 유저가 접근할 수 있는 페이지만 나타납니다.

## 폴더 구조

```
.
├── public
└── src
    ├── components
    ├── data    : 정적 데이터 (유저 정보,  사이드 네비게이션바 아이템)
    ├── pages
    ├── styles
    ├── types
    └── utils   : 유틸 함수 (atom, hook, login/logout)
```
