import React from 'react';
import { Card } from '@/components/ui/card';
import { orderedCategories, teamMembers, type TeamMember } from '@/data/team';

const categoryLabels: Record<TeamMember['category'], string> = {
  Medici: 'Medici stomatologi',
  'Tehnicieni dentari': 'Tehnicieni dentari',
  'Asistenti medicali': 'Asistenți medicali',
  'Management & suport': 'Management și suport',
};

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

const Team = () => {
  const groupedTeam = orderedCategories
    .map((category) => ({
      category,
      members: teamMembers.filter((member) => member.category === category),
    }))
    .filter(({ members }) => members.length > 0);

  const totalMembers = teamMembers.length;
  const medicsCount = teamMembers.filter((member) => member.category === 'Medici').length;
  const techniciansCount = teamMembers.filter((member) => member.category === 'Tehnicieni dentari').length;
  const assistantsCount = teamMembers.filter((member) => member.category === 'Asistenti medicali').length;
  const supportCount = teamMembers.filter((member) => member.category === 'Management & suport').length;

  return (
    <section id="team" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up max-w-3xl mx-auto">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
            Echipa REMARC DENT
          </h2>
          <p className="font-inter text-lg text-muted-foreground">
            Suntem o echipă multidisciplinară de medici stomatologi, tehnicieni, asistenți și profesioniști în management pregătiți
            să ofere îngrijire completă, empatică și modernă fiecărui pacient.
          </p>
        </div>

        {groupedTeam.map(({ category, members }) => (
          <div key={category} className="mb-16 last:mb-0">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <h3 className="font-poppins text-2xl font-semibold text-foreground">
                  {categoryLabels[category]}
                </h3>
                <p className="font-inter text-sm text-muted-foreground mt-1">
                  {members.length} {members.length === 1 ? 'membru' : 'membri'} în echipa noastră
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {members.map((member, index) => (
                <Card
                  key={member.id}
                  className="group overflow-hidden bg-background hover:shadow-xl transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="relative h-64 md:h-72 bg-muted">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/15 via-accent/20 to-primary/10">
                        <span className="font-poppins text-3xl font-semibold text-foreground/70">
                          {getInitials(member.name)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 border-t border-border/60 bg-background">
                    <h4 className="font-poppins text-lg font-semibold text-foreground mb-1">{member.name}</h4>
                    <p className="font-inter text-sm text-accent font-medium mb-2">{member.role}</p>
                    {member.details ? (
                      <p className="font-inter text-sm text-muted-foreground leading-relaxed">{member.details}</p>
                    ) : null}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
          <div className="grid gap-6 text-center sm:grid-cols-2 xl:grid-cols-4">
            <div>
              <p className="font-poppins text-3xl font-bold mb-2">{totalMembers}</p>
              <p className="font-inter text-sm opacity-90">Profesioniști dedicați</p>
            </div>
            <div>
              <p className="font-poppins text-3xl font-bold mb-2">{medicsCount}</p>
              <p className="font-inter text-sm opacity-90">Medici stomatologi</p>
            </div>
            <div>
              <p className="font-poppins text-3xl font-bold mb-2">{assistantsCount}</p>
              <p className="font-inter text-sm opacity-90">Asistenți medicali</p>
            </div>
            <div>
              <p className="font-poppins text-3xl font-bold mb-2">{techniciansCount + supportCount}</p>
              <p className="font-inter text-sm opacity-90">Tehnicieni și suport</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
