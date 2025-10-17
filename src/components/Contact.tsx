import React, { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Calendar
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { serviceCategories, serviceItems } from '@/data/generated/services-data';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get services filtered by selected category
  const availableServices = useMemo(() => {
    if (!formData.category || formData.category === "general") {
      return [];
    }
    return serviceItems.filter(item => item.category === formData.category);
  }, [formData.category]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build subject line
    let subject = "Programare nouă";
    if (formData.category === "general") {
      subject = "Întrebare generală";
    } else if (formData.service) {
      subject = `Programare nouă: ${formData.service}`;
    } else if (formData.category) {
      subject = `Programare nouă: ${formData.category}`;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "9729e067-7f3d-4a8e-bb49-ab5faa5d8ef1",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          category: formData.category,
          service: formData.service,
          message: formData.message,
          subject: subject,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast({
          title: "Mesaj trimis cu succes!",
          description: "Vă vom contacta în cel mai scurt timp posibil.",
        });
        setFormData({ name: "", phone: "", email: "", category: "", service: "", message: "" });
      } else {
        toast({
          title: "Eroare",
          description: "Nu am putut trimite mesajul. Vă rugăm să încercați din nou.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Eroare",
        description: "A apărut o eroare. Vă rugăm să încercați din nou.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // If category changes, reset service selection
    if (name === "category") {
      setFormData({
        ...formData,
        category: value,
        service: ""
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Telefon",
      content: "0728 254 326",
      link: "tel:+40728254326",
      color: "primary"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "WhatsApp",
      content: "0728 254 326",
      link: "https://wa.me/40728254326",
      color: "accent"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "remarcdent@yahoo.com",
      link: "mailto:remarcdent@yahoo.com",
      color: "primary"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Adresă",
      content: "Tudor Vladimirescu nr 3, Alba Iulia, Romania",
      link: "https://maps.app.goo.gl/5EkBmih1cSqDKb4R6",
      color: "accent"
    }
  ];

  const schedule = [
    { day: "Luni - Vineri", hours: "08:00 - 20:00" },
    { day: "Sâmbătă", hours: "10:00 - 13:00" },
    { day: "Duminică", hours: "Închis" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Suntem aici pentru a răspunde întrebărilor tale. Programează-te pentru 
            o consultație sau contactează-ne pentru mai multe informații.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8 animate-fade-up">
            <h3 className="font-poppins text-2xl font-semibold text-foreground mb-6">
              Programează o consultație
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nume complet *</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ion Popescu"
                    required
                    className="font-inter"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+40 7XX XXX XXX"
                    required
                    className="font-inter"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ion.popescu@email.com"
                  className="font-inter"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Tip solicitare *</Label>
                <select 
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-input rounded-lg bg-background font-inter text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Selectează tipul solicitării</option>
                  <option value="general">Întrebare generală</option>
                  <optgroup label="Categorii servicii">
                    {serviceCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Conditionally show specific service dropdown */}
              {formData.category && formData.category !== "general" && (
                <div className="space-y-2 animate-fade-up">
                  <Label htmlFor="service">Serviciu specific</Label>
                  <select 
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background font-inter text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selectează un serviciu (opțional)</option>
                    {availableServices.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="message">Mesaj</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descrie problema ta sau întrebările pe care le ai..."
                  rows={4}
                  className="font-inter"
                />
              </div>
              
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                <Calendar className="mr-2" />
                {isSubmitting ? "Se trimite..." : "Trimite cererea de programare"}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-up">
            {/* Contact Cards */}
            <Card className="p-6">
              <h3 className="font-poppins text-xl font-semibold text-foreground mb-4">
                Informații de contact
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-3 group hover:translate-x-1 transition-transform"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      info.color === 'primary' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-accent/10 text-accent'
                    }`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-inter text-sm text-muted-foreground">
                        {info.title}
                      </p>
                      <p className="font-inter text-foreground group-hover:text-primary transition-colors">
                        {info.content}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Schedule Card */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-poppins text-xl font-semibold text-foreground">
                  Program de lucru
                </h3>
              </div>
              
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="font-inter text-foreground">
                      {item.day}
                    </span>
                    <span className="font-inter font-medium text-primary">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
              
            </Card>
          </div>
        </div>

        {/* Map */}
        <Card className="mt-8 p-0 overflow-hidden animate-fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4786.018537789664!2d23.576956777628528!3d46.07467107109054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474ea7d8d48bad7f%3A0xa22ee376131bc742!2sRemarc%20Dent!5e1!3m2!1sen!2sro!4v1758142472870!5m2!1sen!2sro"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="REMARC DENT Location"
            className="w-full"
          />
        </Card>
      </div>
    </section>
  );
};

export default Contact;
