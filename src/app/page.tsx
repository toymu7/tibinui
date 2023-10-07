"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./login.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LoginForm {
    email: string;
    password: string;
}

const validationSchema = z.object({
    email: z
        .string()
        .nonempty("メールアドレスは必須です")
        .email("正しいメールアドレスを入力してください"),
    password: z.string().nonempty("パスワードは必須です"),
});

export default function Login() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        mode: "onSubmit",
        // reValidateMode: "onSubmit",
        resolver: zodResolver(validationSchema),
    });

    const onSubmit = async (requestData: LoginForm) => {
        console.log("Submitted Data", requestData);
        const res = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: requestData.email,
                password: requestData.password,
            }),
            cache: "no-store",
        });

        const data = await res.json();
        console.log(data);

        if (data.token) {
            console.log("ログイン成功");
            localStorage.setItem("token", data.token);
            router.push("./main");
        }
    };

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>ちびぬい</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email" className={styles.formLabel}>
                    メールアドレス
                </label>
                <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className={styles.formInput}
                />
                {errors.email && (
                    <p className={styles.errorMessage}>
                        {errors.email.message}
                    </p>
                )}

                <label htmlFor="password" className={styles.formLabel}>
                    パスワード
                </label>
                <input
                    id="password"
                    type="password"
                    {...register("password")}
                    className={styles.formInput}
                />
                {errors.password && (
                    <p className={styles.errorMessage}>
                        {errors.password.message}
                    </p>
                )}

                <button type="submit" className={styles.loginButton}>
                    ログイン
                </button>
                <div>
                    <p className={styles.forgetPasswordMessage}>初めての方は</p>
                </div>
                <Link href="/register" className={styles.registerButton}>
                    新規会員登録
                </Link>
            </form>
        </div>
    );
}
