import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";

export default function CareersPage() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Werde Teil unseres Teams
          </h1>
          <p className="text-xl text-slate-600">
            Hilf uns dabei, Unternehmen mit KI und Automatisierung zu transformieren
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {[
            {
              title: "KI Spezialist",
              location: "Berlin, Deutschland",
              type: "Vollzeit",
              description: "Entwerfe und implementiere hochmoderne KI-Lösungen",
            },
            {
              title: "Prozessberater",
              location: "Remote",
              type: "Vollzeit",
              description: "Hilf Kunden, ihre Geschäftsprozesse zu optimieren",
            },
            {
              title: "Full Stack Entwickler",
              location: "Berlin, Deutschland",
              type: "Vollzeit",
              description: "Entwickle skalierbare Automatisierungsplattformen",
            },
            {
              title: "Business Analyst",
              location: "Remote",
              type: "Teilzeit",
              description: "Analysiere Kundenbedürfnisse und empfehle Lösungen",
            },
          ].map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:border-brand-primary transition-colors">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                <p className="text-sm text-slate-600 mb-1">{job.location}</p>
                <p className="text-sm font-medium text-brand-primary">{job.type}</p>
              </div>
              <p className="text-slate-600 mb-4">{job.description}</p>
              <Button href="#" variant="brand" className="w-full md:w-auto">
                Jetzt bewerben
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-primary/10 to-slate-50 p-8 rounded-lg border border-brand-primary/20 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Deine Position nicht dabei?</h2>
          <p className="text-slate-600 mb-6">
            Wir sind immer auf der Suche nach talentierten Menschen. Schreib uns deine CV und lass uns über deine Karriereziele sprechen.
          </p>
          <Button href="mailto:careers@boedefuelling.com" variant="brand">
            Kontakt aufnehmen
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
