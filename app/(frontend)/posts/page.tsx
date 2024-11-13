import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { PostCard } from "@/components/postsRoutComponents/PostCard";
import { Title } from "@/components/postsRoutComponents/Title";
import { POSTS_QUERYResult } from "@/sanity/types";

const options = { next: { revalidate: 60 } };

export default async function Page() {
  const posts:POSTS_QUERYResult = await client.fetch(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Post Index</Title>
      <div className="flex flex-col gap-24 py-12">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </main>
  );
}
