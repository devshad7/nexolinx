"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const clients = [
  { name: "Crimson Consultancy", logo: "/crimson.png" },
  { name: " E-Tutor class", logo: "/etutor.png" },
  { name: "godfather.png", logo: "/godfather.png" },
  { name: "King Abroad Consultancy", logo: "/kings.png" },
  
  { name: "Gyan-Jyoti", logo: "/gyan.png" },
  
];

export default function ClientsSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            We've partnered with leading companies across various industries to deliver exceptional technology
            solutions.
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 bg-card/30 rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="h-[100px] w-[300px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
