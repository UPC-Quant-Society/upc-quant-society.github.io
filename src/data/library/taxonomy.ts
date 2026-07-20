export type LibraryLang = 'ca' | 'en';

export type LocalizedText = {
  ca: string;
  en: string;
};

export type TaxonomyArea = {
  id: string;
  atlasId: `TAX-${string}`;
  name: LocalizedText;
  core: LocalizedText;
  dependencies: LocalizedText;
  quantApplications: LocalizedText;
  updateFrequency: '3-6-months' | '6-12-months' | '1-2-years' | '3-5-years' | 'new-edition-only';
};

export const taxonomy = [
  {
    id: 'mathematics',
    atlasId: 'TAX-01',
    name: { ca: 'Fonaments matemàtics', en: 'Mathematical foundations' },
    core: {
      ca: 'Proves, càlcul, àlgebra lineal, anàlisi i PDE.',
      en: 'Proofs, calculus, linear algebra, analysis and PDEs.',
    },
    dependencies: {
      ca: 'Cap; càlcul elemental segons el recurs.',
      en: 'None; elementary calculus depending on the resource.',
    },
    quantApplications: {
      ca: 'Base de tots els models quantitatius.',
      en: 'Foundation of all quantitative models.',
    },
    updateFrequency: 'new-edition-only',
  },
  {
    id: 'probability',
    atlasId: 'TAX-02',
    name: { ca: 'Probabilitat', en: 'Probability' },
    core: {
      ca: 'Variables aleatòries, condicionament i convergència.',
      en: 'Random variables, conditioning and convergence.',
    },
    dependencies: { ca: 'Càlcul i àlgebra.', en: 'Calculus and algebra.' },
    quantApplications: {
      ca: 'Incertesa, simulació i valoració.',
      en: 'Uncertainty, simulation and pricing.',
    },
    updateFrequency: 'new-edition-only',
  },
  {
    id: 'statistics',
    atlasId: 'TAX-03',
    name: { ca: 'Estadística', en: 'Statistics' },
    core: {
      ca: 'Inferència, regressió, Bayes i bootstrap.',
      en: 'Inference, regression, Bayes and bootstrap.',
    },
    dependencies: { ca: 'Probabilitat.', en: 'Probability.' },
    quantApplications: {
      ca: 'Estimació, backtesting i predicció.',
      en: 'Estimation, backtesting and prediction.',
    },
    updateFrequency: '3-5-years',
  },
  {
    id: 'stochastic-processes',
    atlasId: 'TAX-04',
    name: { ca: 'Processos estocàstics', en: 'Stochastic processes' },
    core: {
      ca: 'Markov, martingales, moviment brownià i Itô.',
      en: 'Markov processes, martingales, Brownian motion and Itô calculus.',
    },
    dependencies: {
      ca: 'Probabilitat i anàlisi.',
      en: 'Probability and analysis.',
    },
    quantApplications: {
      ca: 'Derivats, risc i models de mercat.',
      en: 'Derivatives, risk and market models.',
    },
    updateFrequency: '3-5-years',
  },
  {
    id: 'mathematical-finance',
    atlasId: 'TAX-05',
    name: { ca: 'Matemàtica financera', en: 'Mathematical finance' },
    core: {
      ca: 'Arbitratge, descompte, tipus i mesures neutrals al risc.',
      en: 'Arbitrage, discounting, rates and risk-neutral measures.',
    },
    dependencies: { ca: 'Probabilitat.', en: 'Probability.' },
    quantApplications: {
      ca: 'Valoració i cobertura.',
      en: 'Pricing and hedging.',
    },
    updateFrequency: '3-5-years',
  },
  {
    id: 'derivatives-asset-pricing',
    atlasId: 'TAX-06',
    name: { ca: 'Derivats i asset pricing', en: 'Derivatives and asset pricing' },
    core: {
      ca: 'Opcions, renda fixa, crèdit i volatilitat.',
      en: 'Options, fixed income, credit and volatility.',
    },
    dependencies: {
      ca: 'Processos estocàstics i matemàtica financera.',
      en: 'Stochastic processes and mathematical finance.',
    },
    quantApplications: {
      ca: 'Pricing i hedging.',
      en: 'Pricing and hedging.',
    },
    updateFrequency: '3-5-years',
  },
  {
    id: 'econometrics-time-series',
    atlasId: 'TAX-07',
    name: {
      ca: 'Econometria i sèries temporals',
      en: 'Econometrics and time series',
    },
    core: {
      ca: 'ARIMA, VAR, GARCH, cointegració i causalitat.',
      en: 'ARIMA, VAR, GARCH, cointegration and causality.',
    },
    dependencies: { ca: 'Estadística.', en: 'Statistics.' },
    quantApplications: {
      ca: 'Senyals i macrofinances.',
      en: 'Signals and macro-finance.',
    },
    updateFrequency: '1-2-years',
  },
  {
    id: 'optimization',
    atlasId: 'TAX-08',
    name: { ca: 'Optimització', en: 'Optimization' },
    core: {
      ca: 'Convexa, no lineal, robusta i estocàstica.',
      en: 'Convex, nonlinear, robust and stochastic optimization.',
    },
    dependencies: {
      ca: 'Àlgebra lineal i càlcul.',
      en: 'Linear algebra and calculus.',
    },
    quantApplications: {
      ca: 'Carteres, execució i calibratge.',
      en: 'Portfolios, execution and calibration.',
    },
    updateFrequency: '3-5-years',
  },
  {
    id: 'graphs-networks',
    atlasId: 'TAX-09',
    name: { ca: 'Grafs i xarxes', en: 'Graphs and networks' },
    core: {
      ca: 'Xarxes, centralitat i propagació.',
      en: 'Networks, centrality and propagation.',
    },
    dependencies: {
      ca: 'Matemàtica discreta.',
      en: 'Discrete mathematics.',
    },
    quantApplications: {
      ca: 'Risc sistèmic i relacions empresarials.',
      en: 'Systemic risk and corporate relationships.',
    },
    updateFrequency: '3-5-years',
  },
  {
    id: 'numerical-computing',
    atlasId: 'TAX-10',
    name: { ca: 'Computació numèrica', en: 'Numerical computing' },
    core: {
      ca: 'Àlgebra numèrica, ODE/PDE i Monte Carlo.',
      en: 'Numerical algebra, ODE/PDE methods and Monte Carlo.',
    },
    dependencies: {
      ca: 'Matemàtiques i programació.',
      en: 'Mathematics and programming.',
    },
    quantApplications: {
      ca: 'Pricing i simulació.',
      en: 'Pricing and simulation.',
    },
    updateFrequency: '3-5-years',
  },
  {
    id: 'programming-software',
    atlasId: 'TAX-11',
    name: { ca: 'Programació i software', en: 'Programming and software' },
    core: {
      ca: 'Python, C++, R, Julia, SQL, Git i testing.',
      en: 'Python, C++, R, Julia, SQL, Git and testing.',
    },
    dependencies: {
      ca: 'Informàtica bàsica.',
      en: 'Basic computer science.',
    },
    quantApplications: {
      ca: 'Implementació de recerca i producció.',
      en: 'Research and production implementation.',
    },
    updateFrequency: '3-6-months',
  },
  {
    id: 'algorithms-data-structures',
    atlasId: 'TAX-12',
    name: {
      ca: 'Algorismes i estructures de dades',
      en: 'Algorithms and data structures',
    },
    core: {
      ca: 'Complexitat, hashing, arbres i streaming.',
      en: 'Complexity, hashing, trees and streaming.',
    },
    dependencies: { ca: 'Programació.', en: 'Programming.' },
    quantApplications: {
      ca: 'Sistemes de dades i HFT.',
      en: 'Data systems and HFT.',
    },
    updateFrequency: '1-2-years',
  },
  {
    id: 'machine-learning',
    atlasId: 'TAX-13',
    name: { ca: 'Machine learning', en: 'Machine learning' },
    core: {
      ca: 'Aprenentatge supervisat, no supervisat i ensembles.',
      en: 'Supervised learning, unsupervised learning and ensembles.',
    },
    dependencies: {
      ca: 'Estadística i optimització.',
      en: 'Statistics and optimization.',
    },
    quantApplications: {
      ca: 'Predicció, classificació i senyals.',
      en: 'Prediction, classification and signals.',
    },
    updateFrequency: '1-2-years',
  },
  {
    id: 'deep-learning-ai',
    atlasId: 'TAX-14',
    name: { ca: 'Deep learning i IA', en: 'Deep learning and AI' },
    core: {
      ca: 'Transformers, seqüències i representacions.',
      en: 'Transformers, sequences and representations.',
    },
    dependencies: {
      ca: 'Machine learning, àlgebra i optimització.',
      en: 'Machine learning, algebra and optimization.',
    },
    quantApplications: {
      ca: 'Text financer i dades alternatives.',
      en: 'Financial text and alternative data.',
    },
    updateFrequency: '3-6-months',
  },
  {
    id: 'portfolio-management',
    atlasId: 'TAX-15',
    name: { ca: 'Gestió de carteres', en: 'Portfolio management' },
    core: {
      ca: 'Markowitz, factors, risk parity i Black–Litterman.',
      en: 'Markowitz, factors, risk parity and Black–Litterman.',
    },
    dependencies: {
      ca: 'Estadística i optimització.',
      en: 'Statistics and optimization.',
    },
    quantApplications: {
      ca: 'Construcció de carteres.',
      en: 'Portfolio construction.',
    },
    updateFrequency: '3-5-years',
  },
  {
    id: 'risk-management',
    atlasId: 'TAX-16',
    name: { ca: 'Gestió del risc', en: 'Risk management' },
    core: {
      ca: 'VaR/ES, extrems, crèdit i liquiditat.',
      en: 'VaR/ES, extremes, credit and liquidity.',
    },
    dependencies: {
      ca: 'Probabilitat i estadística.',
      en: 'Probability and statistics.',
    },
    quantApplications: {
      ca: 'Mesura i control del risc.',
      en: 'Risk measurement and control.',
    },
    updateFrequency: '3-5-years',
  },
  {
    id: 'quantitative-trading',
    atlasId: 'TAX-17',
    name: { ca: 'Trading quantitatiu', en: 'Quantitative trading' },
    core: {
      ca: 'Senyals, backtesting, costos i arbitratge.',
      en: 'Signals, backtesting, costs and arbitrage.',
    },
    dependencies: {
      ca: 'Estadística i programació.',
      en: 'Statistics and programming.',
    },
    quantApplications: {
      ca: 'Estratègies sistemàtiques.',
      en: 'Systematic strategies.',
    },
    updateFrequency: '1-2-years',
  },
  {
    id: 'market-microstructure-hft',
    atlasId: 'TAX-18',
    name: {
      ca: 'Microestructura i HFT',
      en: 'Market microstructure and HFT',
    },
    core: {
      ca: 'Llibre d’ordres, execució i impacte.',
      en: 'Order books, execution and market impact.',
    },
    dependencies: {
      ca: 'Estocàstica i control.',
      en: 'Stochastics and control.',
    },
    quantApplications: {
      ca: 'Market making i execució òptima.',
      en: 'Market making and optimal execution.',
    },
    updateFrequency: '1-2-years',
  },
  {
    id: 'alternative-data',
    atlasId: 'TAX-19',
    name: { ca: 'Alternative data', en: 'Alternative data' },
    core: {
      ca: 'NLP, satèl·lit, web i transaccions.',
      en: 'NLP, satellite, web and transaction data.',
    },
    dependencies: {
      ca: 'Data science, ML i governança.',
      en: 'Data science, ML and governance.',
    },
    quantApplications: {
      ca: 'Alpha no convencional.',
      en: 'Non-conventional alpha.',
    },
    updateFrequency: '1-2-years',
  },
  {
    id: 'blockchain-defi',
    atlasId: 'TAX-20',
    name: { ca: 'Blockchain i DeFi', en: 'Blockchain and DeFi' },
    core: {
      ca: 'Consens, AMM, MEV i risc de protocols.',
      en: 'Consensus, AMMs, MEV and protocol risk.',
    },
    dependencies: {
      ca: 'Criptografia i microestructura.',
      en: 'Cryptography and microstructure.',
    },
    quantApplications: {
      ca: 'Mercats cripto.',
      en: 'Crypto markets.',
    },
    updateFrequency: '3-6-months',
  },
  {
    id: 'behavioral-decision',
    atlasId: 'TAX-21',
    name: {
      ca: 'Conducta i decisió',
      en: 'Behaviour and decision-making',
    },
    core: {
      ca: 'Utilitat, biaixos i prospect theory.',
      en: 'Utility, biases and prospect theory.',
    },
    dependencies: {
      ca: 'Probabilitat i economia.',
      en: 'Probability and economics.',
    },
    quantApplications: {
      ca: 'Models d’inversors.',
      en: 'Investor models.',
    },
    updateFrequency: '3-5-years',
  },
  {
    id: 'economics-macrofinance',
    atlasId: 'TAX-22',
    name: {
      ca: 'Economia i macrofinances',
      en: 'Economics and macro-finance',
    },
    core: {
      ca: 'Macroeconomia, monetària i corporate finance.',
      en: 'Macroeconomics, monetary economics and corporate finance.',
    },
    dependencies: { ca: 'Econometria.', en: 'Econometrics.' },
    quantApplications: {
      ca: 'Factors macro i escenaris.',
      en: 'Macro factors and scenarios.',
    },
    updateFrequency: '1-2-years',
  },
  {
    id: 'quantitative-research',
    atlasId: 'TAX-23',
    name: {
      ca: 'Recerca quantitativa',
      en: 'Quantitative research',
    },
    core: {
      ca: 'Hipòtesis, reproducció i falsificació.',
      en: 'Hypotheses, reproducibility and falsification.',
    },
    dependencies: {
      ca: 'Totes les àrees anteriors segons el projecte.',
      en: 'All previous areas depending on the project.',
    },
    quantApplications: {
      ca: 'Procés científic de recerca.',
      en: 'Scientific research process.',
    },
    updateFrequency: '1-2-years',
  },
  {
    id: 'mlops-production',
    atlasId: 'TAX-24',
    name: { ca: 'MLOps i producció', en: 'MLOps and production' },
    core: {
      ca: 'Pipelines, monitoratge, latència i drift.',
      en: 'Pipelines, monitoring, latency and drift.',
    },
    dependencies: {
      ca: 'Software i machine learning.',
      en: 'Software and machine learning.',
    },
    quantApplications: {
      ca: 'Models fiables en producció.',
      en: 'Reliable production models.',
    },
    updateFrequency: '3-6-months',
  },
  {
    id: 'professional-preparation',
    atlasId: 'TAX-25',
    name: {
      ca: 'Preparació professional',
      en: 'Professional preparation',
    },
    core: {
      ca: 'Entrevistes, casos i comunicació.',
      en: 'Interviews, cases and communication.',
    },
    dependencies: {
      ca: 'Variables segons el rol.',
      en: 'Role-dependent.',
    },
    quantApplications: {
      ca: 'Incorporació al sector.',
      en: 'Entering the industry.',
    },
    updateFrequency: '6-12-months',
  },
  {
    id: 'interdisciplinary-frontier',
    atlasId: 'TAX-26',
    name: {
      ca: 'Frontera interdisciplinària',
      en: 'Interdisciplinary frontier',
    },
    core: {
      ca: 'Control, senyals, RMT, OT, agents i quantum.',
      en: 'Control, signals, RMT, OT, agents and quantum methods.',
    },
    dependencies: { ca: 'Variables.', en: 'Variable.' },
    quantApplications: {
      ca: 'Recerca emergent.',
      en: 'Emerging research.',
    },
    updateFrequency: '1-2-years',
  },
] as const satisfies readonly TaxonomyArea[];

export type TaxonomyId = (typeof taxonomy)[number]['id'];

export const taxonomyById = Object.fromEntries(
  taxonomy.map((area) => [area.id, area]),
) as Record<TaxonomyId, (typeof taxonomy)[number]>;

export function getTaxonomyArea(id: string) {
  return taxonomy.find((area) => area.id === id);
}

export function getTaxonomyName(id: string, lang: LibraryLang) {
  return getTaxonomyArea(id)?.name[lang] ?? id;
}
