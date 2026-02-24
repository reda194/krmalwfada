import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "الشروط والأحكام لموقع كرم الوفادة",
  description:
    "تتضمن هذه الصفحة الشروط والأحكام المنظمة لاستخدام موقع كرم الوفادة وآلية الاستفادة من المحتوى والخدمات والقنوات الرسمية الخاصة بالمبادرة.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    url: "/terms",
    title: "الشروط والأحكام لموقع كرم الوفادة",
    description:
      "اطلع على الشروط والأحكام المنظمة لاستخدام موقع كرم الوفادة وخدماته.",
    images: ["/images/hero_bg_1771963627087.jpg"],
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-sand text-[#021A11] py-20">
      <section className="container mx-auto px-6 max-w-4xl space-y-8 leading-loose">
        <h1 className="text-4xl font-black">الشروط والأحكام</h1>
        <p className="text-gray-600 text-sm">آخر تحديث: 24 فبراير 2026</p>

        <section className="space-y-3">
          <h2 className="text-2xl font-black">1. قبول الشروط</h2>
          <p>
            باستخدام هذا الموقع فإنك توافق على الالتزام بالشروط والأحكام الواردة في
            هذه الصفحة وأي تحديثات لاحقة عليها.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-black">2. استخدام المحتوى</h2>
          <p>
            المعلومات المنشورة لأغراض تعريفية وتوعوية، ولا يجوز إعادة استخدامها
            بشكل مضلل أو منسوب لجهة غير معتمدة.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-black">3. التبرعات وطلبات الدعم</h2>
          <p>
            يتم التعامل مع طلبات المساهمة عبر القنوات الرسمية المعلنة، وقد تتطلب
            بعض العمليات تواصلاً مباشرًا لاستكمال البيانات اللازمة.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-black">4. حدود المسؤولية</h2>
          <p>
            نسعى لدقة المعلومات وتحديثها، ومع ذلك قد تطرأ تغييرات تشغيلية تستدعي
            تحديث بعض التفاصيل دون إشعار مسبق.
          </p>
        </section>

        <div className="pt-2 flex flex-wrap gap-4 text-sm">
          <Link href="/" className="text-emerald hover:underline">العودة للرئيسية</Link>
          <Link href="/contact" className="text-emerald hover:underline">تواصل معنا</Link>
          <Link href="/privacy-policy" className="text-emerald hover:underline">سياسة الخصوصية</Link>
        </div>
      </section>
    </main>
  );
}
