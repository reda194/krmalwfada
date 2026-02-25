"use client";

import { motion } from "framer-motion";
import { Building2, Handshake, ShieldCheck } from "lucide-react";
import Link from "next/link";

const partners = [
  { name: "رئاسة شؤون الحرمين", type: "شريك إشرافي" },
  { name: "وزارة الحج والعمرة", type: "شريك حكومي" },
  { name: "إمارة منطقة مكة المكرمة", type: "شريك تنظيمي" },
  { name: "برنامج خدمة ضيوف الرحمن", type: "شريك استراتيجي" },
  { name: "الهيئة الملكية لمدينة مكة المكرمة", type: "شريك تطوير" },
  { name: "وزارة الموارد البشرية", type: "شريك تشغيلي" },
  { name: "أمانة العاصمة المقدسة", type: "شريك ميداني" },
  { name: "صندوق الوقف الصحي", type: "شريك تمويلي" },
];

export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-sand/80 relative overflow-hidden border-y border-gold/15">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-black text-[#021A11]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            شركاء <span className="text-gold">النجاح</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-4 max-w-2xl mx-auto font-light text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            منظومة تكامل بين جهات إشرافية وتنظيمية وتشغيلية لضمان جودة الخدمة في كل موقع.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <motion.article
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-white bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#021A11] text-gold flex items-center justify-center">
                  {index % 3 === 0 ? (
                    <ShieldCheck className="w-5 h-5" />
                  ) : index % 3 === 1 ? (
                    <Building2 className="w-5 h-5" />
                  ) : (
                    <Handshake className="w-5 h-5" />
                  )}
                </div>
                <span className="text-[11px] font-bold text-gold bg-gold/10 rounded-full px-2 py-1">
                  {partner.type}
                </span>
              </div>
              <h3 className="text-base font-black text-[#021A11] leading-snug">{partner.name}</h3>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-emerald/20 px-6 py-3 text-emerald font-bold hover:bg-emerald hover:text-white transition-colors"
          >
            هل ترغب بالشراكة معنا؟
          </Link>
        </div>
      </div>
    </section>
  );
}
