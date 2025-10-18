"use client";
import { Loader } from "lucide-react";
import type { ReactElement } from "react";
import { cloneElement } from "react";
import { useFormStatus } from "react-dom";

import { Button } from "../ui/button";

type SubmitButtonProps = {
  label: string;
  icon?: ReactElement<{ className: string }>;
};
export const SubmitButton = ({ label, icon }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending ? "Wait" : label}
      {pending && <Loader className="w-4 h-4 animate-spin repeat-infinite" />}
      {icon && !pending && cloneElement(icon, { className: "w-4 h-4" })}
    </Button>
  );
};
