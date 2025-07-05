"use client";
import React from "react";

export type InputErrorProps = {
  // props go here
  error?: React.ReactNode;
};
export default function InputError({ error }: InputErrorProps) {
  if (!error) return null;

  console.log(error);

  return (
    <span className="font-semibold text-sm mt-2 text-red-600">{error}</span>
  );
}
