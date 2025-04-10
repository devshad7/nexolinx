"use client"

import { motion } from "framer-motion"
import { FaGlobe, FaPencilAlt, FaMobileAlt, FaChartBar, FaCube, FaFilm, FaUsers } from 'react-icons/fa';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [{
  title: "Web Development",
  description: "Custom websites and web applications that improve your online presence and user experience.",
  icon: <FaGlobe className="h-10 w-10 text-primary" />,
},
{
  title: "Graphics Design",
  description: "Eye-catching designs that help your brand stand out and make an impact.",
  icon: <FaPencilAlt className="h-10 w-10 text-primary" />,
},
{
  title: "App Development",
  description: "Creating user-friendly mobile apps that work seamlessly across devices.",
  icon: <FaMobileAlt className="h-10 w-10 text-primary" />,
},
{
  title: "Digital Marketing",
  description: "Boost your online presence and connect with your audience through targeted marketing strategies.",
  icon: <FaChartBar className="h-10 w-10 text-primary" />,  // Use FaChartBar as an alternative
},
{
  title: "3D Modeling",
  description: "Realistic 3D models that bring your ideas to life with precision and detail.",
  icon: <FaCube className="h-10 w-10 text-primary" />,
},
{
  title: "Editing",
  description: "High-quality video and photo editing to make your content look its best.",
  icon: <FaFilm className="h-10 w-10 text-primary" />,
},
{
  title: "Social Media Management",
  description: "Grow and manage your social media presence to engage with your audience effectively.",
  icon: <FaUsers className="h-10 w-10 text-primary" />,
},

]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            We offer a comprehensive range of technology solutions to help your business thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70 text-base">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

