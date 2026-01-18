import { motion } from 'framer-motion';
import { Building2, Lock, Scale, Settings } from 'lucide-react';

const trustPoints = [
  {
    icon: Lock,
    title: "Sicher & Compliant",
    description: "Datenschutz nach deutschen Standards. Volle Kontrolle über Ihre Daten."
  },
  {
    icon: Scale,
    title: "Skalierbar",
    description: "Wächst mit Ihren Anforderungen – vom Pilotprojekt zum weltweiten Rollout."
  },
  {
    icon: Settings,
    title: "Langfristig Wartbar",
    description: "Keine Blackbox. Unsere Systeme sind dokumentiert, wartbar und erweiterbar."
  },
  {
    icon: Building2,
    title: "Produktionserprobt",
    description: "Keine Experimente. Wir setzen auf bewährte Technologien für den echten Einsatz."
  }
];

export default function Trust() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Für Unternehmens-Realität gebaut
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Wir sind ein internationales Team mit Erfahrung in industriellen Unternehmensstrukturen und Microsoft-Enterprise-Umgebungen.
              Unsere Lösungen sind nicht für das Labor, sondern für den täglichen Einsatz in anspruchsvollen Umgebungen gebaut.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Unsere Lösungen sind branchenübergreifend einsetzbar und besonders für Unternehmen mit komplexen Prozessen, großen Datenmengen und internationaler Organisation geeignet.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-50 rounded-xl"
              >
                <point.icon className="w-8 h-8 text-brand-secondary mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{point.title}</h3>
                <p className="text-sm text-slate-600">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
