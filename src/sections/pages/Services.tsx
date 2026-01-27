import { motion } from "framer-motion";
import { Brain, BarChart3, Sparkles, Cpu, Database, CheckCircle, Award, MessageSquare, Phone, Clock, X, Users, ArrowRight, Target } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { useState } from "react";

export default function KIDatenanalysePage() {
  const [selectedOffering, setSelectedOffering] = useState<any>(null);
  const serviceCategories = [
    {
      phase: "01",
      title: "KI-Anwendungen",
      subtitle: "State-of-the-Art KI-Architekturen für komplexe Anforderungen",
      color: "from-blue-500/10 to-blue-600/5",
      services: [
        {
          icon: Database,
          title: "Retrieval-Augmented Generation (RAG)",
          description: "Moderne RAG-Architekturen für präzise, faktenbasierte KI-Antworten aus Ihren Unternehmensdaten.",
          price: "ab 40.000€",
          features: ["Vector Database", "Embedding Pipeline", "Hybrid Search", "Context Optimization"],
          details: {
            overview: "RAG kombiniert die Stärken von Retrieval-Systemen und Generativen Modellen für präzise, halluzinationsfreie Antworten basierend auf Ihren Unternehmensdaten. Wir implementieren production-ready RAG-Systeme mit Advanced Retrieval, Hybrid Search und optimiertem Context Management.",
            whatYouGet: [
              "Vector Database Setup (Pinecone, Weaviate, oder Azure AI Search) mit Sharding und Replication",
              "Hybrid Search Architecture: Semantische Suche + Keyword Search + Metadata Filtering",
              "Advanced Retrieval Strategies: Parent-Child Chunking, Contextual Compression und Reranking",
              "Embedding Pipeline mit Custom Embeddings oder Domain-Adapted Models",
              "Query Optimization: Query Rewriting, Multi-Query Generation und Hypothetical Answers",
              "Evaluation Framework mit RAGAS Metrics für Retrieval und Generation Quality"
            ],
            process: [
              "Woche 1-2: Data Assessment, Architecture Design und Vector DB Selection",
              "Woche 3-4: Data Ingestion Pipeline, Chunking Strategy und Embedding Generation",
              "Woche 5-6: Advanced Retrieval Implementation, Reranking und Context Optimization",
              "Woche 7-8: Generation Pipeline, Evaluation und Production Deployment"
            ],
            idealFor: "Unternehmen mit umfangreichen Knowledge Bases, technischer Dokumentation oder Kundendaten, die präzise KI-Antworten ohne Halluzinationen benötigen."
          }
        },
        {
          icon: Cpu,
          title: "Multi-Agent KI-Systeme",
          description: "Orchestrierung autonomer KI-Agenten für komplexe, mehrstufige Workflows und Entscheidungen.",
          price: "ab 50.000€",
          features: ["Agent Orchestration", "Tool Integration", "State Management", "Workflow Automation"],
          details: {
            overview: "Multi-Agent-Systeme ermöglichen KI-Lösungen für komplexe Aufgaben, die mehrere Schritte, Tools und Entscheidungen erfordern. Wir implementieren orchestrierte Agent-Systeme mit AutoGen, CrewAI oder LangGraph, die autonom komplexe Workflows abarbeiten.",
            whatYouGet: [
              "Multi-Agent Architecture Design mit Rollen-Spezialisierung und Koordination",
              "Agent Orchestration mit LangGraph, AutoGen oder Custom Agent Framework",
              "Tool Integration: APIs, Datenbanken, Search, Code Execution und Custom Tools",
              "State Management und Memory für kontextbasierte, mehrstufige Workflows",
              "Human-in-the-Loop Interfaces für kritische Entscheidungen und Approval Gates",
              "Monitoring und Observability für Agent Actions, Tool Calls und Decision Paths"
            ],
            process: [
              "Woche 1-2: Workflow Analysis, Agent Role Definition und Architecture Design",
              "Woche 3-6: Agent Implementation, Tool Integration und Orchestration Logic",
              "Woche 7-8: Testing mit Complex Scenarios, Error Handling und Recovery",
              "Woche 9-10: Production Deployment, Monitoring Setup und Team Training"
            ],
            idealFor: "Unternehmen mit komplexen, mehrstufigen Prozessen (Research, Analysis, Planning) die autonome Automatisierung und intelligente Entscheidungsfindung benötigen."
          }
        },
        {
          icon: Cpu,
          title: "KI Agent Pilotprojekt",
          description: "Entwicklung autonomer KI-Agenten zur Automatisierung komplexer Prozessketten.",
          price: "ab 25.000€",
          features: ["Agent Development", "Process Automation", "Tool Integration", "Validation"]
        }
      ]
    },
    {
      phase: "02",
      title: "KI-Lösungen & Plattformen",
      subtitle: "Enterprise-ready KI-Systeme für Ihre Geschäftsprozesse",
      color: "from-purple-500/10 to-purple-600/5",
      services: [
        {
          icon: MessageSquare,
          title: "Firmeninterner KI-Chatbot",
          description: "DSGVO-konformer Enterprise-Chatbot mit tiefem Verständnis Ihrer Dokumente und Daten.",
          price: "ab 30.000€",
          features: ["Secure Deployment", "Document Understanding", "Context Awareness", "Integration APIs"]
        },
        {
          icon: Brain,
          title: "Azure AI Foundry Setup",
          description: "Aufbau einer sicheren, skalierbaren und compliance-konformen KI-Plattform auf Azure.",
          price: "ab 30.000€",
          features: ["Platform Setup", "Security Config", "MLOps Pipeline", "Governance"]
        },
        {
          icon: BarChart3,
          title: "Controlling Cockpit",
          description: "Vollautomatisierte tagesaktuelle KPIs und Power BI Dashboards in wenigen Wochen.",
          price: "ab 50.000€",
          features: ["Automated KPIs", "Real-time Dashboards", "Self-Service BI", "Mobile Access"]
        }
      ]
    },
    {
      phase: "03",
      title: "KI-Operations & Support",
      subtitle: "Kontinuierlicher Betrieb für nachhaltige Wettbewerbsvorteile",
      color: "from-green-500/10 to-green-600/5",
      services: [
        {
          icon: Phone,
          title: "KI Support & Wartung (24/7)",
          description: "Professioneller 24/7 Support für Ihre produktiven KI-Systeme mit SLA-Garantien.",
          price: "ab 5.000€/Monat",
          features: ["24/7 Monitoring", "Incident Response", "Performance Optimization", "Continuous Improvement"],
          details: {
            overview: "Produktive KI-Systeme brauchen kontinuierliche Überwachung, schnelle Incident Response und proaktive Optimierung. Unser Managed Service bietet 24/7 Support mit SLA-Garantien, damit Ihre KI-Systeme zuverlässig laufen und sich kontinuierlich verbessern.",
            whatYouGet: [
              "24/7 System Monitoring mit automatischen Alerts für Anomalien und Incidents",
              "SLA-garantierte Response Times: 15min für P1, 1h für P2, 4h für P3 Incidents",
              "Incident Management mit Root Cause Analysis und Preventive Measures",
              "Performance Optimization: Regelmäßiges Tuning von Modellen, Infrastruktur und Costs",
              "Monatliche Health Reports mit Uptime, Performance Metrics und Optimization Recommendations",
              "Continuous Improvement: Proaktive Identifikation von Verbesserungspotentialen"
            ],
            process: [
              "Onboarding (2 Wochen): System Assessment, Runbook Development und Alert Setup",
              "Continuous Operations: Monitoring, Incident Response und Performance Management",
              "Monthly Business Reviews: Health Reports, Optimization Planning und Roadmap",
              "Quarterly Deep Dives: Architecture Reviews und Strategic Improvements"
            ],
            idealFor: "Unternehmen mit kritischen, produktiven KI-Systemen, die maximale Uptime, schnelle Problem-Resolution und kontinuierliche Optimierung benötigen."
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-brand-primary/10 rounded-full">
              <span className="text-brand-primary font-semibold text-sm">KI & Datenanalyse</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Künstliche Intelligenz für <span className="text-brand-primary">Ihr Business</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Nutzen Sie die Kraft der Künstlichen Intelligenz für Ihr Unternehmen. 
              Wir entwickeln maßgeschneiderte KI-Lösungen und verwandeln Ihre Daten in wertvolle Insights, 
              die echte Wettbewerbsvorteile schaffen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                KI-Potenzial analysieren
              </Button>
              <Button size="lg" variant="outline">
                Leistungen ansehen
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, catIdx) => (
        <section key={category.phase} className={`py-20 px-4 ${catIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl font-bold text-brand-primary/20">{category.phase}</span>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{category.title}</h2>
                  <p className="text-lg text-slate-600 mt-1">{category.subtitle}</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => (service as any).details && setSelectedOffering(service)}
                    className={`group relative ${(service as any).details ? 'cursor-pointer' : ''}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                    <div className="relative h-full p-6 bg-white rounded-2xl border-2 border-slate-100 group-hover:border-brand-primary/30 transition-all duration-300 shadow-lg group-hover:shadow-xl flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="px-3 py-1.5 bg-slate-900 rounded-lg shrink-0">
                          <span className="text-sm font-bold text-white whitespace-nowrap">{service.price}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-primary transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-600 text-sm mb-4 flex-grow">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-1.5 pt-4 border-t border-slate-100 mb-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start text-xs text-slate-600">
                            <CheckCircle className="w-3 h-3 text-brand-primary mr-1.5 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {(service as any).details && (
                        <div className="mt-auto flex items-center gap-2 text-brand-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <span className="text-sm font-semibold">Mehr erfahren</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Modal */}
      {selectedOffering && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full my-8 relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedOffering(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>

            <div className="p-8 md:p-12 max-h-[85vh] overflow-y-auto">
              {/* Header */}
              <div className="mb-8">
                <div className="inline-block px-4 py-2 bg-brand-primary/10 rounded-full mb-4">
                  <span className="text-brand-primary font-bold text-2xl">{selectedOffering.price}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {selectedOffering.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {selectedOffering.description}
                </p>
                <div className="flex items-center gap-4 mt-4 text-sm text-slate-500">
                  {selectedOffering.duration && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{selectedOffering.duration}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Overview */}
              {selectedOffering.details?.overview && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-brand-primary" />
                    Überblick
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedOffering.details.overview}
                  </p>
                </div>
              )}

              {/* What You Get */}
              {selectedOffering.details?.whatYouGet && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-accent" />
                    Was Sie bekommen
                  </h3>
                  <div className="space-y-3">
                    {selectedOffering.details.whatYouGet.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                        <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-brand-primary text-sm font-bold">{idx + 1}</span>
                        </div>
                        <p className="text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Process */}
              {selectedOffering.details?.process && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-brand-primary" />
                    Unser Vorgehen
                  </h3>
                  <div className="space-y-3">
                    {selectedOffering.details.process.map((step: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">{idx + 1}</span>
                        </div>
                        <p className="text-slate-700 pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ideal For */}
              {selectedOffering.details?.idealFor && (
                <div className="mb-8 p-6 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 rounded-2xl border-2 border-brand-primary/10">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-brand-primary" />
                    Ideal für
                  </h3>
                  <p className="text-slate-700">{selectedOffering.details.idealFor}</p>
                </div>
              )}

              {/* Deliverables */}
              {selectedOffering.features && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-brand-accent" />
                    Lieferumfang
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedOffering.features.map((item: string) => (
                      <div key={item} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-gradient-to-r from-brand-primary to-brand-accent"
                >
                  Jetzt anfragen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="flex-1"
                  onClick={() => setSelectedOffering(null)}
                >
                  Zurück zur Übersicht
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-brand-primary to-brand-primary/90">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bereit für intelligente Lösungen?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Lassen Sie uns gemeinsam herausfinden, welche KI-Potenziale in Ihrem Unternehmen stecken.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-brand-primary hover:bg-slate-50">
              Kostenloses KI-Assessment buchen
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
