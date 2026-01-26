import { motion } from "framer-motion";
import { BookOpen, Users, Zap, Award, Brain, Cloud, Lock, TrendingUp, Cpu, Code } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TrainingsPage() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to hash element when page loads or hash changes
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const headerOffset = 100; // Adjust for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [location]);

  const trainings = [
    {
      icon: BookOpen,
      title: "KI Grundlagen für Unternehmen",
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
      icon: Users,
      title: "KI für Leadership & Strategy",
      description: "Strategische Perspektive: KI-Roadmaps, Change Management, und ROI-Planung für Entscheider.",
      duration: "2 Tage",
      target: "Management & C-Level",
    },
    {
      icon: Award,
      title: "Certification Program",
      description: "Umfassendes Programm mit Zertifikat: Werden Sie zum KI-Experten in Ihrem Unternehmen.",
      duration: "10 Wochen",
      target: "Hochmotivierte Teams",
    },
  ];

  const aiWorkshops = [
    {
      icon: Brain,
      title: "AI Readiness Assessment",
      description: "Evaluieren Sie die KI-Bereitschaft Ihrer Organisation und entwickeln Sie eine fundierte Implementierungsstrategie.",
      duration: "1-2 Tage",
      level: "Foundation",
    },
    {
      icon: Cloud,
      title: "Azure KI Architektur Workshop",
      description: "Entwerfen Sie skalierbare, produktionsreife KI-Lösungen auf der Azure-Plattform.",
      duration: "2-3 Tage",
      level: "Advanced",
    },
    {
      icon: Lock,
      title: "AI-Richtlinien & DSGVO-Compliance",
      description: "Etablieren Sie unternehmensweite KI-Governance und rechtskonforme Compliance-Rahmen.",
      duration: "1 Tag",
      level: "Strategic",
    },
    {
      icon: Cpu,
      title: "AI Agenten Workshop",
      description: "Entwickeln Sie autonome KI-Agenten für automatisierte Geschäftsprozesse und optimierte Workflows.",
      duration: "3 Tage",
      level: "Advanced",
    },
    {
      icon: TrendingUp,
      title: "Forschungszulage AI Projekte",
      description: "Nutzen Sie staatliche Förderungsprogramme für KI-Innovationen und optimieren Sie Ihre Investitionen.",
      duration: "2 Tage",
      level: "Strategic",
    },
  ];

  const cloudWorkshops = [
    {
      icon: TrendingUp,
      title: "Cloud Potential Assessment",
      description: "Identifizieren Sie schnell das maximale Cloud-Potential und Optimierungsmöglichkeiten Ihres Unternehmens.",
      duration: "1-2 Tage",
      level: "Foundation",
    },
    {
      icon: Code,
      title: "IaC Infrastructure as Code Workshop",
      description: "Implementieren Sie Infrastructure-as-Code für reproduzierbare, sichere und skalierbare Cloud-Deployments.",
      duration: "3 Tage",
      level: "Advanced",
    },
    {
      icon: TrendingUp,
      title: "Azure Pricing Assessment",
      description: "Führen Sie umfassende Azure-Kostenanalysen durch und identifizieren Sie Einsparungspotenziale.",
      duration: "1 Tag",
      level: "Foundation",
    },
    {
      icon: Cloud,
      title: "Azure Landing Zone Workshop",
      description: "Entwerfen Sie sichere, skalierbare Azure Landing Zones für Ihre Enterprise-Umgebung.",
      duration: "2-3 Tage",
      level: "Advanced",
    },
    {
      icon: Cpu,
      title: "Platform Engineering & DX Strategy",
      description: "Entwickeln Sie eine Platform-Engineering-Strategie zur Optimierung der Developer Experience.",
      duration: "2 Tage",
      level: "Strategic",
    },
    {
      icon: Lock,
      title: "Zero Trust für Azure & Kubernetes",
      description: "Implementieren Sie Zero-Trust-Security-Architekturen für Azure und Kubernetes.",
      duration: "2-3 Tage",
      level: "Advanced",
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
      <section id="ki-programme" className="py-32 px-4 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
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

      {/* AI Workshops & Trainings Section */}
      <section id="ki-workshops" className="py-24 px-4 bg-gradient-to-b from-white via-slate-50/40 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/15 border border-brand-primary/40 rounded-full text-sm font-semibold text-brand-primary">
                🧠 KI & Künstliche Intelligenz
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Spezialisierte KI-Trainings & Workshops
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto">
              Intensive, praxisorientierte Workshops für schnelle Implementierung und messbare Geschäftsergebnisse.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {aiWorkshops.map((item, idx) => {
              const Icon = item.icon;
              const levelColors: Record<string, string> = {
                Foundation: "bg-blue-50 text-blue-700 border-blue-200",
                Advanced: "bg-purple-50 text-purple-700 border-purple-200",
                Strategic: "bg-orange-50 text-orange-700 border-orange-200",
              };
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-accent/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500" />
                  <div className="relative h-full p-6 bg-white/90 backdrop-blur-lg rounded-2xl border-2 border-slate-100 group-hover:border-brand-primary/60 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-brand-primary/15 flex flex-col">
                    
                    <div className="mb-4 flex items-start justify-between">
                      <div className="p-3 bg-gradient-to-br from-brand-primary/15 to-brand-accent/10 rounded-lg group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                        <Icon className="w-6 h-6 text-brand-primary" />
                      </div>
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${levelColors[item.level]}`}>
                        {item.level}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm flex-grow mb-4">
                      {item.description}
                    </p>
                    
                    <div className="pt-4 border-t border-slate-200">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg">
                        ⏱️ {item.duration}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cloud & Infrastructure Workshops Section */}
      <section id="cloud-workshops" className="py-24 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-20 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/15 border border-brand-accent/40 rounded-full text-sm font-semibold text-brand-accent">
                ☁️ Cloud & Infrastructure
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Cloud & Infrastructure Workshops
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto">
              Umfassende Workshops und Bewertungen für zukunftssichere Cloud-Infrastrukturen.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cloudWorkshops.map((item, idx) => {
              const Icon = item.icon;
              const levelColors: Record<string, string> = {
                Foundation: "bg-blue-50 text-blue-700 border-blue-200",
                Advanced: "bg-purple-50 text-purple-700 border-purple-200",
                Strategic: "bg-orange-50 text-orange-700 border-orange-200",
              };
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-brand-primary/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500" />
                  <div className="relative h-full p-6 bg-white/90 backdrop-blur-lg rounded-2xl border-2 border-slate-100 group-hover:border-brand-accent/60 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-brand-accent/15 flex flex-col">
                    
                    <div className="mb-4 flex items-start justify-between">
                      <div className="p-3 bg-gradient-to-br from-brand-accent/15 to-brand-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                        <Icon className="w-6 h-6 text-brand-accent" />
                      </div>
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${levelColors[item.level]}`}>
                        {item.level}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-accent transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm flex-grow mb-4">
                      {item.description}
                    </p>
                    
                    <div className="pt-4 border-t border-slate-200">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg">
                        ⏱️ {item.duration}
                      </span>
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
