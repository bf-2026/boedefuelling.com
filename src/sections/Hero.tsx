import { Button } from "../components/ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full text-sm font-medium text-brand-primary">
            Für Maschinenbauer, Zulieferer und Ingenieurbüros
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
          Mit KI zum messbaren{" "}
          <span className="text-slate-900">Wettbewerbsvorteil.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
          Wir helfen Unternehmen aus der Industrie, ihre Prozesse und ihr Wissen
          in KI-gestützte Systeme zu verwandeln – Lösungen, die nicht
          experimentell, sondern direkt messbar Effizienz erhöhen und Kosten
          senken.
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
