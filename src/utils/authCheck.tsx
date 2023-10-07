"use client";
import { useRouter } from "next/navigation";

export default function authCheck() {
    // 実装時はコメントアウトした方が良い
    const router = useRouter();
    const token = localStorage.getItem("token");
    if (!token) {
        router.push("../.");
    }
}
