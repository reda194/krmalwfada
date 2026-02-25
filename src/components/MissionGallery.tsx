"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CircleCheckBig, MoveHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  progress: number;
  goal: string;
  raised: string;
  image: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: "water",
    title: "سقيا ماء زمزم المبرد",
    description:
      "توفير مياه زمزم المبردة لضيوف الرحمن في المسجد الحرام والمشاعر المقدسة طوال الموسم.",
    progress: 75,
    raised: "750,000 ﷼",
    goal: "1,000,000 ﷼",
    image: "/images/water_project_1771963641569.jpg",
    highlights: ["تغطية نقاط عالية الكثافة", "تحديث ميداني دوري"],
  },
  {
    id: "meals",
    title: "إطعام ضيف الرحمن",
    description:
      "توزيع وجبات ساخنة وجافة مجهزة بعناية وفق احتياج الزوار في أوقات الذروة.",
    progress: 45,
    raised: "450,000 ﷼",
    goal: "1,000,000 ﷼",
    image: "/images/meals_project_1771963657322.jpg",
    highlights: ["وجبات آمنة ومعتمدة", "فرق توزيع متنقلة"],
  },
  {
    id: "guidance",
    title: "الإرشاد الميداني",
    description:
      "مراكز ومجموعات إرشادية لمساندة التائهين وتيسير الحركة والوصول للوجهة الصحيحة.",
    progress: 90,
    raised: "180,000 ﷼",
    goal: "200,000 ﷼",
    image: "/images/guidance_project_1771963683464.jpg",
    highlights: ["استجابة سريعة", "كوادر متعددة اللغات"],
  },
  {
    id: "hosting",
    title: "ضيافة وإسكان الحجاج",
    description:
      "توفير أماكن ضيافة مؤقتة ومجهزة لراحة كبار السن والحالات الأكثر حاجة قرب الحرم.",
    progress: 30,
    raised: "1,500,000 ﷼",
    goal: "5,000,000 ﷼",
    image: "/images/hosting_project_1771963699446.jpg",
    highlights: ["مرافق أساسية مهيأة", "دعم لوجستي مستمر"],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="min-w-[88vw] sm:min-w-[480px] lg:min-w-[520px] xl:min-w-[560px] rounded-[2rem] bg-white border border-black/5 shadow-[0_14px_35px_rgba(0,0,0,0.1)] overflow-hidden"
    >
      <div className="relative h-56 md:h-64">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 88vw, 560px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4 bg-black/65 text-gold text-xs font-bold px-3 py-1.5 rounded-full border border-gold/30">
          مكتمل {project.progress}%
        </div>
        <h3 className="absolute bottom-4 right-4 left-4 text-white text-2xl font-black leading-tight drop-shadow-lg">
          {project.title}
        </h3>
      </div>

      <div className="p-6 flex flex-col h-[300px]">
        <p className="text-gray-700 text-sm md:text-base leading-relaxed line-clamp-3 mb-4">
          {project.description}
        </p>

        <div className="space-y-2 mb-4">
          {project.highlights.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-emerald/85">
              <CircleCheckBig className="w-4 h-4 text-gold shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm font-bold mb-2">
            <span className="text-[#021A11]">تم جمع: {project.raised}</span>
            <span className="text-gold">الهدف: {project.goal}</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-sand overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-l from-gold to-yellow-500"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        <Link
          href="/donate"
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#021A11] text-white font-bold py-3.5 hover:bg-emerald transition-colors"
          aria-label={`شارك في الأجر الآن - ${project.title}`}
        >
          <span>شارك في الأجر الآن</span>
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
}

export default function MissionGallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      if (scroller.scrollWidth <= scroller.clientWidth) return;

      event.preventDefault();
      scroller.scrollLeft += event.deltaY;
    };

    scroller.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      scroller.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32 bg-sand relative z-10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-gold font-bold tracking-widest text-sm uppercase px-5 py-2 border border-gold/30 rounded-full bg-gold/5 shadow-sm">
              مجالات العطاء
            </span>
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
            className="text-lg md:text-xl text-emerald/80 max-w-2xl mx-auto font-light leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            جميع المشاريع في مسار أفقي واحد لتصفّح أسرع ومقارنة أوضح بين الأثر والاحتياج.
          </motion.p>
          <div className="inline-flex items-center gap-2 text-sm font-bold text-emerald/75">
            <MoveHorizontal className="w-4 h-4" />
            اسحب يمينًا ويسارًا أو استخدم عجلة الماوس للتنقل بين المشاريع
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-sand to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-sand to-transparent z-10" />

          <div
            ref={scrollerRef}
            className="overflow-x-auto pb-3 [scrollbar-width:thin]"
          >
            <div className="flex gap-5 md:gap-6 w-max pr-2 pl-2">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
