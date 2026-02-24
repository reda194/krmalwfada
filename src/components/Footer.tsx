import { HeartHandshake, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#021A11] text-white pt-24 pb-12 overflow-hidden border-t border-gold/10">
      {/* Decorative top border gradient line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      {/* Ultra-subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l2 18 18 2-18 2-2 18-2-18L0 20l18-2 2-18z' fill='%23D4AF37' fill-rule='evenodd'/%3E%3C/svg%3E")`, backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
          <div className="flex flex-col gap-8 max-w-sm">
            <div className="flex items-center gap-5">
              <div className="bg-gradient-to-br from-gold/20 to-gold/5 p-4 rounded-3xl border border-gold/30 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                <HeartHandshake className="w-12 h-12 text-gold drop-shadow-md" />
              </div>
              <div>
                <span className="text-3xl font-black tracking-tight text-white block drop-shadow-sm mb-1">كرم الوفادة</span>
                <span className="text-gold text-sm font-bold tracking-widest uppercase">شرف الخدمة في أطهر البقاع</span>
              </div>
            </div>
            <p className="text-gray-400 leading-loose font-light text-lg">
              مؤسسة رائدة في خدمة ضيوف الرحمن، تسعى لتقديم نموذج مشرف للحفاوة السعودية في مكة المكرمة والمشاعر المقدسة، وفق أعلى معايير الجودة والإحسان.
            </p>
          </div>
          
          <div className="w-full lg:w-auto bg-white/5 p-10 rounded-[2.5rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl relative overflow-hidden">
            {/* Glass reflection */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none -translate-x-1/2 -skew-x-12 opacity-30" />
            
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
              <span className="w-2 h-8 bg-gold rounded-full inline-block shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>
              اشترك في نشرتنا البريدية
            </h3>
            
            <form
              action="/contact"
              method="get"
              className="flex w-full max-w-md relative group z-10"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-gold to-yellow-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <label htmlFor="footer-newsletter-email" className="sr-only">
                البريد الإلكتروني
              </label>
              <input type="hidden" name="topic" value="newsletter" />
              <input 
                id="footer-newsletter-email"
                name="email"
                type="email" 
                placeholder="البريد الإلكتروني" 
                required
                className="relative bg-black/40 px-6 py-5 rounded-r-2xl border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold w-full transition-all text-white placeholder-gray-500 text-lg shadow-inner"
                dir="rtl"
              />
              <button
                type="submit"
                className="relative bg-gradient-to-l from-gold to-yellow-500 text-[#021A11] px-8 py-5 font-black text-xl rounded-l-2xl hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all shrink-0"
              >
                اشتراك
              </button>
            </form>
          </div>
          
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 border-t border-white/10 pt-16">
          <div>
            <h4 className="font-bold text-gold mb-8 text-xl">عن كرم الوفادة</h4>
            <ul className="space-y-5 text-gray-400 font-light text-lg">
              <li><Link href="/about#story" className="hover:text-white hover:text-gold hover:-translate-x-2 inline-block transition-transform duration-300">قصتنا</Link></li>
              <li><Link href="/about#mission" className="hover:text-white hover:text-gold hover:-translate-x-2 inline-block transition-transform duration-300">رسالتنا</Link></li>
              <li><Link href="/about#leadership" className="hover:text-white hover:text-gold hover:-translate-x-2 inline-block transition-transform duration-300">مجلس الإدارة</Link></li>
              <li><Link href="/#partners" className="hover:text-white hover:text-gold hover:-translate-x-2 inline-block transition-transform duration-300">الشركاء الاستراتيجيون</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gold mb-8 text-xl">مشاريعنا</h4>
            <ul className="space-y-5 text-gray-400 font-light text-lg">
              <li><Link href="/#projects" className="hover:text-white hover:text-gold hover:-translate-x-2 inline-block transition-transform duration-300">سقيا ماء زمزم</Link></li>
              <li><Link href="/#projects" className="hover:text-white hover:text-gold hover:-translate-x-2 inline-block transition-transform duration-300">إطعام ضيف الرحمن</Link></li>
              <li><Link href="/#projects" className="hover:text-white hover:text-gold hover:-translate-x-2 inline-block transition-transform duration-300">الإرشاد الميداني</Link></li>
              <li><Link href="/#projects" className="hover:text-white hover:text-gold hover:-translate-x-2 inline-block transition-transform duration-300">برامج الضيافة والإسكان</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gold mb-8 text-xl">شارك معنا</h4>
            <ul className="space-y-5 text-gray-400 font-light text-lg">
              <li><Link href="/contact" className="hover:text-white hover:text-gold hover:-translate-x-2 inline-block transition-transform duration-300">تطوع الآن</Link></li>
              <li><Link href="/contact" className="hover:text-white hover:text-gold hover:-translate-x-2 inline-block transition-transform duration-300">الرعاية والشراكات</Link></li>
              <li><Link href="/contact" className="hover:text-white hover:text-gold hover:-translate-x-2 inline-block transition-transform duration-300">سفراء العطاء</Link></li>
              <li><Link href="/donate#bank-transfer" className="hover:text-white hover:text-gold hover:-translate-x-2 inline-block transition-transform duration-300">حسابات التبرع المباشر</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gold mb-8 text-xl">تواصل معنا</h4>
            <ul className="space-y-6 text-gray-300 font-light text-lg">
              <li className="flex gap-4 items-start hover:text-gold transition-colors group">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 shadow-inner group-hover:bg-gold/10 group-hover:border-gold/30 transition-all">
                  <MapPin className="w-5 h-5 text-gold" />
                </div> 
                <a
                  href="https://maps.google.com/?q=Mecca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 leading-relaxed"
                >
                  مكة المكرمة، المنطقة المركزية،<br/>المملكة العربية السعودية
                </a>
              </li>
              <li className="flex gap-4 items-center hover:text-gold transition-colors group">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 shadow-inner group-hover:bg-gold/10 group-hover:border-gold/30 transition-all">
                  <Phone className="w-5 h-5 text-gold" />
                </div> 
                <a href="tel:+966920000000" dir="ltr" className="font-medium tracking-wider">+966 920 000 000</a>
              </li>
              <li className="flex gap-4 items-center hover:text-gold transition-colors group">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 shadow-inner group-hover:bg-gold/10 group-hover:border-gold/30 transition-all">
                  <Mail className="w-5 h-5 text-gold" />
                </div> 
                <a href="mailto:info@krmalwfada.sa" className="font-medium">info@krmalwfada.sa</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8 mt-12 text-gray-500 text-sm">
          <p className="font-light tracking-wide text-center md:text-right">
            © {new Date().getFullYear()} كرم الوفادة. جميع الحقوق محفوظة. <span className="hidden sm:inline">|</span> <br className="sm:hidden" /> تم التصميم بحب لخدمة ضيوف الرحمن.
          </p>
          <div className="flex gap-8 font-medium">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">سياسة الخصوصية</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
