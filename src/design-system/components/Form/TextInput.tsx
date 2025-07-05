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
  withAdLabel?: boolean;
  name?: string;
  iconStyle?: string;
  className?: string;
  ref?: any;
} & FormControlProps;

export function TextInput({
  containerStyles,
  className,
  icon,
  ref,
  ...props
}: TextInputProps) {
  const { value, changeValue, type, otherProps, error, disabled } =
    useFormControl({
      rules: props.rules || [requiredRule, patternRule, integerRule],
      ...props,
    });

  return (
    <div
      className={twMerge("flex w-full flex-1 flex-col gap-1", containerStyles)}
    >
      <div className="relative">
        <input
          {...otherProps}
          disabled={disabled}
          ref={ref}
          // id={id}
          type={type}
          name={props.name}
          value={value}
          onChange={(e) => {
            if (e.target.value.trim().length === 0 && value.length < 1)
              return null;
            changeValue(e.target.value.trimStart());
          }}
          className={twMerge(
            "w-full text-white text-lg font-semibold placeholder:text-white rounded-md border-2 border-secondary border-solid px-6 py-4 tracking-wide outline-none",
            className,
            icon && "ltr:pl-12 rtl:pr-12",
            error && "border-red-700/50 focus-within:border-2"
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
