"use client";

import {
  EmailInput,
  SubmitButton,
  TextareaInput,
  TextInput,
} from "@/design-system/components/Form";
import { Form, HiddenInput } from "@mongez/react-form";
import { useContact } from "../hooks";

export function ContactMeForm() {
  const { handleContactMeForm } = useContact();

  return (
    <div className="container my-12">
      <Form
        id="contact-form"
        className="flex flex-col gap-4 text-white"
        onSubmit={handleContactMeForm}
      >
        <HiddenInput
          name="access_key"
          value="2cb236bc-f766-41ee-9736-4c606e0975b1"
        />
        <TextInput name="name" placeholder="Enter Your Name" required />
        <EmailInput placeholder="Enter Your E-mail" name="email" required />
        <TextareaInput
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
        />
        <SubmitButton>Send Message</SubmitButton>
      </Form>
    </div>
  );
}
