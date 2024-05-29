"use client";
import { API_PUBLIC_KEY } from "@/data/constants";
import { encryptWithPublicKey } from "@/utils/encrypt";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState({
    email: "roman@gmail.com",
    password: "romanojha123",
  });

  return <main></main>;
}
