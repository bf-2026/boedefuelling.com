import { motion } from "framer-motion";
import { Workflow, Bot, Zap, Network, FileText, Users, Clock, CheckCircle, Settings, Layers, GitBranch, Shield, Boxes, Rocket, Target, BarChart3, Lightbulb, MessageSquare, ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "../../components/ui/Button";

export default function EnterpriseAIWorkflowPage() {
  const solutions = [
    {
      category: "Workflow-Strategie & Beratung",
      icon: Lightbulb,
      gradient: "from-blue-600 via-blue-500 to-cyan-400",
      offerings: [
        {
          title: "Workflow Readiness Assessment",
          description: "Umfassende Analyse Ihrer Prozesse zur Identifikation von Automatisierungspotenzialen",
          price: "3.000€",
          duration: "1 Woche",
          deliverables: ["Process Mining", "Bottleneck-Analyse", "ROI-Kalkulation", "Quick Win Identifikation"]
        },
        {
          title: "Prozessautomatisierung Workshop",
          description: "Praxisnaher Workshop zu modernen Workflow-Automatisierungen und Best Practices",
          price: "2.500€",
          duration: "2 Tage",
          deliverables: ["Use Case Workshop", "Tool-Evaluation", "Architektur-Design", "Roadmap Development"]
        },
        {
          title: "KI-Agenten Beratung",
          description: "Strategische Beratung zum Einsatz autonomer KI-Agenten in Ihren Prozessen",
          price: "4.000€",
          duration: "1 Woche",
          deliverables: ["Agent Architecture", "Integration Planning", "Governance Framework", "Security Konzept"]
        }
      ]
    },
    {
      category: "Workflow-Foundations & Platform",
      icon: Workflow,
      gradient: "from-purple-600 via-purple-500 to-pink-400",
      offerings: [
        {
          title: "Power Automate Setup & Integration",
          description: "Professionelle Einrichtung Ihrer Microsoft Power Automate Umgebung",
          price: "12.000€",
          duration: "3 Wochen",
          deliverables: ["Environment Setup", "Connector Configuration", "Template Library", "Governance Policies"]
        },
        {
          title: "SharePoint Workflow Integration",
          description: "Nahtlose Integration automatisierter Workflows in Ihre SharePoint-Umgebung",
          price: "18.000€",
          duration: "4 Wochen",
          deliverables: ["Workflow Design", "SharePoint Integration", "Approval Processes", "User Training"]
        },
        {
          title: "Document Processing Platform",
          description: "KI-gestützte Dokumentenverarbeitung mit OCR und intelligenter Klassifizierung",
          price: "25.000€",
          duration: "5-6 Wochen",
          deliverables: ["OCR Setup", "Document Classification", "Data Extraction", "Workflow Integration"]
        }
      ]
    },
    {
      category: "End-to-End Automatisierung",
      icon: Zap,
      gradient: "from-orange-600 via-orange-500 to-amber-400",
      offerings: [
        {
          title: "Rechnungsverarbeitung Automatisierung",
          description: "Vollautomatische Rechnungserkennung, -prüfung und -buchung",
          price: "28.000€",
          duration: "6 Wochen",
          deliverables: ["Invoice OCR", "Validation Rules", "ERP Integration", "Exception Handling"]
        },
        {
          title: "Employee Onboarding Workflow",
          description: "Automatisierter End-to-End Prozess für neue Mitarbeiter",
          price: "32.000€",
          duration: "6-8 Wochen",
          deliverables: ["HR System Integration", "Document Generation", "Approval Workflows", "Task Automation"]
        },
        {
          title: "Contract Lifecycle Management",
          description: "Intelligentes Vertragsmanagement von Erstellung bis Archivierung",
          price: "45.000€",
          duration: "8-10 Wochen",
          deliverables: ["Contract Templates", "Approval Workflows", "E-Signature", "Compliance Checks"]
        },
        {
          title: "Order-to-Cash Automation",
          description: "Durchgängige Automatisierung vom Auftrag bis zur Zahlung",
          price: "55.000€",
          duration: "10-12 Wochen",
          deliverables: ["Order Processing", "Invoice Generation", "Payment Tracking", "Dunning Process"]
        }
      ]
    },
    {
      category: "KI-Agenten & Advanced Workflows",
      icon: Bot,
      gradient: "from-green-600 via-green-500 to-emerald-400",
      offerings: [
        {
          title: "KI-Agenten Suite",
          description: "Autonome KI-Agenten für komplexe Geschäftsprozesse und Entscheidungen",
          price: "65.000€",
          duration: "10-12 Wochen",
          deliverables: ["Agent Development", "Multi-Agent System", "Tool Integration", "Monitoring Dashboard"]
        },
        {
          title: "Enterprise Workflow Platform",
          description: "Zentrale Workflow-Plattform mit KI-Integration und Process Mining",
          price: "120.000€",
          duration: "12-16 Wochen",
          deliverables: ["Platform Setup", "Process Mining", "AI Integration", "Analytics Dashboard"]
        },
        {
          title: "Hyperautomation Initiative",
          description: "Unternehmensweite Automatisierungsstrategie mit RPA, KI und Analytics",
          price: "95.000€",
          duration: "12-14 Wochen",
          deliverables: ["Automation Strategy", "RPA Implementation", "AI Workflows", "Change Management"]
        }
      ]
    },
    {
      category: "Managed Workflow Services",
      icon: Shield,
      gradient: "from-indigo-600 via-indigo-500 to-blue-400",
      offerings: [
        {
          title: "Workflow Operations Managed Service",
          description: "24/7 Betrieb, Wartung und Optimierung Ihrer Workflow-Infrastruktur",
          price: "8.000€/Monat",
          duration: "Ongoing",
          deliverables: ["24/7 Monitoring", "Incident Response", "Performance Optimization", "Monthly Reports"]
        },
        {
          title: "Workflow Governance & Support",
          description: "Kontinuierliche Governance, Training und Support für Ihre Workflows",
          price: "6.500€/Monat",
          duration: "Flexibel",
          deliverables: ["Governance Framework", "User Support", "Training Sessions", "Best Practice Updates"]
        },
        {
          title: "Enterprise Support Package",
          description: "Dedizierter Workflow Architect und Priority Support",
          price: "Auf Anfrage",
          duration: "Flexibel",
          deliverables: ["Dedicated Support", "Architecture Reviews", "Custom SLA", "Quarterly Strategy"]
        }
      ]
    }
  ];

  const benefits = [
    { icon: Target, title: "80% schnellere Prozesse", description: "Durch intelligente Automation" },
    { icon: TrendingUp, title: "45% Kostenreduktion", description: "Bei manuellen Tätigkeiten" },
    { icon: Zap, title: "99.5% Fehlerfreiheit", description: "Automatisierte Qualitätssicherung" },
    { icon: Shield, title: "Audit-ready", description: "Vollständige Compliance-Dokumentation" }
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
              <span className="text-brand-primary font-semibold text-sm">Enterprise AI Workflow System</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900">
              Intelligente Workflows{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                für das moderne Unternehmen
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Revolutionieren Sie Ihre Geschäftsprozesse mit unserem Enterprise AI Workflow System. 
              Automatisieren Sie komplexe Aufgaben und lassen Sie KI-Agenten für Sie arbeiten.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-primary to-brand-accent hover:shadow-xl hover:shadow-brand-primary/20 transition-all duration-300"
              >
                Live-Demo anfragen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-brand-primary/20 hover:border-brand-primary/40 hover:bg-brand-primary/5"
              >
                Angebote ansehen
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
              Bereit für intelligente Workflows?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Vereinbaren Sie eine Live-Demo und sehen Sie das System in Aktion.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-primary hover:bg-slate-50 shadow-2xl text-lg px-8"
            >
              Jetzt Demo anfragen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>100% unverbindlich</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>Keine Vertragsbindung</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>Schnelle ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

