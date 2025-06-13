import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Star } from 'lucide-react';
import type { Perfume } from '@/pages/Index';

interface PerfumeGridProps {
  onAddToCart: (perfume: Perfume, size: string) => void;
  activeSection: 'bestsellers' | 'men' | 'women';
}

const perfumes: Perfume[] = [
  // Best Sellers
  { id: 1, name: "OUD AL AKABER AL REJAL", prices: { '30ml': 45, '50ml': 75, '100ml': 135 }, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop", description: "A sophisticated blend of jasmine and sandalwood", category: 'bestsellers' },
  { id: 2, name: "Invictus Victory Elixir Paco Rabanne ", prices: { '30ml': 5, '50ml': 10, '100ml': 15 }, image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop", description: "Bold fusion of incense, tonka bean, and spicy woods for an intense, long-lasting scent", category: 'bestsellers' },
  { id: 3, name: "Ocean Breeze", prices: { '30ml': 38, '50ml': 68, '100ml': 125 }, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop", description: "Fresh aquatic notes with citrus undertones", category: 'bestsellers' },
  { id: 4, name: "Rose Garden", prices: { '30ml': 48, '50ml': 78, '100ml': 140 }, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=400&fit=crop", description: "Classic rose petals with a modern twist", category: 'bestsellers' },
  { id: 5, name: "Mystic Woods", prices: { '30ml': 55, '50ml': 85, '100ml': 150 }, image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop", description: "Deep woody notes with cedar and pine", category: 'bestsellers' },
  { id: 6, name: "Citrus Burst", prices: { '30ml': 35, '50ml': 65, '100ml': 120 }, image: "https://images.unsplash.com/photo-1594736797933-d0d18cece904?w=400&h=400&fit=crop", description: "Vibrant lemon and bergamot blend", category: 'bestsellers' },
  { id: 7, name: "Velvet Dreams", prices: { '30ml': 62, '50ml': 92, '100ml': 165 }, image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&h=400&fit=crop", description: "Luxurious blend of oud and Bulgarian rose", category: 'bestsellers' },
  { id: 8, name: "Silver Moon", prices: { '30ml': 42, '50ml': 72, '100ml': 135 }, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop", description: "Cool lavender with white tea essence", category: 'bestsellers' },
  { id: 9, name: "Royal Amber", prices: { '30ml': 58, '50ml': 88, '100ml': 155 }, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=400&fit=crop", description: "Rich amber with spicy undertones", category: 'bestsellers' },
  { id: 10, name: "Crystal Clear", prices: { '30ml': 40, '50ml': 70, '100ml': 130 }, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop", description: "Pure and clean with aquatic freshness", category: 'bestsellers' },
  
  // Men's Collection
  { id: 21, name: "Urban Legend", prices: { '30ml': 50, '50ml': 80, '100ml': 145 }, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop", description: "Bold and masculine with leather notes", category: 'men' },
  { id: 22, name: "Steel Force", prices: { '30ml': 45, '50ml': 75, '100ml': 140 }, image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop", description: "Powerful cedar and metallic accents", category: 'men' },
  { id: 23, name: "Night Rider", prices: { '30ml': 55, '50ml': 85, '100ml': 155 }, image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop", description: "Dark and mysterious with tobacco notes", category: 'men' },
  { id: 24, name: "Ocean Storm", prices: { '30ml': 42, '50ml': 72, '100ml': 135 }, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop", description: "Fresh marine with stormy intensity", category: 'men' },
  { id: 25, name: "Black Diamond", prices: { '30ml': 65, '50ml': 95, '100ml': 170 }, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop", description: "Luxurious oud with diamond-like brilliance", category: 'men' },
  { id: 26, name: "Wild Spirit", prices: { '30ml': 48, '50ml': 78, '100ml': 145 }, image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&h=400&fit=crop", description: "Untamed woods with animal magnetism", category: 'men' },
  { id: 27, name: "Thunder Strike", prices: { '30ml': 52, '50ml': 82, '100ml': 150 }, image: "https://images.unsplash.com/photo-1594736797933-d0d18cece904?w=400&h=400&fit=crop", description: "Electric citrus with powerful base", category: 'men' },
  { id: 28, name: "Iron Will", prices: { '30ml': 46, '50ml': 76, '100ml': 140 }, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop", description: "Strong and determined metallic blend", category: 'men' },
  { id: 29, name: "Shadow Hunter", prices: { '30ml': 58, '50ml': 88, '100ml': 160 }, image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop", description: "Dark woods with mysterious allure", category: 'men' },
  { id: 30, name: "Storm Breaker", prices: { '30ml': 44, '50ml': 74, '100ml': 138 }, image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop", description: "Powerful aquatic with lightning energy", category: 'men' },
  { id: 31, name: "Rebel Force", prices: { '30ml': 60, '50ml': 90, '100ml': 165 }, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop", description: "Rebellious spices with leather edge", category: 'men' },
  { id: 32, name: "Dark Knight", prices: { '30ml': 56, '50ml': 86, '100ml': 158 }, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop", description: "Noble darkness with heroic strength", category: 'men' },
  { id: 33, name: "Fire Storm", prices: { '30ml': 49, '50ml': 79, '100ml': 145 }, image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&h=400&fit=crop", description: "Fiery spices with stormy intensity", category: 'men' },
  { id: 34, name: "Wolf Pack", prices: { '30ml': 53, '50ml': 83, '100ml': 152 }, image: "https://images.unsplash.com/photo-1594736797933-d0d18cece904?w=400&h=400&fit=crop", description: "Wild and free with pack mentality", category: 'men' },
  { id: 35, name: "Steel Soul", prices: { '30ml': 47, '50ml': 77, '100ml': 142 }, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop", description: "Steely determination with soulful depth", category: 'men' },
  { id: 36, name: "Thunder God", prices: { '30ml': 62, '50ml': 92, '100ml': 168 }, image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop", description: "Divine power with thunderous presence", category: 'men' },
  { id: 37, name: "Black Storm", prices: { '30ml': 51, '50ml': 81, '100ml': 148 }, image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop", description: "Dark tempest with powerful energy", category: 'men' },
  { id: 38, name: "Iron Fist", prices: { '30ml': 45, '50ml': 75, '100ml': 140 }, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop", description: "Unbreakable strength with metallic edge", category: 'men' },
  { id: 39, name: "Wild Fire", prices: { '30ml': 54, '50ml': 84, '100ml': 154 }, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop", description: "Untamed flames with wild intensity", category: 'men' },
  { id: 40, name: "Storm King", prices: { '30ml': 59, '50ml': 89, '100ml': 162 }, image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&h=400&fit=crop", description: "Royal power with stormy majesty", category: 'men' },

  // Women's Collection  
  { id: 41, name: "Rose Whisper", prices: { '30ml': 45, '50ml': 75, '100ml': 140 }, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=400&fit=crop", description: "Delicate rose with soft whispers", category: 'women' },
  { id: 42, name: "Garden Dream", prices: { '30ml': 42, '50ml': 72, '100ml': 135 }, image: "https://images.unsplash.com/photo-1594736797933-d0d18cece904?w=400&h=400&fit=crop", description: "Floral paradise with dreamy essence", category: 'women' },
  { id: 43, name: "Crystal Bloom", prices: { '30ml': 48, '50ml': 78, '100ml': 145 }, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop", description: "Pure bloom with crystal clarity", category: 'women' },
  { id: 44, name: "Silk Touch", prices: { '30ml': 52, '50ml': 82, '100ml': 150 }, image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&h=400&fit=crop", description: "Smooth silk with gentle touch", category: 'women' },
  { id: 45, name: "Pearl Essence", prices: { '30ml': 55, '50ml': 85, '100ml': 155 }, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop", description: "Lustrous pearl with oceanic essence", category: 'women' },
  { id: 46, name: "Angel Wings", prices: { '30ml': 38, '50ml': 68, '100ml': 128 }, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=400&fit=crop", description: "Heavenly light with angelic grace", category: 'women' },
  { id: 47, name: "Butterfly Kiss", prices: { '30ml': 44, '50ml': 74, '100ml': 138 }, image: "https://images.unsplash.com/photo-1594736797933-d0d18cece904?w=400&h=400&fit=crop", description: "Gentle kiss with butterfly lightness", category: 'women' },
  { id: 48, name: "Moon Goddess", prices: { '30ml': 58, '50ml': 88, '100ml': 160 }, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop", description: "Divine femininity with lunar power", category: 'women' },
  { id: 49, name: "Cherry Blossom", prices: { '30ml': 46, '50ml': 76, '100ml': 142 }, image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&h=400&fit=crop", description: "Spring bloom with cherry sweetness", category: 'women' },
  { id: 50, name: "Diamond Dust", prices: { '30ml': 62, '50ml': 92, '100ml': 168 }, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop", description: "Sparkling brilliance with diamond luxury", category: 'women' },
  { id: 51, name: "Velvet Rose", prices: { '30ml': 50, '50ml': 80, '100ml': 148 }, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=400&fit=crop", description: "Luxurious velvet with rose elegance", category: 'women' },
  { id: 52, name: "Spring Rain", prices: { '30ml': 40, '50ml': 70, '100ml': 132 }, image: "https://images.unsplash.com/photo-1594736797933-d0d18cece904?w=400&h=400&fit=crop", description: "Fresh rain with spring awakening", category: 'women' },
  { id: 53, name: "Golden Petal", prices: { '30ml': 54, '50ml': 84, '100ml': 156 }, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop", description: "Golden glow with petal softness", category: 'women' },
  { id: 54, name: "Fairy Tale", prices: { '30ml': 47, '50ml': 77, '100ml': 144 }, image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&h=400&fit=crop", description: "Magical story with fairy enchantment", category: 'women' },
  { id: 55, name: "Crystal Heart", prices: { '30ml': 56, '50ml': 86, '100ml': 158 }, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop", description: "Pure heart with crystal emotion", category: 'women' },
  { id: 56, name: "Sunrise Bloom", prices: { '30ml': 43, '50ml': 73, '100ml': 136 }, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=400&fit=crop", description: "Morning bloom with sunrise warmth", category: 'women' },
  { id: 57, name: "Pink Diamond", prices: { '30ml': 60, '50ml': 90, '100ml': 165 }, image: "https://images.unsplash.com/photo-1594736797933-d0d18cece904?w=400&h=400&fit=crop", description: "Rare pink with diamond brilliance", category: 'women' },
  { id: 58, name: "White Orchid", prices: { '30ml': 49, '50ml': 79, '100ml': 146 }, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop", description: "Exotic orchid with white purity", category: 'women' },
  { id: 59, name: "Starlight", prices: { '30ml': 51, '50ml': 81, '100ml': 150 }, image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&h=400&fit=crop", description: "Celestial glow with stellar beauty", category: 'women' },
  { id: 60, name: "Dream Catcher", prices: { '30ml': 53, '50ml': 83, '100ml': 154 }, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop", description: "Mystical dreams with catching magic", category: 'women' }
];

export const PerfumeGrid: React.FC<PerfumeGridProps> = ({ onAddToCart, activeSection }) => {
  const [selectedSizes, setSelectedSizes] = useState<{[key: number]: string}>({});

  const filteredPerfumes = perfumes.filter(perfume => perfume.category === activeSection);

  const handleSizeSelect = (perfumeId: number, size: string) => {
    setSelectedSizes(prev => ({ ...prev, [perfumeId]: size }));
  };

  const getSectionTitle = () => {
    switch (activeSection) {
      case 'bestsellers': return 'Best Sellers';
      case 'men': return 'Men\'s Collection';
      case 'women': return 'Women\'s Collection';
      default: return 'Our Collection';
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">{getSectionTitle()}</h3>
        <p className="text-gray-800 max-w-2xl mx-auto">
          Each fragrance tells a unique story in World of Perfume Lab. Discover the perfect scent that speaks to your soul.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPerfumes.map((perfume) => {
          const selectedSize = selectedSizes[perfume.id] || '30ml';
          const selectedPrice = perfume.prices[selectedSize as keyof typeof perfume.prices];
          
          return (
            <Card key={perfume.id} className="group hover:shadow-2xl transition-all duration-500 bg-white border-gray-200 shadow-lg hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={perfume.image}
                    alt={perfume.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Star className="h-4 w-4 text-gray-800 fill-current" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{perfume.name}</h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{perfume.description}</p>
                  
                  {/* Size Selection */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">Select Size:</p>
                    <div className="flex space-x-2">
                      {Object.entries(perfume.prices).map(([size, price]) => (
                        <button
                          key={size}
                          onClick={() => handleSizeSelect(perfume.id, size)}
                          className={`px-3 py-1 text-xs rounded-full border transition-all ${
                            selectedSize === size
                              ? 'bg-gray-800 text-white border-gray-800'
                              : 'bg-white text-gray-600 border-gray-800 hover:border-gray-500'
                          }`}
                        >
                          {size} - ${price}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-800">
                        ${selectedPrice}
                      </span>
                      <span className="text-gray-500 ml-2">({selectedSize})</span>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => onAddToCart(perfume, selectedSize)}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
