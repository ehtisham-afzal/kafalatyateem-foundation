import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/components/postsRoutComponents/Post";
import { notFound } from "next/navigation";

type PostIndexProps = { params: Promise<{ slug: string }> };

const options = { next: { revalidate: 60 } };

export default async function Page({ params }: PostIndexProps) {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug }, options);

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Post {...post} />
    </main>
  );
}
