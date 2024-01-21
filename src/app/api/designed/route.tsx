import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

/**
 * デザイン済みパーツを取得する。
 */

export async function POST(request: Response) {
  try {
    const req = await request.json();
    const prisma = new PrismaClient();

    const designedData = await prisma.body.findMany({
      where: { user_id: req.user_id },
      include: {
        hair: {
          include: {
            hair_style: true,
          },
        },
        eyebrows: {
          include: {
            eyebrows_style: true,
          },
        },
        eyes: {
          include: {
            eyes_style: true,
          },
        },
        mouth: {
          include: {
            mouth_style: true,
          },
        },
      },
    });
    if (designedData) {
      return NextResponse.json(
        { data: designedData, message: "メッセージ成功", token: "token" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "一致するユーザーがいません。",
        },
        { status: 400 }
      );
    }
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 500 });
  }
}
