import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Cpu, Globe, Lightbulb, Shield, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | The Future Tech",
  description: "Learn more about The Future Tech channel and our mission to explore tomorrow's technology today.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70 z-0" />
        <div className="absolute inset-0 z-0 bg-[url('/circuit-background.svg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">About The Future Tech</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">Exploring tomorrow's technology today</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Our Story
                </span>
              </h2>
              <p className="text-gray-300 mb-4">
                The Future Tech was founded in 2023 with a simple mission: to demystify emerging technologies and make
                them accessible to everyone. What started as a passion project has grown into a community of tech
                enthusiasts, developers, and curious minds.
              </p>
              <p className="text-gray-300 mb-4">
                Our YouTube channel focuses on exploring cutting-edge technologies, from artificial intelligence and
                quantum computing to blockchain and sustainable tech solutions. We believe that understanding technology
                is key to shaping a better future.
              </p>
              <p className="text-gray-300">
                Through tutorials, analysis, and thought-provoking content, we aim to inspire the next generation of
                innovators and help current professionals stay ahead of the curve in an ever-evolving technological
                landscape.
              </p>
            </div>
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 z-10 rounded-lg" />
              <Image src="/images/youtube.webp" alt="The Future Tech Logo" fill className="object-contain p-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Our Focus Areas
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="bg-blue-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Artificial Intelligence</h3>
                <p className="text-gray-300">
                  Exploring the latest advancements in AI, machine learning, and neural networks, and their impact on
                  various industries.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="bg-purple-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quantum Computing</h3>
                <p className="text-gray-300">
                  Exploring Microsoft's breakthrough in topological quantum computing and how quantum technologies are
                  revolutionizing computing power and security.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="bg-blue-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Software Development</h3>
                <p className="text-gray-300">
                  Sharing coding tutorials, best practices, and career advice for aspiring and professional developers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="bg-purple-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Web 3.0 & Blockchain</h3>
                <p className="text-gray-300">
                  Analyzing the evolution of the internet and the potential of decentralized technologies to reshape
                  digital interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="bg-blue-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Cybersecurity</h3>
                <p className="text-gray-300">
                  Discussing emerging threats, security best practices, and the evolving landscape of digital security.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="bg-purple-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Emerging Technologies</h3>
                <p className="text-gray-300">
                  Spotlighting innovative technologies that are poised to transform industries and everyday life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Meet The Team
            </span>
          </h2>
          <div className="max-w-md mx-auto">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-blue-500/30">
                <Image src="/images/passport.jpeg" alt="Praful Sonwane" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white">Praful Sonwane</h3>
              <p className="text-blue-400 text-lg">Founder & Content Creator</p>
              <div className="mt-4 space-y-2 text-gray-300">
                <p>
                  <span className="font-medium">Email:</span> prafulsonwane13@gmail.com
                </p>
                <p>
                  <span className="font-medium">Contact:</span> +91 9302433799
                </p>
              </div>
              <p className="text-gray-400 mt-4 max-w-md mx-auto">
                Tech enthusiast with a passion for emerging technologies. Dedicated to making complex tech concepts
                accessible to everyone through engaging content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

