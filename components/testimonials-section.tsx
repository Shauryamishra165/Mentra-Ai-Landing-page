"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  position: string
  company: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Mentra AI transformed our customer service operations. Their custom chatbot handles 80% of inquiries automatically, saving us thousands of hours annually.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "TechVision Inc.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The process automation AI that Mentra developed for us has cut our document processing time by 75% and virtually eliminated errors.",
    author: "Michael Chen",
    position: "Operations Director",
    company: "Global Logistics",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with Mentra AI on our strategic AI roadmap opened our eyes to possibilities we hadn't considered. Their expertise is unmatched.",
    author: "Jessica Rodriguez",
    position: "Innovation Lead",
    company: "Future Finance",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 8000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Client <span className="text-blue-500">Testimonials</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Hear what our clients have to say about their experience working with Mentra AI.
        </p>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-950 rounded-xl p-8 md:p-10 border border-gray-800">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Quote className="h-8 w-8 text-blue-400" />
                      </div>
                    </div>
                    <blockquote className="text-xl text-center text-gray-300 mb-8">"{testimonial.quote}"</blockquote>
                    <div className="flex items-center justify-center">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <div className="font-bold">{testimonial.author}</div>
                        <div className="text-sm text-gray-400">
                          {testimonial.position}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${current === index ? "bg-blue-500" : "bg-gray-700"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
