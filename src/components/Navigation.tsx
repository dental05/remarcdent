import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Acasă', href: 'hero' },
    { label: 'Despre', href: 'about' },
    { label: 'Servicii', href: 'services' },
    { label: 'Echipa', href: 'team' },
    { label: 'Contact', href: 'contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-light border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+40728254326" className="flex items-center gap-1 text-primary hover:text-accent transition-colors">
                <Phone className="w-3 h-3" />
                <span className="font-inter">0728 254 326</span>
              </a>
              <span className="hidden md:flex items-center gap-1 text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span className="font-inter">Tudor Vladimirescu nr 3, Alba Iulia</span>
              </span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span className="font-inter">Luni - Vineri: 09:00 - 19:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 bg-background transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              onClick={() => scrollToSection('hero')}
              className="flex items-center cursor-pointer"
            >
              <img
                src="/logo_remarc.png"
                alt="REMARC dent"
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="font-inter text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="hero"
                onClick={() => scrollToSection('contact')}
                className="ml-4"
              >
                Programează-te
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden bg-background border-t border-border transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 font-inter text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="hero"
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4"
            >
              Programează-te
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
