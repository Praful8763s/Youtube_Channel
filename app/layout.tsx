import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AIChatbot } from "@/components/ai-chatbot"
import { WhatsAppChat } from "@/components/whatsapp-chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Future Tech - Exploring Tomorrow's Technology Today",
  description:
    "The Future Tech is a YouTube channel dedicated to exploring the latest advancements in technology and predicting future trends.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
            <AIChatbot />
            <WhatsAppChat />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

