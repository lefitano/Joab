import { FaLaptopCode } from "react-icons/fa";
import { eventConfig } from "../config/eventConfig";

export default function Footer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <footer className="flex justify-center pt-1.5">
        <span className="inline-flex items-center gap-1 rounded-full bg-black/20 px-2 py-0.5 text-[0.45rem] text-white/40 backdrop-blur-sm">
          <FaLaptopCode className="text-[0.5rem]" />
          Leonardo Monteiro
        </span>
      </footer>
    );
  }

  return (
    <footer className="border-t border-white/10 px-6 py-10 text-center">
      <p className="font-display text-lg text-white/80">
        Com carinho, esperamos você lá! 🕷️
      </p>
      <p className="mt-2 text-xs text-white/40">
        Aniversário do {eventConfig.name} — {eventConfig.dateDisplay}
      </p>

      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-white/50">
        <FaLaptopCode className="text-sm text-white/50" />
        <span>&copy; Desenvolvido por Leonardo Monteiro</span>
      </p>
    </footer>
  );
}
