"use client";

import { motion } from "framer-motion";
import { HandCoins, PackageCheck, Truck, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: <HandCoins className="w-10 h-10 text-gold" />,
    title: "المساهمة والدعم",
    description: "تبدأ الرحلة بتبرعكم الكريم عبر منصتنا الآمنة أو حساباتنا الرسمية.",
  },
  {
    icon: <PackageCheck className="w-10 h-10 text-gold" />,
    title: "التجهيز والجودة",
    description: "نقوم بتجهيز الوجبات والمياه وفق أعلى معايير الجودة والسلامة الغذائية.",
  },
  {
    icon: <Truck className="w-10 h-10 text-gold" />,
    title: "التوزيع الميداني",
    description: "تنطلق فرقنا التطوعية لتوزيع الدعم في النقاط المخصصة لضيوف الرحمن.",
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-gold" />,
    title: "الأثر المستدام",
    description: "يصل عطاؤكم لمستحقيه، تاركاً أثراً طيباً ودعوات ممتدة في أطهر البقاع.",
  }
];

export default function ImpactProcess() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-gold font-bold tracking-widest text-sm uppercase px-5 py-2 border border-gold/30 rounded-full bg-gold/5 shadow-sm">دورة العمل</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-black text-[#021A11]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            كيف يصل <span className="text-transparent bg-clip-text bg-gradient-to-l from-gold to-yellow-500">عطاؤكم؟</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[4.5rem] left-24 right-24 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative z-10 flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-24 h-24 rounded-3xl bg-white border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex items-center justify-center mb-6 relative group-hover:-translate-y-2 transition-transform duration-300">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gold/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {step.icon}
                </div>
                
                {/* Step number badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#021A11] to-emerald-900 text-white font-bold flex items-center justify-center border-2 border-white shadow-md">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#021A11] mb-3">{step.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed px-4">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
