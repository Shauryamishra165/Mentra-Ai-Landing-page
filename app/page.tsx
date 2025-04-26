"use client"; // 👈 This is required to use useState in App Router

import { ChevronRight, MessageSquare, Zap, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Hero3DModel from "@/components/hero-3d-model";
import { TeamSection } from "@/components/team-section";
import { AIAgentsSection } from "@/components/ai-agents-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { StatsSection } from "@/components/stats-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { useState } from "react"; // ✅ moved to the top

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = "https://script.google.com/macros/s/AKfycbxWCtdpRaQxPeEhrCGfZOTri-j69BFnnX0XlUYT_Jg007SWfES6DAbK1Ka3twC9MYkO/exec"; // ⬅️ replace with your actual script ID

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        mode: "no-cors", // use "cors" if your script supports CORS properly
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error sending message.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-2xl text-white">
            {/* Your Logo */}
            {/* <img src="C:\Users\hp\OneDrive\Desktop\mentra-ai-landing\public\Mentra_logo.png" alt="Your Logo" className="w-12 h-12 rounded-full object-cover" /> */}
            {/* Mentra AI Logo */}
            <img src="../Mentra_logo.png" alt="Mentra AI Logo" className="w-12 h-12 rounded-full object-cover" />
            Mentra AI
          </div>
          <nav className="hidden md:flex gap-6 ml-auto">
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition">About</a>
            <a href="#services" className="text-gray-300 hover:text-blue-400 transition">Services</a>
            <a href="#ai-agents" className="text-gray-300 hover:text-blue-400 transition">AI Agents</a>
            <a href="#faq" className="text-gray-300 hover:text-blue-400 transition">FAQ</a>
          </nav>
          <div className="ml-4">
            <a href="#contact">
              <Button className="bg-blue-600 hover:bg-blue-500 text-white">Get Started</Button>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 opacity-70"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-20"></div>

          <Hero3DModel />

          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              Redefining the Future with Personalized AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              From intuitive chatbots to intelligent task automation, Mentra AI crafts AI agents tailored to your business needs.
            </p>
            <a href="#services">
              <Button className="bg-blue-600 hover:bg-blue-500 text-white text-lg px-8 py-6 transition">
                Discover What AI Can Do for You
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>

        <StatsSection />

        <section id="about" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Why <span className="text-blue-500">Mentra AI</span>?
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-gray-300 leading-relaxed">
                At Mentra AI, we craft personalized AI agents — from smart, intuitive chatbots that effortlessly handle every query to Intelligent Task Automation Systems that drive operational excellence.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Our <span className="text-blue-500">Services</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Custom AI Chatbots</h3>
                <p className="text-gray-400">
                  Smart, seamless conversations for enhanced customer engagement. Our chatbots learn and adapt to provide exceptional service.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Task Automation Systems</h3>
                <p className="text-gray-400">
                  Boost productivity with AI that streamlines complex operations. Automate repetitive tasks and focus on what matters most.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI Strategy Consulting</h3>
                <p className="text-gray-400">
                  Explore tailored approaches to integrate AI into your business model. Our experts guide you through the transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AIAgentsSection />
        <FAQSection />

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-blue-900 to-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Get in <span className="text-blue-500">Touch</span>
            </h2>
            <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-xl border border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-gray-800 border-gray-700 focus:border-blue-500 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-gray-800 border-gray-700 focus:border-blue-500 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="bg-gray-800 border-gray-700 focus:border-blue-500 text-white min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <img src="../Mentra_logo.png" alt="Mentra AI Logo" className="w-12 h-12 rounded-full object-cover" />
              Mentra AI
              </div>
              <p className="text-gray-400 text-sm">
                Transforming businesses with intelligent AI solutions tailored to your unique needs.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-blue-400 transition">Custom AI Chatbots</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition">Task Automation</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition">AI Strategy</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition">Data Analysis</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition">Our Services</a></li>
                <li><a href="#ai-agents" className="hover:text-blue-400 transition">Previous Projects</a></li>
                <li><a href="#faq" className="hover:text-blue-400 transition">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>team.mentraai@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Mentra AI. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/mentra-ai/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
