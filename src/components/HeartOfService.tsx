"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeartOfService() {
  return (
    <section id="about" className="w-full bg-white overflow-hidden relative min-h-[90vh] flex items-center z-0 pt-32 pb-40">
      {/* Decorative ultra-subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0l10 40 40 10-40 10-10 40-10-40-40-10 40-10z' fill='%23021A11' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* Narrative visually right in LTR, left in RTL context */}
          <motion.div 
            className="flex flex-col justify-center space-y-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div>
              <div className="inline-block w-fit px-5 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm font-bold tracking-widest uppercase shadow-sm mb-6">
                عن المبادرة
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.2] text-[#021A11]">
                نبض العطاء في <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-gold to-yellow-500 pb-2 inline-block mt-2 drop-shadow-sm">كرم الوفادة</span>
              </h2>
            </div>

            <div className="space-y-6 text-xl tracking-wide leading-loose text-gray-600 font-light">
              <p>
                منذ فجر التاريخ والأراضي المقدسة تفتح ذراعيها مرحبةً بضيوف الرحمن. نحن في <strong className="font-bold text-[#021A11]">&quot;كرم الوفادة&quot;</strong> نرث هذا الإرث العظيم، لنترجم معاني الحفاوة السعودية الأصيلة إلى مبادرات حية ومستدامة.
              </p>
              <p>
                لا يقتصر دورنا على تقديم الخدمات المادية فحسب، بل يتجاوز ذلك إلى العناية الروحية والنفسية، لنكون السند والمعين لكل من قصد مكة المكرمة والمشاعر المقدسة، محققين بذلك رؤية طموحة تواكب مكانة المملكة العالمية.
              </p>
              <div className="pt-4 pb-2">
                <blockquote className="font-medium text-xl md:text-2xl text-gold border-r-4 border-gold pr-8 py-4 bg-gradient-to-l from-gold/5 to-transparent italic rounded-l-2xl">
                  &quot;خدمة الحاج والمعتمر اصطفاء إلهي وشرف نعتز به.&quot;
                </blockquote>
              </div>
            </div>
            
            <div className="pt-2">
              <button className="relative overflow-hidden group border-2 border-gold text-[#021A11] px-10 py-5 rounded-full font-black text-xl transition-all shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.3)] hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-3">
                  تعرف على قصص متطوعينا
                </span>
                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
              </button>
            </div>
          </motion.div>

          {/* Image visually left */}
          <motion.div 
            className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            {/* Decorative Gold Frame Offset */}
            <div className="absolute -inset-6 border-2 border-gold/30 rounded-[3rem] pointer-events-none translate-x-6 -translate-y-6 hidden md:block"></div>
            
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-black/5 group">
              <Image 
                src="/images/guidance_project_1771963683464.png"
                alt="Saudi volunteer helping a pilgrim"
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
              {/* Optional bottom inner shadow for depth */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
