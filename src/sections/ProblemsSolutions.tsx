import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

const problemsSolutions = [
  {
    problem: "Wissenstransfer",
    problemDetail:
      "Mitarbeiter verbringen Stunden mit der Suche nach Informationen.",
    solution: "Interner Chatbot basierend auf Enterprise KnowHow",
    solutionDetail: "Schluss mit langem Suchen in Ordnern und Wikis.",
  },
  {
    problem: "Manuelle Vertriebsprozesse (Angebotserstellung, Follow-up)",
    problemDetail:
      "Viel Zeit für repetitive Aufgaben statt für Kundenbeziehungen.",
    solution: "Automatisierte Erstellung und Nachverfolgung",
    solutionDetail: "KI übernimmt Routine, Vertriebler schließen ab.",
  },
  {
    problem: "Manuelle Buchhaltung & PDF-Bearbeitung",
    problemDetail: "Fehleranfällig und kostet wertvolle Ressourcen.",
    solution: "Teilbearbeitung durch KI-Agent. Mitarbeiter gibt finales OK.",
    solutionDetail: "Reduktion manueller Eingaben um bis zu 80%.",
  },
  {
    problem: "Kundenservice Überlastung",
    problemDetail: "Team überlastet mit repetitiven Anfragen.",
    solution: "Intelligenter 24/7 ChatBot",
    solutionDetail:
      "Sofortige Antworten für Standardanfragen, Eskalation bei komplexen Themen.",
  },
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
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Typische Probleme & Lösungen
          </motion.h2>
          <p className="text-lg text-slate-600">
            Wir lösen echte geschäftliche Herausforderungen.
          </p>
        </div>

        <div className="space-y-6 max-w-6xl mx-auto">
          {problemsSolutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
              {/* Problem Side */}
              <div className="bg-white p-6 rounded-xl border-l-4 border-red-600 shadow-sm">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {item.problem}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {item.problemDetail}
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution Side */}
              <div className="bg-white p-6 rounded-xl border-l-4 border-emerald-600 shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {item.solution}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {item.solutionDetail}
                    </p>
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
