import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Blog | The Future Tech",
  description: "Explore the latest articles and insights on technology trends, innovations, and the future of tech.",
}

// Updated blog posts data focused on AIML, blockchain, and Web3
const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of AI: How Machine Learning is Transforming Industries",
    excerpt:
      "Artificial intelligence and machine learning are evolving at an unprecedented rate. Here's how they're changing various sectors.",
    image: "/images/ai-ml.png",
    date: "March 15, 2025",
    category: "Artificial Intelligence",
    slug: "future-of-ai-ml-transforming-industries",
    author: "Praful Sonwane",
    authorImage: "/images/passport.jpeg",
  },
  {
    id: 2,
    title: "Understanding Blockchain: Beyond Cryptocurrencies",
    excerpt:
      "Blockchain technology has applications far beyond digital currencies. Explore the revolutionary potential of this technology.",
    image: "/images/blockchain.png",
    date: "March 10, 2025",
    category: "Blockchain",
    slug: "understanding-blockchain-beyond-cryptocurrencies",
    author: "Praful Sonwane",
    authorImage: "/images/passport.jpeg",
  },
  {
    id: 3,
    title: "Web3: The Next Evolution of the Internet",
    excerpt:
      "How decentralized technologies are reshaping the web and creating new possibilities for users and developers.",
    image: "/images/web3.png",
    date: "March 5, 2025",
    category: "Web3",
    slug: "web3-next-evolution-internet",
    author: "Praful Sonwane",
    authorImage: "/images/passport.jpeg",
  },
  {
    id: 4,
    title: "Machine Learning for Beginners: A Practical Guide",
    excerpt:
      "A step-by-step introduction to machine learning concepts and how to start implementing them in your projects.",
    image: "/images/ai-ml.png",
    date: "February 28, 2025",
    category: "Machine Learning",
    slug: "machine-learning-beginners-guide",
    author: "Praful Sonwane",
    authorImage: "/images/passport.jpeg",
  },
  {
    id: 5,
    title: "Smart Contracts: Automating Trust in the Digital Age",
    excerpt: "How blockchain-based smart contracts are revolutionizing agreements and transactions across industries.",
    image: "/images/blockchain.png",
    date: "February 20, 2025",
    category: "Blockchain",
    slug: "smart-contracts-automating-trust",
    author: "Praful Sonwane",
    authorImage: "/images/passport.jpeg",
  },
  {
    id: 6,
    title: "Decentralized Finance (DeFi): Reimagining Banking",
    excerpt:
      "Exploring how DeFi applications are creating an open, permissionless financial system accessible to everyone.",
    image: "/images/web3.png",
    date: "February 15, 2025",
    category: "Web3",
    slug: "defi-reimagining-banking",
    author: "Praful Sonwane",
    authorImage: "/images/passport.jpeg",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70 z-0" />
        <div className="absolute inset-0 z-0 bg-[url('/circuit-background.svg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">The Future Tech Blog</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Insights and analysis on AI/ML, Blockchain, and Web3 technologies
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="transition-transform hover:scale-105">
                <Card className="h-full bg-gray-800 border-gray-700 overflow-hidden hover:border-blue-500 transition-colors">
                  <div className="relative h-48 w-full">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-blue-400">{post.category}</span>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl text-white">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm text-gray-400">{post.author}</span>
                    </div>
                    <span className="text-blue-400 text-sm">Read more →</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

