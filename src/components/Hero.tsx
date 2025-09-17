import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Heart, Award } from 'lucide-react';

const heroImage = '/poza_interior_cabinet.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero z-0" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Zâmbetul tău, <br />
              <span className="text-primary">prioritatea</span> noastră
            </h1>
            
            <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
              Bine ai venit la REMARC dent! Oferim servicii stomatologice complete 
              într-un mediu modern și prietenos. Echipa noastră de specialiști 
              este dedicată sănătății și frumuseții zâmbetului tău.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToContact}
                className="group"
              >
                Programează-te acum
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Vezi serviciile
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-inter text-sm text-muted-foreground">Tehnologie modernă</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent" />
                <span className="font-inter text-sm text-muted-foreground">Îngrijire personalizată</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-inter text-sm text-muted-foreground">15+ ani experiență</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage}
                alt="Cabinet stomatologic modern REMARC dent" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-xl p-6 animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold text-xl">✓</span>
                </div>
                <div>
                  <p className="font-poppins font-semibold text-foreground">5000+</p>
                  <p className="font-inter text-sm text-muted-foreground">Pacienți mulțumiți</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
