import { UsersRound } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export const teamBehined = defineType({
    type: "document",
    name: "teamBehined",
    title: "Team Behined",
    icon: UsersRound,
    fields: [
        defineField({
            type : "string",
            name : "name",
        }),
        defineField({
            type: "array",
            name: "teamBehined",
            title: "Team-behined",
            validation: (e) => e.required(),
            of: [{
                type: "object",
                name: "teammember",
                fields: [
                    defineField({
                        type: "string",
                        name: "name",
                        title: "Name",
                        validation: (e) => e.required(),
                    }),
                    defineField({
                        type: "image",
                        name: "image",
                        title: "Image"
                    }),
                    defineField({
                        type: "string",
                        name: "desegnation",
                        title: "Desegnation"
                    }),
                ],
            }],
        }),]
})