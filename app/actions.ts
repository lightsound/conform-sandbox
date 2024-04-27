"use server";

import { redirect } from "next/navigation";

import { parseWithZod } from "@conform-to/zod";

import { loginSchema } from "~/app/schema";

export async function login(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, { schema: loginSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const intent = formData.get("intent");

  if (intent === "first") {
    redirect("/confirm");
  }

  if (intent === "second") {
    redirect("/confirm");
  }
}
