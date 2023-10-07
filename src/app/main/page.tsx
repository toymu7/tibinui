"use client";

import React from "react";
import authCheck from "@/utils/authCheck";

export default function Main() {
    const check = authCheck();
    return <h1>Main</h1>;
}
