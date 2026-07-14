import { useState, type FormEvent } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";
import { eventConfig, getWhatsAppRsvpUrl } from "../config/eventConfig";

export default function RsvpForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [waUrl, setWaUrl] = useState("");

  function selectAttending(value: "yes" | "no") {
    setAttending(value);
    if (value === "no") setName("");
  }

  function buildMessage() {
    return [
      `Olá! Confirmando presença na festa do ${eventConfig.name} (${eventConfig.dateDisplay} às ${eventConfig.timeDisplay})!`,
      "",
      `Nome: ${name.trim()}`,
      "Vou comparecer: Sim!",
    ].join("\n");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (attending === "yes") {
      const url = getWhatsAppRsvpUrl(buildMessage());
      setWaUrl(url);
      window.open(url, "_blank");
    }
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <GiSpiderWeb className="text-5xl text-white/80" />
        <p className="font-display text-2xl text-white">
          {attending === "yes" ? `Obrigado, ${name}!` : "Obrigado por avisar!"}
        </p>
        <p className="text-sm text-white/75">
          {attending === "no"
            ? "Poxa, sentiremos sua falta! Até a próxima."
            : "Abrimos o WhatsApp com sua confirmação pronta. É só tocar em enviar!"}
        </p>
        {attending === "yes" && (
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-1 text-xs font-semibold text-white/60 underline underline-offset-2 hover:text-white/90"
          >
            O WhatsApp não abriu? Toque aqui
          </a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold tracking-widest text-white/60 uppercase">
          Você vai comparecer?
        </span>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => selectAttending("yes")}
            className={`flex-1 rounded-lg border px-4 py-3 text-sm font-semibold transition ${
              attending === "yes"
                ? "border-transparent text-white"
                : "border-white/25 text-white/80 hover:border-white/50"
            }`}
            style={attending === "yes" ? { backgroundColor: "var(--color-hero-red)" } : undefined}
          >
            <span className="inline-flex items-center gap-2">
              <FaCheckCircle />
              Sim, vou!
            </span>
          </button>
          <button
            type="button"
            onClick={() => selectAttending("no")}
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

      <label className="flex flex-col gap-1.5 text-left">
        <span className="text-xs font-semibold tracking-widest text-white/60 uppercase">
          Seu nome
        </span>
        <input
          required={attending === "yes"}
          disabled={attending !== "yes"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={attending === "yes" ? "Digite seu nome" : "Selecione \"Sim, vou!\" para preencher"}
          className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/50 disabled:cursor-not-allowed disabled:opacity-40"
        />
      </label>

      <button
        type="submit"
        disabled={!attending || (attending === "yes" && !name.trim())}
        className="mt-1 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
        style={{ backgroundColor: "var(--color-hero-blue-light)" }}
      >
        {attending === "no" ? "Confirmar aviso" : "Enviar confirmação pelo WhatsApp"}
      </button>
    </form>
  );
}
