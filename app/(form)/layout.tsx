import { ReactNode } from "react";

import { FormProvider } from "~/app/FormProvider";

export default function Layout({ children }: { children: ReactNode }) {
  return <FormProvider>{children}</FormProvider>;
}
