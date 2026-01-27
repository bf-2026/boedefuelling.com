import { Button } from "../components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Zap, Server, Brain, BarChart3, Workflow, Bot, GitBranch, CheckCircle2, Lightbulb, Cog, Rocket } from "lucide-react";

const words = [
  "Effizienz steigern",
  "Kosten senken",
  "Wettbewerbsvorteil generieren",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      category: "Schnellstart Angebote",
      icon: Zap,
      items: [
        "Cloud Consulting",
        "Azure Pricing Assessment",
        "IaC Infrastructure as Code Workshop",
        "Cloud Datenbanken",
        "Docker Beratung",
        "Windows Virtual Desktop",
        "IT-Projekte",
      ],
    },
    {
      category: "Azure Administration",
      icon: Server,
      items: [
        "Crossplane Kubernetes",
        "Souveräne/Private Cloud Architekturen",
        "DevOps Engineering",
        "Internal Developer Platform",
      ],
    },
  ];

  const aiServices = [
    {
      category: "Schnellstart Angebote",
      icon: Brain,
      items: [
        "6-Wochen-Pilotprojekt Generative AI",
        "Firmeninterner Chatbot (DSGVO)",
        "Document Intelligence Starter (OCR + AI)",
        "Azure AI Plattform aufsetzen",
        "Private AI Infrastruktur",
      ],
    },
    {
      category: "IT-Projekte",
      icon: BarChart3,
      items: [
        "Controlling-Cockpit Sprint (Power BI)",
        "Datenplattform Plus (Microsoft Fabric)",
        "Chatbot mit Open WebUI",
        "Datenintegration für AI-Vektordatenbanken",
        "Computervision Qualitätskontrolle",
      ],
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-900/5 via-white to-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 left-10 w-96 h-96 bg-brand-primary/15 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob" />
        <div className="absolute top-40 right-10 w-80 h-80 bg-brand-accent/15 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl opacity-40 mix-blend-multiply animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full text-sm font-medium text-brand-primary">
            Für Unternehmen, die KI richtig nutzen
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight"
        >
          Mit KI{" "}
          <span className="block h-[1.3em] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="block bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent pb-2"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
          Wir helfen Unternehmen aus der Industrie und anderen Branchen, ihre Prozesse und ihr Wissen
          in KI-gestützte Systeme zu verwandeln – Lösungen, die nicht
          experimentell, sondern direkt messbar Effizienz erhöhen und Kosten
          senken.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          <Button
            href="https://cal.com/lucas-fuelling-ytra7k/30min"
            variant="brand"
            size="lg"
            className="rounded-full text-base font-semibold px-8 shadow-xl shadow-brand-primary/20">
            Kostenfreie Use-Case Analyse buchen
          </Button>
        </motion.div>

        {/* Solutions Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 max-w-7xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-sm font-semibold text-brand-primary mb-4 uppercase tracking-wide">
                Ihr Partner für Effizienz und Digitalisierung
              </motion.p>
              
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Unsere Lösungen für Ihr Unternehmen
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-lg text-slate-600 leading-relaxed">
                Wir bieten spezialisierte Lösungen, die Ihre Unternehmen digitalisieren, Ihre Prozesse optimieren und Ihr Team spürbar entlasten. Entdecken Sie, wie wir gemeinsam den Weg zu mehr Effizienz und Struktur gestalten.
              </motion.p>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800"
                alt="Glückliches Team arbeitet gemeinsam an digitalen Projekten"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Cloud Services & Automation
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Professionelle Cloud-Lösungen für moderne Unternehmen
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow-sm border border-slate-100">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" 
                  alt="Azure" 
                  className="w-8 h-8"
                />
                <span className="text-slate-700 font-semibold">Azure</span>
              </div>
              
              <span className="text-slate-300 text-2xl">•</span>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow-sm border border-slate-100">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" 
                  alt="AWS" 
                  className="w-8 h-8"
                />
                <span className="text-slate-700 font-semibold">AWS</span>
              </div>
              
              <span className="text-slate-300 text-2xl">•</span>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow-sm border border-slate-100">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" 
                  alt="Google Cloud" 
                  className="w-8 h-8"
                />
                <span className="text-slate-700 font-semibold">GCP</span>
              </div>
              
              <span className="text-slate-300 text-2xl">•</span>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow-sm border border-slate-100">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" 
                  alt="Kubernetes" 
                  className="w-8 h-8"
                />
                <span className="text-slate-700 font-semibold">Kubernetes</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                  className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
                  
                  <div className="relative h-full p-6 bg-white/90 backdrop-blur-lg rounded-2xl border-2 border-slate-100 group-hover:border-brand-primary/50 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <div className="mb-4 p-3 bg-gradient-to-br from-brand-primary/15 to-brand-accent/10 w-fit rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-brand-primary transition-colors">
                      {service.category}
                    </h3>
                    
                    <ul className="space-y-2">
                      {service.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="text-brand-primary mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* AI Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              KI & Datenanalyse
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Innovative KI-Lösungen für datengetriebene Entscheidungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + idx * 0.1 }}
                  className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
                  
                  <div className="relative h-full p-6 bg-white/90 backdrop-blur-lg rounded-2xl border-2 border-slate-100 group-hover:border-brand-accent/50 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <div className="mb-4 p-3 bg-gradient-to-br from-brand-accent/15 to-brand-primary/10 w-fit rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-brand-accent" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-brand-accent transition-colors">
                      {service.category}
                    </h3>
                    
                    <ul className="space-y-2">
                      {service.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="text-brand-accent mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Intro Text for Enterprise AI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="mt-20 max-w-4xl mx-auto text-center">
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
            Viele Unternehmen bleiben bei Pilotprojekten stehen – wir bringen messbare Ergebnisse. Unser Fokus: Performance-Verbesserung, nicht Technik zum Selbstzweck.
          </motion.p>
        </motion.div>

        {/* Enterprise AI Workflow System */}
        <motion.div
          id="enterprise-ai-workflow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 max-w-6xl mx-auto">
          
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
                  Komplette Prozessautomatisierung mit intelligenten KI-Agenten für nahtlose Workflows
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
                      Wir automatisieren komplette Prozessketten, nicht nur einzelne Aufgaben.
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
                      Nahtlose Übergabe von Aufgaben zwischen KI und Mitarbeitern über Abteilungen hinweg.
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
                      Spezialisierte KI-Helfer für spezifische operative Aufgaben und Exzellenz.
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
                  href="https://cal.com/lucas-fuelling-ytra7k/30min"
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

      {/* Unser Prozess Section - Professional AI Pipeline */}
      <div className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(226,232,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>

        {/* Accent Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/5 blur-3xl rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-brand-primary/10 border border-brand-primary/30 rounded-lg text-sm font-semibold text-brand-primary">
              🔄 Unser Prozess
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 max-w-4xl mx-auto">
              Von der Idee zur <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">produktiven Lösung</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 max-w-3xl mx-auto mb-6">
              Ein strukturierter, bewährter Prozess, der Ihr KI-Projekt sicher und effizient zum Erfolg führt.
            </motion.p>
          </div>

          {/* Process Pipeline - Wave Layout */}
          <div className="relative pt-16 pb-8">
            {/* SVG Wave Connection Line - Desktop Only */}
            <svg className="hidden lg:block absolute top-0 left-0 right-0 w-full h-full" style={{ pointerEvents: 'none' }} viewBox="0 0 1200 320" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                  <stop offset="33%" stopColor="#14B8A6" stopOpacity="0.6" />
                  <stop offset="66%" stopColor="#3B82F6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.5" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Beautiful flowing wave curve */}
              <path
                d="M 80 240 C 200 220, 280 180, 380 160 C 480 140, 560 120, 680 100 C 780 85, 860 75, 1000 60 C 1080 50, 1120 45, 1140 40"
                stroke="url(#waveGrad)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                filter="url(#glow)"
              />
              {/* Connection dots at phase positions */}
              <circle cx="80" cy="240" r="8" fill="#3B82F6" opacity="0.7"/>
              <circle cx="380" cy="160" r="8" fill="#14B8A6" opacity="0.7"/>
              <circle cx="680" cy="100" r="8" fill="#3B82F6" opacity="0.7"/>
              <circle cx="1000" cy="60" r="8" fill="#14B8A6" opacity="0.7"/>
            </svg>

            {/* Phases - Beautiful Wave Layout */}
            <div className="relative space-y-12 lg:space-y-0 lg:h-[420px]">
              {[
                {
                  number: "01",
                  title: "Strategie & Analyse",
                  description: "Wir verstehen Ihre spezifischen Anforderungen und identifizieren High-Impact KI-Einsatzpunkte in Ihren Kernprozessen.",
                  icon: <Lightbulb className="w-10 h-10" />,
                  details: "30-60 min Gespräch, konkrete Use-Case Definition",
                  color: "brand-primary",
                  position: "lg:absolute lg:left-0 lg:top-48 lg:w-64"
                },
                {
                  number: "02",
                  title: "Design & Planung",
                  description: "Maßgeschneiderte Lösung: Wir entwerfen ein System, das nahtlos in Ihre bestehende IT-Infrastruktur integriert wird.",
                  icon: <Cog className="w-10 h-10" />,
                  details: "Technische Architektur, Sicherheit & Compliance",
                  color: "brand-accent",
                  position: "lg:absolute lg:left-[28%] lg:top-32 lg:w-64"
                },
                {
                  number: "03",
                  title: "Implementierung",
                  description: "Agil und transparent: Wir bauen Ihre Lösung iterativ, mit regelmäßigen Demos und schnellem Feedback.",
                  icon: <CheckCircle2 className="w-10 h-10" />,
                  details: "Testing, Optimierung, Go-Live Vorbereitung",
                  color: "brand-primary",
                  position: "lg:absolute lg:left-[56%] lg:top-12 lg:w-64"
                },
                {
                  number: "04",
                  title: "Erfolg im Betrieb",
                  description: "Nach dem Go-Live: Kontinuierliche Unterstützung, Monitoring und proaktive Verbesserungen für langfristigen ROI.",
                  icon: <Rocket className="w-10 h-10" />,
                  details: "Support, Wartung, Performance Optimization",
                  color: "brand-accent",
                  position: "lg:absolute lg:left-[84%] lg:-top-8 lg:w-64"
                },
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative group ${phase.position}`}>

                  {/* Glow Effect on Hover */}
                  <div className="absolute -inset-2 bg-gradient-to-br rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"
                    style={{
                      background: phase.color === 'brand-primary' 
                        ? 'linear-gradient(135deg, #3B82F6, #14B8A6)' 
                        : 'linear-gradient(135deg, #14B8A6, #3B82F6)'
                    }}
                  />

                  {/* Stage Card */}
                  <div className="relative h-full bg-white rounded-2xl p-6 lg:p-8 shadow-lg border-2 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    style={{
                      borderColor: phase.color === 'brand-primary' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(20, 184, 166, 0.2)',
                      boxShadow: `0 10px 30px -10px ${phase.color === 'brand-primary' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(20, 184, 166, 0.15)'}`
                    }}>
                    
                    {/* Number Badge with Gradient Border */}
                    <div className="absolute -top-6 left-6 w-12 h-12 rounded-xl text-white flex items-center justify-center font-bold text-base shadow-xl transform group-hover:-rotate-6 transition-transform duration-300"
                      style={{
                        background: phase.color === 'brand-primary' ? 'linear-gradient(135deg, #3B82F6, #1E40AF)' : 'linear-gradient(135deg, #14B8A6, #0891B2)',
                        boxShadow: `0 8px 20px rgba(${phase.color === 'brand-primary' ? '59, 130, 246' : '20, 184, 166'}, 0.4)`
                      }}>
                      {phase.number}
                    </div>

                    {/* Icon with Pulse Animation */}
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                      style={{
                        backgroundColor: phase.color === 'brand-primary' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(20, 184, 166, 0.1)',
                        color: phase.color === 'brand-primary' ? '#3B82F6' : '#14B8A6',
                        boxShadow: `0 4px 12px ${phase.color === 'brand-primary' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(20, 184, 166, 0.2)'}`
                      }}>
                      {phase.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">
                      {phase.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {phase.description}
                    </p>

                    {/* Details */}
                    <div className="pt-4 border-t flex items-start gap-2"
                      style={{
                        borderColor: phase.color === 'brand-primary' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(20, 184, 166, 0.15)'
                      }}>
                      <span className="font-bold text-lg" style={{ color: phase.color === 'brand-primary' ? '#3B82F6' : '#14B8A6' }}>✓</span>
                      <span className="text-xs lg:text-sm text-slate-500 font-medium">
                        {phase.details}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Success Metrics - Aligned with Phases */}
          <div className="relative mt-64 space-y-8 lg:space-y-0 lg:h-24">
            {[
              { label: "Durchschnittliche Dauer", value: "4-12 Wochen", position: "lg:absolute lg:left-0 lg:w-64" },
              { label: "Erfolgsquote", value: "98%", position: "lg:absolute lg:left-[28%] lg:w-64" },
              { label: "Support", value: "24/7", position: "lg:absolute lg:left-[56%] lg:w-64" },
              { label: "ROI-Fokus", value: "Garantiert", position: "lg:absolute lg:left-[84%] lg:w-64" },
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                className={`text-center p-6 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition ${metric.position}`}>
                <div className="text-2xl font-bold text-brand-primary mb-2">{metric.value}</div>
                <div className="text-sm text-slate-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
