import { motion } from "framer-motion";
import { Workflow, Bot, Zap, Network, FileText, Users, Clock, CheckCircle, Settings, Layers, GitBranch, Shield, Boxes, Rocket, Target, BarChart3, Lightbulb, MessageSquare, X, Award, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { useState } from "react";

export default function EnterpriseAIWorkflowPage() {
  const [selectedOffering, setSelectedOffering] = useState<any>(null);
  const serviceCategories = [
    {
      phase: "01",
      title: "Workflow-Strategie & Planung",
      subtitle: "Fundament für intelligente Prozessautomatisierung legen",
      color: "from-blue-500/10 to-blue-600/5",
      services: [
        {
          icon: Lightbulb,
          title: "Workflow Readiness Assessment",
          description: "Umfassende Analyse Ihrer Prozesse zur Identifikation von Automatisierungspotenzialen.",
          price: "ab 3.000€",
          features: ["Process Mining", "Bottleneck-Analyse", "ROI-Kalkulation", "Quick Win Identifikation"],
          details: {
            overview: "Unser Workflow Readiness Assessment ist der perfekte Einstieg in die Prozessautomatisierung. Wir analysieren Ihre bestehenden Geschäftsprozesse, identifizieren Automatisierungspotenziale und berechnen konkrete ROI-Szenarien. Das Ergebnis: Eine priorisierte Roadmap mit Quick Wins, die sich innerhalb von 3-6 Monaten amortisieren.",
            whatYouGet: [
              "Detaillierte Prozessanalyse mit Process Mining für bis zu 10 Kernprozesse",
              "Bottleneck-Identifikation und Zeitanalyse mit konkreten Einsparpotentialen",
              "ROI-Kalkulation mit Kosten-Nutzen-Analyse für jedes Automatisierungsszenario",
              "Quick Win Identifikation – sofort umsetzbare Automatisierungen mit minimalem Aufwand",
              "Priorisierte Automatisierungs-Roadmap mit Zeitplan und Meilensteinen",
              "Tool-Empfehlungen passend zu Ihrer IT-Landschaft (Power Automate, n8n, Make.com)"
            ],
            process: [
              "Discovery Workshop (1 Tag): Gemeinsame Analyse Ihrer Prozesse und Schmerzpunkte",
              "Process Assessment (1 Woche): Detailanalyse mit Process Mining und Stakeholder-Interviews",
              "ROI-Berechnung (2 Tage): Quantifizierung der Einsparpotenziale und Business Case",
              "Präsentation & Roadmap (1 Tag): Finale Präsentation mit priorisierter Umsetzungsempfehlung"
            ],
            idealFor: "Mittelständische Unternehmen (50-500 Mitarbeiter), die ihre ersten Schritte in der Prozessautomatisierung gehen und schnelle, messbare Erfolge erzielen wollen."
          }
        },
        {
          icon: Target,
          title: "Prozessautomatisierung Workshop",
          description: "Praxisnaher Workshop zu modernen Workflow-Automatisierungen und Best Practices.",
          price: "ab 2.500€",
          features: ["Use Case Workshop", "Tool-Evaluation", "Architektur-Design", "Roadmap Development"],
          details: {
            overview: "In unserem intensiven Prozessautomatisierung Workshop vermitteln wir Ihrem Team das nötige Wissen für erfolgreiche Workflow-Automatisierung. Von Low-Code-Plattformen über API-Integration bis zu KI-Agenten – Sie lernen die gesamte Bandbreite moderner Automatisierungstechnologien kennen und entwickeln konkrete Use Cases für Ihr Unternehmen.",
            whatYouGet: [
              "2-tägiger Hands-on Workshop mit Ihrem Team (bis zu 15 Teilnehmer)",
              "Überblick über moderne Automatisierungs-Plattformen (Power Automate, n8n, Make.com, Zapier)",
              "Use Case Workshop: Identifikation und Priorisierung Ihrer Top-Automatisierungsprojekte",
              "Tool-Evaluation mit Vor- und Nachteilen für Ihre spezifischen Anforderungen",
              "Architektur-Design Best Practices für skalierbare und wartbare Workflows",
              "Live-Demos und praktische Übungen mit echten Workflow-Beispielen",
              "Workshop-Dokumentation mit allen Use Cases und Empfehlungen"
            ],
            process: [
              "Tag 1 Vormittag: Grundlagen der Prozessautomatisierung und Tool-Übersicht",
              "Tag 1 Nachmittag: Use Case Workshop – Ihre Prozesse im Fokus",
              "Tag 2 Vormittag: Hands-on Labs – Erste Workflows selbst bauen",
              "Tag 2 Nachmittag: Architektur-Design und Roadmap-Entwicklung"
            ],
            idealFor: "IT-Teams, Prozessverantwortliche und Business Analysten, die ein solides Fundament für Workflow-Automatisierung aufbauen und konkrete Use Cases identifizieren wollen."
          }
        },
        {
          icon: Bot,
          title: "KI-Agenten Beratung",
          description: "Strategische Beratung zum Einsatz autonomer KI-Agenten in Ihren Prozessen.",
          price: "ab 4.000€",
          features: ["Agent Architecture", "Integration Planning", "Governance Framework", "Security Konzept"],
          details: {
            overview: "KI-Agenten sind die nächste Evolution der Prozessautomatisierung – autonome Systeme, die nicht nur Aufgaben ausführen, sondern selbstständig Entscheidungen treffen und lernen. Wir beraten Sie zur strategischen Implementierung von KI-Agenten in Ihren Geschäftsprozessen, von der Architektur über Integration bis zu Governance und Sicherheit.",
            whatYouGet: [
              "Agent Architecture Design für Ihre spezifischen Use Cases (z.B. Customer Service, Data Analysis, Process Orchestration)",
              "Technology Stack Empfehlungen (Semantic Kernel, LangChain, AutoGen, CrewAI)",
              "Integration Planning in bestehende IT-Landschaft und Legacy-Systeme",
              "Multi-Agent Orchestration Strategy für komplexe, agentenübergreifende Workflows",
              "Governance Framework: Überwachung, Kontrolle und Audit-Trails für KI-Entscheidungen",
              "Security & Compliance Konzept für den sicheren Umgang mit sensitiven Daten",
              "ROI-Berechnung und Pilotprojekt-Empfehlung für den ersten KI-Agenten"
            ],
            process: [
              "Discovery Phase (1 Woche): Analyse Ihrer Prozesse und Identifikation von Agent-Kandidaten",
              "Architecture Design (1 Woche): Technische Konzeption und Tool-Auswahl",
              "Integration & Security Planning (3 Tage): Implementierungsplan mit Fokus auf Sicherheit",
              "Präsentation & Pilotprojekt: Finale Empfehlung mit konkretem Umsetzungsplan"
            ],
            idealFor: "Innovative Unternehmen, die über klassische Automatisierung hinausgehen und autonome KI-Systeme für komplexe Entscheidungsprozesse einsetzen wollen."
          }
        }
      ]
    },
    {
      phase: "02",
      title: "Workflow-Foundations",
      subtitle: "Basis-Infrastruktur für skalierbare Automatisierung",
      color: "from-purple-500/10 to-purple-600/5",
      services: [
        {
          icon: Workflow,
          title: "Power Automate Setup & Integration",
          description: "Professionelle Einrichtung Ihrer Microsoft Power Automate Umgebung mit Best Practices.",
          price: "ab 12.000€",
          features: ["Environment Setup", "Connector Configuration", "Template Library", "Governance Policies"],
          details: {
            overview: "Power Automate ist die führende Low-Code-Plattform für Microsoft 365 Automatisierung. Wir richten eine production-ready Power Automate Umgebung ein mit Best-Practice Governance, wiederverwendbaren Templates und nahtloser Integration in Ihre Microsoft 365 Landschaft. Das Ergebnis: Ihre Mitarbeiter können selbstständig Workflows erstellen – sicher, kontrolliert und skalierbar.",
            whatYouGet: [
              "Multi-Environment Setup (DEV, TEST, PROD) mit Data Loss Prevention Policies",
              "Connector Configuration für Microsoft 365, Dynamics, Azure und Custom APIs",
              "Template Library mit 20+ vorkonfigurierten Workflow-Templates für typische Szenarien",
              "Governance Framework: Naming Conventions, Approval Workflows, Audit Logging",
              "Center of Excellence (CoE) Starter Kit Deployment für Monitoring und Analytics",
              "Integration mit Azure AD, SharePoint, Teams und Power Apps",
              "Admin & Maker Training (2 Tage) für IT und Power User"
            ],
            process: [
              "Environment Design (1 Woche): Architektur, Governance-Modell und Security-Konzept",
              "Implementation (2 Wochen): Setup, Connector-Konfiguration und Template-Entwicklung",
              "CoE Deployment (1 Woche): Monitoring, Analytics und Admin-Tools",
              "Training & Handover: 2-tägiger Workshop für Admins und Maker"
            ],
            idealFor: "Microsoft 365 Organisationen, die Power Automate professionell ausrollen und Mitarbeitern Citizen Development ermöglichen wollen – mit Enterprise-Grade Governance."
          }
        },
        {
          icon: Network,
          title: "n8n Enterprise Workflow Platform",
          description: "Open-Source Workflow-Automatisierung mit unbegrenzten Möglichkeiten und voller Datenkontrolle.",
          price: "ab 18.000€",
          features: ["Self-Hosted Setup", "Custom Nodes", "API Integration", "High Availability"],
          details: {
            overview: "n8n ist die leistungsstärkste Open-Source Workflow-Plattform mit über 400 Integrationen und unbegrenzten Anpassungsmöglichkeiten. Wir implementieren eine production-ready n8n Enterprise Platform auf Ihrer Infrastruktur (On-Premise oder Cloud) mit High Availability, Custom Nodes und voller Datenkontrolle. Perfekt für Unternehmen, die maximale Flexibilität ohne Vendor Lock-in benötigen.",
            whatYouGet: [
              "Self-Hosted n8n Deployment auf Kubernetes oder Docker mit High Availability",
              "400+ vorkonfigurierte Integrationen (APIs, Datenbanken, Cloud Services)",
              "Custom Node Development für Ihre spezifischen System-Integrationen",
              "PostgreSQL Backend mit automatischen Backups und Point-in-Time Recovery",
              "RBAC (Role-Based Access Control) und SSO-Integration mit Azure AD oder Okta",
              "Monitoring & Alerting mit Grafana und Prometheus",
              "Developer Training (2 Tage) für Custom Workflow Development"
            ],
            process: [
              "Infrastructure Design (1 Woche): Architektur, Sizing und Security-Konzept",
              "Platform Deployment (2 Wochen): n8n Setup mit HA und Database Configuration",
              "Integration & Custom Nodes (2 Wochen): Connector Setup und Node-Entwicklung",
              "Training & Go-Live (1 Woche): Developer Workshop und Production Rollout"
            ],
            idealFor: "Tech-affine Unternehmen, die eine hochflexible, kosteneffiziente Workflow-Plattform mit voller Datenkontrolle und ohne Limitierungen kommerzieller Anbieter benötigen."
          }
        },
        {
          icon: Settings,
          title: "Make.com Professional Setup",
          description: "Visual Workflow-Automatisierung mit 1500+ App-Integrationen für schnelle Ergebnisse.",
          price: "ab 8.000€",
          features: ["Account Setup", "Scenario Templates", "Team Training", "Best Practices"],
          details: {
            overview: "Make.com (ehemals Integromat) ist die visuellste und intuitivste Workflow-Plattform mit über 1500 App-Integrationen. Perfekt für Teams ohne Development-Background, die schnell produktive Workflows erstellen wollen. Wir richten Ihr Make.com Team-Account ein, entwickeln Template-Szenarien und schulen Ihr Team in Best Practices – damit Sie in Tagen statt Wochen automatisieren.",
            whatYouGet: [
              "Make.com Team/Enterprise Account Setup mit Organisations-Struktur",
              "20+ vorkonfigurierte Scenario Templates für typische Business-Prozesse",
              "Integration Setup für Ihre wichtigsten Tools (CRM, ERP, Marketing, E-Commerce)",
              "Error Handling & Retry Logic Best Practices für robuste Workflows",
              "Data Store Setup für Workflow-State und Cross-Scenario Data Sharing",
              "Webhook & API Integration für Custom Applikationen",
              "1-tägiger Maker Workshop mit praktischen Übungen"
            ],
            process: [
              "Account Setup (2 Tage): Organisation, Teams und Permissions-Struktur",
              "Template Development (1 Woche): 20+ Scenario Templates für Ihre Use Cases",
              "Integration Configuration (3 Tage): Verbindung Ihrer wichtigsten Tools",
              "Maker Training (1 Tag): Hands-on Workshop mit Best Practices"
            ],
            idealFor: "Teams ohne technischen Background, die schnell mit Workflow-Automatisierung starten wollen – ohne Code, mit visueller Drag-and-Drop Oberfläche."
          }
        }
      ]
    },
    {
      phase: "03",
      title: "Intelligente Workflows",
      subtitle: "KI-gestützte Prozessautomatisierung der nächsten Generation",
      color: "from-orange-500/10 to-orange-600/5",
      services: [
        {
          icon: FileText,
          title: "Document Intelligence Workflows",
          description: "KI-gestützte Dokumentenverarbeitung mit intelligenter Extraktion und Klassifizierung.",
          price: "ab 22.000€",
          features: ["Azure AI Document Intelligence", "Automatic Classification", "Data Extraction", "Validation & Routing"],
          details: {
            overview: "Schluss mit manueller Dokumentenverarbeitung. Unsere Document Intelligence Workflows nutzen Azure AI Document Intelligence für hochpräzise OCR, automatische Klassifizierung und Datenextraktion. Von Rechnungen über Verträge bis zu Formularen – die KI extrahiert relevante Daten und routet Dokumente automatisch in die richtigen Workflows. Typische Zeitersparnis: 80-90% gegenüber manueller Verarbeitung.",
            whatYouGet: [
              "Azure AI Document Intelligence Setup mit Custom Models für Ihre Dokumenttypen",
              "Automatische Dokumentklassifizierung (Rechnung, Vertrag, Bestellung, etc.) mit 95%+ Genauigkeit",
              "Intelligente Datenextraktion (Key-Value Pairs, Tabellen, Line Items) mit Confidence Scores",
              "Validation Engine mit Business Rules und automatischer Error Handling",
              "Smart Routing Workflows basierend auf Dokumentinhalt und Metadaten",
              "Integration in SharePoint, Power Automate oder Custom Applications",
              "Training & Fine-Tuning für optimale Erkennungsgenauigkeit"
            ],
            process: [
              "Document Analysis (1 Woche): Analyse Ihrer Dokumenttypen und Datenextraktion-Requirements",
              "Model Training (2 Wochen): Custom Model Development und Training mit Ihren Beispieldokumenten",
              "Workflow Implementation (2 Wochen): Integration und Routing-Logic Development",
              "Testing & Optimization (1 Woche): Accuracy Testing und Model Fine-Tuning"
            ],
            idealFor: "Unternehmen mit hohem Dokumentenaufkommen (Rechnungen, Verträge, Formulare), die manuelle Dateneingabe eliminieren und Durchlaufzeiten drastisch reduzieren wollen."
          }
        },
        {
          icon: Bot,
          title: "Multi-Agent Workflow Orchestration",
          description: "Koordination mehrerer spezialisierter KI-Agenten für komplexe End-to-End Prozesse.",
          price: "ab 45.000€",
          features: ["Agent Communication", "Task Distribution", "Conflict Resolution", "Workflow Monitoring"],
          details: {
            overview: "Die Zukunft der Prozessautomatisierung: Multiple spezialisierte KI-Agenten arbeiten zusammen an komplexen Workflows. Ein Agent analysiert eingehende E-Mails, ein zweiter extrahiert Daten aus Anhängen, ein dritter prüft Compliance und ein vierter erstellt Antworten. Wir implementieren ein Multi-Agent Orchestration System mit intelligenter Task-Verteilung, Konfliktlösung und zentralem Monitoring.",
            whatYouGet: [
              "Multi-Agent Architecture Design mit spezialisierten Agents für verschiedene Tasks",
              "Agent Communication Framework für Datenaustausch und Koordination",
              "Intelligent Task Distribution basierend auf Agent-Kapazitäten und Workload",
              "Conflict Resolution Mechanismen bei widersprüchlichen Agent-Entscheidungen",
              "Central Orchestration Layer mit Workflow Engine und State Management",
              "Monitoring Dashboard mit Agent Performance Metrics und Workflow Insights",
              "Fallback & Error Handling für robuste Production Workflows"
            ],
            process: [
              "Use Case Analysis (2 Wochen): Identifikation der Agent-Rollen und Workflow-Dependencies",
              "Agent Development (3 Wochen): Implementierung spezialisierter Agents mit Custom Logic",
              "Orchestration Setup (2 Wochen): Communication Layer und Workflow Engine",
              "Testing & Refinement (2 Wochen): End-to-End Testing und Agent-Tuning"
            ],
            idealFor: "Innovative Unternehmen mit hochkomplexen Prozessen, die über einfache Automatisierung hinausgehen und multiple autonome Systeme koordinieren müssen."
          }
        },
        {
          icon: Network,
          title: "Semantic Kernel Integration",
          description: "Integration von Microsoft Semantic Kernel für orchestrierte AI-Workflows und Plugins.",
          price: "ab 28.000€",
          features: ["SK Setup", "Plugin Development", "Planner Integration", "Memory & Context"],
          details: {
            overview: "Microsoft Semantic Kernel ist das führende Framework für Enterprise AI Orchestration. Wir integrieren Semantic Kernel in Ihre Workflows für intelligente Task-Planung, Plugin-basierte Erweiterbarkeit und kontextbewusstes AI Reasoning. Mit SK können Ihre Workflows dynamisch entscheiden, welche Tools und APIs aufgerufen werden – basierend auf natürlichen Sprach-Anfragen und Business Context.",
            whatYouGet: [
              "Semantic Kernel Setup mit Azure OpenAI oder OpenAI Integration",
              "Custom Plugin Development für Ihre Business-Logik und System-Integrationen",
              "Planner Integration für autonome Task-Zerlegung und Execution Planning",
              "Memory & Context Management für kontext-bewusste Workflows über Sessions hinweg",
              "Function Calling Setup für strukturierte API-Interaktionen",
              "Prompt Engineering & Template Library für konsistente AI-Responses",
              "Developer Training für SK-basierte Workflow-Entwicklung"
            ],
            process: [
              "SK Architecture Design (1 Woche): Plugin-Strategie und Integration-Konzept",
              "Plugin Development (2 Wochen): Custom Plugins für Ihre Use Cases",
              "Planner & Memory Setup (1 Woche): AI Orchestration und Context Management",
              "Integration & Training (1 Woche): Workflow-Integration und Developer Enablement"
            ],
            idealFor: "Development Teams, die modernste AI Orchestration mit Microsoft Technologie implementieren und flexibel erweiterbare, intelligente Workflows bauen wollen."
          }
        }
      ]
    },
    {
      phase: "04",
      title: "Produktivitäts-Automatisierung",
      subtitle: "Microsoft 365 Copilot und Custom AI Assistants",
      color: "from-green-500/10 to-green-600/5",
      services: [
        {
          icon: Sparkles,
          title: "Microsoft 365 Copilot Rollout",
          description: "Professionelle Einführung von Microsoft 365 Copilot mit Change Management und Best Practices.",
          price: "ab 15.000€",
          features: ["Readiness Assessment", "Deployment Strategy", "Change Management", "Adoption Tracking"],
          details: {
            overview: "Microsoft 365 Copilot revolutioniert die Produktivität – aber nur mit der richtigen Einführungsstrategie. Wir begleiten Sie beim professionellen Rollout: Von Readiness Assessment über technische Implementierung bis Change Management und Adoption Tracking. Unsere Kunden erreichen 70%+ Adoption innerhalb von 3 Monaten und 15-25% Produktivitätssteigerung in Copilot-aktivierten Workflows.",
            whatYouGet: [
              "Copilot Readiness Assessment: Prüfung Prerequisites (Licensing, Security, Compliance)",
              "Phased Rollout Strategy mit Pilot Groups und stufenweiser Expansion",
              "Technical Setup: Policy Configuration, Data Governance und Security Settings",
              "Change Management Program mit Executive Alignment und User Communication",
              "Training & Enablement: Workshops, Video Tutorials und Use Case Showcases",
              "Adoption Dashboard mit Usage Analytics und ROI Tracking",
              "Ongoing Support (3 Monate) für Fragen, Best Practices und Optimization"
            ],
            process: [
              "Readiness Phase (2 Wochen): Assessment, Licensing und Prerequisites",
              "Pilot Phase (3-4 Wochen): Rollout für 50-100 Early Adopters mit intensivem Support",
              "Expansion Phase (4-6 Wochen): Stufenweise Ausrollung auf alle User Groups",
              "Optimization Phase (Ongoing): Adoption Tracking und kontinuierliche Verbesserung"
            ],
            idealFor: "Microsoft 365 Organisationen, die Copilot strategisch einführen und maximale User Adoption mit messbarem Business Value erreichen wollen."
          }
        },
        {
          icon: Bot,
          title: "Custom Copilot Entwicklung",
          description: "Entwicklung spezialisierter Copilots für Ihre individuellen Geschäftsprozesse.",
          price: "ab 35.000€",
          features: ["Custom GPT Development", "Knowledge Base Integration", "API Connectors", "Teams Integration"],
          details: {
            overview: "Microsoft 365 Copilot ist großartig – aber manchmal brauchen Sie einen spezialisierten Copilot für Ihre einzigartigen Prozesse. Wir entwickeln Custom Copilots mit Copilot Studio oder Azure AI, integriert in Ihre Knowledge Bases, Datenbanken und Business-Systeme. Ihre Mitarbeiter erhalten einen AI-Assistenten, der Ihr Business, Ihre Produkte und Ihre Prozesse wirklich versteht.",
            whatYouGet: [
              "Custom Copilot Development mit Copilot Studio oder Azure AI Studio",
              "Knowledge Base Integration (SharePoint, Confluence, Internal Wikis, Datenbanken)",
              "Custom API Connectors für CRM, ERP und proprietary Systems",
              "Advanced Prompt Engineering für präzise, business-spezifische Responses",
              "Teams/Web Interface Integration für nahtlosen Zugriff",
              "Conversation Analytics für kontinuierliche Verbesserung",
              "Admin Portal für Knowledge Management und Performance Monitoring"
            ],
            process: [
              "Discovery & Design (2 Wochen): Use Cases, Data Sources und Conversation Design",
              "Development (3-4 Wochen): Copilot Build, Knowledge Integration und API Development",
              "Testing & Refinement (2 Wochen): User Testing und Prompt Optimization",
              "Deployment & Training (1 Woche): Rollout und User Enablement"
            ],
            idealFor: "Unternehmen mit spezifischen Use Cases (Customer Support, Sales Enablement, Internal Help Desk), die einen maßgeschneiderten AI-Assistenten mit deep Domain Knowledge benötigen."
          }
        },
        {
          icon: MessageSquare,
          title: "Teams & SharePoint Automation",
          description: "Intelligente Automatisierung für Microsoft Teams und SharePoint mit AI-Features.",
          price: "ab 18.000€",
          features: ["Teams Bot Development", "SharePoint Workflows", "Adaptive Cards", "Notification Automation"],
          details: {
            overview: "Microsoft Teams und SharePoint sind die Collaboration-Hubs Ihres Unternehmens – perfekte Kandidaten für intelligente Automatisierung. Wir entwickeln Custom Teams Bots, automatisierte SharePoint Workflows mit AI-gestützter Dokumentverarbeitung und intelligente Notification-Systeme. Ihre Teams arbeiten effizienter, ohne den vertrauten Collaboration-Kontext verlassen zu müssen.",
            whatYouGet: [
              "Custom Teams Bot Development für Approvals, Notifications und Q&A",
              "SharePoint Workflow Automation mit Power Automate und Azure Logic Apps",
              "AI Document Processing in SharePoint Libraries (Auto-Tagging, Classification)",
              "Adaptive Cards für rich, interactive Messages in Teams Channels",
              "Smart Notification System mit Context-aware Routing und Priority Management",
              "Integration mit External Systems (CRM, ERP, Ticketing) via Teams Interface",
              "User Training und Adoption Guide für neue Automation-Features"
            ],
            process: [
              "Use Case Workshop (1 Woche): Identifikation der Top-Automatisierungspotenziale",
              "Bot & Workflow Development (3 Wochen): Implementation der Automations",
              "SharePoint Integration (1 Woche): Document Processing und Library Automation",
              "Testing & Rollout (1 Woche): User Testing und Production Deployment"
            ],
            idealFor: "Microsoft 365 Teams, die ihre täglichen Collaboration-Workflows automatisieren und die Produktivität in Teams/SharePoint ohne Medienbrüche steigern wollen."
          }
        }
      ]
    },
    {
      phase: "05",
      title: "Operations & Management",
      subtitle: "24/7 Betrieb und kontinuierliche Optimierung",
      color: "from-indigo-500/10 to-indigo-600/5",
      services: [
        {
          icon: BarChart3,
          title: "Workflow Monitoring & Analytics",
          description: "Echtzeit-Monitoring, Performance Analytics und kontinuierliche Workflow-Optimierung.",
          price: "ab 12.000€",
          features: ["Real-time Monitoring", "Performance Dashboards", "Bottleneck Detection", "ROI Tracking"],
          details: {
            overview: "Sie können nicht optimieren, was Sie nicht messen. Wir implementieren ein umfassendes Monitoring & Analytics System für Ihre Workflows: Echtzeit-Performance-Tracking, Bottleneck-Erkennung, SLA-Monitoring und ROI-Berechnung. Mit datengetriebenen Insights identifizieren Sie kontinuierlich Optimierungspotenziale und demonstrieren den Business Value Ihrer Automatisierungen.",
            whatYouGet: [
              "Real-time Workflow Monitoring Dashboard mit Live-Status aller automatisierten Prozesse",
              "Performance Analytics: Durchlaufzeiten, Success Rates, Error Rates pro Workflow",
              "Bottleneck Detection mit automatischer Identifikation von Delays und Failures",
              "SLA Monitoring mit automatischen Alerts bei Threshold-Überschreitung",
              "ROI Dashboard: Zeitersparnis, Kosteneinsparungen und Produktivitätsgewinne quantifiziert",
              "Workflow Comparison Reports für Before/After Analyse",
              "Custom Dashboards für Executives, Process Owners und Operations Teams"
            ],
            process: [
              "Monitoring Setup (2 Wochen): Integration von Analytics in bestehende Workflows",
              "Dashboard Development (2 Wochen): Custom Dashboards für verschiedene Stakeholder",
              "Baseline Measurement (2 Wochen): Erfassung von Baseline-Metrics für ROI-Berechnung",
              "Optimization Consulting (Ongoing): Monatliche Reviews und Improvement Recommendations"
            ],
            idealFor: "Unternehmen mit produktiven Workflows, die Transparenz schaffen, kontinuierlich optimieren und den Business Value ihrer Automatisierungen quantifizieren wollen."
          }
        },
        {
          icon: Clock,
          title: "24/7 Workflow Support",
          description: "Vollständiger Managed Service mit Monitoring, Incident Response und Optimierung.",
          price: "ab 6.500€/Monat",
          features: ["24/7 Monitoring", "Incident Response", "Proactive Maintenance", "Monthly Optimization"],
          details: {
            overview: "Fokussieren Sie sich auf Ihr Kerngeschäft – wir kümmern uns um Ihre Workflows. Unser 24/7 Managed Service Team übernimmt proaktives Monitoring, Incident Response innerhalb von 15 Minuten und kontinuierliche Optimierung. Mit 99.5% SLA-Garantie und monatlichen Optimization Reviews bleiben Ihre Workflows performant, aktuell und aligned mit Ihren Business-Zielen.",
            whatYouGet: [
              "24/7 Proactive Monitoring aller Workflows mit automatischen Alerts",
              "Incident Response mit 15min Response Time (P1) und 99.5% SLA",
              "Proactive Maintenance: Updates, Bug Fixes und Security Patches",
              "Monthly Optimization Reviews mit Performance Analysis und Improvement Recommendations",
              "Capacity Planning und Scaling Support bei Workload-Veränderungen",
              "Change Management für Workflow-Updates und neue Requirements",
              "Dedicated Support Channel (Teams/Slack) für schnelle Kommunikation",
              "Quarterly Business Reviews mit Executive-Level Reporting"
            ],
            process: [
              "Onboarding (2 Wochen): Workflow-Dokumentation, Runbook-Erstellung und Alert-Setup",
              "Steady-State Operations: 24/7 Monitoring und Incident Response",
              "Monthly Reviews: Performance Analysis, Optimization Planning und Reporting",
              "Quarterly Business Reviews: Strategic Alignment und Roadmap Updates"
            ],
            idealFor: "Unternehmen mit mission-critical Workflows, die garantierte Verfügbarkeit, schnelle Incident Response und kontinuierliche Optimierung ohne eigenes Operations-Team benötigen."
          }
        }
      ]
    },
    {
      phase: "06",
      title: "End-to-End Automatisierung",
      subtitle: "Komplette Prozessketten intelligent automatisieren",
      color: "from-pink-500/10 to-pink-600/5",
      services: [
        {
          icon: Zap,
          title: "Rechnungsverarbeitungs-Workflow",
          description: "Vollautomatische Erfassung, Prüfung und Buchung von Eingangs- und Ausgangsrechnungen.",
          price: "ab 28.000€",
          features: ["Invoice OCR", "ERP Integration", "Approval Workflow", "Payment Processing"]
        },
        {
          icon: Users,
          title: "Employee Onboarding Automation",
          description: "Kompletter Mitarbeiter-Onboarding-Prozess von IT-Setup bis Schulungsplanung.",
          price: "ab 32.000€",
          features: ["HR System Integration", "IT Provisioning", "Access Management", "Training Scheduling"]
        },
        {
          icon: FileText,
          title: "Contract Lifecycle Management",
          description: "Automatisierte Vertragsverwaltung von Erstellung über Prüfung bis Archivierung.",
          price: "ab 45.000€",
          features: ["Contract Generation", "AI Review", "E-Signature", "Renewal Alerts"]
        },
        {
          icon: MessageSquare,
          title: "Customer Support Automation",
          description: "KI-gestützte Automatisierung der gesamten Customer-Support-Kette.",
          price: "ab 38.000€",
          features: ["Ticket Routing", "AI Chatbot", "Escalation Rules", "Knowledge Base Integration"]
        },
        {
          icon: BarChart3,
          title: "Order-to-Cash Automation",
          description: "Durchgängige Automatisierung vom Auftrag bis zum Zahlungseingang.",
          price: "ab 55.000€",
          features: ["Order Processing", "Fulfillment", "Invoicing", "Payment Reconciliation"]
        },
        {
          icon: Network,
          title: "Procure-to-Pay Workflow",
          description: "End-to-End Automatisierung des Beschaffungsprozesses.",
          price: "ab 48.000€",
          features: ["Requisition", "Approval Chains", "PO Generation", "3-Way Matching"]
        },
        {
          icon: Shield,
          title: "Compliance & Audit Workflows",
          description: "Automatisierte Compliance-Checks und lückenlose Audit-Trail-Dokumentation.",
          price: "ab 42.000€",
          features: ["Rule Engine", "Automated Checks", "Audit Logging", "Reporting Dashboards"]
        },
        {
          icon: Boxes,
          title: "Inventory Management Automation",
          description: "Intelligente Bestandsverwaltung mit KI-gestützten Bestellvorschlägen.",
          price: "ab 35.000€",
          features: ["Stock Monitoring", "Predictive Ordering", "Supplier Integration", "Warehouse Optimization"]
        }
      ]
    },
    {
      phase: "07",
      title: "KI-Agenten & Advanced Workflows",
      subtitle: "Autonome Systeme für maximale Effizienz",
      color: "from-purple-500/10 to-purple-600/5",
      services: [
        {
          icon: Bot,
          title: "Spezialisierte KI-Agenten Suite",
          description: "Entwicklung von 3-5 spezialisierten KI-Agenten für Ihre wichtigsten Prozesse.",
          price: "ab 65.000€",
          features: ["Custom Agent Development", "Multi-Agent Orchestration", "Learning Capabilities", "Integration APIs"]
        },
        {
          icon: Workflow,
          title: "Enterprise Workflow Platform",
          description: "Vollständige No-Code/Low-Code Workflow-Plattform für Ihr gesamtes Unternehmen.",
          price: "ab 120.000€",
          features: ["Visual Designer", "Template Marketplace", "Version Control", "Multi-Tenant Support"]
        },
        {
          icon: Rocket,
          title: "Hyperautomation Implementation",
          description: "Ganzheitliche Hyperautomation-Strategie mit RPA, KI und Process Mining.",
          price: "ab 95.000€",
          features: ["RPA Integration", "AI/ML Models", "Process Discovery", "Continuous Optimization"]
        },
        {
          icon: GitBranch,
          title: "Multi-Agent Orchestration System",
          description: "Komplexes System zur Koordination mehrerer KI-Agenten über Abteilungen hinweg.",
          price: "ab 85.000€",
          features: ["Agent Communication", "Task Distribution", "Conflict Resolution", "Performance Monitoring"]
        },
        {
          icon: Layers,
          title: "Cross-Department Workflow Integration",
          description: "Abteilungsübergreifende Workflow-Integration für nahtlose Zusammenarbeit.",
          price: "ab 75.000€",
          features: ["Department Connectors", "Unified Dashboard", "SLA Management", "KPI Tracking"]
        },
        {
          icon: Bot,
          title: "Autonomous Decision Agent",
          description: "KI-Agent der eigenständig Entscheidungen basierend auf Unternehmensregeln trifft.",
          price: "ab 55.000€",
          features: ["Rule Engine", "ML Decision Models", "Explanation Interface", "Audit Trail"]
        },
        {
          icon: BarChart3,
          title: "Workflow Analytics & Optimization",
          description: "KI-gestützte Analyse und kontinuierliche Optimierung Ihrer Workflows.",
          price: "ab 32.000€",
          features: ["Performance Analytics", "Bottleneck Detection", "Optimization Recommendations", "ROI Tracking"]
        },
        {
          icon: Shield,
          title: "Enterprise Governance & Security",
          description: "Umfassendes Governance-Framework für sichere und compliant-Workflows.",
          price: "ab 28.000€",
          features: ["Access Control", "Compliance Monitoring", "Data Protection", "Security Audits"]
        },
        {
          icon: Users,
          title: "Workflow Training & Enablement",
          description: "Umfassendes Schulungsprogramm für Mitarbeiter und Workflow-Administratoren.",
          price: "ab 12.000€",
          features: ["Admin Training", "User Workshops", "Documentation", "Best Practice Sessions"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-brand-primary/5 via-white to-brand-accent/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-brand-primary/10 rounded-full">
              <span className="text-brand-primary font-semibold text-sm">Enterprise AI Workflow System</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Intelligente Workflows für <span className="text-brand-primary">das moderne Unternehmen</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Revolutionieren Sie Ihre Geschäftsprozesse mit unserem Enterprise AI Workflow System. 
              Automatisieren Sie komplexe Aufgaben, steigern Sie die Effizienz und lassen Sie KI-Agenten 
              für Sie arbeiten – 24/7, fehlerfrei, skalierbar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Live-Demo anfragen
              </Button>
              <Button size="lg" variant="outline">
                Angebote ansehen
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
                    onClick={() => service.details && setSelectedOffering(service)}
                    className={`group relative ${service.details ? 'cursor-pointer' : ''}`}
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

                      {/* Mehr erfahren Indicator */}
                      {service.details && (
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

      {/* Detail Modal */}
      {selectedOffering && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
          >
            <button
              onClick={() => setSelectedOffering(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-10"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>

            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    {selectedOffering.title}
                  </h2>
                  <div className="px-5 py-2.5 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl">
                    <span className="text-white font-bold text-xl">{selectedOffering.price}</span>
                  </div>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {selectedOffering.description}
                </p>
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

              {/* Features/Deliverables */}
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
              Bereit für intelligente Workflows?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Vereinbaren Sie eine Live-Demo und sehen Sie das System in Aktion.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-brand-primary hover:bg-slate-50">
              Jetzt Demo anfragen
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
