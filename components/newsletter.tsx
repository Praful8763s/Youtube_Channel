"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { subscribeToNewsletter } from "@/app/actions/email-actions"
import { Loader2 } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const result = await subscribeToNewsletter(new FormData(formRef.current!))

      if (result.success) {
        setEmail("")
        setMessage({ text: result.message, type: "success" })
        toast({
          title: "Success!",
          description: result.message,
        })
      } else {
        setMessage({ text: result.message, type: "error" })
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      setMessage({
        text: "There was an error processing your subscription. Please try again.",
        type: "error",
      })
      toast({
        title: "Error",
        description: "There was an error processing your subscription. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
      <p className="text-gray-300 mb-6">
        Subscribe to our newsletter to receive the latest updates on future technology trends, exclusive content, and
        upcoming videos.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-gray-800 border-gray-700 text-white"
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>

      {message && (
        <div className={`mt-4 text-sm ${message.type === "success" ? "text-green-400" : "text-red-400"}`}>
          {message.text}
        </div>
      )}
    </div>
  )
}

