// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import db from "./db.json"
import jwt from "jsonwebtoken"

interface userInput {
  id: string;
  pw: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body: userInput = req.body;
  if (!body.id || !body.pw) {
    return res.status(400).json({ data: "id or pw not found"});   
  }
  function checkIdPw(): number {
    let res = 0;
    db.normal.forEach((info) => {
      if (info.id === body.id && info.pw === body.pw) {
        res = 1;
      }
    })
    db.manager.forEach((info) => {
      if (info.id === body.id && info.pw === body.pw) {
        res = 2;
      }
    })
    db.admin.forEach((info) => {
      if (info.id === body.id && info.pw === body.pw) {
        res = 3;
      }
    })
    return res;
  }
  const user: number = checkIdPw();

  if (user !== 0) {
    try {
      const getToken = await new Promise((resolve, reject) => {
        jwt.sign(
          {
            userId: body.id,
            userlevel: user,
          },
          "secret-key",
          {
            expiresIn: "20m",
          },
          (err, token) => {
            if (err) {
              reject(err);
            } else {
              resolve(token);
            }
          }
        );
      });
      res.setHeader("Set-Cookie", `token=${getToken}; Path=/; HttpOnly`)
      res.status(200).json({ login: user, getToken });
    } catch (err) {
      console.log(err);
      res.status(400).json({ login: user, error: "토큰 서명 실패"});
    }
  } else {
    res.status(400).json({ login: user, error: "아이디와 비밀번호가 일치하지 않습니다."});
  }
}
