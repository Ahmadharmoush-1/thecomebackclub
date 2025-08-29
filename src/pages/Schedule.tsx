import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Clock, MapPin, Calendar, Phone } from "lucide-react";

const Schedule = () => {
  const schedule = [
    {
      day: "Monday",
      sessions: [
        {
          time: "7:00 PM - 8:30 PM",
          sport: "Football",
          location: "Downtown Sports Complex",
          coach: "name",
          level: "All Levels"
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
          coach: "name",
          level: "Intermediate"
        },
        {
          time: "7:30 PM - 9:00 PM",
          sport: "Padel",
          location: "Elite Padel Club",
          coach: "name",
          level: "All Levels"
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
          level: "All Levels"
        },
        {
          time: "8:00 PM - 9:30 PM",
          sport: "Padel",
          location: "Premium Padel Center",
          coach: "Layla Mansour",
          level: "Beginner"
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
          level: "Advanced"
        },
        {
          time: "7:30 PM - 9:00 PM",
          sport: "Padel",
          location: "Elite Padel Club",
          coach: "Maria Rodriguez",
          level: "Intermediate"
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
          level: "All Levels"
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
          level: "All Levels"
        },
        {
          time: "10:00 AM - 11:30 AM",
          sport: "Padel",
          location: "Premium Padel Center",
          coach: "Layla Mansour",
          level: "Women Only"
        }
      ]
    }
  ];

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

                        <div className="flex gap-2">
                          <Button variant="default" className="flex-1" asChild>
                            <a href="https://wa.me/+96178841832" target="_blank" rel="noopener noreferrer">
                              <Phone className="h-4 w-4 mr-2" />
                              Reserve Spot
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
    </Layout>
  );
};

export default Schedule;
