'use client';

import { 
  ArrowLeft, 
  Award, 
  Briefcase, 
  CheckCircle, 
  Globe, 
  GraduationCap, 
  Heart, 
  Instagram, 
  Mail, 
  MapPin, 
  Quote, 
  Target, 
  Users, 
  Youtube,
  Building,
  Star,
  TrendingUp,
  Shield,
  Phone,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const achievements = [
    { icon: Users, value: '15K+', label: 'Individuals Trained' },
    { icon: Building, value: '250+', label: 'Corporate Clients' },
    { icon: Award, value: '500+', label: 'Freshers Placed' },
    { icon: Star, value: '4.9★', label: 'Client Rating' },
  ];

  const coreValues = [
    {
      title: 'Authenticity',
      description: 'Real, honest communication over scripted perfection',
      icon: Heart,
      color: 'text-red-400'
    },
    {
      title: 'Impact',
      description: 'Measuring success by lives changed, not views gained',
      icon: Target,
      color: 'text-blue-400'
    },
    {
      title: 'Growth',
      description: 'Always learning and evolving together',
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {
      title: 'Community',
      description: 'Building supportive networks for growth',
      icon: Users,
      color: 'text-purple-400'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Simple Navigation */}
      <header className="sticky top-0 z-40 bg-gray-900 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link 
                href="/"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/showcase"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Videos
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-400">Srash Talk</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Empowering individuals and organizations through authentic voice and communication training
          </p>
        </div>

        {/* Founder Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="rounded-xl overflow-hidden border border-gray-700">
                <img 
                  src="/thumbnail.png"
                  alt="Aashiq - Founder of Srash Talk"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="mb-4">
                <span className="text-sm text-blue-400 font-semibold uppercase tracking-wider">THE FOUNDER</span>
                <h2 className="text-2xl font-bold mt-2">Aashiq</h2>
                <p className="text-gray-300 mt-3">
                  From corporate trainer to India's trusted voice coach, Aashiq's mission is to make authentic communication accessible to everyone.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mt-6">
                <Quote className="w-6 h-6 text-blue-400 mb-3" />
                <p className="text-gray-300 italic">
                  "Your voice isn't just sound - it's your identity. Speak like yourself, just better."
                </p>
                <div className="mt-4 text-sm text-gray-400">— Aashiq, Founder</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">{achievement.value}</div>
                <div className="text-sm text-gray-300">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreValues.map((value, index) => (
              <div key={index} className="p-5 rounded-lg bg-gray-800/50 border border-gray-700">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${value.color}`}>
                  <value.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Facts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Quick Facts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Started In</h4>
                  <p className="text-gray-400 text-sm">2016 as a corporate trainer</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Reach</h4>
                  <p className="text-gray-400 text-sm">Trained individuals across 25+ countries</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <GraduationCap className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Focus Areas</h4>
                  <p className="text-gray-400 text-sm">Voice training, communication skills, accent neutralization</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Client Retention</h4>
                  <p className="text-gray-400 text-sm">95% year-over-year retention rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
            <p className="text-gray-300">Follow for daily communication tips and insights</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://instagram.com/srashtalk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            
            <a 
              href="https://youtube.com/@SrashTalkOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
            >
              <Youtube className="w-5 h-5" />
              <span>YouTube</span>
            </a>
            
            <div className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
              <Mail className="w-5 h-5" />
              <span>contact@srashtalk.com</span>
            </div>
          </div>
        </div>

        {/* Website Purpose */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">About This Website</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            This portfolio serves as a central hub for all Srash Talk content, showcasing our work, 
            connecting with our audience, and providing valuable communication resources.
          </p>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-gray-800 mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Srash Talk. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/showcase" className="text-sm text-gray-400 hover:text-white transition-colors">
                Videos
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}