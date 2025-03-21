"use server"

import { z } from "zod"

// Email validation schema
const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string

  // Validate email
  const result = subscribeSchema.safeParse({ email })

  if (!result.success) {
    return {
      success: false,
      message: result.error.errors[0].message,
    }
  }

  try {
    // In a real app, you would use an email service like SendGrid, Mailchimp, etc.
    // For demo purposes, we'll just simulate a successful subscription
    console.log(`Subscription received for: ${email}`)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Send confirmation email (simulated)
    console.log(`Confirmation email sent to: ${email}`)

    return {
      success: true,
      message: `Thank you for subscribing! A confirmation has been sent to ${email}.`,
    }
  } catch (error) {
    console.error("Subscription error:", error)
    return {
      success: false,
      message: "There was an error processing your subscription. Please try again.",
    }
  }
}

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validate form data
  const result = contactSchema.safeParse({ name, email, subject, message })

  if (!result.success) {
    return {
      success: false,
      message: result.error.errors[0].message,
    }
  }

  try {
    // In a real app, you would send this data to your email service
    console.log("Contact form submission:")
    console.log({ name, email, subject, message })

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Send notification email to admin (simulated)
    console.log(`Contact form notification sent to admin from: ${email}`)

    // Send confirmation email to user (simulated)
    console.log(`Confirmation email sent to: ${email}`)

    return {
      success: true,
      message: `Thank you for your message, ${name}! We'll get back to you soon.`,
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message: "There was an error sending your message. Please try again.",
    }
  }
}

