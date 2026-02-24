"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Droplets, Utensils } from "lucide-react";
import { useState } from "react";

const locations = [
  {
    id: "haram",
    name: "المسجد الحرام",
    description: "توزيع ماء زمزم وإرشاد التائهين في الساحات.",
    icon: <Droplets className="w-5 h-5 text-emerald" />,
    stats: "+2,000,000 مستفيد",
    // These abstract coordinates represent placement on the stylized map container
    top: "40%",
    left: "45%",
    delay: 0,
  },
  {
    id: "mina",
    name: "مشعر منى",
    description: "مخيمات الضيافة وتوزيع الوجبات الساخنة طيلة أيام التشريق.",
    icon: <Utensils className="w-5 h-5 text-emerald" />,
    stats: "+500,000 وجبة",
    top: "30%",
    left: "65%",
    delay: 0.2,
  },
  {
    id: "arafat",
    name: "مشعر عرفات",
    description: "مراكز السقيا والضيافة المتنقلة يوم الوقفة الأعظم.",
    icon: <Droplets className="w-5 h-5 text-emerald" />,
    stats: "+1,200,000 عبوة",
    top: "50%",
    left: "85%",
    delay: 0.4,
  },
  {
    id: "muzdalifah",
    name: "مزدلفة",
    description: "توزيع الحقائب الإرشادية ووجبات الضيافة الخفيفة.",
    icon: <Navigation className="w-5 h-5 text-emerald" />,
    stats: "+300,000 مستفيد",
    top: "60%",
    left: "70%",
    delay: 0.6,
  }
];

export default function ImpactMap() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-emerald/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-emerald font-bold tracking-widest text-sm uppercase px-5 py-2 border border-emerald/20 rounded-full bg-emerald/5 shadow-sm">خريطة الأثر</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-5xl font-black text-[#021A11] mb-6 drop-shadow-sm leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            نغطي المشاعر برعاية <span className="text-gold">شاملة</span>
          </motion.h2>
          <motion.p
            className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            نتواجد حيثما وجد ضيف الرحمن. تمتد خارطة خدماتنا لتغطي أطهر البقاع، لضمان وصول عطائكم لمستحقيه في الزمان والمكان المناسبين.
          </motion.p>
        </div>

        {/* Abstract Map Container */}
        <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[600px] bg-sand/30 rounded-[3rem] border border-gold/10 overflow-hidden shadow-inner">
          
          {/* Decorative Map Topography Pattern */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 34.64l1.732-1 10 17.32-1.732 1-10-17.32zM58 0h2v20h-2V0zM29.467 43.16l1.732-1 10 17.32-1.732 1-10-17.32zm20-34.64l1.732-1 10 17.32-1.732 1-10-17.32zM98 0h2v20h-2V0zm-20 34.64l1.732 1-10 17.32-1.732-1 10-17.32zm25.134-33.8l1.732-1 10 17.32-1.732 1-10-17.32zm-20 34.64l1.732-1 10 17.32-1.732 1-10-17.32zM9 49h2v20H9V49zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 34.64l1.732-1 10 17.32-1.732 1-10-17.32zM58 49h2v20h-2V49zM29.467 92.16l1.732-1 10 17.32-1.732 1-10-17.32zm20-34.64l1.732-1 10 17.32-1.732 1-10-17.32zM98 49h2v20h-2V49zm-20 34.64l1.732 1-10 17.32-1.732-1 10-17.32z' fill='%23D4AF37' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
          />
          
          {/* Subtle gradient overlay to mimic terrain depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#FDFBF7_100%)] pointer-events-none" />

          {/* Render Location Markers */}
          {locations.map((loc) => (
            <motion.div 
              key={loc.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ top: loc.top, left: loc.left }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: loc.delay, type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="relative group">
                {/* Pulsing ring */}
                <div className="absolute -inset-4 rounded-full border-2 border-gold opacity-30 animate-ping" />
                <div className="absolute -inset-2 rounded-full border-2 border-emerald opacity-20 animate-pulse delay-75" />
                
                {/* Marker Center */}
                <button
                  type="button"
                  className="relative w-10 h-10 bg-gradient-to-br from-gold to-yellow-500 rounded-full shadow-lg flex items-center justify-center text-[#021A11] z-10 hover:scale-110 focus-visible:scale-110 transition-transform"
                  aria-label={`إظهار تفاصيل ${loc.name}`}
                  aria-expanded={activeLocation === loc.id}
                  aria-controls={`impact-location-${loc.id}`}
                  onClick={() =>
                    setActiveLocation((prev) => (prev === loc.id ? null : loc.id))
                  }
                  onMouseEnter={() => setActiveLocation(loc.id)}
                  onMouseLeave={() => setActiveLocation(null)}
                  onFocus={() => setActiveLocation(loc.id)}
                  onBlur={() => setActiveLocation(null)}
                >
                  <MapPin className="w-5 h-5" fill="currentColor" strokeWidth={1} />
                </button>

                {/* Interactive Tooltip / Info Card */}
                <div 
                  id={`impact-location-${loc.id}`}
                  className={`absolute top-1/2 -translate-y-1/2 right-14 w-64 bg-white/95 backdrop-blur-xl border border-gold/20 shadow-2xl rounded-2xl p-5 transition-all duration-300 pointer-events-none origin-right z-50 ${
                    activeLocation === loc.id ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center shrink-0">
                      {loc.icon}
                    </div>
                    <h3 className="font-bold text-lg text-[#021A11]">{loc.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm font-light leading-relaxed mb-3">
                    {loc.description}
                  </p>
                  <div className="border-t border-gray-100 pt-3 flex justify-between items-center w-full">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">الأثر اليومي</span>
                    <span className="text-gold font-bold">{loc.stats}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Map Compass/Scale decorative element */}
          <div className="absolute bottom-6 left-6 flex items-center gap-3 text-gold/40 pointer-events-none">
            <Navigation className="w-8 h-8 font-light" />
            <div className="text-xs font-bold tracking-[0.2em]">مكة المكرمة والمشاعر المقدسة</div>
          </div>
        </div>
      </div>
    </section>
  );
}
