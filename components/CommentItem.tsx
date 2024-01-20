import { Comment } from "@/types/comments";
import Image from "next/image";

export default function CommentItem({ comment }: { comment: Comment }) {
  return (
    <div className="flex items-start space-x-4">
      <Image
        src="https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705708800&semt=ais"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h6 className="text-xs text-cyan-500 mb-1">{comment.email}</h6>
        <p className="text-sm text-gray-300">{comment.body}</p>
        <button className="text-xs text-gray-600">Reply</button>
      </div>
    </div>
  );
}
