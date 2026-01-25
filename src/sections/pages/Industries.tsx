import { motion } from "framer-motion";

export default function IndustriesPage() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Branchen, die wir bedienen
          </h1>
          <p className="text-xl text-slate-600">
            Experten-Lösungen in verschiedenen Sektoren
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Fertigung", description: "Optimiere Produktionsprozesse und Lieferketten" },
            { name: "Finanzen", description: "Automatisiere Compliance und Finanzabwicklung" },
            { name: "Gesundheitswesen", description: "Verbessere die Patientenversorgung durch Prozessautomatisierung" },
            { name: "Einzelhandel", description: "Verbessere Kundenerlebnis und Betrieb" },
            { name: "Logistik", description: "Rationalisiere Verteilung und Bestandsverwaltung" },
            { name: "Technologie", description: "Beschleunige Entwicklungs- und Bereitstellungszyklen" },
          ].map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:border-brand-primary transition-colors">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{industry.name}</h3>
              <p className="text-slate-600">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
