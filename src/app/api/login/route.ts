import { NextResponse } from "next/server";
import userInfo from "../../../../db/userInfo";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const user = userInfo.find(
      (user) => user.id === res.username && user.pw === res.password
    );
    console.log(user);
    if (user) {
      return NextResponse.json({ username: user.id, role: user.auth });
    } else {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Bad Request" }, { status: 500 });
  }
}
