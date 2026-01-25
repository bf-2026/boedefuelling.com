import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Unsere Dienstleistungen
          </h1>
          <p className="text-xl text-slate-600">
            Umfassende Lösungen, die auf deine Unternehmensbedürfnisse zugeschnitten sind
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Prozessautomatisierung",
              description: "Rationalisiere deine Workflows mit intelligenter Automatisierung",
            },
            {
              title: "KI-Integration",
              description: "Integriere KI nahtlos in deine bestehenden Systeme",
            },
            {
              title: "Wissenstransfer",
              description: "Dokumentiere und automatisiere dein Unternehmenswissen",
            },
            {
              title: "Beratung",
              description: "Strategische Unterstützung für digitale Transformation",
            },
            {
              title: "Schulung",
              description: "Rüste dein Team mit KI- und Automatisierungs-Fähigkeiten aus",
            },
            {
              title: "Support",
              description: "Kontinuierliche technische und strategische Unterstützung",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:border-brand-primary transition-colors">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
