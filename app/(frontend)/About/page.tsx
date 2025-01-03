import ContactInformationSection from "@/components/ContactInformationSection";
import { sanityFetch } from "@/sanity/lib/live";
import { ABOUTE_PAGE_QUERRY } from "@/sanity/lib/queries";
import { components } from "@/sanity/PortableTextComponents";
import { ABOUTE_PAGE_QUERRYResult } from "@/sanity/types";
import { Metadata } from "next";
import { PortableText } from "next-sanity";

export const metadata: Metadata = {
  title: "About us",
};

export default async function Page() {
  const content: { data: ABOUTE_PAGE_QUERRYResult } = await sanityFetch({
    query: ABOUTE_PAGE_QUERRY,
  });

  return (
    <>
      <section className="w-full min-h-[50dvh] min-w-full prose prose-lg md:prose-xl px-1">
        {!content ? (
          <p>...Loading</p>
        ) : (
          <PortableText
            value={content.data?.content || []}
            components={components}
          />
        )}
      </section>
      <ContactInformationSection />
    </>
  );
}
