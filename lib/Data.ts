export interface ServicesAndFacilitiesType {
    Title: string,
    IconName: "Book" | "IceCream2" | "Shirt" | "Home" | "Moon" | undefined,
    Description: string
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
    { Title: "Education", IconName: "Book", Description: "Nursery to 10th class English Medium School." },
    { Title: "Food", IconName: "IceCream2", Description: "Providing daily food." },
    { Title: "Cloths", IconName: "Shirt", Description: "Provide annually two suit (i.e. school uniform)" },
    { Title: "Shelter", IconName: "Home", Description: "Accommodation twenty four hours in hostel" },
    { Title: "Islamic Teaching", IconName: "Moon", Description: "Hifz & Tajweed, Islamic teachings." },
]