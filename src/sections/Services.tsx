import { motion } from "framer-motion";
import {
  MessageSquare,
  Zap,
  Users,
  FileText,
  CheckCircle2,
  Mail,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: "knowledge" | "automation";
  details: string[];
}

const Services = () => {
  const services: Service[] = [
    {
      title: "Technischer Kundensupport",
      description:
        "Chatten mit firmeninternen Betriebsanleitungen, Handbüchern und Dokumentationen.",
      icon: <MessageSquare className="w-6 h-6" />,
      category: "knowledge",
      details: [
        "Fehlercode-Lösungen in Echtzeit",
        "Zugriff auf Service-Dokumentationen",
        "Schnelle Lösungsfindung",
      ],
    },
    {
      title: "Projektbasierte Arbeit",
      description:
        "Chatten mit firmeninternen Projektdokumentationen und ähnlichen Fallstudien.",
      icon: <FileText className="w-6 h-6" />,
      category: "knowledge",
      details: [
        "Ähnliche Projekte finden",
        "Best Practices abrufen",
        "Kundenanlage wiederverwenden",
      ],
    },
    {
      title: "Schulung & Onboarding",
      description:
        "Neue Mitarbeiter erhalten schnelle Antworten auf Fragen zu Prozessen, Richtlinien und Systemen.",
      icon: <Users className="w-6 h-6" />,
      category: "knowledge",
      details: [
        "Onboarding-Prozesse erklären",
        "Relevante Dokumentationen filtern",
        "Schnellere Lernkurve",
      ],
    },
    {
      title: "Rechnungsautomation",
      description:
        "Rechnung geht raus, automatische Erinnerung und Zahlungsprüfung.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      category: "automation",
      details: [
        "Automatische Rechnungserstellung",
        "Zahlungsstatus überwachen",
        "Erinnerungen senden",
      ],
    },
    {
      title: "Preisprüfung & Einfügung",
      description:
        "Bot prüft Preise automatisch und pflegt diese ein. Bei Unstimmigkeiten Mitarbeiter-Eskalation.",
      icon: <Zap className="w-6 h-6" />,
      category: "automation",
      details: [
        "Automatische Preisvalidation",
        "Intelligente Eskalation",
        "Bis zu 80% weniger manuelle Eingaben",
      ],
    },
    {
      title: "Automatisierte Kundenpflege",
      description:
        "Willkommens-E-Mails, Dankeschön-Nachrichten und Follow-ups nach wichtigen Ereignissen.",
      icon: <Mail className="w-6 h-6" />,
      category: "automation",
      details: [
        "Willkommens-Sequenzen",
        "Event-basierte Follow-ups",
        "24/7 Kundenpflege",
      ],
    },
  ];

  const knowledgeServices = services.filter((s) => s.category === "knowledge");
  const automationServices = services.filter(
    (s) => s.category === "automation",
  );

  const ServiceCard = ({
    service,
    index,
  }: {
    service: Service;
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-brand-primary/30 overflow-hidden">
      {/* Top accent border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-accent" />

      {/* Icon container */}
      <div className="mb-6 inline-flex p-4 rounded-xl bg-slate-50 text-brand-primary group-hover:bg-brand-primary/10 transition-colors">
        {service.icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">
        {service.title}
      </h3>

      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Details list */}
      <ul className="space-y-2">
        {service.details.map((detail, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-sm text-slate-600">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 flex-shrink-0" />
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main heading */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Unsere Dienstleistungen
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Von der Wissenszentralisierung bis zur vollständigen
            Prozessautomation – wir bieten maßgeschneiderte KI-Lösungen für Ihr
            Unternehmen.
          </p>
        </div>

        {/* Knowledge Services */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-slate-900 mb-10 flex items-center gap-3">
            <div className="w-1 h-8 bg-brand-primary rounded-full" />
            KI mit Firmenwissen
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {knowledgeServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Automation Services */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-bold text-slate-900 mb-10 flex items-center gap-3">
            <div className="w-1 h-8 bg-brand-accent rounded-full" />
            Prozessautomation
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index + knowledgeServices.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
