"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

const testimonials = [
  {
    quote: "تجربة لا تُنسى في رحاب مكة. العناية والاهتمام الذي وجدناه من متطوعي كرم الوفادة جعل أداء مناسكنا أيسر وأكثر طمأنينة.",
    name: "عبدالله الراجحي",
    role: "حاج من المملكة العربية السعودية",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    quote: "لمسنا الحفاوة السعودية الأصيلة منذ اللحظة الأولى. الوجبات الساخنة ومياه زمزم المبردة كانت تصلنا في أصعب الأوقات.",
    name: "أحمد بن عمار",
    role: "معتمر من الجزائر",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    quote: "كقائد مجموعة تطوعية، رأيت الأثر العظيم الذي تصنعه كرم الوفادة. التنظيم الاحترافي مكننا من خدمة آلاف الحجاج يومياً.",
    name: "سعد المولد",
    role: "قائد فريق إرشاد المتطوعين",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    quote: "لم أتخيل أن أجد كل هذه الرعاية والاهتمام الطبي المباشر في وسط الزحام. أنتم حقاً عيون ساهرة لخدمة بيت الله.",
    name: "فاطمة أحمد",
    role: "حاجة من مصر",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: "rtl", align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  return (
    <section className="py-24 md:py-32 bg-[#021A11] relative overflow-hidden text-white">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l2.65 11.5L44 9l-5.65 10.5L49 26l-11.5 2.65L42.5 40l-10.5-5.65L30 46l-2.65-11.65L16 40l5.65-10.5L11 26l11.5-2.65L17.5 12 28 17.65z' fill='%23D4AF37' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="text-gold font-bold tracking-widest text-sm uppercase px-5 py-2 border border-gold/30 rounded-full bg-gold/10 shadow-sm">أصوات الأثر</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 drop-shadow-sm leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              شهادات نعتز بها <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-gold to-yellow-500">من قلب الميدان</span>
            </motion.h2>
          </div>
          
          <motion.p
            className="text-gray-400 max-w-md text-lg font-light leading-relaxed pb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            نستمد حافزنا من دعوات ضيوف الرحمن وانطباعاتهم الإيجابية، فهي الأثر الحقيقي الذي نسعى لتحقيقه.
          </motion.p>
        </div>

        {/* Embla Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef} dir="rtl">
          <div className="flex -ml-4 md:-ml-8 transition-transform">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 md:pl-8"
              >
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 relative group hover:bg-white/10 transition-colors duration-500 flex flex-col h-full h-[400px]">
                  <Quote className="absolute top-8 left-8 w-16 h-16 text-gold/10 group-hover:text-gold/20 transition-colors duration-500 pointer-events-none" />
                  
                  <div className="flex-1 relative z-10 flex flex-col pt-8">
                    <p className="text-lg md:text-xl font-light leading-loose text-white/90 mb-10 overflow-hidden line-clamp-4">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6 relative z-10">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold/50 flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                      <p className="text-sm font-light text-gold">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
