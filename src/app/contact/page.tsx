import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تواصل معنا عبر القنوات الرسمية لكرم الوفادة",
  description:
    "استخدم قنوات التواصل الرسمية مع كرم الوفادة للاستفسارات العامة وطلبات التبرع والتطوع والشراكات، مع معلومات اتصال واضحة ومحدثة لخدمة المستفيدين.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    title: "تواصل معنا عبر القنوات الرسمية لكرم الوفادة",
    description:
      "قنوات التواصل الرسمية مع كرم الوفادة للاستفسارات وطلبات التبرع والتطوع والشراكات.",
    images: ["/images/hero_bg_1771963627087.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-sand text-[#021A11] py-20">
      <section className="container mx-auto px-6 max-w-4xl space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black">تواصل معنا</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            يسعدنا استقبال استفساراتكم وطلبات التعاون على القنوات الرسمية أدناه.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="tel:+966920000000"
            className="rounded-3xl border border-emerald/20 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-black mb-2">الهاتف</h2>
            <p className="text-gray-600 mb-2">خدمة العملاء</p>
            <p dir="ltr" className="font-bold text-emerald text-lg">
              +966 920 000 000
            </p>
          </a>

          <a
            href="mailto:info@krmalwfada.sa"
            className="rounded-3xl border border-emerald/20 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-black mb-2">البريد الإلكتروني</h2>
            <p className="text-gray-600 mb-2">للتواصل والاستفسارات</p>
            <p className="font-bold text-emerald text-lg">info@krmalwfada.sa</p>
          </a>
        </div>

        <article className="rounded-3xl border border-gold/20 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black mb-3">العنوان</h2>
          <p className="text-gray-700 leading-loose">
            مكة المكرمة، المنطقة المركزية، المملكة العربية السعودية.
          </p>
        </article>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/" className="text-emerald hover:underline">العودة للرئيسية</Link>
          <Link href="/donate" className="text-emerald hover:underline">صفحة التبرع</Link>
          <Link href="/privacy-policy" className="text-emerald hover:underline">سياسة الخصوصية</Link>
          <Link href="/terms" className="text-emerald hover:underline">الشروط والأحكام</Link>
        </div>
      </section>
    </main>
  );
}
