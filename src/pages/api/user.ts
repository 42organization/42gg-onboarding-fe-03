import type { NextApiRequest, NextApiResponse } from 'next';
import userData from '@/data/userData.json';
import { userType, userResponse } from '@/types/userType';
import { AccessType } from '@/types/accessType';

type userData = userType[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<userResponse>
) {
  const token = req.cookies['token'];
  const user = userData.find((user) => user.token === token);
  if (user) {
    res.status(200).json({
      username: user.username,
      role: user.role as AccessType,
    });
  } else {
    res.status(401);
  }
}
