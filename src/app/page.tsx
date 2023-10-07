"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./login.module.css";
import Link from "next/link";

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
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        mode: "onChange",
        resolver: zodResolver(validationSchema),
    });

    const onSubmit = (data: LoginForm) => {
        console.log("Submitted Data", data);
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
