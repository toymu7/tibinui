import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

/**
 * パーツ登録を行う。
 */
export async function POST(request: Response) {
  try {
    const req = await request.json();
    const prisma = new PrismaClient();
    // 項目の数の制約上、一部ベタ書く
    const newBodyParts = await prisma.user.create({
      data: {
        hairpart_id: req.hairpart,
        eyebrowpart_id: req.eyebrowpart,
        eyepart_id: req.eyepart,
        mouthpart_id: req.mouthpart,
        deleteflg: "0",
      },
    });
    return NextResponse.json(
      { message: newBodyParts, token: "token" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 500 });
  }
}
