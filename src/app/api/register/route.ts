import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {}

export async function POST(request: Request, response: Response) {
    // ユーザーを新規作成する。
    try {
        const prisma = new PrismaClient();
        const newUser = await prisma.user.create({
            data: {
                username: "aaaa",
                gender: "otoko",
                date_of_birth: "1999/01/30",
                email: "two.@gmai.com",
                password: "aaaaaaaaaaaa",
                deleteflg: "0",
            },
        });
        return NextResponse.json({ message: newUser }, { status: 300 });
    } catch (e) {
        return NextResponse.json({ message: e }, { status: 500 });
    }
}
