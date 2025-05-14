import { BarChart3 } from "lucide-react";
import { defineField, defineType } from "sanity";

export const stats = defineType({
  name: "stats",
  title: "Stats",
  type: "object",
  icon: BarChart3,
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      description:
        "The smaller text that sits above the title to provide context",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The large text that is the primary focus of the block",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Additional context explaining the statistics section",
    }),
    defineField({
      name: "stats",
      title: "Statistics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Stat Title",
              type: "string",
              description: "The label for this statistic",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "value",
              title: "Stat Value",
              type: "string",
              description:
                "The numerical value or percentage (e.g., '2,400%', '$410K')",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Stat Description",
              type: "text",
              description:
                "A brief explanation of what this statistic represents",
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      stats: "stats",
    },
    prepare: ({ title, stats }) => {
      const statsCount = stats?.length ?? 0;
      return {
        title: title || "Stats Section",
        subtitle: `${statsCount} statistic${statsCount === 1 ? "" : "s"}`,
      };
    },
  },
});
