"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  Droplets,
  MapPin,
  Navigation,
  Route,
  Users,
  Utensils,
} from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";

const locations = [
  {
    id: "haram",
    name: "المسجد الحرام",
    description: "توزيع ماء زمزم وإرشاد التائهين في الساحات.",
    serviceWindow: "24 ساعة",
    team: "12 فريقًا ميدانيًا",
    stats: "+2,000,000 مستفيد",
    icon: <Droplets className="w-4 h-4 text-emerald" />,
    top: "42%",
    left: "44%",
    delay: 0,
  },
  {
    id: "mina",
    name: "مشعر منى",
    description: "مخيمات الضيافة وتوزيع الوجبات الساخنة في أيام الذروة.",
    serviceWindow: "6 ص - 1 ص",
    team: "8 فرق تشغيل",
    stats: "+500,000 وجبة",
    icon: <Utensils className="w-4 h-4 text-emerald" />,
    top: "30%",
    left: "64%",
    delay: 0.15,
  },
  {
    id: "arafat",
    name: "مشعر عرفات",
    description: "نقاط سقيا وضيافة متنقلة يوم الوقفة الأعظم.",
    serviceWindow: "5 ص - 11 م",
    team: "6 فرق متنقلة",
    stats: "+1,200,000 عبوة",
    icon: <Droplets className="w-4 h-4 text-emerald" />,
    top: "50%",
    left: "84%",
    delay: 0.3,
  },
  {
    id: "muzdalifah",
    name: "مزدلفة",
    description: "توزيع حقائب إرشادية ووجبات ضيافة خفيفة.",
    serviceWindow: "8 م - 6 ص",
    team: "4 فرق دعم",
    stats: "+300,000 مستفيد",
    icon: <Navigation className="w-4 h-4 text-emerald" />,
    top: "61%",
    left: "70%",
    delay: 0.45,
  },
];

const operationCards = [
  { label: "المواقع الفعالة اليوم", value: "14", icon: MapPin },
  { label: "متوسط زمن الاستجابة", value: "7 دقائق", icon: Clock3 },
  { label: "المتطوعون في المناوبة", value: "286", icon: Users },
];

export default function ImpactMap() {
  const [activeLocation, setActiveLocation] = useState(locations[0].id);

  const activeItem = useMemo(
    () => locations.find((loc) => loc.id === activeLocation) ?? locations[0],
    [activeLocation]
  );

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-emerald/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-emerald font-bold tracking-widest text-sm uppercase px-5 py-2 border border-emerald/20 rounded-full bg-emerald/5 shadow-sm">
              خريطة الأثر
            </span>
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
            className="text-gray-600 max-w-3xl mx-auto text-lg font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            لوحة تشغيل ميدانية تربط بين الموقع، الفريق، وزمن الخدمة الفعلي لضمان وصول
            عطائكم للمكان الصحيح في الوقت المناسب.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          <div className="lg:col-span-7 rounded-[2.5rem] bg-sand/35 border border-gold/15 shadow-inner p-4 md:p-6">
            <div className="relative h-[390px] md:h-[500px] rounded-[2rem] border border-white bg-[#F9F6EF] overflow-hidden">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(2,26,17,0.35) 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_35%,_#FDFBF7_95%)] pointer-events-none" />

              <div className="absolute right-[44%] top-[42%] w-[20%] h-[1px] bg-emerald/30 rotate-[8deg]" />
              <div className="absolute right-[36%] top-[50%] w-[20%] h-[1px] bg-emerald/30 -rotate-[18deg]" />
              <div className="absolute right-[29%] top-[61%] w-[15%] h-[1px] bg-emerald/30 rotate-[12deg]" />

              {locations.map((loc) => (
                <motion.div
                  key={loc.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ top: loc.top, left: loc.left }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: loc.delay,
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveLocation(loc.id)}
                    className={`relative w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-all ${
                      activeLocation === loc.id
                        ? "bg-gradient-to-br from-gold to-yellow-500 text-[#021A11] scale-110"
                        : "bg-[#021A11] text-gold hover:scale-105"
                    }`}
                    aria-label={`إظهار تفاصيل ${loc.name}`}
                  >
                    <MapPin className="w-5 h-5" fill="currentColor" strokeWidth={1} />
                    <span
                      className={`absolute -inset-2 rounded-full border ${
                        activeLocation === loc.id
                          ? "border-gold/45 animate-pulse"
                          : "border-emerald/30"
                      }`}
                    />
                  </button>

                  <div
                    className={`hidden lg:block absolute top-1/2 -translate-y-1/2 right-14 w-64 bg-white/95 border border-gold/25 shadow-xl rounded-2xl p-4 transition-all duration-200 ${
                      activeLocation === loc.id
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <p className="font-black text-[#021A11] text-base mb-1">{loc.name}</p>
                    <p className="text-sm text-gray-600 mb-2 leading-relaxed">{loc.description}</p>
                    <p className="text-xs font-bold text-gold">{loc.stats}</p>
                  </div>
                </motion.div>
              ))}

              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-emerald/70">
                <Route className="w-5 h-5" />
                <span className="text-xs font-bold">مسارات الخدمة بين المواقع</span>
              </div>
            </div>

            <div className="mt-4 lg:hidden rounded-2xl border border-gold/20 bg-white p-4">
              <p className="text-base font-black text-[#021A11] mb-1">{activeItem.name}</p>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                {activeItem.description}
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">نافذة الخدمة: {activeItem.serviceWindow}</span>
                <span className="text-gold font-bold">{activeItem.stats}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="rounded-[2rem] border border-emerald/10 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-black text-[#021A11] mb-5">غرفة متابعة التشغيل</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                {operationCards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-sand bg-sand/60 p-4 flex items-center gap-3"
                    >
                      <span className="w-10 h-10 rounded-xl bg-[#021A11] text-gold flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </span>
                      <div>
                        <p className="text-xs text-gray-500">{item.label}</p>
                        <p className="text-lg font-black text-[#021A11]">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-emerald/10 bg-white p-6 shadow-sm">
              <h4 className="text-xl font-black text-[#021A11] mb-4">تفاصيل المواقع</h4>
              <div className="space-y-3">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setActiveLocation(loc.id)}
                    className={`w-full text-right rounded-xl border px-4 py-3 transition-colors ${
                      activeLocation === loc.id
                        ? "border-gold/40 bg-gold/10"
                        : "border-gray-100 bg-white hover:bg-sand/40"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-sm font-black text-[#021A11]">{loc.name}</span>
                      <span className="text-xs text-gold font-bold">{loc.stats}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{loc.team}</span>
                      <span>{loc.serviceWindow}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="/donate"
              className="rounded-2xl bg-gradient-to-l from-gold to-yellow-500 text-[#021A11] text-center font-black py-4 hover:brightness-95 transition"
            >
              ساهم الآن في دعم التغطية الميدانية
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
