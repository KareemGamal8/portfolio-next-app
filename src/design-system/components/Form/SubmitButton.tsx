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
        "w-full uppercase rounded-full bg-cyan-600 text-lg py-5 font-black text-black hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-xl shadow-cyan-900/20 disabled:cursor-not-allowed disabled:opacity-60 tracking-widest",
        className
      )}
      disabled={isSubmitting}
    >
      {children}
    </button>
  );
}
