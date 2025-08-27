import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Clock, MapPin, Users, Calendar, Phone } from "lucide-react";

const Schedule = () => {
  const schedule = [
    {
      day: "Monday",
      sessions: [
        {
          time: "7:00 PM - 8:30 PM",
          sport: "Football",
          location: "Downtown Sports Complex",
          coach: "Ahmed Hassan",
          level: "All Levels",
          available: 8,
          total: 20
        }
      ]
    },
    {
      day: "Tuesday", 
      sessions: [
        {
          time: "6:30 PM - 8:00 PM",
          sport: "Football", 
          location: "North Side Football Field",
          coach: "Omar Khalil",
          level: "Intermediate",
          available: 12,
          total: 16
        },
        {
          time: "7:30 PM - 9:00 PM",
          sport: "Padel",
          location: "Elite Padel Club",
          coach: "Maria Rodriguez",
          level: "All Levels",
          available: 6,
          total: 8
        }
      ]
    },
    {
      day: "Wednesday",
      sessions: [
        {
          time: "7:00 PM - 8:30 PM",
          sport: "Football",
          location: "Downtown Sports Complex", 
          coach: "Ahmed Hassan",
          level: "All Levels",
          available: 5,
          total: 20
        },
        {
          time: "8:00 PM - 9:30 PM",
          sport: "Padel",
          location: "Premium Padel Center",
          coach: "Layla Mansour",
          level: "Beginner",
          available: 4,
          total: 6
        }
      ]
    },
    {
      day: "Thursday",
      sessions: [
        {
          time: "6:30 PM - 8:00 PM",
          sport: "Football",
          location: "North Side Football Field",
          coach: "Omar Khalil",
          level: "Advanced",
          available: 3,
          total: 12
        },
        {
          time: "7:30 PM - 9:00 PM",
          sport: "Padel",
          location: "Elite Padel Club",
          coach: "Maria Rodriguez",
          level: "Intermediate",
          available: 2,
          total: 8
        }
      ]
    },
    {
      day: "Friday",
      sessions: [
        {
          time: "8:00 PM - 9:30 PM",
          sport: "Padel",
          location: "Premium Padel Center",
          coach: "Maria Rodriguez",
          level: "All Levels",
          available: 7,
          total: 8
        }
      ]
    },
    {
      day: "Saturday",
      sessions: [
        {
          time: "9:00 AM - 10:30 AM",
          sport: "Football",
          location: "West End Sports Center",
          coach: "Ahmed Hassan",
          level: "All Levels",
          available: 4,
          total: 18
        },
        {
          time: "10:00 AM - 11:30 AM",
          sport: "Padel",
          location: "Premium Padel Center",
          coach: "Layla Mansour",
          level: "Women Only",
          available: 6,
          total: 8
        }
      ]
    }
  ];

  const getAvailabilityColor = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (percentage > 50) return "text-green-600";
    if (percentage > 20) return "text-yellow-600";
    return "text-red-600";
  };

  const getAvailabilityText = (available: number, total: number) => {
    if (available === 0) return "Full";
    if (available <= 3) return "Almost Full";
    return "Available";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Training Schedule
          </h1>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Find the perfect training session that fits your schedule. All sessions are designed for adults only.
          </p>
        </div>
      </section>

      {/* Schedule Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Weekly Schedule
            </h2>
            <p className="text-lg text-muted-foreground">
              Updated in real-time • Book your spot today
            </p>
          </div>

          <div className="space-y-8">
            {schedule.map((day, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-bold text-foreground">{day.day}</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {day.sessions.map((session, sessionIndex) => (
                    <Card key={sessionIndex} className="hover:shadow-card transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              <Badge 
                                variant={session.sport === "Football" ? "default" : "secondary"}
                                className={session.sport === "Football" ? "bg-accent text-accent-foreground" : ""}
                              >
                                {session.sport}
                              </Badge>
                              <span className="text-lg">{session.level}</span>
                            </CardTitle>
                            <CardDescription className="mt-2">
                              Coach: {session.coach}
                            </CardDescription>
                          </div>
                          <Badge 
                            variant="outline" 
                            className={getAvailabilityColor(session.available, session.total)}
                          >
                            {getAvailabilityText(session.available, session.total)}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {session.time}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {session.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4" />
                          <span className={getAvailabilityColor(session.available, session.total)}>
                            {session.available} spots available
                          </span>
                          <span className="text-muted-foreground">
                            / {session.total} total
                          </span>
                        </div>
                        
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-accent h-2 rounded-full transition-all duration-300"
                            style={{ 
                              width: `${((session.total - session.available) / session.total) * 100}%` 
                            }}
                          ></div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button 
                            variant="default" 
                            className="flex-1"
                            disabled={session.available === 0}
                            asChild
                          >
                            <a href="https://wa.me/+96178841832" target="_blank" rel="noopener noreferrer">
                              <Phone className="h-4 w-4 mr-2" />
                              {session.available === 0 ? "Session Full" : "Reserve Spot"}
                            </a>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a 
                              href={`//${session.sport.toLowerCase()}`}
                              className="whitespace-nowrap"
                            >
                              Learn More
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {index < schedule.length - 1 && (
                  <div className="border-t border-border mt-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Important Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Booking Policy</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Reserve your spot via WhatsApp</li>
                    <li>• 24-hour cancellation policy</li>
                    <li>• Payment required to confirm booking</li>
                    <li>• First-time participants get a free trial</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What to Bring</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Comfortable athletic wear</li>
                    <li>• Appropriate footwear</li>
                    <li>• Water bottle</li>
                    <li>• Towel (recommended)</li>
                  </ul>
                </div>
              </div>
              <div className="text-center pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Schedule subject to change due to weather conditions or facility availability. 
                  Updates will be posted on our WhatsApp groups.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Have Questions About Our Schedule?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us directly or join our WhatsApp community for instant updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <a href="https://wa.me/+96178841832" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4 mr-2" />
                Contact Us
              </a>
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

export default Schedule;