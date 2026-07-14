import { motion } from "framer-motion";
import RsvpForm from "./RsvpForm";

export default function RsvpSection() {
  return (
    <section id="confirmar-presenca" className="relative px-6 py-20 sm:py-28">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display mb-4 text-center text-4xl text-white sm:text-5xl"
      >
        Confirme sua <span style={{ color: "var(--color-hero-red)" }}>presença</span>
      </motion.h2>
      <p className="mx-auto mb-10 max-w-md text-center text-sm text-white/70 sm:text-base">
        Sua resposta ajuda muito na organização da festa. Conta pra gente se vai vir!
      </p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/[0.06] p-7 shadow-[0_20px_45px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:p-9"
      >
        <RsvpForm />
      </motion.div>
    </section>
  );
}
