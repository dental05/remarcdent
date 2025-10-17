import { readFile, writeFile, mkdir } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'csv-parse/sync';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');
const csvPath = resolve(rootDir, 'public', 'lista_preturi_servicii.csv');
const outputDir = resolve(rootDir, 'src', 'data', 'generated');
const outputPath = resolve(outputDir, 'services-data.ts');

const readTextFile = async (path) => {
  try {
    return await readFile(path, 'utf8');
  } catch (error) {
    if (error && error.code === 'ENOENT') {
      return null;
    }
    throw error;
  }
};

const loadFallbackNames = async () => {
  const searchFiles = [
    outputPath,
    resolve(rootDir, 'src', 'data', 'services.ts'),
  ];

  for (const file of searchFiles) {
    const content = await readTextFile(file);
    if (!content) continue;

    const regex = /{ id: (\d+), name: '([^']*)'/g;
    const map = new Map();

    for (const match of content.matchAll(regex)) {
      map.set(Number(match[1]), match[2]);
    }

    if (map.size > 0) {
      return map;
    }
  }

  return new Map();
};

const escapeString = (value) =>
  value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

const formatNumber = (input) => {
  if (Number.isInteger(input)) {
    return String(input);
  }
  return input.toFixed(2).replace(/\.?0+$/, '');
};

const normalizeName = (raw) => raw.trim();

const categoryMap = new Map([
  ['Consultatii', 'Consultații'],
  ['Consultații', 'Consultații'],
  ['Profilaxie si igienizare', 'Profilaxie și igienizare'],
  ['Profilaxie și igienizare', 'Profilaxie și igienizare'],
  ['Ortodontie si ortopedie dento-faciala', 'Ortodonție și ortopedie dento-facială'],
  ['Ortodonție și ortopedie dento-facială', 'Ortodonție și ortopedie dento-facială'],
  ['Protetica', 'Protetică'],
  ['Protetică', 'Protetică'],
  ['Implantologie', 'Implantologie'],
  ['Chirurgie orala', 'Chirurgie orală'],
  ['Chirurgie orală', 'Chirurgie orală'],
  ['Parodontologie', 'Parodontologie'],
  ['Endodontie', 'Endodonție'],
  ['Endodonție', 'Endodonție'],
  ['Odontoterapie restauratoare', 'Odontoterapie restauratoare'],
  ['Estetica dentara', 'Estetică dentară'],
  ['Estetică dentară', 'Estetică dentară'],
]);

const categoryOrder = [
  'Consultații',
  'Profilaxie și igienizare',
  'Ortodonție și ortopedie dento-facială',
  'Protetică',
  'Implantologie',
  'Chirurgie orală',
  'Parodontologie',
  'Endodonție',
  'Odontoterapie restauratoare',
  'Estetică dentară',
];

const parsePrice = (raw) => {
  let value = raw.replace(/\u00a0/g, ' ').trim();
  if (!value) {
    throw new Error('Empty price value encountered.');
  }

  let currency = /euro|eur/i.test(value) ? 'EUR' : 'RON';
  value = value.replace(/(lei|ron|euro|eur)/gi, '').trim();
  value = value.replace(/\s/g, '').replace(/,/g, '');

  const parseNumber = (input) => {
    const result = Number.parseFloat(input);
    if (Number.isNaN(result)) {
      throw new Error(`Unable to parse price value "${raw}".`);
    }
    return result;
  };

  if (value.includes('-')) {
    const [minRaw, maxRaw] = value.split('-', 2);
    const min = parseNumber(minRaw);
    const max = parseNumber(maxRaw);
    return { type: 'range', min, max, currency };
  }

  return { type: 'fixed', amount: parseNumber(value), currency };
};

const main = async () => {
  const [csvContent, fallbackNames] = await Promise.all([readFile(csvPath, 'utf8'), loadFallbackNames()]);
  const sanitizedCsv = csvContent.replace(/(\d),(?=\d{3}(?:\D|$))/g, '$1');
  const records = parse(sanitizedCsv, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });

  const items = records.map((row) => {
    const id = Number.parseInt(row['Nr.crt.'] ?? row['Nr.crt'], 10);
    if (Number.isNaN(id)) {
      throw new Error(`Invalid service id for row: ${JSON.stringify(row)}`);
    }

    const rawName = row['Denumire manopera'] ?? '';
    const normalizedName = normalizeName(rawName);
    const name = normalizedName || fallbackNames.get(id) || rawName.trim();

    const rawCategory = row.Categorie ?? '';
    const category = categoryMap.get(rawCategory) ?? rawCategory;

    if (!categoryOrder.includes(category)) {
      throw new Error(`Unknown category "${rawCategory}" for service id ${id}. Consider updating the mapping.`);
    }

    const price = parsePrice(row.Pret ?? '');

    return {
      id,
      name,
      category,
      price,
    };
  });

  items.sort((a, b) => a.id - b.id);

  const servicesCategories = categoryOrder.filter((category) =>
    items.some((item) => item.category === category),
  );

  await mkdir(outputDir, { recursive: true });

  const lines = [];
  lines.push('// Auto-generated from public/lista_preturi_servicii.csv – do not edit manually.');
  lines.push("export type ServiceCategoryId = '" + servicesCategories.join("' | '") + "';");
  lines.push("export type Currency = 'RON' | 'EUR';");
  lines.push('');
  lines.push('export type ServicePrice =');
  lines.push("  | { type: 'fixed'; amount: number; currency: Currency }");
  lines.push("  | { type: 'range'; min: number; max: number; currency: Currency };");
  lines.push('');
  lines.push('export type ServiceItem = {');
  lines.push('  id: number;');
  lines.push('  name: string;');
  lines.push('  category: ServiceCategoryId;');
  lines.push('  price: ServicePrice;');
  lines.push('};');
  lines.push('');
  lines.push('export const serviceItems: ServiceItem[] = [');
  for (const item of items) {
    const pricePart =
      item.price.type === 'fixed'
        ? `{ type: 'fixed', amount: ${formatNumber(item.price.amount)}, currency: '${item.price.currency}' }`
        : `{ type: 'range', min: ${formatNumber(item.price.min)}, max: ${formatNumber(item.price.max)}, currency: '${item.price.currency}' }`;

    lines.push(
      `  { id: ${item.id}, name: '${escapeString(item.name)}', category: '${item.category}', price: ${pricePart} },`,
    );
  }
  lines.push('];');
  lines.push('');
  lines.push('export const serviceCategories: ServiceCategoryId[] = [');
  for (const category of servicesCategories) {
    lines.push(`  '${category}',`);
  }
  lines.push('];');
  lines.push('');

  await writeFile(outputPath, `${lines.join('\n')}\n`, 'utf8');
  console.log(`Generated ${items.length} service entries at ${resolve(outputPath)}.`);
};

main().catch((error) => {
  console.error('[sync-services] Failed to generate services data.');
  console.error(error);
  process.exit(1);
});
