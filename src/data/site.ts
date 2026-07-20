export type Lang = 'ca' | 'en';

export type Card = {
  label?: string;
  title: string;
  text: string;
  href?: string;
  status?: string;
};

export type Section = {
  id: string;
  kicker?: string;
  title: string;
  body?: string[];
  cards?: Card[];
  note?: {
    title: string;
    text: string;
    tone?: 'green' | 'neutral';
  };
  cta?: {
    label: string;
    href: string;
  };
  people?: {
    name: string;
    role: string;
    description: string;
  }[];
};

export type PageData = {
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  sections: Section[];
};

export const contactEmail = 'quantumsociety.upc@gmail.com';
export const githubUrl = 'https://github.com/UPC-Quant-Society';

export const routePairs = [
  { ca: 'associacio', en: 'about' },
  { ca: 'activitat', en: 'activity' },
  { ca: 'projectes', en: 'projects' },
  { ca: 'competicions', en: 'competitions' },
  { ca: 'esdeveniments', en: 'events' },
  { ca: 'recursos', en: 'resources' },
  { ca: 'collabora', en: 'collaborate' },
  { ca: 'equip', en: 'team' },
  { ca: 'participa', en: 'join' },
  { ca: 'contacte', en: 'contact' },
] as const;

export const nav = {
  ca: [
    { label: 'Associació', href: '/ca/associacio/' },
    { label: 'Activitat', href: '/ca/activitat/' },
    { label: 'Recursos', href: '/ca/recursos/' },
    { label: 'Equip', href: '/ca/equip/' },
    { label: 'Col·labora', href: '/ca/collabora/' },
    { label: 'Contacte', href: '/ca/contacte/' },
  ],
  en: [
    { label: 'About', href: '/en/about/' },
    { label: 'Activity', href: '/en/activity/' },
    { label: 'Resources', href: '/en/resources/' },
    { label: 'Team', href: '/en/team/' },
    { label: 'Collaborate', href: '/en/collaborate/' },
    { label: 'Contact', href: '/en/contact/' },
  ],
} satisfies Record<Lang, { label: string; href: string }[]>;

export const ui = {
  ca: {
    skip: 'Ves al contingut',
    menu: 'Menú',
    language: 'English',
    languageShort: 'EN',
    explore: 'Explora l’activitat',
    learnMore: 'Coneix l’associació',
    currentPhase: 'FASE ACTUAL',
    currentPhaseTitle: 'Construcció de la base tècnica i institucional.',
    currentPhaseText:
      'Estem definint el programa inicial, la cartera de projectes i les primeres col·laboracions acadèmiques.',
    viewPage: 'Veure pàgina',
    onThisPage: 'EN AQUESTA PÀGINA',
    notAdvice:
      'Associació universitària educativa. No gestionem capital, no oferim assessorament financer i no comercialitzem productes d’inversió.',
    footerText:
      'Matemàtiques, programació i dades aplicades als mercats financers.',
    allRights: 'UPC Quant Society',
  },
  en: {
    skip: 'Skip to content',
    menu: 'Menu',
    language: 'Català',
    languageShort: 'CA',
    explore: 'Explore our activity',
    learnMore: 'About the society',
    currentPhase: 'CURRENT PHASE',
    currentPhaseTitle: 'Building the technical and institutional foundations.',
    currentPhaseText:
      'We are defining the initial programme, the project portfolio and the first academic collaborations.',
    viewPage: 'View page',
    onThisPage: 'ON THIS PAGE',
    notAdvice:
      'An educational student association. We do not manage capital, provide financial advice or sell investment products.',
    footerText:
      'Mathematics, programming and data applied to financial markets.',
    allRights: 'UPC Quant Society',
  },
} satisfies Record<Lang, Record<string, string>>;

export const home = {
  ca: {
    title: 'UPC Quant Society',
    description:
      'Associació d’estudiants de la UPC dedicada a les finances quantitatives, les matemàtiques, la programació i l’anàlisi de dades.',
    eyebrow: 'ASSOCIACIÓ D’ESTUDIANTS · UPC',
    heading: 'Finances quantitatives a la UPC.',
    intro:
      'Un espai per estudiar matemàtiques, programació i anàlisi de dades aplicades als mercats financers, i per convertir aquest interès en formació, projectes i treball col·laboratiu.',
    areas: [
      { index: '01', title: 'Projectes', text: 'Implementacions, simulacions i recerca aplicada.', href: '/ca/projectes/' },
      { index: '02', title: 'Competicions', text: 'Preparació tècnica i participació en reptes quantitatius.', href: '/ca/competicions/' },
      { index: '03', title: 'Recursos', text: 'Materials seleccionats i organitzats per nivell i tema.', href: '/ca/recursos/' },
    ],
    bridgeTitle: 'Un punt de connexió entre estudiants, universitat i indústria.',
    bridgeText:
      'La prioritat és construir una comunitat sòlida dins la UPC i establir relacions útils amb professors, investigadors, alumni i professionals.',
    bridgeHref: '/ca/collabora/',
    bridgeLink: 'Formes de col·laboració',
  },
  en: {
    title: 'UPC Quant Society',
    description:
      'A UPC student association dedicated to quantitative finance, mathematics, programming and data analysis.',
    eyebrow: 'STUDENT ASSOCIATION · UPC',
    heading: 'Quantitative finance at UPC.',
    intro:
      'A space to study mathematics, programming and data analysis applied to financial markets, and to turn that interest into training, projects and collaborative work.',
    areas: [
      { index: '01', title: 'Projects', text: 'Implementations, simulations and applied research.', href: '/en/projects/' },
      { index: '02', title: 'Competitions', text: 'Technical preparation and participation in quantitative challenges.', href: '/en/competitions/' },
      { index: '03', title: 'Resources', text: 'Selected materials organised by level and topic.', href: '/en/resources/' },
    ],
    bridgeTitle: 'A point of connection between students, university and industry.',
    bridgeText:
      'Our priority is to build a strong community at UPC and establish useful relationships with professors, researchers, alumni and professionals.',
    bridgeHref: '/en/collaborate/',
    bridgeLink: 'Ways to collaborate',
  },
} satisfies Record<Lang, Record<string, unknown>>;

