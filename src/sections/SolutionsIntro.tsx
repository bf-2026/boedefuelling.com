import { motion } from "framer-motion";

export default function SolutionsIntro() {
  return (
    <section className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm font-semibold text-brand-primary mb-4 uppercase tracking-wide">
              Ihr Partner für Effizienz und Digitalisierung
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Unsere Lösungen für Ihr Unternehmen
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg text-slate-600 leading-relaxed">
              Wir bieten spezialisierte Lösungen, die Ihr Unternehmen
              digitalisieren, Ihre Prozesse optimieren und Ihr Team spürbar
              entlasten. Entdecken Sie, wie wir gemeinsam den Weg zu mehr
              Effizienz und Struktur gestalten.
            </motion.p>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800"
              alt="Glückliches Team arbeitet gemeinsam an digitalen Projekten"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
