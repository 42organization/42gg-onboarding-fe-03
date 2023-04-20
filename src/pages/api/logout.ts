import type { NextApiRequest, NextApiResponse } from 'next';
import userData from '@/data/userData.json';
import { userType } from '@/types/userType';

type userData = userType[];

export default function hander(req: NextApiRequest, res: NextApiResponse) {
  const token = req.cookies['token'];
  const user = userData.find((user) => user.token === token);
  if (user) {
    res.setHeader(
      'Set-Cookie',
      `token=; path=/; expires={new Date().toGMTString()};`
    );
    res.status(200);
  } else {
    res.status(401);
  }
}
