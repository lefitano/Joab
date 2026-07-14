import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import CountdownTimer from "./components/CountdownTimer";
import RsvpSection from "./components/RsvpSection";
import Footer from "./components/Footer";
import WebBackground from "./components/WebBackground";

function App() {
  return (
    <div className="relative min-h-screen">
      <WebBackground />
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
  );
}

export default App;
