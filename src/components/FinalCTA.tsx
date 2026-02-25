"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BadgeCheck, HeartHandshake, Sparkles, Users } from "lucide-react";
import Link from "next/link";

const impactFacts = [
  { label: "مساهمون خلال 24 ساعة", value: "+842", icon: Users },
  { label: "طلبات مكتملة هذا الأسبوع", value: "1,970", icon: BadgeCheck },
  { label: "فرق تشغيل فعالة", value: "32", icon: HeartHandshake },
];

const commitmentPoints = [
  "قنوات رسمية موثوقة وتأكيد سريع للطلب.",
  "متابعة تشغيلية ميدانية على مدار الموسم.",
  "تقرير أثر دوري يوضح نتائج مساهمتك.",
];

export default function FinalCTA() {
  return (
    <section className="relative w-full min-h-[76vh] overflow-hidden bg-black py-24 md:py-28">
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{ backgroundImage: "url('/images/hero_bg_1771963627087.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#021A11]/80 backdrop-blur-sm z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021A11] via-[#021A11]/40 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <motion.div
            className="lg:col-span-7 rounded-[2.5rem] border border-white/15 bg-black/30 backdrop-blur-xl p-8 md:p-10"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-4 py-2 mb-6 text-gold text-sm font-bold">
              <Sparkles className="w-4 h-4" />
              لحظة أثر لا تُعوّض
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
              كن جزءًا من مسيرة
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-gold via-yellow-300 to-white block mt-2">
                العطاء والبركة
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 max-w-3xl">
              لا تفوت شرف خدمة ضيوف الرحمن. مساهمتك تصنع فرقًا ميدانيًا فوريًا وتترك
              أثرًا ممتدًا في قلوب القاصدين.
            </p>

            <div className="space-y-3 mb-8">
              {commitmentPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 text-gray-100">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <p>{point}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-l from-gold to-yellow-400 text-[#021A11] font-black px-8 py-4 text-xl hover:brightness-95 transition"
              >
                شارك في الأجر الآن
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/35 text-white font-bold px-8 py-4 text-xl hover:bg-white/10 transition"
              >
                انضم كمتطوع
              </Link>
            </div>
          </motion.div>

          <motion.aside
            className="lg:col-span-5 rounded-[2.5rem] border border-gold/25 bg-[#012218]/75 backdrop-blur-xl p-6 md:p-8"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-black text-white mb-5">لوحة الأثر المباشر</h3>
            <div className="space-y-3 mb-6">
              {impactFacts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-gold/15 text-gold flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </span>
                      <p className="text-sm text-gray-200">{fact.label}</p>
                    </div>
                    <p className="text-xl font-black text-gold">{fact.value}</p>
                  </div>
                );
              })}
            </div>

            <div className="rounded-2xl border border-white/15 bg-black/30 p-4">
              <p className="text-sm text-gray-300 mb-2">رسالة ثقة</p>
              <p className="text-base text-white leading-relaxed">
                كل مساهمة تمر عبر مسار واضح: توثيق، تنفيذ، متابعة أثر. لذلك نضمن
                رؤية نتائج عطاءك على الأرض.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
