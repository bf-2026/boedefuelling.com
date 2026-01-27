import { motion } from "framer-motion";
import { BookOpen, Zap, Lock } from "lucide-react";
import { Button } from "../../components/ui/Button";

export default function TrainingsPage() {
  const trainings = [
    {
      icon: BookOpen,
      title: "KI Grundlagen",
      description: "Verstehen Sie die Basics: Was ist KI, wo passt es in Ihr Business, und wie starten Sie richtig?",
      duration: "3 Tage",
      target: "Alle Abteilungen",
    },
    {
      icon: Zap,
      title: "Praktische KI-Integration",
      description: "Hands-on Training: Wie Sie KI-Systeme in Ihre bestehenden Prozesse integrieren und nutzen.",
      duration: "5 Tage",
      target: "Tech & Process Teams",
    },
    {
      icon: Lock,
      title: "KI und DSGVO",
      description: "Etablieren Sie unternehmensweite KI-Governance und rechtskonforme Compliance-Rahmen für Ihre KI-Projekte.",
      duration: "1 Tag",
      target: "Legal & Compliance",
    },
  ];

  

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-slate-900/5 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-0 left-10 w-96 h-96 bg-brand-primary/15 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob" />
          <div className="absolute top-40 right-10 w-80 h-80 bg-brand-accent/15 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full text-sm font-medium text-brand-primary">
              Lernen & Wachsen
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 max-w-4xl mx-auto">
            Trainings für Ihre <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">KI-Transformation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
            Befähigen Sie Ihr Team mit dem Know-how, um KI-Projekte erfolgreich zu nutzen und zu gestalten.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <Button
              href="https://cal.com/lucas-fuelling-ytra7k/30min?overlayCalendar=true"
              variant="brand"
              size="lg"
              className="rounded-full text-base font-semibold px-8 shadow-xl shadow-brand-primary/20">
              Kostenloses Training-Beratungsgespräch
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trainings Grid */}
      <section className="py-32 px-4 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Unsere Training-Programme
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto">
              Verschiedene Programme für unterschiedliche Anforderungen und Rollen
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {trainings.map((training, index) => {
              const Icon = training.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden h-full">
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/25 to-brand-accent/25 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-accent/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

                  <div className="relative p-8 bg-white/90 backdrop-blur-lg rounded-2xl border-2 border-slate-100 group-hover:border-brand-primary/60 transition-all duration-300 h-full flex flex-col shadow-lg group-hover:shadow-2xl group-hover:shadow-brand-primary/20">
                    
                    <div className="mb-6 p-4 bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-accent/15 w-fit rounded-xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-md">
                      <Icon className="w-8 h-8 text-brand-primary group-hover:text-brand-accent transition-colors" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">
                      {training.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow text-base">
                      {training.description}
                    </p>

                    <div className="pt-6 border-t border-slate-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-primary/10 text-brand-primary text-sm font-semibold rounded-lg">
                          📅 {training.duration}
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-semibold rounded-lg">
                          👥 {training.target}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center">
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Bereit für Ihr Team-Training?
            </h2>
            
            <p className="text-lg text-slate-600 mb-8">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. Wir entwickeln ein maßgeschneidertes Training-Programm für Ihre Anforderungen.
            </p>

            <Button
              href="https://cal.com/lucas-fuelling-ytra7k/30min?overlayCalendar=true"
              variant="brand"
              size="lg"
              className="rounded-full text-base font-semibold px-8 shadow-xl shadow-brand-primary/20">
              Training buchen
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
