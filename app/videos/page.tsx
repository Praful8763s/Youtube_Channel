import Link from "next/link"
import type { Metadata } from "next"
import { YoutubeVideo } from "@/components/youtube-video"

export const metadata: Metadata = {
  title: "Videos | The Future Tech",
  description: "Watch our latest videos on technology trends, tutorials, and insights.",
}

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70 z-0" />
        <div className="absolute inset-0 z-0 bg-[url('/circuit-background.svg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">Videos</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Explore our collection of tech tutorials, reviews, and insights
          </p>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Featured Video
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <YoutubeVideo videoId="0XI_fZpqvDQ" title="Blockchain technology" />
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-white">Blockchain technology</h3>
              <div className="flex items-center mt-2 mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img src="/images/youtube.webp" alt="The Future Tech" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-medium">The Future Tech</p>
                    <p className="text-gray-400 text-sm">24 subscribers</p>
                  </div>
                </div>
                <div className="ml-auto">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-400 mb-6">
                <span>25 views</span>
                <span className="mx-2">•</span>
                <span>2 years ago</span>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  Digital stamping project - Learn about blockchain technology and its applications in digital stamping
                  and verification.
                </p>
                <div className="mt-2">
                  <span className="text-blue-400 text-sm">#blockchain</span>{" "}
                  <span className="text-blue-400 text-sm">#technology</span>{" "}
                  <span className="text-blue-400 text-sm">#digitalstamping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Videos Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              More Videos
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative pb-[56.25%]">
                <img
                  src="/placeholder.svg?height=200&width=360"
                  alt="Video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Link href="/videos/4UHFccsN2dY" className="bg-white/90 text-black rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-play"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium mb-1">Tere Bina Adhura Hoon</h3>
                <p className="text-gray-400 text-sm">120 views • 1 year ago</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative pb-[56.25%]">
                <img
                  src="/placeholder.svg?height=200&width=360"
                  alt="Video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Link href="/videos/2z0Shc9tzfE" className="bg-white/90 text-black rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-play"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium mb-1">Coding Journey Start at College Student</h3>
                <p className="text-gray-400 text-sm">151 views • 5 months ago</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative pb-[56.25%]">
                <img
                  src="/placeholder.svg?height=200&width=360"
                  alt="Video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button className="bg-white/90 text-black rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-play"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium mb-1">Blockchain Technology in 2025</h3>
                <p className="text-gray-400 text-sm">87 views • 1 month ago</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

