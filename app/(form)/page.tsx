"use client";

import { useActionState } from "react";

import { getFormProps, getInputProps, useForm, useFormMetadata } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { useFormStatus } from "react-dom";

import { login } from "~/app/actions";
import { LoginSchema, loginSchema } from "~/app/schema";

export default function Page() {
  const { pending } = useFormStatus();
  const form = useFormMetadata<LoginSchema>("hoge");
  const fields = form.getFieldset();

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor={fields.email.id}>Email</label>
        <input {...getInputProps(fields.email, { type: "email" })} />
        <div id={fields.email.errorId}>{fields.email.errors}</div>
      </div>

      <div>
        <label htmlFor={fields.password.id}>Password</label>
        <input {...getInputProps(fields.password, { type: "password" })} />
        <div id={fields.password.errorId}>{fields.password.errors}</div>
      </div>

      <div>
        <label htmlFor={fields.remember.id}>Remember me</label>
        <input {...getInputProps(fields.remember, { type: "checkbox" })} />
        <div id={fields.remember.errorId}>{fields.remember.errors}</div>
      </div>

      {/* <input form={form.id} type="hidden" name="intent" value="first" /> */}

      <button
        // form={form.id}
        className="border"
        disabled={pending}
        name="intent"
        value="first"
      >
        確認画面へ
      </button>
    </div>
  );
}
