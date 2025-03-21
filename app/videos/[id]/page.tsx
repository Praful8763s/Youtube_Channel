import type { Metadata } from "next"
import { YoutubeVideo } from "@/components/youtube-video"

interface VideoPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: VideoPageProps): Promise<Metadata> {
  // In a real app, you would fetch video details from an API
  return {
    title: `Video | The Future Tech`,
    description: "Watch our latest videos on technology trends, tutorials, and insights.",
  }
}

export default function VideoPage({ params }: VideoPageProps) {
  const { id } = params

  return (
    <main className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <YoutubeVideo videoId={id} title="Video" />

          <div className="mt-6">
            <h1 className="text-2xl font-bold text-white">
              {id === "2z0Shc9tzfE" ? "Coding Journey Start at College Student to regrading placement" : "Video Title"}
            </h1>

            <div className="flex items-center mt-2 mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youtube.jpg-EoY5iKsQfC5scM1HJYUkWvZr04rMrE.webp"
                    alt="The Future Tech"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">The Future Tech</p>
                  <p className="text-gray-400 text-sm">24 subscribers</p>
                </div>
              </div>
              <div className="ml-auto">
                <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">Subscribe</button>
              </div>
            </div>

            <div className="flex items-center text-sm text-gray-400 mb-6">
              <span>{id === "2z0Shc9tzfE" ? "151 views" : "1K views"}</span>
              <span className="mx-2">•</span>
              <span>{id === "2z0Shc9tzfE" ? "5 months ago" : "3 months ago"}</span>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-300">
                {id === "2z0Shc9tzfE"
                  ? "Follow the journey of a college student starting their coding career and navigating the challenges of job placement. This video shares personal experiences, tips, and insights for aspiring developers."
                  : "Video description goes here. This would typically be fetched from an API in a real application."}
              </p>
              <div className="mt-2">
                <span className="text-blue-400 text-sm">#futuretech</span>{" "}
                <span className="text-blue-400 text-sm">#technology</span>{" "}
                {id === "2z0Shc9tzfE" && (
                  <>
                    <span className="text-blue-400 text-sm">#codingjourney</span>{" "}
                    <span className="text-blue-400 text-sm">#codinglife</span>{" "}
                    <span className="text-blue-400 text-sm">#codingtutorial</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-white mb-4">Comments</h2>
            <div className="space-y-6">
              <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="/placeholder.svg?height=40&width=40" alt="User" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="font-medium text-white">John Doe</p>
                    <span className="text-gray-400 text-sm ml-2">2 months ago</span>
                  </div>
                  <p className="text-gray-300 mt-1">
                    Great video! This really helped me understand the journey better.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="/placeholder.svg?height=40&width=40" alt="User" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="font-medium text-white">Jane Smith</p>
                    <span className="text-gray-400 text-sm ml-2">1 month ago</span>
                  </div>
                  <p className="text-gray-300 mt-1">
                    I'm in college right now and this was super helpful. Thanks for sharing your experience!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

