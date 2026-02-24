"use client";

import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* High-Quality Majestic Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/images/hero_bg_1771963627087.png" 
          alt="Holy Kaaba Makkah"
          fill
          priority
          className="object-cover object-center scale-105 transform translate-y-4"
          quality={100}
        />
        {/* Soft elegant gradient: Dark on the right (where text is in RTL), clear on the left, fade to bottom */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#021A11]/90 via-[#021A11]/60 to-transparent z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-sand via-sand/80 to-transparent z-10" />
        {/* A subtle warm gold wash over the scene for the "Golden Hour" effect */}
        <div className="absolute inset-0 bg-gold/10 mix-blend-overlay z-0" />
      </div>

      <div className="container mx-auto px-6 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full pt-28 pb-32">
        
        {/* Right Side: Visual & Text (RTL starts right) */}
        <motion.div 
          className="lg:col-span-7 flex flex-col gap-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="inline-block w-fit px-5 py-2 rounded-full border border-gold/40 bg-black/30 backdrop-blur-md text-gold font-bold tracking-wide uppercase mb-2 shadow-lg">
            مبادرة رسمية معتمدة
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-tight drop-shadow-2xl">
            كرم الوفادة <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-gold via-yellow-300 to-white font-black text-5xl md:text-6xl lg:text-7xl block mt-4 pb-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              كن جزءاً من إرث الكرم في أطهر بقاع الأرض
            </span>
          </h1>
          <p className="text-lg md:text-2xl font-light opacity-95 drop-shadow-lg max-w-2xl leading-relaxed text-gray-200">
            امتداداً للحفاوة السعودية الأصيلة، نتشرف بخدمة ضيوف الرحمن وتوفير سبل الراحة لهم بطمأنينة وإحسان. ساهم معنا في هذا الشرف العظيم.
          </p>
        </motion.div>

        {/* Left Side: Premium Glass Donation Card */}
        <motion.div 
          className="lg:col-span-5 relative mt-10 lg:mt-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          {/* Subtle glow behind the card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-gold/40 to-emerald/20 rounded-[2.5rem] blur-xl opacity-50 animate-pulse"></div>
          
          <div className="relative bg-white/10 backdrop-blur-3xl border-t border-l border-white/20 border-r border-b border-black/10 p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Elegant glass reflection diagonal */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent pointer-events-none -translate-x-1/2 -skew-x-12" />
            
            <h3 className="text-3xl font-black text-white mb-8 text-center flex items-center justify-center gap-3 drop-shadow-md relative z-10">
              <Heart className="w-8 h-8 text-gold fill-gold drop-shadow-lg" />
              <span>ساهم في العطاء</span>
            </h3>
            
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8 relative z-10">
              {[50, 100, 500].map((amount) => (
                <button 
                  key={amount}
                  className="bg-black/40 border border-white/30 hover:bg-gold hover:text-[#021A11] hover:border-gold transition-all duration-300 py-4 rounded-2xl text-white font-black text-xl md:text-2xl relative overflow-hidden group shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
                >
                  <span className="relative z-10">{amount} ﷼</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-gold to-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
                </button>
              ))}
            </div>

            <div className="relative mb-8 z-10">
              <input 
                type="number" 
                placeholder="مبلغ مخصص (﷼)" 
                className="w-full bg-black/40 border border-white/30 rounded-2xl py-5 px-6 text-white placeholder:text-gray-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all text-xl shadow-[0_4px_15px_rgba(0,0,0,0.5)] font-bold"
              />
            </div>

            <div className="flex flex-col gap-4 relative z-10">
              <button className="relative overflow-hidden w-full bg-gradient-to-l from-gold to-yellow-400 text-[#021A11] py-5 rounded-2xl font-black text-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all transform hover:-translate-y-1 group">
                <span className="relative z-10 flex items-center justify-center gap-2">شارك في الأجر الآن</span>
                <div className="absolute inset-0 bg-white/30 translate-x-full group-hover:translate-x-0 transition-transform duration-700 skew-x-12"></div>
              </button>
              
              <button className="relative w-full border-2 border-white/40 text-white hover:bg-white/10 hover:border-white py-4 rounded-2xl font-bold text-xl transition-all flex justify-center items-center gap-3">
                <span>إهداء تبرع</span>
                <span className="text-xl">🎁</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modern Scrolling Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-30 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-[2px] h-16 bg-gradient-to-b from-transparent via-gold to-gold relative overflow-hidden rounded-full mb-2">
           <motion.div 
             className="absolute top-0 w-full h-1/3 bg-white blur-sm"
             animate={{ top: ['-50%', '150%'] }}
             transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
           />
        </div>
      </motion.div>
    </section>
  );
}
