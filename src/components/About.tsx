import React from 'react';
import { CheckCircle, Users, Stethoscope, GraduationCap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Echipament de ultimă generație",
      description: "Investim constant în tehnologie modernă pentru rezultate superioare"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Echipă experimentată",
      description: "Medici specialiști cu peste 15 ani de experiență în stomatologie"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Formare continuă",
      description: "Participăm regulat la cursuri și conferințe internaționale"
    }
  ];

  const values = [
    "Tratamente personalizate pentru fiecare pacient",
    "Comunicare transparentă și onestă",
    "Prețuri corecte și planuri de plată flexibile",
    "Sterilizare și igienă la cele mai înalte standarde",
    "Programări flexibile adaptate programului tău",
    "Atmosferă relaxantă și prietenoasă"
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
            Despre <span className="text-primary">REMARC dent</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            De peste 15 ani, oferim servicii stomatologice de excelență, 
            combinând expertiza profesională cu tehnologia modernă și grija pentru pacienți.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <h3 className="font-poppins text-2xl font-semibold text-foreground mb-6">
              Experiență și profesionalism în slujba sănătății tale
            </h3>
            
            <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
              La REMARC dent, credem că fiecare zâmbet este unic și merită cea mai bună 
              îngrijire posibilă. Echipa noastră de specialiști combină expertiza medicală 
              cu o abordare caldă și prietenoasă, pentru a face fiecare vizită cât mai 
              plăcută și eficientă.
            </p>

            <p className="font-inter text-muted-foreground mb-8 leading-relaxed">
              Investim continuu în echipamente de ultimă generație și în formarea 
              profesională a echipei noastre, pentru a vă oferi tratamente la cele 
              mai înalte standarde internaționale.
            </p>

            {/* Values List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-inter text-sm text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Cards */}
          <div className="space-y-6 animate-fade-up">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-lg text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="font-inter text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats Card */}
            <div className="bg-gradient-primary text-primary-foreground rounded-xl p-8 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="rounded-lg bg-primary-foreground/10 px-4 py-5 sm:px-6">
                  <p className="font-poppins text-2xl sm:text-3xl font-bold">15+</p>
                  <p className="font-inter text-xs sm:text-sm opacity-90 mt-1">Ani experiență</p>
                </div>
                <div className="rounded-lg bg-primary-foreground/10 px-4 py-5 sm:px-6">
                  <p className="font-poppins text-2xl sm:text-3xl font-bold">5000+</p>
                  <p className="font-inter text-xs sm:text-sm opacity-90 mt-1">Pacienți</p>
                </div>
                <div className="rounded-lg bg-primary-foreground/10 px-4 py-5 sm:px-6">
                  <p className="font-poppins text-2xl sm:text-3xl font-bold">100%</p>
                  <p className="font-inter text-xs sm:text-sm opacity-90 mt-1">Dedicare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
