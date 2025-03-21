"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PhoneIcon as WhatsApp, X, Minimize2, Maximize2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const phoneNumber = "919302433799" // Replace with your actual WhatsApp number

  const handleSubmit = (e) => {
    e.preventDefault()

    // Format the message for WhatsApp
    const encodedMessage = encodeURIComponent(`Hello, my name is ${name}. ${message}`)

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")

    // Reset form
    setName("")
    setMessage("")
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 rounded-full w-14 h-14 p-0 bg-green-600 hover:bg-green-700 shadow-lg z-50"
      >
        <WhatsApp className="h-6 w-6" />
      </Button>
    )
  }

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 z-50 w-80 md:w-96 shadow-xl transition-all duration-300 ease-in-out",
        isMinimized ? "h-14" : "h-auto",
      )}
    >
      <Card className="bg-gray-900 border-gray-700">
        <CardHeader className="p-3 border-b border-gray-800 flex flex-row items-center justify-between space-y-0">
          <CardTitle className="text-white flex items-center">
            <WhatsApp className="h-5 w-5 mr-2 text-green-500" />
            WhatsApp Chat
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
            <CardContent className="p-4">
              <p className="text-gray-300 mb-4">
                Chat with us directly on WhatsApp for quick responses to your questions about our content,
                collaborations, or tech inquiries.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What would you like to discuss?"
                    required
                    className="min-h-[100px] bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <WhatsApp className="h-4 w-4 mr-2" />
                  Start WhatsApp Chat
                </Button>
              </form>
            </CardContent>

            <CardFooter className="px-4 pb-4 pt-0 flex justify-center">
              <p className="text-xs text-gray-400">
                By clicking the button, you'll be redirected to WhatsApp to continue the conversation.
              </p>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  )
}

