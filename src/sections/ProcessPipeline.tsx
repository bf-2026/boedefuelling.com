import { motion } from "framer-motion";
import { Lightbulb, Cog, CheckCircle2, Rocket } from "lucide-react";

const phases = [
  {
    number: "01",
    title: "Strategie & Analyse",
    description:
      "Wir verstehen Ihre spezifischen Anforderungen und identifizieren High-Impact KI-Einsatzpunkte in Ihren Kernprozessen.",
    icon: <Lightbulb className="w-10 h-10" />,
    details: "30-60 min kostenlose Use-Case Analyse",
    color: "brand-primary",
    position: "lg:absolute lg:left-0 lg:top-48 lg:w-64",
  },
  {
    number: "02",
    title: "Design & Planung",
    description:
      "Maßgeschneiderte Lösung: Wir entwerfen ein System, das nahtlos in Ihre bestehende IT-Infrastruktur integriert wird.",
    icon: <Cog className="w-10 h-10" />,
    details: "Technische Architektur, Sicherheit & Compliance",
    color: "brand-accent",
    position: "lg:absolute lg:left-[28%] lg:top-32 lg:w-64",
  },
  {
    number: "03",
    title: "Implementierung",
    description:
      "Agil und transparent: Wir bauen Ihre Lösung iterativ, mit regelmäßigen Demos und schnellem Feedback.",
    icon: <CheckCircle2 className="w-10 h-10" />,
    details: "Testing, Optimierung, Go-Live Vorbereitung",
    color: "brand-primary",
    position: "lg:absolute lg:left-[56%] lg:top-12 lg:w-64",
  },
  {
    number: "04",
    title: "Erfolg im Betrieb",
    description:
      "Nach dem Go-Live: Kontinuierliche Unterstützung, Monitoring und proaktive Verbesserungen für langfristigen ROI.",
    icon: <Rocket className="w-10 h-10" />,
    details: "Support, Wartung, Performance Optimization",
    color: "brand-accent",
    position: "lg:absolute lg:left-[84%] lg:-top-8 lg:w-64",
  },
];

const metrics = [
  {
    label: "Durchschnittliche Dauer",
    value: "4-12 Wochen",
    position: "lg:absolute lg:left-0 lg:w-64",
  },
  {
    label: "Erfolgsquote",
    value: "98%",
    position: "lg:absolute lg:left-[28%] lg:w-64",
  },
  {
    label: "Support",
    value: "24/7",
    position: "lg:absolute lg:left-[56%] lg:w-64",
  },
  {
    label: "ROI-Fokus",
    value: "Garantiert",
    position: "lg:absolute lg:left-[84%] lg:w-64",
  },
];

