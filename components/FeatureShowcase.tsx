"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Globe,
  Paintbrush,
  Smartphone,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Code,
  Layout,
  ShoppingCart,
  Search,
  Palette,
  FileImage,
  Apple,
  SmartphoneIcon as Android,
  Blocks,
} from "lucide-react"

// Feature data with expanded content based on Nexolinx's actual services
const features = [
  {
    id: "web",
    title: "Web Development",
    icon: <Globe className="h-6 w-6" />,
    color: "from-blue-500 to-blue-600",
    description:
      "Custom web solutions that empower your business to thrive in the digital landscape, from responsive websites to complex web applications.",
    benefits: [
      "Customized web design tailored to your brand",
      "E-commerce solutions for online businesses",
      "SEO optimization for maximum visibility",
      "Responsive designs for all devices",
    ],
    stats: [
      { value: "15+", label: "Websites Delivered" },
      { value: "40%", label: "Traffic Increase" },
      { value: "97%", label: "Client Satisfaction" },
    ],
    image: "/web.png?height=400&width=600",
    caseStudy: {
      title: "E-commerce Platform",
      description:
        "Developed a custom e-commerce solution for a leading Nepali retailer, resulting in a 200% increase in online sales within the first quarter.",
    },
  },
  {
    id: "design",
    title: "Graphics Design",
    icon: <Paintbrush className="h-6 w-6" />,
    color: "from-green-500 to-green-600",
    description:
      "Creative visual solutions that communicate your brand's message effectively through compelling designs and marketing materials.",
    benefits: [
      "Brand identity development",
      "Marketing materials creation",
      "UI/UX design for digital products",
      "3D modeling and visualization",
    ],
    stats: [
      { value: "50+", label: "Design" },
      { value: "85%", label: "Brand Recognition" },
      { value: "24/7", label: "Creative Support" },
    ],
    image: "/graphics.png?height=200&width=600",
    caseStudy: {
      title: "Brand Transformation",
      description:
        "Revitalized the visual identity for a traditional Nepali business, helping them appeal to a younger demographic while honoring their heritage.",
    },
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    icon: <Smartphone className="h-6 w-6" />,
    color: "from-purple-500 to-purple-600",
    description:
      "Intuitive and engaging mobile applications for iOS and Android platforms that connect your business with customers on the go.",
    benefits: [
      "Native iOS and Android app development",
      "Cross-platform solutions with React Native",
      "User-centric design approach",
      "Ongoing maintenance and support",
    ],
    stats: [
      { value: "--", label: "Apps Launched" },
      { value: "--", label: "Avg. App Rating" },
      { value: "--", label: "User Retention" },
    ],
    image: "/app.png?height=200&width=600",
    caseStudy: {
      title: "Delivery Service App",
      description:
        "Created a comprehensive delivery app for a local service provider that streamlined operations and increased customer engagement by 75%.",
    },
  },
]

