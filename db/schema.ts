import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const donate = pgTable("donate", {
    id: serial("id").primaryKey(),
    amount: integer("amount").notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    date: timestamp("date").defaultNow(),
    payment_method: text("payment_method").notNull(),
    phone: text("phone"),
    country: text("country"),
    city: text("city"),
    address: text("address")
})

export const userMessages = pgTable("userMessages", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    subject: text("subject"),
    message: text("message").notNull(),
    date: timestamp("date").defaultNow()
})

export const members = pgTable("members", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    designation: text("designation").notNull(),
    groupMember: text("groupMember").notNull(),
    cnic: text("cnic").notNull(),
    phoneNo: text("phoneNo"),
    address: text("address"),
    imageUrl: text("imageUrl").notNull()
})

export const heroPhotos = pgTable("heroPhotos", {
    id: serial("id").primaryKey(),
    imageUrl: text("imageUrl").notNull()
})

export const homePageGalleryPhotos = pgTable("homePageGalleryPhotos", {
    id: serial("id").primaryKey(),
    imageUrl: text("imageUrl").notNull(),
    colSpan: integer("colSpan").notNull(),
    rowSpan: integer("rowSpan").notNull(),
    alt: text("alt").notNull(),
})

