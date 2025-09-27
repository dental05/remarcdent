import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Heart, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/poza_interior_cabinet.jpg"
        >
          <source src="/poze_cabinet/video2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-primary backdrop-blur-sm">
            Clinica REMARC dent
          </span>

          <h1 className="mt-6 mb-4 font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Zâmbetul tău, <span className="text-primary">prioritatea</span> noastră
          </h1>

          <p className="mb-10 font-inter text-lg md:text-xl text-muted-foreground/90 leading-relaxed">
            Am creat un spațiu dedicat îngrijirii complete, unde tehnologia digitală și expertiza medicală se întâlnesc
            pentru a oferi tratamente personalizate, rezultate estetice remarcabile și confort absolut la fiecare vizită.
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="lg" onClick={() => navigate('/contact')} className="group">
              Programează-te acum
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/servicii')} className="bg-background/70">
              Vezi serviciile
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-background/70 px-5 py-4 backdrop-blur">
              <Shield className="mx-auto mb-3 h-5 w-5 text-primary" />
              <p className="mb-1 font-poppins text-sm font-semibold text-foreground">Tehnologie digitală completă</p>
              <p className="font-inter text-xs text-muted-foreground">
                Scanner intraoral, radiologie 3D și chirurgie ghidată pentru tratamente precise.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/70 px-5 py-4 backdrop-blur">
              <Heart className="mx-auto mb-3 h-5 w-5 text-accent" />
              <p className="mb-1 font-poppins text-sm font-semibold text-foreground">Planuri personalizate</p>
              <p className="font-inter text-xs text-muted-foreground">
                Echipe multidisciplinare care construiesc soluții adaptate obiectivelor tale estetice și medicale.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/70 px-5 py-4 backdrop-blur">
              <Award className="mx-auto mb-3 h-5 w-5 text-primary" />
              <p className="mb-1 font-poppins text-sm font-semibold text-foreground">20+ ani de excelență</p>
              <p className="font-inter text-xs text-muted-foreground">
                Mii de pacienți tratați cu succes și recomandări care ne inspiră să evoluăm constant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
