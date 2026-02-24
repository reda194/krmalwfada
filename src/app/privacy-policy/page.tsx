import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "سياسة الخصوصية لموقع كرم الوفادة",
  description:
    "توضح سياسة الخصوصية في كرم الوفادة كيفية جمع بيانات المستخدمين واستخدامها وتخزينها وحمايتها عند استخدام الموقع أو التواصل عبر القنوات الرسمية.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    url: "/privacy-policy",
    title: "سياسة الخصوصية لموقع كرم الوفادة",
    description:
      "تعرف على كيفية جمع البيانات الشخصية واستخدامها وحمايتها في موقع كرم الوفادة.",
    images: ["/images/hero_bg_1771963627087.jpg"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#021A11] py-20">
      <section className="container mx-auto px-6 max-w-4xl space-y-8 leading-loose">
        <h1 className="text-4xl font-black">سياسة الخصوصية</h1>
        <p className="text-gray-600 text-sm">آخر تحديث: 24 فبراير 2026</p>

        <section className="space-y-3">
          <h2 className="text-2xl font-black">1. البيانات التي نجمعها</h2>
          <p>
            قد نجمع بيانات التواصل التي يقدّمها المستخدم مباشرة مثل الاسم والبريد
            الإلكتروني ورقم الهاتف عند التواصل أو طلب المساهمة.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-black">2. استخدام البيانات</h2>
          <p>
            تستخدم البيانات فقط لغرض خدمة المستفيدين، متابعة الطلبات، وتحسين تجربة
            الموقع والخدمات المرتبطة بالمبادرة.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-black">3. حماية المعلومات</h2>
          <p>
            نعمل على تطبيق ضوابط تقنية وتنظيمية مناسبة لحماية البيانات من الوصول
            غير المصرح به أو الاستخدام غير المشروع.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-black">4. التواصل والاستفسارات</h2>
          <p>
            لأي استفسار حول الخصوصية، يمكن التواصل عبر البريد الإلكتروني:
            {" "}
            <a className="text-emerald font-bold" href="mailto:info@krmalwfada.sa">
              info@krmalwfada.sa
            </a>
          </p>
        </section>

        <div className="pt-2 flex flex-wrap gap-4 text-sm">
          <Link href="/" className="text-emerald hover:underline">العودة للرئيسية</Link>
          <Link href="/contact" className="text-emerald hover:underline">تواصل معنا</Link>
          <Link href="/terms" className="text-emerald hover:underline">الشروط والأحكام</Link>
        </div>
      </section>
    </main>
  );
}
