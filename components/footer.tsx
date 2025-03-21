import Link from "next/link"
import Image from "next/image"
import { Youtube, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <Image src="/images/youtube.webp" alt="The Future Tech Logo" fill className="object-contain" />
              </div>
              <span className="font-bold text-white text-xl">The Future Tech</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Exploring tomorrow's technology today. Stay updated with the latest tech trends, innovations, and
              breakthroughs.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.youtube.com/@futuretech13s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://x.com/Sonw6618Praful"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.instagram.com/thefuturetech12/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/praful-sonwane-2a1a2a222/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/Praful8763s/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/artificial-intelligence"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/category/blockchain" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Blockchain
                </Link>
              </li>
              <li>
                <Link href="/category/web3" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Web3
                </Link>
              </li>
              <li>
                <Link href="/category/machine-learning" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/category/sustainable-tech" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Sustainable Tech
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="mailto:prafulsonwane13@gmail.com" className="hover:text-blue-400 transition-colors">
                  prafulsonwane13@gmail.com
                </Link>
              </li>
              <li>
                <Link href="tel:+919302433799" className="hover:text-blue-400 transition-colors">
                  +91 9302433799
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/@futuretech13s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  YouTube: @futuretech13s
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/thefuturetech12/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Instagram: @thefuturetech12
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} The Future Tech. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-blue-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

