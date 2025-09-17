import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Smile, 
  Baby, 
  Sparkles,
  Shield,
  Zap,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Stomatologie Generală",
      description: "Tratamente complete pentru sănătatea orală: obturații, tratamente de canal, extracții, detartraje.",
      features: ["Consultații complete", "Obturații estetice", "Tratamente endodontice"],
      color: "primary"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Implantologie",
      description: "Implanturi dentare de ultimă generație pentru înlocuirea dinților lipsă cu rezultate naturale.",
      features: ["Implanturi premium", "Restaurări complete", "Tehnologie 3D"],
      color: "accent"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Ortodonție",
      description: "Aparate dentare moderne pentru adulți și copii, inclusiv opțiuni invizibile.",
      features: ["Aparate metalice", "Aparate ceramice", "Invisalign"],
      color: "primary"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Estetică Dentară",
      description: "Fațete, albire profesională și alte tratamente pentru un zâmbet perfect.",
      features: ["Fațete ceramice", "Albire ZOOM", "Bonding estetic"],
      color: "accent"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Profilaxie",
      description: "Prevenție și igienizare profesională pentru menținerea sănătății orale.",
      features: ["Detartraj ultrasonic", "Periaj profesional", "Fluoridare"],
      color: "primary"
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Pedodonție",
      description: "Tratamente specializate pentru copii într-un mediu prietenos și relaxant.",
      features: ["Sigilări", "Fluoridări", "Educație dentară"],
      color: "accent"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serviciile Noastre
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferim o gamă completă de servicii stomatologice, adaptate nevoilor 
            fiecărui pacient, folosind cele mai moderne tehnologii și materiale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                service.color === 'primary' 
                  ? 'bg-primary/10 text-primary' 
                  : 'bg-accent/10 text-accent'
              }`}>
                {service.icon}
              </div>
              
              <h3 className="font-poppins text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="font-inter text-muted-foreground mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      service.color === 'primary' ? 'bg-primary' : 'bg-accent'
                    }`} />
                    <span className="font-inter text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={scrollToContact}
                className="font-inter text-sm font-medium text-primary hover:text-accent transition-colors flex items-center gap-1 group-hover:gap-2"
              >
                Află mai multe
                <ArrowRight className="w-4 h-4 transition-all" />
              </button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToContact}
          >
            Programează o consultație
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;