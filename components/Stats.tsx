"use client"

import { motion } from "framer-motion"
import { Users, Award, Clock, Globe } from "lucide-react"

const stats = [
  {
    value: "20+",
    label: "Clients Worldwide",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    value: "2+",
    label: "Years of Experience",
    icon: <Clock className="h-8 w-8 text-primary" />,
  },
  {
    value: "--",
    label: "Industry Awards",
    icon: <Award className="h-8 w-8 text-primary" />,
  },
  {
    value: "3+",
    label: "Countries Served",
    icon: <Globe className="h-8 w-8 text-primary" />,
  },
]

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-card/30 rounded-xl border border-border/30"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

