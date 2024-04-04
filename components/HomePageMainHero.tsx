import React from "react";
import HeroCarousel from "./HeroCarousel";
import { fetchHeroImages } from "@/actions/actions";

const HomePageMainHero = async () => {
  const HeroImages = await fetchHeroImages();
  return <HeroCarousel Images={HeroImages} />;
};

export default HomePageMainHero;
