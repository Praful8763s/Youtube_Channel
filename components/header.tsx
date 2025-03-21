"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, Search, X, Youtube, User } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Videos", href: "/videos" },
  { name: "Profile", href: "/profile" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "animated-gradient shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8 logo-pulse">
              <Image src="/images/youtube.webp" alt="The Future Tech Logo" fill className="object-contain" />
            </div>
            <span className="font-bold text-white text-xl hidden sm:inline-block logo-text">The Future Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors relative nav-link"
              >
                {item.name}
                <span className="nav-link-highlight"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {isSearchOpen ? (
              <div className="flex items-center">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full md:w-64 bg-gray-800 border-gray-700 text-white"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-gray-300 hover:text-white"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close search</span>
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-300 hover:text-white"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}

            <Link href="/profile">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Button>
            </Link>

            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex items-center gap-2 border-blue-500 text-blue-400 hover:bg-blue-500/10"
              asChild
            >
              <Link href="https://www.youtube.com/@futuretech13s" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-4 w-4" />
                <span>Subscribe</span>
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white py-2 transition-colors relative nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  <span className="nav-link-highlight"></span>
                </Link>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="flex items-center justify-center gap-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 w-full"
                asChild
              >
                <Link href="https://www.youtube.com/@futuretech13s" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-4 w-4" />
                  <span>Subscribe to Channel</span>
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

