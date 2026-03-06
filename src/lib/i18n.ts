export const SUPPORTED_LOCALES = ["es-AR", "es-MX", "en", "pt"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es-AR";
export const LANGUAGE_STORAGE_KEY = "creeadores-language";
export const LANGUAGE_COOKIE_NAME = "creeadores-language";

export type HowItWorksStep = {
  number: string;
  title: string;
  description: string;
};

export type LandingFeatureFloatingLabel = {
  text: string;
  position: string;
  iconName: string;
};

export type LandingFeatureItem = {
  badge: string;
  title: string;
  description: string;
  floatingLabels: LandingFeatureFloatingLabel[];
};

export type PlanFeatureItem = {
  iconName: string;
  text: string;
};

export type PricingPlan = {
  name: string;
  description: string;
  price: string | null;
  period: string;
  features: PlanFeatureItem[];
  cta: string;
  popular: boolean;
  iconName: string;
  customPriceLabel?: string;
  popularLabel?: string;
};

export type HomeDictionary = {
  hero: {
    badge: string;
    line1: string;
    line2: string;
    line3: string;
    line3Bold: string;
    description: string;
    ctas: {
      primary: string;
      secondary: string;
    };
  };
  nav: {
    links: string[];
    signIn: string;
    startFree: string;
    signUpDropdown: {
      brand: { label: string; description: string };
      creator: { label: string; description: string };
    };
  };
  howItWorks: {
    badge: string;
    title: string;
    description: string;
    stepLabel: string;
    steps: HowItWorksStep[];
  };
  landingFeatures: {
    badge: string;
    title: string;
    description: string;
    items: LandingFeatureItem[];
  };
  pricing: {
    badge: string;
    title: string;
    description: string;
    plans: PricingPlan[];
  };
  landingFooter: {
    description: string;
    links: string[];
    copyright: string;
    legal: string[];
  };
};

export type AppDictionary = {
  home: HomeDictionary;
};

export function isLocale(value: unknown): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function resolveLocale(value: unknown): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

const english: AppDictionary = {
  home: {
    hero: {
      badge: "Official Partners of",
      line1: "CONNECT WITH",
      line2: "THE TOP",
      line3: "UGC & ",
      line3Bold: "INFLUENCERS",
      description:
        "Creeadores is the platform that connects the best UGC content creators with the most relevant brands in Latin America.",
      ctas: {
        primary: "I'm a creator",
        secondary: "I'm a brand",
      },
    },
    nav: {
      links: ["Creators", "Brands", "About", "Pricing"],
      signIn: "Sign in",
      startFree: "Sign up for free",
      signUpDropdown: {
        brand: { label: "I'm a brand", description: "Connect with creators" },
        creator: { label: "I'm a creator", description: "Monetize your content" },
      },
    },
    howItWorks: {
      badge: "EASY AS THAT",
      title: "How does it work?",
      description: "Launch UGC content campaigns in 4 simple steps and connect with the ideal creators for your brand.",
      stepLabel: "STEP",
      steps: [
        { number: "01", title: "Create your campaign", description: "Define your campaign objectives, set your budget and describe the type of content you need. In minutes you'll have everything ready to attract the best creators." },
        { number: "02", title: "Connect with creators", description: "Receive applications from verified creators or directly invite those that best fit your brand. Filter by category, audience and experience level." },
        { number: "03", title: "Negotiate and pay safely", description: "Negotiate terms directly on the platform and make protected payments. The money is released only when you are satisfied with the delivered content." },
        { number: "04", title: "Approve and launch", description: "Review deliverables, request adjustments if needed and approve the final content. Close your campaigns successfully and measure results." },
      ],
    },
    landingFeatures: {
      badge: "FEATURES",
      title: "Everything you need to\nscale your UGC campaigns",
      description: "Tools designed for brands and creators to collaborate efficiently, safely and without friction.",
      items: [
        { badge: "CREATOR CRM", title: "Manage creators like a pro", description: "Centralize creator management, contracts and payments while running high-volume campaigns. All from one place.", floatingLabels: [{ text: "Multi-team operation", position: "top-4 right-4", iconName: "users" }, { text: "Centralized payments", position: "bottom-20 -left-6", iconName: "creditcard" }, { text: "Creator payment", position: "bottom-8 left-8", iconName: "link" }] },
        { badge: "SMART SEARCH", title: "Find the ideal creator in seconds", description: "Filter by niche, location, engagement and content style. Our AI suggests the profiles that best match your brand.", floatingLabels: [{ text: "Advanced filters", position: "top-4 left-4", iconName: "search" }, { text: "AI match", position: "bottom-12 right-4", iconName: "bot" }] },
        { badge: "SECURE PAYMENTS", title: "Pay only for approved content", description: "Money is released only when you approve the content. No risks, no surprises. Total protection for brands and creators.", floatingLabels: [{ text: "Protected escrow", position: "top-4 right-4", iconName: "lock" }, { text: "Automatic invoicing", position: "bottom-12 left-4", iconName: "file" }] },
        { badge: "REAL-TIME ANALYTICS", title: "Measure the impact of each campaign", description: "Dashboards with performance, ROI and engagement metrics. Make decisions based on real data, not assumptions.", floatingLabels: [{ text: "Real-time ROI", position: "top-4 left-4", iconName: "barchart" }, { text: "Exportable reports", position: "bottom-12 right-4", iconName: "trending" }] },
      ],
    },
    pricing: {
      badge: "PRICING",
      title: "The perfect plan for your brand",
      description: "Select the plan that best suits your needs and start connecting with the best creators.",
      plans: [
        { name: "Free", description: "To explore the platform", price: "$0", period: "/month", features: [{ iconName: "users", text: "2 creators" }, { iconName: "megaphone", text: "Flex campaigns" }, { iconName: "percent", text: "10% commission" }], cta: "Start free", popular: false, iconName: "check" },
        { name: "Starter", description: "For brands just starting", price: "$250", period: "/month", features: [{ iconName: "users", text: "10 creators" }, { iconName: "megaphone", text: "2 campaigns" }, { iconName: "percent", text: "5% commission" }], cta: "Start now", popular: false, iconName: "rocket" },
        { name: "Growth", description: "For growing brands", price: "$450", period: "/month", features: [{ iconName: "users", text: "30 creators" }, { iconName: "megaphone", text: "Unlimited campaigns" }, { iconName: "percent", text: "3% commission" }], cta: "Start now", popular: true, iconName: "trending", popularLabel: "MOST POPULAR" },
        { name: "Scale / Enterprise", description: "Custom solution for large brands", price: null, period: "", features: [{ iconName: "users", text: "Unlimited creators" }, { iconName: "megaphone", text: "Unlimited campaigns" }, { iconName: "percent", text: "Negotiable commission" }], cta: "Contact", popular: false, iconName: "building", customPriceLabel: "Custom price" },
      ],
    },
    landingFooter: {
      description: "We connect the best UGC creators with the most relevant brands in Latin America.",
      links: ["Creators", "Brands", "Pricing", "Success stories"],
      copyright: "\u00a9 2026 Creadores. All rights reserved.",
      legal: ["Privacy", "Terms", "Cookies"],
    },
  },
};

const spanish: AppDictionary = {
  home: {
    hero: {
      badge: "Partners oficiales de",
      line1: "CONECTA CON",
      line2: "EL TOP",
      line3: "UGC & ",
      line3Bold: "INFLUENCERS",
      description:
        "Creadores es la plataforma que conecta a los mejores creadores de contenido UGC con las marcas mas relevantes de Latinoamerica.",
      ctas: {
        primary: "Soy creador",
        secondary: "Soy marca",
      },
    },
    nav: {
      links: ["Creadores", "Marcas", "Nosotros", "Precios"],
      signIn: "Iniciar sesion",
      startFree: "Registrate gratis",
      signUpDropdown: {
        brand: { label: "Soy una marca", description: "Conecta con creadores" },
        creator: { label: "Soy creador", description: "Monetiza tu contenido" },
      },
    },
    howItWorks: {
      badge: "ASÍ DE FÁCIL",
      title: "¿Cómo funciona?",
      description: "Lanza campañas de contenido UGC en 4 simples pasos y conecta con los creadores ideales para tu marca.",
      stepLabel: "PASO",
      steps: [
        { number: "01", title: "Crea tu campaña", description: "Define los objetivos de tu campaña, establece tu presupuesto y describe el tipo de contenido que necesitas. En minutos tendrás todo listo para atraer a los mejores creadores." },
        { number: "02", title: "Conecta con creadores", description: "Recibe postulaciones de creadores verificados o invita directamente a los que mejor encajen con tu marca. Filtra por categoría, audiencia y nivel de experiencia." },
        { number: "03", title: "Negocia y paga seguro", description: "Negocia los términos directamente en la plataforma y realiza pagos protegidos. El dinero se libera solo cuando estés satisfecho con el contenido entregado." },
        { number: "04", title: "Aprueba y lanza", description: "Revisa los entregables, solicita ajustes si es necesario y aprueba el contenido final. Cierra tus campañas exitosamente y mide los resultados." },
      ],
    },
    landingFeatures: {
      badge: "FUNCIONALIDADES",
      title: "Todo lo que necesitas para\nescalar tus campanas UGC",
      description: "Herramientas disenadas para que marcas y creadores colaboren de forma eficiente, segura y sin friccion.",
      items: [
        { badge: "CRM PARA CREADORES", title: "Gestiona creadores como un pro", description: "Centraliza la gestion de creadores, contratos y pagos mientras ejecutas campanas de alto volumen. Todo desde un solo lugar.", floatingLabels: [{ text: "Operacion multi-equipo", position: "top-4 right-4", iconName: "users" }, { text: "Pagos centralizados", position: "bottom-20 -left-6", iconName: "creditcard" }, { text: "Pago al creador", position: "bottom-8 left-8", iconName: "link" }] },
        { badge: "BUSQUEDA INTELIGENTE", title: "Encuentra al creador ideal en segundos", description: "Filtra por nicho, ubicacion, engagement y estilo de contenido. Nuestra IA te sugiere los perfiles que mejor encajan con tu marca.", floatingLabels: [{ text: "Filtros avanzados", position: "top-4 left-4", iconName: "search" }, { text: "Match por IA", position: "bottom-12 right-4", iconName: "bot" }] },
        { badge: "PAGOS SEGUROS", title: "Paga solo por contenido aprobado", description: "El dinero se libera solo cuando apruebas el contenido. Sin riesgos, sin sorpresas. Proteccion total para marcas y creadores.", floatingLabels: [{ text: "Escrow protegido", position: "top-4 right-4", iconName: "lock" }, { text: "Facturacion automatica", position: "bottom-12 left-4", iconName: "file" }] },
        { badge: "ANALITICA EN TIEMPO REAL", title: "Mide el impacto de cada campana", description: "Dashboards con metricas de rendimiento, ROI y engagement. Toma decisiones basadas en datos reales, no en suposiciones.", floatingLabels: [{ text: "ROI en tiempo real", position: "top-4 left-4", iconName: "barchart" }, { text: "Reportes exportables", position: "bottom-12 right-4", iconName: "trending" }] },
      ],
    },
    pricing: {
      badge: "PRECIOS",
      title: "El plan perfecto para tu marca",
      description: "Seleccioná el plan que mejor se adapte a tus necesidades y comenzá a conectar con los mejores creadores.",
      plans: [
        { name: "Free", description: "Para explorar la plataforma", price: "$0", period: "/mes", features: [{ iconName: "users", text: "2 creadores" }, { iconName: "megaphone", text: "Campañas flex" }, { iconName: "percent", text: "10% comisión" }], cta: "Empezar gratis", popular: false, iconName: "check" },
        { name: "Starter", description: "Para marcas que están empezando", price: "$250", period: "/mes", features: [{ iconName: "users", text: "10 creadores" }, { iconName: "megaphone", text: "2 campañas" }, { iconName: "percent", text: "5% comisión" }], cta: "Comenzar ahora", popular: false, iconName: "rocket" },
        { name: "Growth", description: "Para marcas en crecimiento", price: "$450", period: "/mes", features: [{ iconName: "users", text: "30 creadores" }, { iconName: "megaphone", text: "Campañas ilimitadas" }, { iconName: "percent", text: "3% comisión" }], cta: "Comenzar ahora", popular: true, iconName: "trending", popularLabel: "MÁS POPULAR" },
        { name: "Scale / Enterprise", description: "Solución personalizada para grandes marcas", price: null, period: "", features: [{ iconName: "users", text: "Creadores ilimitados" }, { iconName: "megaphone", text: "Campañas ilimitadas" }, { iconName: "percent", text: "Comisión negociable" }], cta: "Contactar", popular: false, iconName: "building", customPriceLabel: "Precio a medida" },
      ],
    },
    landingFooter: {
      description: "Conectamos a los mejores creadores UGC con las marcas más relevantes de Latinoamérica.",
      links: ["Creadores", "Marcas", "Precios", "Casos de éxito"],
      copyright: "\u00a9 2026 Creadores. Todos los derechos reservados.",
      legal: ["Privacidad", "Términos", "Cookies"],
    },
  },
};

const portuguese: AppDictionary = {
  home: {
    hero: {
      badge: "Parceiros oficiais de",
      line1: "CONECTE-SE COM",
      line2: "O TOP",
      line3: "UGC & ",
      line3Bold: "INFLUENCERS",
      description:
        "Creeadores é a plataforma que conecta os melhores criadores de conteúdo UGC com as marcas mais relevantes da América Latina.",
      ctas: {
        primary: "Sou criador",
        secondary: "Sou marca",
      },
    },
    nav: {
      links: ["Criadores", "Marcas", "Sobre nós", "Preços"],
      signIn: "Entrar",
      startFree: "Cadastre-se grátis",
      signUpDropdown: {
        brand: { label: "Sou uma marca", description: "Conecte-se com criadores" },
        creator: { label: "Sou criador", description: "Monetize seu conteúdo" },
      },
    },
    howItWorks: {
      badge: "FÁCIL ASSIM",
      title: "Como funciona?",
      description: "Lance campanhas de conteúdo UGC em 4 simples passos e conecte-se com os criadores ideais para sua marca.",
      stepLabel: "PASSO",
      steps: [
        { number: "01", title: "Crie sua campanha", description: "Defina os objetivos da sua campanha, estabeleça seu orçamento e descreva o tipo de conteúdo que precisa. Em minutos terá tudo pronto para atrair os melhores criadores." },
        { number: "02", title: "Conecte-se com criadores", description: "Receba candidaturas de criadores verificados ou convide diretamente os que melhor se encaixam na sua marca. Filtre por categoria, audiência e nível de experiência." },
        { number: "03", title: "Negocie e pague com segurança", description: "Negocie os termos diretamente na plataforma e realize pagamentos protegidos. O dinheiro é liberado somente quando estiver satisfeito com o conteúdo entregue." },
        { number: "04", title: "Aprove e lance", description: "Revise os entregáveis, solicite ajustes se necessário e aprove o conteúdo final. Feche suas campanhas com sucesso e meça os resultados." },
      ],
    },
    landingFeatures: {
      badge: "FUNCIONALIDADES",
      title: "Tudo o que você precisa para\nescalar suas campanhas UGC",
      description: "Ferramentas projetadas para que marcas e criadores colaborem de forma eficiente, segura e sem atrito.",
      items: [
        { badge: "CRM PARA CRIADORES", title: "Gerencie criadores como um pro", description: "Centralize a gestão de criadores, contratos e pagamentos enquanto executa campanhas de alto volume. Tudo de um só lugar.", floatingLabels: [{ text: "Operação multi-equipe", position: "top-4 right-4", iconName: "users" }, { text: "Pagamentos centralizados", position: "bottom-20 -left-6", iconName: "creditcard" }, { text: "Pagamento ao criador", position: "bottom-8 left-8", iconName: "link" }] },
        { badge: "BUSCA INTELIGENTE", title: "Encontre o criador ideal em segundos", description: "Filtre por nicho, localização, engajamento e estilo de conteúdo. Nossa IA sugere os perfis que melhor combinam com sua marca.", floatingLabels: [{ text: "Filtros avançados", position: "top-4 left-4", iconName: "search" }, { text: "Match por IA", position: "bottom-12 right-4", iconName: "bot" }] },
        { badge: "PAGAMENTOS SEGUROS", title: "Pague apenas por conteúdo aprovado", description: "O dinheiro é liberado somente quando você aprova o conteúdo. Sem riscos, sem surpresas. Proteção total para marcas e criadores.", floatingLabels: [{ text: "Escrow protegido", position: "top-4 right-4", iconName: "lock" }, { text: "Faturamento automático", position: "bottom-12 left-4", iconName: "file" }] },
        { badge: "ANÁLISE EM TEMPO REAL", title: "Meça o impacto de cada campanha", description: "Dashboards com métricas de desempenho, ROI e engajamento. Tome decisões baseadas em dados reais, não em suposições.", floatingLabels: [{ text: "ROI em tempo real", position: "top-4 left-4", iconName: "barchart" }, { text: "Relatórios exportáveis", position: "bottom-12 right-4", iconName: "trending" }] },
      ],
    },
    pricing: {
      badge: "PREÇOS",
      title: "O plano perfeito para sua marca",
      description: "Selecione o plano que melhor se adapta às suas necessidades e comece a se conectar com os melhores criadores.",
      plans: [
        { name: "Free", description: "Para explorar a plataforma", price: "$0", period: "/mês", features: [{ iconName: "users", text: "2 criadores" }, { iconName: "megaphone", text: "Campanhas flex" }, { iconName: "percent", text: "10% comissão" }], cta: "Começar grátis", popular: false, iconName: "check" },
        { name: "Starter", description: "Para marcas que estão começando", price: "$250", period: "/mês", features: [{ iconName: "users", text: "10 criadores" }, { iconName: "megaphone", text: "2 campanhas" }, { iconName: "percent", text: "5% comissão" }], cta: "Começar agora", popular: false, iconName: "rocket" },
        { name: "Growth", description: "Para marcas em crescimento", price: "$450", period: "/mês", features: [{ iconName: "users", text: "30 criadores" }, { iconName: "megaphone", text: "Campanhas ilimitadas" }, { iconName: "percent", text: "3% comissão" }], cta: "Começar agora", popular: true, iconName: "trending", popularLabel: "MAIS POPULAR" },
        { name: "Scale / Enterprise", description: "Solução personalizada para grandes marcas", price: null, period: "", features: [{ iconName: "users", text: "Criadores ilimitados" }, { iconName: "megaphone", text: "Campanhas ilimitadas" }, { iconName: "percent", text: "Comissão negociável" }], cta: "Contatar", popular: false, iconName: "building", customPriceLabel: "Preço sob medida" },
      ],
    },
    landingFooter: {
      description: "Conectamos os melhores criadores UGC com as marcas mais relevantes da América Latina.",
      links: ["Criadores", "Marcas", "Preços", "Casos de sucesso"],
      copyright: "\u00a9 2026 Creadores. Todos os direitos reservados.",
      legal: ["Privacidade", "Termos", "Cookies"],
    },
  },
};

const dictionaries: Record<Locale, AppDictionary> = {
  en: english,
  "es-AR": spanish,
  "es-MX": spanish,
  pt: portuguese,
};

export function getDictionary(locale: Locale): AppDictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
