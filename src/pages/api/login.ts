import type { NextApiRequest, NextApiResponse } from 'next';
import userData from '@/data/userData.json';
import { userType } from '@/types/userType';
import { loginType, loginResultType } from '@/types/loginType';

type userData = userType[];

export default function hander(
  req: NextApiRequest,
  res: NextApiResponse<loginResultType>
) {
  const { username, password } = req.body;
  const user = userData.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    res.setHeader('Set-Cookie', `token=${user.token}; path=/;`);
    res.status(200).json({
      result: 'success' as loginType,
      msg: '로그인 성공',
    });
  } else {
    res.status(401).json({
      result: 'fail' as loginType,
      msg: '아이디 또는 비밀번호가 일치하지 않습니다.',
    });
  }
}
