import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function MobileDonateBar() {
  return (
    <div className="fixed md:hidden bottom-3 inset-x-3 z-[70]">
      <div className="rounded-2xl border border-gold/40 bg-[#021A11]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.45)] p-3">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 text-gold">
            <ShieldCheck className="w-4 h-4" />
            <p className="text-xs font-bold">قناة تبرع موثوقة</p>
          </div>
          <p className="text-[11px] text-gray-200">+842 مساهم خلال 24 ساعة</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            href="/contact"
            className="rounded-xl border border-white/20 text-white text-sm font-bold py-3 text-center hover:bg-white/10 transition-colors"
          >
            استفسر قبل التبرع
          </Link>
          <Link
            href="/donate"
            className="rounded-xl bg-gradient-to-l from-gold to-yellow-400 text-[#021A11] text-sm font-black py-3 text-center"
          >
            تبرع الآن
          </Link>
        </div>
      </div>
    </div>
  );
}
