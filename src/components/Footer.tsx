import { HeartHandshake, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#021A11] text-white pt-14 pb-8 overflow-hidden border-t border-gold/10">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l2 18 18 2-18 2-2 18-2-18L0 20l18-2 2-18z' fill='%23D4AF37' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 xl:gap-6 items-start border-b border-white/10 pb-8">
          <section className="xl:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-2xl bg-gold/15 border border-gold/35 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-2xl font-black leading-none">كرم الوفادة</p>
                <p className="text-gold text-xs font-bold mt-1">شرف الخدمة في أطهر البقاع</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              مؤسسة رائدة في خدمة ضيوف الرحمن بمبادرات ميدانية متخصصة في السقيا
              والإطعام والإرشاد والضيافة.
            </p>
          </section>

          <section>
            <h3 className="font-black text-gold mb-3 text-lg">عن كرم الوفادة</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/about#story" className="hover:text-gold transition-colors">قصتنا</Link></li>
              <li><Link href="/about#mission" className="hover:text-gold transition-colors">رسالتنا</Link></li>
              <li><Link href="/about#leadership" className="hover:text-gold transition-colors">مجلس الإدارة</Link></li>
              <li><Link href="/#partners" className="hover:text-gold transition-colors">الشركاء الاستراتيجيون</Link></li>
            </ul>
          </section>

          <section>
            <h3 className="font-black text-gold mb-3 text-lg">مشاريعنا</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/#projects" className="hover:text-gold transition-colors">سقيا ماء زمزم</Link></li>
              <li><Link href="/#projects" className="hover:text-gold transition-colors">إطعام ضيف الرحمن</Link></li>
              <li><Link href="/#projects" className="hover:text-gold transition-colors">الإرشاد الميداني</Link></li>
              <li><Link href="/#projects" className="hover:text-gold transition-colors">برامج الضيافة والإسكان</Link></li>
            </ul>
          </section>

          <section>
            <h3 className="font-black text-gold mb-3 text-lg">شارك معنا</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/contact" className="hover:text-gold transition-colors">تطوع الآن</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">الرعاية والشراكات</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">سفراء العطاء</Link></li>
              <li><Link href="/donate#bank-transfer" className="hover:text-gold transition-colors">حسابات التبرع المباشر</Link></li>
            </ul>
          </section>

          <section>
            <h3 className="font-black text-gold mb-3 text-lg">تواصل معنا</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href="https://maps.google.com/?q=Mecca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors leading-relaxed"
                >
                  مكة المكرمة، المنطقة المركزية، المملكة العربية السعودية
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+966920000000" dir="ltr" className="hover:text-gold transition-colors">
                  +966 920 000 000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:info@krmalwfada.sa" className="hover:text-gold transition-colors">
                  info@krmalwfada.sa
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="pt-5 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-gray-400">
          <p className="text-center md:text-right">
            © {new Date().getFullYear()} كرم الوفادة. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">سياسة الخصوصية</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
