import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Trophy } from "lucide-react";

const Footer = () => {
  const whatsappLinks = [
    {
      icon: Users,
      label: "WhatsApp Community",
      url: "https://chat.whatsapp.com/community-link",
      description: "Join our general community"
    },
    {
      icon: Trophy,
      label: "Football Group",
      url: "https://chat.whatsapp.com/football-group",
      description: "Football training updates"
    },
    {
      icon: MessageCircle,
      label: "Padel Group",
      url: "https://chat.whatsapp.com/padel-group",
      description: "Padel training updates"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Academy Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">The Comeback Club Academy</h3>
            <p className="text-primary-foreground/80">
              Professional Football and Padel training for adults. Join our community and elevate your game.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="/football" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Football Training
              </a>
              <a href="/padel" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Padel Training
              </a>
              <a href="/coaches" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Our Coaches
              </a>
              <a href="/schedule" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Schedule
              </a>
            </div>
          </div>

          {/* WhatsApp Groups */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Join Our WhatsApp Groups</h3>
            <div className="space-y-3">
              {whatsappLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="default"
                  size="sm"
                  className="w-full justify-start"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-4 w-4 mr-2" />
                    <div className="text-left">
                      <div className="font-medium">{link.label}</div>
                      <div className="text-xs opacity-80">{link.description}</div>
                    </div>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 The Comeback Club Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;