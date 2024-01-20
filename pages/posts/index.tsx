import Link from "next/link";
import Heading from "@/components/Heading";
import { Post } from "@/types/posts";
import { fetchPosts } from "@/utils/posts";

type PostsListProps = {
  posts: Post[];
};

export default function PostsList({ posts }: PostsListProps) {
  return (
    <div>
      <Heading>Recent posts</Heading>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-3 rounded-md border border-white/20 space-y-2"
          >
            <Link href={`/posts/${post.id}`} legacyBehavior>
              <h4 className="text-white font-medium cursor-pointer">
                {post.title}
              </h4>
            </Link>
            {post.body && <p className="text-gray-400 text-sm">{post.body}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await fetchPosts();
  return {
    props: {
      posts,
    },
  };
}
