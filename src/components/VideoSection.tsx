import React from 'react';
import { Play } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
          videos: [
            {
              id: 1,
              title: 'Top Bestseller 1',
              videoUrl: '/videos/mainsection2.mp4',
              description: 'Our #1 bestselling fragrance'
            },
            {
              id: 2,
              title: 'Top Bestseller 2',
              videoUrl: '/videos/mainsection1.mp4',
              description: 'Customer favorite worldwide'
            },
            {
              id: 3,
              title: 'Top Bestseller 3',
              videoUrl: '/videos/MainSection.mp4',
              description: 'Award-winning fragrance'
            }
          ]
        };
      case 'men':
        return {
          title: 'Men\'s Collection',
          description: 'Bold, masculine scents crafted for the modern gentleman.',
          videos: [
            {
              id: 1,
              title: 'Masculine Essence',
              videoUrl: '/videos/mensection.mp4',
              description: 'Bold and confident scent'
            },
            {
              id: 2,
              title: 'Gentleman\'s Choice',
              videoUrl: '/videos/mensection1.mp4',
              description: 'Sophisticated and refined'
            },
            // {
            //   id: 3,
            //   title: 'Adventure Spirit',
            //   videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            //   description: 'For the adventurous man'
            // }
          ]
        };
      case 'women':
        return {
          title: 'Women\'s Collection',
          description: 'Elegant, sophisticated fragrances that embody feminine grace.',
          videos: [
            {
              id: 1,
              title: 'Elegant Rose',
              videoUrl: '/videos/womensection1.mp4',
              description: 'Timeless floral elegance'
            },
            {
              id: 2,
              title: 'Modern Goddess',
              videoUrl: '/videos/womensection.mp4',
              description: 'Contemporary feminine power'
            },
            // {
            //   id: 3,
            //   title: 'Sweet Harmony',
            //   videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            //   description: 'Perfect balance of sweet and fresh'
            // }
          ]
        };
      default:
        return {
          title: 'Our Collection',
          description: 'Experience the world of premium fragrances.',
          videos: [
            {
              id: 1,
              title: 'Premium Collection',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              description: 'Luxury fragrances'
            },
            {
              id: 2,
              title: 'Signature Scents',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              description: 'Find your signature'
            },
            {
              id: 3,
              title: 'Artisan Crafted',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              description: 'Handcrafted perfection'
            }
          ]
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
        
        <div className="relative max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {content.videos.map((video) => (
                <CarouselItem key={video.id} className="pl-4">
                  <div className="relative">
                    <div
  className="relative w-full bg-stone-600 rounded-xl overflow-hidden shadow-2xl"
  style={{ aspectRatio: '16 / 9', height: '70vh' }} // larger height
>
  {video.videoUrl.endsWith('.mp4') ? (
    <video
      src={video.videoUrl}
      controls
      className="w-full h-full object-cover"
    />
  ) : (
    <iframe
      src={video.videoUrl}
      title={video.title}
      className="w-full h-full object-cover"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )}
</div>
                    
                    {/* Video Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-xl">
                      <h4 className="text-white font-semibold text-lg mb-1">{video.title}</h4>
                      <p className="text-stone-200 text-sm">{video.description}</p>
                    </div>
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-stone-700 hover:bg-stone-800 text-white border-stone-600" />
            <CarouselNext className="bg-stone-700 hover:bg-stone-800 text-white border-stone-600" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};