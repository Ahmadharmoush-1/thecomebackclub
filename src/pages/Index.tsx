import React, { useState } from 'react';
import { PerfumeGrid } from '@/components/PerfumeGrid';
import { Cart } from '@/components/cart';
import { CustomerForm } from '@/components/CustomerForm';
import { OrderSummary } from '@/components/OrderSummary';
import { ShoppingBag, Sparkles } from 'lucide-react';
export interface Perfume {
  id: number;
  name: string;
  prices: {
    '30ml': number;
    '50ml': number;
    '100ml': number;
  };
  image: string;
  description: string;
  category: 'bestsellers' | 'men' | 'women';
}
export interface CartItem {
  id: number;
  name: string;
  price: number;
  size: string;
  image: string;
  description: string;
  quantity: number;
}
export interface CustomerInfo {
  name: string;
  phone: string;
  city: string;
  address: string;
  street: string;
  building: string;
  floor: string;
}
const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [activeSection, setActiveSection] = useState<'bestsellers' | 'men' | 'women'>('bestsellers');
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    phone: '',
    city: '',
    address: '',
    street: '',
    building: '',
    floor: ''
  });
  const addToCart = (perfume: Perfume, size: string) => {
    const price = perfume.prices[size as keyof typeof perfume.prices];
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === perfume.id && item.size === size);
      if (existingItem) {
        return prev.map(item => item.id === perfume.id && item.size === size ? {
          ...item,
          quantity: item.quantity + 1
        } : item);
      }
      return [...prev, {
        id: perfume.id,
        name: perfume.name,
        price,
        size,
        image: perfume.image,
        description: perfume.description,
        quantity: 1
      }];
    });
  };
  const updateQuantity = (id: number, size: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => !(item.id === id && item.size === size)));
    } else {
      setCartItems(prev => prev.map(item => item.id === id && item.size === size ? {
        ...item,
        quantity
      } : item));
    }
  };
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  const generateWhatsAppMessage = () => {
    const orderDetails = cartItems.map((item, index) => `${index + 1}. ${item.name} (${item.size})\n   Quantity: ${item.quantity}\n   Price: $${item.price} each\n   Subtotal: $${(item.price * item.quantity).toFixed(2)}`).join('\n\n');
    const message = `🌟 New Perfume Order 🌟

👤 Customer Information:
Name: ${customerInfo.name}
Phone: ${customerInfo.phone}
City: ${customerInfo.city}
Address: ${customerInfo.address}
Street: ${customerInfo.street}
Building: ${customerInfo.building}
Floor: ${customerInfo.floor}

🛍️ Order Details:
${orderDetails}

💰 Total: $${getTotalPrice().toFixed(2)}

💳 Payment Method: Cash on Delivery 💳

Please confirm this order and let me know the delivery time. Thank you! 🙏`;
    const encodedMessage = encodeURIComponent(message);

    // Check if user is on mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    let whatsappUrl;
    if (isMobile) {
      // For mobile devices, use the whatsapp:// protocol which opens the WhatsApp app directly
      whatsappUrl = `whatsapp://send?phone=96170027458&text=${encodedMessage}`;
    } else {
      // For desktop, use the web.whatsapp.com URL
      whatsappUrl = `https://web.whatsapp.com/send?phone=96170027458&text=${encodedMessage}`;
    }

    // Try to open WhatsApp app first (mobile), fallback to web version
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');

      // Additional fallback for mobile devices - if WhatsApp app doesn't open, try web version
      if (isMobile) {
        setTimeout(() => {
          const webWhatsappUrl = `https://wa.me/96170027458?text=${encodedMessage}`;
          window.open(webWhatsappUrl, '_blank');
        }, 1000);
      }
    }, 0);
  };
  // Get section-specific background styling
  const getSectionBackground = () => {
    switch (activeSection) {
      case 'men':
        return 'bg-gray-800';
      case 'women':
        return 'bg-pink-100';
      default:
        return 'bg-gray-900';
    }
  };

  // Get section-specific navigation styling
  const getNavBackground = () => {
    switch (activeSection) {
      case 'men':
        return 'bg-gray-800';
      case 'women':
        return 'bg-pink-200';
      default:
        return 'bg-gray-900';
    }
  };

  // Get section-specific hero text styling
  const getHeroTextColor = () => {
    switch (activeSection) {
      case 'men':
        return 'text-white';
      case 'women':
        return 'text-rose-800';
      default:
        return 'text-zinc-50';
    }
  };

  const getHeroSubTextColor = () => {
    switch (activeSection) {
      case 'men':
        return 'text-gray-300';
      case 'women':
        return 'text-rose-600';
      default:
        return 'text-gray-600';
    }
  };

  return <div className={`min-h-screen ${getSectionBackground()}`}>
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-gray-700" />
              <h1 className="text-3xl font-bold text-gray-800">World of Perfume Lab</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button onClick={() => setShowCart(true)} className="relative p-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                <ShoppingBag className="h-6 w-6" />
                {getCartItemCount() > 0 && <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                    {getCartItemCount()}
                  </span>}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className={`border-b border-gray-300 ${getNavBackground()}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-center space-x-8 py-4 ${getNavBackground()}`}>
            {[{
            id: 'bestsellers',
            label: 'Best Sellers'
          }, {
            id: 'men',
            label: 'Men\'s Collection'
          }, {
            id: 'women',
            label: 'Women\'s Collection'
          }].map(section => <button key={section.id} onClick={() => setActiveSection(section.id as 'bestsellers' | 'men' | 'women')} className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeSection === section.id ? 'bg-gray-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50 shadow'}`}>
                {section.label}
              </button>)}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`py-20 px-4 text-center ${getSectionBackground()}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${getHeroTextColor()}`}>
            Discover Your Perfect
            <span className={`block ${activeSection === 'women' ? 'text-rose-700' : activeSection === 'men' ? 'text-gray-200' : 'text-zinc-200'}`}>
              Fragrance
            </span>
          </h2>
          <p className={`text-xl ${getHeroSubTextColor()} mb-8 max-w-2xl mx-auto`}>
           Discovering the essence of elegance at World of Perfume since 2010.
          </p>
        </div>
      </section>

      {/* Main Content */}
      {!showCheckout ? <PerfumeGrid onAddToCart={addToCart} activeSection={activeSection} /> : <div className={`max-w-4xl mx-auto px-4 py-8 ${getSectionBackground()}`}>
          <div className="grid md:grid-cols-2 gap-8">
            <CustomerForm customerInfo={customerInfo} setCustomerInfo={setCustomerInfo} />
            <OrderSummary cartItems={cartItems} totalPrice={getTotalPrice()} onCompleteOrder={generateWhatsAppMessage} customerInfo={customerInfo} />
          </div>
        </div>}

      {/* Cart Sidebar */}
      <Cart isOpen={showCart} onClose={() => setShowCart(false)} cartItems={cartItems} updateQuantity={updateQuantity} totalPrice={getTotalPrice()} onProceedToCheckout={() => {
      setShowCart(false);
      setShowCheckout(true);
    }} />

      {/* Checkout Navigation */}
      {showCheckout && <div className="fixed bottom-4 left-4 right-4 z-50">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => setShowCheckout(false)} className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors">
              ← Back to Shopping
            </button>
          </div>
        </div>}
    </div>;
};
export default Index;
