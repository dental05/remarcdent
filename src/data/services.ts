// Auto-generated from public/lista_preturi.csv
export type ServiceCategoryId = 'Chirurgie orală și BMF' | 'Consultații și diagnostic' | 'Endodonție' | 'Estetică dentară' | 'Implantologie și regenerare' | 'Odontoterapie restauratoare' | 'Ortodonție' | 'Parodontologie' | 'Pedodonție' | 'Proceduri adjuvante' | 'Profilaxie și igienizare' | 'Protetică fixă' | 'Protetică mobilă' | 'Urgențe stomatologice';
export type Currency = 'RON' | 'EUR';

export type ServiceItem = {
  id: number;
  name: string;
  category: ServiceCategoryId;
  price: number;
  currency: Currency;
};

export const serviceItems: ServiceItem[] = [
  { id: 1, name: 'ABLATIE / ELEMENT', category: 'Profilaxie și igienizare', price: 40, currency: 'RON' },
  { id: 2, name: 'ACTIVARE APARAT FIX BIMAXILAR', category: 'Ortodonție', price: 200, currency: 'RON' },
  { id: 3, name: 'ACTIVARE APARAT MOBILIZABIL', category: 'Ortodonție', price: 50, currency: 'RON' },
  { id: 4, name: 'ADITIE OSOASA', category: 'Implantologie și regenerare', price: 500, currency: 'RON' },
  { id: 5, name: 'ALBIRE ENDODONTICA', category: 'Estetică dentară', price: 150, currency: 'RON' },
  { id: 6, name: 'ALVEOLOTOMIE', category: 'Chirurgie orală și BMF', price: 300, currency: 'RON' },
  { id: 7, name: 'ANESTEZIE', category: 'Proceduri adjuvante', price: 50, currency: 'RON' },
  { id: 8, name: 'APARAT BENEFIT', category: 'Ortodonție', price: 3500, currency: 'RON' },
  { id: 9, name: 'APARAT DISTALIZARE/MEZIALIZARE', category: 'Ortodonție', price: 1200, currency: 'RON' },
  { id: 10, name: 'APARAT EXTRAORAL', category: 'Ortodonție', price: 600, currency: 'RON' },
  { id: 11, name: 'APARAT FIX FIZIONOMIC/ARCADA', category: 'Ortodonție', price: 3800, currency: 'RON' },
  { id: 12, name: 'APARAT FIX METALIC/ARCADA', category: 'Ortodonție', price: 2600, currency: 'RON' },
  { id: 13, name: 'APARAT FUNCTIONAL', category: 'Ortodonție', price: 800, currency: 'RON' },
  { id: 14, name: 'APARAT MOBILIZABIL', category: 'Ortodonție', price: 1200, currency: 'RON' },
  { id: 15, name: 'APLICARE MTA DOP APICAL', category: 'Endodonție', price: 200, currency: 'RON' },
  { id: 16, name: 'BARA PALATINALA/LINGUALA', category: 'Ortodonție', price: 350, currency: 'RON' },
  { id: 17, name: 'BIJUTERIE DENTARA', category: 'Estetică dentară', price: 300, currency: 'RON' },
  { id: 18, name: 'BONT PROTETIC MULTI-UNIT', category: 'Implantologie și regenerare', price: 600, currency: 'RON' },
  { id: 19, name: 'BONT PROTETIC PENTRU IMPLANT', category: 'Implantologie și regenerare', price: 450, currency: 'RON' },
  { id: 20, name: 'BUILT UP', category: 'Odontoterapie restauratoare', price: 150, currency: 'RON' },
  { id: 21, name: 'BUTON NANCE', category: 'Ortodonție', price: 350, currency: 'RON' },
  { id: 22, name: 'CHISTECTOMIE', category: 'Chirurgie orală și BMF', price: 150, currency: 'RON' },
  { id: 23, name: 'CHIURETAJ / DINTE', category: 'Parodontologie', price: 50, currency: 'RON' },
  { id: 24, name: 'CIMENTARE DEFINITIVA/DINTE', category: 'Protetică fixă', price: 50, currency: 'RON' },
  { id: 25, name: 'COAFAJ DIRECT BIOCERAMICA', category: 'Odontoterapie restauratoare', price: 200, currency: 'RON' },
  { id: 26, name: 'COAFAJ INDIRECT', category: 'Odontoterapie restauratoare', price: 150, currency: 'RON' },
  { id: 27, name: 'CONSULTATIE', category: 'Consultații și diagnostic', price: 150, currency: 'RON' },
  { id: 28, name: 'CONSULTATIE + FISA PARODONTALA', category: 'Consultații și diagnostic', price: 200, currency: 'RON' },
  { id: 29, name: 'CONSULTATIE + PLAN DE TRATAMENT', category: 'Consultații și diagnostic', price: 200, currency: 'RON' },
  { id: 30, name: 'CONSULTATIE ORTODONTICA', category: 'Consultații și diagnostic', price: 200, currency: 'RON' },
  { id: 31, name: 'CONSULTATIE SPECIALITATE BMF', category: 'Consultații și diagnostic', price: 100, currency: 'RON' },
  { id: 32, name: 'CONTENTIE FIXA ORTODONTIE', category: 'Ortodonție', price: 350, currency: 'RON' },
  { id: 33, name: 'CONURI GENTAMICINA', category: 'Endodonție', price: 100, currency: 'RON' },
  { id: 34, name: 'COROANA CERAMICA ONE BODY', category: 'Protetică fixă', price: 600, currency: 'RON' },
  { id: 35, name: 'COROANA CERAMICA PE IMPLANT', category: 'Protetică fixă', price: 1000, currency: 'RON' },
  { id: 36, name: 'COROANA CERAMICA PE SUPORT  ZIRCONIU', category: 'Protetică fixă', price: 1200, currency: 'RON' },
  { id: 37, name: 'COROANA FULL ZIRCONIU', category: 'Protetică fixă', price: 1200, currency: 'RON' },
  { id: 38, name: 'COROANA METALICA', category: 'Protetică fixă', price: 500, currency: 'RON' },
  { id: 39, name: 'COROANA METALO-CERAMICA', category: 'Protetică fixă', price: 800, currency: 'RON' },
  { id: 40, name: 'COROANA PARTIAL FIZIONOMICA', category: 'Protetică fixă', price: 500, currency: 'RON' },
  { id: 41, name: 'COROANA PMMA DUR', category: 'Protetică fixă', price: 300, currency: 'RON' },
  { id: 42, name: 'COROANA PMMA PROVIZORIE', category: 'Protetică fixă', price: 150, currency: 'RON' },
  { id: 43, name: 'COROANA RASINA', category: 'Protetică fixă', price: 400, currency: 'RON' },
  { id: 44, name: 'COROANA  ZIRCONIU PE IMPLANT', category: 'Protetică fixă', price: 1400, currency: 'RON' },
  { id: 45, name: 'CURA PARTIALA DE SINUS', category: 'Chirurgie orală și BMF', price: 600, currency: 'RON' },
  { id: 46, name: 'DECAPUSONARE', category: 'Chirurgie orală și BMF', price: 100, currency: 'RON' },
  { id: 47, name: 'DESCOPERIRE CANIN INCLUS', category: 'Chirurgie orală și BMF', price: 150, currency: 'RON' },
  { id: 48, name: 'DESCOPERIRE IMPLANT', category: 'Implantologie și regenerare', price: 120, currency: 'RON' },
  { id: 49, name: 'DESENSIBILIZARE', category: 'Profilaxie și igienizare', price: 100, currency: 'RON' },
  { id: 50, name: 'DETARTRAJ PROFESIONAL /ARCADA', category: 'Profilaxie și igienizare', price: 100, currency: 'RON' },
  { id: 51, name: 'DETARTRAJ RECALL', category: 'Profilaxie și igienizare', price: 80, currency: 'RON' },
  { id: 52, name: 'DINTE PROVIZORIU', category: 'Protetică fixă', price: 50, currency: 'RON' },
  { id: 53, name: 'DISPOZITIV CORONORADICULAR TURNAT', category: 'Protetică fixă', price: 200, currency: 'RON' },
  { id: 54, name: 'DRENAJ ABCES PARODONTAL', category: 'Parodontologie', price: 100, currency: 'RON' },
  { id: 55, name: 'DRENAJ ENDODONTIC', category: 'Endodonție', price: 200, currency: 'RON' },
  { id: 56, name: 'INDEPARTARE APARAT+CONTENTIE', category: 'Ortodonție', price: 750, currency: 'RON' },
  { id: 57, name: 'ELONGARE CORONARA', category: 'Parodontologie', price: 300, currency: 'RON' },
  { id: 58, name: 'EXCIZIE ENDOORALA CALCULI SALIVARI', category: 'Chirurgie orală și BMF', price: 250, currency: 'RON' },
  { id: 59, name: 'EXCIZIE FORMATIUNE TUMORALA BENIGNA ENDOORALA', category: 'Chirurgie orală și BMF', price: 150, currency: 'RON' },
  { id: 60, name: 'EXCIZIE TORUSURI-OSTEOAME', category: 'Chirurgie orală și BMF', price: 250, currency: 'RON' },
  { id: 61, name: 'EXTRACTIE  MOLAR MINTE ERUPT', category: 'Chirurgie orală și BMF', price: 300, currency: 'RON' },
  { id: 62, name: 'EXTRACTIE  MONORADICULAR', category: 'Chirurgie orală și BMF', price: 200, currency: 'RON' },
  { id: 63, name: 'EXTRACTIE  PLURIRADICULAR', category: 'Chirurgie orală și BMF', price: 250, currency: 'RON' },
  { id: 64, name: 'EXTRACTIE CHIRURGICALA', category: 'Chirurgie orală și BMF', price: 200, currency: 'RON' },
  { id: 65, name: 'EXTRACTIE DINTI DE LAPTE', category: 'Pedodonție', price: 100, currency: 'RON' },
  { id: 66, name: 'EXTRACTIE DINTI DE LAPTE CU ANESTEZIE', category: 'Pedodonție', price: 150, currency: 'RON' },
  { id: 67, name: 'FATETA CERAMICA', category: 'Estetică dentară', price: 1000, currency: 'RON' },
  { id: 68, name: 'FLUORIZARE', category: 'Profilaxie și igienizare', price: 500, currency: 'RON' },
  { id: 69, name: 'FLUORIZARE MONODOZA', category: 'Profilaxie și igienizare', price: 100, currency: 'RON' },
  { id: 70, name: 'FRENECTOMIE/FRENOPLASTIE  BRIDE', category: 'Chirurgie orală și BMF', price: 300, currency: 'RON' },
  { id: 71, name: 'GARNITURA PROTEZA', category: 'Protetică mobilă', price: 100, currency: 'RON' },
  { id: 72, name: 'GINGIVECTOMIE', category: 'Parodontologie', price: 100, currency: 'RON' },
  { id: 73, name: 'GINGIVO OSTEPOLASTIE', category: 'Parodontologie', price: 120, currency: 'RON' },
  { id: 74, name: 'GINGIVOPLASTIE', category: 'Parodontologie', price: 100, currency: 'RON' },
  { id: 75, name: 'GREFA GINGIVALA LIBERA/DINTE', category: 'Parodontologie', price: 500, currency: 'RON' },
  { id: 76, name: 'GREFA GINGIVALA LIBERA/2 DINTI', category: 'Parodontologie', price: 750, currency: 'RON' },
  { id: 77, name: 'GUTIERA', category: 'Ortodonție', price: 300, currency: 'RON' },
  { id: 78, name: 'GUTIERA ORTODONTICA', category: 'Ortodonție', price: 300, currency: 'RON' },
  { id: 79, name: 'IGENIZARE CLORAMINA/IODOFORM', category: 'Endodonție', price: 100, currency: 'RON' },
  { id: 80, name: 'IGIENIZARE CU JET DE BICARBONAT /ARCAD', category: 'Profilaxie și igienizare', price: 100, currency: 'RON' },
  { id: 81, name: 'IMOBILIZARE / DINTE', category: 'Parodontologie', price: 100, currency: 'RON' },
  { id: 82, name: 'IMPLANT MEGAGEN ANYONE', category: 'Implantologie și regenerare', price: 400, currency: 'EUR' },
  { id: 83, name: 'IMPLANT MEGAGEN ANYRIDEGE', category: 'Implantologie și regenerare', price: 500, currency: 'EUR' },
  { id: 84, name: 'IMPLANT STRAUMANN BLX', category: 'Implantologie și regenerare', price: 650, currency: 'EUR' },
  { id: 85, name: 'IMPLANT STRAUMANN MINI', category: 'Implantologie și regenerare', price: 3000, currency: 'RON' },
  { id: 86, name: 'INCHIDERE PERFORATIE', category: 'Endodonție', price: 200, currency: 'RON' },
  { id: 87, name: 'INCIZIE DRENAJ ENDOORAL ABCES VESTIBULAR', category: 'Chirurgie orală și BMF', price: 150, currency: 'RON' },
  { id: 88, name: 'INDEPARTARE DCR', category: 'Protetică fixă', price: 200, currency: 'RON' },
  { id: 89, name: 'INDEPARTARE PIVOT STICLA', category: 'Endodonție', price: 200, currency: 'RON' },
  { id: 90, name: 'INFILTRATII NEVRALGIE TRIGEMINALA', category: 'Proceduri adjuvante', price: 100, currency: 'RON' },
  { id: 91, name: 'DISJUNCTOR', category: 'Ortodonție', price: 1200, currency: 'RON' },
  { id: 92, name: 'INGENIZARE IMPLANT', category: 'Implantologie și regenerare', price: 150, currency: 'RON' },
  { id: 93, name: 'INLAY CERAMIC', category: 'Protetică fixă', price: 800, currency: 'RON' },
  { id: 94, name: 'KEMENY', category: 'Protetică mobilă', price: 450, currency: 'RON' },
  { id: 95, name: 'KEMENY ELASTIC', category: 'Protetică mobilă', price: 600, currency: 'RON' },
  { id: 96, name: 'LAMBOU DE ASANARE', category: 'Parodontologie', price: 200, currency: 'RON' },
  { id: 97, name: 'LAMBOU POZITIONAT CORONAR CU GREFA DE CONJUNCTIV', category: 'Parodontologie', price: 900, currency: 'RON' },
  { id: 98, name: 'LASER CHIRURGIE', category: 'Chirurgie orală și BMF', price: 80, currency: 'RON' },
  { id: 99, name: 'LASER PARO/DINTE', category: 'Parodontologie', price: 50, currency: 'RON' },
  { id: 100, name: 'LIP BUMPER', category: 'Ortodonție', price: 400, currency: 'RON' },
  { id: 101, name: 'MENTINATOR DE SPATIU', category: 'Ortodonție', price: 350, currency: 'RON' },
  { id: 102, name: 'MINIIMPLANT ORTODONTIC', category: 'Ortodonție', price: 350, currency: 'RON' },
  { id: 103, name: 'MOCK-UP', category: 'Estetică dentară', price: 400, currency: 'RON' },
  { id: 104, name: 'OBTURARE ENDO VERTICALA CALD CANAL SUPLIMENTAR', category: 'Endodonție', price: 70, currency: 'RON' },
  { id: 105, name: 'OBTURARE ENDO VERTICALA LA CALD MONORA', category: 'Endodonție', price: 180, currency: 'RON' },
  { id: 106, name: 'OBTURATIE COLET', category: 'Odontoterapie restauratoare', price: 200, currency: 'RON' },
  { id: 107, name: 'OBTURATIE FOTO 1 SUPRAFATA', category: 'Odontoterapie restauratoare', price: 250, currency: 'RON' },
  { id: 108, name: 'OBTURATIE FOTO 2 SUPRAFETE', category: 'Odontoterapie restauratoare', price: 280, currency: 'RON' },
  { id: 109, name: 'OBTURATIE FOTO 3 SUPRAFETE', category: 'Odontoterapie restauratoare', price: 350, currency: 'RON' },
  { id: 110, name: 'OBTURATIE GLASIONOMER', category: 'Odontoterapie restauratoare', price: 180, currency: 'RON' },
  { id: 111, name: 'OBTURATIE POST ENDO', category: 'Endodonție', price: 200, currency: 'RON' },
  { id: 112, name: 'OBTURATIE PROVIZORIE', category: 'Odontoterapie restauratoare', price: 100, currency: 'RON' },
  { id: 113, name: 'ODONTECTOMIE', category: 'Chirurgie orală și BMF', price: 300, currency: 'RON' },
  { id: 114, name: 'ONLAY', category: 'Protetică fixă', price: 800, currency: 'RON' },
  { id: 115, name: 'PIVOT FIBRA DE STICLA', category: 'Protetică fixă', price: 200, currency: 'RON' },
  { id: 116, name: 'PLASTIA COMUNICARII ORO-ANTRALE', category: 'Chirurgie orală și BMF', price: 200, currency: 'RON' },
  { id: 117, name: 'PREMOLARIZARE', category: 'Ortodonție', price: 150, currency: 'RON' },
  { id: 118, name: 'PRF', category: 'Implantologie și regenerare', price: 600, currency: 'RON' },
  { id: 119, name: 'PROTEZA ACRILICA', category: 'Protetică mobilă', price: 1700, currency: 'RON' },
  { id: 120, name: 'PROTEZA ACRILICA PARTIALA', category: 'Protetică mobilă', price: 1400, currency: 'RON' },
  { id: 121, name: 'PROTEZA ELASTICA', category: 'Protetică mobilă', price: 2000, currency: 'RON' },
  { id: 122, name: 'PROTEZA SCHELETATA', category: 'Protetică mobilă', price: 2800, currency: 'RON' },
  { id: 123, name: 'PRP', category: 'Implantologie și regenerare', price: 600, currency: 'RON' },
  { id: 124, name: 'PUNTE ADEZIVA', category: 'Protetică fixă', price: 1200, currency: 'RON' },
  { id: 125, name: 'RADIOGRAFIE CONTROL', category: 'Consultații și diagnostic', price: 20, currency: 'RON' },
  { id: 126, name: 'RADIOGRAFIE RETROALVEOLARA', category: 'Consultații și diagnostic', price: 40, currency: 'RON' },
  { id: 127, name: 'REBAZARE PROTEZA', category: 'Protetică mobilă', price: 250, currency: 'RON' },
  { id: 128, name: 'RECOLARE BRACKET', category: 'Ortodonție', price: 80, currency: 'RON' },
  { id: 129, name: 'REDUCERE IMOBILIZARE FRACTURI DENTO-ALVEOLARE', category: 'Chirurgie orală și BMF', price: 250, currency: 'RON' },
  { id: 130, name: 'REGENERARE PARODONTALA', category: 'Parodontologie', price: 450, currency: 'EUR' },
  { id: 131, name: 'REGULARIZARE CREASTA ALVEOLARA', category: 'Chirurgie orală și BMF', price: 300, currency: 'RON' },
  { id: 132, name: 'REPARATIE PROTEZA', category: 'Protetică mobilă', price: 200, currency: 'RON' },
  { id: 133, name: 'RETRATAMENT /CANAL', category: 'Endodonție', price: 50, currency: 'RON' },
  { id: 134, name: 'REZECTIE DINTE MONORADICULAR', category: 'Endodonție', price: 300, currency: 'RON' },
  { id: 135, name: 'REZECTIE MOLARI', category: 'Endodonție', price: 300, currency: 'RON' },
  { id: 136, name: 'REZECTIE PREMOLAR', category: 'Endodonție', price: 200, currency: 'RON' },
  { id: 137, name: 'SEDINTA CALCIU PLURIRADICULAR', category: 'Endodonție', price: 100, currency: 'RON' },
  { id: 138, name: 'SIGILARE PER DINTE', category: 'Pedodonție', price: 100, currency: 'RON' },
  { id: 139, name: 'SINUS LIFT', category: 'Implantologie și regenerare', price: 1200, currency: 'RON' },
  { id: 140, name: 'SISTEM BALAMA', category: 'Protetică mobilă', price: 2000, currency: 'RON' },
  { id: 141, name: 'SISTEM PROTEZA CAPSE IMPLANT', category: 'Implantologie și regenerare', price: 800, currency: 'RON' },
  { id: 142, name: 'SUPRASTRUCTURA 4 IMPL-BARA DOLDER', category: 'Implantologie și regenerare', price: 8000, currency: 'RON' },
  { id: 143, name: 'SUTURA PLAGILOR ENDO  EXOORALE', category: 'Chirurgie orală și BMF', price: 100, currency: 'RON' },
  { id: 144, name: 'TAXA URGENTA', category: 'Urgențe stomatologice', price: 100, currency: 'RON' },
  { id: 145, name: 'TELESCOP', category: 'Protetică fixă', price: 700, currency: 'RON' },
  { id: 146, name: 'TRATAMENT CU ENDOMOTOR MOLAR', category: 'Endodonție', price: 350, currency: 'RON' },
  { id: 147, name: 'TRATAMENT CU ENDOMOTOR MONORADICULAR', category: 'Endodonție', price: 250, currency: 'RON' },
  { id: 148, name: 'TRATAMENT CU ENDOMOTOR PREMOLAR', category: 'Endodonție', price: 300, currency: 'RON' },
  { id: 149, name: 'TRATAMENT MECANICO-ANTISEPTIC CANAL SUPLIMENTAR', category: 'Endodonție', price: 70, currency: 'RON' },
  { id: 150, name: 'TRATAMENT MECANICO-ANTISEPTIC MONORADICULAR', category: 'Endodonție', price: 200, currency: 'RON' },
  { id: 151, name: 'TRATAMENT MOLAR LA CALD', category: 'Endodonție', price: 650, currency: 'RON' },
  { id: 152, name: 'TRATAMENT MONORADICULAR LA CALD', category: 'Endodonție', price: 350, currency: 'RON' },
  { id: 153, name: 'TRATAMENT PREMOLAR LA CALD', category: 'Endodonție', price: 470, currency: 'RON' },
  { id: 154, name: 'TRATAMENT CANAL CALCIFIAT', category: 'Endodonție', price: 120, currency: 'RON' },
  { id: 155, name: 'TRATAMENT PERICORONARITELOR', category: 'Urgențe stomatologice', price: 50, currency: 'RON' },
  { id: 156, name: 'TRATAMENT PROFESIONAL BEYOND', category: 'Estetică dentară', price: 1200, currency: 'RON' },
  { id: 157, name: 'TRATAMENT SOFT LASER / ARCADA', category: 'Parodontologie', price: 50, currency: 'RON' },
];

