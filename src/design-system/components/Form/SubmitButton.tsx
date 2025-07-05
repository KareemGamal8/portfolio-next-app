"use client";

import { useSubmitButton } from "@mongez/react-form";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type SubmitButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function SubmitButton({
  children,
  className,
  ...props
}: SubmitButtonProps) {
  const { isSubmitting } = useSubmitButton();

  return (
    <button
      {...props}
      type="submit"
      className={twMerge(
        "w-full uppercase rounded-md border-2 text-xl bg-secondary/90 duration-500 border-secondary hover:bg-cyan-600/50 px-6 py-4 font-bold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
      disabled={isSubmitting}
    >
      {children}
    </button>
  );
}
