"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Utensils, Users, Clock, CalendarHeart } from "lucide-react";

interface CounterProps {
  end: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
  delay?: number;
}

function Counter({ end, label, icon, suffix = "", delay = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2500;
      let startTime: number | null = null;
      let animationFrameId: number;

      const updateCounter = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        
        // Add artificial delay logic using elapsed time
        if (elapsedTime > delay) {
          const progress = Math.min((elapsedTime - delay) / duration, 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(easeOutQuart * end));
        }

        if (elapsedTime < duration + delay) {
          animationFrameId = requestAnimationFrame(updateCounter);
        } else {
          setCount(end);
        }
      };

      // Initial delay before starting the loop
      const timeoutId = setTimeout(() => {
        animationFrameId = requestAnimationFrame(updateCounter);
      }, delay);

      return () => {
        clearTimeout(timeoutId);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      };
    }
  }, [isInView, end, delay]);

  return (
    <div ref={ref} className="relative flex flex-col items-center justify-center p-6 text-emerald group">
      <div className="relative mb-5 p-4 rounded-2xl bg-[#021A11] border border-gold/20 group-hover:scale-110 group-hover:bg-[#03291B] group-hover:border-gold/50 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.1)]">
        {icon}
      </div>
      
      <div className="text-5xl lg:text-6xl font-black mb-2 tabular-nums text-[#021A11] transform group-hover:-translate-y-1 transition-transform duration-300 drop-shadow-md">
        +{count.toLocaleString()}{suffix}
      </div>
      
      <div className="text-base lg:text-lg font-bold text-center text-emerald/80 group-hover:text-gold transition-colors duration-300">
        {label}
      </div>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section id="trust-bar" className="relative w-full z-30 -mt-24 px-6">
      <div className="container mx-auto">
        <div className="bg-[#F8F5F0]/90 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-white p-6 relative overflow-hidden">
          
          {/* Subtle Paper Texture Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.4] mix-blend-multiply pointer-events-none"
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
            }}
          />

          {/* Subtle background decoration inside the card */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-emerald/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x-reverse lg:divide-x divide-emerald/10 relative z-10">
            <Counter 
              end={2500000} 
              label="وجبة مقدمة" 
              icon={<Utensils className="w-8 h-8 text-gold drop-shadow-md" />} 
              delay={0}
            />
            <Counter 
              end={5000000} 
              label="حاج ومعتمر تمت خدمتهم" 
              icon={<Users className="w-8 h-8 text-gold drop-shadow-md" />} 
              delay={200}
            />
            <Counter 
              end={120000} 
              label="ساعة تطوعية" 
              icon={<Clock className="w-8 h-8 text-gold drop-shadow-md" />} 
              delay={400}
            />
            <Counter 
              end={15} 
              label="عاماً من العطاء" 
              icon={<CalendarHeart className="w-8 h-8 text-gold drop-shadow-md" />} 
              delay={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
