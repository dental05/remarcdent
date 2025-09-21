import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="mb-4">
              <img
                src="/logo_remarc.png"
                alt="REMARC dent"
                className="h-12 w-auto"
              />
            </div>
            <p className="font-inter text-sm opacity-80 leading-relaxed">
              Oferim servicii stomatologice complete într-un mediu modern și prietenos, 
              cu focus pe calitate și confortul pacientului.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold mb-4">Linkuri Rapide</h3>
            <ul className="space-y-2 font-inter text-sm">
              <li>
                <Link to="/despre" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link to="/servicii" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Servicii
                </Link>
              </li>
              <li>
                <Link to="/lista-preturi" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Tarife
                </Link>
              </li>
              <li>
                <Link to="/echipa" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Echipa
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold mb-4">Servicii Principale</h3>
            <ul className="space-y-2 font-inter text-sm">
              <li className="opacity-80">• Stomatologie Generală</li>
              <li className="opacity-80">• Implantologie</li>
              <li className="opacity-80">• Ortodonție</li>
              <li className="opacity-80">• Estetică Dentară</li>
              <li className="opacity-80">• Urgențe Stomatologice</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href="tel:+40728254326" 
                className="flex items-center gap-2 font-inter text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
              >
                <Phone className="w-4 h-4" />
                0728 254 326
              </a>
              <a 
                href="mailto:remarcdent@yahoo.com" 
                className="flex items-center gap-2 font-inter text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
              >
                <Mail className="w-4 h-4" />
                remarcdent@yahoo.com
              </a>
              <div className="flex items-start gap-2 font-inter text-sm opacity-80">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Tudor Vladimirescu nr 3,<br />Alba Iulia, Romania</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-sm opacity-60">
              © {currentYear} REMARC dent. Toate drepturile rezervate.
            </p>
            <div className="flex gap-6 font-inter text-sm">
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                Politica de Confidențialitate
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                Termeni și Condiții
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
