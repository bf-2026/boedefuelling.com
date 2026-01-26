import { motion } from "framer-motion";
import { Brain, BarChart3, Sparkles, Cpu, Database, LineChart, CheckCircle, Lightbulb, Award, FileSearch, Shield, Layers, MessageSquare, Phone, Eye, Clock, Server, Wrench, ArrowRight, Target, TrendingUp, Zap } from "lucide-react";
import { Button } from "../../components/ui/Button";

export default function KIDatenanalysePage() {
  const solutions = [
    {
      category: "KI-Strategie & Consulting",
      icon: Lightbulb,
      gradient: "from-blue-600 via-blue-500 to-cyan-400",
      offerings: [
        {
          title: "Data & AI Journey Workshop",
          description: "Entwickeln Sie fundierte Zukunftsstrategien für Ihre Daten- und KI-Landschaft",
          price: "2.000€",
          duration: "2 Tage",
          deliverables: ["Strategische Planung", "Use Case Identifikation", "Roadmap Development", "Stakeholder Alignment"]
        },
        {
          title: "AI Readiness Assessment",
          description: "Umfassende Analyse zur optimalen KI-Implementierung in Ihrem Unternehmen",
          price: "2.000€",
          duration: "1 Woche",
          deliverables: ["Reifegradanalyse", "Gap Analysis", "Quick Wins", "Implementierungsplan"]
        },
        {
          title: "Azure KI Architektur Workshop",
          description: "Azure KI-Dienste effektiv für Ihre Unternehmensprozesse einsetzen",
          price: "3.000€",
          duration: "3 Tage",
          deliverables: ["Azure AI Services Overview", "Architektur-Design", "Best Practices", "Hands-on Labs"]
        }
      ]
    },
    {
      category: "KI-Plattformen & Infrastruktur",
      icon: Database,
      gradient: "from-purple-600 via-purple-500 to-pink-400",
      offerings: [
        {
          title: "6-Wochen GenAI Pilotprojekt",
          description: "Strukturiertes Pilotprojekt zur Validierung generativer KI in Ihrem Unternehmen",
          price: "30.000€",
          duration: "6 Wochen",
          deliverables: ["Use Case Validation", "Prototyping", "ROI Evaluation", "Go/No-Go Decision"]
        },
        {
          title: "Vektordatenbank für RAG & Search",
          description: "Moderne Vektordatenbanken für effiziente KI-Suche und RAG-Architekturen",
          price: "48.000€",
          duration: "6-8 Wochen",
          deliverables: ["Vector DB Setup", "RAG Implementation", "Hybrid Search", "Performance Tuning"]
        },
        {
          title: "Azure AI Platform Setup",
          description: "Production-ready KI-Infrastruktur auf Azure mit MLOps und Governance",
          price: "35.000€",
          duration: "4-6 Wochen",
          deliverables: ["Azure AI Setup", "MLOps Pipeline", "Model Registry", "Monitoring Stack"]
        },
        {
          title: "Private AI Infrastruktur",
          description: "On-Premise KI-Infrastruktur mit GPU-Servern für maximale Datensicherheit",
          price: "75.000€",
          duration: "8-10 Wochen",
          deliverables: ["Hardware Setup", "GPU Cluster", "Model Deployment", "Security Framework"]
        }
      ]
    },
    {
      category: "KI-Anwendungen & Solutions",
      icon: Brain,
      gradient: "from-orange-600 via-orange-500 to-amber-400",
      offerings: [
        {
          title: "Firmeninterner KI-Chatbot (DSGVO)",
          description: "Sicherer RAG-basierter Chatbot für interne Wissensdatenbanken",
          price: "28.000€",
          duration: "4-6 Wochen",
          deliverables: ["RAG Architecture", "DSGVO Compliance", "User Interface", "Integration"]
        },
        {
          title: "Document Intelligence OCR",
          description: "Intelligente Dokumentenverarbeitung mit KI-gestützter Texterkennung",
          price: "25.000€",
          duration: "4 Wochen",
          deliverables: ["OCR Integration", "Data Extraction", "Validation Workflows", "API Development"]
        },
        {
          title: "Computer Vision Qualitätskontrolle",
          description: "Automatisierte Qualitätsprüfung mit Deep Learning und Bildanalyse",
          price: "45.000€",
          duration: "8-10 Wochen",
          deliverables: ["Model Training", "Camera Integration", "Real-time Detection", "Reporting Dashboard"]
        },
        {
          title: "Custom AI Models & Training",
          description: "Maßgeschneiderte Machine Learning Modelle für Ihre spezifischen Anforderungen",
          price: "50.000€",
          duration: "8-12 Wochen",
          deliverables: ["Data Analysis", "Model Development", "Training & Optimization", "Deployment"]
        }
      ]
    },
    {
      category: "Data Analytics & BI",
      icon: BarChart3,
      gradient: "from-green-600 via-green-500 to-emerald-400",
      offerings: [
        {
          title: "Power BI Controlling-Cockpit",
          description: "Vollautomatisiertes Finanz-Cockpit mit Real-time Dashboards",
          price: "50.000€",
          duration: "6-8 Wochen",
          deliverables: ["Automatisierung", "Power BI Dashboards", "Real-time Updates", "Custom KPIs"]
        },
        {
          title: "Microsoft Fabric Datenplattform",
          description: "Moderne Data Lakehouse Architektur mit Fabric und OneLake",
          price: "65.000€",
          duration: "8-10 Wochen",
          deliverables: ["Fabric Setup", "Data Pipeline", "Analytics Workspace", "Governance"]
        },
        {
          title: "SAP KI-Chatbot Integration",
          description: "Self-Service SAP-Reporting durch Natural Language Interface",
          price: "35.000€",
          duration: "6 Wochen",
          deliverables: ["SAP Integration", "Natural Language", "Custom Reports", "Training"]
        }
      ]
    },
    {
      category: "KI Managed Services",
      icon: Shield,
      gradient: "from-indigo-600 via-indigo-500 to-blue-400",
      offerings: [
        {
          title: "KI-Plattform Managed Service",
          description: "24/7 Betrieb und Wartung Ihrer KI-Infrastruktur und Modelle",
          price: "9.500€/Monat",
          duration: "Ongoing",
          deliverables: ["24/7 Monitoring", "Model Retraining", "Performance Optimization", "Security Updates"]
        },
        {
          title: "MLOps as a Service",
          description: "Vollständiges MLOps-Management für continuous training und deployment",
          price: "12.000€/Monat",
          duration: "Ongoing",
          deliverables: ["Pipeline Management", "Model Versioning", "A/B Testing", "Incident Response"]
        },
        {
          title: "KI-Beratung Retainer",
          description: "Kontinuierliche strategische Beratung für Ihre KI-Initiative",
          price: "8.000€/Monat",
          duration: "Flexibel",
          deliverables: ["Strategy Sessions", "Architecture Reviews", "Use Case Workshops", "Priority Support"]
        }
      ]
    }
  ];

  const benefits = [
    { icon: Target, title: "95% Genauigkeit", description: "State-of-the-art KI-Modelle" },
    { icon: TrendingUp, title: "60% Zeitersparnis", description: "Durch intelligente Automation" },
    { icon: Zap, title: "10x schnellere Insights", description: "Mit KI-gestützter Analyse" },
    { icon: Shield, title: "DSGVO-konform", description: "Datenschutz by Design" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-br from-brand-primary/5 via-white to-brand-accent/5">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-0 left-10 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl opacity-60 animate-blob" />
          <div className="absolute top-40 right-10 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl opacity-40 animate-blob animation-delay-4000" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 backdrop-blur-sm rounded-full border border-brand-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-brand-primary" />
              <span className="text-brand-primary font-semibold text-sm">KI & Datenanalyse</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900">
              Künstliche Intelligenz{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                für Ihr Business
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Nutzen Sie die Kraft der Künstlichen Intelligenz für Ihr Unternehmen. 
              Wir entwickeln maßgeschneiderte KI-Lösungen und verwandeln Ihre Daten in wertvolle Insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-primary to-brand-accent hover:shadow-xl hover:shadow-brand-primary/20 transition-all duration-300"
              >
                KI-Potenzial analysieren
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-brand-primary/20 hover:border-brand-primary/40 hover:bg-brand-primary/5"
              >
                Leistungen ansehen
              </Button>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
          >
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative p-6 bg-white rounded-2xl border-2 border-slate-100 group-hover:border-brand-primary/30 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <Icon className="w-8 h-8 text-brand-primary mb-3" />
                    <div className="text-2xl font-bold text-slate-900 mb-1">{benefit.title}</div>
                    <div className="text-sm text-slate-600">{benefit.description}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Solutions Sections */}
      {solutions.map((solution, solutionIdx) => {
        const Icon = solution.icon;
        return (
          <section 
            key={solution.category} 
            className={`py-24 px-4 relative ${solutionIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-br ${solution.gradient} rounded-2xl shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">{solution.category}</h2>
                    <div className={`h-1 w-24 bg-gradient-to-r ${solution.gradient} rounded-full mt-3`} />
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {solution.offerings.map((offering, idx) => (
                  <motion.div
                    key={offering.title}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${solution.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />
                    
                    <div className="relative h-full p-8 bg-white rounded-3xl border-2 border-slate-100 group-hover:border-transparent transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors duration-300">
                          {offering.title}
                        </h3>
                        <div className="flex flex-col items-end gap-1">
                          <div className={`px-4 py-2 bg-gradient-to-r ${solution.gradient} rounded-xl shadow-md`}>
                            <span className="text-white font-bold text-lg">{offering.price}</span>
                          </div>
                          <span className="text-xs text-slate-500">{offering.duration}</span>
                        </div>
                      </div>

                      <p className="text-slate-600 text-base mb-6 leading-relaxed">
                        {offering.description}
                      </p>

                      <div className="space-y-2 pt-6 border-t border-slate-200">
                        <div className="text-sm font-semibold text-slate-500 mb-3">Lieferumfang:</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {offering.deliverables.map((deliverable) => (
                            <div key={deliverable} className="flex items-center gap-2 text-sm text-slate-700">
                              <CheckCircle className="w-4 h-4 text-brand-accent flex-shrink-0" />
                              <span>{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex items-center gap-2 text-brand-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-sm font-semibold">Mehr erfahren</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-brand-accent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-12 h-12 text-white/90 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bereit für KI-Innovation?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre KI-Strategie entwickeln und umsetzen.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-primary hover:bg-slate-50 shadow-2xl text-lg px-8"
            >
              Jetzt kostenlos beraten lassen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>100% unverbindlich</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>DSGVO-konform</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>Individuelle Lösungen</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