export const serviceCategories = Array.from(new Set(serviceItems.map(item => item.category))) as ServiceCategoryId[];

export type ServiceCategoryMeta = {
  id: ServiceCategoryId;
  title: string;
  description: string;
  featuredExamples?: number[];
};

export const serviceCategoryMeta: Record<ServiceCategoryId, ServiceCategoryMeta> = {
  'Profilaxie și igienizare': {
    id: 'Profilaxie și igienizare',
    title: 'Profilaxie și igienizare profesională',
    description:
      'Detartraj, periaj profesional, fluorizare și tratamente pentru prevenirea afecțiunilor dentare și menținerea sănătății orale.',
    featuredExamples: [50, 68, 80],
  },
  Ortodonție: {
    id: 'Ortodonție',
    title: 'Ortodonție și ghidaj dento-maxilar',
    description:
      'Aparate fixe și mobile, contenții și mini-implanturi ortodontice pentru alinierea corectă a dinților și armonia arcadelor.',
    featuredExamples: [11, 32, 102],
  },
  'Implantologie și regenerare': {
    id: 'Implantologie și regenerare',
    title: 'Implantologie și regenerare osoasă',
    description:
      'Implanturi dentare premium, adiții osoase și proceduri PRF/PRP pentru reabilitarea completă a arcadelor.',
    featuredExamples: [82, 139, 142],
  },
  'Chirurgie orală și BMF': {
    id: 'Chirurgie orală și BMF',
    title: 'Chirurgie orală și maxilo-facială',
    description:
      'Extracții complexe, rezecții, frenectomii și intervenții de chirurgie orală realizate în condiții sigure.',
    featuredExamples: [61, 70, 113],
  },
  'Protetică fixă': {
    id: 'Protetică fixă',
    title: 'Protetică fixă și restaurări pe implant',
    description:
      'Coroane, punți și dispozitive protetice fixe adaptate fiecărui caz, inclusiv soluții pe implanturi.',
    featuredExamples: [34, 44, 124],
  },
  'Protetică mobilă': {
    id: 'Protetică mobilă',
    title: 'Protetică mobilă și reparații',
    description:
      'Proteze acrilice, elastice și scheletate, reparații și rebasări pentru un confort optim.',
    featuredExamples: [119, 122, 127],
  },
  Endodonție: {
    id: 'Endodonție',
    title: 'Endodonție microscopică',
    description:
      'Tratamente de canal, reintervenții și obturații endodontice realizate cu sisteme rotative moderne.',
    featuredExamples: [104, 146, 154],
  },
  'Estetică dentară': {
    id: 'Estetică dentară',
    title: 'Estetică dentară și cosmetizare',
    description:
      'Albiri profesionale, fațete și bijuterii dentare pentru un zâmbet luminos și natural.',
    featuredExamples: [5, 67, 156],
  },
  Parodontologie: {
    id: 'Parodontologie',
    title: 'Parodontologie și sănătate gingivală',
    description:
      'Tratăm afecțiunile gingiilor prin chiuretaje, lambouri și grefe pentru stabilitate pe termen lung.',
    featuredExamples: [23, 75, 130],
  },
  'Odontoterapie restauratoare': {
    id: 'Odontoterapie restauratoare',
    title: 'Odontoterapie restauratoare',
    description:
      'Obturații fotopolimerizabile, coafaje și reconstrucții pentru refacerea structurii dentare.',
    featuredExamples: [20, 107, 112],
  },
  'Consultații și diagnostic': {
    id: 'Consultații și diagnostic',
    title: 'Consultații și diagnostic',
    description:
      'Consultații interdisciplinare, planuri de tratament și investigații imagistice pentru evaluări complete.',
    featuredExamples: [27, 30, 125],
  },
  Pedodonție: {
    id: 'Pedodonție',
    title: 'Pedodonție și tratamente pentru copii',
    description:
      'Tratăm micii pacienți cu răbdare: extracții ale dinților de lapte, sigilări și monitorizare.',
    featuredExamples: [65, 66, 138],
  },
  'Proceduri adjuvante': {
    id: 'Proceduri adjuvante',
    title: 'Proceduri adjuvante și confort',
    description:
      'Anestezii, infiltrații și alte proceduri de susținere pentru tratamente cât mai confortabile.',
    featuredExamples: [7, 90],
  },
  'Urgențe stomatologice': {
    id: 'Urgențe stomatologice',
    title: 'Intervenții de urgență',
    description:
      'Taxe și tratamente rapide pentru urgențe acute, pericoronarite și managementul durerii.',
    featuredExamples: [144, 155],
  },
};

export const servicesGroupedByCategory = serviceCategories.map(category => ({
  category,
  items: serviceItems.filter(item => item.category === category).sort((a, b) => a.name.localeCompare(b.name, 'ro')),
}));
