import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const siteUrl = getSiteUrl();

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "كرم الوفادة | خدمة ضيوف الرحمن في مكة والمشاعر المقدسة",
    template: "%s | كرم الوفادة",
  },
  description:
    "كرم الوفادة مبادرة سعودية لخدمة ضيوف الرحمن عبر برامج السقيا والإطعام والإرشاد والضيافة، مع أثر ميداني موثوق وشراكات فاعلة في مكة والمشاعر المقدسة.",
  keywords: [
    "كرم الوفادة",
    "خدمة ضيوف الرحمن",
    "التبرع للحجاج والمعتمرين",
    "مبادرات مكة المكرمة",
    "السقيا والإطعام",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: siteUrl,
    siteName: "كرم الوفادة",
    title: "كرم الوفادة | شرف الخدمة في أطهر البقاع",
    description:
      "ساهم في خدمة ضيوف الرحمن من خلال مشاريع السقيا والإطعام والإرشاد والضيافة في مكة والمشاعر المقدسة.",
    images: [
      {
        url: "/images/hero_bg_1771963627087.jpg",
        width: 1200,
        height: 630,
        alt: "مشهد من مكة المكرمة ضمن مبادرات كرم الوفادة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "كرم الوفادة | شرف الخدمة في أطهر البقاع",
    description:
      "مبادرة لخدمة ضيوف الرحمن عبر برامج السقيا والإطعام والإرشاد والضيافة.",
    images: ["/images/hero_bg_1771963627087.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "كرم الوفادة",
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    sameAs: [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+966920000000",
        contactType: "customer service",
        areaServed: "SA",
        availableLanguage: ["ar", "en"],
      },
    ],
  };

  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body
        className={`${tajawal.variable} antialiased font-tajawal bg-sand text-emerald min-h-screen relative`}
      >
        {/* Subtle Islamic Geometric Pattern Overlay */}
        <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l2.65 11.5L44 9l-5.65 10.5L49 26l-11.5 2.65L42.5 40l-10.5-5.65L30 46l-2.65-11.65L16 40l5.65-10.5L11 26l11.5-2.65L17.5 12 28 17.65z' fill='%2306402B' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
