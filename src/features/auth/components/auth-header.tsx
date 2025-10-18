"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { signInPath, signUpPath } from "@/paths";

export const AuthHeader = () => {
  const pathName = usePathname();

  return (
    <nav className="px-5 md:px-20 py-2.5 flex bg-sidebar border-b items-center justify-between">
      <Logo />
      <div className=" hidden md:flex items-center gap-2 ">
        <p>{pathName === "/sign-in" ? "Don't have an account?" : "Already have an account?"} </p>
        <Button asChild variant="secondary">
          <Link href={pathName === "/sign-in" ? signUpPath() : signInPath()}>
            {pathName === "/sign-in" ? "Create Account" : "Sign In"}
          </Link>
        </Button>
      </div>
    </nav>
  );
};
