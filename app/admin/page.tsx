"use client";
import { useState } from "react";
import { addBlogPost, Post } from "../../lib/addPost";

export default function AdminPanel() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [date, setDate] = useState("");
  const [readTime, setReadTime] = useState("");
  const [image, setImage] = useState("");
  const [slug, setSlug] = useState("");
  const [author, setAuthor] = useState("");  // New state for author
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !excerpt || !date || !readTime || !image || !slug || !author) {
      setError("All fields are required.");
      return;
    }

    const postData: Post = {
      title,
      excerpt,
      date,
      readTime,
      image,
      slug,
      author,  // Add the author to the post data
    };

    try {
      await addBlogPost(postData);
      alert("Post added successfully!");
      setTitle("");
      setExcerpt("");
      setDate("");
      setReadTime("");
      setImage("");
      setSlug("");
      setAuthor("");  // Clear author field
      setError("");
    } catch (error) {
      console.error("Error adding post:", error);
      setError("There was an error adding the post. Please try again later.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-20">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Blog Panel: Add New Post</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div>
          <label htmlFor="title" className="block text-gray-700 font-medium">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="excerpt" className="block text-gray-700 font-medium">Excerpt</label>
          <textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Enter a short excerpt"
            rows={4}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-gray-700 font-medium">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Enter post date"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="readTime" className="block text-gray-700 font-medium">Read Time</label>
            <input
              type="text"
              id="readTime"
              value={readTime}
              onChange={(e) => setReadTime(e.target.value)}
              placeholder="Enter read time (e.g. 5 mins)"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="image" className="block text-gray-700 font-medium">Image URL</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter image URL"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="slug" className="block text-gray-700 font-medium">Slug</label>
          <input
            type="text"
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="Enter post slug (e.g. my-first-post)"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="author" className="block text-gray-700 font-medium">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author's name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center">
          <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
}
