"use server"
import db from "@/db/drizzle"
import { heroPhotos, homePageGalleryPhotos, members } from "@/db/schema"
import { eq } from "drizzle-orm";

export const getAllmembersData = async () => {
    const membersData = await db.select().from(members)
    return membersData;
}

export const getExectiveBodyMembersData = async (count: number) => {
    /// select members where groupMember = "ExativeBodyMember" limit count; 
    const membersData = await db.select().from(members).where(eq(members.groupMember, "ExativeBodyMember")).limit(count)
    return membersData;
}

export const fetchHeroImages = async () => {
    const heroImages = await db.select().from(heroPhotos)
    return heroImages;
}

export const uploadHeroImage = async (imageUrl: string) => {
    const heroImage = await db.insert(heroPhotos).values({ imageUrl }).execute()
    return heroImage;
}

export const deleteHeroImage = async (id: number) => {
    const deletedImage = await db.delete(heroPhotos).where(eq(heroPhotos.id, id)).execute()
    return deletedImage;
}

export const getHomePageGalleryPhotos = async () => {
    const galleryPhotos = await db.select().from(homePageGalleryPhotos).limit(6)
    return galleryPhotos;
}

export const updateGalleryImageByID = async (id: number, imageUrl: string, alt: string) => {
    const updatedImage = await db.update(homePageGalleryPhotos).set({ imageUrl, alt }).where(eq(homePageGalleryPhotos.id, id)).execute()
    return updatedImage;
}

export const checkIfAdmin = async (email: string, password: string) => {
    if (email === "khange@gmail.com" && password === "123456") {
        return true;
    } else {
        return false;
    }
}