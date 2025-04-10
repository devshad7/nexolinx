import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
             {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-10 mr-2">
              <Image
                src="/nexolinx.png"
                alt="Nexolinx Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-foreground">Nexolinx</span>
          </Link>
            <p className="text-foreground/70 mb-4">
              Providing innovative technology solutions for businesses of all sizes since 2023.
            </p>
            <div className="flex space-x-4">
  <a href="https://www.facebook.com/NexoLinx" target="_blank" rel="noopener noreferrer">
    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
      <Facebook className="h-4 w-4" />
    </Button>
  </a>
  <a href="https://x.com/nexolinx?fbclid=IwY2xjawJjO1VleHRuA2FlbQIxMAABHrssF_KI2-_GOhIfDNbOSr9vmNtdpmDZZDPIw3sV-9e2XZHP_g1W1nuT93bF_aem_JXtUCpmGlL_vJzfOEoDZjQm" target="_blank" rel="noopener noreferrer">
    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
      <Twitter className="h-4 w-4" />
    </Button>
  </a>
  <a href="https://www.linkedin.com/company/105538349" target="_blank" rel="noopener noreferrer">
    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
      <Linkedin className="h-4 w-4" />
    </Button>
  </a>
  <a href="https://www.instagram.com/nexolinx011?fbclid=IwY2xjawJjOwtleHRuA2FlbQIxMAABHhVBRqYJtfwK3iCuiKVvn1IUwd9EGwkp-XMchf9OxuAs5vBdOBuq40JGATK5_aem_AbD-GaTIYrpkTm3XnWh7xA" target="_blank" rel="noopener noreferrer">
    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
      <Instagram className="h-4 w-4" />
    </Button>
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70">(10) Kalikanagar, Butwal, Rupandehi Nepal</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span className="text-foreground/70">+977 9840571130</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span className="text-foreground/70">nexolinxs@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-foreground/70 mb-4">Stay updated with the latest technology trends and news.</p>
            <div className="flex space-x-2">
              <Input placeholder="Your email" className="bg-background" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 mt-8 text-center text-foreground/70">
          <p>© {new Date().getFullYear()} Nexolinx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

