import { Button } from "../components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = [
  "Effizienz steigern",
  "Kosten senken",
  "Wettbewerbsvorteil generieren",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-900/5 via-white to-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 left-10 w-96 h-96 bg-brand-primary/15 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob" />
        <div className="absolute top-40 right-10 w-80 h-80 bg-brand-accent/15 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl opacity-40 mix-blend-multiply animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full text-sm font-medium text-brand-primary">
            Für Unternehmen, die KI richtig nutzen
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
          Mit KI{" "}
          <span className="block h-[1.3em] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="block bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent pb-2">
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
          Wir helfen Unternehmen aus der Industrie und anderen Branchen, ihre
          Prozesse und ihr Wissen in KI-gestützte Systeme zu verwandeln –
          Lösungen, die nicht experimentell, sondern direkt messbar Effizienz
          erhöhen und Kosten senken.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          <Button
            href="https://cal.com/lucas-fuelling-ytra7k/30min?overlayCalendar=true"
            variant="brand"
            size="lg"
            className="rounded-full text-base font-semibold px-8 shadow-xl shadow-brand-primary/20">
            Kostenfreie Use-Case Analyse buchen
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
