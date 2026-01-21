import { useEffect } from "react";

export function InstagramEmbed({ url, onBack }) {
  useEffect(() => {
    // Load script if not already loaded
    if (!window.instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div style={{
      width: "100%",
      maxWidth: "540px",
      margin: "0 auto"
    }}>

      {/* Instagram Embed */}
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          width: "100%",
          minHeight: "100px",
          maxHeight: "500px",
          borderRadius: "8px",
          overflow: "hidden"
        }}
      ></blockquote>
    </div>
  );
}