// Sub-features for each main feature
const subFeatures = {
  web: [
    {
      icon: <Layout />,
      title: "Custom Web Design",
      description: "Tailored websites that reflect your brand identity and business goals",
    },
    {
      icon: <ShoppingCart />,
      title: "E-commerce Solutions",
      description: "Secure and scalable online stores with payment integration",
    },
    {
      icon: <Search />,
      title: "SEO Optimization",
      description: "Enhanced visibility in search engines to drive organic traffic",
    },
  ],
  design: [
    {
      icon: <Palette />,
      title: "Brand Identity",
      description: "Logos, color schemes, and visual elements that define your brand",
    },
    {
      icon: <FileImage />,
      title: "Marketing Materials",
      description: "Compelling visuals for digital and print marketing campaigns",
    },
    {
      icon: <Blocks />,
      title: "3D Modeling",
      description: "Realistic 3D models and visualizations for products and environments",
    },
  ],
  mobile: [
    {
      icon: <Apple />,
      title: "iOS Development",
      description: "Native applications for iPhone and iPad devices",
    },
    {
      icon: <Android />,
      title: "Android Development",
      description: "Custom apps for the diverse Android ecosystem",
    },
    {
      icon: <Code />,
      title: "React Native",
      description: "Cross-platform solutions that work seamlessly across devices",
    },
  ],
}

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState("web")
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  // Calculate 3D transform based on mouse position
  const calculateTransform = (x: number, y: number) => {
    if (!containerRef.current) return { rotateX: 0, rotateY: 0 }

    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateY = ((x - centerX) / centerX) * 5
    const rotateX = ((centerY - y) / centerY) * 5

    return { rotateX, rotateY }
  }

  const transform = calculateTransform(mousePosition.x, mousePosition.y)

  // Get current feature data
  const currentFeature = features.find((f) => f.id === activeTab) || features[0]
  const currentSubFeatures = subFeatures[activeTab as keyof typeof subFeatures] || []

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-background to-background/90 overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary/10 backdrop-blur-sm px-4 py-1 rounded-full text-primary font-medium mb-4">
            Your Tech Solution
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Empowering Businesses in the <br className="hidden md:block" />
            <span className="text-primary">Digital Landscape</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            As a leading IT company in Nepal, Nexolinx delivers innovative technological solutions with excellence and
            precision.
          </p>
        </motion.div>

        {/* Feature Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {features.map((feature) => (
            <motion.button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`relative px-6 py-3 rounded-full text-base font-medium transition-all duration-300 overflow-hidden group ${
                activeTab === feature.id ? "text-white" : "text-foreground/70 hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background */}
              <span
                className={`absolute inset-0 ${
                  activeTab === feature.id ? `bg-gradient-to-r ${feature.color}` : "bg-secondary/50"
                } transition-all duration-300`}
              />

              {/* Animated dots */}
              {activeTab === feature.id && (
                <>
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute h-1 w-1 rounded-full bg-white/30"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${10 + Math.random() * 80}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </>
              )}

              {/* Content */}
              <span className="relative flex items-center justify-center gap-2">
                <span className={activeTab === feature.id ? "text-white" : "text-primary"}>{feature.icon}</span>
                <span>{feature.title}</span>
              </span>
            </motion.button>
          ))}
        </div>

        {/* Main Feature Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeTab}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-4 flex items-center">
                  <span
                    className={`inline-block p-2 rounded-lg bg-gradient-to-r ${currentFeature.color} text-white mr-3`}
                  >
                    {currentFeature.icon}
                  </span>
                  {currentFeature.title}
                </h3>
                <p className="text-xl text-foreground/80 mb-6">{currentFeature.description}</p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Key Benefits</h4>
                <div className="space-y-3">
                  {currentFeature.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-foreground/90">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {currentFeature.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-lg p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <div className={`text-2xl font-bold text-gradient-${currentFeature.id}`}>{stat.value}</div>
                    <div className="text-sm text-foreground/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Case Study */}
              <motion.div
                className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <h4 className="text-lg font-semibold mb-2">Case Study: {currentFeature.caseStudy.title}</h4>
                <p className="text-foreground/80 mb-4">{currentFeature.caseStudy.description}</p>
                <Button variant="link" className="p-0 h-auto text-primary group">
                  Read Full Case Study{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <Button className="group">
                Explore {currentFeature.title} Services
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </AnimatePresence>

          {/* Feature Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${activeTab}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{
                perspective: 1000,
              }}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isHovering
                    ? `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`
                    : "rotateX(0deg) rotateY(0deg)",
                  transition: isHovering ? "none" : "transform 0.5s ease-out",
                }}
              >
                {/* Glowing background */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${currentFeature.color} blur-sm opacity-70 z-0`}
                ></div>

                {/* Main image */}
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 z-10">
                  <Image
                    src={currentFeature.image || "/placeholder.svg"}
                    alt={currentFeature.title}
                    fill
                    className="object-cover"
                  />

                  {/* Overlay gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${currentFeature.color} mix-blend-overlay opacity-60`}
                  ></div>

                  {/* Animated particles */}
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-2 w-2 rounded-full bg-white/80"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -100],
                        x: [0, Math.random() * 50 - 25],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random() * 5,
                      }}
                    />
                  ))}

                  {/* Feature icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className={`text-white/20`}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="scale-[4]">{currentFeature.icon}</div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating card elements */}
                <motion.div
                  className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg z-20 border border-white/20"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(20px)",
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${currentFeature.color}`}></div>
                    <div className="text-white text-sm font-medium">Nepali Excellence</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg z-20 border border-white/20"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(40px)",
                  }}
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${currentFeature.color}`}></div>
                    <div className="text-white text-sm font-medium">Customer-Centric</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sub-features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <AnimatePresence mode="wait">
            {currentSubFeatures.map((feature, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-blue-400/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 h-full transition-all duration-300 group-hover:translate-y-[-5px]">
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

