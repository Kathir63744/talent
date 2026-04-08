'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Loader, X, ExternalLink } from 'lucide-react';

export default function InstagramEmbed({ url, onClose }) {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    // Load Instagram embed script
    const scriptId = 'instagram-embed-script';
    
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        setLoading(false);
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    } else {
      setLoading(false);
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }

    return () => {
      // Cleanup if needed
    };
  }, [url]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {loading && (
        <div className="flex items-center justify-center p-8">
          <Loader className="w-8 h-8 animate-spin text-purple-400" />
        </div>
      )}
      
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ 
          maxWidth: '540px', 
          minWidth: '326px', 
          margin: '0 auto',
          background: 'transparent',
          borderRadius: '12px'
        }}
      >
      </blockquote>
    </div>
  );
}