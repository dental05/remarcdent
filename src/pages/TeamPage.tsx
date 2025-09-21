import Team from '@/components/Team';
import { Button } from '@/components/ui/button';
import { Users, Award, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeamPage = () => {
  return (
    <div className="bg-background">
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
                Echipa REMARC dent
              </span>
              <h1 className="mt-6 mb-4 font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Specialiști dedicați fiecărui zâmbet
              </h1>
              <p className="mb-8 font-inter text-base md:text-lg text-muted-foreground leading-relaxed">
                23 de medici și tehnicieni dentari colaborează zilnic într-un flux integrat, susținut de laboratorul
                nostru propriu de tehnică dentară, pentru planuri de tratament rapide și rezultate predictibile.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                {[
                  { Icon: Users, label: 'Echipă multidisciplinară coordonată' },
                  { Icon: Microscope, label: 'Tratamente ghidate digital' },
                  { Icon: Award, label: 'Formare continuă și certificări' },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 rounded-full bg-background border border-border/40 px-4 py-2">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="font-inter text-sm text-foreground/90">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="hero" className="group">
                  <Link to="/contact">Programează o consultație</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/lista-preturi">Vezi tarifele serviciilor</Link>
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: 'auto',
                    height: '180%',
                    transform: 'translate(-50%, -50%) rotate(90deg)',
                  }}
                >
                  <source src="/poze_cabinet/video1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team />
    </div>
  );
};

export default TeamPage;
