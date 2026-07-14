import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "submitted";

export default function RsvpSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: conectar este envio ao destino definitivo do RSVP
    // (WhatsApp / formulário com banco de dados / Google Forms / e-mail).
    // Por enquanto, o formulário só confirma visualmente o envio.
    setStatus("submitted");
  }

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
        {status === "submitted" ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <span className="text-5xl">🕸️</span>
            <p className="font-display text-2xl text-white">Obrigado, {name || "herói"}!</p>
            <p className="text-sm text-white/75">
              {attending === "no"
                ? "Poxa, sentiremos sua falta! Obrigado por avisar."
                : "Presença registrada. Nos vemos na festa!"}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label className="flex flex-col gap-1.5 text-left">
              <span className="text-xs font-semibold tracking-widest text-white/60 uppercase">
                Seu nome
              </span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
                className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/50"
              />
            </label>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold tracking-widest text-white/60 uppercase">
                Você vai comparecer?
              </span>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setAttending("yes")}
                  className={`flex-1 rounded-lg border px-4 py-3 text-sm font-semibold transition ${
                    attending === "yes"
                      ? "border-transparent text-white"
                      : "border-white/25 text-white/80 hover:border-white/50"
                  }`}
                  style={attending === "yes" ? { backgroundColor: "var(--color-hero-red)" } : undefined}
                >
                  Sim, vou! 🎉
                </button>
                <button
                  type="button"
                  onClick={() => setAttending("no")}
                  className={`flex-1 rounded-lg border px-4 py-3 text-sm font-semibold transition ${
                    attending === "no"
                      ? "border-white/50 bg-white/15 text-white"
                      : "border-white/25 text-white/80 hover:border-white/50"
                  }`}
                >
                  Não vou poder
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={!attending}
              className="mt-1 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
              style={{ backgroundColor: "var(--color-hero-blue-light)" }}
            >
              Enviar confirmação
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
