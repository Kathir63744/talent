"use client"
import { useEffect, useState } from "react"
import {
  ArrowRight,
  Volume2,
  Users,
  Brain,
  MessageCircle,
  Mic,
  Target,
  Zap,
  Quote,
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Calendar,
  Video,
  Headphones,
  BookOpen,
  GraduationCap,
  Globe,
  Sparkles,
  Briefcase,
  Lightbulb,
  UserPlus,
  ClipboardCheck,
  BarChart,
  Target as TargetIcon,
  Clock,
  Shield,
  Heart,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  FileText,
  Download,
  Play,
  PlayCircle,
} from "lucide-react"
import Image from "next/image"

export default function SrashTalkWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeFAQ, setActiveFAQ] = useState(null)
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(interval)
    }
  }, [])

  // Navigation
  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "Success Stories", path: "#stories" },
    { name: "Free Resources", path: "#resources" },
    { name: "Our Method", path: "#methodology" },
    { name: "Train with Aashiq", path: "#contact" },
  ]

  // Voice Training Programs
  const voicePrograms = [
    {
      icon: Mic,
      title: "BPO Voice & Accent Power",
      description: "Sound clear, confident, and professional on calls. Essential for BPO, customer service, and sales roles. Speak Real.",
      focus: ["Call Flow Mastery", "Neutral Accent Training", "Customer Voice Tone"],
      duration: "6 weeks",
      level: "Freshers & Aspirants",
      benefits: ["Handle Any Call", "Reduce Accent Bias", "Sound Professional"],
    },
    {
      icon: MessageCircle,
      title: "Interview Fluency & Real-Talk English",
      description: "Answer any interview question with clarity and confidence. Move from textbook English to real-talk fluency.",
      focus: ["Answer Framing", "Fluency Hacks", "Confident Storytelling"],
      duration: "8 weeks",
      level: "All Levels",
      benefits: ["Crack Any Interview", "Think While Speaking", "Eliminate Ums & Ahs"],
    },
    {
      icon: Target,
      title: "Speaking Presence & Executive Voice",
      description: "Command attention when you speak. Develop a voice that inspires trust and authority.",
      focus: ["Tone Authority", "Powerful Pauses", "Confident Body Language"],
      duration: "10 weeks",
      level: "Working Professionals",
      benefits: ["Sound Like a Leader", "Present with Impact", "Influence Decisions"],
    },
  ]

  // Methodology
  const methodologies = [
    {
      step: "01",
      title: "Voice & Mindset Check",
      description: "We diagnose your speaking fears, accent challenges, and confidence gaps. No judgment. Just honesty.",
      icon: Brain,
      details: "Personalized voice report with actionable hacks",
    },
    {
      step: "02",
      title: "Your Voice Makeover Plan",
      description: "A practical plan focused on your target: BPO job, interview, or professional presence.",
      icon: TargetIcon,
      details: "Real-world scenarios, not textbook exercises",
    },
    {
      step: "03",
      title: "Real-Talk Drills & Live Demos",
      description: "Practice with mock calls, live interviews, and impromptu speaking. Get raw, honest feedback.",
      icon: Users,
      details: "Live sessions with Aashiq and coaches",
    },
    {
      step: "04",
      title: "Confidence Milestones",
      description: "We track your voice clarity, fluency speed, and confidence score. Hear your own transformation.",
      icon: BarChart,
      details: "Voice recordings show your real progress",
    },
  ]

  // Impact Metrics
  const impactStats = [
    { value: "95%", label: "Found Their Real Voice", icon: TrendingUp, description: "Average confidence breakthrough" },
    { value: "4.8/5", label: "Feel Interview-Ready", icon: Star, description: "Based on trainee feedback" },
    { value: "15K+", label: "Voices Transformed", icon: Users, description: "Across India & Middle East" },
    { value: "89%", label: "Aced Their Interviews", icon: Award, description: "Landed jobs post-training" },
    { value: "98%", label: "Would Recommend", icon: Heart, description: "To friends and colleagues" },
    { value: "500+", label: "Freshers Hired", icon: Briefcase, description: "First jobs secured" },
  ]

  // Testimonials
  const testimonials = [
    {
      name: "Priya, BPO Aspirant",
      role: "Landed First BPO Job",
      quote: "I failed 4 interviews because of my accent. In 6 weeks with Srash Talk, I nailed the 5th. They loved my clarity. Speak Real. It works.",
      skills: ["Neutral Accent", "Call Confidence", "Active Listening"],
      beforeAfter: "From mumbled words to clear communication",
      avatar: "P",
    },
    {
      name: "Rahul, Fresher",
      role: "Got Hired as Sales Executive",
      quote: "My grammar was perfect, but I sounded robotic. Aashiq taught me real-talk English. My interviewer said, 'You communicate very naturally.' Got the offer.",
      skills: ["Interview Fluency", "Real-Talk English", "Confident Pitch"],
      beforeAfter: "From textbook answers to natural conversation",
      avatar: "R",
    },
    {
      name: "Anjali, Working Professional",
      role: "Team Lead, IT Company",
      quote: "I was overlooked for promotions because my voice lacked power. Voice makeover training gave me presence. Now I lead client calls. Authentic. Strong.",
      skills: ["Executive Tone", "Speaking Presence", "Confident Delivery"],
      beforeAfter: "From background voice to leadership voice",
      avatar: "A",
    },
    {
      name: "Vikram, Career Changer",
      role: "Customer Service Manager",
      quote: "Coming from a vernacular medium, I struggled with English. Srash Talk didn't fix my grammar—they fixed my confidence. Now I manage a team of 20.",
      skills: ["Confidence Building", "Professional Tone", "Clear Communication"],
      beforeAfter: "From hesitant speaker to confident manager",
      avatar: "V",
    },
  ]

  // Resources
  const resources = [
    { 
      title: "Voice Power Wednesday", 
      description: "A short, actionable voice tip or fluency hack every week. Straight to your inbox.",
      icon: Sparkles,
      format: "Email Newsletter",
      frequency: "Every Wednesday",
    },
    { 
      title: "Real-Talk Drill Sheets", 
      description: "Practice sheets for interview answers, call scripts, and accent neutralization.",
      icon: BookOpen,
      format: "PDF Downloads",
      frequency: "Updated Monthly",
    },
    { 
      title: "Live Demo Sessions with Aashiq", 
      description: "Watch Aashiq break down real conversations and interviews. Live Q&A.",
      icon: Video,
      format: "Live Online",
      frequency: "Bi-weekly",
    },
    { 
      title: "Srash Talk Circle", 
      description: "A supportive space to practice, share wins, and get feedback from peers on the same journey.",
      icon: Users,
      format: "Community Platform",
      frequency: "24/7 Access",
    },
    { 
      title: "Voice Makeover Case Studies", 
      description: "Real stories of voice transformations—hear the actual 'before and after' recordings.",
      icon: FileText,
      format: "Audio + Transcript",
      frequency: "Monthly",
    },
    { 
      title: "Free Voice Audit", 
      description: "15-minute personalized assessment of your current speaking style and confidence level.",
      icon: ClipboardCheck,
      format: "One-on-One Call",
      frequency: "Limited Slots Weekly",
    },
  ]

  // Success Stories
  const successStories = [
    {
      name: "BPO Breakthrough",
      description: "How a shy graduate became a top-performing customer service executive",
      metrics: ["Clearer Accent", "30% Better Call Handling", "Promoted in 6 Months"],
      industry: "BPO/Customer Service",
    },
    {
      name: "Fresher Success",
      description: "Engineering graduate lands dream job after interview fluency training",
      metrics: ["3 Job Offers", "Confidence Score 9/10", "Perfect Interview Feedback"],
      industry: "Fresher Placements",
    },
    {
      name: "Professional Upgrade",
      description: "Team member becomes team lead after developing speaking presence",
      metrics: ["Lead Client Meetings", "Clearer Communication", "Team Respect Earned"],
      industry: "Corporate Professionals",
    },
  ]

  // FAQ
  const faqs = [
    {
      question: "Is this just another spoken English class?",
      answer: "No. This is voice-first, mindset-driven training. We focus on how you sound, not just what you say. Confidence, tone, and real-world fluency matter more than perfect grammar.",
    },
    {
      question: "How soon will I sound more confident?",
      answer: "Most trainees hear a difference in their own voice within 2-3 weeks. Real interview and call readiness takes 4-8 weeks of committed practice. We give you hacks you can use immediately.",
    },
    {
      question: "I'm a complete fresher with low confidence. Can this help?",
      answer: "Absolutely. This is built for you. We start where you are—with your fears, your accent, your self-doubt. No shaming. Just practical building.",
    },
    {
      question: "Do you guarantee a job after training?",
      answer: "We guarantee you'll find your real voice and speak with confidence. With that confidence, our trainees secure jobs—but your effort in applying is key. We give you the voice power; you use it.",
    },
    {
      question: "What makes Srash Talk different?",
      answer: "We're not about 'proper English.' We're about powerful communication. Founded by Aashiq from the Voice Power series, we focus on real-world speaking: interviews, calls, meetings, presentations. Not classrooms.",
    },
  ]

  // Team
  const team = [
    {
      name: "Aashiq, Founder & Voice Coach",
      role: "Chief Voice Catalyst",
      expertise: ["Real-Talk English", "Interview Fluency", "Voice Makeovers", "Confidence Mindset"],
      experience: "Years of transforming hesitant speakers",
      quote: "Your voice is your power. Let's unlock it. Speak Real. Authentic. Strong. Honest.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/95 backdrop-blur-lg shadow-xl" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 lg:py-4">
            {/* Logo with Image */}
            <button 
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center space-x-1 group"
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img 
                  src="/sharsh.png" 
                  alt="Srash Talk Logo"
                  className="w-30 h-18 object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg lg:text-xl font-bold text-white leading-tight">Srash Talk</h1>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => document.getElementById(link.path.slice(1))?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              ))}
              <div className="w-px h-6 bg-gray-700 mx-2"></div>
              <button className="ml-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                Train with Aashiq
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg bg-gray-800/30 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-gray-900/95 backdrop-blur-xl rounded-xl border border-gray-700 shadow-2xl overflow-hidden">
              <div className="flex flex-col py-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      document.getElementById(link.path.slice(1))?.scrollIntoView({ behavior: 'smooth' })
                      setMobileMenuOpen(false)
                    }}
                    className="py-3 px-5 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors border-b border-gray-800 last:border-b-0"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="pt-2 px-5 pb-4">
                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-medium text-sm shadow-lg">
                    Train with Aashiq
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/20 z-0"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5/10_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5/10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* 4 Image Frames */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {/* Frame 1 */}
                <div className="relative rounded-xl overflow-hidden group h-32">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80"
                    alt="BPO Voice Training"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-xs font-medium text-white bg-black/40 px-2 py-1 rounded">BPO Voice Training</span>
                  </div>
                </div>
                
                {/* Frame 2 */}
                <div className="relative rounded-xl overflow-hidden group h-32">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80"
                    alt="Interview Confidence"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-xs font-medium text-white bg-black/40 px-2 py-1 rounded">Interview Confidence</span>
                  </div>
                </div>
                
                {/* Frame 3 */}
                <div className="relative rounded-xl overflow-hidden group h-32">
                  <img 
                    src="https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=400&q=80"
                    alt="Real-Talk English"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-xs font-medium text-white bg-black/40 px-2 py-1 rounded">Real-Talk English</span>
                  </div>
                </div>
                
                {/* Frame 4 */}
                <div className="relative rounded-xl overflow-hidden group h-32">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
                    alt="Voice Makeovers"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-xs font-medium text-white bg-black/50 px-2 py-1 rounded backdrop-blur-sm">Voice Makeovers</span>
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-white">Find Your</span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-300 bg-clip-text text-transparent">
                      Real Voice.
                    </span>
                  </span>
                  <span className="block text-white">Own Any Room.</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Stop sounding scripted. Start speaking real. Srash Talk is voice-first training for BPO aspirants, 
                  freshers, and professionals who want to be heard, understood, and hired. Speak Real. Authentic. Strong. Honest.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                  <span>Train with Aashiq</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="px-8 py-4 border border-gray-600 rounded-xl font-semibold text-lg hover:bg-gray-800/30 transition-colors flex items-center justify-center space-x-3">
                  <Video className="w-5 h-5" />
                  <span>Watch Voice Demo</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { number: "15K+", label: "Voices Transformed", color: "from-blue-400 to-cyan-400" },
                  { number: "94%", label: "Interview Success", color: "from-indigo-400 to-purple-400" },
                  { number: "500+", label: "Freshers Hired", color: "from-purple-400 to-pink-400" }
                ].map((stat, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/50">
                    <div className="text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image Container */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden group">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent z-10"></div>
                
                {/* Image */}
                <div className="aspect-[3.7/5] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
                    alt="Professional voice training session"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                  />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                          <Mic className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-blue-400">Live Training</div>
                          <div className="text-white font-bold">Voice Power Masterclass</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: "Participants", value: "24" },
                          { label: "Voice Hacks", value: "8" },
                          { label: "Duration", value: "2h" },
                          { label: "Rating", value: "4.9★" }
                        ].map((item, index) => (
                          <div key={index} className="p-3 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10">
                            <div className="text-sm font-bold text-white">{item.value}</div>
                            <div className="text-xs text-gray-300">{item.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Background Elements - Simplified */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/5 to-indigo-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800/30 to-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Real Voice. Real Results.</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We measure success in confidence gained, interviews cracked, and voices unleashed. No theory. Just real-talk power.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-800/20 border border-gray-700 hover:border-blue-500/30 transition-colors">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Target className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">VOICE-FIRST TRAINING</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Built for <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Real-World</span> Speaking
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built by Aashiq for the real world. Go beyond grammar. Master tone, pace, power, and presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {voicePrograms.map((program, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={[
                    "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
                  ][index]}
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/30 to-gray-900/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5"></div>
              </div>
              
              {/* Content Container */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Header with Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600/60 to-indigo-600/60 backdrop-blur-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white leading-tight [text-shadow:_0_2px_8px_rgb(0_0_0_/_0.8)]">{program.title}</h3>
                  <p className="text-gray-100 mb-6 leading-relaxed [text-shadow:_0_1px_4px_rgb(0_0_0_/_0.7)]">{program.description}</p>
                </div>

                {/* Focus Areas */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-blue-100 mb-3 flex items-center [text-shadow:_0_1px_3px_rgb(0_0_0_/_0.6)]">
                    <div className="w-2 h-2 rounded-full bg-blue-300 mr-2"></div>
                    Focus Areas
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {program.focus.map((item, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-lg text-sm text-white border border-white/40 hover:bg-black/70 transition-colors [text-shadow:_0_1px_3px_rgb(0_0_0_/_0.6)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 rounded-xl bg-black/60 backdrop-blur-sm border border-white/30 hover:border-blue-500/50 transition-colors shadow-lg">
                    <div className="text-xs text-blue-100 mb-1 [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.6)]">Duration</div>
                    <div className="font-bold text-lg text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.7)]">{program.duration}</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-black/60 backdrop-blur-sm border border-white/30 hover:border-indigo-500/50 transition-colors shadow-lg">
                    <div className="text-xs text-indigo-100 mb-1 [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.6)]">Level</div>
                    <div className="font-bold text-lg text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.7)]">{program.level}</div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mt-auto">
                  <div className="text-sm font-semibold text-blue-100 mb-3 flex items-center [text-shadow:_0_1px_3px_rgb(0_0_0_/_0.6)]">
                    <div className="w-2 h-2 rounded-full bg-green-300 mr-2"></div>
                    Key Benefits
                  </div>
                  <div className="space-y-3">
                    {program.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-green-600/50 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                          <CheckCircle className="w-3.5 h-3.5 text-green-100" />
                        </div>
                        <span className="text-sm text-gray-100 [text-shadow:_0_1px_3px_rgb(0_0_0_/_0.6)]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-6 border-t border-white/30">
                  <button className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-medium text-white hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group shadow-lg">
                    <span className="flex items-center justify-center space-x-2">
                      <span>Start Training</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
              
              {/* Top Corner Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-xs font-bold text-white shadow-xl [text-shadow:_0_1px_3px_rgb(0_0_0_/_0.6)]">
                  {index === 0 ? "Most Popular" : "New"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">THE SRASH TALK WAY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              From <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Self-Doubt</span> to Speaking Power
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Forget old-school elocution. We train you for real conversations, real interviews, real life.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methodologies.map((method, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-gray-700 h-full hover:border-blue-500/40 transition-colors">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold">{method.step}</span>
                      </div>
                    </div>
                    
                    <div className="pt-8">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center mb-6">
                        <method.icon className="w-7 h-7 text-blue-400" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                      <p className="text-gray-300 mb-4">{method.description}</p>
                      <p className="text-sm text-gray-400">{method.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="stories" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Award className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            From <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Self-Doubt</span> to Speaking Power
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from BPO aspirants who got hired, freshers who aced interviews, and professionals who found their voice.
          </p>
        </div>

        {/* Success Stories with Images */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {successStories.map((story, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={[
                    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
                  ][index]}
                  alt={story.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/30 to-gray-900/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl mb-4 shadow-lg">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 [text-shadow:_0_2px_6px_rgb(0_0_0_/_0.8)]">{story.name}</h3>
                  <p className="text-gray-100 mb-6 leading-relaxed [text-shadow:_0_1px_4px_rgb(0_0_0_/_0.7)]">{story.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-blue-100 [text-shadow:_0_1px_3px_rgb(0_0_0_/_0.6)]">Key Metrics</div>
                  <div className="space-y-3">
                    {story.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center space-x-3 p-3 rounded-lg bg-black/50 backdrop-blur-sm border border-white/20 hover:border-green-500/30 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-green-600/40 flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-green-100" />
                        </div>
                        <span className="text-sm text-white [text-shadow:_0_1px_3px_rgb(0_0_0_/_0.6)]">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/30">
                  <div className="text-sm text-gray-200 [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.5)]">Industry</div>
                  <div className="text-lg font-semibold text-white mt-1 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.7)]">{story.industry}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Quote className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">TRAINEE TESTIMONIALS</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">
              What Our <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Trainees Say</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 ${
                  activeTestimonial === index
                    ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20 scale-105'
                    : 'border-gray-700'
                }`}
              >
                {/* Testimonial Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={[
                      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
                    ][index]}
                    alt={testimonial.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/60"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600/40 to-indigo-600/40 backdrop-blur-md flex items-center justify-center mb-4">
                      <Quote className="w-6 h-6 text-blue-100" />
                    </div>
                    
                    <p className="text-lg italic text-gray-100 mb-8 leading-relaxed [text-shadow:_0_1px_4px_rgb(0_0_0_/_0.7)]">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  {/* Client Info */}
                  <div className="mt-auto">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg [text-shadow:_0_1px_3px_rgb(0_0_0_/_0.6)]">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-white [text-shadow:_0_1px_3px_rgb(0_0_0_/_0.6)]">{testimonial.name}</div>
                        <div className="text-sm text-gray-200 [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.5)]">{testimonial.role}</div>
                      </div>
                    </div>
                    
                    {/* Before & After */}
                    <div className="mb-6 p-4 rounded-lg bg-black/50 backdrop-blur-sm border border-white/20">
                      <div className="text-xs text-gray-300 mb-1 [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.5)]">Transformation</div>
                      <div className="text-sm font-semibold text-white [text-shadow:_0_1px_3px_rgb(0_0_0_/_0.6)]">{testimonial.beforeAfter}</div>
                    </div>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {testimonial.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-lg text-xs text-white border border-white/30 hover:bg-black/70 transition-colors [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.6)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Active State Indicator */}
                {activeTestimonial === index && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-ping"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`relative rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? 'w-10 h-3 bg-gradient-to-r from-blue-500 to-indigo-500'
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                }`}
              >
                {activeTestimonial === index && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">FREE VOICE HACKS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Get Your Free <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Voice Starter Kit</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Instant access to our most powerful voice hacks, interview templates, and practice exercises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {resources.slice(0, 6).map((resource, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center">
                    <resource.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <div className="text-xs px-3 py-1.5 bg-gray-800 rounded-full">
                    {resource.format}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                <p className="text-gray-300 mb-6">{resource.description}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                  <div className="text-sm text-gray-400">{resource.frequency}</div>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center">
                    Access Now <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Resource Hub CTA */}
          <div className="bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20 text-center">
            <h3 className="text-2xl font-bold mb-4">Start Transforming Your Voice Today</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get instant access to hundreds of learning materials, voice hacks, and real-world practice tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/20 transition-all">
                Download Free Kit
              </button>
              <button className="px-8 py-4 border border-gray-600 rounded-xl font-semibold hover:bg-gray-800/50 transition-colors flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Book Free Voice Audit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Straight Talk: Your <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Questions</span> Answered
          </h2>
          <p className="text-xl text-gray-300">
            Get answers to common questions about our voice training programs.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700 overflow-hidden"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-800/20 transition-colors"
                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
              >
                <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    activeFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeFAQ === index ? 'pb-6 max-h-96' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">FOUNDED BY AASHIQ</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Built for <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">You</span>, by Aashiq
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Srash Talk was born from the Voice Power series—a mission to move people from mumbled words to powerful speech. Aashiq trains you himself.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group relative rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 md:col-span-3"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80"
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/80 to-gray-900/90"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10"></div>
                </div>
                
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Profile Image */}
                  <div className="relative mx-auto mb-8">
                    <div className="w-28 h-28 rounded-full border-4 border-white/20 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80"
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                  </div>
                  
                  {/* Name & Role */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <div className="text-blue-300 font-semibold mb-3">{member.role}</div>
                    
                    {/* Quote */}
                    <div className="relative mb-6">
                      <Quote className="w-6 h-6 text-blue-400/50 mx-auto mb-3" />
                      <p className="text-gray-200 italic text-sm leading-relaxed">"{member.quote}"</p>
                    </div>
                  </div>
                  
                  {/* Expertise */}
                  <div className="mt-auto">
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-blue-300 mb-3 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                        Areas of Expertise
                      </div>
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.expertise.map((skill, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-xs text-white border border-white/20 hover:bg-white/20 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Contact Button */}
                    <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 backdrop-blur-sm rounded-xl font-medium text-white hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 group">
                      <span className="flex items-center justify-center space-x-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>Train with Aashiq</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>
                </div>
                
                {/* Corner Decoration */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-tr-2xl rounded-bl-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border-t border-r border-white/10"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-tl-2xl rounded-br-2xl bg-gradient-to-tl from-indigo-500/20 to-purple-500/20 border-b border-l border-white/10"></div>
              </div>
            ))}
          </div>
          
          {/* Team Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Years Combined Experience", icon: Award },
              { value: "1000+", label: "Trainees Transformed", icon: Users },
              { value: "4.9★", label: "Average Rating", icon: Star },
              { value: "95%", label: "Confidence Breakthrough", icon: TrendingUp }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Start Your Voice Transformation</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Ready to find your real voice? Talk to us. We'll help you build a plan that works for your goals—BPO, interviews, or professional power.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="font-semibold">train@shrashtalk.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="font-semibold">+91 98XXX XXXXX</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Based in</div>
                    <div className="font-semibold">Mumbai, training aspirants across India & Middle East</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <div className="text-lg font-semibold mb-4">Follow Srash Talk</div>
                <div className="flex space-x-4">
                  {[Instagram, Linkedin, Youtube].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                      <Icon className="w-6 h-6 text-gray-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Book Your Free Voice Consultation</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors h-32"
                    placeholder="Tell us about your speaking goals and challenges..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Book Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 bg-gray-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold text-white">Srash Talk</h1>
                  <p className="text-xs text-gray-400 leading-tight">Voice & Communication Mastery</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Empowering BPO aspirants, freshers, and professionals to speak with confidence, clarity, and power in the real world. Speak Real. Authentic. Strong. Honest.
              </p>
            </div>
            
            {/* Programs Column */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Programs</h3>
              <ul className="space-y-2.5">
                {["BPO Voice Training", "Interview Fluency", "Executive Voice", "Confidence Coaching"].map((program) => (
                  <li key={program}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform">
                      {program}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick Links Column */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-2.5">
                {["Free Resources", "Success Stories", "Train with Aashiq", "Live Demos", "Blog"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support Column */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Support</h3>
              <ul className="space-y-2.5">
                {["Free Voice Audit", "FAQ", "Contact", "Privacy Policy"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2024 Srash Talk. Speak Real. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <div className="w-1 h-1 rounded-full bg-gray-600"></div>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <div className="w-1 h-1 rounded-full bg-gray-600"></div>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <button
            onClick={() => setShowChat(!showChat)}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          >
            <MessageCircle className="w-7 h-7 text-white" />
          </button>
          
          {showChat && (
            <div className="absolute right-0 bottom-full mb-4 w-80 bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold">Voice Coach</div>
                  <div className="text-sm text-gray-400">Online • Ready to help</div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <button className="w-full text-left p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                  <div className="font-semibold mb-1">Free Voice Audit</div>
                  <div className="text-sm text-gray-400">15-min personalized assessment</div>
                </button>
                <button className="w-full text-left p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                  <div className="font-semibold mb-1">Program Recommendations</div>
                  <div className="text-sm text-gray-400">Find your perfect training path</div>
                </button>
                <button className="w-full text-left p-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-opacity">
                  <div className="font-semibold mb-1">Talk to a Coach Now</div>
                  <div className="text-sm">Get personalized guidance</div>
                </button>
              </div>
              
              <div className="text-xs text-gray-500 text-center">
                Typically replies in under 5 minutes
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}