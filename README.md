# 42gg 프론트엔드 온보딩 3단계

## 실행 방법
```
cd gg03
npm install
npm run dev
```

## 구현된 기능

### 로그인 (/login)
- next-auth.js로 구현
- 42-school provider로 42 intra로 로그인 가능 (auth는 normal 부여)
- credentials provider로 (src/app/UserInfo.ts)에 저장된 유저 정보와 일치하면 로그인
- 로그인 성공 시 session.user 정보 받아서 localStorage에 저장

### 투두리스트(/todos/[username])
- fake REST api 사용 (https://dummyjson.com/docs/todos)
- 동적 라우팅으로 구현 -> username과 일치하는 유저의 data 받아옴
- todo 추가, 삭제, 체크 가능

### 권한 별 Routing
- 상단 Navbar에서 메인 페이지 이동, 로그아웃 가능
- Sidebar에는 권한 별로 접근 가능한 페이지 아이콘만 조회 가능
- 로그인하지 않은 유저는 로그인 페이지만 조회 가능
- 이미 로그인된 유저가 로그인 페이지 접속 시 메인 페이지로 이동

### 에러 페이지
- 권한 없는 페이지, 존재하지 않는 URL 접근 시 에러

### 폴더구조
- Next.js v13 app router 사용
```
└── app
    ├── (main)
    │   ├── admin
    │   ├── manager
    │   ├── profile
    │   │   └── [username]
    │   └── todos
    │       └── [usename]
    ├── api
    │   └── auth
    │       └── [...nextauth]
    ├── atoms
    ├── hooks
    ├── login
    └── types
```
