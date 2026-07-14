import { eventConfig } from "../config/eventConfig";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-center">
      <p className="font-display text-lg text-white/80">
        Com carinho, esperamos você lá! 🕷️
      </p>
      <p className="mt-2 text-xs text-white/40">
        Aniversário do {eventConfig.name} — {eventConfig.dateDisplay}
      </p>
    </footer>
  );
}
