import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/components/postsRoutComponents/Post";
import { notFound } from "next/navigation";

type PostIndexProps = { params: Promise<{ slug: string }> };


export default async function Page({ params }: PostIndexProps) {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto grid grid-cols-1 gap-6 py-12 px-2">
      <Post {...post} />
    </main>
  );
}
