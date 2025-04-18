"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Users, Zap, Award, BarChart } from "lucide-react"

interface Stat {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
}

const stats: Stat[] = [
  {
    icon: <Users className="h-8 w-8 text-blue-400" />,
    value: 10,
    label: "Clients Worldwide",
    suffix: "+",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-400" />,
    value: 1000,
    label: "Hours Saved Monthly",
    suffix: "+",
  },
  {
    icon: <Award className="h-8 w-8 text-blue-400" />,
    value: 99,
    label: "Satisfaction Rate",
    suffix: "%",
  },
  {
    icon: <BarChart className="h-8 w-8 text-blue-400" />,
    value: 40,
    label: "Efficiency Increase",
    suffix: "%",
  },
]

export function StatsSection() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!inView) return

    const duration = 2000 // ms
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)

    const countersInterval = setInterval(() => {
      setCounters((prevCounters) => {
        const newCounters = [...prevCounters]
        let allDone = true

        stats.forEach((stat, index) => {
          if (newCounters[index] < stat.value) {
            const increment = Math.ceil(stat.value / totalFrames)
            newCounters[index] = Math.min(newCounters[index] + increment, stat.value)
            allDone = false
          }
        })

        if (allDone) {
          clearInterval(countersInterval)
        }

        return newCounters
      })
    }, frameDuration)

    return () => clearInterval(countersInterval)
  }, [inView])

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-r from-gray-900/50 to-blue-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-950/50 backdrop-blur-md rounded-xl p-8 border border-gray-800/30 text-center hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold mb-2 flex justify-center items-center">
                <span className="tabular-nums text-white">{counters[index]}</span>
                <span className="text-blue-400">{stat.suffix}</span>
              </div>
              <div className="text-blue-100/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
