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
      `token=deleted; path=/; expires=${new Date().toUTCString()}`
    );
    res.status(200);
    res.end(); // ?
  } else {
    res.status(401);
    res.end(); // ?
  }
}
