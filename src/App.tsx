import { useState } from "react";
import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import CountdownTimer from "./components/CountdownTimer";
import RsvpSection from "./components/RsvpSection";
import RsvpModal from "./components/RsvpModal";
import Footer from "./components/Footer";
import WebBackground from "./components/WebBackground";
import InviteScreen from "./components/InviteScreen";

function App() {
  const [rsvpOpen, setRsvpOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <WebBackground />

      {/* Mobile: convite inteiro em uma única tela, sem scroll */}
      <InviteScreen onOpenRsvp={() => setRsvpOpen(true)} />

      {/* Desktop: experiência espaçosa com rolagem entre seções */}
      <div className="hidden sm:block">
        <Hero />

        <section className="px-6 pt-4 pb-6">
          <p className="mb-5 text-center text-xs font-semibold tracking-[0.25em] text-white/50 uppercase">
            Contagem regressiva
          </p>
          <CountdownTimer />
        </section>

        <EventDetails />
        <RsvpSection />
        <Footer />
      </div>

      <RsvpModal open={rsvpOpen} onClose={() => setRsvpOpen(false)} />
    </div>
  );
}

export default App;
