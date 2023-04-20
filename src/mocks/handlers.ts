import { rest } from 'msw';
import { store as cookieStore } from '@mswjs/cookies';
import { userType } from '@/types/userType';
import userData from '@/data/userData.json';

type userData = userType[];
const AUTHTOKENKEY = 'auth-token';

export const handlers = [
  rest.post('/login', async (req, res, ctx) => {
    const { username, password } = await req.json(); // 요청 body의 username과 password
    const user = userData.find((user) => user.username === username); // userList에서 username에 해당하는 user를 가져옴
    if (!user) {
      return res(
        ctx.status(401),
        ctx.json({ msg: '존재하지 않는 사용자입니다.' })
      );
    }
    if (user.password !== password) {
      return res(ctx.status(401), ctx.json({ msg: '잘못된 비밀번호입니다.' }));
    }
    return res(
      ctx.status(200),
      ctx.cookie(AUTHTOKENKEY, user.token),
      ctx.json({ msg: '로그인 성공.' })
    );
  }),

  rest.post('/logout', (req, res, ctx) => {
    const token = req.cookies[AUTHTOKENKEY]; // 요청 헤더의 auth-token
    const user = userData.find((user) => user.token === token); // userList에서 토큰에 해당하는 user를 가져옴
    clearCookie();
    if (!user) {
      return res(ctx.status(401));
    }
    return res(ctx.status(200));
  }),

  rest.get('/user', (req, res, ctx) => {
    const token = req.cookies[AUTHTOKENKEY]; // 요청 헤더의 auth-token
    const user = userData.find((user) => user.token === token); // userList에서 토큰에 해당하는 user를 가져옴
    if (!user) {
      return res(ctx.status(401));
    }
    return res(
      ctx.status(200),
      ctx.json({ username: user.username, role: user.role })
    );
  }),
];

function clearCookie() {
  document.cookie =
    AUTHTOKENKEY + '=; path=/; expires=' + new Date().toGMTString() + ';';
  cookieStore.clear(); // TODO: 특정 쿠키만 만료시키는 법?
}
