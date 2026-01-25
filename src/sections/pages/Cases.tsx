import { motion } from "framer-motion";

export default function CasesPage() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Fallstudien
          </h1>
          <p className="text-xl text-slate-600">
            Echte Ergebnisse aus unseren Kundenpartnerschaften
          </p>
        </motion.div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {[
            {
              title: "Fertigungsexzellenz",
              company: "Globale Fertigungs AG",
              result: "60% Reduzierung der Prozesszeit",
              challenge: "Komplexe mehrstufige Produktions-Workflows",
            },
            {
              title: "Finanzielle Effizienz",
              company: "Premium Finanzdienstleistungen",
              result: "40% schnellere Compliance-Berichterstattung",
              challenge: "Zeitaufwendige behördliche Dokumentation",
            },
            {
              title: "Logistik-Optimierung",
              company: "Continental Logistik",
              result: "35% Kostenreduktion",
              challenge: "Fragmentierte Verteilungsnetze",
            },
          ].map((caseStudy, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-slate-50 to-slate-100 p-8 rounded-lg border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{caseStudy.title}</h3>
                  <p className="text-slate-600 mb-2">{caseStudy.company}</p>
                  <p className="text-sm text-slate-500">{caseStudy.challenge}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-3xl font-bold text-brand-primary">{caseStudy.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
