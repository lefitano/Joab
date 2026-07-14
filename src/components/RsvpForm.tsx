import { useState, type FormEvent } from "react";

export default function RsvpForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [name, setName] = useState("");
  const [companions, setCompanions] = useState<string[]>([]);
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);

  const allNames = [name, ...companions].map((n) => n.trim()).filter(Boolean);

  function addCompanion() {
    setCompanions((prev) => [...prev, ""]);
  }

  function updateCompanion(index: number, value: string) {
    setCompanions((prev) => prev.map((c, i) => (i === index ? value : c)));
  }

  function removeCompanion(index: number) {
    setCompanions((prev) => prev.filter((_, i) => i !== index));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: conectar este envio ao destino definitivo do RSVP
    // (WhatsApp / formulário com banco de dados / Google Forms / e-mail).
    // Por enquanto, o formulário só confirma visualmente o envio.
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <span className="text-5xl">🕸️</span>
        <p className="font-display text-2xl text-white">Obrigado, {name || "herói"}!</p>
        <p className="text-sm text-white/75">
          {attending === "no"
            ? "Poxa, sentiremos sua falta! Obrigado por avisar."
            : allNames.length > 1
              ? `Presença confirmada para ${allNames.length} pessoas: ${allNames.join(", ")}.`
              : "Presença registrada. Nos vemos na festa!"}
        </p>
      </div>
    );
  }

  return (
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

      <div className="flex flex-col gap-2.5 text-left">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold tracking-widest text-white/60 uppercase">
            Vai levar acompanhantes?
          </span>
        </div>
        <p className="text-xs text-white/50">
          O convite é para toda a família! Adicione o nome de quem mais vem com você.
        </p>

        {companions.map((companion, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              value={companion}
              onChange={(e) => updateCompanion(index, e.target.value)}
              placeholder={`Nome do acompanhante ${index + 1}`}
              className="flex-1 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/50"
            />
            <button
              type="button"
              onClick={() => removeCompanion(index)}
              aria-label="Remover acompanhante"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/20 text-white/70 transition hover:border-white/50 hover:text-white"
            >
              ×
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addCompanion}
          className="self-start rounded-lg border border-dashed border-white/30 px-4 py-2 text-sm font-medium text-white/70 transition hover:border-white/60 hover:text-white"
        >
          + Adicionar acompanhante
        </button>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold tracking-widest text-white/60 uppercase">
          Vocês vão comparecer?
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
            Sim, vamos! 🎉
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
            Não vamos poder
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
  );
}
