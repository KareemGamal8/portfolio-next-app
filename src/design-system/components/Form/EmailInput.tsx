"use client";

import { FormControlProps, emailRule, requiredRule } from "@mongez/react-form";
import { TextInput } from "./TextInput";

export function EmailInput(props: FormControlProps) {
  return (
    <TextInput type="email" rules={[emailRule, requiredRule]} {...props} />
  );
}
