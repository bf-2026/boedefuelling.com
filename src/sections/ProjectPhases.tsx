import React from "react";
import { CheckCircle2, Lightbulb, Cog, Rocket } from "lucide-react";
import { motion } from "framer-motion";

interface Phase {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string;
}

const ProjectPhases: React.FC = () => {
  const phases: Phase[] = [
    {
      title: "Strategie & Analyse",
      description: "Wir verstehen Ihre spezifischen Anforderungen und identifizieren High-Impact KI-Einsatzpunkte in Ihren Kernprozessen.",
      icon: <Lightbulb className="w-8 h-8" />,
      details: "30-60 min Gespräch, konkrete Use-Case Definition"
    },
    {
      title: "Design & Planung",
      description: "Maßgeschneiderte Lösung: Wir entwerfen ein System, das nahtlos in Ihre bestehende IT-Infrastruktur integriert wird.",
      icon: <Cog className="w-8 h-8" />,
      details: "Technische Architektur, Sicherheit & Compliance"
    },
    {
      title: "Implementierung",
      description: "Agil und transparent: Wir bauen Ihre Lösung iterativ, mit regelmäßigen Demos und schnellem Feedback.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      details: "Testing, Optimierung, Go-Live Vorbereitung"
    },
    {
      title: "Erfolg im Betrieb",
      description: "Nach dem Go-Live: Kontinuierliche Unterstützung, Monitoring und proaktive Verbesserungen für langfristigen ROI.",
      icon: <Rocket className="w-8 h-8" />,
      details: "Support, Wartung, Performance Optimization"
    },
  ];

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/12 rounded-full blur-3xl opacity-40 mix-blend-multiply animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/12 rounded-full blur-3xl opacity-40 mix-blend-multiply animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full text-sm font-medium text-brand-primary">
              Unser Prozess
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 max-w-4xl mx-auto">
            Von der Vision zur <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">produktiven Lösung</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Ein bewährter Prozess, der Ihre KI-Projekte sicher und erfolgreich in den Betrieb bringt. Transparente Kommunikation, regelmäßige Milestones und Ihren ROI im Fokus – von Tag 1 bis über den Go-Live hinaus.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-slate-200/50">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
              alt="Team in Zusammenarbeit an KI-Projekt"
              className="w-full h-auto object-cover max-h-96"
            />
          </motion.div>
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative">
              
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              <div className="relative p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-200/50 group-hover:border-brand-primary/50 transition-all duration-300 h-full flex flex-col">
                
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-brand-primary to-brand-accent text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  Phase {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4 p-4 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 w-fit rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <div className="text-brand-primary">{phase.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">
                  {phase.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-4 flex-grow">
                  {phase.description}
                </p>

                {/* Details */}
                <div className="pt-4 border-t border-slate-200/50 text-sm text-slate-500">
                  ✓ {phase.details}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Connector */}
        <div className="hidden lg:block mt-12">
          <div className="flex justify-between px-8">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.2 }}
                className="h-1 flex-grow mx-2 bg-gradient-to-r from-brand-primary/30 to-brand-accent/30 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPhases;
