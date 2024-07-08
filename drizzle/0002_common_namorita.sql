ALTER TABLE "homePagePhotos" RENAME TO "homePageGalleryPhotos";--> statement-breakpoint
ALTER TABLE "homePageGalleryPhotos" ADD COLUMN "colSpan" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "homePageGalleryPhotos" ADD COLUMN "rowSpan" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "homePageGalleryPhotos" ADD COLUMN "alt" text NOT NULL;