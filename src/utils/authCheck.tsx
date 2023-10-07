"use client";
import { useRouter } from "next/navigation";

export default function authCheck() {
    const router = useRouter();
    const token = localStorage.getItem("token");
    if (!token) {
        router.push("../.");
    }
}
