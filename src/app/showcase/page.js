'use client';

import React, { useState, useMemo } from 'react';
import { 
  Instagram, 
  Youtube, 
  Play, 
  Calendar, 
  ExternalLink,
  Home,
  ChevronLeft,
  X,
  Search,
  Grid,
  List,
  Clock,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import { InstagramEmbed } from '../components/instagram';

// Updated video data with unique content
const videoData = [
  {
    id: 'insta_1',
    title: 'CH or J — Pronunciation Guide',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/DTICGJLkhdb/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==',
    thumbnail: '/ins2.png',
    duration: '0:58',
    date: 'Jan 5, 2026',
    tags: ['pronunciation', 'training', 'beginner']
  },
  {
    id: 'insta_2',
    title: 'Disagreeing with your boss? Here’s how to do it without losing your job',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/DNk412sSQD_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    thumbnail: '/ins12.png',
    duration: '0:58',
    date: 'Aug 20, 2025',
    tags: ['inspiration', 'motivation', 'growth']
  },
  {
    id: 'insta_3',
    title: 'Public Speaking: Stage Presence Tips',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/DS2cdoYEkSL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    thumbnail: '/ins3.png',
    duration: '1:15',
    date: 'Dec 29, 2025',
    tags: ['public speaking', 'techniques', 'stage']
  },
  {
    id: 'insta_4',
    title: 'We don’t fight because we’re angry',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/DScoY6ekmbc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    thumbnail: '/ins8.png',
    duration: '1:30',
    date: 'Dec 19, 2025',
    tags: ['breathing', 'voice control', 'technique']
  },
  {
    id: 'insta_5',
    title: 'this 5-second drill will FIX IT 🔥👅',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/DRzWNWhEsFz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    thumbnail: '/ins9.png',
    duration: '0:45',
    date: 'Dec 10, 2025',
    tags: ['pronunciation', 'drill', 'articulation']
  },
  {
    id: 'insta_6',
    title: 'Kerala didnt motivate me',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/DRep83NEl-5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    thumbnail: '/ker.png',
    duration: '1:10',
    date: 'Dec 2, 2026',
    tags: ['storytelling', 'engagement', 'techniques']
  },
  {
    id: 'insta_7',
    title: 'Natural Speech Patterns',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/DSsFMtukvR5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    thumbnail: '/ins6.png',
    duration: '2:00',
    date: 'Dec 25, 2025',
    tags: ['speech', 'patterns', 'natural']
  },
  {
    id: 'insta_8',
    title: 'Some friendships fade when effort isn’t mutual',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/DSnH_Tpki6N/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    thumbnail: '/ins7.png',
    duration: '1:45',
    date: 'Nov 25, 2025',
    tags: ['accent', 'pronunciation', 'basics']
  },
  {
    id: 'insta_9',
    title: 'Some people don’t leave loudly',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/DSXmEZdEgI1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    thumbnail: '/ins5.png',
    duration: '1:20',
    date: 'Dec 17, 2025',
    tags: ['communication', 'skills', 'development']
  },
  {
    id: 'insta_10',
    title: 'We literally worked 24/7 for this client!',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/DQEs0jBksNi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    thumbnail: '/ins11.png',
    duration: '1:35',
    date: 'Nov 25, 2025',
    tags: ['anxiety', 'overcoming', 'confidence']
  },
];

// YouTube videos - Fixed URLs and better titles
const youtubeVideos = [
  {
    id: 'yt_1',
    title: 'Why Indians Mispronounce These Sounds',
    platform: 'youtube',
    url: 'https://www.youtube.com/watch?v=gMJ98f5hXJY',
    thumbnail: '/yt1.png',
    duration: '6:55',
    date: 'Jan 10, 2026',
    tags: ['pronunciation', 'indian accent', 'sounds']
  },
  {
    id: 'yt_2',
    title: 'Speak Clear English in 7 Minutes',
    platform: 'youtube',
    url: 'https://www.youtube.com/watch?v=-r3gIEazSNs',
    thumbnail: 'yt2.png',
    duration: '6:47',
    date: 'Jan 5, 2026',
    tags: ['english', 'clarity', 'speaking']
  },
  {
    id: 'yt_3',
    title: 'Figures of Speech Explained',
    platform: 'youtube',
    url: 'https://youtu.be/kmbHf0MCiOI?si=CT0_LQbIIzbeAajp',
    thumbnail: '/yt3.png',
    duration: '25:20',
    date: 'Dec 28, 2025',
    tags: ['figures of speech', 'language', 'explained']
  },
  {
    id: 'yt_4',
    title: 'Corporate Figures of Speech',
    platform: 'youtube',
    url: 'https://www.youtube.com/watch?v=TKMtqxsDs-0',
    thumbnail: '/yt4.png',
    duration: '15:30',
    date: 'Dec 28, 2025',
    tags: ['corporate', 'communication', 'business']
  },
  {
    id: 'yt_5',
    title: '5 Corporate Frameworks You MUST Know',
    platform: 'youtube',
    url: 'https://www.youtube.com/watch?v=mnopqr67890',
    thumbnail: '/yt5.png',
    duration: '45:15',
    date: 'Dec 20, 2025',
    tags: ['public speaking', 'masterclass', 'skills']
  },
  {
    id: 'yt_6',
    title: 'If your last performance review felt like emotional gaslighting',
    platform: 'youtube',
    url: 'https://youtu.be/scC6NY_y6r8?si=fOuv7lhB2E_a4Z81',
    thumbnail: '/yt6.png',
    duration: '22:40',
    date: 'Dec 15, 2025',
    tags: ['voice', 'modulation', 'techniques']
  },
  {
    id: 'yt_7',
    title: 'Interview Red Flags HRs Still Say in 2025',
    platform: 'youtube',
    url: 'https://youtu.be/gKd-DVnwX40?si=qRb8oYCingQCflaZ',
    thumbnail: '/yt7.png',
    duration: '18:25',
    date: 'Dec 10, 2025',
    tags: ['accent', 'neutralization', 'guide']
  },
  {
    id: 'yt_8',
    title: 'Why HR Ghosts You After Interviews',
    platform: 'youtube',
    url: 'https://youtu.be/xEldjKUAFNE?si=mOoXWi4ARcEDQU5Z',
    thumbnail: '/yt8.png',
    duration: '30:10',
    date: 'Dec 5, 2025',
    tags: ['speech writing', 'fundamentals', 'structure']
  },
  {
    id: 'yt_9',
    title: 'Top 5 Corporate Jargons DECODED',
    platform: 'youtube',
    url: 'https://youtu.be/_Tkdx67MvKA?si=vFpfhCPVGWB7eQo5',
    thumbnail: '/yt10.png',
    duration: '28:45',
    date: 'Nov 30, 2025',
    tags: ['communication', 'skills', 'effective']
  },
  {
    id: 'yt_10',
    title: '3 Smart Ways to Agree & Disagree at Work Without Sounding Rude',
    platform: 'youtube',
    url: 'https://youtu.be/Wek6O9udH38?si=Y7jHFSREZKL1L4Vr',
    thumbnail: '/yt9.png',
    duration: '35:20',
    date: 'Nov 25, 2025',
    tags: ['presentation', 'skills', 'training']
  }
];

// Combine all videos
const portfolioVideos = [...videoData, ...youtubeVideos];

// Extract YouTube video ID - Fixed function
const getYoutubeId = (url) => {
  if (!url) return null;
  
  // Handle different YouTube URL formats
  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?]+)/,
    /youtube\.com\/embed\/([^?]+)/,
    /youtube\.com\/v\/([^?]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }
  
  // If no match found, return the last part of the URL
  const parts = url.split('/');
  return parts[parts.length - 1].split('?')[0];
};

