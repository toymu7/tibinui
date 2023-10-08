import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

/**
 * ログイン検証する。
 */
export async function POST(request: Response) {
    try {
        const req = await request.json();
        const prisma = new PrismaClient();
        // 項目の数の制約上、一部ベタ書き
        const loginUser = await prisma.user.findFirst({
            where: {
                email: req.email,
                password: req.password,
            },
        });
        if (loginUser) {
            return NextResponse.json(
                { message: "メッセージ成功", token: "token" },
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
