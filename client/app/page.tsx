"use client";
import { API_PUBLIC_KEY } from "@/data/constants";
import apiRoute from "@/services/api/router";
import { encryptWithPublicKey } from "@/utils/encrypt";
import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState({
    email: "roman@gmail.com",
    password: "romanojha123",
  });

  return (
    <main>
      <button
        onClick={() => {
          apiRoute.authRouter.loginUser(input);
        }}
      >
        Login
      </button>
    </main>
  );
}
