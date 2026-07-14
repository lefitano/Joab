import { motion } from "framer-motion";
import { eventConfig } from "../config/eventConfig";
import CountdownTimer from "./CountdownTimer";
import Footer from "./Footer";

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const quickInfo = [
  {
    label: "Data",
    value: eventConfig.dateDisplay,
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
        <path d="M3 9.5h18" />
        <path d="M8 3v3M16 3v3" />
      </svg>
    ),
  },
  {
    label: "Horário",
    value: eventConfig.timeDisplay,
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
  {
    label: "Local",
    value: eventConfig.location.name,
    icon: (
      <svg {...iconProps}>
        <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </svg>
    ),
  },
];

export default function InviteScreen({ onOpenRsvp }: { onOpenRsvp: () => void }) {
  return (
    <section className="relative flex h-dvh flex-col overflow-hidden px-5 py-4 text-center sm:hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, var(--color-hero-red) 0%, var(--color-hero-red-dark) 34%, var(--color-hero-blue) 76%)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-halftone-red opacity-25" />

      <img
        src="/images/spiderman-chibi.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 -bottom-2 -z-10 w-28 opacity-90 select-none"
      />

      <div className="flex flex-1 flex-col items-center justify-center gap-3">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display rounded-full border-2 border-white/70 px-4 py-1 text-xs tracking-widest uppercase shadow-lg"
          style={{ color: "var(--color-hero-blue)", backgroundColor: "var(--color-hero-gold)" }}
        >
          Você está convidado(a)
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-comic-3d font-display text-6xl leading-none text-white"
        >
          {eventConfig.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-[16rem] text-sm font-medium text-white/90"
        >
          {eventConfig.tagline}
        </motion.p>

        <div className="mt-1">
          <p className="mb-1.5 text-[0.6rem] tracking-[0.25em] text-white/60 uppercase">
            Contagem regressiva
          </p>
          <CountdownTimer compact />
        </div>

        <div className="mt-2 flex w-full max-w-xs items-stretch justify-between gap-1 rounded-2xl border border-white/15 bg-white/[0.08] px-2 py-3 backdrop-blur-sm">
          {quickInfo.map((item) => (
            <div key={item.label} className="flex flex-1 flex-col items-center gap-1 px-1">
              <span className="text-white/85">{item.icon}</span>
              <span className="text-[0.55rem] tracking-widest text-white/55 uppercase">
                {item.label}
              </span>
              <span className="text-[0.7rem] leading-tight font-semibold text-white">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex w-full max-w-xs flex-col gap-2">
          <a
            href={eventConfig.location.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white/90 transition active:scale-95"
          >
            📍 Ver no mapa
          </a>
          <button
            type="button"
            onClick={onOpenRsvp}
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition active:scale-95"
            style={{ backgroundColor: "var(--color-hero-blue-light)" }}
          >
            🎉 Confirmar presença
          </button>
        </div>
      </div>

      <Footer compact />
    </section>
  );
}
