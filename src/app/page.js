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
  DollarSign,
  ShoppingBag,
  Package,
  Globe as GlobeIcon,
  Building,
  Coffee,
  Award as AwardIcon,
  ThumbsUp,
  TrendingUp as TrendingUpIcon,
  Eye,
  ThumbsUp as LikeIcon,
  MessageSquare,
  Share2,
  ExternalLink as LinkIcon,
} from "lucide-react"

export default function SrashTalkBusinessPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeVideo, setActiveVideo] = useState(0)
  const [showChat, setShowChat] = useState(false)
  const [activePlatform, setActivePlatform] = useState("all") // "all", "instagram", "youtube"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Video Portfolio with social media links
  const portfolioVideos = [
    {
      id: 1,
      title: "Business Pitch Masterclass",
      description: "How Srash Talk transformed corporate communication for Fortune 500 companies",
      duration: "12:45",
      category: "Corporate Training",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      views: "15.2K",
      likes: "2.4K",
      comments: "128",
      date: "Mar 15, 2024",
      featured: true,
      platform: "youtube",
      youtubeUrl: "https://youtube.com/watch?v=example1",
      instagramUrl: "https://instagram.com/p/example1",
      socialStats: {
        instagramLikes: "1.2K",
        instagramComments: "86",
        youtubeViews: "15.2K",
        youtubeLikes: "1.2K"
      }
    },
    {
      id: 2,
      title: "Voice Transformation Case Study",
      description: "Real client journey from hesitant speaker to confident presenter",
      duration: "08:32",
      category: "Success Stories",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      views: "28.7K",
      likes: "3.8K",
      comments: "214",
      date: "Feb 28, 2024",
      trending: true,
      platform: "instagram",
      youtubeUrl: "https://youtube.com/watch?v=example2",
      instagramUrl: "https://instagram.com/reel/example2",
      socialStats: {
        instagramLikes: "3.8K",
        instagramComments: "214",
        youtubeViews: "28.7K",
        youtubeLikes: "2.1K"
      }
    },
    {
      id: 3,
      title: "Executive Voice Workshop",
      description: "Exclusive training session for senior leadership teams",
      duration: "25:18",
      category: "Executive Training",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      views: "9.4K",
      likes: "1.5K",
      comments: "89",
      date: "Apr 2, 2024",
      platform: "youtube",
      youtubeUrl: "https://youtube.com/watch?v=example3",
      instagramUrl: "https://instagram.com/p/example3",
      socialStats: {
        instagramLikes: "890",
        instagramComments: "45",
        youtubeViews: "9.4K",
        youtubeLikes: "1.5K"
      }
    },
    {
      id: 4,
      title: "BPO Training Demo",
      description: "Live session with BPO aspirants - accent neutralization techniques",
      duration: "18:21",
      category: "Training Demos",
      thumbnail: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800&q=80",
      views: "42.3K",
      likes: "5.2K",
      comments: "312",
      date: "Jan 20, 2024",
      new: true,
      platform: "instagram",
      youtubeUrl: "https://youtube.com/watch?v=example4",
      instagramUrl: "https://instagram.com/reel/example4",
      socialStats: {
        instagramLikes: "5.2K",
        instagramComments: "312",
        youtubeViews: "42.3K",
        youtubeLikes: "3.8K"
      }
    },
    {
      id: 5,
      title: "Interview Success Series",
      description: "Complete guide to cracking any job interview",
      duration: "32:15",
      category: "Career Training",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      views: "56.8K",
      likes: "6.3K",
      comments: "428",
      date: "Dec 10, 2023",
      platform: "youtube",
      youtubeUrl: "https://youtube.com/watch?v=example5",
      instagramUrl: "https://instagram.com/p/example5",
      socialStats: {
        instagramLikes: "2.1K",
        instagramComments: "156",
        youtubeViews: "56.8K",
        youtubeLikes: "6.3K"
      }
    },
    {
      id: 6,
      title: "Live Q&A with Aashiq",
      description: "Direct answers to common voice training questions",
      duration: "45:22",
      category: "Live Sessions",
      thumbnail: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800&q=80",
      views: "33.4K",
      likes: "4.1K",
      comments: "289",
      date: "Nov 5, 2023",
      live: true,
      platform: "youtube",
      youtubeUrl: "https://youtube.com/watch?v=example6",
      instagramUrl: "https://instagram.com/p/example6",
      socialStats: {
        instagramLikes: "1.8K",
        instagramComments: "124",
        youtubeViews: "33.4K",
        youtubeLikes: "4.1K"
      }
    },
    {
      id: 7,
      title: "Accent Neutralization Workshop",
      description: "Techniques for clear and neutral pronunciation",
      duration: "22:10",
      category: "Training Demos",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      views: "47.9K",
      likes: "5.8K",
      comments: "342",
      date: "Oct 18, 2023",
      platform: "instagram",
      youtubeUrl: "https://youtube.com/watch?v=example7",
      instagramUrl: "https://instagram.com/reel/example7",
      socialStats: {
        instagramLikes: "5.8K",
        instagramComments: "342",
        youtubeViews: "47.9K",
        youtubeLikes: "4.3K"
      }
    },
    {
      id: 8,
      title: "Leadership Communication",
      description: "Voice techniques for executives and team leaders",
      duration: "28:45",
      category: "Executive Training",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      views: "18.3K",
      likes: "2.7K",
      comments: "165",
      date: "Sep 22, 2023",
      platform: "youtube",
      youtubeUrl: "https://youtube.com/watch?v=example8",
      instagramUrl: "https://instagram.com/p/example8",
      socialStats: {
        instagramLikes: "1.3K",
        instagramComments: "98",
        youtubeViews: "18.3K",
        youtubeLikes: "2.7K"
      }
    },
  ]

    const revenueStreams = [
      {
        name: "Corporate Training",
        percentage: "45%",
        description: "B2B training programs for companies",
        growth: "+32% YoY",
        icon: Building,
        clients: ["TechCorp", "Global BPO", "FinTech Leaders"]
      },
      {
        name: "Individual Coaching",
        percentage: "30%",
        description: "One-on-one voice transformation",
        growth: "+25% YoY",
        icon: UserPlus,
        highlight: "Premium service"
      },
      {
        name: "Online Courses",
        percentage: "15%",
        description: "Self-paced digital programs",
        growth: "+120% YoY",
        icon: GlobeIcon,
        popular: "BPO Voice Power"
      },
      {
        name: "Workshops & Events",
        percentage: "10%",
        description: "Live workshops and masterclasses",
        growth: "+18% YoY",
        icon: Users,
        upcoming: "Quarterly"
      },
    ]

    const clientPortfolio = [
    {
      name: "TechCorp Solutions",
      logo: "TC",
      industry: "IT Services",
      services: ["Executive Voice Training", "Sales Team Coaching", "Client Presentation"],
      duration: "2 years",
      testimonial: "Srash Talk transformed our client-facing teams' communication.",
      results: ["45% improved client satisfaction", "30% shorter sales cycles", "25% more successful pitches"]
    },
    {
      name: "Global BPO Inc.",
      logo: "GB",
      industry: "BPO Services",
      services: ["Accent Neutralization", "Customer Service Voice", "Quality Assurance"],
      duration: "3 years",
      testimonial: "Our CSAT scores improved by 40% post-training.",
      results: ["40% higher CSAT", "60% reduced accent bias complaints", "35% faster call resolution"]
    },
    {
      name: "FinTech Leaders",
      logo: "FT",
      industry: "Financial Technology",
      services: ["Investor Pitch Training", "Team Communication", "Leadership Voice"],
      duration: "1.5 years",
      testimonial: "Best investment in our team's professional development.",
      results: ["Secured ₹50Cr funding", "Improved team communication", "Enhanced leadership presence"]
    },
  ]


  // Filtered videos based on platform
  const filteredVideos = portfolioVideos.filter(video => 
    activePlatform === "all" || video.platform === activePlatform
  )

  // Video Categories
  const videoCategories = [
    {
      name: "Corporate Training",
      count: "48 videos",
      icon: Building,
      description: "Professional development for businesses"
    },
    {
      name: "Success Stories",
      count: "32 videos",
      icon: Award,
      description: "Real client transformations"
    },
    {
      name: "Live Workshops",
      count: "24 videos",
      icon: Users,
      description: "Interactive training sessions"
    },
    {
      name: "Training Demos",
      count: "36 videos",
      icon: PlayCircle,
      description: "Practical technique demonstrations"
    },
    {
      name: "Executive Training",
      count: "28 videos",
      icon: Briefcase,
      description: "Leadership communication skills"
    },
    {
      name: "Career Development",
      count: "42 videos",
      icon: GraduationCap,
      description: "Job interview and career growth"
    }
  ]

  // Business Statistics
  const businessStats = [
    { value: "₹2.5Cr+", label: "Annual Revenue", icon: TrendingUpIcon, description: "Year-over-year growth" },
    { value: "250+", label: "Corporate Clients", icon: Building, description: "Including Fortune 500 companies" },
    { value: "15K+", label: "Individuals Trained", icon: Users, description: "Across 25+ countries" },
    { value: "4.9★", label: "Client Satisfaction", icon: Star, description: "Based on 2000+ reviews" },
    { value: "95%", label: "Retention Rate", icon: Shield, description: "Client retention year-over-year" },
    { value: "₹50L+", label: "BPO Placements", icon: Briefcase, description: "Value generated for freshers" },
  ]

  // Navigation
  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "Video Library", path: "#videos" },
    { name: "Social Media", path: "#social" },
    { name: "Platforms", path: "#platforms" },
    { name: "Contact", path: "#contact" },
  ]

  // Video Playlists
  const videoPlaylists = [
    {
      title: "Complete BPO Training Series",
      videos: 12,
      duration: "4h 32m",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      progress: 75
    },
    {
      title: "Interview Success Mastery",
      videos: 8,
      duration: "3h 15m",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      progress: 40
    },
    {
      title: "Leadership Voice & Presence",
      videos: 10,
      duration: "5h 10m",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      progress: 20
    },
  ]

  // Social Media Platforms
  const socialPlatforms = [
    {
      name: "Instagram",
      icon: Instagram,
      color: "from-purple-600 to-pink-600",
      stats: "25K+ Followers",
      posts: "450+ Reels",
      handle: "@srashtalk",
      url: "https://instagram.com/srashtalk",
      description: "Daily motivation & training shorts"
    },
    {
      name: "YouTube",
      icon: Youtube,
      color: "from-red-600 to-red-500",
      stats: "50K+ Subscribers",
      posts: "200+ Videos",
      handle: "@SrashTalkOfficial",
      url: "https://youtube.com/@SrashTalkOfficial",
      description: "Full training sessions & success stories"
    }
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
            {/* Logo */}
            <button 
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center space-x-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                <Mic className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col text-left">
                <h1 className="text-lg lg:text-xl font-bold text-white leading-tight">Srash Talk</h1>
                <p className="text-xs text-gray-400 leading-tight">Voice & Communication Influencer</p>
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
                Follow on Social
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
                    Follow on Social
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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





      {/* Social Media Platforms Section */}
      <section id="social" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Follow Me on <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Social Media</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Daily motivation, training tips, and success stories on these platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {socialPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${platform.color} flex items-center justify-center`}>
                        <platform.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{platform.name}</h3>
                        <p className="text-gray-400">{platform.handle}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  
                  <p className="text-gray-300 mb-6">{platform.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-gray-800/30">
                      <div className="text-2xl font-bold mb-1">{platform.stats.split('+')[0]}+</div>
                      <div className="text-sm text-gray-400">Followers</div>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-800/30">
                      <div className="text-2xl font-bold mb-1">{platform.posts.split('+')[0]}+</div>
                      <div className="text-sm text-gray-400">Videos</div>
                    </div>
                  </div>
                  
                  <button className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:opacity-90 transition-opacity">
                    Follow on {platform.name}
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

                  {/* Video Grid Section */}
      <section id="videos" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Platform Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActivePlatform("all")}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                activePlatform === "all" 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-500 text-white' 
                  : 'border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-400'
              }`}
            >
              All Platforms
            </button>
            <button
              onClick={() => setActivePlatform("instagram")}
              className={`px-6 py-3 rounded-full border transition-all duration-300 flex items-center space-x-2 ${
                activePlatform === "instagram" 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-purple-500 text-white' 
                  : 'border-gray-700 text-gray-400 hover:border-purple-500 hover:text-purple-400'
              }`}
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram Reels</span>
            </button>
            <button
              onClick={() => setActivePlatform("youtube")}
              className={`px-6 py-3 rounded-full border transition-all duration-300 flex items-center space-x-2 ${
                activePlatform === "youtube" 
                  ? 'bg-gradient-to-r from-red-600 to-red-500 border-red-500 text-white' 
                  : 'border-gray-700 text-gray-400 hover:border-red-500 hover:text-red-400'
              }`}
            >
              <Youtube className="w-4 h-4" />
              <span>YouTube Videos</span>
            </button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVideos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => handleVideoClick(portfolioVideos.findIndex(v => v.id === video.id))}
              className={`group relative rounded-xl overflow-hidden border transition-all duration-300 ${
                activeVideo === portfolioVideos.findIndex(v => v.id === video.id)
                  ? 'border-blue-500 shadow-xl shadow-blue-500/20 scale-105'
                  : 'border-gray-700 hover:border-blue-500/50'
              }`}
            >
              {/* Thumbnail */}
              <div className="aspect-video relative">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Platform Badge */}
                <div className={`absolute top-4 left-4 px-2 py-1 rounded-md text-xs font-medium ${
                  video.platform === 'instagram' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                    : 'bg-gradient-to-r from-red-600 to-red-500'
                }`}>
                  {video.platform === 'instagram' ? 'Instagram' : 'YouTube'}
                </div>

                {/* Duration */}
                <div className="absolute top-4 right-4 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-xs">
                  {video.duration}
                </div>

                {/* Stats */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <LikeIcon className="w-3 h-3" />
                        <span className="text-xs">{video.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="w-3 h-3" />
                        <span className="text-xs">{video.comments}</span>
                      </div>
                    </div>
                    <Eye className="w-3 h-3" />
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4 bg-gradient-to-b from-gray-800/80 to-gray-900/80">
                <h3 className="font-bold mb-2 text-left">{video.title}</h3>
                <p className="text-sm text-gray-300 mb-3 text-left line-clamp-2">{video.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3 h-3" />
                    <span>{video.date}</span>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      openInPlatform(video)
                    }}
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1"
                  >
                    <span>Watch Now</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

            <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Building className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">CLIENT PORTFOLIO</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Trusted by <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transformative partnerships with top companies across sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientPortfolio.map((client, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                {/* Client Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                      {client.logo}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{client.name}</div>
                      <div className="text-sm text-gray-400">{client.industry}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Partnership</div>
                    <div className="text-sm font-bold">{client.duration}</div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mb-6 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                  <Quote className="w-5 h-5 text-blue-400/50 mb-2" />
                  <p className="text-sm italic text-gray-300">"{client.testimonial}"</p>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-400 mb-3">Services Provided</div>
                  <div className="flex flex-wrap gap-2">
                    {client.services.map((service, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-800 rounded-lg text-xs border border-gray-700">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <div className="text-sm font-semibold text-gray-400 mb-3">Measurable Results</div>
                  <div className="space-y-2">
                    {client.results.map((result, i) => (
                      <div key={i} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Case Study Button */}
                <button className="w-full mt-8 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-sm font-medium flex items-center justify-center space-x-2 group">
                  <FileText className="w-4 h-4" />
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section id="revenue" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <DollarSign className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">REVENUE MODEL</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Diversified <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Revenue Streams</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Multiple income sources driving sustainable growth and scalability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {revenueStreams.map((stream, index) => (
            <div key={index} className="relative group">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700 h-full hover:border-blue-500/50 transition-all duration-300">
                {/* Revenue Percentage */}
                <div className="absolute -top-4 -right-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-lg">{stream.percentage}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center mb-6">
                  <stream.icon className="w-7 h-7 text-blue-400" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold mb-3">{stream.name}</h3>
                  <p className="text-gray-300 mb-4">{stream.description}</p>
                  
                  {/* Growth */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-medium text-green-400">{stream.growth}</span>
                    </div>
                  </div>

                  {/* Highlight */}
                  {stream.clients && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="text-sm text-gray-400 mb-2">Sample Clients</div>
                      <div className="flex flex-wrap gap-2">
                        {stream.clients.map((client, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-800 rounded-md text-xs">
                            {client}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {stream.highlight && (
                    <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs">
                      {stream.highlight}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Revenue Breakdown Visualization */}
        <div className="mt-20 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Chart */}
            <div className="lg:w-2/3">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Revenue Breakdown 2024</h3>
                <p className="text-gray-400">Annual revenue distribution across streams</p>
              </div>
              
              <div className="h-64 flex items-end space-x-4 justify-center">
                {revenueStreams.map((stream, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="w-16 rounded-t-lg bg-gradient-to-t from-blue-600 to-blue-400 relative group"
                      style={{ height: `${parseInt(stream.percentage) * 2}px` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-black px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                          {stream.percentage} - {stream.name}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-400">{stream.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="lg:w-1/3 space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">₹2.5Cr+</div>
                <div className="text-sm text-gray-400">Annual Revenue</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">YoY Growth</div>
                  <div className="text-green-400 font-bold">+32%</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">Profit Margin</div>
                  <div className="text-green-400 font-bold">68%</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">LTV/CAC Ratio</div>
                  <div className="text-green-400 font-bold">4.2x</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Connect With Me</h2>
              <p className="text-gray-300 mb-8 text-lg">
                For collaborations, speaking engagements, or personalized training sessions
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Instagram</div>
                    <div className="font-semibold">@srashtalk</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center">
                    <Youtube className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">YouTube</div>
                    <div className="font-semibold">@SrashTalkOfficial</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="font-semibold">contact@srashtalk.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              
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
                  <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors">
                    <option value="">Select subject</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="training">Personal Training</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors h-32"
                    placeholder="Your message..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Message
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
                  <p className="text-xs text-gray-400 leading-tight">Voice & Communication Influencer</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Daily motivation & voice training through social media content
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">CONTENT</h3>
              <ul className="space-y-2.5">
                {["Instagram Reels", "YouTube Videos", "Success Stories", "Training Tips", "Live Sessions"].map((item) => (
                  <li key={item}>
                    <a href="#videos" className="text-sm text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">FOLLOW</h3>
              <div className="space-y-3">
                {socialPlatforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <platform.icon className="w-4 h-4" />
                    <span>{platform.handle}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">CONTACT</h3>
              <ul className="space-y-2.5">
                <li className="text-sm text-gray-400">contact@srashtalk.com</li>
                <li className="text-sm text-gray-400">Mumbai, India</li>
              </ul>
            </div>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2024 Srash Talk. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4">
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <platform.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Actions */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Instagram Quick Access */}
        <a
          href="https://instagram.com/srashtalk"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
        >
          <Instagram className="w-7 h-7 text-white" />
          <div className="absolute -top-12 right-0 bg-gray-800 px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            View Instagram
          </div>
        </a>
        
        {/* YouTube Quick Access */}
        <a
          href="https://youtube.com/@SrashTalkOfficial"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
        >
          <Youtube className="w-7 h-7 text-white" />
          <div className="absolute -top-12 right-0 bg-gray-800 px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            View YouTube
          </div>
        </a>
      </div>
    </div>
  )
}
