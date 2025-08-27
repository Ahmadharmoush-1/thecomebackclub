import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { ArrowRight, Users, Trophy, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Index = () => {
  const features = [
    {
      icon: Trophy,
      title: "Professional Training",
      description: "Expert coaching for Football and Padel with proven methodologies"
    },
    {
      icon: Users,
      title: "Adults Only",
      description: "Specialized programs designed specifically for adult learners"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Multiple locations and time slots to fit your busy lifestyle"
    },
    {
      icon: Star,
      title: "Community Focus",
      description: "Join a vibrant community of sports enthusiasts and improve together"
    }
  ];

  const programs = [
    {
      title: "Football Training",
      description: "Professional football coaching across 3 locations with flexible packages",
      image: "/placeholder-football.jpg",
      href: "/football",
      gradient: "from-yellow-bright to-yellow-glow"
    },
    {
      title: "Padel Training",
      description: "Training, fun drills, and games for men and women",
      image: "/placeholder-padel.jpg", 
      href: "/padel",
      gradient: "from-accent to-yellow-light"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="flex justify-center mb-8">
              <img src={logo} alt="The Comeback Club Academy" className="h-24 w-24 animate-glow-pulse" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              The Comeback Club
              <span className="block text-accent">Academy</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Professional Football & Padel Training for Adults Only
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Join our community and elevate your game with expert coaching, flexible schedules, and a supportive environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/football">
                  Football Training
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/padel">
                  Padel Training
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our professional approach to adult sports training
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-accent/10 p-3 rounded-full w-fit mb-4">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Training Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our specialized programs designed for adult athletes
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className={`h-48 bg-gradient-to-br ${program.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{program.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardDescription className="text-base mb-6">
                    {program.description}
                  </CardDescription>
                  <Button variant="default"  className="w-full" asChild>
                    <Link to={program.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Make Your Comeback?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join The Comeback Club Academy today and start your journey to better fitness and skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default"  size="lg" asChild>
              <Link to="/schedule">View Schedule</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="https://chat.whatsapp.com/community-link" target="_blank" rel="noopener noreferrer">
                Join WhatsApp Community
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;