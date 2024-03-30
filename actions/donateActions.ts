"use server"

import db from "@/db/drizzle"
import { donate } from "@/db/schema"
import { donateFormTypes } from "@/lib/types"

const donateNow = async ({ name, amount, email, payment_method, address, city, country, phone }: donateFormTypes) => {
    db.insert(donate).values({
        name: name,
        amount: amount,
        email: email,
        payment_method: payment_method,
        address: address,
        city: city,
        country: country,
        phone: phone,
    })
}