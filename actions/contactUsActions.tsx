"use server";

import db from "@/db/drizzle";
import { userMessages } from "@/db/schema";
import { redirect } from "@/navigation";
import { z } from "zod";

const contactUsFormSchema = z.object({
  name: z
    .string({ required_error: "Name pleas name are required" })
    .min(4, { message: "Name must be 4 characters" }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "message must be at leat 10 charactors" }),
});

export type contactUSFormState = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
};

export const ContactUSForm = async (
  prevState: contactUSFormState | undefined,
  formData: FormData
) => {
  // Validate form using Zod
  const validatedFields = contactUsFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Please fill required fields",
    };
  }

  // Prepare data for insertion into the database
  const { name, email, subject, message } = validatedFields.data;
  // Insert data into the database
  try {
    await db.insert(userMessages).values({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
  } catch (error) {
    console.log(error);
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  //   Revalidate the cache for the invoices page and redirect the user.

  redirect("/");
};
