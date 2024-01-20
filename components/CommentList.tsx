import { Comment } from "@/types/comments";
import CommentItem from "@/components/CommentItem";

export default function CommentList({ comments }: { comments: Comment[] }) {
  if (comments.length === 0)
    return <p className="text-xs text-gray-400">No comment yet.</p>;

  return (
    <ul className="space-y-3">
      {comments.map((comment) => (
        <li key={comment.id}>
          <CommentItem comment={comment} />
        </li>
      ))}
    </ul>
  );
}
