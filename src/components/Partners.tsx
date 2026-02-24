"use client";

import { motion } from "framer-motion";

const partners = [
  "رئاسة شؤون الحرمين",
  "وزارة الحج والعمرة",
  "إمارة منطقة مكة المكرمة",
  "برنامج خدمة ضيوف الرحمن",
  "الهيئة الملكية لمدينة مكة المكرمة",
  "وزارة الموارد البشرية",
  "أمانة العاصمة المقدسة",
  "صندوق الوقف الصحي"
];

// Duplicate the array to create a seamless infinite loop
const scrollingPartners = [...partners, ...partners];

export default function Partners() {
  return (
    <section className="py-20 bg-sand relative overflow-hidden border-y border-gold/10">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-black text-[#021A11]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            شركاء <span className="text-gold">النجاح</span>
          </motion.h2>
          <motion.p 
            className="text-gray-500 mt-4 max-w-2xl mx-auto font-light text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            نعتز بشراكاتنا الاستراتيجية مع القطاعات الحكومية والخاصة لتعظيم الأثر في خدمة ضيوف الرحمن.
          </motion.p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left and Right Blur Fades for a cleaner look */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-sand to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-sand to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap gap-8 items-center py-4">
          {scrollingPartners.map((partner, idx) => (
            <div 
              key={idx}
              className="flex-shrink-0 bg-white border border-gray-100 shadow-sm rounded-2xl px-8 py-5 text-xl font-bold text-[#021A11]/70 hover:text-gold hover:border-gold/30 transition-colors mx-4"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
