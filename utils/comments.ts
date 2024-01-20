import { Comment } from "@/types/comments";

const BASE_URL = "https://jsonplaceholder.typicode.com/comments"

export const fetchCommentsByPostId = async (postId: number) => {
    const response = await fetch(
        `${BASE_URL}?postId=${postId}`
    );
    if (!response.ok) return null
    const comments = (await response.json()) as Comment[];
    return comments;
}