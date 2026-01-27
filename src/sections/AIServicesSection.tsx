import { motion } from "framer-motion";
import { Brain, BarChart3 } from "lucide-react";

const aiServices = [
  {
    category: "KI Angebote",
    icon: Brain,
    items: [
      "KI Service-Chatbot für Techniker",
      "Sichere KI-Infrastruktur",
      "Wissensmanagement für Bestandsanlagen",
      "KI-Schulung für Fachabteilungen",
    ],
  },
  {
    category: "Prozess-Automatisierung",
    icon: BarChart3,
    items: [
      "Automatisierte Angebotserstellung (CPQ)",
      "Workflow-Automatisierung zur Planung, Freigabe, Nachverfolgung",
      "Automatisierte Erstellung von Management Reports",
      "Automatisierte Teilebestellung bei Lieferanten",
    ],
  },
];

export default function AIServicesSection() {
  return (
    <section className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            KI & Automatisierung
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Innovative KI-Lösungen und Automatisierung für mittelständische Unternehmen der Fertigungsindustrie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + idx * 0.1 }}
                className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />

                <div className="relative h-full p-6 bg-white/90 backdrop-blur-lg rounded-2xl border-2 border-slate-100 group-hover:border-brand-accent/50 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <div className="mb-4 p-3 bg-gradient-to-br from-brand-accent/15 to-brand-primary/10 w-fit rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-brand-accent" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-brand-accent transition-colors">
                    {service.category}
                  </h3>

                  <ul className="space-y-2">
                    {service.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-brand-accent mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
