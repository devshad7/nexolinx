import { NextResponse } from "next/server"
// app/api/addPost/route.ts
import { fetchBlogPosts } from "../../../lib/fetchBlogPosts"; // Correct import from the correct file
import { addBlogPost } from "../../../lib/addPost"; // Correct import from addPost

//
export async function POST(req: Request) {
  try {
    const body = await req.json()
    await addBlogPost(body)
    return NextResponse.json({ message: "Post added successfully" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to add post" }, { status: 500 })
  }
}

export async function GET() {
  try {
    return NextResponse.json({ error: "fetchBlogPosts is not implemented" }, { status: 501 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 })
  }
}
export { addBlogPost }

