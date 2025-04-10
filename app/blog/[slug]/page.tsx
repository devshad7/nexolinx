import { notFound } from "next/navigation";
import { getDatabase, ref, get } from "firebase/database";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/lib/firebaseConfig";
import type { Post } from "@/lib/types";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const postsRef = ref(database, "posts");
  const snapshot = await get(postsRef);

  const data = snapshot.val();

  if (!data) return notFound();

  const posts = Object.values(data) as Post[];
  const post = posts.find((post) => post.slug === slug);

  if (!post) return notFound();

  const content = post.content || "";

  return (
    <div className="container mx-auto px-8 py-20 sm:px-12 lg:px-24">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
        {post.title}
      </h1>
      
      <div className="flex justify-between items-center mb-2 text-sm text-gray-500 dark:text-gray-300">
        <span>{post.date}</span>
        <span>{post.readTime} min read</span>
      </div>

      <div className="flex justify-start items-center mb-8 text-sm text-gray-600 dark:text-gray-400">
        <span>By {post.author}</span>
      </div>

      <div className="relative mb-12">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg shadow-2xl mb-6"
        />
      </div>

      {post.excerpt && (
        <p className="text-lg text-gray-600 dark:text-gray-200 mb-8">
          {post.excerpt}
        </p>
      )}

      <div
        className="prose lg:prose-xl max-w-none mb-12 text-gray-700 dark:text-gray-300"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
