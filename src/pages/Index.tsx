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

  const getTotalPrice = () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const getCartItemCount = () => cartItems.reduce((total, item) => total + item.quantity, 0);

  const generateWhatsAppMessage = () => {
    const orderDetails = cartItems.map((item, index) =>
      `${index + 1}. ${item.name} (${item.size})\n   Quantity: ${item.quantity}\n   Price: $${item.price} each\n   Subtotal: $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n\n');

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
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=96170027458&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=96170027458&text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      if (isMobile) {
        setTimeout(() => {
          const webWhatsappUrl = `https://wa.me/96170027458?text=${encodedMessage}`;
          window.open(webWhatsappUrl, '_blank');
        }, 1000);
      }
    }, 0);
  };

  return (
    <div className="min-h-screen bg-[#4a4a4a] text-white">
      {/* Header */}
      <header className="bg-[#4a4a4a] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-white" />
              <h1 className="text-3xl font-bold text-white">World of Perfume Lab</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowCart(true)}
                className="relative p-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ShoppingBag className="h-6 w-6" />
                {getCartItemCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                    {getCartItemCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-gray-500 bg-[#4a4a4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 py-4">
            {[
              { id: 'bestsellers', label: 'Best Sellers' },
              { id: 'men', label: 'Men\'s Collection' },
              { id: 'women', label: 'Women\'s Collection' }
            ].map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id as 'bestsellers' | 'men' | 'women')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-white text-black shadow-lg'
                    : 'bg-gray-700 text-white hover:bg-gray-600 shadow'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-[#4a4a4a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Discover Your Perfect
            <span className="block text-gray-300">Fragrance</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Discovering the essence of elegance at World of Perfume since 2010.
          </p>
        </div>
      </section>

      {/* Main Content */}
      {!showCheckout ? (
        <PerfumeGrid onAddToCart={addToCart} activeSection={activeSection} />
      ) : (
        <div className="max-w-4xl mx-auto px-4 py-8 bg-[#4a4a4a]">
          <div className="grid md:grid-cols-2 gap-8">
            <CustomerForm customerInfo={customerInfo} setCustomerInfo={setCustomerInfo} />
            <OrderSummary
              cartItems={cartItems}
              totalPrice={getTotalPrice()}
              onCompleteOrder={generateWhatsAppMessage}
              customerInfo={customerInfo}
            />
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      <Cart
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        totalPrice={getTotalPrice()}
        onProceedToCheckout={() => {
          setShowCart(false);
          setShowCheckout(true);
        }}
      />

      {/* Checkout Navigation */}
      {showCheckout && (
        <div className="fixed bottom-4 left-4 right-4 z-50">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setShowCheckout(false)}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              ← Back to Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
