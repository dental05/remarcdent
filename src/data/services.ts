import {
  serviceItems,
  serviceCategories,
  type Currency,
  type ServiceCategoryId,
  type ServiceItem,
  type ServicePrice,
} from './generated/services-data';

export type { Currency, ServiceCategoryId, ServiceItem, ServicePrice };
export { serviceItems, serviceCategories };

export type ServiceCategoryMeta = {
  id: ServiceCategoryId;
  title: string;
  description: string;
  featuredExamples?: number[];
};

export const serviceCategoryMeta: Record<ServiceCategoryId, ServiceCategoryMeta> = {
  Consultații: {
    id: 'Consultații',
    title: 'Consultații și diagnostic complet',
    description:
      'Evaluări inițiale, planuri de tratament și investigații imagistice pentru o imagine medicală clară.',
    featuredExamples: [27, 28, 30],
  },
  'Profilaxie și igienizare': {
    id: 'Profilaxie și igienizare',
    title: 'Profilaxie și igienizare profesională',
    description:
      'Detartraj, periaj profesional și fluorizare pentru prevenirea afecțiunilor dentare și menținerea sănătății orale.',
    featuredExamples: [50, 51, 68],
  },
  'Ortodonție și ortopedie dento-facială': {
    id: 'Ortodonție și ortopedie dento-facială',
    title: 'Ortodonție și ortopedie dento-facială',
    description:
      'Aparate fixe și mobile, contenții și dispozitive auxiliare pentru alinierea corectă a dinților și armonia maxilarelor.',
    featuredExamples: [2, 11, 102],
  },
  'Protetică': {
    id: 'Protetică',
    title: 'Protetică fixă și mobilă',
    description: 'Coroane, punți și proteze adaptate estetic și funcțional pentru reabilitări complete.',
    featuredExamples: [34, 119, 140],
  },
  'Implantologie': {
    id: 'Implantologie',
    title: 'Implantologie dentară',
    description: 'Implanturi premium și soluții protetice pe implant pentru stabilitate pe termen lung.',
    featuredExamples: [82, 83, 84],
  },
  'Chirurgie orală': {
    id: 'Chirurgie orală',
    title: 'Chirurgie orală',
    description: 'Extracții complexe, rezecții și intervenții chirurgicale realizate în condiții sigure.',
    featuredExamples: [6, 61, 113],
  },
  'Parodontologie': {
    id: 'Parodontologie',
    title: 'Parodontologie și sănătate gingivală',
    description: 'Chiuretaje, grefe și tratamente regenerative pentru țesuturile de susținere a dinților.',
    featuredExamples: [23, 72, 130],
  },
  'Endodonție': {
    id: 'Endodonție',
    title: 'Endodonție microscopică',
    description: 'Tratamente de canal moderne, reintervenții și obturații sigure pentru salvarea dinților.',
    featuredExamples: [55, 146, 154],
  },
  'Odontoterapie restauratoare': {
    id: 'Odontoterapie restauratoare',
    title: 'Odontoterapie restauratoare',
    description: 'Obturații fotopolimerizabile, reconstrucții și coafaje pentru refacerea structurii dentare.',
    featuredExamples: [20, 107, 110],
  },
  'Estetică dentară': {
    id: 'Estetică dentară',
    title: 'Estetică dentară',
    description: 'Albiri profesionale, mock-up-uri și bijuterii dentare pentru un zâmbet luminos.',
    featuredExamples: [5, 103, 156],
  },
};

export const servicesGroupedByCategory = serviceCategories.map(category => ({
  category,
  items: serviceItems
    .filter(item => item.category === category)
    .sort((a, b) => a.name.localeCompare(b.name, 'ro')),
}));

