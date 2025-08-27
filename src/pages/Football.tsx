import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import AttendanceTracker from "@/components/AttendanceTracker";
import TestimonialsSection from "@/components/TestimonialsSection";
import { MapPin, Clock, DollarSign, Users, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Football = () => {
  const [attendeeName, setAttendeeName] = useState("");
  const { toast } = useToast();

  const locations = [
    {
      name: "Downtown Sports Complex",
      address: "Beirut Central District, Lebanon",
      schedule: "Monday & Wednesday: 7:00 PM - 8:30 PM",
      attendees: 18,
      maxCapacity: 20,
      coordinates: "33.8959,35.4781"
    },
    {
      name: "North Side Football Field",
      address: "Achrafieh District, Beirut, Lebanon",
      schedule: "Tuesday & Thursday: 6:30 PM - 8:00 PM", 
      attendees: 14,
      maxCapacity: 16,
      coordinates: "33.9011,35.5087"
    },
    {
      name: "West End Sports Center",
      address: "Hamra District, Beirut, Lebanon",
      schedule: "Saturday: 9:00 AM - 10:30 AM",
      attendees: 15,
      maxCapacity: 18,
      coordinates: "33.8971,35.4826"
    }
  ];

  const packages = [
    {
      name: "Single Session",
      price: "$40",
      sessions: 1,
      description: "Perfect for trying out our program"
    },
    {
      name: "4 Sessions Package",
      price: "$140",
      sessions: 4,
      description: "Great value for regular training",
      popular: true
    },
    {
      name: "8 Sessions Package", 
      price: "$260",
      sessions: 8,
      description: "Best value for serious players"
    },
    {
      name: "Monthly Unlimited",
      price: "$320",
      sessions: "Unlimited",
      description: "Train as much as you want"
    }
  ];

  const handleAddToAttendance = (locationName: string) => {
    if (!attendeeName.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your name to join the attendance list.",
        variant: "destructive"
      });
      return;
    }

    // Simulate sending to WhatsApp (Lebanese number)
    const whatsappNumber = "+96178841832"; // Lebanese WhatsApp number
    const message = `New attendance registration:\nName: ${attendeeName}\nLocation: ${locationName}\nProgram: Football Training`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Added to Attendance!",
      description: `${attendeeName} has been added to ${locationName} attendance list.`
    });
    
    setAttendeeName("");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Football Training Program
          </h1>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Professional football coaching for adults with flexible scheduling across three convenient locations.
          </p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Training Locations
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the location that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {locations.map((location, index) => (
              <div key={index} className="space-y-4">
                <Card className="hover:shadow-card transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      {location.name}
                    </CardTitle>
                    <CardDescription>{location.address}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <GoogleMapEmbed 
                      address={location.address}
                      name={location.name}
                      className="mb-4"
                    />
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {location.schedule}
                    </div>
                    <Button 
                      variant="default" 
                      className="w-full hover-scale"
                      onClick={() => handleAddToAttendance(location.name)}
                    >
                      Join This Location
                    </Button>
                  </CardContent>
                </Card>
                
                <AttendanceTracker
                  sessionName={location.name}
                  currentAttendees={location.attendees}
                  maxCapacity={location.maxCapacity}
                  location={location.address}
                  timeSlot={location.schedule}
                  sport="Football"
                  onJoinSession={() => handleAddToAttendance(location.name)}
                />
              </div>
            ))}
          </div>

          {/* Attendance Registration */}
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Join Attendance List</CardTitle>
              <CardDescription>
                Enter your name to be added to the attendance list for your chosen location
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  value={attendeeName}
                  onChange={(e) => setAttendeeName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Training Packages
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible pricing options to suit your training goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-card transition-all duration-500 hover:-translate-y-2 animate-slide-up ${
                  pkg.popular ? 'border-accent shadow-glow animate-glow' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-bounce-in">
                    <span className="bg-accent text-accent-foreground px-3 py-1 text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="flex items-center justify-center gap-1">
                    <DollarSign className="h-5 w-5 text-accent" />
                    <span className="text-3xl font-bold text-accent">{pkg.price.replace('$', '')}</span>
                  </div>
                  <CardDescription>{pkg.sessions} sessions</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>
                  <Button 
                    variant={pkg.popular ? "default" : "secondary"} 
                    className="w-full hover-scale"
                    asChild
                  >
                    <a href="https://wa.me/+96178841832" target="_blank" rel="noopener noreferrer">
                      <Phone className="h-4 w-4 mr-2" />
                      Register Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Payment Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Payment Methods</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Cash", "OMT", "Pay", "Bank Audi"].map((method, index) => (
              <Card key={method} className="p-4 hover:shadow-card transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-0">
                  <p className="font-medium text-foreground">{method}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Football;