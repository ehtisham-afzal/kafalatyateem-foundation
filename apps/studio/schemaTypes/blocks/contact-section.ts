import { defineField, defineType, defineArrayMember } from "sanity";
import { EnvelopeIcon } from "@sanity/icons";

export const contactSection = defineType({
  name: "contactSection",
  title: "Contact Section",
  type: "object",
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      description: "The smaller text that sits above the title to provide context",
      type: "string",
    }),
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      description: "The large text that is the primary focus of the section",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sectionDescription",
      title: "Section Description",
      description: "Additional context explaining this contact section",
      type: "richText",
    }),
    defineField({
      name: "formFields",
      title: "Form Fields",
      description: "Customize the form field placeholders",
      type: "object",
      fields: [
        defineField({
          name: "namePlaceholder",
          title: "Name Placeholder",
          type: "string",
          initialValue: "Name",
        }),
        defineField({
          name: "emailPlaceholder",
          title: "Email Placeholder",
          type: "string",
          initialValue: "Email",
        }),
        defineField({
          name: "messagePlaceholder",
          title: "Message Placeholder",
          type: "string",
          initialValue: "Type your message",
        }),
      ],
    }),
    defineField({
      name: "privacyText",
      title: "Privacy Policy Text",
      description: "Text displayed before the privacy policy link",
      type: "string",
      initialValue: "By selecting this you agree to our",
    }),
    defineField({
      name: "privacyLink",
      title: "Privacy Policy Link",
      description: "Link to the privacy policy page",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Link Text",
          type: "string",
          initialValue: "Privacy Policy",
        }),
        defineField({
          name: "url",
          title: "URL",
          type: "string",
          initialValue: "/privacy-policy",
        }),
      ],
    }),
    defineField({
      name: "submitText",
      title: "Submit Button Text",
      type: "string",
      initialValue: "Send message",
    }),
    defineField({
      name: "officesTitle",
      title: "Offices Section Title",
      type: "string",
      initialValue: "Visit our offices",
    }),
    defineField({
      name: "officesDescription",
      title: "Offices Section Description",
      type: "text",
    }),
    defineField({
      name: "officeLocations",
      title: "Office Locations",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "region",
              title: "Region/City",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "address",
              title: "Address",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "zipCode",
              title: "ZIP Code/Additional Info",
              type: "string",
            }),
            defineField({
              name: "coordinates",
              title: "Map Coordinates",
              type: "object",
              fields: [
                defineField({
                  name: "lat",
                  title: "Latitude",
                  type: "number",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "lng",
                  title: "Longitude",
                  type: "number",
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: "region",
              subtitle: "address",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "emailTitle",
      title: "Email Section Title",
      type: "string",
      initialValue: "Email us",
    }),
    defineField({
      name: "emailDescription",
      title: "Email Section Description",
      type: "text",
    }),
    defineField({
      name: "emailDepartments",
      title: "Email Departments",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Department Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "email",
              title: "Email Address",
              type: "string",
              validation: (Rule) => Rule.required().email(),
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "email",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "socialTitle",
      title: "Social Media Section Title",
      type: "string",
      initialValue: "Follow us",
    }),
    defineField({
      name: "socialPlatforms",
      title: "Social Media Platforms",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Platform Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "Profile URL",
              type: "url",
              validation: (Rule) => Rule.required().uri({
                scheme: ["http", "https"]
              }),
            }),
            defineField({
              name: "icon",
              title: "Icon Name",
              type: "string",
              options: {
                list: [
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                  { title: "GitHub", value: "github" },
                  { title: "Dribbble", value: "dribbble" },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "url",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "mapsApiKey",
      title: "Google Maps API Key",
      description: "API key for Google Maps integration",
      type: "string",
    }),
    defineField({
      name: "mapsDefaultZoom",
      title: "Default Map Zoom Level",
      description: "Zoom level for the Google Map (1-20, where 1 is world view and 20 is building view)",
      type: "number",
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(20),
    }),
    defineField({
      name: "mapsDefaultCenter",
      title: "Default Map Center",
      description: "Default center coordinates for the map",
      type: "object",
      fields: [
        defineField({
          name: "lat",
          title: "Latitude",
          type: "number",
          initialValue: 35.0844,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "lng",
          title: "Longitude",
          type: "number",
          initialValue: -106.6504,
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
      subtitle: "sectionLabel",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Contact Section",
        subtitle: subtitle || "Get in touch with us",
      };
    },
  },
});
