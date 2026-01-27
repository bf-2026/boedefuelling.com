import { motion } from "framer-motion";
import { Cloud, Zap, Shield, TrendingUp, Code, Server, Lock, RefreshCw, CheckCircle, Lightbulb, Box, Database, Monitor, GitBranch, Layers, Globe, ArrowRight, Sparkles, Target, Rocket, X, Users, Clock, Award } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { useState } from "react";

export default function CloudServicesAutomationPage() {
  const [selectedOffering, setSelectedOffering] = useState<any>(null);
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
          deliverables: ["Cloud Strategy Document", "TCO-Analyse", "Migration Roadmap", "Security Framework"],
          details: {
            overview: "Unsere Cloud Transformation Roadmap ist der perfekte Einstieg für Unternehmen, die ihre IT-Infrastruktur in die Cloud migrieren möchten. Wir analysieren Ihre bestehende Architektur, identifizieren Quick Wins und entwickeln eine maßgeschneiderte Strategie.",
            whatYouGet: [
              "Detaillierte IST-Analyse Ihrer aktuellen IT-Landschaft",
              "Identifikation von Cloud-Ready Workloads und Abhängigkeiten",
              "ROI-Berechnung mit konkreten Kosteneinsparungen (typisch 30-45%)",
              "Priorisierte Migration Roadmap mit Zeitplan und Meilensteinen",
              "Security & Compliance Assessment nach BSI und DSGVO",
              "Technology Stack Empfehlungen (Azure, AWS oder GCP)"
            ],
            process: [
              "Discovery Workshop (2 Tage): Gemeinsame Analyse Ihrer Ziele und Anforderungen",
              "Technical Assessment (1 Woche): Tiefenanalyse Ihrer IT-Infrastruktur",
              "Strategy Development (1 Woche): Ausarbeitung der Cloud-Strategie",
              "Presentation & Handover: Finale Präsentation mit Executive Summary"
            ],
            idealFor: "Mittelständische Unternehmen (50-500 Mitarbeiter) mit On-Premise Infrastruktur, die ihre erste Cloud-Migration planen."
          }
        },
        {
          title: "Infrastructure as Code Consulting",
          description: "Terraform & Azure ARM Implementierung für reproduzierbare Infrastruktur",
          price: "1.600€",
          duration: "1 Woche",
          deliverables: ["IaC Templates", "CI/CD Integration", "Best Practices Guide", "Live Workshop"],
          details: {
            overview: "Schluss mit manueller Infrastruktur-Verwaltung. Wir implementieren Infrastructure as Code (IaC) mit Terraform oder Azure ARM Templates für vollständig reproduzierbare und versionierte Infrastruktur. Ihre Teams können Infrastruktur wie Software behandeln – mit Git-Workflows, Code Reviews und automatisierten Deployments.",
            whatYouGet: [
              "Production-ready Terraform oder ARM Templates für Ihre Infrastruktur",
              "Modularisierte IaC-Module für Wiederverwendbarkeit und Skalierung",
              "CI/CD Pipeline Integration für automatisierte Infrastructure Deployments",
              "State Management Setup mit Remote Backend (Azure Storage oder Terraform Cloud)",
              "Best Practices Guide mit Naming Conventions und Security Patterns",
              "Live Workshop für Ihr Team mit Hands-On Training"
            ],
            process: [
              "Infrastructure Assessment: Analyse Ihrer bestehenden Infrastruktur",
              "IaC Implementation: Entwicklung der Templates und Module",
              "Pipeline Integration: Automatisierung der Deployments",
              "Team Workshop: Knowledge Transfer mit praktischen Übungen"
            ],
            idealFor: "DevOps-Teams, die ihre manuelle Infrastruktur-Verwaltung automatisieren und reproduzierbare Deployments erreichen wollen."
          }
        },
        {
          title: "Azure Cost Optimization",
          description: "Detaillierte Kostenanalyse mit konkreten Einsparpotenzialen bis zu 40%",
          price: "4.900€",
          duration: "1-2 Wochen",
          deliverables: ["Cost Report", "Optimization Plan", "Reserved Instances Strategy", "Monitoring Setup"],
          details: {
            overview: "Ihre Azure-Rechnung ist höher als erwartet? Wir analysieren Ihre gesamte Azure-Umgebung und identifizieren konkrete Einsparpotenziale. Unsere Kunden reduzieren ihre Cloud-Kosten durchschnittlich um 35-45%, ohne Kompromisse bei Performance oder Verfügbarkeit. Die Investition amortisiert sich typischerweise innerhalb von 1-2 Monaten.",
            whatYouGet: [
              "Detaillierter Cost Report mit Breakdown nach Ressourcen, Resource Groups und Subscriptions",
              "Identifikation von Zombie-Ressourcen (ungenutzte VMs, Disks, IPs, Snapshots)",
              "Reserved Instances & Savings Plans Strategie mit konkreten Empfehlungen und ROI-Berechnung",
              "Right-Sizing Empfehlungen für überdimensionierte VMs und Datenbanken",
              "Storage Optimization durch Tier-Optimierung und Lifecycle Policies",
              "Azure Cost Management Setup mit automatischen Alerts und Budgets"
            ],
            process: [
              "Cost Discovery: Automatisierte Analyse Ihrer Azure-Umgebung mit Kostenbreakdown",
              "Optimization Planning: Identifikation von Quick Wins und langfristigen Einsparungen",
              "Implementation Support: Umsetzung der Top-Prioritäten gemeinsam mit Ihrem Team",
              "Monitoring Setup: Einrichtung von Cost Management Dashboards und Alerts"
            ],
            idealFor: "Unternehmen mit monatlichen Azure-Kosten ab 5.000€, die ihre Cloud-Ausgaben optimieren und Transparenz schaffen wollen."
          }
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
          deliverables: ["Hub-Spoke Architecture", "Identity & Access Management", "Network Design", "Policy Framework"],
          details: {
            overview: "Eine solide Azure Landing Zone ist das Fundament für skalierbare Enterprise Cloud Adoption. Wir implementieren eine production-ready Landing Zone nach Microsoft Cloud Adoption Framework (CAF) mit Hub-Spoke-Architektur, zentralisiertem Identity Management und umfassender Governance. Das Ergebnis: Ein sicheres, skalierbares und compliant Azure-Environment.",
            whatYouGet: [
              "Hub-Spoke Network Architektur mit zentraler Connectivity und Shared Services",
              "Multi-Subscription Design mit Management Groups Hierarchie nach CAF Best Practices",
              "Azure Policy Framework mit 50+ Built-in Policies für Security und Compliance",
              "Centralized Identity & Access Management mit Azure AD Integration und RBAC",
              "Network Security Design mit Azure Firewall, NSGs und DDoS Protection",
              "Monitoring & Logging Setup mit Azure Monitor, Log Analytics und Sentinel Integration",
              "IaC Templates (Terraform/Bicep) für vollständig automatisierte Deployments"
            ],
            process: [
              "Design Phase (1 Woche): Requirements Gathering und Architecture Design",
              "Implementation Phase (2-3 Wochen): Deployment der Landing Zone mit IaC",
              "Security Hardening (1 Woche): Policy Implementation und Security Configuration",
              "Testing & Handover (1 Woche): Validation, Documentation und Knowledge Transfer"
            ],
            idealFor: "Enterprise-Unternehmen (500+ Mitarbeiter), die eine skalierbare, sichere und governance-konforme Azure Foundation für ihre Cloud-Strategie benötigen."
          }
        },
        {
          title: "Kubernetes Enterprise Platform",
          description: "Managed Kubernetes auf AKS, EKS oder GKE mit GitOps und Auto-Scaling",
          price: "14.900€",
          duration: "3-4 Wochen",
          deliverables: ["Cluster Setup", "GitOps Workflows", "Monitoring Stack", "Security Hardening"],
          details: {
            overview: "Kubernetes ist der De-facto Standard für Container Orchestration. Wir implementieren eine production-ready Kubernetes Platform mit vollständiger GitOps-Automatisierung, Enterprise-Grade Monitoring und Security Hardening. Ihre Entwickler können sich auf Code fokussieren, während die Platform automatisch skaliert, heilt und deployed.",
            whatYouGet: [
              "Production-ready Kubernetes Cluster auf AKS, EKS oder GKE mit High Availability",
              "GitOps Setup mit ArgoCD oder Flux für deklarative, Git-basierte Deployments",
              "Observability Stack: Prometheus, Grafana, Loki für Metrics, Logs und Traces",
              "Ingress Controller (NGINX oder Traefik) mit automatischem TLS via cert-manager",
              "Security Hardening: Pod Security Standards, Network Policies, Secret Management mit External Secrets",
              "Auto-Scaling Configuration: HPA und Cluster Autoscaler für elastische Workloads",
              "Disaster Recovery Setup mit Velero für automatische Backups"
            ],
            process: [
              "Requirements & Design (1 Woche): Cluster Sizing, Network Design und Tool Selection",
              "Cluster Setup (1 Woche): Kubernetes Deployment mit IaC und Base Configuration",
              "Platform Services (1-2 Wochen): GitOps, Monitoring, Security und Automation",
              "Testing & Training: Load Testing, Disaster Recovery Drill und Team Onboarding"
            ],
            idealFor: "Entwicklungsteams mit containerisierten Microservices, die eine moderne, selbstverwaltende Kubernetes Platform für schnelle und sichere Deployments benötigen."
          }
        },
        {
          title: "Multi-Cloud Orchestration",
          description: "Crossplane-basierte Kontrollebene für Azure, AWS und Google Cloud",
          price: "40.000€",
          duration: "6-8 Wochen",
          deliverables: ["Crossplane Setup", "Provider Configuration", "Resource Management", "Disaster Recovery"],
          details: {
            overview: "Vermeiden Sie Vendor Lock-in mit einer einheitlichen Multi-Cloud Control Plane. Wir implementieren Crossplane als Universal Cloud API, mit der Sie Infrastruktur über Azure, AWS und GCP hinweg mit Kubernetes-nativen APIs verwalten. Das Ergebnis: Cloud-agnostische Workloads, die überall laufen, und maximale Verhandlungsmacht gegenüber Cloud-Providern.",
            whatYouGet: [
              "Crossplane Control Plane auf Kubernetes mit High Availability Setup",
              "Provider Configuration für Azure, AWS und GCP mit Identity Federation",
              "Custom Composite Resources (XRDs) für standardisierte Infrastructure Patterns",
              "GitOps Integration für deklarative Multi-Cloud Infrastructure Management",
              "Policy Engine mit Kyverno oder OPA für Cross-Cloud Governance",
              "Cost Optimization durch Intelligent Workload Placement basierend auf Kosten",
              "Disaster Recovery Strategy mit automatischem Failover zwischen Clouds"
            ],
            process: [
              "Multi-Cloud Strategy (2 Wochen): Workload Assessment und Cloud Selection Criteria",
              "Crossplane Implementation (2 Wochen): Control Plane Setup und Provider Integration",
              "Abstraction Layer (2 Wochen): Custom Resources und Standardization",
              "Migration & Testing (2 Wochen): Workload Migration und Disaster Recovery Testing"
            ],
            idealFor: "Enterprise-Unternehmen mit kritischen Workloads, die Vendor Lock-in vermeiden, Cloud-Kosten optimieren und maximale Flexibilität benötigen."
          }
        },
        {
          title: "Private Cloud Infrastructure",
          description: "Dedizierte Cloud-Umgebung auf VMware oder OpenStack",
          price: "75.000€",
          duration: "8-12 Wochen",
          deliverables: ["Infrastructure Design", "Virtualization Platform", "Storage & Network", "Automation Tools"],
          details: {
            overview: "Für Workloads mit strengsten Compliance-Anforderungen oder maximaler Performance-Kontrolle ist eine Private Cloud die richtige Wahl. Wir designen und implementieren eine vollständig automatisierte Private Cloud auf VMware vSphere oder OpenStack mit Self-Service Portal, Metering und Cloud-ähnlicher Agilität – aber mit voller Datenkontrolle in Ihrem Rechenzentrum.",
            whatYouGet: [
              "End-to-End Infrastructure Design mit Compute, Storage und Network Architecture",
              "VMware vSphere oder OpenStack Deployment mit High Availability",
              "Software-Defined Networking (NSX-T oder OVN) mit Micro-Segmentation",
              "Software-Defined Storage (vSAN oder Ceph) mit automatischem Tiering",
              "Self-Service Portal für VM-Provisioning und Resource Management",
              "Infrastructure as Code Integration (Terraform/Ansible) für Automation",
              "Metering & Chargeback System für transparente Kostenallokation",
              "Disaster Recovery Setup mit Site Recovery Manager oder Backup Integration"
            ],
            process: [
              "Design Phase (2-3 Wochen): Requirements, Hardware Sizing und Architecture Design",
              "Hardware Procurement (2-4 Wochen): Server, Storage und Network Equipment (parallel)",
              "Implementation (3-4 Wochen): Platform Deployment und Configuration",
              "Automation & Testing (2-3 Wochen): IaC Integration und Load Testing",
              "Handover: Documentation, Training und Operations Runbooks"
            ],
            idealFor: "Regulierte Branchen (Finance, Healthcare, Government) oder Unternehmen mit speziellen Performance-Anforderungen, die eine Private Cloud mit Public Cloud Agilität benötigen."
          }
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
          deliverables: ["Pipeline Setup", "Automated Testing", "Release Automation", "Rollback Strategy"],
          details: {
            overview: "Moderne Software-Entwicklung braucht moderne Deployment-Prozesse. Wir implementieren vollautomatisierte CI/CD Pipelines, die Code von Commit bis Production in Minuten statt Tagen bringen. Mit automatisierten Tests, Security Scans und Zero-Downtime Deployments reduzieren Sie Deployment-Risiken um 90% und erhöhen Ihre Release-Frequenz um das 10-fache.",
            whatYouGet: [
              "Multi-Stage CI/CD Pipelines auf Azure DevOps, GitHub Actions oder GitLab CI",
              "Automated Testing Integration: Unit, Integration und E2E Tests mit Quality Gates",
              "Security Scanning: SAST, DAST und Container Image Scanning mit Trivy/Snyk",
              "Artifact Management mit versioning und automatischem Rollback",
              "Multi-Environment Strategy (DEV, TEST, STAGE, PROD) mit Approval Gates",
              "Blue-Green oder Canary Deployment Pattern für Zero-Downtime Releases",
              "Pipeline Monitoring mit Build Analytics und Deployment Metrics"
            ],
            process: [
              "Current State Assessment (1 Woche): Analyse bestehender Build- und Deploy-Prozesse",
              "Pipeline Design (1 Woche): Architecture, Branching Strategy und Tool Selection",
              "Implementation (2 Wochen): Pipeline Development und Testing Integration",
              "Team Training: Hands-on Workshop und Best Practices Documentation"
            ],
            idealFor: "Development Teams, die manuelle Deployments eliminieren, Release-Zyklen beschleunigen und Code-Qualität durch Automatisierung verbessern wollen."
          }
        },
        {
          title: "Container & Docker Platform",
          description: "Containerisierung Ihrer Legacy-Applikationen mit Docker und Registry",
          price: "4.800€",
          duration: "2 Wochen",
          deliverables: ["Docker Migration", "Container Registry", "Security Scanning", "Documentation"],
          details: {
            overview: "Container sind der erste Schritt zur Cloud-Native Modernisierung. Wir containerisieren Ihre Applikationen mit Docker, implementieren eine sichere Private Registry und optimieren Images für Größe und Performance. Das Ergebnis: Portable, konsistente Deployments über alle Umgebungen hinweg und die Basis für Kubernetes-Migration.",
            whatYouGet: [
              "Containerisierung von bis zu 5 Applikationen mit Multi-Stage Dockerfiles",
              "Private Container Registry (Harbor oder Azure Container Registry) mit RBAC",
              "Image Optimization für minimale Größe (typisch 60-80% Reduktion)",
              "Automated Security Scanning mit Trivy oder Clair für Vulnerability Detection",
              "Docker Compose Stacks für lokale Development Environments",
              "Best Practices Documentation: Dockerfile Patterns, Layering und Caching",
              "CI/CD Integration für automatische Image Builds und Registry Pushes"
            ],
            process: [
              "Application Assessment (2-3 Tage): Analyse Dependencies und Container Strategy",
              "Containerization (1 Woche): Dockerfile Development und Testing",
              "Registry Setup (2-3 Tage): Private Registry Deployment und Security Configuration",
              "Training & Handover: Developer Workshop und Migration Documentation"
            ],
            idealFor: "Teams mit Legacy-Applikationen, die den ersten Schritt Richtung Container und Cloud-Native machen wollen, ohne gleich auf Kubernetes zu migrieren."
          }
        },
        {
          title: "DevOps Culture Transformation",
          description: "Team-Training und Prozess-Modernisierung für DevOps Best Practices",
          price: "30.000€",
          duration: "6-8 Wochen",
          deliverables: ["Process Assessment", "Toolchain Setup", "Team Workshops", "Change Management"],
          details: {
            overview: "DevOps ist mehr als Tools – es ist eine Kulturveränderung. Wir begleiten Ihre Organisation bei der Transformation von Silos zu cross-funktionalen Teams mit Shared Responsibility. Mit bewährten Change Management Methoden, praktischen Workshops und schrittweiser Tool-Einführung verkürzen wir Ihre Time-to-Market um 50% und reduzieren Incident-Rates um 60%.",
            whatYouGet: [
              "DevOps Maturity Assessment nach DORA Metrics (Deployment Frequency, Lead Time, MTTR, Change Failure Rate)",
              "Gap Analysis und Transformation Roadmap mit Quick Wins und langfristigen Zielen",
              "Toolchain Implementation: Git, CI/CD, IaC, Monitoring nach Ihren Anforderungen",
              "5 Hands-on Workshops für Dev und Ops Teams zu GitOps, IaC, Monitoring und Incident Management",
              "Process Modernisierung: Trunk-Based Development, Feature Flags, Progressive Delivery",
              "Metrics Dashboard für transparente Performance-Messung (Deployment Frequency, Lead Time, etc.)",
              "Change Management Support mit Executive Alignment und Team Coaching"
            ],
            process: [
              "Discovery Phase (2 Wochen): Current State Assessment und Stakeholder Interviews",
              "Quick Wins (2 Wochen): Erste Tool-Implementierungen und sichtbare Verbesserungen",
              "Deep Transformation (3-4 Wochen): Prozess-Redesign, Workshops und Toolchain Setup",
              "Sustainability Phase (2 Wochen): Metrics Tracking, Retrospectives und kontinuierliche Verbesserung"
            ],
            idealFor: "Unternehmen mit getrennten Dev- und Ops-Teams, die ihre Delivery Performance verbessern und eine moderne DevOps-Kultur etablieren wollen."
          }
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
          deliverables: ["Migration Strategy", "Data Transfer", "Performance Testing", "Cutover Plan"],
          details: {
            overview: "Datenbank-Migrationen sind komplex und risikoreich – aber mit der richtigen Strategie erreichen wir Zero-Downtime. Wir migrieren Ihre SQL Server, PostgreSQL, MySQL oder MongoDB Datenbanken zu Managed Cloud Services mit minimalem Risiko. Unsere bewährte Methodik nutzt kontinuierliche Replikation und automatische Cutover für reibungslose Transitionen.",
            whatYouGet: [
              "Detaillierte Migration Strategy mit Risikoanalyse und Rollback-Plan",
              "Database Assessment: Schema Analysis, Performance Baseline und Compatibility Check",
              "Zero-Downtime Migration mit Azure Database Migration Service oder AWS DMS",
              "Performance Optimization: Index Tuning, Query Optimization und Right-Sizing",
              "Automated Cutover Plan mit automatischem Rollback bei Problemen",
              "Post-Migration Testing: Functional, Performance und Load Testing",
              "Documentation: Migration Runbook, Connection Strings und Configuration Guide"
            ],
            process: [
              "Assessment Phase (1 Woche): Database Analysis, Dependency Mapping und Strategy",
              "Migration Setup (1 Woche): Target Database Setup und Replication Configuration",
              "Data Sync (2-3 Wochen): Initial Load und kontinuierliche Replikation",
              "Cutover Execution (1 Woche): Final Sync, Cutover und Post-Migration Validation"
            ],
            idealFor: "Unternehmen mit kritischen On-Premise Datenbanken, die zu Managed Cloud Databases migrieren wollen – mit minimalem Downtime und Risiko."
          }
        },
        {
          title: "Cloud-Native Database Platform",
          description: "Managed Database Services mit Backup, High Availability und Monitoring",
          price: "3.000€",
          duration: "1 Woche",
          deliverables: ["DB Setup", "Backup Configuration", "Monitoring Dashboards", "Performance Tuning"],
          details: {
            overview: "Vergessen Sie Datenbank-Administration – wir setzen eine vollständig verwaltete Cloud-Native Database Platform auf. Mit automatischen Backups, High Availability, Performance Insights und Monitoring müssen Sie sich nie wieder um Database-Betrieb kümmern. Konzentrieren Sie sich auf Ihre Applikation, die Platform übernimmt den Rest.",
            whatYouGet: [
              "Production-ready Managed Database Setup (Azure SQL, PostgreSQL, MySQL oder Cosmos DB)",
              "High Availability Configuration mit automatischem Failover (99.99% SLA)",
              "Automated Backup Strategy mit Point-in-Time Restore und Geo-Redundancy",
              "Performance Monitoring Dashboards mit Query Performance Insights",
              "Security Configuration: Private Endpoints, Firewall Rules und Encryption at Rest",
              "Disaster Recovery Setup mit automatischen Geo-Replications",
              "Cost Optimization: Right-Sizing und Reserved Capacity Recommendations"
            ],
            process: [
              "Requirements Gathering (1 Tag): Workload Analysis und Service Tier Selection",
              "Database Deployment (2 Tage): Setup mit High Availability und Security",
              "Backup & DR Configuration (1 Tag): Automated Backups und Geo-Replication",
              "Monitoring Setup (1 Tag): Dashboards, Alerts und Performance Tuning"
            ],
            idealFor: "Startups und Teams, die eine production-ready Database Platform ohne Overhead von Self-Managed Databases benötigen."
          }
        },
        {
          title: "Azure Virtual Desktop Rollout",
          description: "Cloud-Arbeitsplätze mit Multi-Session Support und Profile Management",
          price: "15.000€",
          duration: "3-4 Wochen",
          deliverables: ["AVD Infrastructure", "Image Management", "FSLogix Setup", "Security Configuration"],
          details: {
            overview: "Ermöglichen Sie flexibles Arbeiten von überall mit Azure Virtual Desktop. Wir implementieren eine vollständige AVD-Lösung mit Multi-Session Windows 11, FSLogix Profile Management und optimierter User Experience. Ihre Mitarbeiter erhalten sichere Cloud-Arbeitsplätze mit Desktop-Performance – und Sie sparen bis zu 40% gegenüber traditionellen VDI-Lösungen.",
            whatYouGet: [
              "Azure Virtual Desktop Infrastructure mit Multi-Session Windows 11 Hosts",
              "Custom Golden Images mit vorinstallierten Applikationen und Configuration",
              "FSLogix Profile Container für schnelles Login und persistente User Profiles",
              "Conditional Access Policies und Multi-Factor Authentication für sichere Remote Access",
              "Auto-Scaling Configuration für Cost Optimization außerhalb der Business Hours",
              "Monitoring Setup mit Azure Monitor und Performance Dashboards",
              "User Acceptance Testing und End-User Documentation"
            ],
            process: [
              "Design Phase (1 Woche): User Personas, App Analysis und Architecture Design",
              "Infrastructure Setup (1 Woche): AVD Deployment, Networking und Security",
              "Image & Profile Management (1 Woche): Golden Image Creation und FSLogix Setup",
              "Pilot & Rollout (1 Woche): User Testing, Optimization und Production Rollout"
            ],
            idealFor: "Unternehmen mit Remote- oder Hybrid-Workforce, die sichere, skalierbare Cloud-Arbeitsplätze benötigen – ideal für kontrollierte Umgebungen oder BYOD-Szenarien."
          }
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
          deliverables: ["Proactive Monitoring", "Incident Response", "Cost Optimization", "Monthly Reports"],
          details: {
            overview: "Fokussieren Sie sich auf Ihr Business – wir kümmern uns um Ihre Azure-Infrastruktur. Unser 24/7 Managed Service Team übernimmt proaktives Monitoring, Incident Response, Security Patching und kontinuierliche Optimierung. Mit 99.9% SLA-Garantie und durchschnittlich 15-Minuten Response Time sind Ihre Cloud-Workloads in besten Händen.",
            whatYouGet: [
              "24/7 Proactive Monitoring mit Azure Monitor, Log Analytics und Custom Dashboards",
              "Incident & Problem Management nach ITIL mit 15min Response Time (P1) und 99.9% SLA",
              "Security Management: Automated Patching, Vulnerability Scanning und Compliance Monitoring",
              "Cost Optimization: Monatliche Reviews, Reserved Instances Management und Waste Reduction",
              "Change Management: Geplante Wartungen, Updates und Architecture Evolution",
              "Monthly Service Reviews mit Performance Metrics, Incidents Summary und Optimization Recommendations",
              "Dedicated Slack/Teams Channel für direkten Support und transparente Kommunikation"
            ],
            process: [
              "Onboarding (1 Woche): Environment Assessment, Monitoring Setup und Runbook Creation",
              "Steady State Operations: 24/7 Monitoring, Incident Response und kontinuierliche Optimierung",
              "Monthly Reviews: Performance Analysis, Cost Optimization und Strategy Alignment",
              "Quarterly Business Reviews: Strategic Roadmap und Architecture Evolution"
            ],
            idealFor: "Unternehmen ohne eigenes Cloud-Ops-Team oder mit kritischen Azure-Workloads, die professionellen 24/7 Support und SLA-Garantien benötigen."
          }
        },
        {
          title: "Kubernetes Managed Service",
          description: "Cluster Management, Updates, Security Patches und Performance Tuning",
          price: "9.900€/Monat",
          duration: "Ongoing",
          deliverables: ["Cluster Management", "Security Updates", "Scaling Support", "24/7 Monitoring"],
          details: {
            overview: "Kubernetes Operations sind komplex – lassen Sie uns das übernehmen. Wir verwalten Ihre Kubernetes Cluster vollständig: von Upgrades über Security Patching bis hin zu Performance Tuning. Ihre Developer deployen via GitOps, wir sorgen dafür, dass die Platform läuft, skaliert und sicher ist. Mit diesem Service können Sie auf dedizierte Kubernetes-Administratoren verzichten.",
            whatYouGet: [
              "Cluster Lifecycle Management: Rolling Upgrades, Node Pool Management und Capacity Planning",
              "24/7 Platform Monitoring mit Prometheus, Grafana und PagerDuty Integration",
              "Security Operations: Automated CVE Patching, Pod Security Policies und Network Policies",
              "Performance Optimization: Resource Right-Sizing, HPA Tuning und Cost Optimization",
              "Backup & Disaster Recovery: Automated Backups mit Velero und Recovery Testing",
              "GitOps Support: ArgoCD/Flux Operations, Application Deployment Troubleshooting",
              "Incident Response: 30min Response Time für kritische Kubernetes-Issues",
              "Monthly Platform Reviews mit Capacity Planning und Upgrade Roadmap"
            ],
            process: [
              "Onboarding (2 Wochen): Cluster Assessment, Monitoring Setup und Operations Runbooks",
              "Day 2 Operations: Kontinuierlicher Betrieb mit Monitoring, Patching und Optimization",
              "Upgrade Management: Quartalsweise Kubernetes Upgrades mit Testing und Rollback Plan",
              "Continuous Improvement: Performance Tuning, Cost Optimization und Architecture Evolution"
            ],
            idealFor: "Unternehmen mit produktiven Kubernetes Workloads, die Platform Engineering Expertise benötigen, aber keine Full-Time Kubernetes Admins einstellen wollen."
          }
        },
        {
          title: "Sovereign Cloud Operations",
          description: "GDPR-konforme Cloud-Infrastruktur mit Datenhoheit in Deutschland",
          price: "75.000€",
          duration: "8-10 Wochen",
          deliverables: ["Sovereign Setup", "Compliance Framework", "Data Residency", "Audit Reports"],
          details: {
            overview: "Für regulierte Branchen und kritische Infrastrukturen ist digitale Souveränität entscheidend. Wir implementieren eine Sovereign Cloud Lösung mit garantierter Datenhoheit in Deutschland, ohne Zugriff durch Nicht-EU-Behörden. Basierend auf Gaia-X Prinzipien und GDPR-konform – mit der Flexibilität von Public Cloud, aber voller Datenkontrolle.",
            whatYouGet: [
              "Sovereign Cloud Architecture auf deutschen Cloud-Providern (ionos, Open Telekom Cloud oder plusserver)",
              "Data Residency Guarantee: Alle Daten verbleiben physisch in Deutschland",
              "GDPR Compliance Framework mit Privacy by Design und Data Protection Impact Assessments",
              "Zero US Cloud Act Exposure: Keine Zugriffsmöglichkeit durch Nicht-EU-Behörden",
              "End-to-End Encryption mit deutschem Key Management (Bring Your Own Key)",
              "Compliance Automation: Automated Audit Logs, Compliance Reports und Policy Enforcement",
              "BSI C5 und ISO 27001 konforme Security Controls",
              "Quartalsweise Compliance Audits und Audit-ready Documentation"
            ],
            process: [
              "Compliance Requirements (2 Wochen): Legal Assessment, Data Classification und Architecture Design",
              "Sovereign Setup (3-4 Wochen): Infrastructure Deployment in deutschen Rechenzentren",
              "Security Hardening (2 Wochen): Encryption, Access Controls und Audit Logging",
              "Compliance Validation (2 Wochen): Penetration Testing, Audit Preparation und Documentation"
            ],
            idealFor: "Öffentliche Verwaltung, Gesundheitswesen, Finanzinstitute und kritische Infrastrukturen mit strengsten Compliance-Anforderungen und digitaler Souveränität."
          }
        },
        {
          title: "Enterprise Support Package",
          description: "Dedizierter Cloud Architect, Priority Support und Custom SLAs",
          price: "Auf Anfrage",
          duration: "Flexibel",
          deliverables: ["Dedicated Support", "Architecture Reviews", "Custom SLA", "Quarterly Strategy"],
          details: {
            overview: "Für strategisch kritische Cloud-Infrastrukturen bieten wir maßgeschneiderte Enterprise Support Packages mit dediziertem Cloud Architect, Custom SLAs und Priority Support. Ihr persönlicher Architect kennt Ihre gesamte Infrastruktur, berät proaktiv zu Optimierungen und ist Ihr direkter Ansprechpartner für alle Cloud-Themen – wie ein erweitertes Team-Mitglied.",
            whatYouGet: [
              "Dedicated Cloud Architect (10-20h/Monat) als persönlicher Ansprechpartner",
              "Priority Support mit Custom SLA: 15min Response Time für P1 Incidents",
              "Monatliche Architecture Reviews mit Optimization Recommendations",
              "Quartalsweise Strategic Planning Sessions mit Roadmap Alignment",
              "Unlimited Advisory Hours für Architecture Questions und Design Reviews",
              "Proactive Monitoring mit personalisiertem Dashboard und Weekly Reports",
              "Early Access zu neuen Cloud Services und Beta Programs",
              "Annual Cloud Strategy Workshop mit C-Level Presentation",
              "Dedicated Slack/Teams Channel für direkten Zugang zum Architect"
            ],
            process: [
              "Onboarding (1 Monat): Deep Dive in Ihre Infrastruktur und Business Goals",
              "Monthly Touchpoints: Architecture Reviews, Optimization Sessions und Roadmap Updates",
              "Quarterly Business Reviews: Strategic Alignment und Multi-Year Planning",
              "Ad-hoc Support: Jederzeit verfügbar für dringende Architecture Decisions"
            ],
            idealFor: "Enterprise-Kunden mit kritischen Cloud-Workloads, komplexen Multi-Cloud Environments oder strategischen Transformations-Projekten, die Premium-Support benötigen."
          }
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
                  <div className="p-4 bg-slate-900 rounded-2xl shadow-lg">
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
                    onClick={() => setSelectedOffering(offering)}
                    className="group relative cursor-pointer"
                  >
                    {/* Gradient Border Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${solution.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />
                    
                    <div className="relative h-full p-8 bg-white rounded-3xl border-2 border-slate-100 group-hover:border-transparent transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors duration-300">
                          {offering.title}
                        </h3>
                        <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                          <div className="px-4 py-2 bg-slate-900 rounded-xl shadow-md">
                            <span className="text-white font-bold text-lg whitespace-nowrap">{offering.price}</span>
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
                <div className="flex items-center gap-4 mt-4 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedOffering.duration}</span>
                  </div>
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
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-accent" />
                  Lieferumfang
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedOffering.deliverables.map((item: string) => (
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
