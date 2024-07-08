CREATE TABLE IF NOT EXISTS "heroPhotos" (
	"id" serial PRIMARY KEY NOT NULL,
	"imageUrl" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "homePagePhotos" (
	"id" serial PRIMARY KEY NOT NULL,
	"imageUrl" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "members" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"designation" text NOT NULL,
	"groupMember" text NOT NULL,
	"cnic" text NOT NULL,
	"phoneNo" text,
	"address" text,
	"imageUrl" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "userMessages" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"subject" text,
	"message" text NOT NULL,
	"date" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "donate" DROP CONSTRAINT "donate_id_unique";--> statement-breakpoint
ALTER TABLE "donate" ALTER COLUMN "phone" SET DATA TYPE text;