"use client";

import { motion } from "framer-motion";
import { HandCoins, HeartHandshake, PackageCheck, Truck } from "lucide-react";

const steps = [
  {
    icon: <HandCoins className="w-9 h-9 text-gold" />,
    title: "المساهمة والدعم",
    description: "تبدأ الرحلة بتبرعكم الكريم عبر منصتنا الآمنة أو حساباتنا الرسمية.",
    detail: "توثيق الطلب وتأكيد القناة خلال دقائق",
  },
  {
    icon: <PackageCheck className="w-9 h-9 text-gold" />,
    title: "التجهيز والجودة",
    description: "نُجهّز الوجبات والمياه وفق معايير الجودة والسلامة الغذائية.",
    detail: "مراجعة تشغيلية قبل الانطلاق لكل شحنة",
  },
  {
    icon: <Truck className="w-9 h-9 text-gold" />,
    title: "التوزيع الميداني",
    description: "تنطلق الفرق التطوعية للتوزيع في النقاط ذات الأولوية.",
    detail: "تغطية زمنية مستمرة حسب كثافة الحشود",
  },
  {
    icon: <HeartHandshake className="w-9 h-9 text-gold" />,
    title: "الأثر المستدام",
    description: "يصل عطاؤكم لمستحقيه بأثر مباشر ودعوات ممتدة.",
    detail: "تحديث دوري للمخرجات ومؤشرات الخدمة",
  },
];

export default function ImpactProcess() {
  return (
    <section id="impact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-gold font-bold tracking-widest text-sm uppercase px-5 py-2 border border-gold/30 rounded-full bg-gold/5 shadow-sm">
              دورة العمل
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-black text-[#021A11] leading-tight mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            رحلة عطائك:
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-gold to-yellow-500 block mt-2">
              من قلبك إلى يد ضيف الرحمن
            </span>
          </motion.h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            مسار تشغيلي واضح من لحظة المساهمة حتى تحقيق الأثر، مع متابعة جودة في كل
            مرحلة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative">
          <div className="hidden xl:block absolute top-12 left-20 right-20 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />

          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              className="relative z-10 rounded-[2rem] bg-white border border-black/5 shadow-[0_12px_30px_rgba(0,0,0,0.08)] p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-20 h-20 rounded-3xl bg-sand border border-gold/20 shadow-inner flex items-center justify-center mb-5 mx-auto">
                {step.icon}
              </div>

              <h3 className="text-2xl font-black text-[#021A11] mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
              <p className="text-sm font-bold text-emerald/80 bg-emerald/5 rounded-xl px-3 py-2">
                {step.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
