import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Team = () => {
  const team = [
    {
      name: "Dr. Daciana Marc",
      role: "Medic Primar Stomatolog",
      specialization: "Implantologie & Chirurgie",
      experience: "18 ani experiență",
      image: "/employees/daciana_marc.png",
      description: "Coordonează echipa REMARC dent și gestionează cazuri complexe de implantologie și chirurgie orală.",
      objectPosition: 'center 25%'
    },
    {
      name: "Dr. Alexandra Burz",
      role: "Medic Specialist Ortodont",
      specialization: "Ortodonție & Invisalign",
      experience: "12 ani experiență",
      image: "/employees/alexandra_burz.png",
      description: "Creează tratamente ortodontice personalizate cu aparate moderne și soluții estetice Invisalign.",
      objectPosition: 'center 10%'
    },
    {
      name: "Dr. Diana Dicu",
      role: "Medic Specialist Endodont",
      specialization: "Endodonție & Estetică",
      experience: "10 ani experiență",
      image: "/employees/dicu_diana.png",
      description: "Pasionată de tratamente endodontice realizate sub microscop și estetică dentară minim invazivă.",
      objectPosition: 'center 32%'
    },
    {
      name: "Dr. Simon Marcu",
      role: "Medic Specialist Protetică",
      specialization: "Protetică & Estetică",
      experience: "9 ani experiență",
      image: "/employees/marcu_simon.png",
      description: "Specialist în reabilitări protetice complexe și soluții estetice adaptate fiecărui zâmbet.",
      objectPosition: 'center 20%'
    }
  ];

  return (
    <section id="team" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
            Echipa Noastră
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Medici dedicați și pasionați, cu experiență vastă în toate domeniile 
            stomatologiei moderne, gata să vă ofere cea mai bună îngrijire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: member.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Experience Badge */}
                <Badge 
                  className="absolute top-4 right-4 bg-primary text-primary-foreground"
                >
                  {member.experience}
                </Badge>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-poppins text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                
                <p className="font-inter text-sm text-accent font-medium mb-2">
                  {member.role}
                </p>
                
                <p className="font-inter text-xs text-primary mb-3">
                  {member.specialization}
                </p>
                
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-poppins text-3xl font-bold mb-2">23</p>
              <p className="font-inter text-sm opacity-90">Medici Specialiști</p>
            </div>
            <div>
              <p className="font-poppins text-3xl font-bold mb-2">300+</p>
              <p className="font-inter text-sm opacity-90">Implanturi dentale anuale</p>
            </div>
            <div>
              <p className="font-poppins text-3xl font-bold mb-2">10.000+</p>
              <p className="font-inter text-sm opacity-90">Tratamente Realizate</p>
            </div>
            <div>
              <p className="font-poppins text-3xl font-bold mb-2">100%</p>
              <p className="font-inter text-sm opacity-90">Pacienți Satisfăcuți</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
