import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Karm Al-Wafada | كرم الوفادة",
  description: "The Honor of Serving in the Holiest Lands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body
        className={`${tajawal.variable} antialiased font-tajawal bg-sand text-emerald min-h-screen relative`}
      >
        {/* Subtle Islamic Geometric Pattern Overlay */}
        <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l2.65 11.5L44 9l-5.65 10.5L49 26l-11.5 2.65L42.5 40l-10.5-5.65L30 46l-2.65-11.65L16 40l5.65-10.5L11 26l11.5-2.65L17.5 12 28 17.65z' fill='%2306402B' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
        />
        {children}
      </body>
    </html>
  );
}
