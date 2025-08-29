import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import TestimonialsSection from "@/components/TestimonialsSection";
import { MapPin, Clock, DollarSign, Phone, Gamepad2, Target, Trophy } from "lucide-react";

const Padel = () => {
  const locations = [
    {
      name: "Premium Padel Center",
      address: "Beirut Central District, Lebanon",
      schedule: "Monday, Wednesday, Friday: 8:00 PM - 9:30 PM",
      features: ["Professional Courts", "Equipment Available", "Changing Rooms"]
    },
    {
      name: "Elite Padel Club",
      address: "Achrafieh District, Beirut, Lebanon",
      schedule: "Tuesday, Thursday: 7:30 PM - 9:00 PM",
      features: ["Outdoor Courts", "Floodlights", "Parking Available"]
    }
  ];

  const sessionTypes = [
    {
      icon: Target,
      title: "Training Sessions",
      description: "Technical skills development, footwork, and strategy"
    },
    {
      icon: Gamepad2,
      title: "Fun Drills",
      description: "Engaging exercises to improve your game while having fun"
    },
    {
      icon: Trophy,
      title: "Games & Matches",
      description: "Competitive matches and tournaments for all skill levels"
    }
  ];

  const packages = [
    {
      name: "Single Session",
      price: "$30",
      sessions: 1,
      description: "Try our padel program",
      duration: "1.5 hours"
    },
    {
      name: "4 Sessions Package",
      price: "$100",
      sessions: 4,
      description: "Perfect for beginners",
      duration: "1.5 hours each",
      popular: true,
      savings: "Save $20"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      {/* Padel Training Program with Video Background */}
 <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/padel.mp4" type="video/mp4" />
  </video>

  {/* Overlay pattern to darken video */}
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>

  {/* Foreground content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
    <div className="text-center space-y-8 animate-fade-in">
      <div className="flex justify-center mb-8">
        {/* <img src={logo} alt="The Comeback Club Academy" className="h-24 w-24 animate-glow-pulse rounded-full" /> */}
      </div>
      <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
        The Comeback Club
        <span className="block text-accent">Academy</span>
      </h1>
      <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
         Padel Training for Adults Only
      </p>
      <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
        Join our community and elevate your game with expert coaching, flexible schedules, and a supportive environment.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
      </div>
    </div>
  </div>
</section>

      {/* Session Types */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive padel training designed for adults
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sessionTypes.map((session, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit mb-4">
                    <session.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{session.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {session.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Training Locations
            </h2>
            <p className="text-lg text-muted-foreground">
              State-of-the-art facilities for optimal training
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Facilities:</p>
                      <div className="flex flex-wrap gap-2">
                        {location.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button variant="default" className="w-full hover-scale" asChild>
                      <a href="https://wa.me/+9611234567" target="_blank" rel="noopener noreferrer">
                        <Phone className="h-4 w-4 mr-2" />
                        Register for This Location
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Training Packages
            </h2>
            <p className="text-lg text-muted-foreground">
              Affordable pricing for quality padel training
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-card transition-all duration-500 hover:-translate-y-2 animate-slide-up ${
                  pkg.popular ? 'border-accent shadow-glow animate-glow scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-bounce-in">
                    <span className="bg-accent text-accent-foreground px-3 py-1 text-sm font-medium rounded-full">
                      Best Value
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="flex items-center justify-center gap-1">
                    <DollarSign className="h-6 w-6 text-accent" />
                    <span className="text-4xl font-bold text-accent">{pkg.price.replace('$', '')}</span>
                  </div>
                  <CardDescription className="text-base">
                    {pkg.sessions} sessions • {pkg.duration}
                  </CardDescription>
                  {pkg.savings && (
                    <div className="text-green-600 font-medium text-sm">
                      {pkg.savings}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-muted-foreground">{pkg.description}</p>
                  <Button 
                    variant={pkg.popular ? "default" : "secondary"} 
                    size="lg"
                    className="w-full hover-scale"
                    asChild
                  >
                    <a href="https://wa.me/+9611234567" target="_blank" rel="noopener noreferrer">
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
      <section className="py-20 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Payment Methods</h2>
          <p className="text-muted-foreground mb-8">We accept multiple payment options for your convenience</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Cash", "OMT", "Pay", "Bank Audi"].map((method, index) => (
              <Card key={method} className="p-6 hover:shadow-card transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-0">
                  <p className="font-medium text-foreground">{method}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Start Playing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our padel community and improve your skills with professional coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <a href="https://wa.me/+9611234567" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="https://chat.whatsapp.com/padel-group" target="_blank" rel="noopener noreferrer">
                Join Padel WhatsApp Group
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Padel;