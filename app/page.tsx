import Hero from "@/components/Hero"
import HeroSlider from "@/components/HeroSlider"
import Services from "@/components/Services"
import ClientsSection from "@/components/ClientsSection"
import FeatureShowcase from "@/components/FeatureShowcase"
import BlogPreview from "@/components/BlogPreview"
import CTASection from "@/components/CTASection"
import Stats from "@/components/Stats"
import TestimonialSlider from "@/components/TestimonialSlider"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <>
      <Hero />
      <HeroSlider />
      <Stats />
      <Services />
      <FeatureShowcase />
      <BlogPreview />
      <ClientsSection />
      <TestimonialSlider />
      <ContactSection />
      <CTASection />
    </>
  )
}

