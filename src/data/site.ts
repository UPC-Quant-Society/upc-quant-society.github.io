export type Lang = 'ca' | 'en';

export const contactEmail = 'quantsociety.upc@gmail.com';
export const membershipFormUrl = 'https://forms.gle/F4HjVPGyjdFAhqb58';
// Switch to false when the intake closes: the home page shows the closed state instead.
export const applicationsOpen = false;
export const githubUrl = 'https://github.com/UPC-Quant-Society';

export const routePairs = [
  { ca: 'projectes', en: 'projects' },
  { ca: 'recursos', en: 'resources' },
] as const;

export const nav = {
  ca: [
    { label: 'Projectes', href: '/ca/projectes/' },
    { label: 'Recursos', href: '/ca/recursos/' },
  ],
  en: [
    { label: 'Projects', href: '/en/projects/' },
    { label: 'Resources', href: '/en/resources/' },
  ],
} satisfies Record<Lang, { label: string; href: string }[]>;

export const ui = {
  ca: {
    skip: 'Ves al contingut',
    languageShort: 'EN',
    languageName: 'English',
    footerContact: 'Contacte',
    footerSociety: 'Associació',
    footerNote: 'Avís',
    apply: 'Sol·licita l’ingrés',
    notAdvice:
      'Associació universitària educativa. No gestionem capital, no oferim assessorament financer i no comercialitzem productes d’inversió.',
  },
  en: {
    skip: 'Skip to content',
    languageShort: 'CA',
    languageName: 'Català',
    footerContact: 'Contact',
    footerSociety: 'Society',
    footerNote: 'Disclaimer',
    apply: 'Apply',
    notAdvice:
      'An educational student association. We do not manage capital, provide financial advice or sell investment products.',
  },
} satisfies Record<Lang, Record<string, string>>;

export const home = {
  ca: {
    title: 'UPC Quant Society',
    description:
      'Associació d’estudiants de la UPC dedicada a les finances quantitatives, les matemàtiques, la programació i l’anàlisi de dades.',
    heading: ['L’atzar no té memòria.', 'Però té forma.'],
    intro:
      'Som l’associació d’estudiants de finances quantitatives de la UPC. Estudiem els mercats amb matemàtiques, estadística i codi: fem recerca en equips petits, formem els membres des dels primers principis i portem a la universitat professionals que s’hi dediquen.',
    figure: {
      caption:
        'Moviment brownià i el seu con, ±σ√t.',
    },
    practice: [
      {
        label: 'Recerca',
        title: 'Idees, posades a prova amb dades.',
        text: 'Treballem en equips petits sobre projectes de recerca: formulem una hipòtesi, construïm el pipeline de dades, la testem amb disciplina i documentem el que sobreviu.',
      },
      {
        label: 'Formació',
        title: 'Dels primers principis a la producció.',
        text: 'Sessions estructurades que porten els membres de les matemàtiques al codi que funciona: probabilitat, estadística, optimització i les eines que es fan servir de veritat.',
      },
      {
        label: 'Indústria',
        title: 'Professionals a la sala.',
        text: 'Portem gent que s’hi dedica per explicar com es resolen realment els problemes i què exigeix la feina.',
      },
      {
        label: 'Intercanvi',
        title: 'Coneixement que es capitalitza.',
        text: 'El que aprèn un membre, ho pot fer servir tothom. Documentem, compartim i revisem la feina dels altres, i l’obrim més enllà de la UPC.',
      },
    ],
    practiceLabel: 'Activitat',
    partners: 'Amb el suport de',
    admissions: 'Ingrés',
    applyOpen: ['Inscripcions obertes.', 'Sol·licita l’ingrés'],
    applyClosed: ['La propera convocatòria s’obrirà aviat.', 'Escriu-nos'],
  },
  en: {
    title: 'UPC Quant Society',
    description:
      'A UPC student association dedicated to quantitative finance, mathematics, programming and data analysis.',
    heading: ['Randomness has no memory.', 'But it has a shape.'],
    intro:
      'We are the student society for quantitative finance at UPC. We study markets with mathematics, statistics and code: we do research in small teams, train members from first principles and bring practitioners onto campus.',
    figure: {
      caption:
        'Brownian motion and its cone, ±σ√t.',
    },
    practice: [
      {
        label: 'Research',
        title: 'Ideas, tested against data.',
        text: 'We work in small teams on research projects: form a hypothesis, build the data pipeline, test it with discipline and write up what survives.',
      },
      {
        label: 'Training',
        title: 'From first principles to production.',
        text: 'Structured sessions that take members from the mathematics to working code: probability, statistics, optimisation and the tools used in practice.',
      },
      {
        label: 'Industry',
        title: 'Practitioners in the room.',
        text: 'We bring in people who do this for a living, to show how problems are actually solved and what the work demands.',
      },
      {
        label: 'Exchange',
        title: 'Knowledge that compounds.',
        text: 'What one member learns, everyone can use. We document, share and review each other’s work, and open it beyond UPC.',
      },
    ],
    practiceLabel: 'What we do',
    partners: 'Backed by',
    admissions: 'Admissions',
    applyOpen: ['Applications are open.', 'Apply'],
    applyClosed: ['The next intake opens soon.', 'Write to us'],
  },
} satisfies Record<Lang, Record<string, unknown>>;

export type Partner = {
  name: string;
  href: string;
  // Path under /public; without one the name is set as text.
  logo?: string;
  // Display height in px, so wordmarks and lockups read at a similar weight.
  height?: number;
};

export const partners: Partner[] = [
  { name: 'Universitat Politècnica de Catalunya', href: 'https://www.upc.edu', logo: '/brand/upc-barcelonatech.png', height: 44 },
  { name: 'BlueWalker Capital', href: 'https://bluewalker.capital', logo: '/brand/bluewalker.svg', height: 20 },
];

export type Project = {
  title: string;
  area: string;
  year: string;
  status: string;
  href?: string;
};

// Add projects here as they ship; the projects page lists them newest first.
export const projects: Record<Lang, Project[]> = {
  ca: [],
  en: [],
};

export const projectsPage = {
  ca: {
    title: 'Projectes',
    description: 'Projectes de recerca de UPC Quant Society.',
    heading: 'Recerca aplicada, publicada quan està llesta.',
    empty: 'Els primers projectes estan en curs.',
    columns: ['Projecte', 'Àrea', 'Any', 'Estat'],
  },
  en: {
    title: 'Projects',
    description: 'Research projects by UPC Quant Society.',
    heading: 'Applied research, published when it is ready.',
    empty: 'The first projects are in progress.',
    columns: ['Project', 'Area', 'Year', 'Status'],
  },
};

export function getAlternatePath(lang: Lang, slug?: string) {
  const other: Lang = lang === 'ca' ? 'en' : 'ca';
  if (!slug) return `/${other}/`;

  const pair = routePairs.find((item) => item[lang] === slug);
  return pair ? `/${other}/${pair[other]}/` : `/${other}/`;
}
