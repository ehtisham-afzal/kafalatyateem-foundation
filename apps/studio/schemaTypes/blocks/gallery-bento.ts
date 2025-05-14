import { Grid3X3Icon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const galleryBento = defineType({
  name: "galleryBento",
  title: "Gallery Bento Grid",
  type: "object",
  icon: Grid3X3Icon,
  fields: [
    defineField({
      name: "label",
      title: "Label",
      description: "The section label that appears above the title (optional)",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      description: "The main heading for this gallery section",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "A brief description of the gallery section",
      type: "text",
    }),
    defineField({
      name: "images",
      title: "Gallery Images",
      description:
        "Images to display in the gallery (recommended: 5 images - first image will be featured as large)",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alt Text",
              description: "Alternative text for accessibility and SEO",
            }),
            defineField({
              name: "size",
              type: "string",
              title: "Image Size",
              description: "Size/layout of the image in the gallery grid",
              options: {
                list: [
                  { title: "Large", value: "large" },
                  { title: "Medium", value: "medium" },
                  { title: "Small", value: "small" },
                ],
              },
              initialValue: "medium",
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(2).max(5),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "images.0",
      Images: "images",
    },
    prepare: ({ title, subtitle, media, Images }) => ({
      title: title || "Gallery Bento Grid",
      subtitle: `${Images.length} image${Images.length === 1 ? "" : "s"}${subtitle ? ` - ${subtitle}` : ""}`,
      media: media || Grid3X3Icon,
    }),
  },
});
