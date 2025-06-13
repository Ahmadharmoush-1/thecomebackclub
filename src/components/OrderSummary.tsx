import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, CreditCard, MessageCircle } from 'lucide-react';
import type { CartItem, CustomerInfo } from '@/pages/Index';

interface OrderSummaryProps {
  cartItems: CartItem[];
  totalPrice: number;
  onCompleteOrder: () => void;
  customerInfo: CustomerInfo;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  cartItems,
  totalPrice,
  onCompleteOrder,
  customerInfo
}) => {
  const isFormValid = customerInfo.name && customerInfo.phone && customerInfo.city && customerInfo.address;

  return (
    <Card className="h-fit bg-white border-gray-200 shadow-lg">
      <CardHeader className="bg-gray-100">
        <CardTitle className="flex items-center space-x-2">
          <ShoppingBag className="h-5 w-5 text-gray-600" />
          <span>Order Summary</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6 space-y-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No items in cart</p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex items-start space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.size}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm text-gray-600">
                        ${item.price} × {item.quantity} 
                      </span>
                      <span className="font-semibold text-gray-600">
                        ${(item.price * item.quantity ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Separator />
            
            <div className="space-y-3">
              <div className="flex justify-between text-lg">
                <span className="font-semibold">Subtotal:</span>
                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Delivery fees:</span>
                <span> 4$</span>
              </div>
              <Separator />
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-gray-800">
                  ${totalPrice+4}
                </span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-2 mb-2">
                <CreditCard className="h-4 w-4 text-gray-600" />
                <span className="font-semibold text-gray-800">Payment Method</span>
              </div>
              <Badge variant="secondary" className="bg-gray-100 text-gray-800 border-gray-200">
                Cash on Delivery
              </Badge>
            </div>
            
            <Button
              onClick={onCompleteOrder}
              disabled={!isFormValid}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Complete Order via WhatsApp
            </Button>
            
            {!isFormValid && (
              <p className="text-sm text-gray-500 text-center">
                Please fill in all required customer information fields
              </p>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};