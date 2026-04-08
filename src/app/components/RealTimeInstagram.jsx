'use client';

import React, { useState, useEffect } from 'react';
import { Instagram, ExternalLink, Play, Heart, MessageCircle, Eye, RefreshCw, AlertCircle } from 'lucide-react';

export default function RealTimeInstagram({ username }) {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const fetchReels = async () => {
    try {
      setRefreshing(true);
      setError(null);
      
      const response = await fetch(`http://localhost:5000/api/instagram/realtime/${username}`);
      const data = await response.json();
      
      if (data.success && data.data) {
        setReels(data.data);
      } else {
        setError(data.error || 'Failed to fetch Instagram content');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Unable to connect to server. Make sure backend is running.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchReels();
    
    // Auto-refresh every 5 minutes
    const interval = setInterval(fetchReels, 300000);
    return () => clearInterval(interval);
  }, [username]);

  const formatNumber = (num) => {
    if (!num) return '0';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <Instagram className="w-12 h-12 animate-pulse text-purple-400 mx-auto mb-4" />
          <p className="text-gray-400">Fetching latest Instagram reels...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-red-400 mb-2">Unable to Load Instagram</h3>
        <p className="text-gray-400 mb-6">{error}</p>
        <button 
          onClick={fetchReels}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (reels.length === 0 || (reels[0]?.isFallback)) {
    return (
      <div className="text-center py-20">
        <Instagram className="w-16 h-16 text-purple-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">No Reels Found</h3>
        <p className="text-gray-400 mb-6">
          Make sure @{username} has public reels
        </p>
        <a 
          href={`https://www.instagram.com/${username}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
        >
          <Instagram className="w-5 h-5" />
          <span>View Instagram Profile</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <div>
      {/* Header with refresh */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <Instagram className="w-5 h-5 text-purple-400" />
          <span className="text-sm text-gray-400">
            Live feed from @{username}
          </span>
        </div>
        <button 
          onClick={fetchReels}
          disabled={refreshing}
          className="flex items-center space-x-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
        >
          <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
          <span>{refreshing ? 'Refreshing...' : 'Refresh'}</span>
        </button>
      </div>

      {/* Reels Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reels.slice(0, 9).map((reel, index) => (
          <div 
            key={reel.id || index} 
            className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
          >
            {/* Thumbnail */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src={reel.thumbnail} 
                alt={reel.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7';
                }}
              />
              
              {/* Badges */}
              <div className="absolute top-3 left-3 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-xs font-medium flex items-center space-x-1">
                <Instagram className="w-3 h-3" />
                <span>Reel</span>
              </div>

              {/* Stats */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-3 h-3 text-red-400" />
                    <span>{formatNumber(reel.likes)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-3 h-3 text-blue-400" />
                    <span>{formatNumber(reel.comments)}</span>
                  </div>
                  {reel.views > 0 && (
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3 text-green-400" />
                      <span>{formatNumber(reel.views)}</span>
                    </div>
                  )}
                </div>
                <span>{formatDate(reel.publishedAt)}</span>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                <a 
                  href={reel.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </a>
              </div>
            </div>

            {/* Caption */}
            <div className="p-4">
              <p className="text-sm text-gray-300 line-clamp-2 min-h-[40px]">
                {reel.caption.length > 80 ? reel.caption.substring(0, 80) + '...' : reel.caption}
              </p>
              <a 
                href={reel.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 mt-3 text-purple-400 hover:text-purple-300 text-sm"
              >
                <span>View on Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {reels.length > 9 && (
        <div className="text-center mt-8">
          <a 
            href={`https://www.instagram.com/${username}/reels/`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>View All Reels on Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* Last Updated */}
      <div className="text-center mt-6 text-xs text-gray-500">
        Last updated: {new Date().toLocaleString()}
      </div>
    </div>
  );
}