export default function ShowcasePage() {
  const [activePlatform, setActivePlatform] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 12;

  const filteredVideos = useMemo(() => {
    let videos = portfolioVideos;
    
    if (activePlatform !== 'all') {
      videos = videos.filter(video => video.platform === activePlatform);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      videos = videos.filter(video => 
        video.title.toLowerCase().includes(query) ||
        video.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    switch (sortBy) {
      case 'newest':
        videos.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'oldest':
        videos.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
    }
    
    return videos;
  }, [activePlatform, searchQuery, sortBy]);

  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const paginatedVideos = filteredVideos.slice(startIndex, startIndex + videosPerPage);

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const VideoItem = ({ video, viewMode }) => {
    return (
      <div className={`group relative rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 ${
        viewMode === 'list' ? 'flex items-start' : ''
      }`}>
        {/* Thumbnail */}
        <div 
          className={`relative cursor-pointer ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-video'}`}
          onClick={() => openVideoModal(video)}
        >
          <img 
            src={video.thumbnail}
            alt={video.title}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
              viewMode === 'list' ? 'aspect-square' : ''
            }`}
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x225/1f2937/ffffff?text=Video+Thumbnail';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <div className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-medium ${
            video.platform === 'instagram' 
              ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
              : 'bg-gradient-to-r from-red-600 to-red-500'
          }`}>
            {video.platform === 'instagram' ? 'Instagram' : 'YouTube'}
          </div>

          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-xs">
            <Clock className="w-3 h-3 inline mr-1" />
            {video.duration}
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
        </div>

        {/* Video Info */}
        <div className={`p-4 bg-gradient-to-b from-gray-800/80 to-gray-900/80 flex-grow ${
          viewMode === 'list' ? 'flex flex-col justify-between' : ''
        }`}>
          <div>
            <h3 className="font-bold mb-2 text-left line-clamp-1">{video.title}</h3>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {video.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-gray-400">
              <Calendar className="w-3 h-3" />
              <span>{video.date}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  openVideoModal(video);
                }}
                className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg text-xs flex items-center space-x-1"
              >
                <span>Preview</span>
                <Play className="w-3 h-3" />
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(video.url, '_blank', 'noopener,noreferrer');
                }}
                className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs flex items-center space-x-1"
              >
                <span>Open</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link 
                href="/"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Home className="w-5 h-5" />
                <span className="hidden sm:inline">Home</span>
              </Link>
              <a 
                href="#videos" 
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg transition-all"
              >
                Browse Videos
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Video Showcase
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Explore {portfolioVideos.length} speech and communication videos
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">{portfolioVideos.length}</div>
              <div className="text-gray-400">Total Videos</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {portfolioVideos.filter(v => v.platform === 'instagram').length}
              </div>
              <div className="text-gray-400">Instagram Reels</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-red-400 mb-2">
                {portfolioVideos.filter(v => v.platform === 'youtube').length}
              </div>
              <div className="text-gray-400">YouTube Videos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="videos" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-4 justify-between">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActivePlatform("all")}
                className={`px-6 py-3 rounded-full border transition-all ${
                  activePlatform === "all" 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-500 text-white shadow-lg shadow-blue-500/25' 
                    : 'border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-400'
                }`}
              >
                All Platforms ({portfolioVideos.length})
              </button>
              <button
                onClick={() => setActivePlatform("instagram")}
                className={`px-6 py-3 rounded-full border transition-all flex items-center space-x-2 ${
                  activePlatform === "instagram" 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-purple-500 text-white shadow-lg shadow-purple-500/25' 
                    : 'border-gray-700 text-gray-400 hover:border-purple-500 hover:text-purple-400'
                }`}
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram ({portfolioVideos.filter(v => v.platform === 'instagram').length})</span>
              </button>
              <button
                onClick={() => setActivePlatform("youtube")}
                className={`px-6 py-3 rounded-full border transition-all flex items-center space-x-2 ${
                  activePlatform === "youtube" 
                    ? 'bg-gradient-to-r from-red-600 to-red-500 border-red-500 text-white shadow-lg shadow-red-500/25' 
                    : 'border-gray-700 text-gray-400 hover:border-red-500 hover:text-red-400'
                }`}
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube ({portfolioVideos.filter(v => v.platform === 'youtube').length})</span>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>

              <div className="flex bg-gray-800/50 border border-gray-700 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-gray-700' : 'hover:bg-gray-700/50'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-gray-700' : 'hover:bg-gray-700/50'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6 text-sm text-gray-400">
          Showing {paginatedVideos.length} of {filteredVideos.length} videos
          {searchQuery && ` for "${searchQuery}"`}
        </div>

        {/* Video Grid */}
        <div className={`gap-6 ${viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'space-y-4'}`}>
          {paginatedVideos.map((video) => (
            <VideoItem key={video.id} video={video} viewMode={viewMode} />
          ))}
        </div>

        {paginatedVideos.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-block p-8 bg-gray-800/50 rounded-2xl mb-6">
              <Youtube className="w-16 h-16 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-400 mb-3">No Videos Found</h3>
            <p className="text-gray-500">Try changing your search or filter criteria</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 disabled:opacity-50"
              >
                Previous
              </button>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === pageNum
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              
              <button 
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Clean Popup Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="px-4 py-3 border-b flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-md ${
                  selectedVideo.platform === 'instagram' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                    : 'bg-gradient-to-r from-red-500 to-red-600'
                }`}>
                  {selectedVideo.platform === 'instagram' ? (
                    <Instagram className="w-4 h-4 text-white" />
                  ) : (
                    <Youtube className="w-4 h-4 text-white" />
                  )}
                </div>
                <h3 className="font-semibold text-sm text-gray-900 truncate max-w-[300px]">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                onClick={closeVideoModal}
                className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Video Content */}
            <div className="p-4">
              {selectedVideo.platform === 'youtube' ? (
                <div className="aspect-video rounded-lg overflow-hidden bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${getYoutubeId(selectedVideo.url)}?autoplay=1&modestbranding=1&rel=0`}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="w-full">
                  <InstagramEmbed url={selectedVideo.url} onClose={closeVideoModal} />
                </div>
              )}
            </div>

            {/* Video Info */}
            <div className="px-4 pb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedVideo.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4" />
                  <span>{selectedVideo.duration}</span>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  selectedVideo.platform === 'instagram' 
                    ? 'bg-purple-100 text-purple-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {selectedVideo.platform === 'instagram' ? 'Instagram' : 'YouTube'}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {selectedVideo.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <button
                  onClick={closeVideoModal}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors text-sm"
                >
                  Close
                </button>
                <button
                  onClick={() => window.open(selectedVideo.url, '_blank', 'noopener,noreferrer')}
                  className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors text-sm flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open Original
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Follow Our Social Media</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest speech and communication content
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg transition-all flex items-center space-x-2"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow on Instagram</span>
            </a>
            <a 
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-lg transition-all flex items-center space-x-2"
            >
              <Youtube className="w-5 h-5" />
              <span>Subscribe on YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Speech & Communication Videos</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/showcase" className="hover:text-blue-400 transition-colors">Showcase</Link>
            <a href="https://instagram.com" target="_blank" className="hover:text-blue-400 transition-colors">Instagram</a>
            <a href="https://youtube.com" target="_blank" className="hover:text-blue-400 transition-colors">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}