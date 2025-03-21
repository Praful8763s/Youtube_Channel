"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bot, Send, X, Minimize2, Maximize2, User } from "lucide-react"
import { cn } from "@/lib/utils"

// Sample responses for the AI chatbot
const AI_RESPONSES = {
  greeting: [
    "Hello! Welcome to The Future Tech. How can I help you today?",
    "Hi there! I'm FutureTech AI. What would you like to know about emerging technologies?",
    "Welcome! I'm here to answer your questions about AI, blockchain, Web3, and more.",
  ],
  ai: [
    "Artificial Intelligence (AI) is a field of computer science focused on creating systems that can perform tasks that typically require human intelligence. This includes learning, reasoning, problem-solving, perception, and language understanding.",
    "Machine Learning is a subset of AI that focuses on developing algorithms that can learn from and make predictions based on data. Deep Learning, a further subset, uses neural networks with many layers to analyze various factors of data.",
    "Some exciting AI applications include natural language processing, computer vision, autonomous vehicles, healthcare diagnostics, and personalized recommendations.",
  ],
  blockchain: [
    "Blockchain is a distributed ledger technology that enables secure, transparent, and immutable record-keeping without requiring a central authority.",
    "Beyond cryptocurrencies, blockchain is being used in supply chain management, healthcare records, voting systems, and digital identity verification.",
    "Smart contracts are self-executing contracts with the terms directly written into code, automating agreements without intermediaries.",
  ],
  web3: [
    "Web3 represents the next evolution of the internet, focusing on decentralization, blockchain technologies, and token-based economics.",
    "Unlike Web2 (the current internet dominated by centralized platforms), Web3 aims to give users ownership of their data and digital assets.",
    "Key components of Web3 include cryptocurrencies, NFTs (Non-Fungible Tokens), DAOs (Decentralized Autonomous Organizations), and dApps (Decentralized Applications).",
  ],
  default: [
    "That's an interesting question! While I don't have specific information on that topic, you might find relevant content in our blog or YouTube channel.",
    "I'm still learning about that area. You might want to check our latest articles or videos for more information.",
    "Great question! For more detailed information on this topic, I'd recommend checking out our blog posts or reaching out via the contact form.",
  ],
}

// Helper function to get a random response
function getRandomResponse(category) {
  const responses = AI_RESPONSES[category] || AI_RESPONSES.default
  return responses[Math.floor(Math.random() * responses.length)]
}

// Helper function to determine response category based on message
function getResponseCategory(message) {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return "greeting"
  } else if (
    lowerMessage.includes("ai") ||
    lowerMessage.includes("artificial intelligence") ||
    lowerMessage.includes("machine learning")
  ) {
    return "ai"
  } else if (
    lowerMessage.includes("blockchain") ||
    lowerMessage.includes("crypto") ||
    lowerMessage.includes("bitcoin")
  ) {
    return "blockchain"
  } else if (lowerMessage.includes("web3") || lowerMessage.includes("decentralized") || lowerMessage.includes("nft")) {
    return "web3"
  }

  return "default"
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "Hello! I'm FutureTech AI. How can I help you with questions about AI, blockchain, Web3, or other emerging technologies?",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: inputValue }])

    // Clear input
    setInputValue("")

    // Simulate AI typing
    setIsTyping(true)

    // Determine response category
    const responseCategory = getResponseCategory(inputValue)

    // Simulate AI response delay
    setTimeout(
      () => {
        setIsTyping(false)
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            content: getRandomResponse(responseCategory),
          },
        ])
      },
      1000 + Math.random() * 1000,
    ) // Random delay between 1-2 seconds
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full w-14 h-14 p-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg z-50"
      >
        <Bot className="h-6 w-6" />
      </Button>
    )
  }

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 w-80 md:w-96 shadow-xl transition-all duration-300 ease-in-out",
        isMinimized ? "h-14" : "h-[500px] max-h-[80vh]",
      )}
    >
      <Card className="h-full flex flex-col bg-gray-900 border-gray-700">
        <CardHeader className="p-3 border-b border-gray-800 flex flex-row items-center justify-between space-y-0">
          <CardTitle className="text-white flex items-center">
            <Bot className="h-5 w-5 mr-2 text-blue-400" />
            FutureTech AI
          </CardTitle>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="flex-1 overflow-y-auto p-3 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}>
                  <div className="flex items-start max-w-[80%]">
                    {message.role === "bot" && (
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src="/images/youtube.webp" alt="Bot" />
                        <AvatarFallback className="bg-blue-600">FT</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        "rounded-lg px-3 py-2 text-sm",
                        message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-100",
                      )}
                    >
                      {message.content}
                    </div>
                    {message.role === "user" && (
                      <Avatar className="h-8 w-8 ml-2">
                        <AvatarFallback className="bg-green-600">
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start max-w-[80%]">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="/images/youtube.webp" alt="Bot" />
                      <AvatarFallback className="bg-blue-600">FT</AvatarFallback>
                    </Avatar>
                    <div className="bg-gray-800 rounded-lg px-4 py-2 text-white">
                      <div className="flex space-x-1">
                        <div
                          className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></div>
                        <div
                          className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </CardContent>

            <CardFooter className="p-3 border-t border-gray-800">
              <div className="flex w-full items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </div>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  )
}

