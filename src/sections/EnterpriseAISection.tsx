import { Button } from "../components/ui/Button";
import { motion } from "framer-motion";
import { Workflow, Bot, GitBranch } from "lucide-react";

export default function EnterpriseAISection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Intro Text for Enterprise AI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Mehr als nur Wissenssysteme: KI-gestützte Prozessautomatisierung
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.25 }}
            className="text-lg text-slate-600 leading-relaxed">
            Viele Unternehmen bleiben bei Pilotprojekten stehen – wir bringen
            messbare Ergebnisse. Unser Fokus: Performance-Verbesserung, nicht
            Technik zum Selbstzweck.
          </motion.p>
        </motion.div>

        {/* Enterprise AI Workflow System */}
        <motion.div
          id="enterprise-ai-workflow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-6xl mx-auto">
          <div className="relative p-10 bg-gradient-to-br from-brand-primary/5 via-white to-brand-accent/5 rounded-3xl border-2 border-brand-accent/30 shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.35 }}
                  className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Enterprise AI Workflow System
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Komplette Prozessautomatisierung mit intelligenten KI-Agenten
                  für nahtlose Workflows
                </motion.p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.45 }}
                  className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/15 to-brand-primary/15 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500" />

                  <div className="relative h-full p-6 bg-white/95 backdrop-blur-lg rounded-2xl border-2 border-slate-100 group-hover:border-brand-accent/60 transition-all duration-300 shadow-md">
                    <div className="mb-4 p-3 bg-gradient-to-br from-brand-accent/20 to-brand-primary/15 w-fit rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <GitBranch className="w-6 h-6 text-brand-accent" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-accent transition-colors">
                      End-to-End-Prozessautomatisierungen
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Wir automatisieren komplette Prozessketten, nicht nur
                      einzelne Aufgaben.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/15 to-brand-primary/15 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500" />

                  <div className="relative h-full p-6 bg-white/95 backdrop-blur-lg rounded-2xl border-2 border-slate-100 group-hover:border-brand-accent/60 transition-all duration-300 shadow-md">
                    <div className="mb-4 p-3 bg-gradient-to-br from-brand-accent/20 to-brand-primary/15 w-fit rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Workflow className="w-6 h-6 text-brand-accent" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-accent transition-colors">
                      KI-gestützte Workflows
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Nahtlose Übergabe von Aufgaben zwischen KI und
                      Mitarbeitern über Abteilungen hinweg.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.55 }}
                  className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/15 to-brand-primary/15 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500" />

                  <div className="relative h-full p-6 bg-white/95 backdrop-blur-lg rounded-2xl border-2 border-slate-100 group-hover:border-brand-accent/60 transition-all duration-300 shadow-md">
                    <div className="mb-4 p-3 bg-gradient-to-br from-brand-accent/20 to-brand-primary/15 w-fit rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Bot className="w-6 h-6 text-brand-accent" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-accent transition-colors">
                      Individuelle KI-Agenten
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Spezialisierte KI-Helfer für spezifische operative
                      Aufgaben und Exzellenz.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="text-center">
                <Button
                  href="https://cal.com/lucas-fuelling-ytra7k/30min?overlayCalendar=true"
                  variant="brand"
                  size="lg"
                  className="rounded-full text-base font-semibold px-8 shadow-xl shadow-brand-accent/20">
                  Workflow-System kennenlernen
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
