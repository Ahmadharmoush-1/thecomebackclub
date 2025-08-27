import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ahmad Khalil",
      sport: "Football",
      rating: 5,
      text: "The coaching quality is exceptional! I've improved my technical skills significantly in just 2 months. The training sessions are well-structured and challenging.",
      beforeAfter: "Lost 15kg and improved my stamina dramatically",
      location: "Downtown Sports Complex"
    },
    {
      name: "Layla Mansour",
      sport: "Padel",
      rating: 5,
      text: "As a beginner, I was nervous about joining, but the coaches made me feel comfortable immediately. The community is amazing and very supportive.",
      beforeAfter: "From complete beginner to intermediate level in 3 months",
      location: "Premium Padel Center"
    },
    {
      name: "Omar Hassan",
      sport: "Football",
      rating: 5,
      text: "The training methodology is professional and results-oriented. I've been playing for years but learned new techniques that elevated my game.",
      beforeAfter: "Improved ball control and tactical understanding",
      location: "North Side Football Field"
    },
    {
      name: "Maria Rodriguez",
      sport: "Padel",
      rating: 5,
      text: "The facilities are top-notch and the scheduling is very flexible. Perfect for busy professionals who want to stay active and improve their skills.",
      beforeAfter: "Built confidence and made great friends",
      location: "Elite Padel Club"
    },
    {
      name: "Samer Khoury",
      sport: "Football",
      rating: 5,
      text: "I joined at 35 thinking it was too late to improve. The coaches proved me wrong! The adult-focused approach really works.",
      beforeAfter: "Regained fitness and rediscovered passion for football",
      location: "West End Sports Center"
    },
    {
      name: "Nadia Frem",
      sport: "Padel",
      rating: 5,
      text: "The women-only sessions are fantastic! Great atmosphere, professional coaching, and I've made lifelong friends through this program.",
      beforeAfter: "From zero experience to competing in local tournaments",
      location: "Premium Padel Center"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real results from real players. Discover how our coaching transforms fitness, skills, and confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-card transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <Badge 
                    variant={testimonial.sport === "Football" ? "default" : "secondary"}
                    className={testimonial.sport === "Football" ? "bg-accent text-accent-foreground" : ""}
                  >
                    {testimonial.sport}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-accent/30" />
                  <p className="text-muted-foreground pl-4 italic">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="bg-accent/10 p-3 rounded-lg border-l-4 border-accent">
                  <p className="text-sm font-medium text-foreground">Progress:</p>
                  <p className="text-sm text-muted-foreground">{testimonial.beforeAfter}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Join hundreds of satisfied players who have transformed their fitness and skills with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-accent/10 px-6 py-3 rounded-lg">
              <p className="text-2xl font-bold text-accent">200+</p>
              <p className="text-sm text-muted-foreground">Happy Players</p>
            </div>
            <div className="bg-accent/10 px-6 py-3 rounded-lg">
              <p className="text-2xl font-bold text-accent">95%</p>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="bg-accent/10 px-6 py-3 rounded-lg">
              <p className="text-2xl font-bold text-accent">3+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;