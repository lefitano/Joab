import { useRef } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { eventConfig } from "../config/eventConfig";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(0, { stiffness: 120, damping: 12 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 12 });
  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 22);
    rotateX.set(py * -22);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Explosão radial vermelho/azul de fundo, estilo capa de quadrinho */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 38%, var(--color-hero-red) 0%, var(--color-hero-red-dark) 32%, var(--color-hero-blue) 72%)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-halftone-red opacity-30" />

      <img
        src="/images/spiderman-chibi.webp"
        alt=""
        aria-hidden="true"
        className="animate-float-slow absolute -left-6 bottom-8 -z-10 hidden w-36 opacity-90 drop-shadow-2xl select-none sm:block sm:w-44 md:w-52"
      />
      <img
        src="/images/spiderman-hanging.webp"
        alt=""
        aria-hidden="true"
        className="animate-float-slower absolute top-0 right-8 -z-10 hidden w-32 opacity-95 drop-shadow-2xl select-none sm:block sm:w-40 md:w-48"
      />

      <motion.span
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-display rounded-full border-2 border-white/70 px-5 py-1.5 text-sm tracking-widest uppercase shadow-lg sm:text-base"
        style={{ color: "var(--color-hero-blue)", backgroundColor: "var(--color-hero-gold)" }}
      >
        Você está convidado(a)
      </motion.span>

      <div
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="perspective-container mt-4 select-none"
      >
        <motion.h1
          style={{ transform }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-comic-3d font-display text-[4.2rem] leading-none text-white drop-shadow-2xl sm:text-8xl md:text-9xl"
        >
          {eventConfig.name}
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-5 max-w-xs text-base font-medium text-white/90 sm:max-w-md sm:text-xl"
      >
        {eventConfig.tagline}
      </motion.p>

      <motion.a
        href="#detalhes"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="animate-pulse-glow mt-10 flex flex-col items-center gap-1 text-white/80"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Ver detalhes</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.a>
    </section>
  );
}
