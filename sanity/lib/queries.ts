import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

export const POSTS_SLUGS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]{ 
  "slug": slug.current
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

export const HOME_QUERY = defineQuery(`*[_type == "homePage"][0]{
  "herocarousel": heroCarousel[]{
    "url": image.asset->url,
    alt
  },heroSection{
    title,
    description,
    heroimage{
      "image" : image.asset->url,
      alt
    },
    "buttons" : buttons[]{
      text,
      "href" : href.current
    }
  },
  servicesAndFacilitiesSection->{
    title,
    "facilities" : facilities[0..3]{
      facility,
      description,
      lucidiconname
    }
   },
   galleryImages[0..5]{
    "url":image.asset->url,
    alt
    },
    orphansWeHave{
      mainTitle,
      orphans{
        male,
      female,
    "total" : male + female
      }
  },
  teamBehined[0..3]{
    name,
    desegnation,
    "imageUrl" : image.asset->url
  },
  ctaSection{
    title,
    description,
    "href" : {"url" : href.href.current,"text":href.text}
  }
}`);

export const ABOUTE_PAGE_QUERRY = defineQuery(`*[_type == "aboutepage"][0]{
  content
}`)

export const TEAM_BEHINED_QUERRY = defineQuery(`*[_type == "teamBehined"][0]{name,teamBehined}`)
