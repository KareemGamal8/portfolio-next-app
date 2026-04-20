"use client";

import {
  FormControlProps,
  integerRule,
  patternRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import { JSX } from "react";
import { twMerge } from "tailwind-merge";
import InputError from "./InputError";

type TextInputProps = {
  containerStyles?: string;
  icon?: JSX.Element;
  labelStyles?: string;
  withAdLabel?: boolean;
  iconStyle?: string;
  ref?: any;
} & FormControlProps;

export function TextareaInput({
  containerStyles,
  icon,
  ref,
  ...props
}: TextInputProps) {
  const { value, changeValue, type, otherProps, name, error } = useFormControl({
    rules: props.rules || [requiredRule, patternRule, integerRule],
    ...props,
  });

  return (
    <div
      className={twMerge("flex w-full flex-1 flex-col gap-1", containerStyles)}
    >
      <div className="relative">
        <textarea
          {...otherProps}
          type={type}
          ref={ref}
          name={name}
          value={value}
          onChange={(e) => {
            changeValue(e.target.value.trimStart());
          }}
          className={twMerge(
            "w-full bg-white/5 text-white text-lg font-bold placeholder:text-white/20 rounded-2xl border border-white/10 px-6 py-5 tracking-tight outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300 min-h-[150px] resize-none",
            icon && "ltr:pl-14 rtl:pr-14",
            error && "border-red-500/50 focus:border-red-500",
            otherProps.className,
          )}
        />
        {icon && (
          <div className="absolute top-1/2 -translate-y-1/2 ltr:left-4 rtl:right-4">
            {icon}
          </div>
        )}
      </div>
      <InputError error={error} />
    </div>
  );
}
