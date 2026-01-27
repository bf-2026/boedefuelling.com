import { motion } from "framer-motion";
import { Brain, BarChart3, Sparkles, Cpu, Database, LineChart, CheckCircle, Lightbulb, Award, FileSearch, Shield, Layers, MessageSquare, Phone, Eye, Clock, Server, Wrench, X, Users, ArrowRight, Target } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { useState } from "react";

export default function KIDatenanalysePage() {
  const [selectedOffering, setSelectedOffering] = useState<any>(null);
  const serviceCategories = [
    {
      phase: "01",
      title: "Strategische KI-Planung",
      subtitle: "Zukunftsstrategien für Ihre Daten- und KI-Landschaft",
      color: "from-blue-500/10 to-blue-600/5",
      services: [
        {
          icon: Lightbulb,
          title: "Data & AI Journey Workshop",
          description: "Entwickeln Sie fundierte Zukunftsstrategien für Ihre Daten- und KI-Landschaft mit unserem strukturierten Workshop.",
          price: "ab 2.000€",
          features: ["Strategische Planung", "Use Case Identifikation", "Roadmap Development", "Stakeholder Alignment"],
          details: {
            overview: "Unser Data & AI Journey Workshop ist der perfekte Einstieg in die KI-Transformation. In einem strukturierten 2-tägigen Format entwickeln wir gemeinsam mit Ihren Stakeholdern eine fundierte Strategie für Ihre Daten- und KI-Landschaft, identifizieren konkrete Use Cases und priorisieren Quick Wins.",
            whatYouGet: [
              "Strukturierter Workshop mit Ihren Fach- und IT-Stakeholdern (2 Tage vor Ort oder remote)",
              "IST-Analyse Ihrer aktuellen Daten- und KI-Landschaft mit Gap-Identifikation",
              "Use Case Katalog mit über 20 branchenspezifischen KI-Anwendungsfällen",
              "Priorisierte Roadmap mit Quick Wins, kurzfristigen und langfristigen Projekten",
              "ROI-Abschätzung für identifizierte Use Cases mit Business-Value-Quantifizierung",
              "Technologie-Empfehlungen und Architektur-Skizze für Ihre KI-Plattform"
            ],
            process: [
              "Vorbereitung: Stakeholder-Interviews und Dokumenten-Review Ihrer IT-Landschaft",
              "Workshop Tag 1: Vision Development, Use Case Ideation und Business Value Assessment",
              "Workshop Tag 2: Technology Deep-Dive, Roadmap Development und Prioritization",
              "Follow-up: Dokumentation, Executive Summary und nächste Schritte"
            ],
            idealFor: "Unternehmen (50-500 Mitarbeiter), die ihre KI-Journey strukturiert starten und konkrete Use Cases mit Business Value identifizieren möchten."
          }
        },
      ]
    },
    {
      phase: "02",
      title: "KI-Fundament & Infrastruktur",
      subtitle: "Solide Basis für skalierbare KI-Anwendungen schaffen",
      color: "from-purple-500/10 to-purple-600/5",
      services: [
        {
          icon: Database,
          title: "Azure OpenAI Enterprise Setup",
          description: "Production-ready Azure OpenAI Infrastruktur mit Enterprise Security, Governance und Kostenoptimierung.",
          price: "ab 48.000€",
          features: ["Enterprise Deployment", "Security Config", "Cost Management", "Monitoring Setup"],
          details: {
            overview: "Azure OpenAI ist die Basis für Enterprise GenAI-Anwendungen. Wir implementieren eine production-ready Infrastruktur mit Multi-Tenant-Architektur, umfassender Security, Kostenoptimierung und Monitoring – bereit für hunderte Benutzer und Millionen von Anfragen.",
            whatYouGet: [
              "Multi-Region Azure OpenAI Deployment mit Load Balancing für High Availability",
              "Enterprise Security: Private Endpoints, Managed Identity, Azure Key Vault Integration",
              "Token Tracking und Cost Management mit Budget Alerts und Quota Monitoring",
              "Content Filtering und Responsible AI: Safety-Checks für Inputs und Outputs",
              "Prompt Management System für versionierte Prompts und A/B Testing",
              "Observability Stack: Application Insights, Logging und Performance Dashboards"
            ],
            process: [
              "Woche 1-2: Architecture Design, Azure Resource Provisioning und Network Setup",
              "Woche 3-4: Security Hardening, Content Filtering und Identity Management",
              "Woche 5-6: Monitoring Setup, Cost Management und Performance Testing",
              "Woche 7-8: Team Training, Documentation und Go-Live"
            ],
            idealFor: "Unternehmen, die Azure OpenAI für produktive GenAI-Anwendungen einsetzen und eine sichere, skalierbare und kosteneffiziente Infrastruktur benötigen."
          }
        },
        {
          icon: BarChart3,
          title: "Daten-Pipeline & ETL Engineering",
          description: "Robuste, skalierbare ETL-Pipelines für automatisierte Datenverarbeitung und KI-ready Data Preparation.",
          price: "ab 50.000€",
          features: ["Pipeline Development", "Data Quality", "Automation", "Monitoring"],
          details: {
            overview: "Hochwertige KI-Modelle brauchen hochwertige Daten. Wir entwickeln production-ready ETL-Pipelines, die Ihre Rohdaten aus multiplen Quellen automatisiert extrahieren, transformieren, validieren und für KI-Anwendungen bereitstellen.",
            whatYouGet: [
              "End-to-End ETL-Pipelines mit Azure Data Factory, Databricks oder Apache Airflow",
              "Multi-Source Integration: Datenbanken, APIs, Files, Cloud Storage und SaaS-Systeme",
              "Data Quality Framework: Automated Validation, Deduplication und Anomaly Detection",
              "Incremental Loading Patterns für effiziente, kostenoptimierte Daten-Updates",
              "Data Lineage Tracking: Vollständige Nachverfolgbarkeit von Quelle bis Ziel",
              "Pipeline Monitoring mit Alerts, Error Handling und automatischen Retries"
            ],
            process: [
              "Woche 1-2: Data Source Assessment und Pipeline Architecture Design",
              "Woche 3-6: Pipeline Development, Testing und Data Quality Implementation",
              "Woche 7-8: Performance Optimization, Monitoring Setup und Documentation",
              "Woche 9-10: Team Training und Handover mit Operations Runbooks"
            ],
            idealFor: "Unternehmen mit multiplen Datenquellen, die automatisierte, zuverlässige Datenverarbeitung für Analytics und KI benötigen."
          }
        },
        {
          icon: MessageSquare,
          title: "Data Lake & Analytics Platform",
          description: "Skalierbare Data Lake Architektur als Foundation für Advanced Analytics und KI-Anwendungen.",
          price: "ab 30.000€",
          features: ["Data Lake Setup", "Lakehouse Architecture", "Governance", "Analytics Ready"],
          details: {
            overview: "Ein moderner Data Lake ist die Basis für skalierbare KI- und Analytics-Projekte. Wir implementieren eine Lakehouse-Architektur mit Bronze-Silver-Gold-Pattern, die strukturierte, semi-strukturierte und unstrukturierte Daten vereint und für KI-Workloads optimiert ist.",
            whatYouGet: [
              "Lakehouse Architecture auf Azure (ADLS Gen2 + Databricks) oder AWS (S3 + EMR)",
              "Bronze-Silver-Gold Layering für optimale Data Quality und Performance",
              "Data Catalog mit automatischer Metadata Discovery und Lineage Tracking",
              "Access Control Framework mit Row-Level und Column-Level Security",
              "Cost Optimization: Storage Tiering, Lifecycle Policies und Compression",
              "Analytics-Ready: Integration mit Power BI, Azure ML und Spark-Workloads"
            ],
            process: [
              "Woche 1-2: Requirements Analysis und Architecture Design",
              "Woche 3-4: Data Lake Provisioning, Security Setup und Network Configuration",
              "Woche 5-6: Data Ingestion Pipelines und Layer Implementation",
              "Woche 7-8: Data Catalog, Governance und Team Training"
            ],
            idealFor: "Unternehmen mit großen Datenmengen (TB-PB), multiplen Datenquellen und Advanced Analytics/KI-Vorhaben, die eine zukunftssichere Datenplattform benötigen."
          }
        },

      ]
    },
    {
      phase: "03",
      title: "KI-Modelle & Entwicklung",
      subtitle: "Custom ML-Modelle und spezialisierte KI-Lösungen",
      color: "from-orange-500/10 to-orange-600/5",
      services: [
        {
          icon: Brain,
          title: "Custom LLM Fine-Tuning",
          description: "Anpassung von Large Language Models auf Ihre spezifischen Unternehmensdaten und Use Cases.",
          price: "ab 45.000€",
          features: ["Model Selection", "Training Data Prep", "Fine-Tuning Pipeline", "Evaluation & Optimization"],
          details: {
            overview: "Standard-LLMs sind beeindruckend, aber für domänenspezifische Aufgaben oft nicht optimal. Wir fine-tunen GPT-4, Llama, oder Mistral-Modelle auf Ihre Unternehmensdaten und Use Cases für signifikant bessere Ergebnisse bei spezialisierten Aufgaben.",
            whatYouGet: [
              "Use Case Assessment und Model Selection (GPT-4, Llama 3, Mistral, oder Custom Base Model)",
              "Training Data Engineering: Data Collection, Cleaning, Annotation und Augmentation",
              "Fine-Tuning Pipeline auf Azure ML oder AWS SageMaker mit MLOps Best Practices",
              "Hyperparameter Optimization und Model Evaluation mit domänenspezifischen Metriken",
              "A/B Testing Framework für Vergleich zwischen Base Model und Fine-Tuned Model",
              "Production Deployment mit Monitoring, Feedback Loop und Continuous Improvement"
            ],
            process: [
              "Woche 1-2: Use Case Definition, Model Selection und Training Data Assessment",
              "Woche 3-6: Data Preparation, Annotation und Training Data Quality Assurance",
              "Woche 7-10: Fine-Tuning Experiments, Hyperparameter Tuning und Evaluation",
              "Woche 11-12: Production Deployment, Monitoring Setup und Team Training"
            ],
            idealFor: "Unternehmen mit spezialisierten Domänen (Legal, Medical, Finance, Engineering), die LLM-Performance für ihre Use Cases optimieren möchten."
          }
        },
        {
          icon: Eye,
          title: "Computer Vision Lösungen",
          description: "Produktionsreife Computer Vision Systeme für Qualitätskontrolle, Objekterkennung und Bildanalyse.",
          price: "ab 45.000€",
          features: ["Custom Vision Models", "Real-time Processing", "Edge Deployment", "Quality Assurance"],
          details: {
            overview: "Computer Vision automatisiert visuelle Inspektionen und Analysen mit übermenschlicher Präzision und Konsistenz. Wir entwickeln Custom Vision Models für Ihre spezifischen Anforderungen – von Qualitätskontrolle über Objekterkennung bis hin zu OCR und Dokumentenanalyse.",
            whatYouGet: [
              "Custom Computer Vision Models mit YOLO, EfficientDet oder Custom Architectures",
              "Automated Training Pipeline mit Active Learning und Data Augmentation",
              "Real-time Inference optimiert für Edge-Deployment oder Cloud-Processing",
              "Model Explainability: Visualisierung von Aktivierungen und Entscheidungsgründen",
              "Production-Grade System mit Monitoring, A/B Testing und Continuous Training",
              "Edge-Deployment-Option für NVIDIA Jetson, Intel NUC oder Industrial PCs"
            ],
            process: [
              "Woche 1-2: Use Case Analysis, Data Collection Strategy und Architecture Design",
              "Woche 3-6: Image Annotation, Model Training und Iterative Optimization",
              "Woche 7-8: System Integration, Real-time Testing und Performance Optimization",
              "Woche 9-10: Production Deployment, Monitoring und Operator Training"
            ],
            idealFor: "Fertigungsindustrie, Logistik, Retail und Healthcare mit Bedarf an automatisierter visueller Inspektion, Qualitätskontrolle oder Objekterkennung."
          }
        },
        {
          icon: MessageSquare,
          title: "Natural Language Processing (NLP)",
          description: "Enterprise NLP-Lösungen für Textanalyse, Information Extraction und semantisches Verständnis.",
          price: "ab 35.000€",
          features: ["Text Analytics", "Named Entity Recognition", "Sentiment Analysis", "Classification"],
          details: {
            overview: "Erschließen Sie den Wert in Ihren unstrukturierten Textdaten. Unsere NLP-Lösungen extrahieren Informationen, klassifizieren Dokumente, analysieren Sentiments und automatisieren textbasierte Workflows mit State-of-the-Art Transformer-Modellen.",
            whatYouGet: [
              "Custom NLP Pipeline mit spaCy, Hugging Face Transformers oder Azure Cognitive Services",
              "Named Entity Recognition (NER) für domänenspezifische Entitäten und Kategorien",
              "Text Classification und Categorization mit Multi-Label und Hierarchical Taxonomies",
              "Sentiment Analysis und Opinion Mining für Customer Feedback und Social Media",
              "Information Extraction für strukturierte Datengewinnung aus unstrukturierten Texten",
              "API Deployment mit Batch-Processing und Real-time Inference Capabilities"
            ],
            process: [
              "Woche 1-2: Use Case Definition, Data Assessment und Model Architecture Selection",
              "Woche 3-5: Training Data Annotation, Model Training und Evaluation",
              "Woche 6-7: System Integration, API Development und Performance Testing",
              "Woche 8: Production Deployment, Documentation und Team Training"
            ],
            idealFor: "Unternehmen mit großen Textdaten-Mengen (Kundenanfragen, Verträge, Reports), die Informationsextraktion, Klassifikation oder Automatisierung benötigen."
          }
        }
      ]
    },
    {
      phase: "04",
      title: "Erweiterte KI-Anwendungen",
      subtitle: "State-of-the-Art KI-Architekturen für komplexe Anforderungen",
      color: "from-green-500/10 to-green-600/5",
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
          icon: Layers,
          title: "Cognitive Search Implementation",
          description: "Enterprise Search mit KI-powered Semantic Search, Filtering und Personalisierung.",
          price: "ab 35.000€",
          features: ["Semantic Search", "Faceted Filtering", "Personalization", "Analytics"],
          details: {
            overview: "Traditionelle Keyword-Suche findet nicht, was Benutzer meinen, sondern nur, was sie schreiben. Cognitive Search mit Semantic Understanding, Natural Language Queries und personalisierten Ergebnissen transformiert die Nutzererfahrung Ihrer Enterprise Search.",
            whatYouGet: [
              "Azure AI Search oder Elasticsearch Setup mit Semantic Ranking und Vector Search",
              "Multi-Modal Search: Text, Metadata, Images und strukturierte Daten kombiniert",
              "Faceted Navigation mit dynamischen Filtern und Hierarchical Taxonomies",
              "Query Understanding: Synonym Expansion, Spell Correction und Intent Recognition",
              "Personalization Engine basierend auf User Behavior und Preferences",
              "Search Analytics Dashboard mit Query Analysis, Click-Through Rates und Optimization Insights"
            ],
            process: [
              "Woche 1-2: Search Requirements Analysis, Data Assessment und Architecture Design",
              "Woche 3-4: Search Index Setup, Data Ingestion und Schema Design",
              "Woche 5-6: Semantic Search Configuration, Ranking Optimization und Personalization",
              "Woche 7-8: UI Integration, Analytics Setup und User Acceptance Testing"
            ],
            idealFor: "Unternehmen mit umfangreichen Knowledge Bases, Intranets oder Customer-facing Search, die Findability und User Experience dramatisch verbessern möchten."
          }
        }
      ]
    },
    {
      phase: "05",
      title: "KI-Operations & Support",
      subtitle: "Kontinuierlicher Betrieb für nachhaltige Wettbewerbsvorteile",
      color: "from-purple-500/10 to-purple-600/5",
      services: [
        {
          icon: Server,
          title: "ML Ops & Model Management",
          description: "Production-Grade MLOps für Continuous Training, Deployment und Monitoring Ihrer KI-Modelle.",
          price: "ab 40.000€",
          features: ["CI/CD Pipeline", "Model Registry", "A/B Testing", "Drift Detection"],
          details: {
            overview: "KI-Modelle in Production brauchen kontinuierliches Management: Retraining bei Data Drift, A/B Testing neuer Versionen, Performance Monitoring und Rollback bei Problemen. Wir implementieren MLOps-Pipelines, die Ihre KI-Systeme zuv erläss ig, skalierbar und wartbar machen.",
            whatYouGet: [
              "CI/CD Pipeline für automatisiertes Model Training, Testing und Deployment",
              "Model Registry mit Versionierung, Lineage Tracking und Governance",
              "Automated Retraining Pipeline mit Data Drift Detection und Trigger Logic",
              "A/B Testing Framework für Safe Deployment neuer Modell-Versionen",
              "Comprehensive Monitoring: Performance Metrics, Data Quality und Model Behavior",
              "Model Explainability Dashboard mit SHAP Values und Feature Importance Tracking"
            ],
            process: [
              "Woche 1-2: Current State Assessment, Tool Selection und Architecture Design",
              "Woche 3-5: MLOps Platform Setup (MLflow, Kubeflow, oder Azure ML)",
              "Woche 6-8: CI/CD Pipeline Implementation, Monitoring und Alerting Setup",
              "Woche 9-10: Team Training, Documentation und Handover"
            ],
            idealFor: "Unternehmen mit produktiven ML-Modellen, die zuverlässige, automatisierte Model Lifecycle Management und minimale Downtime benötigen."
          }
        },
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
    },
    {
      phase: "06",
      title: "KI-Lösungen & Plattformen",
      subtitle: "Enterprise-ready KI-Systeme für Ihre Geschäftsprozesse",
      color: "from-orange-500/10 to-orange-600/5",
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
          icon: Layers,
          title: "MCP Integration",
          description: "Model Context Protocol für universelle Datenanbindung und skalierbare KI-Agenten.",
          price: "ab 25.000€",
          features: ["MCP Implementation", "Data Connectors", "Agent Framework", "API Integration"]
        },
        {
          icon: Database,
          title: "Enterprise Datenplattform Plus",
          description: "Maßgeschneiderte Daten- und KI-Plattform für Ihre spezifischen Unternehmensanforderungen.",
          price: "ab 50.000€",
          features: ["Custom Architecture", "Data Pipeline", "AI Integration", "Scalability"]
        },
        {
          icon: BarChart3,
          title: "Controlling Cockpit",
          description: "Vollautomatisierte tagesaktuelle KPIs und Power BI Dashboards in wenigen Wochen.",
          price: "ab 50.000€",
          features: ["Automated KPIs", "Real-time Dashboards", "Self-Service BI", "Mobile Access"]
        },
        {
          icon: Shield,
          title: "Private KI-Infrastruktur",
          description: "DSGVO-konforme, vollständig lokale Open-Source-Lösung mit kompletter Datenhoheit.",
          price: "ab 30.000€",
          features: ["On-Premise Deployment", "Open Source Stack", "Full Data Control", "GDPR Compliant"]
        },
        {
          icon: Database,
          title: "Datenplattform Development",
          description: "Produktionsreife Datenplattform mit Datenquellen und Reporting in 4-6 Wochen.",
          price: "ab 30.000€",
          features: ["Fast Deployment", "Data Sources", "ETL Pipelines", "Reporting Layer"]
        },
        {
          icon: Brain,
          title: "AWS SageMaker Implementation",
          description: "Enterprise-Implementierung der AWS KI-Plattform SageMaker für ML-Workflows.",
          price: "ab 45.000€",
          features: ["SageMaker Setup", "Model Training", "Deployment Pipeline", "Monitoring"]
        },
        {
          icon: Wrench,
          title: "Smart Maintenance mit KI",
          description: "Azure-basierte Predictive-Maintenance-Lösung zur proaktiven Vermeidung von Ausfällen.",
          price: "ab 45.000€",
          features: ["Predictive Models", "IoT Integration", "Alert System", "Dashboard"]
        },
        {
          icon: Eye,
          title: "Computer Vision Qualitätskontrolle",
          description: "Echtzeit-Bildprüfung auf Azure mit vollständiger Datenhoheit und schneller Amortisation.",
          price: "ab 45.000€",
          features: ["Vision Models", "Real-time Processing", "Quality Detection", "Reporting"]
        },
        {
          icon: MessageSquare,
          title: "KI Chatbot mit SAP-Integration",
          description: "Nutzen Sie natürliche Sprache für den Zugriff auf Ihre SAP-Daten via firmeninternem Chatbot.",
          price: "ab 25.000€",
          features: ["SAP Connector", "NL Query", "Real-time Data", "User Management"]
        },
        {
          icon: Sparkles,
          title: "KI Accelerator: 8 Wochen Programm",
          description: "Beschleunigen Sie Ihre KI-Transformation durch unser strukturiertes 8-Wochen-Programm.",
          price: "ab 35.000€",
          features: ["Fast Track Implementation", "Quick Wins", "Team Training", "Production Ready"]
        },
        {
          icon: Cpu,
          title: "KI Agent Pilotprojekt",
          description: "Entwicklung autonomer KI-Agenten zur Automatisierung komplexer Prozessketten.",
          price: "ab 25.000€",
          features: ["Agent Development", "Process Automation", "Tool Integration", "Validation"]
        },
        {
          icon: Database,
          title: "Vektordatenbank-Integration",
          description: "Skalierbare Datenintegration in Vektordatenbanken für fortgeschrittene RAG-Architekturen.",
          price: "ab 50.000€",
          features: ["Data Pipeline", "Vector Embeddings", "RAG Implementation", "Scaling"]
        },
        {
          icon: Layers,
          title: "Data Mesh Beratung",
          description: "Skalierung dezentraler Datenarchitekturen mit modernen Data-Mesh-Prinzipien.",
          price: "ab 50.000€",
          features: ["Architecture Design", "Domain Setup", "Data Products", "Governance"]
        },
        {
          icon: BarChart3,
          title: "Self-Service SAP Reporting",
          description: "Moderne SAP-Reporting-Lösungen ohne Abhängigkeiten zu anderen Abteilungen.",
          price: "ab 80.000€",
          features: ["SAP Extraction", "Power BI Integration", "Self-Service Portal", "Training"]
        },
        {
          icon: FileSearch,
          title: "KI-powered SharePoint Wiki",
          description: "Verbinden Sie Ihre KI mit dem SharePoint Wiki für intelligente Wissenssuche.",
          price: "ab 20.000€",
          features: ["SharePoint Integration", "Semantic Search", "Chat Interface", "Knowledge Graph"]
        }
      ]
    },
    {
      phase: "04",
      title: "Managed Services & Support",
      subtitle: "Kontinuierlicher Betrieb für nachhaltige Wettbewerbsvorteile",
      color: "from-green-500/10 to-green-600/5",
      services: [
        {
          icon: Phone,
          title: "KI Voice Bots",
          description: "Intelligente Sprachassistenten für echte Telefongespräche mit Ihren Kunden.",
          price: "ab 15.000€",
          features: ["Voice AI", "Natural Conversations", "Call Routing", "Analytics"]
        },
        {
          icon: MessageSquare,
          title: "Enterprise Chatbot mit OpenWebUI",
          description: "Kosteneffizienter Enterprise-Chatbot mit Open-Source-Technologien (1€/User/Monat).",
          price: "ab 5.000€",
          features: ["OpenWebUI Setup", "Model Integration", "Multi-User", "Cost Efficient"]
        },
        {
          icon: Cpu,
          title: "Automatische Ticket-Erstellung",
          description: "KI-gestützte automatische Ticket-Generierung für Geschäftsprozesse und Kundenanfragen.",
          price: "auf Anfrage",
          features: ["Auto-Ticketing", "Classification", "Routing", "Integration"]
        },
        {
          icon: Eye,
          title: "Vision Language Models (VLMs)",
          description: "Fortgeschrittene Dokumentenverarbeitung, Bildersuche und Tabellenextraktion mit VLMs.",
          price: "ab 30.000€",
          features: ["VLM Integration", "Document AI", "Image Search", "Table Extraction"]
        },
        {
          icon: LineChart,
          title: "Zeitreihenanalyse & Forecasting",
          description: "Verkaufsprognosen und strategische Planung mit fortgeschrittener Zeitreihenanalyse.",
          price: "ab 100.000€",
          features: ["Time Series Models", "Sales Forecasting", "Planning Tools", "What-If Analysis"]
        },
        {
          icon: Database,
          title: "Managed Database Services",
          description: "Vollständige Verwaltung Ihrer Datenbanken – mehr Zeit für Ihr Kerngeschäft.",
          price: "ab 15.000€",
          features: ["24/7 Monitoring", "Backup & Recovery", "Performance Tuning", "Security Updates"]
        },
        {
          icon: Server,
          title: "Data & AI Managed Services Azure",
          description: "Wartung und Überwachung kritischer Daten- und KI-Workloads auf Azure.",
          price: "ab 3.000€",
          features: ["Proactive Monitoring", "Incident Response", "Cost Optimization", "Reporting"]
        },
        {
          icon: BarChart3,
          title: "Power BI & Fabric Support",
          description: "Serviceverträge für stets verfügbares und aktuelles Berichtswesen.",
          price: "ab 3.000€",
          features: ["24/7 Support", "Dashboard Maintenance", "Performance Optimization", "User Support"]
        },
        {
          icon: Database,
          title: "Datenplattform Managed Service",
          description: "Fokus auf Wertschöpfung – wir kümmern uns um Ihre Datenplattform.",
          price: "ab 3.000€",
          features: ["Platform Management", "Updates & Patches", "Monitoring", "SLA Guarantee"]
        },
        {
          icon: Layers,
          title: "Individuelle Managed Services",
          description: "Maßgeschneiderte Managed Services für Datenplattform, KI, Power BI und Infrastruktur.",
          price: "auf Anfrage",
          features: ["Custom SLA", "Dedicated Support", "Full Stack Management", "Flexible Pricing"]
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
