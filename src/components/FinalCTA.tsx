"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-black py-32">
      {/* High-Quality Fixed Parallax Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* We reuse the hero image but with strong dimming for text visibility */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{ backgroundImage: `url('/images/hero_bg_1771963627087.png')` }}
        />
        {/* Deep immersive gradients */}
        <div className="absolute inset-0 bg-[#021A11]/80 backdrop-blur-sm z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021A11] via-transparent to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gold/10 border border-gold/30 p-4 rounded-3xl mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-10 h-10 text-gold animate-pulse" />
        </motion.div>

        <motion.h2 
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          كن جزءاً من مسيرة <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-white pb-2 block mt-2">
            العطاء والبركة
          </span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mb-12 leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          لا تفوت شرف خدمة ضيوف الرحمن. مساهمتك، مهما كانت، تصنع الفارق وتترك أثراً لا يُمحى في قلوب قاصدي بيت الله الحرام.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 w-full max-w-lg justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button className="flex-1 relative overflow-hidden group bg-gradient-to-l from-gold to-yellow-500 text-[#021A11] py-5 px-8 rounded-full font-black text-xl hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all transform hover:-translate-y-1 z-10 flex text-center justify-center items-center gap-2">
            <span className="relative z-10">شارك في الأجر الآن</span>
            <ArrowLeft className="w-6 h-6 relative z-10 group-hover:-translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-white/30 translate-x-full group-hover:translate-x-0 transition-transform duration-700 skew-x-12 z-0"></div>
          </button>
          
          <button className="flex-1 py-5 px-8 rounded-full font-bold text-xl text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all flex text-center justify-center items-center gap-2">
            انضم كمتطوع
          </button>
        </motion.div>
      </div>

      {/* Decorative floating particles (Simplified via CSS) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full blur-sm animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-yellow-300 rounded-full blur-sm animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-gold rounded-full blur-md animate-pulse delay-500"></div>
      </div>
    </section>
  );
}
