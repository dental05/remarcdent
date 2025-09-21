import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { serviceCategoryMeta, serviceItems, serviceCategories, type ServiceCategoryId } from '@/data/services';
import { slugify } from '@/lib/string';
import { ServiceCategoryIcon } from '@/components/ServiceCategoryIcon';

const preferredOrder: ServiceCategoryId[] = [
  'Profilaxie și igienizare',
  'Ortodonție',
  'Implantologie și regenerare',
  'Estetică dentară',
  'Protetică fixă',
  'Protetică mobilă',
  'Endodonție',
  'Parodontologie',
  'Chirurgie orală și BMF',
  'Odontoterapie restauratoare',
  'Consultații și diagnostic',
  'Pedodonție',
  'Proceduri adjuvante',
  'Urgențe stomatologice',
];

const categoriesToRender = preferredOrder.concat(
  serviceCategories.filter((category) => !preferredOrder.includes(category)),
);

const Services = () => {
  const cards = categoriesToRender.map((categoryId, index) => {
    const meta = serviceCategoryMeta[categoryId];
    const examples = meta.featuredExamples
      ?.map(exampleId => serviceItems.find(item => item.id === exampleId)?.name)
      .filter(Boolean)
      .slice(0, 3) as string[] | undefined;

    return (
      <Card
        key={categoryId}
        className="group p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 animate-fade-up"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
          <ServiceCategoryIcon category={categoryId} className="w-8 h-8" />
        </div>

        <h3 className="font-poppins text-xl font-semibold text-foreground mb-3">{meta.title}</h3>
        <p className="font-inter text-muted-foreground mb-4 leading-relaxed">{meta.description}</p>

        {examples?.length ? (
          <ul className="space-y-2 mb-4">
            {examples.map((example, exampleIndex) => (
              <li key={example} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="font-inter text-sm text-muted-foreground">
                  {example}
                </span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="flex flex-wrap gap-3">
          <Button asChild size="sm" variant="hero" className="px-4 py-2">
            <Link to={`/contact`}>Solicită o consultație</Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="px-4 py-2 text-primary hover:text-accent">
            <Link to={`/lista-preturi#${slugify(categoryId)}`}>Vezi tarife</Link>
          </Button>
        </div>
      </Card>
    );
  });

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serviciile REMARC dent
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Acoperim integral nevoile stomatologice – de la prevenție și estetică la intervenții chirurgicale complexe și
            reabilitări pe implanturi, cu echipe dedicate fiecărei specialități.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">{cards}</div>

        <div className="text-center mt-12">
          <Button asChild variant="hero" size="lg">
            <Link to="/lista-preturi">Descoperă lista completă de tarife</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
