import { motion } from "framer-motion";
import { Cloud, Zap, Shield, TrendingUp, Code, Server, Lock, RefreshCw, CheckCircle, Lightbulb, Box, Database, Monitor, GitBranch, Layers, Globe, ArrowRight, Sparkles, Target, Rocket } from "lucide-react";
import { Button } from "../../components/ui/Button";

export default function CloudServicesAutomationPage() {
  const solutions = [
    {
      category: "Cloud Strategy & Consulting",
      icon: Lightbulb,
      gradient: "from-blue-600 via-blue-500 to-cyan-400",
      offerings: [
        {
          title: "Cloud Transformation Roadmap",
          description: "Strategische Planung Ihrer Cloud-Journey mit ROI-Kalkulation und Risikobewertung",
          price: "4.000€",
          duration: "2-3 Wochen",
          deliverables: ["Cloud Strategy Document", "TCO-Analyse", "Migration Roadmap", "Security Framework"]
        },
        {
          title: "Infrastructure as Code Consulting",
          description: "Terraform & Azure ARM Implementierung für reproduzierbare Infrastruktur",
          price: "1.600€",
          duration: "1 Woche",
          deliverables: ["IaC Templates", "CI/CD Integration", "Best Practices Guide", "Live Workshop"]
        },
        {
          title: "Azure Cost Optimization",
          description: "Detaillierte Kostenanalyse mit konkreten Einsparpotenzialen bis zu 40%",
          price: "4.900€",
          duration: "1-2 Wochen",
          deliverables: ["Cost Report", "Optimization Plan", "Reserved Instances Strategy", "Monitoring Setup"]
        }
      ]
    },
    {
      category: "Cloud Infrastructure & Platform",
      icon: Cloud,
      gradient: "from-purple-600 via-purple-500 to-pink-400",
      offerings: [
        {
          title: "Azure Landing Zone Enterprise Setup",
          description: "Production-ready Azure Foundation mit Multi-Subscription Governance",
          price: "35.000€",
          duration: "4-6 Wochen",
          deliverables: ["Hub-Spoke Architecture", "Identity & Access Management", "Network Design", "Policy Framework"]
        },
        {
          title: "Kubernetes Enterprise Platform",
          description: "Managed Kubernetes auf AKS, EKS oder GKE mit GitOps und Auto-Scaling",
          price: "14.900€",
          duration: "3-4 Wochen",
          deliverables: ["Cluster Setup", "GitOps Workflows", "Monitoring Stack", "Security Hardening"]
        },
        {
          title: "Multi-Cloud Orchestration",
          description: "Crossplane-basierte Kontrollebene für Azure, AWS und Google Cloud",
          price: "40.000€",
          duration: "6-8 Wochen",
          deliverables: ["Crossplane Setup", "Provider Configuration", "Resource Management", "Disaster Recovery"]
        },
        {
          title: "Private Cloud Infrastructure",
          description: "Dedizierte Cloud-Umgebung auf VMware oder OpenStack",
          price: "75.000€",
          duration: "8-12 Wochen",
          deliverables: ["Infrastructure Design", "Virtualization Platform", "Storage & Network", "Automation Tools"]
        }
      ]
    },
    {
      category: "DevOps & Automation",
      icon: Zap,
      gradient: "from-orange-600 via-orange-500 to-amber-400",
      offerings: [
        {
          title: "CI/CD Pipeline Engineering",
          description: "Azure DevOps oder GitHub Actions mit automatisierten Tests und Deployments",
          price: "15.000€",
          duration: "3-4 Wochen",
          deliverables: ["Pipeline Setup", "Automated Testing", "Release Automation", "Rollback Strategy"]
        },
        {
          title: "Container & Docker Platform",
          description: "Containerisierung Ihrer Legacy-Applikationen mit Docker und Registry",
          price: "4.800€",
          duration: "2 Wochen",
          deliverables: ["Docker Migration", "Container Registry", "Security Scanning", "Documentation"]
        },
        {
          title: "DevOps Culture Transformation",
          description: "Team-Training und Prozess-Modernisierung für DevOps Best Practices",
          price: "30.000€",
          duration: "6-8 Wochen",
          deliverables: ["Process Assessment", "Toolchain Setup", "Team Workshops", "Change Management"]
        }
      ]
    },
    {
      category: "Cloud Migration & Modernization",
      icon: Rocket,
      gradient: "from-green-600 via-green-500 to-emerald-400",
      offerings: [
        {
          title: "Database Cloud Migration",
          description: "Zero-Downtime Migration zu Azure SQL, Cosmos DB oder AWS RDS",
          price: "15.000€",
          duration: "4-6 Wochen",
          deliverables: ["Migration Strategy", "Data Transfer", "Performance Testing", "Cutover Plan"]
        },
        {
          title: "Cloud-Native Database Platform",
          description: "Managed Database Services mit Backup, High Availability und Monitoring",
          price: "3.000€",
          duration: "1 Woche",
          deliverables: ["DB Setup", "Backup Configuration", "Monitoring Dashboards", "Performance Tuning"]
        },
        {
          title: "Azure Virtual Desktop Rollout",
          description: "Cloud-Arbeitsplätze mit Multi-Session Support und Profile Management",
          price: "15.000€",
          duration: "3-4 Wochen",
          deliverables: ["AVD Infrastructure", "Image Management", "FSLogix Setup", "Security Configuration"]
        }
      ]
    },
    {
      category: "Managed Cloud Services",
      icon: Shield,
      gradient: "from-indigo-600 via-indigo-500 to-blue-400",
      offerings: [
        {
          title: "24/7 Azure Operations",
          description: "Vollständiger Betrieb Ihrer Azure-Infrastruktur mit SLA-Garantie",
          price: "7.900€/Monat",
          duration: "Ongoing",
          deliverables: ["Proactive Monitoring", "Incident Response", "Cost Optimization", "Monthly Reports"]
        },
        {
          title: "Kubernetes Managed Service",
          description: "Cluster Management, Updates, Security Patches und Performance Tuning",
          price: "9.900€/Monat",
          duration: "Ongoing",
          deliverables: ["Cluster Management", "Security Updates", "Scaling Support", "24/7 Monitoring"]
        },
        {
          title: "Sovereign Cloud Operations",
          description: "GDPR-konforme Cloud-Infrastruktur mit Datenhoheit in Deutschland",
          price: "75.000€",
          duration: "8-10 Wochen",
          deliverables: ["Sovereign Setup", "Compliance Framework", "Data Residency", "Audit Reports"]
        },
        {
          title: "Enterprise Support Package",
          description: "Dedizierter Cloud Architect, Priority Support und Custom SLAs",
          price: "Auf Anfrage",
          duration: "Flexibel",
          deliverables: ["Dedicated Support", "Architecture Reviews", "Custom SLA", "Quarterly Strategy"]
        }
      ]
    }
  ];

  const benefits = [
    { icon: Target, title: "99.9% Uptime", description: "SLA-garantierte Verfügbarkeit" },
    { icon: TrendingUp, title: "40% Kostenersparnis", description: "Durchschnittliche Cloud-Optimierung" },
    { icon: Zap, title: "10x schnellere Deployments", description: "Mit automatisierten Pipelines" },
    { icon: Shield, title: "ISO 27001 zertifiziert", description: "Höchste Sicherheitsstandards" }
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
              <span className="text-brand-primary font-semibold text-sm">Cloud Services & Automation</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900">
              Cloud-Infrastruktur{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                neu gedacht
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Modernste Cloud-Architekturen, DevOps-Automation und 24/7 Support – 
              alles aus einer Hand. Wir machen Ihre IT-Infrastruktur zukunftssicher.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-primary to-brand-accent hover:shadow-xl hover:shadow-brand-primary/20 transition-all duration-300"
              >
                Kostenlose Cloud-Analyse
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-brand-primary/20 hover:border-brand-primary/40 hover:bg-brand-primary/5"
              >
                Live-Demo ansehen
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
              {/* Category Header */}
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

              {/* Offerings Grid */}
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
                    {/* Gradient Border Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${solution.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />
                    
                    <div className="relative h-full p-8 bg-white rounded-3xl border-2 border-slate-100 group-hover:border-transparent transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                      {/* Header */}
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

                      {/* Deliverables */}
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

                      {/* Hover Arrow */}
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
              Bereit für die Cloud-Transformation?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Lassen Sie uns in einem unverbindlichen Gespräch Ihre Cloud-Strategie entwickeln.
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
                <span>Keine Vertragsbindung</span>
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
