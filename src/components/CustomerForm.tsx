import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Phone, MapPin, Home, Building } from 'lucide-react';
import type { CustomerInfo } from '@/pages/Index';

interface CustomerFormProps {
  customerInfo: CustomerInfo;
  setCustomerInfo: (info: CustomerInfo) => void;
}

export const CustomerForm: React.FC<CustomerFormProps> = ({
  customerInfo,
  setCustomerInfo
}) => {
  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo({
      ...customerInfo,
      [field]: value
    });
  };

  return (
    <Card className="h-fit bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-amber-50">
        <CardTitle className="flex items-center space-x-2">
          <User className="h-5 w-5 text-purple-600" />
          <span>Customer Information</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
            Full Name *
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={customerInfo.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 flex items-center space-x-1">
            <Phone className="h-4 w-4" />
            <span>Phone Number *</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+961 76 123 456"
            value={customerInfo.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="city" className="text-sm font-semibold text-gray-700 flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>City *</span>
          </Label>
          <Input
            id="city"
            type="text"
            placeholder="Beirut"
            value={customerInfo.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address" className="text-sm font-semibold text-gray-700 flex items-center space-x-1">
            <Home className="h-4 w-4" />
            <span>Address *</span>
          </Label>
          <Input
            id="address"
            type="text"
            placeholder="Lebanon"
            value={customerInfo.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="street" className="text-sm font-semibold text-gray-700">
            Street
          </Label>
          <Input
            id="street"
            type="text"
            placeholder="Street name"
            value={customerInfo.street}
            onChange={(e) => handleInputChange('street', e.target.value)}
            className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="building" className="text-sm font-semibold text-gray-700 flex items-center space-x-1">
              <Building className="h-4 w-4" />
              <span>Building</span>
            </Label>
            <Input
              id="building"
              type="text"
              placeholder="Building name"
              value={customerInfo.building}
              onChange={(e) => handleInputChange('building', e.target.value)}
              className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="floor" className="text-sm font-semibold text-gray-700">
              Floor
            </Label>
            <Input
              id="floor"
              type="text"
              placeholder="Floor number"
              value={customerInfo.floor}
              onChange={(e) => handleInputChange('floor', e.target.value)}
              className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
