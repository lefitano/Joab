import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RsvpForm from "./RsvpForm";

export default function RsvpModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88dvh] w-full max-w-md overflow-y-auto rounded-t-3xl border border-white/10 bg-(--color-hero-blue) p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] sm:rounded-3xl sm:p-8"
            style={{ backgroundColor: "var(--color-hero-blue)" }}
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="font-display text-2xl text-white sm:text-3xl">
                  Confirme sua <span style={{ color: "var(--color-hero-red)" }}>presença</span>
                </h2>
                <p className="mt-1 text-xs text-white/60 sm:text-sm">
                  Sua resposta ajuda na organização da festa!
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-lg text-white/70 transition hover:border-white/50 hover:text-white"
              >
                ×
              </button>
            </div>

            <RsvpForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
