'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Brain, Users, Lightbulb, Target, GraduationCap, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "📚 Learnly – EdTech Q&A Platform",
      description: "A full-stack educational platform offering academic support via a tokenized, community-driven Q&A system.",
      role: "Frontend & UI Development",
      details: [
        "Built UI using React and ShadCN UI, integrated with secure JWT auth",
        "Collaborated on system diagrams and backend API consumption",
        "Wrote documentation using IEEE-style citations"
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "AWS", "JWT"],
      type: "Group Project"
    },
    {
      title: "🔫 Multiplayer Tank Game",
      description: "Developed a basic 2-player tank shooter using Python, focused on real-time event handling and object-oriented design.",
      tech: ["Python", "Pygame"],
      type: "Personal Project"
    },
    {
      title: "🏭 Supply Chain Management System",
      description: "A data science project built to optimize supply chain logistics and visualize performance.",
      tech: ["Python", "Pandas", "Matplotlib"],
      type: "Data Science Project"
    },
    {
      title: "🧑‍💻 CodeBuddy – Browser-Based IDE",
      description: "Designed an online IDE inspired by VS Code with file navigation, syntax highlighting, and real-time code editing.",
      tech: ["React", "CodeMirror", "Node.js"],
      type: "Web Application"
    },
    {
      title: "🎓 EduRevamp – Learning Platform",
      description: "An education portal with interactive quizzes and revision modules to improve retention and engagement.",
      tech: ["React", "MongoDB", "Node.js"],
      type: "Educational Platform"
    }
  ]

  const skills = {
    languages: ["C++", "Python", "Java (Basics)"],
    core: ["Data Structures", "Algorithms"],
    specialization: ["Data Science"],
    tools: ["MongoDB", "React", "Node.js", "Express", "JWT"],
    soft: ["Problem Solving", "Team Collaboration", "Curiosity-Driven Learning"]
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 overflow-x-hidden">
      {/* Enhanced Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(16,185,129,0.1),transparent_50%)]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className={`text-center transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
              💻 Mohit Yadav
            </h1>
            <div className="text-xl md:text-2xl text-emerald-300 font-medium mb-6">
              <span className="typing-animation">Computer Science Engineering Student</span>
            </div>
            <div className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Specializing in Data Science • Building impactful digital systems • Passionate about scalable architectures
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              <Github className="mr-2 h-5 w-5" />
              <a href="https://github.com/SmileyH4x" target="_blank" rel="noopener noreferrer">GitHub</a>
            </Button>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              <Linkedin className="mr-2 h-5 w-5" />
              <a href="https://www.linkedin.com/in/mohit-yadav-3b416728a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white border-0 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
              <Mail className="mr-2 h-5 w-5" />
              <a href="mailto:killerp456@gmail.com">Email</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
            About Me
          </h2>
          <Card className="bg-slate-800/60 border-slate-700 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <p className="text-lg text-slate-200 leading-relaxed mb-4">
                I'm a curious and driven Computer Science Engineering student currently pursuing B.Tech with a specialization in Data Science at Bennett University. While not a traditional game developer, I share the same passion for building impactful digital systems — whether it's scalable backend architectures, data-driven applications, or full-stack platforms that improve lives.
              </p>
              <p className="text-lg text-slate-200 leading-relaxed mb-4">
                I've worked with C++, Python, and the fundamentals of Java, and I'm constantly evolving — learning how to design better systems, write cleaner code, and solve real-world problems through tech.
              </p>
              <p className="text-lg text-slate-200 leading-relaxed">
                Outside of tech, I'm a gamer, a music enthusiast, and someone who believes in blending creativity with logic. I believe in learning by building, and I love collaborating with like-minded developers and creators.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-emerald-400">
            🛠️ Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-800/60 border-blue-500/30 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-400">
                  <Code className="mr-2 h-5 w-5" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, index) => (
                    <Badge key={index} className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-purple-500/30 backdrop-blur-sm hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-400">
                  <Brain className="mr-2 h-5 w-5" />
                  Core Computer Science
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.core.map((skill, index) => (
                    <Badge key={index} className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-emerald-500/30 backdrop-blur-sm hover:border-emerald-400 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10">
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-400">
                  <Target className="mr-2 h-5 w-5" />
                  Specialization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.specialization.map((skill, index) => (
                    <Badge key={index} className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-orange-500/30 backdrop-blur-sm hover:border-orange-400 transition-all duration-300 shadow-lg hover:shadow-orange-500/10">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-400">
                  <Database className="mr-2 h-5 w-5" />
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <Badge key={index} className="bg-orange-500/20 text-orange-300 border-orange-500/30 hover:bg-orange-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-pink-500/30 backdrop-blur-sm hover:border-pink-400 transition-all duration-300 shadow-lg hover:shadow-pink-500/10 md:col-span-2 lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center text-pink-400">
                  <Users className="mr-2 h-5 w-5" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, index) => (
                    <Badge key={index} className="bg-pink-500/20 text-pink-300 border-pink-500/30 hover:bg-pink-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">
            📚 Education
          </h2>
          <div className="space-y-6">
            <Card className="bg-slate-800/60 border-blue-500/30 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-400">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Bennett University
                </CardTitle>
                <CardDescription className="text-slate-300 text-base">Bachelor of Technology – B.Tech, Computer Science</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-300 font-semibold mb-2">Specialization: Data Science</p>
                <p className="text-slate-400">📍 2023 – 2027 (Currently in 3rd Year)</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-emerald-500/30 backdrop-blur-sm hover:border-emerald-400 transition-all duration-300 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-400">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Kendriya Vidyalaya, Alwar
                </CardTitle>
                <CardDescription className="text-slate-300 text-base">High School & Secondary Education</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-blue-300 font-medium">Class XII (CBSE): 93.4%</p>
                  <p className="text-blue-300 font-medium">Class X (CBSE): 80.6%</p>
                  <p className="text-slate-400">📍 2014 – 2021</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">
            🚀 Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/60 border-slate-600/50 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-orange-500/10">
                <CardHeader>
                  <CardTitle className="text-orange-300 text-lg">{project.title}</CardTitle>
                  <Badge className="w-fit bg-blue-500/20 text-blue-300 border-blue-500/30">
                    {project.type}
                  </Badge>
                  {project.role && (
                    <p className="text-emerald-300 font-medium">My Role: {project.role}</p>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-slate-200 mb-4 leading-relaxed">{project.description}</p>
                  {project.details && (
                    <ul className="text-sm text-slate-300 mb-4 space-y-1">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-pink-400">
            📬 Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800/60 border-blue-500/30 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 text-center shadow-lg">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <p className="text-blue-300 font-semibold mb-2">Phone</p>
                <p className="text-slate-200">+91-9352579208</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-emerald-500/30 backdrop-blur-sm hover:border-emerald-400 transition-all duration-300 text-center shadow-lg">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-emerald-400 mx-auto mb-4" />
                <p className="text-emerald-300 font-semibold mb-2">Location</p>
                <p className="text-slate-200">Alwar, Rajasthan, India</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-purple-500/30 backdrop-blur-sm hover:border-purple-400 transition-all duration-300 text-center shadow-lg">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                <p className="text-purple-300 font-semibold mb-2">Email</p>
                <p className="text-slate-200">killerp456@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-orange-500/30 backdrop-blur-sm hover:border-orange-400 transition-all duration-300 text-center shadow-lg">
              <CardContent className="p-6">
                <Lightbulb className="h-8 w-8 text-orange-400 mx-auto mb-4" />
                <p className="text-orange-300 font-semibold mb-2">Languages</p>
                <p className="text-slate-200">Hindi (Native)</p>
                <p className="text-slate-200">English (Fluent)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-slate-700/50 bg-slate-800/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            Built with passion for technology and innovation • © 2025 Mohit Yadav
          </p>
        </div>
      </footer>
    </div>
  )
}
