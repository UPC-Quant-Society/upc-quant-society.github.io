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
    heading: ['Reunim les ments més curioses de la UPC,', 'i convertim el talent i el pensament crític en avantatge.'],
    practice: [
      {
        label: 'Recerca',
        caption: 'Fig. 1. Senyal contra rendiment futur, ajust per mínims quadrats.',
        title: 'Idees, posades a prova amb dades.',
        text: 'Treballem en equips petits sobre projectes de recerca: formulem una hipòtesi, construïm el pipeline de dades, la testem amb disciplina i documentem el que sobreviu.',
        items: ['Recerca de senyals i features', 'Backtesting i simulació', 'Valoració de derivats i volatilitat', 'Microestructura de mercat', 'Construcció de carteres i risc', 'Eines de recerca open source'],
      },
      {
        label: 'Formació',
        caption: 'Fig. 2. Trajectòries brownianes i la seva distribució terminal.',
        title: 'Dels primers principis a la producció.',
        text: 'Sessions estructurades que porten els membres de les matemàtiques al codi que funciona: probabilitat, estadística, optimització i les eines que es fan servir de veritat.',
        items: ['Probabilitat i càlcul estocàstic', 'Aprenentatge estadístic i automàtic', 'Sèries temporals i econometria', 'Optimització i mètodes numèrics', 'Python per a recerca quantitativa', 'Grups de lectura de papers'],
      },
      {
        label: 'Indústria',
        caption: 'Fig. 3. Membres i professionals, coneixement en les dues direccions.',
        title: 'Professionals a la sala.',
        text: 'Portem gent que s’hi dedica per explicar com es resolen realment els problemes i què exigeix la feina.',
        items: ['Xerrades amb professionals', 'Casos reals de la indústria', 'Xarxa d’alumni', 'Mentoria', 'Orientació professional', 'Visites a empreses'],
      },
      {
        label: 'Intercanvi',
        caption: 'Fig. 4. Matriu de correlacions en finestra mòbil.',
        title: 'Coneixement que es capitalitza.',
        text: 'El que aprèn un membre, ho pot fer servir tothom. Documentem, compartim i revisem la feina dels altres, i l’obrim més enllà de la UPC.',
        items: ['Biblioteca oberta i curada', 'Informes interns de recerca', 'Revisió entre iguals', 'Codi compartit a GitHub', 'Col·laboració amb altres universitats', 'Seminaris i tallers'],
      },
    ],
    applyOpen: ['Inscripcions obertes.', 'Sol·licita-ho'],
    applyClosed: ['La propera convocatòria s’obrirà aviat.', 'Mantingues el contacte'],
  },
  en: {
    title: 'UPC Quant Society',
    description:
      'A UPC student association dedicated to quantitative finance, mathematics, programming and data analysis.',
    heading: ['We bring together UPC’s most curious minds,', 'turning talent and critical thinking into an edge.'],
    practice: [
      {
        label: 'Research',
        caption: 'Fig. 1. Signal against forward return, least-squares fit.',
        title: 'Ideas, tested against data.',
        text: 'We work in small teams on research projects: form a hypothesis, build the data pipeline, test it with discipline and write up what survives.',
        items: ['Signal research and feature engineering', 'Backtesting and simulation', 'Derivatives pricing and volatility', 'Market microstructure', 'Portfolio construction and risk', 'Open-source research tools'],
      },
      {
        label: 'Training',
        caption: 'Fig. 2. Brownian paths and their terminal distribution.',
        title: 'From first principles to production.',
        text: 'Structured sessions that take members from the mathematics to working code: probability, statistics, optimisation and the tools used in practice.',
        items: ['Probability and stochastic calculus', 'Statistical and machine learning', 'Time series and econometrics', 'Optimisation and numerical methods', 'Python for quantitative research', 'Paper reading groups'],
      },
      {
        label: 'Industry',
        caption: 'Fig. 3. Members and practitioners, knowledge flowing both ways.',
        title: 'Practitioners in the room.',
        text: 'We bring in people who do this for a living, to show how problems are actually solved and what the work demands.',
        items: ['Talks with practitioners', 'Case studies from industry', 'Alumni network', 'Mentoring', 'Career guidance', 'Firm visits'],
      },
      {
        label: 'Exchange',
        caption: 'Fig. 4. Rolling-window correlation matrix.',
        title: 'Knowledge that compounds.',
        text: 'What one member learns, everyone can use. We document, share and review each other’s work, and open it beyond UPC.',
        items: ['Curated open library', 'Internal research write-ups', 'Peer review of projects', 'Code shared on GitHub', 'Collaboration with other universities', 'Seminars and workshops'],
      },
    ],
    applyOpen: ['Applications are open.', 'Apply'],
    applyClosed: ['The next intake opens soon.', 'Stay in touch'],
  },
} satisfies Record<Lang, Record<string, unknown>>;

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
