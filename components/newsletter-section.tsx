"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      if (email && email.includes("@")) {
        setStatus("success")
        setMessage("Thank you for subscribing to our newsletter!")
        setEmail("")
      } else {
        setStatus("error")
        setMessage("Please enter a valid email address.")
      }
    }, 1500)
  }

  return (
    <section className="py-24 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gray-950/50 backdrop-blur-md rounded-xl p-8 md:p-10 border border-gray-800/30 shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Mail className="h-8 w-8 text-blue-400" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
            Stay Updated with AI Innovations
          </h2>
          <p className="text-blue-100/80 text-center mb-8">
            Subscribe to our newsletter to receive the latest insights, trends, and updates in AI technology.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800/50 border-gray-700/50 focus:border-blue-500/50 text-white backdrop-blur-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
              />
              <Button
                type="submit"
                className="bg-blue-600/80 hover:bg-blue-500/80 backdrop-blur-sm text-white whitespace-nowrap border border-blue-400/20"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
            {status !== "idle" && (
              <p className={`mt-3 text-center ${status === "success" ? "text-green-400" : "text-red-400"}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
