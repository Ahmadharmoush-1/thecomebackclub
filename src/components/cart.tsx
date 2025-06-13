import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import type { CartItem } from '@/pages/Index';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  updateQuantity: (id: number, size: string, quantity: number) => void;
  totalPrice: number;
  onProceedToCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  cartItems,
  updateQuantity,
  totalPrice,
  onProceedToCheckout
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
        <Card className="h-full flex flex-col border-0 rounded-none">
          <CardHeader className="flex flex-row items-center justify-between border-b bg-gray-100">
            <CardTitle className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5 text-gray-600" />
              <span>Your Cart</span>
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-0">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Your cart is empty</h3>
                <p className="text-gray-500">Add some beautiful fragrances to get started!</p>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.size}</p>
                      <p className="text-sm font-semibold text-gray-600">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          
          {cartItems.length > 0 && (
            <div className="border-t bg-white p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-gray-800">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              
              <Button
                onClick={onProceedToCheckout}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 transition-all duration-300"
              >
                Proceed to Checkout
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};
