import { defineField, defineType } from "sanity";

export const servicesandfacilitiessection = defineType({
    type: "document",
    name: "servicesandfacilitiessection",
    title: "ServicesAndFacilitiesSection",
    fields: [
      defineField({
        type: "string",
        name: "title",
        title: "Title",
        validation: (e) => e.required(),
      }),
      defineField({
        type: "array",
        name: "facilities",
        title: "Facilities",
        validation: (e) => e.required(),
        of: [{
          type: "object",
          name: "facilities",
          fields: [
            defineField({
              type: "string",
              name: "facility",
              title: "Facility",
              validation: (e) => e.required(),
            }),
            defineField({
              type: "text",
              name: "description",
              title: "Description",
              validation: (e) => e.required(),
            }),
            defineField({
              type: "string",
              name: "lucidiconname",
              title: "LucidIconName",
            }),
          ],
        }],
      }),
    ],
  });