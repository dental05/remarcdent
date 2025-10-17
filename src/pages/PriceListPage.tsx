import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ServiceCategoryIcon } from '@/components/ServiceCategoryIcon';
import { serviceCategoryMeta, servicesGroupedByCategory, serviceItems, type ServiceCategoryId } from '@/data/services';
import { formatPrice } from '@/lib/format';
import { slugify } from '@/lib/string';
import { Link, useLocation } from 'react-router-dom';
import { useCallback, useEffect, useMemo } from 'react';

const PriceListPage = () => {
  const totalServices = serviceItems.length;
  const location = useLocation();

  const slugToCategory = useMemo(() => {
    const map = new Map<string, ServiceCategoryId>();
    servicesGroupedByCategory.forEach(({ category }) => {
      map.set(slugify(category), category);
    });
    return map;
  }, []);

  const scrollToCategory = useCallback((category: ServiceCategoryId, updateHash = true) => {
    const targetId = slugify(category);
    const element = typeof window !== 'undefined' ? document.getElementById(targetId) : null;
    if (!element) return;

    const headerOffset = 112;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementTop - headerOffset, behavior: 'smooth' });

    if (updateHash) {
      window.history.replaceState(null, '', `#${targetId}`);
    }
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const slug = decodeURIComponent(location.hash.slice(1));
    const category = slugToCategory.get(slug);
    if (!category) return;

    const timer = window.setTimeout(() => scrollToCategory(category, false), 150);
    return () => window.clearTimeout(timer);
  }, [location.hash, scrollToCategory, slugToCategory]);

  return (
    <div className="bg-background">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12 animate-fade-up">
            <p className="font-inter uppercase text-sm tracking-wide text-primary mb-2">
              Lista de prețuri
            </p>
            <h1 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transparență completă pentru toate tratamentele
            </h1>
            <p className="font-inter text-lg text-muted-foreground">
              Consultă tarifele pentru cele {totalServices} proceduri stomatologice oferite de REMARC DENT. Fiecare
              categorie cuprinde tratamente detaliate și tarife actualizate, pentru ca tu să iei decizii informate.
            </p>
            <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 px-6 py-4">
              <p className="font-inter text-sm text-foreground">
                Poți achita tratamentele în până la 12 rate prin cardurile de credit Banca Transilvania (BT).
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12 animate-fade-up">
            {servicesGroupedByCategory.map(({ category }) => (
              <Button
                key={category}
                type="button"
                size="sm"
                variant="outline"
                className="rounded-full border-primary/30 text-primary hover:bg-primary/10"
                onClick={() => scrollToCategory(category)}
              >
                {serviceCategoryMeta[category].title}
              </Button>
            ))}
          </div>

          <div className="space-y-10">
            {servicesGroupedByCategory.map(({ category, items }, index) => {
              const meta = serviceCategoryMeta[category];
              return (
                <Card
                  key={category}
                  id={slugify(category)}
                  className="overflow-hidden border-border/60 animate-fade-up"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className="border-b border-border/60 bg-secondary/40 px-6 py-5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                          <ServiceCategoryIcon category={category} className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="font-poppins text-xl font-semibold text-foreground">{meta.title}</h2>
                          <p className="font-inter text-sm text-muted-foreground max-w-2xl">
                            {meta.description}
                          </p>
                        </div>
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/contact">Programează-te</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="text-left text-sm uppercase tracking-wide text-muted-foreground bg-muted/60">
                          <th className="px-6 py-3 font-medium">Serviciu</th>
                          <th className="px-6 py-3 font-medium w-32 text-right">Preț</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map(item => (
                          <tr
                            key={item.id}
                            className="border-t border-border/40 hover:bg-primary/5 transition-colors"
                          >
                            <td className="px-6 py-3">
                              <span className="font-inter text-sm text-foreground">{item.name}</span>
                            </td>
                            <td className="px-6 py-3 text-right">
                              <span className="font-inter text-sm font-semibold text-primary">
                                {formatPrice(item.price)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PriceListPage;
