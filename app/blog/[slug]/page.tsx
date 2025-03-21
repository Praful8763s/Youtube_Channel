import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, Tag } from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// This would typically come from a database or CMS
const BLOG_POSTS = {
  "future-of-ai-ml-transforming-industries": {
    title: "The Future of AI: How Machine Learning is Transforming Industries",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    image: "/images/ai-ml.png",
    author: "Praful Sonwane",
    authorImage: "/images/passport.jpeg",
    content: `
      <p>Artificial Intelligence (AI) and Machine Learning (ML) are no longer just buzzwords; they're transforming industries at an unprecedented pace. From healthcare to finance, manufacturing to retail, AI and ML technologies are revolutionizing how businesses operate and deliver value to customers.</p>
      
      <h2>Healthcare Revolution</h2>
      <p>In healthcare, AI algorithms are now capable of diagnosing diseases from medical images with accuracy rivaling that of experienced physicians. Machine learning models can predict patient readmissions, optimize hospital operations, and even assist in drug discovery, potentially saving billions in development costs.</p>
      
      <h2>Financial Services Transformation</h2>
      <p>The financial sector has embraced AI for fraud detection, algorithmic trading, and personalized banking experiences. Machine learning models analyze vast amounts of transaction data in real-time, identifying suspicious patterns that would be impossible for human analysts to detect.</p>
      
      <h2>Manufacturing Efficiency</h2>
      <p>In manufacturing, AI-powered predictive maintenance is reducing downtime by identifying potential equipment failures before they occur. Computer vision systems are enhancing quality control, and reinforcement learning algorithms are optimizing production schedules.</p>
      
      <h2>The Road Ahead</h2>
      <p>As we look to the future, the integration of AI and ML into business processes will only accelerate. Organizations that embrace these technologies strategically will gain significant competitive advantages, while those that lag behind risk obsolescence.</p>
      
      <p>The key challenges moving forward include ethical considerations, data privacy concerns, and ensuring AI systems are transparent and explainable. As these technologies become more powerful, the responsibility to deploy them thoughtfully becomes increasingly important.</p>
      
      <p>The future of AI and ML is not just about technological advancement—it's about reimagining what's possible across every industry and aspect of human life.</p>
    `,
  },
  "understanding-blockchain-beyond-cryptocurrencies": {
    title: "Understanding Blockchain: Beyond Cryptocurrencies",
    date: "March 10, 2025",
    readTime: "10 min read",
    category: "Blockchain",
    image: "/images/blockchain.png",
    author: "Praful Sonwane",
    authorImage: "/images/passport.jpeg",
    content: `
      <p>When most people hear "blockchain," they immediately think of Bitcoin and other cryptocurrencies. However, the potential applications of blockchain technology extend far beyond digital currencies, offering revolutionary solutions across numerous industries.</p>
      
      <h2>What Makes Blockchain Special?</h2>
      <p>At its core, blockchain is a distributed ledger technology that enables secure, transparent, and immutable record-keeping without requiring a central authority. This fundamental characteristic makes it valuable for any process requiring trust, verification, and permanent records.</p>
      
      <h2>Supply Chain Transformation</h2>
      <p>In supply chain management, blockchain provides end-to-end visibility and traceability. Companies can track products from raw materials to finished goods, verifying authenticity, reducing counterfeiting, and quickly identifying sources of contamination or defects.</p>
      
      <h2>Healthcare Applications</h2>
      <p>Healthcare organizations are using blockchain to secure patient records, ensure data integrity, and facilitate secure sharing of information between providers. This improves care coordination while maintaining privacy and compliance with regulations.</p>
      
      <h2>Legal and Government Services</h2>
      <p>Blockchain can revolutionize legal processes through smart contracts that automatically execute when predefined conditions are met. Government agencies are exploring blockchain for secure voting systems, property registries, and identity verification.</p>
      
      <h2>The Future of Blockchain</h2>
      <p>As blockchain technology matures, we're seeing increased scalability, reduced energy consumption, and greater interoperability between different blockchain networks. These advancements will unlock even more use cases and drive wider adoption.</p>
      
      <p>The most exciting aspect of blockchain may be its potential to create entirely new business models and economic systems that weren't previously possible. By removing intermediaries and enabling direct peer-to-peer interactions, blockchain could fundamentally reshape how value is created and exchanged in the digital age.</p>
    `,
  },
  "web3-next-evolution-internet": {
    title: "Web3: The Next Evolution of the Internet",
    date: "March 5, 2025",
    readTime: "7 min read",
    category: "Web3",
    image: "/images/web3.png",
    author: "Praful Sonwane",
    authorImage: "/images/passport.jpeg",
    content: `
      <p>Web3 represents the next major evolution of the internet, moving from the centralized platforms that dominate today's online experience toward a more decentralized, user-centric model built on blockchain technology.</p>
      
      <h2>The Evolution of the Web</h2>
      <p>Web1, the original internet, was primarily read-only for most users. Web2 introduced interactive experiences and user-generated content but concentrated power in the hands of a few tech giants. Web3 aims to redistribute this power by giving users ownership of their data and digital assets.</p>
      
      <h2>Key Components of Web3</h2>
      <p>The Web3 ecosystem is built on several foundational technologies: blockchain networks provide the infrastructure, cryptocurrencies enable value transfer, smart contracts automate agreements, and decentralized applications (dApps) deliver services without centralized intermediaries.</p>
      
      <h2>Decentralized Finance (DeFi)</h2>
      <p>One of the most developed areas of Web3 is DeFi, which recreates traditional financial services like lending, borrowing, and trading without banks or brokers. These protocols operate transparently on public blockchains, accessible to anyone with an internet connection.</p>
      
      <h2>Digital Ownership and NFTs</h2>
      <p>Non-fungible tokens (NFTs) have introduced verifiable digital ownership to the internet, enabling creators to monetize digital art, music, and other content directly. This represents a fundamental shift in how we think about digital property rights.</p>
      
      <h2>Challenges and Opportunities</h2>
      <p>Web3 faces significant challenges, including scalability limitations, user experience issues, and regulatory uncertainty. However, the potential to create a more equitable internet where users control their data and digital identities continues to drive innovation and investment in this space.</p>
      
      <p>As Web3 technologies mature and become more accessible to mainstream users, we may see a profound transformation in how we interact online, conduct business, and organize communities in the digital realm.</p>
    `,
  },
  "machine-learning-beginners-guide": {
    title: "Machine Learning for Beginners: A Practical Guide",
    date: "February 28, 2025",
    readTime: "12 min read",
    category: "Machine Learning",
    image: "/images/ai-ml.png",
    author: "Praful Sonwane",
    authorImage: "/images/passport.jpeg",
    content: `
      <p>Machine learning might seem intimidating for beginners, but with the right approach, anyone with basic programming knowledge can start building ML models. This guide provides a practical roadmap for those taking their first steps into this exciting field.</p>
      
      <h2>Understanding the Fundamentals</h2>
      <p>Before diving into code, it's essential to understand basic concepts like supervised vs. unsupervised learning, classification vs. regression, training and test datasets, and model evaluation metrics. These fundamentals will guide your approach to any ML problem.</p>
      
      <h2>Setting Up Your Environment</h2>
      <p>Python has become the de facto language for machine learning. Start by setting up a Python environment with essential libraries like NumPy, pandas, scikit-learn, and Matplotlib. Jupyter notebooks provide an excellent interactive environment for experimentation and learning.</p>
      
      <h2>Your First ML Project</h2>
      <p>Begin with a simple classification problem using a well-known dataset like Iris or MNIST. Follow the standard ML workflow: data loading, exploration, preprocessing, model selection, training, evaluation, and interpretation. This hands-on experience will solidify your understanding of the process.</p>
      
      <h2>Common Pitfalls and How to Avoid Them</h2>
      <p>New practitioners often make mistakes like overfitting models, data leakage, or improper validation techniques. Understanding these pitfalls early will save you time and frustration as you progress to more complex projects.</p>
      
      <h2>Resources for Continued Learning</h2>
      <p>The field of machine learning is vast and constantly evolving. Establish a learning path that includes online courses, practical projects, and community engagement. Platforms like Kaggle offer competitions that provide real-world practice and feedback from experienced practitioners.</p>
      
      <p>Remember that becoming proficient in machine learning is a journey that requires patience and persistence. Focus on building a strong foundation of fundamentals, gain practical experience through projects, and continuously expand your knowledge as you progress.</p>
    `,
  },
  "smart-contracts-automating-trust": {
    title: "Smart Contracts: Automating Trust in the Digital Age",
    date: "February 20, 2025",
    readTime: "9 min read",
    category: "Blockchain",
    image: "/images/blockchain.png",
    author: "Praful Sonwane",
    authorImage: "/images/passport.jpeg",
    content: `
      <p>Smart contracts represent one of the most transformative applications of blockchain technology, automating agreements and transactions without requiring trust in intermediaries. These self-executing contracts with the terms directly written into code are revolutionizing how we think about agreements in the digital age.</p>
      
      <h2>Beyond Traditional Contracts</h2>
      <p>Unlike traditional contracts that require third-party enforcement, smart contracts automatically execute when predefined conditions are met. This eliminates the need for intermediaries, reduces costs, and minimizes the potential for disputes or fraud.</p>
      
      <h2>Real-World Applications</h2>
      <p>Smart contracts are already being used in insurance (automatic payouts when conditions are verified), real estate (streamlining property transfers), supply chain (triggering payments upon delivery confirmation), and countless other industries where conditional transactions occur.</p>
      
      <h2>Technical Foundations</h2>
      <p>Most smart contracts today are built on blockchain platforms like Ethereum, Solana, or Polkadot. These platforms provide the security, immutability, and decentralized execution environment necessary for smart contracts to function as intended.</p>
      
      <h2>Challenges and Limitations</h2>
      <p>Despite their potential, smart contracts face challenges including code vulnerabilities, the "oracle problem" (getting reliable external data), legal recognition, and scalability issues. Addressing these challenges is crucial for wider adoption.</p>
      
      <h2>The Future of Automated Agreements</h2>
      <p>As smart contract platforms mature and integrate with traditional systems, we'll likely see increasingly sophisticated applications. Ricardian contracts (combining legal text with executable code) and cross-chain interoperability will expand possibilities further.</p>
      
      <p>Smart contracts represent a fundamental shift in how we create and enforce agreements, potentially reducing friction in global commerce and creating new models for collaboration that weren't previously possible.</p>
    `,
  },
  "defi-reimagining-banking": {
    title: "Decentralized Finance (DeFi): Reimagining Banking",
    date: "February 15, 2025",
    readTime: "11 min read",
    category: "Web3",
    image: "/images/web3.png",
    author: "Praful Sonwane",
    authorImage: "/images/passport.jpeg",
    content: `
      <p>Decentralized Finance, or DeFi, is rapidly transforming the financial landscape by recreating traditional banking services on blockchain networks. This open, permissionless ecosystem is challenging conventional financial institutions and creating new opportunities for financial inclusion worldwide.</p>
      
      <h2>The DeFi Ecosystem</h2>
      <p>DeFi encompasses a wide range of financial services including lending and borrowing platforms, decentralized exchanges, stablecoins, insurance, derivatives, and asset management tools. These applications interact with each other, creating a composable financial system often described as "money legos."</p>
      
      <h2>Key Innovations</h2>
      <p>Several innovations make DeFi unique: smart contracts automate financial processes, liquidity pools enable decentralized trading and lending, tokenization allows fractional ownership of assets, and governance tokens give users a say in protocol development.</p>
      
      <h2>Benefits and Opportunities</h2>
      <p>DeFi offers significant advantages including 24/7 operation, global accessibility, transparency, programmability, and the elimination of counterparty risk through collateralization. These features are particularly valuable for the unbanked and underbanked populations globally.</p>
      
      <h2>Risks and Challenges</h2>
      <p>The sector faces substantial challenges including smart contract vulnerabilities, regulatory uncertainty, scalability limitations, and user experience issues. Understanding these risks is essential for anyone participating in DeFi protocols.</p>
      
      <h2>The Path Forward</h2>
      <p>As DeFi matures, we're seeing increased focus on security, regulatory compliance, and institutional adoption. The integration of DeFi with traditional finance ("TradFi") through regulated on-ramps and hybrid services will likely accelerate adoption.</p>
      
      <p>While DeFi may not completely replace traditional banking, it's creating a parallel financial system that offers greater efficiency, accessibility, and innovation. The competition and collaboration between these systems will reshape finance in the coming decades.</p>
    `,
  },
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = BLOG_POSTS[params.slug]

  if (!post) {
    return {
      title: "Blog Post Not Found | The Future Tech",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | The Future Tech`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, "") + "...",
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70 z-0" />
        <div className="absolute inset-0 z-0 bg-[url('/circuit-background.svg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-blue-400 text-sm">{post.category}</span>
              <span className="text-gray-400">•</span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">{post.title}</h1>
            <div className="flex items-center justify-center space-x-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
              </div>
              <span className="text-gray-300">{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            <article className="prose prose-lg prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex items-center space-x-2">
                <Tag className="h-5 w-5 text-gray-400" />
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">{post.category}</span>
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">Technology</span>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Future Tech</span>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 bg-gray-800 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{post.author}</h3>
                  <p className="text-blue-400 mb-2">Founder & Content Creator</p>
                  <p className="text-gray-300">
                    Tech enthusiast with a passion for emerging technologies. Dedicated to making complex tech concepts
                    accessible to everyone through engaging content.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(BLOG_POSTS)
                  .filter(([slug]) => slug !== params.slug)
                  .slice(0, 2)
                  .map(([slug, relatedPost]) => (
                    <Link href={`/blog/${slug}`} key={slug} className="group">
                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="relative h-40 w-full">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center text-xs text-gray-400 mb-2">
                            <span className="text-blue-400">{relatedPost.category}</span>
                            <span className="mx-2">•</span>
                            <span>{relatedPost.date}</span>
                          </div>
                          <h3 className="text-white font-medium mb-2 group-hover:text-blue-400 transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-300 text-sm line-clamp-2">
                            {relatedPost.content.substring(0, 120).replace(/<[^>]*>/g, "")}...
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

