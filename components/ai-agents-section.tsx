"use client"

import type React from "react"

import { useState } from "react"
import { Bot, Brain, Cpu, MessageSquare, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface AIAgent {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  features: string[]
  useCases: string[]
}

const aiAgents: AIAgent[] = [
  {
    id: "customer-service",
    name: "Customer Service AI",
    icon: <MessageSquare className="h-6 w-6" />,
    description:
      "An intelligent virtual assistant that handles customer inquiries 24/7, providing instant responses and seamless escalation to human agents when needed.",
    features: [
      "Natural language understanding",
      "Multi-language support",
      "Sentiment analysis",
      "Contextual memory",
      "Seamless human handoff",
    ],
    useCases: [
      "E-commerce support",
      "Banking customer service",
      "Hospitality guest services",
      "Technical support",
      "Appointment scheduling",
    ],
  },
  {
    id: "data-analyst",
    name: "Data Analyst AI",
    icon: <Brain className="h-6 w-6" />,
    description:
      "A powerful AI agent that analyzes your business data, identifies patterns, and provides actionable insights to drive strategic decision-making.",
    features: [
      "Advanced pattern recognition",
      "Predictive analytics",
      "Anomaly detection",
      "Natural language reporting",
      "Interactive visualizations",
    ],
    useCases: [
      "Sales forecasting",
      "Market trend analysis",
      "Customer behavior insights",
      "Operational efficiency",
      "Risk assessment",
    ],
  },
  {
    id: "process-automation",
    name: "Process Automation AI",
    icon: <Cpu className="h-6 w-6" />,
    description:
      "An intelligent system that automates complex business processes, reducing manual work and increasing operational efficiency across your organization.",
    features: [
      "Workflow automation",
      "Document processing",
      "Decision intelligence",
      "Integration capabilities",
      "Error detection and handling",
    ],
    useCases: [
      "Invoice processing",
      "HR onboarding",
      "Supply chain management",
      "Compliance monitoring",
      "Quality assurance",
    ],
  },
  {
    id: "personal-assistant",
    name: "Personal Assistant AI",
    icon: <Bot className="h-6 w-6" />,
    description:
      "A personalized AI assistant that helps individuals manage their schedule, tasks, and information needs, adapting to personal preferences over time.",
    features: [
      "Calendar management",
      "Task prioritization",
      "Information retrieval",
      "Personalized recommendations",
      "Cross-platform synchronization",
    ],
    useCases: [
      "Executive assistance",
      "Meeting scheduling",
      "Research assistance",
      "Travel planning",
      "Personal productivity",
    ],
  },
]

export function AIAgentsSection() {
  const [activeAgent, setActiveAgent] = useState(aiAgents[0])

  return (
    <section id="ai-agents" className="py-24 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
          Our AI <span className="text-blue-500">Agents</span>
        </h2>
        <p className="text-blue-100/80 text-center max-w-2xl mx-auto mb-16">
          Discover our specialized AI agents designed to transform different aspects of your business operations.
        </p>

        <Tabs
          defaultValue={aiAgents[0].id}
          className="w-full"
          onValueChange={(value) => {
            const agent = aiAgents.find((a) => a.id === value)
            if (agent) setActiveAgent(agent)
          }}
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-gray-900/30 p-1 mb-8 border border-gray-800/30 rounded-lg">
            {aiAgents.map((agent) => (
              <TabsTrigger
                key={agent.id}
                value={agent.id}
                className="data-[state=active]:bg-blue-600/80 data-[state=active]:text-white backdrop-blur-sm"
              >
                <div className="flex items-center">
                  <span className="mr-2">{agent.icon}</span>
                  <span className="hidden md:inline">{agent.name}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {aiAgents.map((agent) => (
            <TabsContent key={agent.id} value={agent.id} className="mt-0">
              <div className="bg-gray-900/30 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800/30 shadow-lg">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                          {agent.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{agent.name}</h3>
                      </div>
                      <p className="text-blue-100/80 mb-6">{agent.description}</p>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-blue-400">Key Features</h4>
                        <ul className="space-y-2">
                          {agent.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              <span className="text-blue-100/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-blue-400">Use Cases</h4>
                        <ul className="space-y-2">
                          {agent.useCases.map((useCase, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              <span className="text-blue-100/80">{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
