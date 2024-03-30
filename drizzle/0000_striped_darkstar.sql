CREATE TABLE IF NOT EXISTS "donate" (
	"id" serial PRIMARY KEY NOT NULL,
	"amount" integer NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"date" timestamp DEFAULT now(),
	"payment_method" text NOT NULL,
	"phone" integer,
	"country" text,
	"city" text,
	"address" text,
	CONSTRAINT "donate_id_unique" UNIQUE("id")
);
