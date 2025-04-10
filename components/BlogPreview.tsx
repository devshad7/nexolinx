"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight,Plus } from "lucide-react"
import Link from "next/link"
import { getDatabase, ref, onValue, off } from "firebase/database"
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "../lib/firebaseConfig"

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

export default function BlogPreview() {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    const postsRef = ref(database, "posts")

    const unsubscribe = onValue(postsRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const postArray = Object.entries(data).map(([key, value]: [string, any]) => ({
          id: key,
          ...value,
        }))
        setPosts(postArray.reverse()) // newest first
      } else {
        setPosts([]) // handle case where no data is present
      }
    })

    // Cleanup listener on component unmount
    return () => {
      off(postsRef)
    }
  }, [])

  return (
    <section  id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-xl text-foreground/80 max-w-2xl">
              Stay updated with the latest technology trends, industry news, and expert insights.
            </p>
          </div>
        
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length === 0 ? (
            <p className="text-muted-foreground text-center col-span-full">
              No posts available at the moment.
            </p>
          ) : (
            posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center text-sm text-foreground/70 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3 text-foreground/70">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="link" className="p-0 h-auto text-primary" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
