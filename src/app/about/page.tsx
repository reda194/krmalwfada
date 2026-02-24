import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "من نحن ورسالتنا في خدمة ضيوف الرحمن",
  description:
    "تعرف على قصة كرم الوفادة ورسالتها وخطتها التشغيلية في خدمة ضيوف الرحمن عبر مبادرات ميدانية تشمل السقيا والإطعام والإرشاد والضيافة في مكة والمشاعر المقدسة.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
    title: "من نحن ورسالتنا في خدمة ضيوف الرحمن",
    description:
      "تعرف على قصة كرم الوفادة ورسالتها وخطتها التشغيلية في خدمة ضيوف الرحمن.",
    images: ["/images/hero_bg_1771963627087.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#021A11] py-20">
      <section className="container mx-auto px-6 max-w-4xl space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black">من نحن</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            كرم الوفادة مبادرة تُعنى بخدمة ضيوف الرحمن عبر برامج السقيا والإطعام
            والإرشاد والضيافة، وفق معايير تشغيلية واضحة وشراكات ميدانية فعالة.
          </p>
        </header>

        <section id="story" className="space-y-4">
          <h2 className="text-3xl font-black">قصتنا</h2>
          <p className="text-gray-700 leading-loose">
            انطلقت المبادرة من احتياج ميداني حقيقي في مكة والمشاعر المقدسة، بهدف
            تنظيم العمل الخيري وتحويله إلى أثر مستدام قابل للقياس والتطوير.
          </p>
        </section>

        <section id="mission" className="space-y-4">
          <h2 className="text-3xl font-black">رسالتنا</h2>
          <p className="text-gray-700 leading-loose">
            تقديم نموذج مشرّف لخدمة ضيف الرحمن يجمع بين الإحسان والجودة وسرعة
            الاستجابة، مع تعزيز تجربة الحاج والمعتمر في مختلف مراحل رحلته.
          </p>
        </section>

        <section id="leadership" className="space-y-4">
          <h2 className="text-3xl font-black">الحوكمة والإدارة</h2>
          <p className="text-gray-700 leading-loose">
            تدار المبادرة عبر فرق تشغيلية وإشرافية، مع متابعة دورية لمؤشرات الأداء
            الميداني وقياس أثر البرامج بشكل مستمر.
          </p>
        </section>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/donate"
            className="rounded-2xl bg-gradient-to-l from-gold to-yellow-500 px-6 py-3 font-bold text-[#021A11]"
          >
            التبرع الآن
          </Link>
          <Link
            href="/contact"
            className="rounded-2xl border border-emerald/20 px-6 py-3 font-bold text-emerald"
          >
            تواصل معنا
          </Link>
        </div>
      </section>
    </main>
  );
}
