"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { HeartHandshake } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-emerald/90 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center text-sand">
        <div className="flex items-center gap-3">
          <HeartHandshake className="w-8 h-8 text-gold" />
          <span className="text-3xl font-bold tracking-tight text-sand drop-shadow-md">
            كرم الوفادة
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 text-lg font-medium items-center drop-shadow-sm">
          <a href="#about" className="hover:text-gold transition-colors">من نحن</a>
          <a href="#projects" className="hover:text-gold transition-colors">مشاريعنا</a>
          <a href="#impact" className="hover:text-gold transition-colors">الأثر</a>
        </div>

        <button className="bg-gold text-emerald px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all shadow-xl transform hover:scale-105 flex items-center gap-2">
          تبرع الآن
        </button>
      </div>
    </motion.nav>
  );
}
