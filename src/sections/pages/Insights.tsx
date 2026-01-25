import { motion } from "framer-motion";

export default function InsightsPage() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Einblicke & Artikel
          </h1>
          <p className="text-xl text-slate-600">
            Experten-Perspektiven zu KI und Prozessautomatisierung
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Die Zukunft von KI in Unternehmen",
              date: "Januar 2026",
              excerpt: "Erkunde aufstrebende Trends in der Enterprise-KI-Einführung",
            },
            {
              title: "ROI-Metriken für Prozessautomatisierung",
              date: "Dezember 2025",
              excerpt: "Erfahre, wie du die Auswirkungen von Automatisierung misst",
            },
            {
              title: "Best Practices für Wissenstransfer",
              date: "November 2025",
              excerpt: "Strategien für effektives organisatorisches Lernen",
            },
            {
              title: "Sicherheit in KI-Systemen",
              date: "Oktober 2025",
              excerpt: "Sicherheit und Compliance in automatisierten Workflows gewährleisten",
            },
          ].map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:border-brand-primary transition-colors cursor-pointer">
              <p className="text-sm text-brand-primary font-medium mb-2">{article.date}</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{article.title}</h3>
              <p className="text-slate-600 mb-4">{article.excerpt}</p>
              <a href="#" className="text-brand-primary font-medium hover:underline">
                Mehr lesen →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
