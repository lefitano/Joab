import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { eventConfig, getMapsUrl } from "../config/eventConfig";
import TiltCard from "./TiltCard";

const iconProps = {
  width: 30,
  height: 30,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const details = [
  {
    title: "Data",
    lines: [eventConfig.dateDisplay, eventConfig.weekdayDisplay],
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
        <path d="M3 9.5h18" />
        <path d="M8 3v3M16 3v3" />
      </svg>
    ),
  },
  {
    title: "Horário",
    lines: [`${eventConfig.timeDisplay}`],
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
  {
    title: "Local",
    lines: [eventConfig.location.address],
    icon: (
      <svg {...iconProps}>
        <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </svg>
    ),
  },
];

export default function EventDetails() {
  return (
    <section id="detalhes" className="relative px-6 py-20 sm:py-28">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display mb-12 text-center text-4xl text-white sm:text-5xl"
      >
        Detalhes da <span style={{ color: "var(--color-hero-red)" }}>festa</span>
      </motion.h2>

      <div className="perspective-container mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
        {details.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <TiltCard className="flex h-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-7 text-center shadow-[0_20px_45px_rgba(0,0,0,0.4)] backdrop-blur-sm">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--color-hero-red)", color: "white" }}
              >
                {item.icon}
              </div>
              <h3 className="font-display text-2xl tracking-wide text-white">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="text-sm text-white/75 sm:text-base">
                  {line}
                </p>
              ))}
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href={getMapsUrl(eventConfig.location.address)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
          style={{ backgroundColor: "var(--color-hero-red)" }}
        >
          <FaMapMarkerAlt />
          Abrir no mapa
        </a>
      </div>
    </section>
  );
}
