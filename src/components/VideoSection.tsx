import React from 'react';
import { Play } from 'lucide-react';

interface VideoSectionProps {
  activeSection: 'bestsellers' | 'men' | 'women';
}

export const VideoSection: React.FC<VideoSectionProps> = ({ activeSection }) => {
  const getVideoContent = () => {
    switch (activeSection) {
      case 'bestsellers':
        return {
          title: 'Best Sellers Collection',
          description: 'Discover our most loved fragrances that have captured hearts worldwide.',
          videoUrl: '/videos/Video_resized.mp4' // Placeholder video
        };
      case 'men':
        return {
          title: 'Men\'s Collection',
          description: 'Bold, masculine scents crafted for the modern gentleman.',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder video
        };
      case 'women':
        return {
          title: 'Women\'s Collection',
          description: 'Elegant, sophisticated fragrances that embody feminine grace.',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder video
        };
      default:
        return {
          title: 'Our Collection',
          description: 'Experience the world of premium fragrances.',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder video
        };
    }
  };

  const content = getVideoContent();

  return (
    <section className="bg-stone-400 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white mb-4">{content.title}</h3>
          <p className="text-stone-100 text-lg max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video bg-stone-600 rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src={content.videoUrl}
              title={content.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          {/* Play button overlay (optional decorative element) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Play className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
