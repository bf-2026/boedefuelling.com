import { motion } from "framer-motion";
import { ArrowRight, AlertCircle, Zap } from "lucide-react";

const problemsSolutions = [
  {
    problem: "Wissenstransfer",
    problemDetail:
      "Mitarbeiter verbringen Stunden mit der Suche nach Informationen.",
    solution: "Interner Chatbot basierend auf Enterprise KnowHow",
    solutionDetail: "Sofortige Antworten statt langem Suchen.",
    roi: "5-10 Std./Woche sparen",
  },
  {
    problem: "Manuelle Vertriebsprozesse",
    problemDetail:
      "Viel Zeit für Angebotserstellung und Follow-up statt für echte Kundenbeziehungen.",
    solution: "Automatisierte Erstellung und Nachverfolgung",
    solutionDetail: "KI übernimmt Routine, dein Team schließt ab.",
    roi: "30+ Stunden/Monat Einsparung",
  },
  {
    problem: "Fehleranfällige Buchhaltung",
    problemDetail: "Manuelle PDF-Bearbeitung kostet Zeit und führt zu Fehlern.",
    solution: "Intelligente KI-Agent Bearbeitung mit Kontroller-OK",
    solutionDetail: "Automatisierung mit menschlicher Sicherheit.",
    roi: "80% weniger Fehler",
  },
  {
    problem: "Kundenservice überlastet",
    problemDetail: "Team mit repetitiven Anfragen überfordert, Reaktionszeit schlecht.",
    solution: "Intelligenter 24/7 ChatBot",
    solutionDetail:
      "Sofortige Antworten für 80% der Anfragen, Eskalation automatisch.",
    roi: "50% weniger Tickets",
  },
];

export default function ProblemsSolutions() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Decoration - matching Hero style */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-32 left-10 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl opacity-40 mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl opacity-40 mix-blend-multiply animate-blob" style={{animationDelay: "2s"}}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full text-sm font-medium text-brand-primary">
              Ihre Herausforderung erkennen
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto">
            Probleme in <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">konkrete Lösungen</span> umwandeln
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Erkennen Sie sich wieder? Wir transformieren Ihre Herausforderungen in messbare Ergebnisse – präzise, schnell und nachhaltig.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Table Header */}
          <div className="hidden md:grid md:grid-cols-2 gap-0 mb-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-t-2xl overflow-hidden shadow-lg">
            <div className="px-8 py-6 border-r border-slate-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-700/50 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-slate-200" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Probleme</h3>
                  <p className="text-slate-400 text-xs">Ihre Herausforderungen</p>
                </div>
              </div>
            </div>
            <div className="px-8 py-6 bg-gradient-to-r from-brand-primary/90 to-brand-accent/90">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Lösungen</h3>
                  <p className="text-white/70 text-xs">Ihre Vorteile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="space-y-5">
            {problemsSolutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group">
                
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:border-brand-primary/30">
                  
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Problem Column */}
                    <div className="p-8 border-r border-slate-200 bg-gradient-to-br from-white to-slate-50">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="flex-shrink-0 bg-slate-900 rounded-lg p-3 shadow-md">
                          <AlertCircle className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="font-bold text-slate-900 text-base pt-1">
                          {item.problem}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed ml-14">
                        {item.problemDetail}
                      </p>
                    </div>

                    {/* Arrow & Solution Column */}
                    <div className="p-8 flex flex-col justify-between md:relative bg-gradient-to-br from-white to-brand-primary/5">
                      {/* Central Arrow */}
                      <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="bg-gradient-to-r from-brand-primary to-brand-accent rounded-full p-3 shadow-lg border-4 border-white">
                          <ArrowRight className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>

                      <div>
                        <div className="flex items-start gap-4 mb-4">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="flex-shrink-0 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg p-3 shadow-md">
                            <Zap className="w-6 h-6 text-white" />
                          </motion.div>
                          <h3 className="font-bold text-slate-900 text-base pt-1">
                            {item.solution}
                          </h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed ml-14 mb-6">
                          {item.solutionDetail}
                        </p>
                      </div>

                      {/* ROI Badge */}
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl px-5 py-3 inline-block shadow-md text-white font-bold text-sm">
                        💰 {item.roi}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 shadow-xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Bereit für Ihre Transformation?
              </h3>
              <p className="text-slate-300 mb-8 text-lg">
                Lassen Sie uns in einem unverbindlichen Gespräch herausfinden, welche Lösung für Sie die größten Einsparungen bringt.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold px-10 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg">
                🚀 Kostenlose Beratung buchen
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
