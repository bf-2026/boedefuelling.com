import { BarChart3, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: BarChart3,
    title: "Zentraler Wissenstransfer",
    description:
      "Zentrale Nutzung von Unternehmenswissen für effektiven Wissenstransfer und Vermeidung von Informationssilos.",
  },
  {
    icon: ShieldCheck,
    title: "Verlässliche Entscheidungen",
    description:
      "Verlässliche, kontextbezogene Entscheidungen auf Basis ihrer eigenen Unternehmensdaten.",
  },
  {
    icon: Zap,
    title: "Schnelligkeit",
    description:
      "Schnellere Entscheidungen in allen Bereichen durch sofort verfügbares Expertenwissen.",
  },
  {
    icon: BarChart3, // Using existing icon for now, could import more if needed
    title: "Automatisierung",
    description:
      "Eliminierung von manuellen Prozessen und signifikante Entlastung ihrer Teams.",
  },
  {
    icon: ShieldCheck,
    title: "Datensouveränität",
    description:
      "Volle Datenhoheit, Compliance und Sicherheit für ihre sensiblen Unternehmensinformationen.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Ihre Vorteile</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Was Sie mit unseren Lösungen erreichen</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-xl hover:shadow-brand-primary/10 transition-all border border-slate-200/50 overflow-hidden hover:border-brand-primary/30 hover:-translate-y-1">
              {/* Top accent border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-accent" />

              <div className="mb-6 inline-flex p-3 rounded-lg bg-slate-50 text-brand-primary">
                <feature.icon className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