export const pages: Record<Lang, Record<string, PageData>> = {
  ca: {
    associacio: {
      title: 'Associació',
      description: 'Origen, missió, principis i naturalesa de UPC Quant Society.',
      eyebrow: 'QUI SOM',
      intro:
        'UPC Quant Society neix per crear dins la UPC un espai rigorós on estudiants amb interès en les matemàtiques, la programació i els mercats financers puguin aprendre i treballar conjuntament.',
      sections: [
        {
          id: 'origen',
          kicker: '01',
          title: 'Per què existeix',
          body: [
            'La UPC ofereix una formació tècnica potent en matemàtiques, enginyeria, informàtica i ciència de dades. Tanmateix, hi ha menys espais on explorar com aquestes disciplines s’apliquen als mercats financers.',
            'L’associació vol cobrir aquest buit amb una proposta universitària, pràctica i col·laborativa. No substitueix la formació acadèmica: la complementa.',
          ],
        },
        {
          id: 'missio',
          kicker: '02',
          title: 'Missió',
          body: [
            'Reunim estudiants amb interès en les finances quantitatives per aprendre, desenvolupar projectes aplicats i connectar amb l’entorn acadèmic i professional. Ho fem mitjançant formació tècnica, treball col·laboratiu i iniciatives que transformen el coneixement en resultats concrets i revisables.',
          ],
        },
        {
          id: 'principis',
          kicker: '03',
          title: 'Com treballem',
          cards: [
            { label: 'RIGOR', title: 'Hipòtesis verificables', text: 'Dades, codi reproduïble i conclusions que es puguin discutir.' },
            { label: 'COL·LABORACIÓ', title: 'Aprenentatge actiu', text: 'Els membres no només consumeixen contingut: també expliquen, implementen i revisen.' },
            { label: 'INTEGRITAT', title: 'Límits clars', text: 'Diferenciem formació i simulació de qualsevol activitat d’inversió real.' },
            { label: 'CONTINUÏTAT', title: 'Coneixement documentat', text: 'Projectes, processos i materials pensats per sobreviure al relleu generacional.' },
          ],
        },
        {
          id: 'naturalesa',
          kicker: '04',
          title: 'Què som i què no som',
          cards: [
            { title: 'Som', text: 'Una associació universitària educativa, tècnica i sense ànim de lucre.' },
            { title: 'Som', text: 'Un espai per formar-se, implementar models, analitzar dades i participar en simulacions.' },
            { title: 'No som', text: 'Un fons d’inversió, una gestora, un servei de senyals o un club d’especulació.' },
            { title: 'No fem', text: 'Gestió de capital, assessorament financer ni venda de productes d’inversió.' },
          ],
        },
        {
          id: 'transparencia',
          kicker: '05',
          title: 'Transparència',
          body: [
            'No som un fons d’inversió ni una empresa financera. No gestionem diners propis ni de tercers, no oferim assessorament financer i no venem cap producte o servei d’inversió.',
            'Les activitats de l’associació poden incloure anàlisi de dades financeres, desenvolupament de models, backtesting i simulacions de trading. Tot es realitza amb finalitats educatives, acadèmiques i de recerca.',
          ],
          note: {
            title: 'La idea és més senzilla del que sembla.',
            text: 'Ens agraden les matemàtiques i els mercats, i volem un espai on estudiar-los amb altres estudiants.',
            tone: 'green',
          },
        },
        {
          id: 'visio',
          kicker: '06',
          title: 'Visió',
          body: [
            'Esdevenir una comunitat universitària de referència en finances quantitatives, reconeguda per l’excel·lència tècnica dels seus membres i per la seva capacitat de connectar talent, acadèmia i indústria.',
          ],
        },
      ],
    },
    activitat: {
      title: 'Activitat',
      description: 'Formació, projectes, competicions i connexió acadèmica de UPC Quant Society.',
      eyebrow: 'QUÈ FEM',
      intro:
        'L’activitat de l’associació s’organitza al voltant de quatre línies. Cada una ha de produir aprenentatge verificable, documentació i resultats útils per als membres.',
      sections: [
        {
          id: 'linies',
          title: 'Línies de treball',
          cards: [
            { label: '01', title: 'Formació tècnica', text: 'Sessions continuades, seminaris i workshops d’implementació.', href: '/ca/recursos/' },
            { label: '02', title: 'Projectes', text: 'Treball en equip sobre models, dades, backtesting i simulació.', href: '/ca/projectes/' },
            { label: '03', title: 'Competicions', text: 'Preparació estructurada i participació quan l’equip i el calendari ho permetin.', href: '/ca/competicions/' },
            { label: '04', title: 'Connexió externa', text: 'Activitats amb professors, investigadors, alumni i professionals.', href: '/ca/collabora/' },
          ],
        },
        {
          id: 'metode',
          title: 'Mètode de treball',
          cards: [
            { title: 'Teoria', text: 'Entendre el model, les hipòtesis i els límits abans d’implementar-lo.' },
            { title: 'Implementació', text: 'Convertir la idea en codi llegible, modular i reproduïble.' },
            { title: 'Validació', text: 'Mesurar resultats, revisar errors i evitar conclusions basades en una sola prova.' },
            { title: 'Publicació', text: 'Documentar què s’ha fet, què ha funcionat i què queda obert.' },
          ],
        },
      ],
    },
    projectes: {
      title: 'Projectes',
      description: 'Projectes quantitatius i línies de treball de UPC Quant Society.',
      eyebrow: 'TREBALL TÈCNIC',
      intro:
        'Els projectes són el principal espai d’aplicació. Han de partir d’una pregunta concreta, tenir una implementació reproduïble i acabar amb codi i documentació revisables.',
      sections: [
        {
          id: 'estat',
          title: 'Estat actual',
          note: {
            title: 'Cartera inicial en definició',
            text: 'Publicarem cada projecte quan l’abast, l’equip responsable i els resultats esperats estiguin confirmats. No presentarem idees preliminars com si fossin treball acabat.',
            tone: 'neutral',
          },
        },
        {
          id: 'linies',
          title: 'Línies de treball previstes',
          cards: [
            { status: 'EN DEFINICIÓ', title: 'Models de pricing', text: 'Implementació i comparació numèrica de mètodes per valorar derivats.' },
            { status: 'EN DEFINICIÓ', title: 'Microestructura de mercat', text: 'Simulacions de llibres d’ordres, market making i gestió d’inventari.' },
            { status: 'EN DEFINICIÓ', title: 'Dades financeres', text: 'Anàlisi de sèries temporals, construcció de features i validació de models.' },
            { status: 'EN DEFINICIÓ', title: 'Infraestructura quantitativa', text: 'Backtesting, mètriques, logging i eines per comparar estratègies.' },
          ],
        },
        {
          id: 'estandard',
          title: 'Què publicarem de cada projecte',
          cards: [
            { title: 'Problema', text: 'Pregunta, hipòtesis i abast.' },
            { title: 'Mètode', text: 'Model matemàtic, dades i decisions d’implementació.' },
            { title: 'Resultats', text: 'Mètriques, limitacions i conclusions.' },
            { title: 'Repositori', text: 'Codi, instruccions de reproducció i documentació.' },
          ],
        },
      ],
    },
    competicions: {
      title: 'Competicions',
      description: 'Preparació i participació de UPC Quant Society en reptes quantitatius.',
      eyebrow: 'REPTES QUANTITATIUS',
      intro:
        'Les competicions permeten treballar sota restriccions reals de temps, codi i coordinació. Només anunciarem participacions quan l’equip i la inscripció estiguin confirmats.',
      sections: [
        {
          id: 'preparacio',
          title: 'Com ens preparem',
          cards: [
            { title: 'Infraestructura', text: 'Bot base, eines de prova, logging i control de versions.' },
            { title: 'Research', text: 'Hipòtesis, anàlisi de dades, fair value i microestructura.' },
            { title: 'Estratègia', text: 'Implementació, gestió de risc i comparació de versions.' },
            { title: 'Coordinació', text: 'Repartiment de rols, submissions i revisió final.' },
          ],
        },
        {
          id: 'participacio',
          title: 'Participació',
          note: {
            title: 'Sense resultats inventats',
            text: 'Aquesta pàgina distingirà entre preparació, participació confirmada i resultats publicats. Fins que no hi hagi una inscripció o un resultat verificable, no apareixerà com a fita de l’associació.',
            tone: 'green',
          },
        },
      ],
    },
    esdeveniments: {
      title: 'Esdeveniments',
      description: 'Esdeveniments, seminaris i workshops de UPC Quant Society.',
      eyebrow: 'AGENDA',
      intro:
        'Aquí publicarem les activitats obertes: sessions tècniques, workshops, ponències i esdeveniments conjunts amb altres entitats.',
      sections: [
        {
          id: 'propers',
          title: 'Propers esdeveniments',
          note: {
            title: 'Encara no hi ha cap esdeveniment públic anunciat.',
            text: 'Quan es confirmi una activitat, hi publicarem la data, el lloc, el format, el ponent i l’enllaç d’inscripció.',
            tone: 'neutral',
          },
        },
        {
          id: 'formats',
          title: 'Formats previstos',
          cards: [
            { title: 'Seminari tècnic', text: 'Una sessió centrada en un model, paper o problema concret.' },
            { title: 'Workshop', text: 'Implementació pràctica amb codi, dades i resultats.' },
            { title: 'Ponència', text: 'Experiència acadèmica o professional explicada per una persona convidada.' },
            { title: 'Sessió conjunta', text: 'Activitat interdisciplinària amb altres associacions o grups de la UPC.' },
          ],
        },
      ],
    },
    recursos: {
      title: 'Recursos',
      description:
        'Biblioteca i itineraris d’aprenentatge de finances quantitatives de UPC Quant Society.',
      eyebrow: 'APRENENTATGE',
      intro:
        'Consulta recursos acadèmics seleccionats o segueix itineraris ordenats per construir coneixement de manera progressiva.',
      sections: [
        {
          id: 'biblioteca',
          kicker: '01',
          title: 'Biblioteca',
          body: [
            'Explora el catàleg complet de llibres, cursos, apunts, papers i altres materials seleccionats per UPC Quant Society.',
            'Cada recurs està classificat per àrea, nivell, tipus, accés i utilitat quantitativa.',
          ],
          cta: {
            label: 'Consulta tots els recursos disponibles',
            href: '/ca/recursos/biblioteca/',
          },
        },
        {
          id: 'roadmaps',
          kicker: '02',
          title: 'Roadmaps',
          body: [
            'Els roadmaps transformen la biblioteca en itineraris d’aprenentatge ordenats. Cada ruta indica què estudiar, en quin ordre i quins coneixements previs són recomanables.',
          ],
          cards: [
            {
              label: 'MATEMÀTIQUES',
              title: 'Fonaments matemàtics',
              text: 'Proves, càlcul, àlgebra lineal, anàlisi real, optimització i mètodes numèrics.',
              href: '/ca/recursos/roadmaps/mathematics/',
            },
            {
              label: 'PROBABILITAT',
              title: 'Probabilitat i estadística',
              text: 'Variables aleatòries, condicionament, inferència, regressió i fonaments estadístics.',
              href: '/ca/recursos/roadmaps/probability-statistics/',
            },
            {
              label: 'ECONOMETRIA',
              title: 'Econometria i sèries temporals',
              text: 'Regressió, forecasting, ARIMA, volatilitat, cointegració i validació temporal.',
              href: '/ca/recursos/roadmaps/econometrics-time-series/',
            },
            {
              label: 'MACHINE LEARNING',
              title: 'Machine learning quantitatiu',
              text: 'Aprenentatge estadístic, models supervisats, validació i aplicacions a dades financeres.',
              href: '/ca/recursos/roadmaps/machine-learning/',
            },
            {
              label: 'FINANCES',
              title: 'Finances matemàtiques',
              text: 'Mercats, arbitratge, derivats, pricing, cobertura, carteres i gestió del risc.',
              href: '/ca/recursos/roadmaps/mathematical-finance/',
            },
            {
              label: 'PROGRAMACIÓ',
              title: 'Programació quantitativa',
              text: 'Python, tractament de dades, computació científica, testing i infraestructura de recerca.',
              href: '/ca/recursos/roadmaps/quant-programming/',
            },
          ],
        },
        {
          id: 'metode',
          kicker: '03',
          title: 'Com utilitzar els recursos',
          body: [
            'La biblioteca serveix per explorar lliurement. Els roadmaps són preferibles quan es vol seguir una progressió estructurada.',
            'Les rutes no substitueixen assignatures universitàries ni pretenen cobrir tots els recursos disponibles. Seleccionen una seqüència coherent i assumible.',
          ],
        },
      ],
    },
    collabora: {
      title: 'Col·labora',
      description: 'Formes de col·laboració acadèmica i professional amb UPC Quant Society.',
      eyebrow: 'UNIVERSITAT I INDÚSTRIA',
      intro:
        'Col·laborem amb professorat, investigadors, professionals, empreses i entitats que vulguin contribuir a projectes, formació i activitats tècniques amb impacte real.',
      sections: [
        {
          id: 'academia',
          title: 'Acadèmia',
          body: ['Supervisa un projecte, proposa una línia de recerca o participa en una sessió tècnica.'],
        },
        {
          id: 'industria',
          title: 'Indústria',
          body: ['Planteja un repte, organitza un workshop o presenta un problema real del sector.'],
        },
        {
          id: 'entitats',
          title: 'Entitats i associacions',
          body: ['Desenvolupem conjuntament seminaris, competicions i activitats interdisciplinàries.'],
        },
        {
          id: 'proposta',
          title: 'Tens una proposta concreta? Parlem-ne.',
          body: ['Explica’ns l’objectiu, el format i el possible encaix amb l’associació.'],
          cta: {
            label: 'Proposa una col·laboració',
            href: `mailto:${contactEmail}`,
          },
        },
      ],
    },
    equip: {
      title: 'Equip',
      description: 'Equip fundador i estructura de UPC Quant Society.',
      eyebrow: 'ORGANITZACIÓ',
      intro:
        'L’associació es construeix amb una estructura petita i responsabilitats clares. La composició formal de la junta i els rols operatius s’actualitzaran en aquesta pàgina.',
      sections: [
        {
          id: 'cofundadors',
          title: 'Cofundadors',
          people: [
            { name: 'Aniol Arolas Salvador', role: 'Cofundador', description: 'Estudiant d’Enginyeria de Telecomunicacions a la UPC.' },
            { name: 'Pau Gibert Hernández', role: 'Cofundador', description: 'Estudiant d’Enginyeria de Telecomunicacions a la UPC.' },
          ],
        },
        {
          id: 'equip-fundador',
          title: 'Equip fundador',
          people: [
            { name: 'Alejandro Cilveti', role: 'Membre de l’equip fundador', description: 'Estudiant de Matemàtiques a la UPC.' },
            { name: 'Hàn Virgili', role: 'Membre de l’equip fundador', description: 'Estudiant de Matemàtiques a la UPC.' },
            { name: 'Martí Ventura', role: 'Membre de l’equip fundador', description: 'Estudiant de Dret i Administració i Direcció d’Empreses a la UAB.' },
            { name: 'Martina Gallemí', role: 'Membre de l’equip fundador', description: 'Estudiant d’Enginyeria Matemàtica en Ciència de Dades a la UPF.' },
          ],
        },
        {
          id: 'estructura',
          title: 'Estructura de govern',
          cards: [
            { title: 'Direcció', text: 'Visió, prioritats i representació institucional.' },
            { title: 'Coordinació', text: 'Documentació, seguiment i continuïtat interna.' },
            { title: 'Recursos', text: 'Pressupost, transparència i sostenibilitat econòmica.' },
            { title: 'Grups de treball', text: 'Formació, projectes, competicions, comunicació i relacions externes.' },
          ],
        },
      ],
    },
    participa: {
      title: 'Participa',
      description: 'Informació per participar a UPC Quant Society.',
      eyebrow: 'MEMBRES',
      intro:
        'Busquem estudiants amb curiositat, capacitat analítica i voluntat de contribuir. No cal arribar amb coneixements previs de finances quantitatives.',
      sections: [
        {
          id: 'perfil',
          title: 'A qui ens adrecem',
          cards: [
            { title: 'Curiositat tècnica', text: 'Interès per entendre problemes i aprendre eines noves.' },
            { title: 'Base analítica', text: 'Matemàtiques, estadística, programació o voluntat clara d’adquirir-les.' },
            { title: 'Compromís', text: 'Disponibilitat per participar, documentar i treballar en equip.' },
            { title: 'Contribució', text: 'Voluntat de compartir coneixement, no només de consumir-lo.' },
          ],
        },
        {
          id: 'proces',
          title: 'Procés previst',
          cards: [
            { label: '01', title: 'Candidatura', text: 'Informació bàsica, motivació i experiència rellevant.' },
            { label: '02', title: 'Revisió', text: 'Valoració del perfil, la motivació i la disponibilitat.' },
            { label: '03', title: 'Conversa', text: 'Entrevista breu per alinear expectatives.' },
            { label: '04', title: 'Incorporació', text: 'Assignació inicial a formació, projecte o activitat.' },
          ],
        },
        {
          id: 'convocatoria',
          title: 'Convocatòria',
          note: {
            title: 'La propera convocatòria es publicarà aquí.',
            text: 'No hi ha cap formulari actiu en aquesta versió. Es podrà registrar interès a través de la pàgina de contacte.',
            tone: 'green',
          },
        },
      ],
    },
    contacte: {
      title: 'Contacte',
      description: 'Contacte institucional de UPC Quant Society.',
      eyebrow: 'PARLEM',
      intro:
        'Per a consultes acadèmiques, col·laboracions, activitats o interès a participar, escriu-nos indicant breument el motiu del contacte.',
      sections: [
        {
          id: 'canals',
          title: 'Canals',
          cards: [
            { label: 'EMAIL', title: contactEmail, text: 'Consultes generals, acadèmiques i professionals.', href: `mailto:${contactEmail}` },
            { label: 'GITHUB', title: 'UPC-Quant-Society', text: 'Repositoris i projectes públics.', href: githubUrl },
            { label: 'LINKEDIN', title: 'Perfil en preparació', text: 'Properament' },
            { label: 'INSTAGRAM', title: 'Perfil en preparació', text: 'Properament' },
          ],
        },
        {
          id: 'missatge',
          title: 'Què cal incloure',
          body: [
            'Nom, institució o titulació, motiu del contacte i una proposta concreta quan sigui possible.',
            'Respondrem amb més facilitat a missatges clars que expliquin què es busca i quin encaix pot tenir amb l’activitat de l’associació.',
          ],
        },
      ],
    },
  },
  en: {
    about: {
      title: 'About',
      description: 'Origins, mission, principles and nature of UPC Quant Society.',
      eyebrow: 'WHO WE ARE',
      intro:
        'UPC Quant Society was created to provide a rigorous space at UPC where students interested in mathematics, programming and financial markets can learn and work together.',
      sections: [
        {
          id: 'origins',
          kicker: '01',
          title: 'Why it exists',
          body: [
            'UPC offers strong technical education in mathematics, engineering, computer science and data science. There are fewer spaces, however, to explore how these disciplines are applied to financial markets.',
            'The society aims to fill this gap with a university-based, practical and collaborative approach. It does not replace academic education; it complements it.',
          ],
        },
        {
          id: 'mission',
          kicker: '02',
          title: 'Mission',
          body: [
            'We bring together students interested in quantitative finance to learn, develop applied projects and connect with academic and professional environments. We do this through technical training, collaborative work and initiatives that turn knowledge into concrete, reviewable outcomes.',
          ],
        },
        {
          id: 'principles',
          kicker: '03',
          title: 'How we work',
          cards: [
            { label: 'RIGOUR', title: 'Testable hypotheses', text: 'Data, reproducible code and conclusions that can be discussed.' },
            { label: 'COLLABORATION', title: 'Active learning', text: 'Members do not only consume content: they explain, implement and review it.' },
            { label: 'INTEGRITY', title: 'Clear boundaries', text: 'We distinguish education and simulation from any real investment activity.' },
            { label: 'CONTINUITY', title: 'Documented knowledge', text: 'Projects, processes and materials designed to survive generational turnover.' },
          ],
        },
        {
          id: 'nature',
          kicker: '04',
          title: 'What we are — and what we are not',
          cards: [
            { title: 'We are', text: 'An educational, technical and non-profit student association.' },
            { title: 'We are', text: 'A space for training, model implementation, data analysis and simulations.' },
            { title: 'We are not', text: 'An investment fund, asset manager, signal service or speculation club.' },
            { title: 'We do not', text: 'Manage capital, provide financial advice or sell investment products.' },
          ],
        },
        {
          id: 'transparency',
          kicker: '05',
          title: 'Transparency',
          body: [
            'We are not an investment fund or a financial company. We do not manage our own money or third-party capital, provide financial advice, or sell any investment product or service.',
            'The society may work on financial data analysis, model development, backtesting and trading simulations. All such activity is educational, academic and research-oriented.',
          ],
          note: {
            title: 'The idea is simpler than it may sound.',
            text: 'We enjoy mathematics and markets, and we want a place to study them with other students.',
            tone: 'green',
          },
        },
        {
          id: 'vision',
          kicker: '06',
          title: 'Vision',
          body: [
            'To become a leading university community in quantitative finance, recognised for the technical excellence of its members and its ability to connect talent, academia and industry.',
          ],
        },
      ],
    },
    activity: {
      title: 'Activity',
      description: 'Training, projects, competitions and academic connection at UPC Quant Society.',
      eyebrow: 'WHAT WE DO',
      intro:
        'The society is organised around four lines of activity. Each should produce verifiable learning, documentation and useful outcomes for members.',
      sections: [
        {
          id: 'areas',
          title: 'Areas of work',
          cards: [
            { label: '01', title: 'Technical training', text: 'Structured sessions, seminars and implementation workshops.', href: '/en/resources/' },
            { label: '02', title: 'Projects', text: 'Teamwork on models, data, backtesting and simulation.', href: '/en/projects/' },
            { label: '03', title: 'Competitions', text: 'Structured preparation and participation when the team and calendar allow it.', href: '/en/competitions/' },
            { label: '04', title: 'External connection', text: 'Activities with professors, researchers, alumni and professionals.', href: '/en/collaborate/' },
          ],
        },
        {
          id: 'method',
          title: 'Working method',
          cards: [
            { title: 'Theory', text: 'Understand the model, assumptions and limitations before implementing it.' },
            { title: 'Implementation', text: 'Turn the idea into readable, modular and reproducible code.' },
            { title: 'Validation', text: 'Measure results, review errors and avoid conclusions based on a single test.' },
            { title: 'Publication', text: 'Document what was done, what worked and what remains open.' },
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      description: 'Quantitative projects and workstreams at UPC Quant Society.',
      eyebrow: 'TECHNICAL WORK',
      intro:
        'Projects are the main space for application. They should start from a concrete question, have a reproducible implementation and end with reviewable code and documentation.',
      sections: [
        {
          id: 'status',
          title: 'Current status',
          note: {
            title: 'Initial portfolio being defined',
            text: 'We will publish each project once its scope, responsible team and expected outputs are confirmed. Preliminary ideas will not be presented as completed work.',
            tone: 'neutral',
          },
        },
        {
          id: 'workstreams',
          title: 'Planned workstreams',
          cards: [
            { status: 'BEING DEFINED', title: 'Pricing models', text: 'Implementation and numerical comparison of methods for valuing derivatives.' },
            { status: 'BEING DEFINED', title: 'Market microstructure', text: 'Order-book simulations, market making and inventory management.' },
            { status: 'BEING DEFINED', title: 'Financial data', text: 'Time-series analysis, feature construction and model validation.' },
            { status: 'BEING DEFINED', title: 'Quant infrastructure', text: 'Backtesting, metrics, logging and strategy comparison tools.' },
          ],
        },
        {
          id: 'standard',
          title: 'What each project will publish',
          cards: [
            { title: 'Problem', text: 'Question, assumptions and scope.' },
            { title: 'Method', text: 'Mathematical model, data and implementation decisions.' },
            { title: 'Results', text: 'Metrics, limitations and conclusions.' },
            { title: 'Repository', text: 'Code, reproduction instructions and documentation.' },
          ],
        },
      ],
    },
    competitions: {
      title: 'Competitions',
      description: 'Preparation and participation in quantitative challenges.',
      eyebrow: 'QUANTITATIVE CHALLENGES',
      intro:
        'Competitions provide a way to work under real constraints of time, code and coordination. Participation will only be announced when the team and registration are confirmed.',
      sections: [
        {
          id: 'preparation',
          title: 'How we prepare',
          cards: [
            { title: 'Infrastructure', text: 'Base bot, testing tools, logging and version control.' },
            { title: 'Research', text: 'Hypotheses, data analysis, fair value and microstructure.' },
            { title: 'Strategy', text: 'Implementation, risk management and version comparison.' },
            { title: 'Coordination', text: 'Role allocation, submissions and final review.' },
          ],
        },
        {
          id: 'participation',
          title: 'Participation',
          note: {
            title: 'No invented results',
            text: 'This page will distinguish between preparation, confirmed participation and published results. Until there is a verifiable registration or result, it will not appear as a society achievement.',
            tone: 'green',
          },
        },
      ],
    },
    events: {
      title: 'Events',
      description: 'Events, seminars and workshops organised by UPC Quant Society.',
      eyebrow: 'AGENDA',
      intro:
        'This page will publish open activities: technical sessions, workshops, talks and joint events with other organisations.',
      sections: [
        {
          id: 'upcoming',
          title: 'Upcoming events',
          note: {
            title: 'No public event has been announced yet.',
            text: 'Once an activity is confirmed, we will publish the date, location, format, speaker and registration link.',
            tone: 'neutral',
          },
        },
        {
          id: 'formats',
          title: 'Planned formats',
          cards: [
            { title: 'Technical seminar', text: 'A session focused on a specific model, paper or problem.' },
            { title: 'Workshop', text: 'Practical implementation with code, data and results.' },
            { title: 'Talk', text: 'Academic or professional experience shared by a guest.' },
            { title: 'Joint session', text: 'An interdisciplinary activity with another UPC group or association.' },
          ],
        },
      ],
    },
    resources: {
      title: 'Resources',
      description: 'Quantitative finance learning resources curated by UPC Quant Society.',
      eyebrow: 'LIBRARY',
      intro:
        'The library will collect materials organised by level and topic. The aim is not to accumulate links, but to explain what each resource adds and when it is useful.',
      sections: [
        {
          id: 'categories',
          title: 'Categories',
          cards: [
            { title: 'Foundations', text: 'Probability, statistics, linear algebra and calculus.' },
            { title: 'Derivatives and stochastic processes', text: 'Pricing, simulation and modelling.' },
            { title: 'Microstructure', text: 'Order books, execution, liquidity and market making.' },
            { title: 'Data science', text: 'Time series, machine learning and validation.' },
            { title: 'Programming', text: 'Python, C++, data tools and project architecture.' },
            { title: 'Professional preparation', text: 'Quant interviews, CVs and recruitment processes.' },
          ],
        },
        {
          id: 'criteria',
          title: 'Selection criteria',
          body: [
            'We will prioritise books, papers, official documentation, university courses and materials with exercises or implementations.',
            'Where possible, each resource will include level, prerequisites, approximate duration and availability through UPC libraries.',
          ],
        },
      ],
    },
    collaborate: {
      title: 'Collaborate',
      description: 'Academic and professional collaboration with UPC Quant Society.',
      eyebrow: 'UNIVERSITY AND INDUSTRY',
      intro:
        'We collaborate with professors, researchers, professionals, companies and organisations interested in contributing to projects, training and technical activities with tangible outcomes.',
      sections: [
        {
          id: 'academia',
          title: 'Academia',
          body: ['Supervise a project, propose a research direction or contribute to a technical session.'],
        },
        {
          id: 'industry',
          title: 'Industry',
          body: ['Propose a challenge, organise a workshop or present a real industry problem.'],
        },
        {
          id: 'organisations',
          title: 'Organisations and associations',
          body: ['Develop seminars, competitions and interdisciplinary activities together.'],
        },
        {
          id: 'proposal',
          title: 'Have a concrete proposal? Let’s discuss it.',
          body: ['Tell us the objective, format and how it could fit with the society.'],
          cta: {
            label: 'Propose a collaboration',
            href: `mailto:${contactEmail}`,
          },
        },
      ],
    },
    team: {
      title: 'Team',
      description: 'Founding team and structure of UPC Quant Society.',
      eyebrow: 'ORGANISATION',
      intro:
        'The society is being built with a small structure and clear responsibilities. The formal board and operational roles will be updated on this page.',
      sections: [
        {
          id: 'co-founders',
          title: 'Co-founders',
          people: [
            { name: 'Aniol Arolas Salvador', role: 'Co-founder', description: 'Telecommunications Engineering student at UPC.' },
            { name: 'Pau Gibert Hernández', role: 'Co-founder', description: 'Telecommunications Engineering student at UPC.' },
          ],
        },
        {
          id: 'founding-team',
          title: 'Founding team',
          people: [
            { name: 'Alejandro Cilveti', role: 'Founding team member', description: 'Mathematics student at UPC.' },
            { name: 'Hàn Virgili', role: 'Founding team member', description: 'Mathematics student at UPC.' },
            { name: 'Martí Ventura', role: 'Founding team member', description: 'Law and Business Administration student at UAB.' },
            { name: 'Martina Gallemí', role: 'Founding team member', description: 'Mathematical Engineering in Data Science student at UPF.' },
          ],
        },
        {
          id: 'structure',
          title: 'Governance structure',
          cards: [
            { title: 'Direction', text: 'Vision, priorities and institutional representation.' },
            { title: 'Coordination', text: 'Documentation, follow-up and internal continuity.' },
            { title: 'Resources', text: 'Budget, transparency and financial sustainability.' },
            { title: 'Working groups', text: 'Training, projects, competitions, communication and external relations.' },
          ],
        },
      ],
    },
    join: {
      title: 'Join',
      description: 'Information about joining UPC Quant Society.',
      eyebrow: 'MEMBERS',
      intro:
        'We are looking for students with curiosity, analytical ability and a willingness to contribute. Previous knowledge of quantitative finance is not required.',
      sections: [
        {
          id: 'profile',
          title: 'Who we are looking for',
          cards: [
            { title: 'Technical curiosity', text: 'Interest in understanding problems and learning new tools.' },
            { title: 'Analytical foundation', text: 'Mathematics, statistics, programming or a clear willingness to learn them.' },
            { title: 'Commitment', text: 'Availability to participate, document and work in a team.' },
            { title: 'Contribution', text: 'Willingness to share knowledge, not only consume it.' },
          ],
        },
        {
          id: 'process',
          title: 'Expected process',
          cards: [
            { label: '01', title: 'Application', text: 'Basic information, motivation and relevant experience.' },
            { label: '02', title: 'Review', text: 'Assessment of profile, motivation and availability.' },
            { label: '03', title: 'Conversation', text: 'A short interview to align expectations.' },
            { label: '04', title: 'Onboarding', text: 'Initial allocation to training, a project or an activity.' },
          ],
        },
        {
          id: 'call',
          title: 'Applications',
          note: {
            title: 'The next call will be published here.',
            text: 'There is no active form in this version. Interest can be registered through the contact page.',
            tone: 'green',
          },
        },
      ],
    },
    contact: {
      title: 'Contact',
      description: 'Institutional contact for UPC Quant Society.',
      eyebrow: 'GET IN TOUCH',
      intro:
        'For academic enquiries, collaborations, activities or interest in joining, write to us and briefly explain the reason for contacting us.',
      sections: [
        {
          id: 'channels',
          title: 'Channels',
          cards: [
            { label: 'EMAIL', title: contactEmail, text: 'General, academic and professional enquiries.', href: `mailto:${contactEmail}` },
            { label: 'GITHUB', title: 'UPC-Quant-Society', text: 'Public repositories and projects.', href: githubUrl },
            { label: 'LINKEDIN', title: 'Profile being prepared', text: 'Coming soon' },
            { label: 'INSTAGRAM', title: 'Profile being prepared', text: 'Coming soon' },
          ],
        },
        {
          id: 'message',
          title: 'What to include',
          body: [
            'Name, institution or degree, reason for contacting us and a concrete proposal whenever possible.',
            'Clear messages that explain the intended outcome and its possible fit with the society are easier to answer.',
          ],
        },
      ],
    },
  },
};

export function getAlternatePath(lang: Lang, slug?: string) {
  const other: Lang = lang === 'ca' ? 'en' : 'ca';
  if (!slug) return `/${other}/`;

  const pair = routePairs.find((item) => item[lang] === slug);
  return pair ? `/${other}/${pair[other]}/` : `/${other}/`;
}
