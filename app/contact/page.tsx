"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone, Youtube, Twitter, Instagram, Linkedin, Github, Loader2 } from "lucide-react"
import { submitContactForm } from "@/app/actions/email-actions"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const result = await submitContactForm(new FormData(formRef.current!))

      if (result.success) {
        formRef.current?.reset()
        setMessage({ text: result.message, type: "success" })
        toast({
          title: "Message Sent!",
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
        text: "There was an error sending your message. Please try again.",
        type: "error",
      })
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70 z-0" />
        <div className="absolute inset-0 z-0 bg-[url('/circuit-background.svg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">Contact Us</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject of your message"
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      className="min-h-[150px] bg-gray-700 border-gray-600 text-white"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {message && (
                    <div className={`text-sm ${message.type === "success" ? "text-green-400" : "text-red-400"}`}>
                      {message.text}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                <p className="text-gray-300 mb-8">
                  Have questions about our content or interested in collaborating? Reach out to us using any of the
                  methods below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <p className="text-gray-400">prafulsonwane13@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Phone</h4>
                    <p className="text-gray-400">+91 9302433799</p>
                    <p className="text-gray-400">Mon-Fri, 9AM-5PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Location</h4>
                    <p className="text-gray-400">India</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-700">
                <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <a
                    href="https://www.youtube.com/@futuretech13s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500/20 p-3 rounded-full hover:bg-red-500/30 transition-colors flex items-center justify-center"
                  >
                    <Youtube className="h-6 w-6 text-red-400" />
                  </a>
                  <a
                    href="https://x.com/Sonw6618Praful"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-500/20 p-3 rounded-full hover:bg-gray-500/30 transition-colors flex items-center justify-center"
                  >
                    <Twitter className="h-6 w-6 text-gray-400" />
                  </a>
                  <a
                    href="https://www.instagram.com/thefuturetech12/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500/20 p-3 rounded-full hover:bg-pink-500/30 transition-colors flex items-center justify-center"
                  >
                    <Instagram className="h-6 w-6 text-pink-400" />
                  </a>
                  <a
                    href="https://www.instagram.com/ordinary_____boys/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500/20 p-3 rounded-full hover:bg-pink-500/30 transition-colors flex items-center justify-center"
                  >
                    <Instagram className="h-6 w-6 text-pink-400" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/praful-sonwane-2a1a2a222/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500/20 p-3 rounded-full hover:bg-blue-500/30 transition-colors flex items-center justify-center"
                  >
                    <Linkedin className="h-6 w-6 text-blue-400" />
                  </a>
                  <a
                    href="https://github.com/Praful8763s/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-500/20 p-3 rounded-full hover:bg-purple-500/30 transition-colors flex items-center justify-center"
                  >
                    <Github className="h-6 w-6 text-purple-400" />
                  </a>
                </div>

                <div className="space-y-3 text-sm text-gray-400">
                  <p>
                    <span className="font-medium text-white">YouTube:</span>{" "}
                    <a
                      href="https://www.youtube.com/@futuretech13s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      @futuretech13s
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-white">Twitter/X:</span>{" "}
                    <a
                      href="https://x.com/Sonw6618Praful"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      @Sonw6618Praful
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-white">Instagram:</span>{" "}
                    <a
                      href="https://www.instagram.com/thefuturetech12/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      @thefuturetech12
                    </a>
                    {", "}
                    <a
                      href="https://www.instagram.com/ordinary_____boys/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      @ordinary_____boys
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-white">LinkedIn:</span>{" "}
                    <a
                      href="https://www.linkedin.com/in/praful-sonwane-2a1a2a222/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Praful Sonwane
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-white">GitHub:</span>{" "}
                    <a
                      href="https://github.com/Praful8763s/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Praful8763s
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

