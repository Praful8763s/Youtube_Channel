import Image from "next/image"
import { FeaturedPosts } from "@/components/featured-posts"
import { LatestVideos } from "@/components/latest-videos"
import { Newsletter } from "@/components/newsletter"
import { TechShowcase3D } from "@/components/tech-showcase-3d"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70 z-10" />
        <div
          className="absolute inset-0 z-0 bg-[url('/circuit-background.svg')] bg-cover bg-center opacity-30"
          style={{ backgroundSize: "200%", animation: "pulse 15s infinite alternate" }}
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="mb-8 relative w-32 h-32 md:w-40 md:h-40">
            <Image src="/images/youtube.webp" alt="The Future Tech Logo" fill className="object-contain" priority />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">The Future Tech</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-2xl">Exploring tomorrow's technology today</p>
        </div>
      </section>

      {/* 3D Tech Showcase */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Explore Technology in 3D
            </span>
          </h2>
          <TechShowcase3D />
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Featured Content
            </span>
          </h2>
          <FeaturedPosts />
        </div>
      </section>

      {/* Latest Videos */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Latest Videos
            </span>
          </h2>
          <LatestVideos channelId="@futuretech13s" />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </section>
    </main>
  )
}

