// lib/getAllBlogPosts.ts
import { ref, get } from "firebase/database";
import { database } from "./firebaseConfig";
import { Post } from "./types";
import { addBlogPost } from "./addPost"; 

// Function to fetch all blog posts
const fetchBlogPosts = async (): Promise<Post[]> => {
  const postsRef = ref(database, "posts");
  const snapshot = await get(postsRef);

  if (!snapshot.exists()) return [];

  const data = snapshot.val();
  const posts: Post[] = Object.values(data);

  return posts;
};

export { fetchBlogPosts, addBlogPost };    
export type { Post };

