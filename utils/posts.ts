import { Post } from "@/types/posts";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts"

export const fetchPosts = async () => {
    const response = await fetch(
        `${BASE_URL}?_limit=3`
    );
    const posts = (await response.json()) as Post[];
    return posts;
}

export const getPostById = async (id: string) => {
    const response = await fetch(
        `${BASE_URL}/${id}`
    );
    if (!response.ok) return null
    const post = (await response.json()) as Post;
    return post;
}