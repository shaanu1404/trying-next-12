import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { useRouter } from "next/router";
import { Post } from "@/types/posts";
import { fetchPosts, getPostById } from "@/utils/posts";
import { Comment } from "@/types/comments";
import CommentList from "@/components/CommentList";
import { fetchCommentsByPostId } from "@/utils/comments";

export default function PostDetail({
  post,
  comments,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) {
    return <p className="text-center text-sm text-white">Loading...</p>;
  }

  return (
    <div className="p-3 rounded-md border border-white/20">
      <div className="space-y-2">
        <h4 className="text-3xl text-white font-medium">{post.title}</h4>
        {post.body && <p className="text-gray-400 text-sm">{post.body}</p>}
      </div>
      <div className="mt-8">
        <h5 className="text-lg mb-4">Comments</h5>
        <CommentList comments={comments!} />
      </div>
    </div>
  );
}

export const getStaticProps = async (context: any) => {
  const { params } = context;
  const post = await getPostById(params.id);
  if (!post || !Object.hasOwn(post, "id")) {
    return {
      notFound: true,
    };
  }
  const comments = await fetchCommentsByPostId(post.id);
  return {
    props: {
      post,
      comments,
    },
  };
}; // satisfies GetStaticProps<{ post: Post; comments: Comment[] }>;

export const getStaticPaths = (async () => {
  const posts = await fetchPosts();
  return {
    paths: posts.map((post) => ({ params: { id: post.id.toString() } })),
    fallback: true,
  };
}) satisfies GetStaticPaths;
