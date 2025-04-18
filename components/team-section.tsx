import { Github, Linkedin, Twitter } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  social: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Alex Morgan",
    role: "CEO & Founder",
    bio: "AI visionary with 15+ years in machine learning and business transformation.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Samantha Chen",
    role: "Chief AI Architect",
    bio: "Former Google AI researcher specializing in natural language processing and conversational AI.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Marcus Johnson",
    role: "Head of AI Ethics",
    bio: "Ensuring our AI solutions are ethical, unbiased, and aligned with human values.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Priya Patel",
    role: "Lead ML Engineer",
    bio: "Expert in building scalable machine learning systems and optimization algorithms.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-gray-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
          Our <span className="text-blue-500">Team</span>
        </h2>
        <p className="text-blue-100/80 text-center max-w-2xl mx-auto mb-16">
          Meet the brilliant minds behind Mentra AI. Our diverse team of experts is passionate about pushing the
          boundaries of what AI can achieve.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900/30 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800/30 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-blue-100/70 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-blue-100/70 hover:text-blue-400 transition-colors">
                      <Twitter size={18} />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-blue-100/70 hover:text-blue-400 transition-colors">
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-blue-100/70 hover:text-blue-400 transition-colors">
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
