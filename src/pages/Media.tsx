import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Play, Calendar, Eye, Users, Trophy, Target } from "lucide-react";

const Media = () => {
  const videos = [
    {
      id: 1,
      title: "Football Training Highlights - Week 1",
      description: "Amazing skills development session with our football team",
      thumbnail: "/video-thumb-1.jpg",
      duration: "3:45",
      views: "1.2K",
      date: "2024-01-15",
      category: "Football",
      featured: true
    },
    {
      id: 2,
      title: "Padel Tournament Finals",
      description: "Intense padel matches from our monthly tournament",
      thumbnail: "/video-thumb-2.jpg", 
      duration: "8:20",
      views: "856",
      date: "2024-01-10",
      category: "Padel"
    },
    {
      id: 3,
      title: "Coach Ahmed's Training Philosophy",
      description: "Learn about our unique approach to adult football training",
      thumbnail: "/video-thumb-3.jpg",
      duration: "5:15", 
      views: "2.1K",
      date: "2024-01-08",
      category: "Training Tips"
    },
    {
      id: 4,
      title: "Beginner's Padel Success Story",
      description: "Follow Maria's journey from beginner to tournament player",
      thumbnail: "/video-thumb-4.jpg",
      duration: "4:30",
      views: "1.5K", 
      date: "2024-01-05",
      category: "Success Stories"
    },
    {
      id: 5,
      title: "Football Fitness Drills",
      description: "High-intensity training session focusing on stamina and agility",
      thumbnail: "/video-thumb-5.jpg",
      duration: "6:10",
      views: "934",
      date: "2024-01-03",
      category: "Football"
    },
    {
      id: 6,
      title: "Padel Technique Masterclass",
      description: "Advanced padel techniques with coach Maria Rodriguez",
      thumbnail: "/video-thumb-6.jpg",
      duration: "7:45",
      views: "1.8K",
      date: "2024-01-01",
      category: "Padel"
    }
  ];

  const categories = ["All", "Football", "Padel", "Training Tips", "Success Stories"];

  const highlights = [
    {
      icon: Trophy,
      title: "Monthly Tournaments",
      description: "Watch highlights from our competitive monthly tournaments"
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "See the progression of our students through training videos"
    },
    {
      icon: Users,
      title: "Community Events",
      description: "Behind-the-scenes content from our academy events"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Media Gallery
          </h1>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Watch training sessions, tournaments, and success stories from The Comeback Club Academy.
          </p>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit mb-4">
                    <highlight.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Training Videos & Highlights
            </h2>
            <p className="text-lg text-muted-foreground">
              Get inspired by our community and training excellence
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Video */}
          {videos.find(video => video.featured) && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Featured Video</h3>
              <Card className="overflow-hidden max-w-4xl mx-auto hover:shadow-glow transition-all duration-300">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center">
                    <div className="text-center text-accent">
                      <Play className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">
                        {videos.find(video => video.featured)?.title}
                      </p>
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {videos.find(video => video.featured)?.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardDescription className="text-base">
                    {videos.find(video => video.featured)?.description}
                  </CardDescription>
                  <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {videos.find(video => video.featured)?.views} views
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {videos.find(video => video.featured)?.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.filter(video => !video.featured).map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center">
                    <Play className="h-12 w-12 text-accent" />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="absolute top-2 left-2 text-xs"
                  >
                    {video.category}
                  </Badge>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 line-clamp-2">
                    {video.title}
                  </CardTitle>
                  <CardDescription className="text-sm mb-3 line-clamp-2">
                    {video.description}
                  </CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {video.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(video.date).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Your Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Share Your Training Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We love featuring our students' progress and achievements. Share your training videos with us!
          </p>
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What We're Looking For:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Training session highlights</li>
                    <li>• Skill progression videos</li>
                    <li>• Tournament moments</li>
                    <li>• Testimonials and reviews</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">How to Submit:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Send via WhatsApp</li>
                    <li>• Tag us on Instagram</li>
                    <li>• Email your content</li>
                    <li>• Share during training sessions</li>
                  </ul>
                </div>
              </div>
              <Button variant="default" size="lg" asChild>
                <a href="https://wa.me/+96178841832" target="_blank" rel="noopener noreferrer">
                  Submit Your Content
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our academy and become part of our media highlights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <a href="/football">Start Football Training</a>
            </Button>
            <Button variant="default" size="lg" asChild>
              <a href="/padel">Start Padel Training</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;