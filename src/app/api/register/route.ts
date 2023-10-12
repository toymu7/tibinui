import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

/**
 * 新規ユーザー登録処理を行う。
 */
export async function POST(request: Response) {
  try {
    const req = await request.json();
    const prisma = new PrismaClient();
    // 項目の数の制約上、一部ベタ書く
    const newUser = await prisma.user.create({
      data: {
        username: req.name,
        gender: "otoko",
        date_of_birth: "1999/01/30",
        email: req.email,
        password: req.password,
        deleteflg: "0",
      },
    });
    return NextResponse.json(
      { message: newUser, token: "token" },
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 500 });
  }
}
