import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تبرع الآن لخدمة ضيوف الرحمن في مكة والمشاعر",
  description:
    "اختر باقة التبرع المناسبة وابدأ المساهمة في برامج السقيا والإطعام والإرشاد والضيافة ضمن مبادرات كرم الوفادة لخدمة ضيوف الرحمن في مكة والمشاعر المقدسة.",
  alternates: {
    canonical: "/donate",
  },
  openGraph: {
    url: "/donate",
    title: "تبرع الآن لخدمة ضيوف الرحمن في مكة والمشاعر",
    description:
      "اختر باقة التبرع المناسبة وابدأ المساهمة في برامج كرم الوفادة لخدمة ضيوف الرحمن.",
    images: ["/images/hero_bg_1771963627087.jpg"],
  },
};

const packages = [
  {
    title: "باقة السقيا",
    amount: 100,
    description: "توفير مياه زمزم والمياه المبردة لضيوف الرحمن.",
  },
  {
    title: "باقة الضيافة المتكاملة",
    amount: 350,
    description: "رعاية يومية تشمل الوجبات والمشروبات والخدمات المساندة.",
  },
  {
    title: "باقة الإيواء",
    amount: 1000,
    description: "دعم برامج الإسكان والضيافة للحجاج والمعتمرين المحتاجين.",
  },
];

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-sand text-[#021A11] py-20">
      <section className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-black mb-6">ابدأ مساهمتك الآن</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          اختر الباقة المناسبة، ثم أكمل طلب التبرع عبر فريق كرم الوفادة. يتم الرد
          على الطلبات خلال أوقات العمل الرسمية.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg) => (
            <article
              key={pkg.title}
              className="rounded-3xl border border-emerald/10 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-black mb-3">{pkg.title}</h2>
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              <p className="text-3xl font-black text-emerald mb-6">{pkg.amount} ﷼</p>
              <a
                href={`mailto:info@krmalwfada.sa?subject=${encodeURIComponent(
                  `طلب تبرع - ${pkg.title}`
                )}&body=${encodeURIComponent(
                  `أرغب بالمساهمة في ${pkg.title} بقيمة ${pkg.amount} ريال.`
                )}`}
                className="inline-flex w-full justify-center rounded-2xl bg-gradient-to-l from-gold to-yellow-500 px-5 py-3 font-bold text-[#021A11] transition hover:brightness-95"
              >
                تأكيد طلب المساهمة
              </a>
            </article>
          ))}
        </div>

        <div
          id="bank-transfer"
          className="rounded-3xl border border-gold/30 bg-white p-8 shadow-sm"
        >
          <h2 className="text-2xl font-black mb-4">تحتاج مساعدة أو تحويل مباشر؟</h2>
          <p className="text-gray-700 mb-5">
            تواصل معنا عبر البريد أو الهاتف لتزويدك بخيارات التبرع الرسمية وخطوات
            الإتمام.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+966920000000"
              className="inline-flex justify-center rounded-2xl border border-emerald/20 px-5 py-3 font-bold text-emerald hover:bg-emerald/5"
            >
              +966 920 000 000
            </a>
            <a
              href="mailto:info@krmalwfada.sa"
              className="inline-flex justify-center rounded-2xl border border-emerald/20 px-5 py-3 font-bold text-emerald hover:bg-emerald/5"
            >
              info@krmalwfada.sa
            </a>
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-2xl bg-[#021A11] px-5 py-3 font-bold text-white hover:bg-emerald"
            >
              صفحة التواصل
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          <Link href="/" className="text-emerald hover:underline">العودة للرئيسية</Link>
          <Link href="/privacy-policy" className="text-emerald hover:underline">سياسة الخصوصية</Link>
          <Link href="/terms" className="text-emerald hover:underline">الشروط والأحكام</Link>
        </div>
      </section>
    </main>
  );
}
