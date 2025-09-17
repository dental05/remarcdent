import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import doctor1 from '@/assets/doctor-1.jpg';
import doctor2 from '@/assets/doctor-2.jpg';
import doctor3 from '@/assets/doctor-3.jpg';
import doctor4 from '@/assets/doctor-4.jpg';

const Team = () => {
  const team = [
    {
      name: "Dr. Alexandru Popescu",
      role: "Medic Primar Stomatolog",
      specialization: "Implantologie & Chirurgie",
      experience: "18 ani experiență",
      image: doctor1,
      description: "Specialist în implantologie și chirurgie orală complexă, cu peste 3000 de implanturi realizate cu succes."
    },
    {
      name: "Dr. Maria Ionescu",
      role: "Medic Specialist Ortodont",
      specialization: "Ortodonție & Invisalign",
      experience: "15 ani experiență",
      image: doctor2,
      description: "Expertă în ortodonție modernă, certificată Invisalign Provider, specializată în tratamente pentru adulți și copii."
    },
    {
      name: "Dr. Andrei Gheorghe",
      role: "Medic Specialist",
      specialization: "Endodonție & Estetică",
      experience: "12 ani experiență",
      image: doctor3,
      description: "Pasionat de stomatologia estetică și tratamente endodontice complexe sub microscop."
    },
    {
      name: "Dr. Elena Dumitrescu",
      role: "Medic Specialist Pedodont",
      specialization: "Pedodonție",
      experience: "10 ani experiență",
      image: doctor4,
      description: "Dedicată îngrijirii dentare a copiilor, creând o experiență pozitivă și relaxantă pentru cei mici."
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
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
              <p className="font-poppins text-3xl font-bold mb-2">4</p>
              <p className="font-inter text-sm opacity-90">Medici Specialiști</p>
            </div>
            <div>
              <p className="font-poppins text-3xl font-bold mb-2">55+</p>
              <p className="font-inter text-sm opacity-90">Ani Experiență Cumulată</p>
            </div>
            <div>
              <p className="font-poppins text-3xl font-bold mb-2">10k+</p>
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