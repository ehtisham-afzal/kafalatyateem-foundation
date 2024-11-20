"use client";
import React from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useActionState } from "react";
import { ContactUSForm } from "@/actions/contactUsActions";

const ContactUsForm = () => {
  const initialState = { message: "", errors: {} };
  const [state, formAction, isPending] = useActionState(ContactUSForm, initialState);
  
  return (
    <form
      action={formAction}
      className="w-full pb-24 space-y-6"
    >
      <div className="grid sm:grid-cols-2 gap-2 w-full">
        <div className="space-y-2">
          <Label htmlFor="name">Name*</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
          {state?.errors?.name &&
            state.errors.name.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email*</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          {state?.errors?.email &&
            state.errors.email.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" type="text" placeholder="Subject" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message*</Label>
        <Textarea id="message" name="message" className="min-h-32" placeholder="Message" />
        {state?.errors?.message &&
          state.errors.message.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      {state?.message && (
        <p className="mt-2 text-sm text-red-500">{state.message}</p>
      )}
      <Button type="submit" className="float-right mt-4" disabled={isPending}>
        {isPending && <Loader2 className="size-5 mx-2 animate-spin" />}
        {isPending ? "Submiting..." : "Send message"}
      </Button>
    </form>
  );
};

export default ContactUsForm;
