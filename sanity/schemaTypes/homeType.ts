import { HomeIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity'

export const homePage = defineType({
    type: "document",
    name: "homePage",
    title: "Home page",
    icon: HomeIcon,
    preview: {
        prepare: () => ({
            title: "Home Page",
        }),
    },
    fields: [
        defineField({
            type: "string",
            name: "name",
            title: "Name"
        }),
        defineField({
            type: "array",
            name: "heroCarousel",
            title: "Hero-carousel",
            validation: (e) => e.required(),
            of: [{
                type: "object",
                name: "imagewithalt",
                fields: [
                    defineField({
                        type: "image",
                        name: "image",
                        title: "Image",
                        validation: (e) => e.required(),
                    }),
                    defineField({
                        type: "string",
                        name: "alt",
                        title: "Alt",
                        validation: (e) => e.required(),
                    }),
                ],
            }],
        }),
        defineField({
            type: "object",
            name: "heroSection",
            title: "Hero-section",
            validation: (e) => e.required(),
            fields: [
                defineField({
                    type: "string",
                    name: "title",
                    title: "Title",
                    validation: (e) => e.required(),
                }),
                defineField({
                    type: "text",
                    name: "description",
                    title: "Description",
                    validation: (e) => e.required(),
                }),
                defineField({
                    type: "object",
                    name: "heroimage",
                    title: "HeroImage",
                    fields: [
                        defineField({
                            type: "image",
                            name: "image",
                            title: "Image",
                            validation: (e) => e.required(),
                        }),
                        defineField({
                            type: "string",
                            name: "alt",
                            title: "Alt",
                            validation: (e) => e.required(),
                        }),
                    ],
                    validation: (e) => e.required(),
                }),
                defineField({
                    type: "array",
                    name: "buttons",
                    title: "Buttons",
                    validation: (e) => e.required(),
                    of: [{
                        type: "object",
                        name: "link",
                        fields: [
                            defineField({
                                type: "string",
                                name: "text",
                                title: "Text",
                                validation: (e) => e.required(),
                            }),
                            defineField({
                                type: "slug",
                                name: "href",
                                title: "href",
                                validation: (e) => e.required(),
                            }),
                        ],
                    }],
                }),
            ],
        }),
        // Reference to servicesandfacilitiessection document
        defineField({
            type: "reference",
            name: "servicesAndFacilitiesSection",
            title: "Services-and-facilities-section",
            to: [{ type: "servicesandfacilitiessection" }],
            validation: (e) => e.required(),
        }),
        defineField({
            type: "array",
            name: "galleryImages",
            title: "Gallery-images",
            validation: (e) => e.required(),
            of: [{
                type: "object",
                name: "imagewithalt",
                fields: [
                    defineField({
                        type: "image",
                        name: "image",
                        title: "Image",
                        validation: (e) => e.required(),
                    }),
                    defineField({
                        type: "string",
                        name: "alt",
                        title: "Alt",
                        validation: (e) => e.required(),
                    }),
                ],
            }],
        }),
        defineField({
            type: "object",
            name: "orphansWeHave",
            title: "Orphans-we-have",
            validation: (e) => e.required(),
            fields: [
                defineField({
                    type: "string",
                    name: "mainTitle",
                    title: "Main title",
                    validation: (e) => e.required(),
                }),
                defineField({
                    type: "object",
                    name: "orphans",
                    title: "Orphans",
                    fields: [
                        defineField({
                            type: "number",
                            name: "male",
                            title: "Male",
                            validation: (e) => e.required(),
                        }),
                        defineField({
                            type: "number",
                            name: "female",
                            title: "FeMale",
                            validation: (e) => e.required(),
                        }),
                    ]
                })
            ],
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
        }),
        defineField({
            type: "object",
            name: "ctaSection",
            title: "CTA-section",
            validation: (e) => e.required(),
            fields: [
                defineField({
                    type: "string",
                    name: "title",
                    title: "Title",
                    validation: (e) => e.required(),
                }),
                defineField({
                    type: "string",
                    name: "description",
                    title: "Description",
                    validation: (e) => e.required(),
                }),
                defineField({
                    type: "object",
                    name: "href",
                    title: "Href",
                    validation: (e) => e.required(),
                    fields: [
                        defineField({
                            type: "string",
                            name: "text",
                            title: "Text",
                            validation: (e) => e.required(),
                        }),
                        defineField({
                            type: "slug",
                            name: "href",
                            title: "href",
                            validation: (e) => e.required(),
                        }),
                    ],
                }),
            ],
        }),
    ],
});
