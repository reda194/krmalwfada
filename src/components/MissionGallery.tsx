"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

interface ProjectCardProps {
  title: string;
  description: string;
  progress: number;
  goal: string;
  raised: string;
  image: string;
  className?: string;
  delay?: number;
}

function ProjectCard({ title, description, progress, goal, raised, image, className = "", delay = 0 }: ProjectCardProps) {
  return (
    <motion.div 
      className={`h-full ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
    >
      <Tilt 
        tiltMaxAngleX={4} 
        tiltMaxAngleY={4} 
        perspective={1000} 
        transitionSpeed={1500} 
        scale={1.02}
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor="white"
        glarePosition="bottom"
        className="group relative overflow-hidden rounded-[2.5rem] bg-[#021A11] shadow-2xl hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] transition-shadow duration-700 border border-white/5 h-full"
      >
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Superior gradient logic for bento sizing */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10 transition-opacity duration-700 opacity-90 group-hover:opacity-100" />
          
          {/* Next.js Image for optimization and rendering speed */}
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-1000 group-hover:scale-105 opacity-80"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content Container (Pushes content up further on hover to prevent overlap) */}
        <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10 text-white transform group-hover:-translate-y-16 transition-transform duration-500 ease-out">
          <h3 className="text-3xl font-black mb-3 drop-shadow-lg text-white">{title}</h3>
          <p className="text-gray-300 text-sm md:text-base mb-8 line-clamp-2 drop-shadow-md font-light leading-relaxed max-w-lg">{description}</p>
          
          {/* Progress Bar */}
          <div className="mb-2">
            <div className="flex justify-between text-sm mb-3 font-bold">
              <span className="text-white drop-shadow-md">تم جمع: {raised}</span>
              <span className="text-gold drop-shadow-md">الهدف: {goal}</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-4 backdrop-blur-md overflow-hidden border border-white/10 p-[2px] shadow-inner">
              <motion.div 
                className="bg-gradient-to-l from-gold via-yellow-400 to-yellow-200 h-full rounded-full relative shadow-[0_0_15px_rgba(212,175,55,1)]" 
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-white/30 w-full h-full animate-[shimmer_2s_infinite]"></div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Action Button (Now strictly anchored to the absolute bottom and appears on hover smoothly) */}
        <div className="absolute bottom-6 left-8 right-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto flex justify-end">
          <button 
            className="flex items-center gap-2 text-[#021A11] bg-gradient-to-l from-gold to-yellow-500 px-6 py-3 rounded-2xl font-black shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300"
            aria-label={`ارك في الأجر لـ ${title}`}
          >
            <span>شارك في الأجر الآن</span>
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
}

export default function MissionGallery() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-sand relative z-10">   
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-gold font-bold tracking-widest text-sm uppercase px-5 py-2 border border-gold/30 rounded-full bg-gold/5 shadow-sm">مجالات العطاء</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-5xl font-black text-[#021A11] mb-6 drop-shadow-sm leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            بصمات عطائكم في خدمة <span className="text-gold">ضيوف الرحمن</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-emerald/80 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            ساهم في مشاريعنا النوعية لخدمة ضيوف الرحمن وتوفير سبل الراحة والطمأنينة لهم، ليكون عملك صدقة جارية في أطهر البقاع.
          </motion.p>
        </div>

        {/* Authentic Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          
          {/* Main Large Tile: Zamzam (Spans 2 columns, 2 rows) */}
          <ProjectCard 
            title="سقيا ماء زمزم المبرد"
            description="مشروع لتوفير مياه زمزم المبردة لضيوف الرحمن في المسجد الحرام والمشاعر المقدسة طوال العام، إحياءً لسنة السقيا العظيمة."
            progress={75}
            raised="750,000 ﷼"
            goal="1,000,000 ﷼"
            image="/images/water_project_1771963641569.png"
            className="md:col-span-2 md:row-span-2"
            delay={0.1}
          />

          {/* Small Top Right: Meals */}
          <ProjectCard 
            title="إطعام ضيف الرحمن"
            description="توزيع وجبات ساخنة وجافة مجهزة للمعتمرين."
            progress={45}
            raised="450,000 ﷼"
            goal="1,000,000 ﷼"
            image="/images/meals_project_1771963657322.png"
            className="md:col-span-1 md:row-span-1"
            delay={0.2}
          />

          {/* Small Bottom Right: Guidance */}
          <ProjectCard 
            title="الإرشاد الميداني"
            description="مراكز ومجموعات إرشادية لمساعدة التائهين."
            progress={90}
            raised="180,000 ﷼"
            goal="200,000 ﷼"
            image="/images/guidance_project_1771963683464.png"
            className="md:col-span-1 md:row-span-1"
            delay={0.3}
          />

          {/* Wide Bottom Tile: Housing (Spans 3 cols on bottom) */}
          <ProjectCard 
            title="ضيافة وإسكان الحجاج"
            description="توفير أماكن ضيافة مؤقتة ومجهزة لراحة الحجاج والمعتمرين كبار السن الفخمة بجوار الحرم المكي الشريف."
            progress={30}
            raised="1,500,000 ﷼"
            goal="5,000,000 ﷼"
            image="/images/hosting_project_1771963699446.png"
            className="md:col-span-3 md:row-span-1"
            delay={0.4}
          />
          
        </div>
      </div>
    </section>
  );
}
