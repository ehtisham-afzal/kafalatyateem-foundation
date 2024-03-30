import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const donate = pgTable("donate", {
    id: serial("id").primaryKey().unique(),
    amount: integer("amount").notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    date: timestamp("date").defaultNow(),
    payment_method: text("payment_method").notNull(),
    phone: integer("phone"),
    country: text("country"),
    city: text("city"),
    address: text("address")
})