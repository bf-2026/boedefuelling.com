import { motion } from "framer-motion";
import { Cpu, Share2, Bot } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "End-to-End-Prozessautomatisierungen",
    description:
      "Wir automatisieren komplette Prozessketten, nicht nur einzelne Aufgaben.",
  },
  {
    icon: Share2,
    title: "KI-gestützte Workflows",
    description:
      "Nahtlose Übergabe von Aufgaben zwischen KI und Mitarbeitern über Abteilungen hinweg.",
  },
  {
    icon: Bot,
    title: "Individuelle KI-Agenten",
    description:
      "Spezialisierte KI-Helfer für spezifische operative Aufgaben und Exzellenz.",
  },
];

export default function ProcessAutomation() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Mehr als nur Wissenssysteme:{" "}
            <span className="text-brand-primary">
              KI-gestützte Prozessautomatisierung
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600">
            Viele Unternehmen bleiben bei Pilotprojekten stehen – wir bringen
            messbare Ergebnisse. Unser Fokus: Performance-Verbesserung, nicht
            Technik zum Selbstzweck.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
