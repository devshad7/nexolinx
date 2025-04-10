"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

type Particle = {
  top: string;
  left: string;
  yEnd: number;
  xEnd: number;
  duration: number;
  delay: number;
};

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      yEnd: Math.random() * -100,
      xEnd: Math.random() * 50 - 25,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 5,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-400/20 to-primary/20 animate-gradient"></div>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/60"
            style={{ top: p.top, left: p.left }}
            animate={{
              y: [0, p.yEnd],
              x: [0, p.xEnd],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Outline text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[15vw] font-black text-transparent bg-clip-text stroke-text opacity-5">
          NEXOLINX
        </h1>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block bg-primary/10 backdrop-blur-sm px-4 py-1 rounded-full text-primary font-medium mb-6"
            >
              Your Gateway to Innovation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
            >
              <span className="text-primary">Innovative</span> Technology{" "}
              <br className="hidden md:block" />
              for the <span className="text-gradient-blue">Digital Age</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-foreground/80 mb-8 max-w-lg"
            >
              Nexolinx offers creative solutions that transform businesses with
              innovation, effectiveness, and technological excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="text-base group">
                <a href="https://www.facebook.com/NexoLinx">Get Started</a>
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Explore Solutions
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 mt-12"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-lg blur-sm"></div>
                <div className="relative bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-primary/10">
                  <p className="text-3xl font-bold text-primary mb-1">95.3%</p>
                  <p className="text-sm text-foreground/70">
                    Client Satisfaction
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-primary/20 rounded-lg blur-sm"></div>
                <div className="relative bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-primary/10">
                  <p className="text-3xl font-bold text-primary mb-1">20+</p>
                  <p className="text-sm text-foreground/70">
                    Projects Completed
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-lg blur-sm"></div>
                <div className="relative bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-primary/10">
                  <p className="text-3xl font-bold text-primary mb-1">2+</p>
                  <p className="text-sm text-foreground/70">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] md:h-[600px] w-full">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl transform -rotate-6 scale-95 z-0 animate-pulse"></div>

              {/* Main image container */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-blue-400/30 rounded-3xl z-10 overflow-hidden">
                <Image
                  src="/hero.png?height=600&width=600"
                  alt="Advanced Technology Solutions"
                  fill
                  className="object-cover rounded-3xl mix-blend-overlay"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent"></div>

                {/* Hexagonal grid pattern */}
                <div className="absolute inset-0 bg-hexagon-pattern opacity-20"></div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-1/4 left-1/4 bg-primary/80 backdrop-blur-md p-4 rounded-xl shadow-lg z-30"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 6,
                  ease: "easeInOut",
                }}
              >
                <div className="h-10 w-10 rounded-full bg-white/20 mb-2"></div>
                <div className="h-2 w-20 bg-white/20 rounded-full"></div>
                <div className="h-2 w-16 bg-white/20 rounded-full mt-1"></div>
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 right-1/4 bg-blue-400/80 backdrop-blur-md p-4 rounded-xl shadow-lg z-30"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 7,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="h-10 w-10 rounded-full bg-white/20 mb-2"></div>
                <div className="h-2 w-20 bg-white/20 rounded-full"></div>
                <div className="h-2 w-16 bg-white/20 rounded-full mt-1"></div>
              </motion.div>

              {/* Nexolinx logo overlay */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
