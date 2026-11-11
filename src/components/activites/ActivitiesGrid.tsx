"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, Bus, Palette, Volleyball, type LucideIcon } from "lucide-react";
import type { SiteCopy } from "@/src/data/copy";

type ActivityKey = keyof SiteCopy["activitiesPage"]["items"];

const activityItems: {
  key: ActivityKey;
  image: string;
  Icon: LucideIcon;
}[] = [
  { key: "sport", image: "/images/activities/football.jpg", Icon: Volleyball },
  { key: "robotics", image: "/images/activities/robotique.jpg", Icon: Bot },
  { key: "arts", image: "/images/activities/paint.jpg", Icon: Palette },
  { key: "trips", image: "/images/activities/marcher-ecole.jpg", Icon: Bus },
];

type Props = {
  t: SiteCopy["activitiesPage"]["list"];
  items: SiteCopy["activitiesPage"]["items"];
  ActionIcon: LucideIcon;
};

export default function ActivitiesGrid({ t, items, ActionIcon }: Props) {
  return (
    <section
      className="py-[clamp(32px,5vw,52px)]"
      aria-labelledby="activities-list-title"
    >
      <div className="container">
        <motion.div
          className="mb-6 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4 }}
        >
          <span
            className="h-[2px] w-[clamp(30px,12vw,190px)] bg-[var(--orange)]"
            aria-hidden="true"
          />
          <h2
            id="activities-list-title"
            className="m-0 text-center text-[clamp(26px,3.2vw,36px)] font-[800] tracking-[-0.03em] text-[var(--navy)]"
          >
            {t.title}
          </h2>
          <span
            className="h-[2px] w-[clamp(30px,12vw,190px)] bg-[var(--orange)]"
            aria-hidden="true"
          />
        </motion.div>

        <div
          id="activities-grid"
          className="grid grid-cols-4 gap-5 max-[1000px]:grid-cols-2 max-[560px]:grid-cols-1"
        >
          {activityItems.map(({ key, image, Icon }, index) => {
            const item = items[key];
            return (
              <motion.article
                key={key}
                className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_8px_26px_rgb(18_53_104_/_10%)] transition-shadow duration-200 hover:shadow-[0_14px_32px_rgb(18_53_104_/_16%)]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className="relative h-[150px] overflow-hidden max-[560px]:h-[190px]">
                  <Image
                    src={image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 560px) 100vw, (max-width: 1000px) 46vw, 280px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>

                <div className="relative z-[1] -mt-[30px] flex items-start justify-center gap-3 px-3">
                  <span
                    className="grid size-[60px] shrink-0 place-items-center rounded-full border-[4px] border-white bg-[var(--navy)] text-white shadow-md"
                    aria-hidden="true"
                  >
                    <Icon size={28} />
                  </span>
                  <h3 className="m-0 mt-[34px] text-[18px] font-[780] leading-tight text-[var(--navy)]">
                    {item.title}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col items-center gap-3 px-4 pb-5 pt-2 text-center">
                  <p className="m-0 flex-1 text-[14px] leading-[1.5] text-[#334a66]">
                    {item.description}
                  </p>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 rounded-full border-2 border-[var(--navy)] px-4 py-1.5 text-[13px] font-[700] text-[var(--navy)] transition-colors duration-200 hover:bg-[var(--navy)] hover:text-white"
                  >
                    {t.learnMore}
                    <ActionIcon size={15} aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}