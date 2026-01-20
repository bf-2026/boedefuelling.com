import React from "react";
import { Lightbulb, Layout, Code2, HeartHandshake } from "lucide-react";
import phasesimage from "../assets/phases-illustration.webp";

interface Phase {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProjectPhases: React.FC = () => {
  const phases: Phase[] = [
    {
      title: "Anforderungsanalyse",
      description:
        "In einem kurzen 30 min Gespräch ermitteln wir Ihre Anforderungen und entwickeln einen konkreten Projektfahrplan mit messbaren Zielen.",
      icon: <Lightbulb className="w-6 h-6 text-brand-primary" />,
    },
    {
      title: "Maßgeschneiderte Architektur",
      description:
        "Wir entwerfen eine zukunftssichere Systemarchitektur, die perfekt auf Ihre bestehende IT-Landschaft abgestimmt ist.",
      icon: <Layout className="w-6 h-6 text-brand-primary" />,
    },
    {
      title: "Implementierung",
      description:
        "Mit agilen Methoden realisieren wir Ihr Projekt transparent und effizient bis zur erfolgreichen Produktivsetzung.",
      icon: <Code2 className="w-6 h-6 text-brand-primary" />,
    },
    {
      title: "Service & Support",
      description:
        "Nach Go-Live gewährleisten wir durch proaktiven Support und kontinuierliche Optimierung den nachhaltigen Projekterfolg.",
      icon: <HeartHandshake className="w-6 h-6 text-brand-primary" />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Von der Idee zum Betrieb: Ihr maßgeschneidertes KI-Projekt
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Wir begleiten Sie durch alle Projektphasen – von der Zieldefinition
            über Design und Implementierung bis hin zum Service und Support. So
            sorgen wir für Ihren langfristigen Erfolg durch innovative und
            sichere IT-Infrastruktur.
          </p>
          <img
            src={phasesimage}
            alt="Project Phases Illustration"
            className="mx-auto mt-10 w-full h-auto"
          />
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                Phase {index + 1}
              </div>

              <div className="mb-4 mt-2 p-3 bg-blue-50 w-fit rounded-lg md:hidden">
                {phase.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {phase.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPhases;
