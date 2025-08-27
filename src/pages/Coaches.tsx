import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Award, Star, Trophy, Users } from "lucide-react";

const Coaches = () => {
  const coaches = [
    {
      name: "Ahmed Hassan",
      role: "Head Football Coach",
      specialties: ["Tactical Training", "Youth Development", "Advanced Techniques"],
      experience: "15+ years",
      achievements: [
        "Former Professional Player - Lebanese Premier League",
        "UEFA B License Certified",
        "Coached 3 Championship Teams",
        "Youth National Team Assistant Coach"
      ],
      image: "/coach-ahmed.jpg",
      bio: "Ahmed brings over 15 years of professional football experience to The Comeback Club Academy. His passion for developing adult players and tactical expertise has helped hundreds of players improve their game."
    },
    {
      name: "Maria Rodriguez",
      role: "Senior Padel Coach",
      specialties: ["Technical Skills", "Mental Training", "Competition Prep"],
      experience: "12+ years",
      achievements: [
        "Former Top 50 World Ranking",
        "International Padel Federation Coach",
        "5x National Championship Winner",
        "Specialist in Adult Training Programs"
      ],
      image: "/coach-maria.jpg",
      bio: "Maria is a former professional padel player who has dedicated her career to teaching adults the beautiful game of padel. Her technical expertise and encouraging approach makes learning enjoyable for all skill levels."
    },
    {
      name: "Omar Khalil",
      role: "Football Skills Coach",
      specialties: ["Ball Control", "Shooting", "Speed Training"],
      experience: "8+ years",
      achievements: [
        "Professional Skills Development Specialist",
        "Former Semi-Professional Player",
        "Speed & Agility Training Certified",
        "Adult Fitness Training Expert"
      ],
      image: "/coach-omar.jpg",
      bio: "Omar specializes in individual skill development and conditioning for adult players. His innovative training methods focus on improving technical abilities while maintaining fitness and injury prevention."
    },
    {
      name: "Layla Mansour",
      role: "Padel Fitness Coach",
      specialties: ["Fitness Training", "Injury Prevention", "Beginner Programs"],
      experience: "10+ years",
      achievements: [
        "Certified Sports Physiotherapist",
        "Padel Fitness Specialist",
        "Adult Rehabilitation Expert",
        "Women's Training Program Developer"
      ],
      image: "/coach-layla.jpg",
      bio: "Layla combines her background in sports physiotherapy with padel coaching to create safe, effective training programs. She specializes in helping beginners build confidence and strength in padel."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Meet Our Coaches
          </h1>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Professional, experienced coaches dedicated to helping adults achieve their sporting goals.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"> 
            <div className="space-y-2">
              <div className="flex justify-center">
                <Trophy className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground">45+</div>
              <div className="text-sm text-muted-foreground">Years Combined Experience</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground">20+</div>
              <div className="text-sm text-muted-foreground">Professional Certifications</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Students Trained</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground">4.9</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Learn from the best in the business
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coaches.map((coach, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-48 md:h-full bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center">
                      <div className="text-6xl text-accent/60">👤</div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{coach.name}</CardTitle>
                          <CardDescription className="text-base font-medium text-accent">
                            {coach.role}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-accent/10 text-accent">
                          {coach.experience}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {coach.bio}
                      </p>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {coach.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {coach.achievements.slice(0, 3).map((achievement, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Star className="h-3 w-3 text-accent flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Our Training Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Adult-Focused</h3>
              <p className="text-muted-foreground">
                Training methods specifically designed for adult learners, considering work-life balance and physical capabilities.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto">
                <Trophy className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Results-Driven</h3>
              <p className="text-muted-foreground">
                Structured programs with clear progression paths to help you achieve your personal sporting goals.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Professional Excellence</h3>
              <p className="text-muted-foreground">
                Continuous learning and certification ensure our coaches stay at the forefront of sports training.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Coaches;