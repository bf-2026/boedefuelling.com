import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

const problemsSolutions = [
  {
    problem: "Wissenstransfer",
    solution: "Interner Chatbot basierend auf Enterprise KnowHow",
    detail: "Schluss mit langem Suchen in Ordnern und Wikis."
  },
  {
    problem: "Manuelle Vertriebsprozesse (Angebotserstellung, Follow-up)",
    solution: "Automatisierte Erstellung und Nachverfolgung",
    detail: "KI übernimmt Routine, Vertriebler schließen ab."
  },
  {
    problem: "Manuelle Buchhaltung & PDF-Bearbeitung",
    solution: "Teilbearbeitung durch KI-Agent. Mitarbeiter gibt finales OK.",
    detail: "Reduktion manueller Eingaben um bis zu 80%."
  },
  {
    problem: "Kundenservice Überlastung",
    solution: "Intelligenter 24/7 ChatBot",
    detail: "Sofortige Antworten für Standardanfragen, Eskalation bei komplexen Themen."
  }
];

export default function ProblemsSolutions() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Typische Probleme & Lösungen
          </motion.h2>
          <p className="text-lg text-slate-600">
            Wir lösen echte geschäftliche Herausforderungen.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {problemsSolutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-4 md:gap-8 items-stretch"
            >
              {/* Problem Side */}
              <div className="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-sm flex flex-col justify-center">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{item.problem}</h3>
                  </div>
                </div>
              </div>

              {/* Arrow only visible on desktop */}
              <div className="hidden md:flex items-center justify-center">
                 <ArrowRight className="text-slate-300" />
              </div>

              {/* Solution Side */}
              <div className="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-sm flex flex-col justify-center">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{item.solution}</h3>
                    <p className="text-sm text-slate-500">{item.detail}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
