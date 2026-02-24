"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Check, Heart } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    title: "باقة السقيا",
    price: "100",
    description: "توفير مياه زمزم والمياه المبردة لضيوف الرحمن في المشاعر المقدسة.",
    features: ["توزيع 100 عبوة مياه", "تغطية مناطق الجمرات", "أجر مضاعف في الحرم"],
    popular: false,
    delay: 0,
  },
  {
    title: "باقة الضيافة المتكاملة",
    price: "350",
    description: "رعاية شاملة للحاج تشمل الوجبات الساخنة والمشروبات طوال اليوم.",
    features: ["3 وجبات ساخنة ومغذية", "عصائر ومياه مبردة", "توزيع في الخيام والممرات", "مساهمة في تفريج كربة"],
    popular: true,
    delay: 0.2,
  },
  {
    title: "باقة الإيواء",
    price: "1000",
    description: "المساهمة في توفير سكن ملائم ومريح لضيوف الرحمن من ذوي الدخل المحدود.",
    features: ["توفير سرير نظيف ومريح", "خدمات فندقية متكاملة", "مواصلات من وإلى الحرم", "أجر إيواء عابر سبيل"],
    popular: false,
    delay: 0.4,
  }
];

export default function ImpactPackages() {
  return (
    <section id="donate" className="py-24 md:py-32 bg-sand relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-emerald font-bold tracking-widest text-sm uppercase px-5 py-2 border border-emerald/20 rounded-full bg-emerald/5 shadow-sm">باقات العطاء</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#021A11] mb-6 drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            اختر أثرك في <span className="text-transparent bg-clip-text bg-gradient-to-l from-gold to-yellow-500">مكة</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            بادر باختيار الباقة التي تناسب تطلعاتك الخيرية. مساهمتك تتحول فوراً إلى خدمات ملموسة تثري تجربة ضيوف الرحمن.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: pkg.delay }}
              className="h-full flex flex-col"
            >
              <Tilt 
                tiltMaxAngleX={5} 
                tiltMaxAngleY={5} 
                perspective={1000} 
                transitionSpeed={1000} 
                scale={1.03}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor={pkg.popular ? "white" : "#d4af37"}
                glarePosition="all"
                className={`relative flex-1 rounded-[2.5rem] p-8 md:p-10 shadow-xl border overflow-hidden flex flex-col ${
                  pkg.popular 
                    ? "bg-[#021A11] text-white border-gold/30 shadow-[0_30px_60px_rgba(2,26,17,0.4)]" 
                    : "bg-white text-[#021A11] border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 bg-gradient-to-l from-gold to-yellow-500 text-[#021A11] px-6 py-1.5 rounded-b-xl font-bold text-sm shadow-md">
                    الأكثر اختياراً
                  </div>
                )}

                {/* Background Decoration */}
                {pkg.popular && (
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
                )}

                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-black mb-2 mt-4">{pkg.title}</h3>
                  <p className={`font-light text-sm mb-6 ${pkg.popular ? "text-gray-300" : "text-gray-500"}`}>
                    {pkg.description}
                  </p>
                  
                  <div className="mb-8 flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-black">{pkg.price}</span>
                    <span className={`font-bold ${pkg.popular ? "text-gold" : "text-emerald"}`}>﷼</span>
                  </div>

                  <div className="space-y-4 mb-10 flex-1">
                    {pkg.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <div className={`mt-1 shrink-0 bg-opacity-20 rounded-full p-1 ${pkg.popular ? "bg-gold text-gold" : "bg-emerald text-emerald"}`}>
                          <Check className="w-3 h-3 flex-shrink-0" strokeWidth={4} />
                        </div>
                        <span className={`text-base font-medium ${pkg.popular ? "text-gray-200" : "text-gray-700"}`}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/donate"
                    className={`w-full py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2 group ${
                      pkg.popular 
                        ? "bg-gradient-to-l from-gold to-yellow-500 text-[#021A11] shadow-[0_10px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.5)] hover:-translate-y-1" 
                        : "bg-emerald/5 text-emerald border border-emerald/10 hover:bg-emerald hover:text-white"
                    }`}
                  >
                    <span>ساهم الآن</span>
                    <Heart className={`w-5 h-5 ${pkg.popular ? "text-[#021A11]" : ""} group-hover:fill-current`} />
                  </Link>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
