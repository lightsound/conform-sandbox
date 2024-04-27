"use client";

import { ReactNode, useActionState } from "react";

import { FormProvider as ConformProvider, getFormProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";

import { login } from "~/app/actions";
import { loginSchema } from "~/app/schema";

export function FormProvider({ children }: { children: ReactNode }) {
  const [lastResult, action] = useActionState(login, null);
  const [form, fields] = useForm({
    id: "hoge",
    constraint: getZodConstraint(loginSchema),
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema });
    },
  });

  return (
    <ConformProvider context={form.context}>
      {/* <FormStateInput />
      <form id={form.id} action={action} /> */}

      <form {...getFormProps(form)} action={action}>
        {/* <div>
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
        </div> */}

        {children}
      </form>
    </ConformProvider>
  );
}
