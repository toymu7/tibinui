"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./register.module.css";
import { useRouter } from "next/navigation";

interface RegisterForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const validationSchema = z
    .object({
        name: z.string().nonempty("名前は必須です"),
        email: z
            .string()
            .nonempty("メールアドレスは必須です")
            .email("正しいメールアドレスを入力してください"),
        password: z
            .string()
            .nonempty("パスワードは必須です")
            .min(10, "パスワードは10文字以上で入力してください"),
        confirmPassword: z
            .string()
            .nonempty("確認パスワードは必須です")
            .min(10, "パスワードは10文字以上で入力してください"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "パスワードが一致していません。",
        path: ["confirmPassword"],
    });

export default function Register() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterForm>({
        mode: "onChange",
        resolver: zodResolver(validationSchema),
    });

    const onSubmit = (requestData: RegisterForm) => {
        console.log("aaa");
        console.log("Submitted Dat", requestData);
        // const res = await fetch("http://localhost:3000/api/register", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         name: requestData.name,
        //         email: requestData.email,
        //         password: requestData.password,
        //     }),
        // });

        // const data = await res.json();
        // if (data.token) {
        console.log("aaa");
        if (true) {
            console.log("bbb");
            // alert("ログイン成功");
            // localStorage.setItem("token", data.token);

            router.push("./");
        }
    };

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>ちびぬい</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name" className={styles.formLabel}>
                    名前
                </label>
                <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className={styles.formInput}
                />
                {errors.name && (
                    <p className={styles.errorMessage}>{errors.name.message}</p>
                )}
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
                <label htmlFor="confirmPassword" className={styles.formLabel}>
                    パスワード確認用
                </label>
                <input
                    id="confirmPassword"
                    type="password"
                    {...register("confirmPassword")}
                    className={styles.formInput}
                />
                {errors.confirmPassword && (
                    <p className={styles.errorMessage}>
                        {errors.confirmPassword.message}
                    </p>
                )}
                <button type="submit" className={styles.registerButton}>
                    新規会員登録
                </button>
            </form>
        </div>
    );
}
