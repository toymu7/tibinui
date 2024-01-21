import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

/**
 * 新規ユーザー登録処理を行う。
 */
export async function POST(request: Request) {
  try {
    const req = await request.json();
    const prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
    // 項目の数の制約上、一部ベタ書く
    const newUser = await prisma.user.create({
      data: {
        name: req.name,
        gender: 0,
        birthday: "1999/01/30",
        email: req.email,
        password: req.password,
      },
    });
    return NextResponse.json(
      { message: newUser, token: "token" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 500 });
  }
}
