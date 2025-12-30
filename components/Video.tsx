'use client';
import { useEffect } from 'react';

export default function EasolVideo() {
  useEffect(() => {
    // Load Vimeo player script dynamically if not present
    if (!document.getElementById('vimeo-player-script')) {
        const script = document.createElement('script');
        script.id = 'vimeo-player-script';
        script.src = "https://player.vimeo.com/api/player.js";
        document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="section--video bg-black py-12">
      <div className="content max-w-6xl mx-auto px-8">
        <div className="media media-vimeo aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden relative group">
            {/* Using iframe directly for simplicity and reliability */}
            <iframe 
                src="https://player.vimeo.com/video/1143823522?background=1&autoplay=1&loop=1&byline=0&title=0" 
                className="w-full h-full absolute inset-0"
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
            ></iframe>
            {/* Overlay to prevent interaction if it's just background */}
            <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
