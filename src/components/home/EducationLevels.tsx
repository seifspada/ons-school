import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Check, GraduationCap } from "lucide-react";
import { copy } from "@/src/data/copy";
import type { Language } from "@/src/lib/types";
import { SchoolImage } from "@/src/components/ui/SchoolImage";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

export function EducationLevels({ lang }: { lang: Language }) {
  const text = copy[lang];
  const cards = [
    {
      id: "primary",
      title: text.levels.primary.title,
      description: text.levels.primary.description,
      features: text.levels.primary.features,
      action: text.levels.primary.action,
      image: "/images/anas_school_images/primary-students.jpg",
      tone: "green" as const,
      Icon: BookOpen,
      alt: lang === "fr" ? "Élèves du primaire en classe" : "تلاميذ المرحلة الابتدائية في الفصل",
    },
    {
      id: "college",
      title: text.levels.college.title,
      description: text.levels.college.description,
      features: text.levels.college.features,
      action: text.levels.college.action,
      image: "/images/anas_school_images/middle-school-students.jpg",
      tone: "blue" as const,
      Icon: GraduationCap,
      alt: lang === "fr" ? "Élèves du collège en classe" : "تلاميذ المرحلة الإعدادية في الفصل",
    },
  ];

  return (
    <section className="section bg-[#f8fafc] pt-[66px] max-[560px]:pt-[49px]" aria-labelledby="levels-heading">
      <div className="container">
        <SectionHeading
          eyebrow={text.levels.eyebrow}
          title={text.levels.title}
          align="center"
        />
        <div className="mb-[30px] grid grid-cols-2 gap-[22px] max-[560px]:mb-[22px] max-[560px]:grid-cols-1 max-[560px]:gap-[14px]">
          {cards.map(({ id, title, description, features, action, image, tone, Icon, alt }, index) => {
            const toneClass = tone === "green"
              ? "border-[#d7eabf] bg-[linear-gradient(135deg,#f1f9e9,#eaf5df)] text-[var(--green-dark)]"
              : "border-[#d0e9f4] bg-[linear-gradient(135deg,#eef8fc,#e6f4fb)] text-[var(--blue-dark)]";
            const buttonHoverClass = tone === "green"
              ? "hover:bg-[var(--green-dark)]"
              : "hover:bg-[var(--blue-dark)]";
            return (
            <motion.article
              className={`group flex min-h-[296px] overflow-hidden rounded-[22px] border shadow-[0_8px_26px_rgb(33_55_80_/_6%)] transition-[box-shadow,transform] duration-[220ms] hover:-translate-y-[3px] hover:shadow-[0_16px_36px_rgb(33_55_80_/_11%)] max-[850px]:min-h-[310px] max-[560px]:min-h-[270px] max-[560px]:rounded-[18px] ${toneClass}`}
              id={id}
              key={id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex w-[55%] flex-col items-start py-5 ps-[22px] pe-0 max-[850px]:py-[17px] max-[850px]:ps-[17px] max-[560px]:w-[58%] max-[560px]:py-4 max-[560px]:ps-[15px]">
                <div className="grid size-[43px] place-items-center rounded-[15px] bg-white text-inherit shadow-[0_4px_11px_rgb(30_55_80_/_7%)] max-[560px]:size-[38px] max-[560px]:rounded-[13px]"><Icon size={24} aria-hidden="true" /></div>
                <h3 className="mb-[2px] mt-3 text-[22px] font-[780] leading-[1.2] tracking-[-0.035em] max-[850px]:text-lg max-[560px]:mt-[9px] max-[560px]:text-lg">{title}</h3>
                <p className="m-0 min-h-[37px] text-xs font-[650] leading-[1.5] text-[#37475c] max-[560px]:min-h-[34px] max-[560px]:text-[11px]">{description}</p>
                <ul className="my-[13px] mb-4 grid list-none gap-[7px] p-0 max-[560px]:my-[11px] max-[560px]:mb-[13px] max-[560px]:gap-[6px]">
                  {features.map((feature) => (
                    <li className="flex items-start gap-[7px] text-[11px] leading-[1.4] text-[#334258] max-[560px]:gap-[5px] max-[560px]:text-[10px]" key={feature}><Check className="shrink-0 text-[var(--green-dark)]" size={16} strokeWidth={3} aria-hidden="true" />{feature}</li>
                  ))}
                </ul>
                <a href="#contact" className={`button mt-auto min-h-[37px] gap-[7px] rounded-full border-transparent bg-white px-[14px] py-2 text-[11px] ${buttonHoverClass} hover:text-white`}>
                  {action}<ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>
              <div className="relative my-3 me-3 ms-0 w-[45%] min-w-0 self-stretch overflow-hidden rounded-2xl bg-[#e8eff4] max-[850px]:w-[41%] max-[560px]:my-[10px] max-[560px]:me-[10px] max-[560px]:w-[42%] max-[560px]:rounded-[13px]">
                <SchoolImage
                  src={image}
                  alt={alt}
                  sizes="(max-width: 560px) 42vw, (max-width: 850px) 41vw, (max-width: 1100px) 22vw, 260px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.045]"
                />
              </div>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
