// lib/addPost.ts

import { ref, set } from "firebase/database";
import { database } from "./firebaseConfig";
import { Post } from "./types"; 

const addBlogPost = (post: Post): Promise<void> => {
  const postId = Date.now(); // Using timestamp as the unique ID for the post

  const postRef = ref(database, `posts/${postId}`);

  return set(postRef, {
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    readTime: post.readTime,
    image: post.image,
    slug: post.slug,
    author: post.author,  // Including author in the data to be stored
  })
    .then(() => {
      console.log("Post added successfully!");
    })
    .catch((error) => {
      console.error("Error adding post: ", error);
    });
};

export { addBlogPost };  
export type { Post };
