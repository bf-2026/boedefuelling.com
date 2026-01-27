import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

interface Article {
  id: number;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  gradient: string;
}

export default function InsightsPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 1,
      title: "KI-Revolution: Wie Unternehmen 2026 von intelligenter Automation profitieren",
      date: "27. Januar 2026",
      readTime: "8 Min. Lesezeit",
      category: "Künstliche Intelligenz",
      gradient: "from-blue-600 via-purple-600 to-pink-600",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&q=80",
      excerpt: "Die Künstliche Intelligenz transformiert die Geschäftswelt rasant. Erfahren Sie, wie führende Unternehmen KI nutzen, um Prozesse zu optimieren und Wettbewerbsvorteile zu sichern.",
      content: `
# KI-Revolution: Wie Unternehmen 2026 von intelligenter Automation profitieren

Die Künstliche Intelligenz ist längst keine Zukunftsmusik mehr – sie ist die Gegenwart. Unternehmen weltweit setzen auf KI-gestützte Lösungen, um ihre Effizienz zu steigern, Kosten zu senken und innovative Geschäftsmodelle zu entwickeln.

## Die wichtigsten Trends 2026

**1. Generative KI im Kundenservice**
Moderne Chatbots und virtuelle Assistenten erreichen eine Qualität, die menschliche Interaktionen nahezu perfekt nachahmt. Unternehmen berichten von 60% Kostenreduktion bei gleichzeitiger Steigerung der Kundenzufriedenheit.

**2. Predictive Analytics in der Produktion**
Machine Learning-Modelle prognostizieren Wartungsbedarfe mit 95% Genauigkeit. Dies ermöglicht proaktive Instandhaltung und reduziert ungeplante Ausfallzeiten um bis zu 50%.

**3. Automatisierte Entscheidungsfindung**
KI-Systeme übernehmen zunehmend komplexe Geschäftsentscheidungen in Bereichen wie Preisgestaltung, Lagerverwaltung und Personalplanung.

## Erfolgsgeschichten aus der Praxis

Ein deutscher Mittelständler im Maschinenbau implementierte unsere KI-gestützte Qualitätskontrolle. Das Ergebnis: 40% weniger Ausschuss, 30% schnellere Produktionszyklen und ROI nach nur 8 Monaten.

## Herausforderungen meistern

Die größten Hürden bei der KI-Einführung sind:
- Datenschutz und DSGVO-Compliance
- Integration in bestehende IT-Landschaften
- Qualifizierung der Mitarbeiter
- Change Management

Mit der richtigen Strategie und erfahrenen Partnern lassen sich diese Herausforderungen erfolgreich bewältigen.

## Fazit

KI ist kein Nice-to-Have mehr, sondern ein Must-Have für wettbewerbsfähige Unternehmen. Der Zeitpunkt zu handeln ist jetzt – denn die Konkurrenz schläft nicht.
      `
    },
    {
      id: 2,
      title: "Cloud-First Strategie: Der Wegweiser zur digitalen Transformation",
      date: "15. Januar 2026",
      readTime: "6 Min. Lesezeit",
      category: "Cloud Computing",
      gradient: "from-cyan-600 via-blue-600 to-indigo-700",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=600&fit=crop&q=80",
      excerpt: "Die Migration in die Cloud ist mehr als nur ein technisches Projekt. Entdecken Sie, wie eine durchdachte Cloud-Strategie Ihr Business revolutionieren kann.",
      content: `
# Cloud-First Strategie: Der Wegweiser zur digitalen Transformation

Die Cloud hat sich vom Trend zur Notwendigkeit entwickelt. Unternehmen, die heute noch auf On-Premise-Lösungen setzen, riskieren den Anschluss an die digitale Zukunft zu verlieren.

## Warum Cloud-First?

**Skalierbarkeit**
Passen Sie Ihre Ressourcen in Echtzeit an die Nachfrage an. Keine überdimensionierten Server mehr, die ungenutzt Kosten verursachen.

**Kosteneffizienz**
Pay-as-you-go Modelle reduzieren Investitionskosten um durchschnittlich 40%. Keine teuren Hardware-Anschaffungen, keine Wartungskosten.

**Innovation**
Zugriff auf modernste Technologien wie KI, Machine Learning und Big Data Analytics ohne eigene Infrastruktur aufbauen zu müssen.

## Der richtige Migrationsansatz

**Phase 1: Assessment**
Analysieren Sie Ihre aktuelle IT-Landschaft. Welche Workloads eignen sich für die Cloud? Welche Abhängigkeiten bestehen?

**Phase 2: Strategie**
Definieren Sie Ihre Cloud-Architektur. Multi-Cloud, Hybrid oder Single-Cloud? Jeder Ansatz hat seine Vor- und Nachteile.

**Phase 3: Migration**
Beginnen Sie mit nicht-kritischen Systemen. Sammeln Sie Erfahrungen, bevor Sie Kern-Applikationen migrieren.

**Phase 4: Optimierung**
Nach der Migration beginnt die eigentliche Arbeit. Optimieren Sie Kosten, Performance und Sicherheit kontinuierlich.

## Sicherheit in der Cloud

Ein häufiges Missverständnis: Die Cloud ist unsicher. Die Realität: Cloud-Provider investieren Milliarden in Sicherheit. Die größten Risiken entstehen durch Fehlkonfigurationen – hier helfen wir Ihnen.

## ROI einer Cloud-Migration

Unsere Kunden berichten von:
- 35% Kostenreduktion in den ersten 12 Monaten
- 10x schnellere Time-to-Market für neue Features
- 99.9% Verfügbarkeit statt 95% On-Premise
- 50% weniger IT-Personal für Wartung benötigt

Die Cloud ist nicht die Zukunft – sie ist die Gegenwart. Verpassen Sie nicht den Anschluss!
      `
    },
    {
      id: 3,
      title: "DevOps & Automation: Schneller, sicherer, effizienter entwickeln",
      date: "8. Januar 2026",
      readTime: "7 Min. Lesezeit",
      category: "DevOps",
      gradient: "from-green-600 via-teal-600 to-blue-600",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1200&h=600&fit=crop&q=80",
      excerpt: "DevOps revolutioniert die Softwareentwicklung. Erfahren Sie, wie automatisierte CI/CD-Pipelines Ihre Deployment-Geschwindigkeit verzehnfachen können.",
      content: `
# DevOps & Automation: Schneller, sicherer, effizienter entwickeln

In der modernen Softwareentwicklung sind DevOps-Praktiken kein Luxus mehr, sondern Standard. Unternehmen, die DevOps richtig umsetzen, deployen bis zu 200x häufiger als ihre Wettbewerber.

## Was ist DevOps wirklich?

DevOps ist mehr als nur ein Buzzword. Es ist eine Kultur, eine Philosophie und eine Sammlung von Praktiken, die Development und Operations vereinen.

**Die Säulen von DevOps:**
1. Automatisierung
2. Continuous Integration/Continuous Deployment (CI/CD)
3. Monitoring und Logging
4. Infrastruktur als Code (IaC)
5. Kultureller Wandel

## CI/CD: Das Herzstück moderner Entwicklung

Stellen Sie sich vor: Ihr Code geht vom Commit bis zur Production in unter 30 Minuten – vollautomatisiert, getestet und sicher.

**Unser typischer CI/CD-Flow:**

Code Commit → Automatische Tests → Security Scans → Build → Staging Deployment → Automatische Integration Tests → Production Deployment → Monitoring

## Automation überall

**Infrastructure as Code**
Verwalten Sie Ihre gesamte Infrastruktur mit Code. Kubernetes, Terraform, Ansible – die Tools sind ausgereift und produktionsbereit.

**Automatisierte Tests**
Unit Tests, Integration Tests, E2E Tests – alles automatisiert. Bugs werden gefunden, bevor sie Production erreichen.

**Security Automation**
Security Scans bei jedem Build. Vulnerabilities werden automatisch erkannt und gemeldet.

## Messbare Erfolge

Unternehmen, die mit uns DevOps implementiert haben:
- 10x schnellere Deployments
- 50% weniger Fehler in Production
- 60% kürzere Zeit zur Problemlösung
- 40% höhere Entwickler-Produktivität

## Der Weg zu DevOps

**Schritt 1:** Beginnen Sie klein. Ein Team, ein Projekt.
**Schritt 2:** Automatisieren Sie die offensichtlichen Prozesse.
**Schritt 3:** Messen Sie alles. Ohne Metriken keine Verbesserung.
**Schritt 4:** Skalieren Sie erfolgreiche Praktiken auf andere Teams.

DevOps ist eine Reise, kein Ziel. Aber eine Reise, die sich lohnt!
      `
    },
    {
      id: 4,
      title: "Datensicherheit in der Ära von KI und Big Data",
      date: "20. Dezember 2025",
      readTime: "9 Min. Lesezeit",
      category: "Cybersecurity",
      gradient: "from-red-600 via-orange-600 to-amber-600",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop&q=80",
      excerpt: "Mit der DSGVO und zunehmenden Cyber-Bedrohungen ist Datensicherheit kritischer denn je. Erfahren Sie, wie Sie Ihre Daten schützen und gleichzeitig Innovation ermöglichen.",
      content: `
# Datensicherheit in der Ära von KI und Big Data

Datenschutz und Cybersecurity sind keine IT-Themen mehr – sie sind Business-kritisch. Ein einziger Datenleck kann Millionen kosten und den Ruf dauerhaft schädigen.

## Die aktuelle Bedrohungslage

**Cyberkriminalität boomt:**
- Ransomware-Angriffe haben sich 2025 verdreifacht
- Durchschnittliche Lösegeldforderung: €2,3 Millionen
- Durchschnittliche Kosten eines Datenlecks: €4,5 Millionen
- 93% aller Angriffe beginnen mit einer Phishing-E-Mail

## DSGVO-Compliance: Pflicht und Chance

Die DSGVO ist mehr als nur eine lästige Regelung. Sie ist ein Wettbewerbsvorteil. Kunden vertrauen Unternehmen, die Datenschutz ernst nehmen.

**Die wichtigsten DSGVO-Anforderungen:**
1. Rechtmäßigkeit der Datenverarbeitung
2. Zweckbindung und Datenminimierung
3. Recht auf Vergessenwerden
4. Meldepflicht bei Datenpannen (72 Stunden)
5. Privacy by Design

## KI und Datenschutz – ein Widerspruch?

Nein! KI und Datenschutz schließen sich nicht aus. Mit den richtigen Techniken:

**Federated Learning**
Trainieren Sie KI-Modelle, ohne Daten zu zentralisieren. Die Daten bleiben beim Ursprung.

**Differential Privacy**
Fügen Sie kontrolliertes "Rauschen" zu Daten hinzu. Das Modell lernt, individuelle Datenpunkte bleiben geschützt.

**Homomorphe Verschlüsselung**
Rechnen Sie mit verschlüsselten Daten. Klingt wie Science Fiction, ist aber bereits produktionsreif.

## Best Practices für Datensicherheit

**1. Zero Trust Architecture**
Vertrauen Sie niemandem – intern wie extern. Jeder Zugriff wird verifiziert.

**2. Multi-Faktor-Authentifizierung**
Überall. Ohne Ausnahme.

**3. Regelmäßige Security Audits**
Mindestens quartalsweise. Pentests durch externe Experten.

**4. Mitarbeiter-Schulungen**
Der Mensch ist das schwächste Glied. Investieren Sie in Awareness-Training.

**5. Incident Response Plan**
Wenn (nicht falls) ein Angriff kommt: Haben Sie einen Plan?

## Security as Code

Moderne Security ist automatisiert:
- Vulnerability Scans bei jedem Build
- Automatische Patch-Verwaltung
- Continuous Compliance Monitoring
- Automated Threat Detection

## ROI von Security-Investitionen

Jeder in Security investierte Euro spart im Schnitt 7 Euro an vermiedenen Schäden. Die Frage ist nicht, ob Sie sich Security leisten können, sondern ob Sie sich KEINE leisten können.

Datensicherheit ist keine Option – sie ist Pflicht. Aber mit der richtigen Strategie wird aus Compliance ein Wettbewerbsvorteil.
      `
    },
    {
      id: 5,
      title: "ROI von Prozessautomatisierung: Zahlen, die überzeugen",
      date: "10. Dezember 2025",
      readTime: "5 Min. Lesezeit",
      category: "Automation",
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&q=80",
      excerpt: "Prozessautomatisierung klingt teuer? Die Zahlen sprechen eine andere Sprache. Reale Beispiele zeigen: ROI in unter 12 Monaten ist die Regel, nicht die Ausnahme.",
      content: `
# ROI von Prozessautomatisierung: Zahlen, die überzeugen

"Automation ist zu teuer" – das hören wir oft. Bis wir die Zahlen zeigen. Dann wird aus Skepsis schnell Begeisterung.

## Die harte Realität manueller Prozesse

Ein typisches mittelständisches Unternehmen mit 500 Mitarbeitern:

**Rechnungsverarbeitung:**
- 10.000 Rechnungen/Jahr
- 15 Minuten pro Rechnung (manuell)
- 2.500 Arbeitsstunden/Jahr
- Bei €40/Stunde = €100.000 Jahreskosten

**Mit Automation:**
- 2 Minuten pro Rechnung (inkl. Kontrolle)
- 333 Arbeitsstunden/Jahr
- €13.320 Jahreskosten
- **Einsparung: €86.680/Jahr**

## Reale Erfolgsgeschichten

**Case Study 1: Automobilzulieferer**
- Investition: €75.000
- Jährliche Einsparung: €180.000
- ROI nach: 5 Monaten
- Zusatznutzen: 95% weniger Fehler

**Case Study 2: Versicherungsgesellschaft**
- Investition: €120.000
- Jährliche Einsparung: €340.000
- ROI nach: 4 Monaten
- Zusatznutzen: 60% schnellere Schadensbearbeitung

**Case Study 3: E-Commerce**
- Investition: €45.000
- Jährliche Einsparung: €95.000
- ROI nach: 6 Monaten
- Zusatznutzen: 24/7 Verfügbarkeit

## Die versteckten Kosten manueller Arbeit

Direktekosten sind nur die Spitze des Eisbergs:

**Fehlerkosten:**
Menschen machen Fehler. 3-5% Fehlerquote ist normal. Bei sensiblen Prozessen: katastrophal.

**Opportunitätskosten:**
Während Ihre Mitarbeiter Rechnungen tippen, können sie nicht strategisch arbeiten.

**Skalierungsprobleme:**
Mehr Volumen = mehr Personal. Automation skaliert ohne zusätzliche Kosten.

**Compliance-Risiken:**
Manuelle Prozesse = inkonsistente Prozesse. Automation garantiert Compliance.

## Der ROI-Rechner

**Formel:**

ROI = (Einsparungen - Kosten) / Kosten × 100

**Beispiel:**
- Einsparungen: €150.000/Jahr
- Kosten: €80.000 (einmalig)
- ROI = (€150.000 - €80.000) / €80.000 × 100 = 87,5%
- Payback: 6,4 Monate

## Quick Wins: Prozesse mit bestem ROI

**1. Rechnungsverarbeitung:** ROI nach 3-8 Monaten
**2. Kundenservice-Automation:** ROI nach 4-10 Monaten
**3. HR-Prozesse (Onboarding):** ROI nach 6-12 Monaten
**4. Reporting-Automation:** ROI nach 2-6 Monaten
**5. Datenintegration:** ROI nach 8-14 Monaten

## Häufige ROI-Killer vermeiden

**1. Zu groß beginnen**
Starten Sie mit Pilot-Projekten. Proof of Concept vor Roll-out.

**2. Fehlende Change-Management**
Die beste Automation scheitert ohne Akzeptanz der Mitarbeiter.

**3. Keine klaren KPIs**
Was Sie nicht messen, können Sie nicht verbessern.

**4. Falsche Prozess-Auswahl**
Nicht jeder Prozess sollte automatisiert werden. Priorisieren Sie nach Impact.

## Der Zeitfaktor

ROI ist nicht nur finanziell:

- Mitarbeiter gewinnen Zeit für wertschöpfende Aufgaben
- Schnellere Durchlaufzeiten erhöhen Kundenzufriedenheit
- 24/7-Verfügbarkeit verschafft Wettbewerbsvorteile
- Fehlerreduktion minimiert Risiken

## Fazit: Die Kosten des Nicht-Handelns

Die relevante Frage ist nicht: "Können wir uns Automation leisten?"
Sondern: "Können wir es uns leisten, NICHT zu automatisieren?"

Bei durchschnittlichen ROI-Zeiten von 6-12 Monaten ist die Antwort klar.
      `
    },
    {
      id: 6,
      title: "Machine Learning in der Praxis: Von der Theorie zur Production",
      date: "25. November 2025",
      readTime: "10 Min. Lesezeit",
      category: "Machine Learning",
      gradient: "from-emerald-600 via-green-600 to-lime-600",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=600&fit=crop&q=80",
      excerpt: "95% aller ML-Projekte scheitern. Nicht wegen der Technologie, sondern wegen falscher Herangehensweise. Lernen Sie, wie Sie zur erfolgreichen Minderheit gehören.",
      content: `
# Machine Learning in der Praxis: Von der Theorie zur Production

Die Ernüchterung kommt meist nach 6 Monaten: Das ML-Modell funktioniert im Jupyter Notebook perfekt. Aber in Production? Komplette Katastrophe.

## Warum ML-Projekte scheitern

**Die Top 5 Gründe:**

1. **Unrealistische Erwartungen** (45%)
   "KI wird all unsere Probleme lösen!" Nein, wird sie nicht.

2. **Schlechte Datenqualität** (30%)
   Garbage in, Garbage out. Gilt besonders für ML.

3. **Fehlende ML Ops** (15%)
   Das Modell ist 10% der Arbeit. Deployment, Monitoring, Maintenance sind 90%.

4. **Zu komplex für das Problem** (7%)
   Nicht jedes Problem braucht Deep Learning. Manchmal reicht logistische Regression.

5. **Mangelnde Expertise** (3%)
   ML ist komplex. Self-taught-Wochenendprojekte funktionieren selten.

## Der richtige ML-Workflow

**Phase 1: Problem Definition**
Bevor Sie ein Modell trainieren: Was ist eigentlich das Business-Problem?

Schlechte Frage: "Können wir ML nutzen?"
Gute Frage: "Wie reduzieren wir Kundenabwanderung um 20%?"

**Phase 2: Daten-Assessment**
- Haben Sie genug Daten? (Minimum: 1000 Datenpunkte pro Klasse)
- Sind die Daten sauber?
- Sind die Features relevant?
- Gibt es Bias in den Daten?

**Phase 3: Baseline etablieren**
Starten Sie IMMER mit einem einfachen Modell. Logistische Regression, Decision Trees. Sie werden überrascht sein, wie gut "einfach" funktioniert.

**Phase 4: Iteratives Modell-Training**
Jetzt können Sie fancy werden. Aber messen Sie IMMER gegen die Baseline.

**Phase 5: Production-Readiness**
Das Modell ist fertig? Die Arbeit fängt gerade an.

## ML Ops: Das Missing Piece

**Model Deployment:**
- Containerisierung (Docker)
- API-Endpoints (FastAPI, Flask)
- Load Balancing
- A/B Testing Framework

**Monitoring:**
- Model Performance Metriken
- Data Drift Detection
- Prediction Latency
- Error Rates

**Maintenance:**
- Regelmäßiges Retraining
- Feature Updates
- Model Versioning
- Rollback-Strategien

## Real-World Beispiel: Predictive Maintenance

**Das Problem:**
Maschinenausfälle kosten €50.000/Stunde. Kann ML helfen?

**Die Lösung:**
- Sensor-Daten von 200 Maschinen
- 18 Monate historische Daten
- Random Forest Classifier

**Das Resultat:**
- 92% Genauigkeit bei Fehlervorhersage
- 4 Stunden Vorwarnzeit
- Reduktion ungeplanter Ausfälle um 65%
- ROI nach 7 Monaten

**Die Herausforderung:**
Nicht das Modell-Training. Sondern:
- Integration in bestehende Systeme
- Echtzeit-Verarbeitung der Sensor-Daten
- Alerts an Wartungsteams
- Dashboard für Management

## Feature Engineering: Der Unterschied zwischen OK und Exzellent

80% der ML-Performance kommt von guten Features, nicht vom Modell.

**Beispiel Fraud Detection:**
Schlechte Features:
- Transaction Amount
- Timestamp

Gute Features:
- Transactions per Hour (aggregated)
- Average Transaction Amount (last 7 days)
- Deviation from User Pattern
- Time since last Transaction
- Geolocation Velocity
- Device Fingerprint Match

## Die Kosten von ML

**Was Unternehmen oft unterschätzen:**

Initial Development: 30% der Gesamtkosten
Data Pipeline: 25%
ML Ops & Infrastructure: 25%
Monitoring & Maintenance: 20%

Ein Projekt für €100.000 kostet über 3 Jahre: ~€250.000

## Wann ML, wann nicht?

**ML ist NICHT die Lösung für:**
- Probleme mit <1000 Datenpunkten
- Einfache Wenn-Dann-Regeln
- Prozesse ohne Muster
- Black-Box-intolerante Bereiche (Medizin, Finanzen)

**ML IST die Lösung für:**
- Komplexe Pattern Recognition
- Große Datenmengen
- Sich ändernde Umgebungen
- Automatisierbare Entscheidungen

## Der Weg zum erfolgreichen ML-Projekt

1. Klein starten (Proof of Concept)
2. Business Value beweisen
3. Infrastruktur aufbauen
4. Skalieren

Nicht andersherum!

Machine Learning ist mächtig. Aber kein Zauberstab. Mit der richtigen Strategie werden aus 95% Failure Rate 95% Success Rate.
      `
    }
  ];

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Article Header */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${selectedArticle.gradient} opacity-70`} />
          <img 
            src={selectedArticle.image} 
            alt={selectedArticle.title}
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          
          <div className="relative container mx-auto px-4 md:px-6 h-full flex items-end pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl">
              <button
                onClick={() => setSelectedArticle(null)}
                className="mb-6 flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium">
                <ArrowRight className="w-4 h-4 rotate-180" />
                Zurück zur Übersicht
              </button>
              
              <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                {selectedArticle.category}
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {selectedArticle.title}
              </h1>
              
              <div className="flex items-center gap-6 text-white/90 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {selectedArticle.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {selectedArticle.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 md:px-6 py-16">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto prose prose-lg prose-slate
                       prose-headings:font-bold prose-headings:text-slate-900
                       prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                       prose-p:text-slate-600 prose-p:leading-relaxed
                       prose-strong:text-slate-900 prose-strong:font-semibold
                       prose-ul:text-slate-600 prose-li:my-2
                       prose-code:text-brand-primary prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded">
            {selectedArticle.content.split('\n').map((paragraph, idx) => {
              if (paragraph.startsWith('# ')) {
                return <h1 key={idx}>{paragraph.slice(2)}</h1>;
              } else if (paragraph.startsWith('## ')) {
                return <h2 key={idx}>{paragraph.slice(3)}</h2>;
              } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <p key={idx}><strong>{paragraph.slice(2, -2)}</strong></p>;
              } else if (paragraph.startsWith('```')) {
                return null;
              } else if (paragraph.trim()) {
                return <p key={idx}>{paragraph}</p>;
              }
              return null;
            })}
          </motion.article>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto mt-16 p-8 bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interessiert an unseren Lösungen?
            </h3>
            <p className="text-white/90 mb-6">
              Lassen Sie uns gemeinsam Ihre digitale Transformation gestalten
            </p>
            <button className="px-8 py-3 bg-white text-brand-primary rounded-full font-semibold hover:shadow-xl transition-shadow">
              Kostenloses Beratungsgespräch buchen
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Einblicke & <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Expertise</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Tiefgehende Analysen, Best Practices und Erfolgsgeschichten aus der Welt der digitalen Transformation
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedArticle(article)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border-2 border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-300">
              
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-60 group-hover:opacity-70 transition-opacity`} />
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-900">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-2 text-brand-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Artikel lesen
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
