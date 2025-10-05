import Services from '@/components/Services';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div className="bg-background">
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
                Portofoliul nostru de tratamente
              </span>
              <h1 className="mt-6 mb-4 font-poppins text-3xl md:text-4xl font-bold text-foreground">
                Soluții complete pentru sănătatea și estetica zâmbetului tău
              </h1>
              <p className="mb-8 font-inter text-base md:text-lg text-muted-foreground leading-relaxed">
                De la profilaxie și tratamente pediatric până la reabilitări pe implant și estetică dentară avansată,
                fiecare etapă este realizată în aceeași clinică, cu suportul laboratorului nostru propriu de tehnică dentară.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                {[
                  'Planuri interdisciplinare personalizate',
                  'Tehnologie digitală și imagistică avansată',
                  'Lucrări protetice fabricate in-house',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-full bg-background border border-border/40 px-4 py-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="font-inter text-sm text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="hero" className="group">
                  <Link to="/lista-preturi">
                    Vezi lista de tarife
                    <FileText className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">
                    Programează o consultație
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/poze_cabinet/video3.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
              </div>
          </div>
        </div>
      </section>

      <Services />
    </div>
  );
};

export default ServicesPage;
