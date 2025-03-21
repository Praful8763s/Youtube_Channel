import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const FEATURED_POSTS = [
  {
    id: 1,
    title: "The Future of AI: How Machine Learning is Transforming Industries",
    excerpt:
      "Artificial intelligence and machine learning are evolving at an unprecedented rate. Here's how they're changing various sectors.",
    image: "/images/ai-ml.png",
    date: "March 15, 2025",
    category: "Artificial Intelligence",
    slug: "future-of-ai-ml-transforming-industries",
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
  },
]

export function FeaturedPosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {FEATURED_POSTS.map((post) => (
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
            <CardFooter>
              <div className="flex items-center space-x-2">
                <div className="relative w-6 h-6 rounded-full overflow-hidden">
                  <Image src="/images/passport.jpeg" alt="Praful Sonwane" fill className="object-cover" />
                </div>
                <span className="text-sm text-gray-400">Praful Sonwane</span>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

