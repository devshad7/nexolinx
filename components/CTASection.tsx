"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link" 
export default function CTASection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background/90 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-400/20 z-0" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0" />

          <div className="relative z-10 py-16 px-8 md:py-20 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
              Contact us today to learn how our technology solutions can help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://www.facebook.com/NexoLinx">
                <Button size="lg" className="text-base">
                  Get Started
                </Button>
              </Link>
              <Link href="https://www.facebook.com/NexoLinx">
                <Button size="lg" variant="outline" className="text-base">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
