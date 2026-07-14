import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBirthdayCake } from "react-icons/fa";
import { eventConfig } from "../config/eventConfig";

function getTimeLeft() {
  const diff = new Date(eventConfig.isoDateTime).getTime() - Date.now();
  const clamped = Math.max(diff, 0);

  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
    isPast: diff <= 0,
  };
}

const units: { key: keyof ReturnType<typeof getTimeLeft>; label: string }[] = [
  { key: "days", label: "dias" },
  { key: "hours", label: "horas" },
  { key: "minutes", label: "min" },
  { key: "seconds", label: "seg" },
];

export default function CountdownTimer({ compact = false }: { compact?: boolean }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (timeLeft.isPast) {
    return (
      <p
        className="font-display text-hero-gold flex items-center justify-center gap-2 text-center text-2xl"
        style={{ color: "var(--color-hero-gold)" }}
      >
        A festa começou!
        <FaBirthdayCake />
      </p>
    );
  }

  return (
    <div className={compact ? "flex justify-center gap-2" : "flex justify-center gap-3 sm:gap-5"}>
      {units.map((unit, i) => (
        <motion.div
          key={unit.key}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className={
            compact
              ? "flex w-14 flex-col items-center rounded-lg border border-white/15 bg-white/5 py-2 backdrop-blur-sm"
              : "flex w-16 flex-col items-center rounded-xl border border-white/15 bg-white/5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:w-20"
          }
        >
          <span className={compact ? "font-display text-xl text-white" : "font-display text-3xl text-white sm:text-4xl"}>
            {String(timeLeft[unit.key]).padStart(2, "0")}
          </span>
          <span className={compact ? "text-[0.55rem] tracking-widest text-white/60 uppercase" : "mt-1 text-[0.65rem] tracking-widest text-white/60 uppercase sm:text-xs"}>
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
