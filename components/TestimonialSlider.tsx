"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "NexoLinx helped us completely overhaul our Crimson Consultancy website, making everything work faster and more efficiently, saving us a lot of money.",
    author: "Bishal Sitoula",
    position: "Managing Director",
    avatar: "/crimson-manager.png",
    rating: 5,
    field: "Web Development"
  },
  {
    quote: "Such a great company run and founded by youth engaging and working together. First I was little worry after giving their work by seeing their age but after result I was shock. The design they have made was very creative with a clear purpose, 'Wo'. Wish a great future ahead. Best of luck!. ",
    author: "Ram Kharel",
    position: "Ceo Of KingABroad Consultancy",
    avatar: "/ram.jpg",
    rating: 4,
    field: "Graphics Design"
  },
  {
    quote: "NexoLinx's design team created beautiful graphics that really captured our brand and helped us stand out in the market.",
    author: "Abhishek Neaupane",
    position: "Owner of Max sports",
    avatar: "/ceo.jpg",
    rating: 4,
    field: "Graphics Design"
  },
  {
    quote: "Nexolinx, an IT company developed by the youth would be the best company in upcomming future. All the member are enaged in their work. They are gaining the knowledge and expirence at this age which is very good. I am very happy with their work and I will provide the full support to Nexolinx. ",
    author: "MT husian",
    position: "CEO of E-Tutor",
    avatar: "/hussian.jpg",
    rating: 5,
    field: "Web Development"
  },
  {
    quote: "Thanks to NexoLinx's 3D modeling, we were able to show off complex ideas in a simple, visual way that made a real impact.",
    author: "Godfather Tycoon",
    position: "Game Development Company",
    avatar: "/godfather.png",
    rating: 4,
    field: "3D Modeling"
  },

  
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
  }

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 6000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, current])

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Hear from businesses that have transformed their operations with our technology solutions.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto" onMouseEnter={pauseAutoPlay} onMouseLeave={resumeAutoPlay}>
          {/* Background decorative elements */}
          <div className="absolute -top-10 -left-10 text-primary/5 z-0">
            <Quote size={120} />
          </div>
          <div className="absolute -bottom-10 -right-10 text-primary/5 z-0 transform rotate-180">
            <Quote size={120} />
          </div>

          {/* Main testimonial card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Card className="border border-primary/10 bg-card/50 backdrop-blur-sm shadow-lg overflow-hidden p-8 md:p-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-400/5 z-0"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    {/* Rating stars */}
                   {/* Rating stars */}
<div className="flex justify-center mb-6">
  {Array.from({ length: 5 }, (_, i) => {
    if (i < Math.floor(testimonials[current].rating)) {
      // Full star
      return (
        <span key={i} className="text-primary text-2xl mx-0.5">
          ★
        </span>
      );
    } else if (i === Math.floor(testimonials[current].rating) && testimonials[current].rating % 1 !== 0) {
      // Half star
      return (
        <span key={i} className="text-primary text-2xl mx-0.5">
          ☆
        </span>
      );
    } else {
      // Empty star
      return (
        <span key={i} className="text-primary text-2xl mx-0.5">
          ☆
        </span>
      );
    }
  })}
</div>

                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl text-center italic mb-10 leading-relaxed">
                      "{testimonials[current].quote}"
                    </blockquote>

                    {/* Author info */}
                    <div className="flex flex-col items-center">
                      <Avatar className="h-16 w-16 mb-4 ring-4 ring-primary/20">
                        <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].author} />
                        <AvatarFallback>{testimonials[current].author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="text-center">
                        <p className="font-bold text-lg">{testimonials[current].author}</p>
                        <p className="text-foreground/70">{testimonials[current].position}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 bg-background/80 backdrop-blur-sm text-primary p-3 rounded-full shadow-lg z-10 hover:bg-primary hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 bg-background/80 backdrop-blur-sm text-primary p-3 rounded-full shadow-lg z-10 hover:bg-primary hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index ? "w-8 bg-primary" : "w-2 bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
