'use client';

import React, { useState, useEffect } from 'react';
import { Instagram, ExternalLink, Play, Heart, MessageCircle, Eye, AlertCircle } from 'lucide-react';

export default function RealInstagramFeed() {
  const [reels, setReels] = useState(null); // null = loading, [] = no data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRealInstagram();
  }, []);

  const fetchRealInstagram = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/instagram/real');
      const data = await response.json();
      
      if (data.success && data.data) {
        setReels(data.data);
      } else {
        setError(data.error || 'No Instagram data available');
        setReels([]);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to connect to server');
      setReels([]);
    } finally {
      setLoading(false);
    }
  };

  const formatNumber = (num) => {
    if (!num) return '0';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading real Instagram data...</p>
        </div>
      </div>
    );
  }

  if (error || reels?.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-800/30 rounded-2xl">
        <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Instagram Setup Required</h3>
        <p className="text-gray-400 max-w-md mx-auto mb-6">
          {error || 'No Instagram data available. Client needs to provide Instagram API credentials.'}
        </p>
        <div className="bg-gray-800 p-4 rounded-lg text-left max-w-lg mx-auto">
          <p className="text-sm text-gray-300 mb-2">📋 Client needs to provide:</p>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>• Instagram Business/Creator Account</li>
            <li>• Facebook App with Instagram Graph API</li>
            <li>• Access Token (IGQVJ...)</li>
            <li>• Instagram User ID</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-green-400">LIVE REAL DATA</span>
          <span className="text-xs text-gray-500">| {reels.length} reels</span>
        </div>
        <button 
          onClick={fetchRealInstagram}
          className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm"
        >
          Refresh
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reels.map((reel) => (
          <div key={reel.id} className="group bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src={reel.thumbnail} 
                alt={reel.caption}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x500/1f2937/ffffff?text=Instagram+Reel';
                }}
              />
              
              <div className="absolute top-3 left-3 px-3 py-1.5 bg-purple-600 rounded-lg text-xs font-medium">
                Instagram Reel
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span>{formatNumber(reel.likes)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4 text-blue-400" />
                      <span>{formatNumber(reel.comments)}</span>
                    </div>
                  </div>
                  <span className="text-xs">{reel.date}</span>
                </div>
              </div>

              <a 
                href={reel.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50"
              >
                <Play className="w-12 h-12 text-white" />
              </a>
            </div>

            <div className="p-4">
              <p className="text-sm text-gray-300 line-clamp-2">
                {reel.caption}
              </p>
              <a 
                href={reel.permalink}
                target="_blank"
                className="inline-flex items-center space-x-1 mt-3 text-purple-400 hover:text-purple-300 text-sm"
              >
                <span>View on Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}