import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export function ProfileShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="bg-gray-800 border-gray-700 overflow-hidden">
        <div className="relative h-64 w-full">
          <Image src="/images/passport.jpeg" alt="Praful Sonwane" fill className="object-cover" priority />
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Praful Sonwane</h3>
            <p className="text-blue-400 mb-3">Founder & Content Creator</p>
            <div className="flex gap-2 mb-4">
              <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                AI/ML
              </Badge>
              <Badge variant="outline" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                Blockchain
              </Badge>
              <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
                Web3
              </Badge>
            </div>
            <p className="text-gray-300 mb-4">
              Tech enthusiast with a passion for emerging technologies. Dedicated to making complex tech concepts
              accessible to everyone through engaging content.
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
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700 overflow-hidden">
        <div className="relative h-64 w-full">
          <Image src="/images/youtube.webp" alt="The Future Tech" fill className="object-contain bg-black" priority />
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-white mb-2">The Future Tech</h3>
            <p className="text-blue-400 mb-3">YouTube Channel</p>
            <div className="flex gap-2 mb-4">
              <Badge variant="outline" className="bg-red-500/20 text-red-400 border-red-500/30">
                YouTube
              </Badge>
              <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                Tech Content
              </Badge>
              <Badge variant="outline" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                Tutorials
              </Badge>
            </div>
            <p className="text-gray-300 mb-4">
              Exploring tomorrow's technology today. Stay updated with the latest tech trends, innovations, and
              breakthroughs in AI, blockchain, and Web3.
            </p>
            <Link
              href="https://www.youtube.com/@futuretech13s"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Subscribe to Channel
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

