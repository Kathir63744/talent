'use client';

import React, { useState } from 'react';
import { Instagram, ExternalLink, Play, X, Calendar, Heart, MessageCircle } from 'lucide-react';
import InstagramEmbed from './InstagramEmbed';

// Add your client's Instagram Reel URLs here
const INSTAGRAM_REELS = [
  {
    id: 1,
    url: 'https://www.instagram.com/reel/DTICGJLkhdb/',
    title: 'CH or J — Pronunciation Guide',
    thumbnail: '/ins2.png',
    date: 'Jan 5, 2026',
    likes: '12.5K',
    comments: '342'
  },
  {
    id: 2,
    url: 'https://www.instagram.com/reel/DNk412sSQD_/',
    title: 'Disagreeing with your boss? Here’s how to do it',
    thumbnail: '/ins12.png',
    date: 'Aug 20, 2025',
    likes: '8.9K',
    comments: '156'
  },
  {
    id: 3,
    url: 'https://www.instagram.com/reel/DS2cdoYEkSL/',
    title: 'Public Speaking: Stage Presence Tips',
    thumbnail: '/ins3.png',
    date: 'Dec 29, 2025',
    likes: '23.4K',
    comments: '567'
  },
  {
    id: 4,
    url: 'https://www.instagram.com/reel/DScoY6ekmbc/',
    title: 'We don’t fight because we’re angry',
    thumbnail: '/ins8.png',
    date: 'Dec 19, 2025',
    likes: '15.6K',
    comments: '289'
  },
  {
    id: 5,
    url: 'https://www.instagram.com/reel/DRzWNWhEsFz/',
    title: 'This 5-second drill will FIX IT 🔥',
    thumbnail: '/ins9.png',
    date: 'Dec 10, 2025',
    likes: '34.2K',
    comments: '678'
  },
  {
    id: 6,
    url: 'https://www.instagram.com/reel/DRep83NEl-5/',
    title: 'Kerala didn\'t motivate me',
    thumbnail: '/ker.png',
    date: 'Dec 2, 2025',
    likes: '18.7K',
    comments: '423'
  }
];

export default function InstagramFeed() {
  const [selectedReel, setSelectedReel] = useState(null);

  const openReel = (reel) => {
    setSelectedReel(reel);
    document.body.style.overflow = 'hidden';
  };

  const closeReel = () => {
    setSelectedReel(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INSTAGRAM_REELS.map((reel) => (
          <div 
            key={reel.id} 
            className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer"
            onClick={() => openReel(reel)}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={reel.thumbnail} 
                alt={reel.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Instagram Badge */}
              <div className="absolute top-3 left-3 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-xs font-medium flex items-center space-x-1">
                <Instagram className="w-3 h-3" />
                <span>Instagram Reel</span>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-bold mb-2 line-clamp-2">{reel.title}</h3>
              
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{reel.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 text-sm">
                    <Heart className="w-3 h-3 text-red-400" />
                    <span>{reel.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <MessageCircle className="w-3 h-3 text-blue-400" />
                    <span>{reel.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Instagram Embed Modal */}
      {selectedReel && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={closeReel}>
          <div className="relative max-w-2xl w-full bg-gray-900 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              onClick={closeReel}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Instagram Embed */}
            <div className="p-4">
              <InstagramEmbed url={selectedReel.url} onClose={closeReel} />
            </div>

            {/* Info */}
            <div className="p-6 pt-0">
              <h3 className="text-xl font-bold mb-2">{selectedReel.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-gray-400">
                  <span>{selectedReel.date}</span>
                  <span>❤️ {selectedReel.likes} likes</span>
                  <span>💬 {selectedReel.comments} comments</span>
                </div>
                <a 
                  href={selectedReel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                >
                  <span>Open in Instagram</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}