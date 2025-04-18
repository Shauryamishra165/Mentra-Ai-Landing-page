"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "What is an AI agent and how can it help my business?",
    answer:
      "An AI agent is an intelligent software system designed to perform specific tasks autonomously. It can help your business by automating repetitive processes, analyzing large datasets for insights, providing 24/7 customer service, and making intelligent recommendations based on patterns and data. This leads to increased efficiency, reduced costs, and improved customer experiences.",
  },
  {
    question: "How long does it take to implement an AI solution with Mentra AI?",
    answer:
      "Implementation timelines vary based on the complexity of your needs. Simple chatbot implementations can be completed in 2-4 weeks, while more complex AI systems for process automation or data analysis might take 2-3 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
  },
  {
    question: "Do I need to have technical expertise to work with Mentra AI?",
    answer:
      "No technical expertise is required. Our team handles all the technical aspects of AI implementation. We work closely with your team to understand your business needs and processes, then translate those into AI solutions. We also provide user-friendly interfaces and training to ensure your team can effectively use and manage the AI systems we develop.",
  },
  {
    question: "How do you ensure the AI solutions are secure and protect our data?",
    answer:
      "Security is a top priority at Mentra AI. We implement industry-standard encryption, secure authentication protocols, and regular security audits. All data processing complies with relevant regulations like GDPR and CCPA. We also offer on-premises deployment options for organizations with strict data sovereignty requirements.",
  },
  {
    question: "Can Mentra AI solutions integrate with our existing systems?",
    answer:
      "Yes, our AI solutions are designed to integrate seamlessly with your existing systems. We support integration with major CRM platforms, ERP systems, communication tools, and custom software through APIs. During the implementation process, we'll work with your IT team to ensure smooth integration with minimal disruption to your operations.",
  },
  {
    question: "How do you measure the success of an AI implementation?",
    answer:
      "We establish clear KPIs at the beginning of each project based on your business objectives. These might include metrics like cost savings, time saved, customer satisfaction scores, error reduction rates, or revenue impact. We provide regular reporting on these metrics and work continuously to optimize performance.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-gray-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
          Frequently Asked <span className="text-blue-500">Questions</span>
        </h2>
        <p className="text-blue-100/80 text-center max-w-2xl mx-auto mb-16">
          Get answers to common questions about AI implementation and how Mentra AI can help your business.
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-800/30 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-md"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-800/30 hover:no-underline">
                  <span className="text-left font-medium text-white">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-blue-100/70">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
