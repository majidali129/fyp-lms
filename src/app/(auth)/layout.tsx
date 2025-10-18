import type { Metadata } from "next";
import type { ReactNode } from "react";

import { AuthHeader } from "@/features/auth/components/auth-header";

export const authMetadata: Metadata = {
  title: "Create New Account",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col h-screen">
      <AuthHeader />
      <main className="flex-center flex-1">{children}</main>
    </section>
  );
}
