import React from "react";
import HeroCarousel from "./HeroCarousel";
import { fetchHeroImages } from "@/actions/actions";

// Add route segment config for caching
export const revalidate = 3600; // Cache for 1 hour, adjust as needed

const HomePageMainHero = async () => {
  const HeroImages = await fetchHeroImages();
  return <HeroCarousel Images={HeroImages} />;
};

export default HomePageMainHero;