export default function ProcessPipeline() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(226,232,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Accent Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/5 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-brand-primary/10 border border-brand-primary/30 rounded-lg text-sm font-semibold text-brand-primary">
            🔄 Unser Prozess
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 max-w-4xl mx-auto">
            Von der Idee zur{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              produktiven Lösung
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto mb-6">
            Ein strukturierter, bewährter Prozess, der Ihr KI-Projekt sicher
            und effizient zum Erfolg führt.
          </motion.p>
        </div>

        {/* Process Pipeline - Wave Layout */}
        <div className="relative pt-16 pb-8">
          {/* SVG Wave Connection Line - Desktop Only */}
          <svg
            className="hidden lg:block absolute top-0 left-0 right-0 w-full h-full"
            style={{ pointerEvents: "none" }}
            viewBox="0 0 1200 320"
            preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                <stop offset="33%" stopColor="#14B8A6" stopOpacity="0.6" />
                <stop offset="66%" stopColor="#3B82F6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.5" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Beautiful flowing wave curve */}
            <path
              d="M 80 240 C 200 220, 280 180, 380 160 C 480 140, 560 120, 680 100 C 780 85, 860 75, 1000 60 C 1080 50, 1120 45, 1140 40"
              stroke="url(#waveGrad)"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              filter="url(#glow)"
            />
            {/* Connection dots at phase positions */}
            <circle cx="80" cy="240" r="8" fill="#3B82F6" opacity="0.7" />
            <circle cx="380" cy="160" r="8" fill="#14B8A6" opacity="0.7" />
            <circle cx="680" cy="100" r="8" fill="#3B82F6" opacity="0.7" />
            <circle cx="1000" cy="60" r="8" fill="#14B8A6" opacity="0.7" />
          </svg>

          {/* Phases - Beautiful Wave Layout */}
          <div className="relative space-y-12 lg:space-y-0 lg:h-[420px]">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative group ${phase.position}`}>
                {/* Glow Effect on Hover */}
                <div
                  className="absolute -inset-2 bg-gradient-to-br rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"
                  style={{
                    background:
                      phase.color === "brand-primary"
                        ? "linear-gradient(135deg, #3B82F6, #14B8A6)"
                        : "linear-gradient(135deg, #14B8A6, #3B82F6)",
                  }}
                />

                {/* Stage Card */}
                <div
                  className="relative h-full bg-white rounded-2xl p-6 lg:p-8 shadow-lg border-2 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  style={{
                    borderColor:
                      phase.color === "brand-primary"
                        ? "rgba(59, 130, 246, 0.2)"
                        : "rgba(20, 184, 166, 0.2)",
                    boxShadow: `0 10px 30px -10px ${phase.color === "brand-primary" ? "rgba(59, 130, 246, 0.15)" : "rgba(20, 184, 166, 0.15)"}`,
                  }}>
                  {/* Number Badge with Gradient Border */}
                  <div
                    className="absolute -top-6 left-6 w-12 h-12 rounded-xl text-white flex items-center justify-center font-bold text-base shadow-xl transform group-hover:-rotate-6 transition-transform duration-300"
                    style={{
                      background:
                        phase.color === "brand-primary"
                          ? "linear-gradient(135deg, #3B82F6, #1E40AF)"
                          : "linear-gradient(135deg, #14B8A6, #0891B2)",
                      boxShadow: `0 8px 20px rgba(${phase.color === "brand-primary" ? "59, 130, 246" : "20, 184, 166"}, 0.4)`,
                    }}>
                    {phase.number}
                  </div>

                  {/* Icon with Pulse Animation */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                    style={{
                      backgroundColor:
                        phase.color === "brand-primary"
                          ? "rgba(59, 130, 246, 0.1)"
                          : "rgba(20, 184, 166, 0.1)",
                      color:
                        phase.color === "brand-primary"
                          ? "#3B82F6"
                          : "#14B8A6",
                      boxShadow: `0 4px 12px ${phase.color === "brand-primary" ? "rgba(59, 130, 246, 0.2)" : "rgba(20, 184, 166, 0.2)"}`,
                    }}>
                    {phase.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">
                    {phase.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {phase.description}
                  </p>

                  {/* Details */}
                  <div
                    className="pt-4 border-t flex items-start gap-2"
                    style={{
                      borderColor:
                        phase.color === "brand-primary"
                          ? "rgba(59, 130, 246, 0.15)"
                          : "rgba(20, 184, 166, 0.15)",
                    }}>
                    <span
                      className="font-bold text-lg"
                      style={{
                        color:
                          phase.color === "brand-primary"
                            ? "#3B82F6"
                            : "#14B8A6",
                      }}>
                      ✓
                    </span>
                    <span className="text-xs lg:text-sm text-slate-500 font-medium">
                      {phase.details}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Metrics - Aligned with Phases */}
        <div className="relative mt-64 space-y-8 lg:space-y-0 lg:h-24">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + idx * 0.1 }}
              className={`text-center p-6 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition ${metric.position}`}>
              <div className="text-2xl font-bold text-brand-primary mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-slate-600">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
