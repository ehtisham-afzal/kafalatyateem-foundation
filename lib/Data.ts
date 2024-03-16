export interface ServicesAndFacilitiesType {
    Title: string,
    IconName: "BookText" | "IceCream2" | "Shirt" | "School" | "Moon" | undefined,
    Description: string,
    className?: string
}

export const GalleryPhotos = [
    { src: "/kids.jpg", colSpan: 2, rowSpan: 2, alt: "Kids" },
    { src: "/children1.jpg", colSpan: 1, rowSpan: 1, alt: "Childrens" },
    { src: "/dove.jpg", colSpan: 1, rowSpan: 1, alt: "dove" },
    { src: "/hands.jpg", colSpan: 1, rowSpan: 1, alt: "Hands" },
    { src: "/hope.jpg", colSpan: 1, rowSpan: 1, alt: "Hope" },
    { src: "/children.jpg", colSpan: 2, rowSpan: 2, alt: "Childrens" },
]

export const ServicesAndFacilities: ServicesAndFacilitiesType[] = [
    { Title: "Education", IconName: "BookText", Description: "Nursery to 10th class English Medium School." },
    { Title: "Food", IconName: "IceCream2", Description: "Providing daily food." },
    { Title: "Cloths", IconName: "Shirt", Description: "Provide annually two suit (i.e. school uniform)" },
    { Title: "Shelter", IconName: "School", Description: "Accommodation twenty four hours in hostel" },
    { Title: "Islamic Teaching", IconName: "Moon", Description: "Hifz & Tajweed, Islamic teachings." },
]

export const SocialLinks = [
    {
        Name: "Facebook",
        IdURL: "https://www.facebook.com/people/Kafalate-Yateem-Foundation-District-Malakand/100064620314998/",
    },
    {
        Name: "Youtube",
        IdURL: "https://youtube.com/kafalatyateem",
    },
];

export const NavLinks = [
    { Name: "Aboute us", Link: "/About" },
    { Name: "Donate", Link: "/Donate" },
    { Name: "TeamBehind", Link: "/TeamBehind" },
    { Name: "Services", Link: "/Services" },
]