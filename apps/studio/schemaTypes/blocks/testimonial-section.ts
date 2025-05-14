// filepath: c:\ScriptCodes\turbo-start-sanity\apps\studio\schemaTypes\blocks\testimonial-section.ts
import { defineField, defineType, defineArrayMember } from "sanity";
import { Quote } from "lucide-react";

import { richTextField } from "../common";

export const testimonialSection = defineType({
  name: "testimonialSection",
  title: "Testimonial Section",
  type: "object",
  icon: Quote,
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      description: "The smaller text that sits above the title to provide context",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      description: "The main heading for this testimonial section",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Additional context explaining this testimonial section",
      type: "richText",
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      description: "Add testimonial quotes from clients or customers",
      type: "array",
      of: [
        defineArrayMember({
          name: "testimonial",
          title: "Testimonial",
          type: "object",
          fields: [
            defineField({
              name: "quote",
              title: "Quote",
              description: "The testimonial text from the client",
              type: "text",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "author",
              title: "Author",
              description: "Information about the person who gave this testimonial",
              type: "object",
              fields: [
                defineField({
                  name: "name",
                  title: "Name",
                  description: "The name of the person",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "title",
                  title: "Title or Company",
                  description: "The job title or company name of the person",
                  type: "string",
                }),
                defineField({
                  name: "avatar",
                  title: "Avatar",
                  description: "A photo of the person giving the testimonial",
                  type: "image",
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: "author.name",
              subtitle: "quote",
              media: "author.avatar",
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || "Unnamed Testimonial",
                subtitle: subtitle ? (subtitle.length > 50 ? `${subtitle.substring(0, 50)}...` : subtitle) : "",
                media: media || Quote,
              };
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      testimonials: "testimonials",
    },
    prepare: ({ title, testimonials }) => ({
      title: title || "Testimonial Section",
      subtitle: `${testimonials.length} testimonial${testimonials.length === 1 ? "" : "s"}`,
      media: Quote,
    }),
  },
});