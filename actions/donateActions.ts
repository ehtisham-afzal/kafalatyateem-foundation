"use server"

import db from "@/db/drizzle"
import { donate } from "@/db/schema"
import { revalidatePath } from "next/cache"
import { redirect } from "@/navigation"
import { z } from "zod"

const donateFormSchema = z.object({
    amount: z.number().min(5, { message: "oh please be generous its to minimum" }),
    name: z.string({ required_error: "Name pleas name are required" }).min(4, { message: "Name must be 4 characters" }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    country: z.string().optional(),
    phone: z.string().optional(),
    city: z.string().optional(),
    address: z.string().optional(),
    payment_method: z.enum(["easyPaise/jazzCash", "payViaCardOnline", "directBankTransfer", "payPal"]),
});


export type donateFormState = {
    errors?: {
        name?: string[];
        amount?: string[];
        email?: string[];
    };
    message?: string | null;
};

export const donateForm = async (prevState: donateFormState | undefined, formData: FormData) => {

    // Validate form using Zod
    const validatedFields = donateFormSchema.safeParse({
        amount: Number(formData.get('amount')),
        name: formData.get('name'),
        email: formData.get('email'),
        address: formData.get('address'),
        city: formData.get('city'),
        country: formData.get('country'),
        phone: formData.get('phone'),
        payment_method: formData.get("payment_method")
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Please fill required fields',
        };
    }


    // Prepare data for insertion into the database
    const { name, amount, email, address, city, country, phone, payment_method } = validatedFields.data;
    // Insert data into the database
    try {
        await db.insert(donate).values({
            name: name,
            amount: amount,
            email: email,
            payment_method: payment_method,
            address: address,
            city: city,
            country: country,
            phone: phone,
        })
    } catch (error) {
        console.log(error)
        // If a database error occurs, return a more specific error.
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }


    // Revalidate the cache for the invoices page and redirect the user.
    redirect(payment_method === "directBankTransfer" ? '/Donate/BankAccounts?type=normal&currencySupport=PKR' : payment_method === "easyPaise/jazzCash" ? "/Donate/BankAccounts?type=microFinance&currencySupport=PKR" : "/Donate");
}