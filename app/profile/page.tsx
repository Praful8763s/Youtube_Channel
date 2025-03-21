import type { Metadata } from "next"
import { ProfileShowcase } from "@/components/profile-showcase"

export const metadata: Metadata = {
  title: "Profile | The Future Tech",
  description: "Learn more about The Future Tech team and our mission to explore tomorrow's technology.",
}

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70 z-0" />
        <div className="absolute inset-0 z-0 bg-[url('/circuit-background.svg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">Our Profile</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Meet the team behind The Future Tech and learn about our mission
          </p>
        </div>
      </section>

      {/* Profile Showcase Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Meet The Team
            </span>
          </h2>
          <ProfileShowcase />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Our Mission
              </span>
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p>
                At The Future Tech, our mission is to demystify emerging technologies and make them accessible to
                everyone. We believe that understanding technology is key to shaping a better future.
              </p>
              <p>
                Through tutorials, analysis, and thought-provoking content, we aim to inspire the next generation of
                innovators and help current professionals stay ahead of the curve in an ever-evolving technological
                landscape.
              </p>
              <p>
                We focus on exploring cutting-edge technologies, from artificial intelligence and quantum computing to
                blockchain and sustainable tech solutions, providing insights that are both educational and practical.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

