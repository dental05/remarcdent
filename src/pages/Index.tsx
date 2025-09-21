import Hero from '@/components/Hero';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Info, Stethoscope, Users, CalendarClock, Sparkles, Shield, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

const pageHighlights = [
  {
    title: 'Despre REMARC dent',
    description:
      'Află povestea clinicii, filosofia noastră și modul în care îmbinăm tehnologia cu grija pentru pacienți.',
    to: '/despre',
    accentClasses: 'bg-primary/10 text-primary',
    Icon: Info,
  },
  {
    title: 'Serviciile noastre',
    description:
      'Descoperă gama completă de tratamente stomatologice, de la profilaxie la reabilitări complexe.',
    to: '/servicii',
    accentClasses: 'bg-accent/10 text-accent',
    Icon: Stethoscope,
  },
  {
    title: 'Lista de tarife',
    description:
      'Verifică prețurile actualizate pentru toate procedurile și planifică următoarea vizită în funcție de buget.',
    to: '/lista-preturi',
    accentClasses: 'bg-primary/10 text-primary',
    Icon: Info,
  },
  {
    title: 'Echipa medicală',
    description:
      'Cunoaște specialiștii REMARC dent și experiența pe care o pun în slujba zâmbetului tău.',
    to: '/echipa',
    accentClasses: 'bg-primary/10 text-primary',
    Icon: Users,
  },
  {
    title: 'Contact & programări',
    description:
      'Vezi programul complet, modalitățile de contact și trimite o cerere de programare online.',
    to: '/contact',
    accentClasses: 'bg-accent/10 text-accent',
    Icon: CalendarClock,
  },
];

const Index = () => {
  return (
    <div className="bg-background">
      <Hero />

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
              Descoperă clinica REMARC dent
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Navighează prin paginile dedicate pentru a găsi rapid informațiile de care ai nevoie despre
              serviciile, echipa și programările noastre.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <Card className="p-8 bg-gradient-to-br from-primary/10 via-background to-background border-0 shadow-lg animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
                <span className="font-inter uppercase text-xs tracking-[0.3em] text-primary">Experiență premium</span>
              </div>
              <h3 className="font-poppins text-3xl font-semibold text-foreground mb-4">
                Totul pentru confortul și sănătatea zâmbetului tău
              </h3>
              <p className="font-inter text-base text-muted-foreground leading-relaxed mb-6">
                Clinica REMARC dent îmbină expertiza unei echipe multidisciplinare cu tehnologie de ultimă generație,
                pentru a oferi tratamente personalizate, predictibile și o experiență relaxată la fiecare vizită.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-background/70 border border-border/60 px-5 py-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <p className="font-poppins text-sm font-semibold text-foreground">Tehnologie digitală completă</p>
                  </div>
                  <p className="font-inter text-sm text-muted-foreground">
                    Scanner intraoral, radiologie digitală și planificare asistată pentru tratamente rapide și precise.
                  </p>
                </div>
                <div className="rounded-xl bg-background/70 border border-border/60 px-5 py-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Smile className="w-5 h-5 text-accent" />
                    <p className="font-poppins text-sm font-semibold text-foreground">Îngrijire multidisciplinară</p>
                  </div>
                  <p className="font-inter text-sm text-muted-foreground">
                    Echipe dedicate pentru implantologie, ortodonție, estetică și tratamente pediatric.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">
              {pageHighlights.map(({ title, description, to, accentClasses, Icon }, index) => (
                <Card
                  key={title}
                  className="p-6 bg-background shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-up"
                  style={{ animationDelay: `${150 + index * 80}ms` }}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${accentClasses}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-poppins text-lg font-semibold text-foreground mb-2">{title}</h3>
                  <p className="font-inter text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
                  <Link
                    to={to}
                    className="font-inter text-sm font-medium text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    Vezi detalii
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-primary rounded-3xl px-8 py-12 md:px-16 md:py-16 text-primary-foreground">
            <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-center">
              <div>
                <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">
                  Pregătit pentru un zâmbet sănătos și încrezător?
                </h2>
                <p className="font-inter text-base md:text-lg opacity-90 leading-relaxed">
                  Suntem aici să te ghidăm spre tratamentele potrivite și să-ți oferim o experiență confortabilă la
                  fiecare vizită. Programează-te online sau contactează-ne pentru mai multe detalii.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">Programează o consultație</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
