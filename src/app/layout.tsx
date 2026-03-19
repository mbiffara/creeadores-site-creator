import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "./components/ThemeProvider"
import { LanguageProvider } from "@/components/language-provider"
import { cookies } from "next/headers"
import { isThemePreference, resolveTheme, THEME_COOKIE_NAME, type ThemePreference } from "@/lib/theme"
import { LANGUAGE_COOKIE_NAME, resolveLocale } from "@/lib/i18n"

const SITE_URL = "https://creeadores.com"
const SEO_TITLE = "Creeadores | Monetiza tu Contenido"
const SEO_DESCRIPTION =
  "Conectamos marcas con creadores de contenido. Crea campañas, encuentra creadores de contenido, gestiona sus entregables y pagos en una sola plataforma."
const SEO_KEYWORDS =
  "creadores de contenido UGC, plataforma UGC, marketplace creadores de contenido, contenido generado por usuarios, UGC creator, marketplace UGC, creadores UGC, plataforma para creadores de contenido, contratar creadores de contenido, contratar creadores UGC"
const BRAND_COLOR = "#0019DA"

const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Creeadores",
  url: SITE_URL,
  description: SEO_DESCRIPTION,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", category: "Software" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "150" },
  creator: { "@type": "Organization", name: "Creeadores", url: SITE_URL },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Creeadores",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: "Plataforma que conecta marcas con creadores de contenido UGC",
  sameAs: [
    "https://twitter.com/creeadores",
    "https://instagram.com/creeadores",
    "https://linkedin.com/company/creeadores",
    "https://facebook.com/creeadores",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "contacto@creeadores.com",
    availableLanguage: ["Spanish", "English"],
  },
}

export const metadata: Metadata = {
  title: { default: SEO_TITLE, template: "%s | Creeadores" },
  description: SEO_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  applicationName: "Creeadores",
  authors: [{ name: "Creeadores" }],
  creator: "Creeadores",
  publisher: "Creeadores",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/", languages: { es: "/", "es-AR": "/", "es-MX": "/", "es-CO": "/" } },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    siteName: "Creeadores",
    locale: "es_ES",
    alternateLocale: ["es_AR", "es_MX", "es_CO"],
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Creeadores - Plataforma UGC" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@creeadores",
    creator: "@creeadores",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: BRAND_COLOR,
}

async function getInitialTheme(): Promise<ThemePreference> {
  const cookieStore = await cookies();
  const storedTheme = cookieStore.get(THEME_COOKIE_NAME)?.value;
  return storedTheme && isThemePreference(storedTheme) ? storedTheme : "light";
}

async function getInitialLocale() {
  const cookieStore = await cookies();
  const storedLocale = cookieStore.get(LANGUAGE_COOKIE_NAME)?.value;
  return resolveLocale(storedLocale);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const themePreference = await getInitialTheme();
  const initialResolvedTheme = resolveTheme(themePreference);
  const locale = await getInitialLocale();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-theme={initialResolvedTheme}
      data-theme-preference={themePreference}
    >
    <head>
        <meta httpEquiv="content-language" content="es" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider initialTheme={themePreference}>
          <LanguageProvider initialLocale={locale}>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
