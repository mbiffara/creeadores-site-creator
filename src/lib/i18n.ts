export const SUPPORTED_LOCALES = ["es-AR", "es-MX", "en", "pt"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es-AR";
export const LANGUAGE_STORAGE_KEY = "creeadores-language";
export const LANGUAGE_COOKIE_NAME = "creeadores-language";

export type HowItWorksStep = {
  number: string;
  iconName: string;
  title: string;
  description: string;
  accentColor: string;
  bullets: string[];
};

export type HowItWorksStat = {
  value: string;
  label: string;
  description: string;
  accentColor: string;
  iconName: string;
};

export type HowItWorksTestimonial = {
  quote: string;
  name: string;
  handle: string;
  avatar: string;
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
  arsPrice?: string;
  period: string;
  features: PlanFeatureItem[];
  cta: string;
  popular: boolean;
  iconName: string;
  customPriceLabel?: string;
  popularLabel?: string;
};

export type CampaignTypeItem = {
  iconName: string;
  title: string;
  description: string;
  bullets: string[];
  highlight?: string;
  badge?: string;
};

export type SpotlightCard = {
  iconName: string;
  title: string;
  description: string;
};

export type CampaignFloatingCard = {
  iconName: string;
  iconBg: string;
  customIcon?: string;
  text: string;
  subtext?: string;
  position: string;
};

export type CampaignFeatureBlock = {
  iconName: string;
  title: string;
  subtitle: string;
  image: string;
  cards: SpotlightCard[];
  floatingCards?: CampaignFloatingCard[];
};

export type HomeDictionary = {
  hero: {
    badge: string;
    line1: string;
    line2: string;
    line3: string;
    line3Bold: string;
    rotatingWords: string[];
    description: string;
    ctas: {
      primary: string;
      secondary: string;
    };
  };
  nav: {
    links: { label: string; href: string }[];
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
    subtitle: string;
    description: string;
    stepLabel: string;
    steps: HowItWorksStep[];
    socialProof: {
      stats: HowItWorksStat[];
      testimonials: HowItWorksTestimonial[];
    };
    cta: {
      badge: string;
      title: string;
      subtitle: string;
      primaryButton: string;
      secondaryButton: string;
    };
  };
  landingFeatures: {
    badge: string;
    title: string;
    description: string;
    items: LandingFeatureItem[];
  };
  campaignTypes: {
    badge: string;
    title: string;
    description: string;
    scrollLabel: string;
    items: CampaignTypeItem[];
  };
  campaignFeatures: {
    badge: string;
    title: string;
    description: string;
    blocks: CampaignFeatureBlock[];
  };
  pricing: {
    badge: string;
    title: string;
    description: string;
    ctaButton: string;
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
      line1: "MONETIZE",
      line2: "YOUR",
      line3: "",
      line3Bold: "CONTENT",
      rotatingWords: ["CONTENT", "TALENT", "CREATIVITY", "AUDIENCE", "PASSION"],
      description:
        "Creeadores is the platform that connects you with the best brands and agencies in Latin America. Apply to campaigns, create content, and get paid securely.",
      ctas: {
        primary: "Sign up for free",
        secondary: "See opportunities",
      },
    },
    nav: {
      links: [
        { label: "I'm a brand", href: "#brands" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Reputation", href: "#pricing" },
      ],
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
      subtitle: "Create your profile, apply to campaigns, negotiate your terms, deliver content, and get paid securely — all without leaving the platform.",
      description: "Start monetizing your content in 5 simple steps.",
      stepLabel: "STEP",
      steps: [
        { number: "01", iconName: "user-plus", accentColor: "#0019DA", title: "Build your profile", description: "Create a portfolio that represents you and let brands discover you by your niche, audience, and style.", bullets: ["Upload your best content", "Set your rates by content type", "Showcase your metrics and audience"] },
        { number: "02", iconName: "inbox", accentColor: "#7C3AED", title: "Receive applications", description: "Brands find you through our smart search. Review proposals and choose the campaigns that align with your personal brand.", bullets: ["Get matched with relevant brands", "Review campaign details before committing", "Filter by budget, category, and type"] },
        { number: "03", iconName: "handshake", accentColor: "#ED4B00", title: "Negotiate your value", description: "No fixed rates. You negotiate directly with the brand and agree on terms that work for both sides.", bullets: ["Send and receive counteroffers", "Define deliverables and timelines", "Full transparency on both sides"] },
        { number: "04", iconName: "layers", accentColor: "#059669", title: "Work on multiple campaigns", description: "Manage several collaborations at once from a single dashboard. Track briefs, deadlines, and deliveries effortlessly.", bullets: ["Centralized campaign dashboard", "Track progress in real time", "Communicate directly with brands"] },
        { number: "05", iconName: "shield-check", accentColor: "#0891B2", title: "Get paid securely", description: "Your payment is secured from the start. When the brand approves your content, the money is available to withdraw.", bullets: ["Protected payments", "Funds sent in a short time", "Multiple withdrawal methods"] },
      ],
      socialProof: {
        stats: [
          { value: "1+ campaigns", label: "Bronze", description: "Verified profile & unlimited applications", accentColor: "#CD7F32", iconName: "🥉" },
          { value: "10+ campaigns", label: "Silver", description: "Priority in applications & exclusive campaigns", accentColor: "#9CA3AF", iconName: "🥈" },
          { value: "100+ campaigns", label: "Gold", description: "Maximum visibility & direct brand invitations", accentColor: "#F59E0B", iconName: "🥇" },
          { value: "500+ campaigns", label: "Platinum", description: "Elite status & premium opportunities", accentColor: "#0891B2", iconName: "💎" },
        ],
        testimonials: [],
      },
      cta: {
        badge: "REPUTATION",
        title: "\u2728 Your next campaign is waiting \u2728",
        subtitle: "Join thousands of creators already monetizing their content on Creeadores.",
        primaryButton: "Sign up for free",
        secondaryButton: "See opportunities",
      },
    },
    landingFeatures: {
      badge: "FEATURES",
      title: "Everything you need to\nscale your UGC campaigns",
      description: "Tools designed for brands and creators to collaborate efficiently, safely and without friction.",
      items: [
        { badge: "CREATOR CRM", title: "Manage creators like a pro", description: "Centralize creator management, contracts and payments while running high-volume campaigns. All from one place.", floatingLabels: [{ text: "Multi-team operation", position: "top-4 right-4", iconName: "users" }, { text: "Centralized payments", position: "bottom-20 -left-6", iconName: "creditcard" }, { text: "Creator payment", position: "bottom-8 left-8", iconName: "link" }] },
        { badge: "SMART SEARCH", title: "Find the ideal creator in seconds", description: "Filter by niche, location, engagement and content style. Our AI suggests the profiles that best match your brand.", floatingLabels: [{ text: "Advanced filters", position: "top-4 left-4", iconName: "search" }, { text: "AI match", position: "bottom-12 right-4", iconName: "bot" }] },
        { badge: "SECURE PAYMENTS", title: "Pay only for approved content", description: "Money is released only when you approve the content. No risks, no surprises. Total protection for brands and creators.", floatingLabels: [{ text: "Protected payment", position: "top-4 right-4", iconName: "lock" }, { text: "Automatic invoicing", position: "bottom-12 left-4", iconName: "file" }] },
        { badge: "REAL-TIME ANALYTICS", title: "Measure the impact of each campaign", description: "Dashboards with performance, ROI and engagement metrics. Make decisions based on real data, not assumptions.", floatingLabels: [{ text: "Real-time ROI", position: "top-4 left-4", iconName: "barchart" }, { text: "Exportable reports", position: "bottom-12 right-4", iconName: "trending" }] },
      ],
    },
    campaignTypes: {
      badge: "OPPORTUNITIES",
      title: "Find the perfect\nopportunity for you",
      description: "Apply to the campaign type that best fits your profile and start monetizing your content.",
      scrollLabel: "Scroll down",
      items: [
        {
          iconName: "zap",
          title: "Flex",
          badge: "FREE PLAN",
          description: "Brands find you based on your profile. Negotiate directly and agree on terms that work for you.",
          bullets: ["Negotiate your own terms", "Direct communication with the brand"],
        },
        {
          iconName: "megaphone",
          title: "Influencer",
          description: "Publish brand content on your profile and monetize your audience with authentic collaborations.",
          bullets: ["Publish on your own profile", "Monetize your audience authentically"],
        },
        {
          iconName: "camera",
          title: "UGC Creator",
          description: "Produce professional videos for brands with the resources they send you. You create, they publish.",
          bullets: ["Receive briefs and resources from the brand", "Focus on creating quality content"],
        },
        {
          iconName: "star",
          title: "UGC + Influencer",
          description: "The most complete opportunity: produce content for the brand and publish it on your profile. Double impact, higher income.",
          bullets: ["Produce + publish = higher income", "The most complete opportunity on the platform"],
        },
      ],
    },
    campaignFeatures: {
      badge: "FEATURES",
      title: "Everything you need\nto grow!",
      description: "Tools designed so you can focus on what you do best: creating amazing content.",
      blocks: [
        {
          iconName: "sliders",
          title: "Your professional profile",
          subtitle: "Build a profile that represents you and let brands find you.",
          image: "/campaign-create.jpg",
          cards: [
            { iconName: "clapperboard", title: "Visual portfolio", description: "Showcase your best work, stats, and content style." },
            { iconName: "lock", title: "Reputation system", description: "Each completed campaign adds to your badge: Bronze \u2192 Silver \u2192 Gold. Brands prioritize creators with better reputation." },
            { iconName: "wallet", title: "Rates and availability", description: "Set your rates by content type and show your availability so brands know when to contact you." },
          ],
          floatingCards: [
            { iconName: "clapperboard", iconBg: "#0019DA", text: "Updated portfolio", subtext: "5 works", position: "-top-8 -right-14" },
            { iconName: "lock", iconBg: "#F97316", text: "Gold Badge", subtext: "High reputation", position: "-bottom-8 -left-14" },
            { iconName: "calendar", iconBg: "#22C55E", text: "Available", subtext: "Ready to create", position: "-bottom-8 -right-14" },
          ],
        },
        {
          iconName: "users",
          title: "Apply and get paid securely",
          subtitle: "Find campaigns, negotiate, and receive your payments \u2014 all from the platform.",
          image: "/campaign-dashboard.jpg",
          cards: [
            { iconName: "send", title: "Smart applications", description: "Explore active campaigns, filter by category and budget, and apply with one click." },
            { iconName: "wallet", title: "Direct negotiation", description: "Receive proposals, send counteroffers, and agree on terms directly with the brand." },
            { iconName: "lock", title: "Protected payment", description: "Your payment is secured from the start. It\u2019s released automatically when the brand approves your content." },
          ],
          floatingCards: [
            { iconName: "send", iconBg: "#7C3AED", text: "Application sent", subtext: "2 min ago", position: "-top-8 -right-14" },
            { iconName: "lock", iconBg: "#22C55E", customIcon: "campaign-status", text: "Content approved", subtext: "Payment released", position: "-bottom-8 -left-14" },
            { iconName: "wallet", iconBg: "#00AEEF", customIcon: "mercadopago", text: "Mercado Pago", subtext: "Secure payment", position: "-bottom-8 -right-14" },
          ],
        },
      ],
    },
    pricing: {
      badge: "REPUTATION",
      title: "Your reputation is\nyour best asset",
      description: "Each completed campaign builds your reputation. Level up and access better opportunities.",
      ctaButton: "Start monetizing your content",
      plans: [
        { name: "New", description: "You just arrived at Creeadores", price: null, period: "", features: [{ iconName: "users", text: "Basic profile" }, { iconName: "megaphone", text: "Limited applications" }, { iconName: "percent", text: "New creator badge" }], cta: "Create my profile", popular: false, iconName: "check", customPriceLabel: "Start here" },
        { name: "Bronze", description: "You completed your first campaigns", price: null, period: "", features: [{ iconName: "users", text: "Verified profile" }, { iconName: "megaphone", text: "Unlimited applications" }, { iconName: "percent", text: "Visible in brand search" }], cta: "Start now", popular: false, iconName: "shield", customPriceLabel: "1+ campaigns" },
        { name: "Silver", description: "Creator with a track record", price: null, period: "", features: [{ iconName: "users", text: "Silver badge visible" }, { iconName: "megaphone", text: "Priority in applications" }, { iconName: "percent", text: "Access to exclusive campaigns" }], cta: "Keep growing", popular: true, iconName: "award", customPriceLabel: "5+ campaigns", popularLabel: "MOST SOUGHT" },
        { name: "Gold", description: "Top creator on the platform", price: null, period: "", features: [{ iconName: "users", text: "Premium Gold badge" }, { iconName: "megaphone", text: "Maximum visibility" }, { iconName: "percent", text: "Direct invitations from brands" }], cta: "Reach Gold", popular: false, iconName: "crown", customPriceLabel: "15+ campaigns" },
      ],
    },
    landingFooter: {
      description: "Monetize your content by connecting with the best brands and agencies in Latin America.",
      links: ["Opportunities", "How it works", "Reputation"],
      copyright: "\u00a9 2026 Creadores. All rights reserved.",
      legal: ["Privacy", "Terms", "Cookies"],
    },
  },
};

const spanish: AppDictionary = {
  home: {
    hero: {
      badge: "Partners oficiales de",
      line1: "MONETIZ\u00c1",
      line2: "TU",
      line3: "",
      line3Bold: "CONTENIDO",
      rotatingWords: ["CONTENIDO", "TALENTO", "CREATIVIDAD", "AUDIENCIA", "PASI\u00d3N"],
      description:
        "Creeadores es la plataforma que te conecta con las mejores marcas y agencias de Latinoam\u00e9rica. Postulate a campa\u00f1as, cre\u00e1 contenido y cobr\u00e1 de forma segura.",
      ctas: {
        primary: "Registrate gratis",
        secondary: "Ver oportunidades",
      },
    },
    nav: {
      links: [
        { label: "Soy Marca", href: "#brands" },
        { label: "C\u00f3mo Funciona", href: "#how-it-works" },
        { label: "Reputaci\u00f3n", href: "#pricing" },
      ],
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
      subtitle: "Cre\u00e1 tu perfil, postulate a campa\u00f1as, negoci\u00e1 tus t\u00e9rminos, entreg\u00e1 contenido y cobr\u00e1 de forma segura \u2014 todo sin salir de la plataforma.",
      description: "Empezá a monetizar tu contenido en 5 simples pasos.",
      stepLabel: "PASO",
      steps: [
        { number: "01", iconName: "user-plus", accentColor: "#0019DA", title: "Armá tu perfil", description: "Creá un portafolio que te represente y dejá que las marcas te descubran por tu nicho, audiencia y estilo.", bullets: ["Subí tu mejor contenido", "Definí tus tarifas por tipo de contenido", "Mostrá tus métricas y audiencia"] },
        { number: "02", iconName: "inbox", accentColor: "#7C3AED", title: "Recibí postulaciones", description: "Las marcas te encuentran a través de nuestra búsqueda inteligente. Revisá propuestas y elegí las campañas que se alineen con tu marca personal.", bullets: ["Recibí matches con marcas relevantes", "Revisá los detalles antes de comprometerte", "Filtrá por presupuesto, categoría y tipo"] },
        { number: "03", iconName: "handshake", accentColor: "#ED4B00", title: "Negociá tu valor", description: "Sin tarifas fijas. Negociás directamente con la marca y acordás términos que funcionen para ambos.", bullets: ["Enviá y recibí contraofertas", "Definí entregables y plazos", "Transparencia total de ambos lados"] },
        { number: "04", iconName: "layers", accentColor: "#059669", title: "Trabajá en múltiples campañas", description: "Gestioná varias colaboraciones a la vez desde un solo dashboard. Seguí briefs, deadlines y entregas sin esfuerzo.", bullets: ["Dashboard centralizado de campañas", "Seguí el progreso en tiempo real", "Comunicación directa con marcas"] },
        { number: "05", iconName: "shield-check", accentColor: "#0891B2", title: "Cobrá de forma segura", description: "Tu pago queda asegurado desde el inicio. Cuando la marca aprueba tu contenido, el dinero está disponible para solicitar.", bullets: ["Pagos protegidos", "Débitos enviados en poco tiempo", "Múltiples métodos de retiro"] },
      ],
      socialProof: {
        stats: [
          { value: "1+ campañas", label: "Bronce", description: "Perfil verificado y postulaciones ilimitadas", accentColor: "#CD7F32", iconName: "🥉" },
          { value: "10+ campañas", label: "Plata", description: "Prioridad en postulaciones y campañas exclusivas", accentColor: "#9CA3AF", iconName: "🥈" },
          { value: "100+ campañas", label: "Oro", description: "Máxima visibilidad e invitaciones directas de marcas", accentColor: "#F59E0B", iconName: "🥇" },
          { value: "500+ campañas", label: "Platino", description: "Estatus élite y oportunidades premium", accentColor: "#0891B2", iconName: "💎" },
        ],
        testimonials: [],
      },
      cta: {
        badge: "REPUTACIÓN",
        title: "✨ Tu próxima campaña te está esperando ✨",
        subtitle: "Unite a miles de creadores que ya están monetizando su contenido en Creeadores.",
        primaryButton: "Registrate gratis",
        secondaryButton: "Ver oportunidades",
      },
    },
    landingFeatures: {
      badge: "FUNCIONALIDADES",
      title: "Todo lo que necesitas para\nescalar tus campanas UGC",
      description: "Herramientas disenadas para que marcas y creadores colaboren de forma eficiente, segura y sin friccion.",
      items: [
        { badge: "CRM PARA CREADORES", title: "Gestiona creadores como un pro", description: "Centraliza la gestion de creadores, contratos y pagos mientras ejecutas campanas de alto volumen. Todo desde un solo lugar.", floatingLabels: [{ text: "Operacion multi-equipo", position: "top-4 right-4", iconName: "users" }, { text: "Pagos centralizados", position: "bottom-20 -left-6", iconName: "creditcard" }, { text: "Pago al creador", position: "bottom-8 left-8", iconName: "link" }] },
        { badge: "BUSQUEDA INTELIGENTE", title: "Encuentra al creador ideal en segundos", description: "Filtra por nicho, ubicacion, engagement y estilo de contenido. Nuestra IA te sugiere los perfiles que mejor encajan con tu marca.", floatingLabels: [{ text: "Filtros avanzados", position: "top-4 left-4", iconName: "search" }, { text: "Match por IA", position: "bottom-12 right-4", iconName: "bot" }] },
        { badge: "PAGOS SEGUROS", title: "Paga solo por contenido aprobado", description: "El dinero se libera solo cuando apruebas el contenido. Sin riesgos, sin sorpresas. Proteccion total para marcas y creadores.", floatingLabels: [{ text: "Pago protegido", position: "top-4 right-4", iconName: "lock" }, { text: "Facturacion automatica", position: "bottom-12 left-4", iconName: "file" }] },
        { badge: "ANALITICA EN TIEMPO REAL", title: "Mide el impacto de cada campana", description: "Dashboards con metricas de rendimiento, ROI y engagement. Toma decisiones basadas en datos reales, no en suposiciones.", floatingLabels: [{ text: "ROI en tiempo real", position: "top-4 left-4", iconName: "barchart" }, { text: "Reportes exportables", position: "bottom-12 right-4", iconName: "trending" }] },
      ],
    },
    campaignTypes: {
      badge: "OPORTUNIDADES",
      title: "Encontr\u00e1 la oportunidad\nperfecta para vos",
      description: "Postulate al tipo de campa\u00f1a que mejor se adapte a tu perfil y empez\u00e1 a monetizar tu contenido.",
      scrollLabel: "Desliza hacia abajo",
      items: [
        {
          iconName: "zap",
          title: "Flex",
          badge: "PLAN FREE",
          description: "Las marcas te encuentran seg\u00fan tu perfil. Negoci\u00e1 directamente y acord\u00e1 los t\u00e9rminos que te convengan.",
          bullets: ["Negoci\u00e1 tus propios t\u00e9rminos", "Comunicaci\u00f3n directa con la marca"],
        },
        {
          iconName: "megaphone",
          title: "Influencer",
          description: "Public\u00e1 contenido de marcas en tu perfil y monetiz\u00e1 tu audiencia con colaboraciones aut\u00e9nticas.",
          bullets: ["Public\u00e1 en tu propio perfil", "Monetiz\u00e1 tu audiencia de forma aut\u00e9ntica"],
        },
        {
          iconName: "camera",
          title: "UGC Creator",
          description: "Produc\u00ed videos profesionales para marcas con los recursos que te env\u00edan. Vos cre\u00e1s, ellos publican.",
          bullets: ["Recib\u00ed briefs y recursos de la marca", "Enfocate en crear contenido de calidad"],
        },
        {
          iconName: "star",
          title: "UGC + Influencer",
          description: "La oportunidad m\u00e1s completa: produc\u00ed contenido para la marca y publicalo en tu perfil. Doble impacto, mayor ingreso.",
          bullets: ["Produc\u00ed + public\u00e1 = mayor ingreso", "La oportunidad m\u00e1s completa de la plataforma"],
        },
      ],
    },
    campaignFeatures: {
      badge: "FUNCIONALIDADES",
      title: "\u00a1Todo lo que necesit\u00e1s\npara crecer!",
      description: "Herramientas dise\u00f1adas para que puedas enfocarte en lo que mejor hac\u00e9s: crear contenido incre\u00edble.",
      blocks: [
        {
          iconName: "sliders",
          title: "Tu perfil profesional",
          subtitle: "Constru\u00ed un perfil que te represente y dej\u00e1 que las marcas te encuentren.",
          image: "/campaign-create.jpg",
          cards: [
            { iconName: "clapperboard", title: "Portafolio visual", description: "Mostr\u00e1 tus mejores trabajos, estad\u00edsticas y estilo de contenido." },
            { iconName: "lock", title: "Sistema de reputaci\u00f3n", description: "Cada campa\u00f1a completada suma a tu badge: Bronce \u2192 Plata \u2192 Oro. Las marcas priorizan creadores con mejor reputaci\u00f3n." },
            { iconName: "wallet", title: "Tarifas y disponibilidad", description: "Defin\u00ed tus tarifas por tipo de contenido y mostr\u00e1 tu disponibilidad para que las marcas sepan cu\u00e1ndo contactarte." },
          ],
          floatingCards: [
            { iconName: "clapperboard", iconBg: "#0019DA", text: "Portfolio actualizado", subtext: "5 trabajos", position: "-top-8 -right-14" },
            { iconName: "lock", iconBg: "#F97316", text: "Badge Oro", subtext: "Reputaci\u00f3n alta", position: "-bottom-8 -left-14" },
            { iconName: "calendar", iconBg: "#22C55E", text: "Disponible", subtext: "Listo para crear", position: "-bottom-8 -right-14" },
          ],
        },
        {
          iconName: "users",
          title: "Postulate y cobr\u00e1 seguro",
          subtitle: "Encontr\u00e1 campa\u00f1as, negoci\u00e1 y recib\u00ed tus pagos \u2014 todo desde la plataforma.",
          image: "/campaign-dashboard.jpg",
          cards: [
            { iconName: "send", title: "Postulaciones inteligentes", description: "Explor\u00e1 campa\u00f1as activas, filtr\u00e1 por categor\u00eda y presupuesto, y postulate con un clic." },
            { iconName: "wallet", title: "Negociaci\u00f3n directa", description: "Recib\u00ed propuestas, envi\u00e1 contraofertas y acord\u00e1 los t\u00e9rminos directamente con la marca." },
            { iconName: "lock", title: "Cobro protegido", description: "Tu pago queda asegurado desde el inicio. Se libera autom\u00e1ticamente cuando la marca aprueba tu contenido." },
          ],
          floatingCards: [
            { iconName: "send", iconBg: "#7C3AED", text: "Postulaci\u00f3n enviada", subtext: "Hace 2 min", position: "-top-8 -right-14" },
            { iconName: "lock", iconBg: "#22C55E", customIcon: "campaign-status", text: "Contenido aprobado", subtext: "Pago liberado", position: "-bottom-8 -left-14" },
            { iconName: "wallet", iconBg: "#00AEEF", customIcon: "mercadopago", text: "Mercado Pago", subtext: "Cobro seguro", position: "-bottom-8 -right-14" },
          ],
        },
      ],
    },
    pricing: {
      badge: "REPUTACI\u00d3N",
      title: "Tu reputaci\u00f3n es\ntu mejor activo",
      description: "Cada campa\u00f1a completada construye tu reputaci\u00f3n. Sub\u00ed de nivel y acced\u00e9 a mejores oportunidades.",
      ctaButton: "Comienza a monetizar tu contenido",
      plans: [
        { name: "Nuevo", description: "Reci\u00e9n llegaste a Creeadores", price: null, period: "", features: [{ iconName: "users", text: "Perfil b\u00e1sico" }, { iconName: "megaphone", text: "Postulaciones limitadas" }, { iconName: "percent", text: "Badge de nuevo creador" }], cta: "Crear mi perfil", popular: false, iconName: "check", customPriceLabel: "Empez\u00e1 ac\u00e1" },
        { name: "Bronce", description: "Completaste tus primeras campa\u00f1as", price: null, period: "", features: [{ iconName: "users", text: "Perfil verificado" }, { iconName: "megaphone", text: "Postulaciones ilimitadas" }, { iconName: "percent", text: "Visible en b\u00fasqueda de marcas" }], cta: "Empezar ahora", popular: false, iconName: "shield", customPriceLabel: "1+ campa\u00f1as" },
        { name: "Plata", description: "Creador con trayectoria", price: null, period: "", features: [{ iconName: "users", text: "Badge Plata visible" }, { iconName: "megaphone", text: "Prioridad en postulaciones" }, { iconName: "percent", text: "Acceso a campa\u00f1as exclusivas" }], cta: "Seguir creciendo", popular: true, iconName: "award", customPriceLabel: "5+ campa\u00f1as", popularLabel: "M\u00c1S BUSCADO" },
        { name: "Oro", description: "Top creator de la plataforma", price: null, period: "", features: [{ iconName: "users", text: "Badge Oro premium" }, { iconName: "megaphone", text: "M\u00e1xima visibilidad" }, { iconName: "percent", text: "Invitaciones directas de marcas" }], cta: "Llegar a Oro", popular: false, iconName: "crown", customPriceLabel: "15+ campa\u00f1as" },
      ],
    },
    landingFooter: {
      description: "Monetiz\u00e1 tu contenido conectando con las mejores marcas y agencias de Latinoam\u00e9rica.",
      links: ["Oportunidades", "C\u00f3mo funciona", "Reputaci\u00f3n"],
      copyright: "\u00a9 2026 Creadores. Todos los derechos reservados.",
      legal: ["Privacidad", "T\u00e9rminos", "Cookies"],
    },
  },
};

const portuguese: AppDictionary = {
  home: {
    hero: {
      badge: "Parceiros oficiais de",
      line1: "MONETIZE",
      line2: "SEU",
      line3: "",
      line3Bold: "CONTE\u00daDO",
      rotatingWords: ["CONTE\u00daDO", "TALENTO", "CRIATIVIDADE", "AUDI\u00caNCIA", "PAIX\u00c3O"],
      description:
        "Creeadores \u00e9 a plataforma que te conecta com as melhores marcas e ag\u00eancias da Am\u00e9rica Latina. Candidate-se a campanhas, crie conte\u00fado e receba de forma segura.",
      ctas: {
        primary: "Cadastre-se gr\u00e1tis",
        secondary: "Ver oportunidades",
      },
    },
    nav: {
      links: [
        { label: "Sou uma marca", href: "#brands" },
        { label: "Como funciona", href: "#how-it-works" },
        { label: "Reputa\u00e7\u00e3o", href: "#pricing" },
      ],
      signIn: "Entrar",
      startFree: "Cadastre-se gr\u00e1tis",
      signUpDropdown: {
        brand: { label: "Sou uma marca", description: "Conecte-se com criadores" },
        creator: { label: "Sou criador", description: "Monetize seu conte\u00fado" },
      },
    },
    howItWorks: {
      badge: "FÁCIL ASSIM",
      title: "Como funciona?",
      subtitle: "Crie seu perfil, candidate-se a campanhas, negocie seus termos, entregue conte\u00fado e receba com seguran\u00e7a \u2014 tudo sem sair da plataforma.",
      description: "Comece a monetizar seu conteúdo em 5 simples passos.",
      stepLabel: "PASSO",
      steps: [
        { number: "01", iconName: "user-plus", accentColor: "#0019DA", title: "Monte seu perfil", description: "Crie um portfólio que te represente e deixe as marcas te descobrirem pelo seu nicho, audiência e estilo.", bullets: ["Suba seu melhor conteúdo", "Defina suas tarifas por tipo de conteúdo", "Mostre suas métricas e audiência"] },
        { number: "02", iconName: "inbox", accentColor: "#7C3AED", title: "Receba candidaturas", description: "As marcas te encontram através da nossa busca inteligente. Revise propostas e escolha as campanhas que se alinham com sua marca pessoal.", bullets: ["Receba matches com marcas relevantes", "Revise os detalhes antes de se comprometer", "Filtre por orçamento, categoria e tipo"] },
        { number: "03", iconName: "handshake", accentColor: "#ED4B00", title: "Negocie seu valor", description: "Sem tarifas fixas. Você negocia diretamente com a marca e combina termos que funcionem para ambos.", bullets: ["Envie e receba contrapropostas", "Defina entregas e prazos", "Transparência total de ambos os lados"] },
        { number: "04", iconName: "layers", accentColor: "#059669", title: "Trabalhe em múltiplas campanhas", description: "Gerencie várias colaborações ao mesmo tempo em um único dashboard. Acompanhe briefings, prazos e entregas sem esforço.", bullets: ["Dashboard centralizado de campanhas", "Acompanhe o progresso em tempo real", "Comunicação direta com marcas"] },
        { number: "05", iconName: "shield-check", accentColor: "#0891B2", title: "Receba com segurança", description: "Seu pagamento fica garantido desde o início. Quando a marca aprova seu conteúdo, o dinheiro está disponível para solicitar.", bullets: ["Pagamentos protegidos", "Débitos enviados em pouco tempo", "Múltiplos métodos de saque"] },
      ],
      socialProof: {
        stats: [
          { value: "1+ campanhas", label: "Bronze", description: "Perfil verificado e candidaturas ilimitadas", accentColor: "#CD7F32", iconName: "🥉" },
          { value: "10+ campanhas", label: "Prata", description: "Prioridade em candidaturas e campanhas exclusivas", accentColor: "#9CA3AF", iconName: "🥈" },
          { value: "100+ campanhas", label: "Ouro", description: "Máxima visibilidade e convites diretos de marcas", accentColor: "#F59E0B", iconName: "🥇" },
          { value: "500+ campanhas", label: "Platina", description: "Status elite e oportunidades premium", accentColor: "#0891B2", iconName: "💎" },
        ],
        testimonials: [],
      },
      cta: {
        badge: "REPUTAÇÃO",
        title: "✨ Sua próxima campanha está esperando ✨",
        subtitle: "Junte-se a milhares de criadores que já estão monetizando seu conteúdo no Creeadores.",
        primaryButton: "Cadastre-se grátis",
        secondaryButton: "Ver oportunidades",
      },
    },
    landingFeatures: {
      badge: "FUNCIONALIDADES",
      title: "Tudo o que voc\u00ea precisa para\nescalar suas campanhas UGC",
      description: "Ferramentas projetadas para que marcas e criadores colaborem de forma eficiente, segura e sem atrito.",
      items: [
        { badge: "CRM PARA CRIADORES", title: "Gerencie criadores como um pro", description: "Centralize a gest\u00e3o de criadores, contratos e pagamentos enquanto executa campanhas de alto volume. Tudo de um s\u00f3 lugar.", floatingLabels: [{ text: "Opera\u00e7\u00e3o multi-equipe", position: "top-4 right-4", iconName: "users" }, { text: "Pagamentos centralizados", position: "bottom-20 -left-6", iconName: "creditcard" }, { text: "Pagamento ao criador", position: "bottom-8 left-8", iconName: "link" }] },
        { badge: "BUSCA INTELIGENTE", title: "Encontre o criador ideal em segundos", description: "Filtre por nicho, localiza\u00e7\u00e3o, engajamento e estilo de conte\u00fado. Nossa IA sugere os perfis que melhor combinam com sua marca.", floatingLabels: [{ text: "Filtros avan\u00e7ados", position: "top-4 left-4", iconName: "search" }, { text: "Match por IA", position: "bottom-12 right-4", iconName: "bot" }] },
        { badge: "PAGAMENTOS SEGUROS", title: "Pague apenas por conte\u00fado aprovado", description: "O dinheiro \u00e9 liberado somente quando voc\u00ea aprova o conte\u00fado. Sem riscos, sem surpresas. Prote\u00e7\u00e3o total para marcas e criadores.", floatingLabels: [{ text: "Pagamento protegido", position: "top-4 right-4", iconName: "lock" }, { text: "Faturamento autom\u00e1tico", position: "bottom-12 left-4", iconName: "file" }] },
        { badge: "AN\u00c1LISE EM TEMPO REAL", title: "Me\u00e7a o impacto de cada campanha", description: "Dashboards com m\u00e9tricas de desempenho, ROI e engajamento. Tome decis\u00f5es baseadas em dados reais, n\u00e3o em suposi\u00e7\u00f5es.", floatingLabels: [{ text: "ROI em tempo real", position: "top-4 left-4", iconName: "barchart" }, { text: "Relat\u00f3rios export\u00e1veis", position: "bottom-12 right-4", iconName: "trending" }] },
      ],
    },
    campaignTypes: {
      badge: "OPORTUNIDADES",
      title: "Encontre a oportunidade\nperfeita para voc\u00ea",
      description: "Candidate-se ao tipo de campanha que melhor se adapta ao seu perfil e comece a monetizar seu conte\u00fado.",
      scrollLabel: "Deslize para baixo",
      items: [
        {
          iconName: "zap",
          title: "Flex",
          badge: "PLANO FREE",
          description: "As marcas te encontram pelo seu perfil. Negocie diretamente e combine os termos que funcionam para voc\u00ea.",
          bullets: ["Negocie seus pr\u00f3prios termos", "Comunica\u00e7\u00e3o direta com a marca"],
        },
        {
          iconName: "megaphone",
          title: "Influencer",
          description: "Publique conte\u00fado de marcas no seu perfil e monetize sua audi\u00eancia com colabora\u00e7\u00f5es aut\u00eanticas.",
          bullets: ["Publique no seu pr\u00f3prio perfil", "Monetize sua audi\u00eancia de forma aut\u00eantica"],
        },
        {
          iconName: "camera",
          title: "UGC Creator",
          description: "Produza v\u00eddeos profissionais para marcas com os recursos que elas enviam. Voc\u00ea cria, elas publicam.",
          bullets: ["Receba briefings e recursos da marca", "Foque em criar conte\u00fado de qualidade"],
        },
        {
          iconName: "star",
          title: "UGC + Influencer",
          description: "A oportunidade mais completa: produza conte\u00fado para a marca e publique no seu perfil. Duplo impacto, maior renda.",
          bullets: ["Produza + publique = maior renda", "A oportunidade mais completa da plataforma"],
        },
      ],
    },
    campaignFeatures: {
      badge: "FUNCIONALIDADES",
      title: "Tudo o que voc\u00ea precisa\npara crescer!",
      description: "Ferramentas projetadas para que voc\u00ea possa focar no que faz de melhor: criar conte\u00fado incr\u00edvel.",
      blocks: [
        {
          iconName: "sliders",
          title: "Seu perfil profissional",
          subtitle: "Construa um perfil que te represente e deixe as marcas te encontrarem.",
          image: "/campaign-create.jpg",
          cards: [
            { iconName: "clapperboard", title: "Portf\u00f3lio visual", description: "Mostre seus melhores trabalhos, estat\u00edsticas e estilo de conte\u00fado." },
            { iconName: "lock", title: "Sistema de reputa\u00e7\u00e3o", description: "Cada campanha completada soma ao seu badge: Bronze \u2192 Prata \u2192 Ouro. As marcas priorizam criadores com melhor reputa\u00e7\u00e3o." },
            { iconName: "wallet", title: "Tarifas e disponibilidade", description: "Defina suas tarifas por tipo de conte\u00fado e mostre sua disponibilidade para que as marcas saibam quando te contatar." },
          ],
          floatingCards: [
            { iconName: "clapperboard", iconBg: "#0019DA", text: "Portf\u00f3lio atualizado", subtext: "5 trabalhos", position: "-top-8 -right-14" },
            { iconName: "lock", iconBg: "#F97316", text: "Badge Ouro", subtext: "Reputa\u00e7\u00e3o alta", position: "-bottom-8 -left-14" },
            { iconName: "calendar", iconBg: "#22C55E", text: "Dispon\u00edvel", subtext: "Pronto para criar", position: "-bottom-8 -right-14" },
          ],
        },
        {
          iconName: "users",
          title: "Candidate-se e receba com seguran\u00e7a",
          subtitle: "Encontre campanhas, negocie e receba seus pagamentos \u2014 tudo pela plataforma.",
          image: "/campaign-dashboard.jpg",
          cards: [
            { iconName: "send", title: "Candidaturas inteligentes", description: "Explore campanhas ativas, filtre por categoria e or\u00e7amento, e candidate-se com um clique." },
            { iconName: "wallet", title: "Negocia\u00e7\u00e3o direta", description: "Receba propostas, envie contrapropostas e combine os termos diretamente com a marca." },
            { iconName: "lock", title: "Pagamento protegido", description: "Seu pagamento fica garantido desde o in\u00edcio. \u00c9 liberado automaticamente quando a marca aprova seu conte\u00fado." },
          ],
          floatingCards: [
            { iconName: "send", iconBg: "#7C3AED", text: "Candidatura enviada", subtext: "H\u00e1 2 min", position: "-top-8 -right-14" },
            { iconName: "lock", iconBg: "#22C55E", customIcon: "campaign-status", text: "Conte\u00fado aprovado", subtext: "Pagamento liberado", position: "-bottom-8 -left-14" },
            { iconName: "wallet", iconBg: "#00AEEF", customIcon: "mercadopago", text: "Mercado Pago", subtext: "Pagamento seguro", position: "-bottom-8 -right-14" },
          ],
        },
      ],
    },
    pricing: {
      badge: "REPUTA\u00c7\u00c3O",
      title: "Sua reputa\u00e7\u00e3o \u00e9\nseu melhor ativo",
      description: "Cada campanha completada constr\u00f3i sua reputa\u00e7\u00e3o. Suba de n\u00edvel e acesse melhores oportunidades.",
      plans: [
        { name: "Novo", description: "Voc\u00ea acabou de chegar ao Creeadores", price: null, period: "", features: [{ iconName: "users", text: "Perfil b\u00e1sico" }, { iconName: "megaphone", text: "Candidaturas limitadas" }, { iconName: "percent", text: "Badge de novo criador" }], cta: "Criar meu perfil", popular: false, iconName: "check", customPriceLabel: "Comece aqui" },
        { name: "Bronze", description: "Voc\u00ea completou suas primeiras campanhas", price: null, period: "", features: [{ iconName: "users", text: "Perfil verificado" }, { iconName: "megaphone", text: "Candidaturas ilimitadas" }, { iconName: "percent", text: "Vis\u00edvel na busca de marcas" }], cta: "Come\u00e7ar agora", popular: false, iconName: "shield", customPriceLabel: "1+ campanhas" },
        { name: "Prata", description: "Criador com trajet\u00f3ria", price: null, period: "", features: [{ iconName: "users", text: "Badge Prata vis\u00edvel" }, { iconName: "megaphone", text: "Prioridade em candidaturas" }, { iconName: "percent", text: "Acesso a campanhas exclusivas" }], cta: "Continuar crescendo", popular: true, iconName: "award", customPriceLabel: "5+ campanhas", popularLabel: "MAIS PROCURADO" },
        { name: "Ouro", description: "Top creator da plataforma", price: null, period: "", features: [{ iconName: "users", text: "Badge Ouro premium" }, { iconName: "megaphone", text: "M\u00e1xima visibilidade" }, { iconName: "percent", text: "Convites diretos de marcas" }], cta: "Chegar ao Ouro", popular: false, iconName: "crown", customPriceLabel: "15+ campanhas" },
      ],
    },
    landingFooter: {
      description: "Monetize seu conte\u00fado conectando com as melhores marcas e ag\u00eancias da Am\u00e9rica Latina.",
      links: ["Oportunidades", "Como funciona", "Reputa\u00e7\u00e3o"],
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
