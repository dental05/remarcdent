import { readFile, writeFile, mkdir } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'csv-parse/sync';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');
const csvPath = resolve(rootDir, 'public', 'personal_list.csv');
const outputDir = resolve(rootDir, 'src', 'data', 'generated');
const outputPath = resolve(outputDir, 'team-data.ts');

const escapeString = (value) =>
  value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

const splitRoleAndDetails = (rawValue) => {
  const value = rawValue.trim().replace(/\s+/g, ' ');
  const separators = [' – ', ' - ', ' — '];

  for (const separator of separators) {
    const index = value.indexOf(separator);
    if (index !== -1) {
      const role = value.slice(0, index).trim();
      const details = value.slice(index + separator.length).trim();
      return [role, details || undefined];
    }
  }

  return [value, undefined];
};

const determineCategory = (role) => {
  const normalized = role.toLowerCase();

  if (normalized.includes('asistent')) {
    return 'Asistenti medicali';
  }
  if (normalized.includes('tehnician')) {
    return 'Tehnicieni dentari';
  }
  if (
    normalized.includes('manager') ||
    normalized.includes('intretinere') ||
    normalized.includes('suport')
  ) {
    return 'Management & suport';
  }

  return 'Medici';
};

const ensurePhotoPath = (value) => {
  const trimmed = value.trim();
  if (!trimmed) {
    return undefined;
  }
  return `/poze_cabinet/Foto-${trimmed}.jpg`;
};

const main = async () => {
  const csvContent = await readFile(csvPath, 'utf8');
  const records = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });

  const items = records.map((row) => {
    const idValue = row['Nr.crt'] ?? row['Nr.crt.'] ?? row['﻿Nr.crt'];
    const id = Number.parseInt(idValue, 10);
    if (Number.isNaN(id)) {
      throw new Error(`Invalid team member id for row: ${JSON.stringify(row)}`);
    }

    const name = (row['Nume si prenume'] ?? row['Nume și prenume'] ?? '').trim();
    if (!name) {
      throw new Error(`Missing name for team member id ${id}.`);
    }

    const [role, details] = splitRoleAndDetails(row['Functia'] ?? row['Funcția'] ?? '');
    const category = determineCategory(role);
    const photo = ensurePhotoPath(row['Nr.poza'] ?? row['Nr. poza'] ?? '');

    return {
      id,
      name,
      role,
      details,
      photo,
      category,
    };
  });

  items.sort((a, b) => a.id - b.id);

  await mkdir(outputDir, { recursive: true });

  const lines = [];
  lines.push('// Auto-generated from public/personal_list.csv – do not edit manually.');
  lines.push("export type TeamCategory = 'Medici' | 'Tehnicieni dentari' | 'Asistenti medicali' | 'Management & suport';");
  lines.push('');
  lines.push('export type TeamMember = {');
  lines.push('  id: number;');
  lines.push('  name: string;');
  lines.push('  role: string;');
  lines.push('  details?: string;');
  lines.push('  photo?: string;');
  lines.push('  category: TeamCategory;');
  lines.push('};');
  lines.push('');
  lines.push('export const teamMembers: TeamMember[] = [');
  for (const item of items) {
    const detailsPart = item.details ? `, details: '${escapeString(item.details)}'` : '';
    const photoPart = item.photo ? `, photo: '${escapeString(item.photo)}'` : '';
    lines.push(
      `  { id: ${item.id}, name: '${escapeString(item.name)}', role: '${escapeString(item.role)}'${detailsPart}${photoPart}, category: '${item.category}' },`,
    );
  }
  lines.push('];');
  lines.push('');

  await writeFile(outputPath, `${lines.join('\n')}\n`, 'utf8');
  console.log(`Generated ${items.length} team members at ${resolve(outputPath)}.`);
};

main().catch((error) => {
  console.error('[sync-team] Failed to generate team data.');
  console.error(error);
  process.exit(1);
});
