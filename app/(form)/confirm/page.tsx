"use client";

import { useFormMetadata } from "@conform-to/react";
import { useFormStatus } from "react-dom";

import { LoginSchema } from "~/app/schema";

export default function Page() {
  const { pending } = useFormStatus();
  const form = useFormMetadata<LoginSchema>("hoge");

  return (
    <div className="space-y-4">
      {/* <input type="hidden" name="email" value={form.value?.email} />
      <input type="hidden" name="password" value={form.value?.password} />
      <input type="hidden" name="remember" value={form.value?.remember} /> */}

      <div>email: {form.value?.email}</div>
      <div>password: {form.value?.password}</div>
      <div>remember: {form.value?.remember}</div>

      {/* <input form={form.id} type="hidden" name="intent" value="second" /> */}

      <button className="border" disabled={pending} name="intent" value="second">
        送信する
      </button>
    </div>
  );
}
