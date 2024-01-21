import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

/**
 * パーツ登録を行う。
 */
export async function POST(request: Request) {
  console.log(request);

  try {
    const req = await request.json();
    const prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
    console.log(req);
    // 髪スタイル
    const newHairStyle = await prisma.hair_style.create({
      data: {
        fill: req.hair_style.fill,
      },
    });
    // 髪パーツ
    const newHair = await prisma.hair.create({
      data: {
        part_id: req.hair_id,
        style_id: newHairStyle.id,
      },
    });
    // 眉毛スタイル
    const newEyebrowsStyle = await prisma.eyebrows_style.create({
      data: {
        fill: req.eyebrows_style.fill,
        scale: req.eyebrows_style.scale,
        leftTranslateX: req.eyebrows_style.leftTranslateX,
        rightTranslateX: req.eyebrows_style.rightTranslateX,
        translateY: req.eyebrows_style.translateY,
        leftRotate: req.eyebrows_style.leftRotate,
        rightRotate: req.eyebrows_style.rightRotate,
      },
    });
    // 眉毛パーツ
    const newEyebrows = await prisma.eyebrows.create({
      data: {
        part_id: req.eyebrows_id,
        style_id: newEyebrowsStyle.id,
      },
    });
    // 目スタイル
    const newEyesStyle = await prisma.eyes_style.create({
      data: {
        fill: req.eyes_style.fill,
        scale: req.eyes_style.scale,
        leftTranslateX: req.eyes_style.leftTranslateX,
        rightTranslateX: req.eyes_style.rightTranslateX,
        translateY: req.eyes_style.translateY,
        leftRotate: req.eyes_style.leftRotate,
        rightRotate: req.eyes_style.rightRotate,
      },
    });
    // 眉毛パーツ
    const newEyes = await prisma.eyes.create({
      data: {
        part_id: req.eyes_id,
        style_id: newEyesStyle.id,
      },
    });
    // 口スタイル
    const newMouthStyle = await prisma.mouth_style.create({
      data: {
        fill: req.mouth_style.fill,
        translateY: req.mouth_style.translateY,
      },
    });
    // 口パーツ
    const newMouth = await prisma.mouth.create({
      data: {
        part_id: req.mouth_id,
        style_id: newMouthStyle.id,
      },
    });

    // body登録
    const newBodyParts = await prisma.body.create({
      data: {
        user_id: 1,
        hair_id: newHair.id,
        eyebrows_id: newEyebrows.id,
        eyes_id: newEyes.id,
        mouth_id: newMouth.id,
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
