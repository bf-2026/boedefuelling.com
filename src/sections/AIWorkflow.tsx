import { motion } from "framer-motion";
import { ArrowRight, Brain, Database, Zap, Shield, BarChart3 } from "lucide-react";

const AIWorkflow = () => {
  const stages = [
    {
      icon: Database,
      label: "Ihre Daten",
      color: "from-blue-500 to-blue-600",
      description: "Strukturierte & unstrukturierte Daten"
    },
    {
      icon: Brain,
      label: "KI Processing",
      color: "from-purple-500 to-purple-600",
      description: "Intelligente Analyse & Learning"
    },
    {
      icon: Zap,
      label: "Automatisierung",
      color: "from-orange-500 to-orange-600",
      description: "Intelligente Prozesse"
    },
    {
      icon: Shield,
      label: "Governance",
      color: "from-green-500 to-green-600",
      description: "Sicherheit & Compliance"
    },
    {
      icon: BarChart3,
      label: "Messbare Ergebnisse",
      color: "from-pink-500 to-pink-600",
      description: "ROI & Insights"
    },
  ];

  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full text-sm font-medium text-brand-primary">
              KI-Workflow
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Von Daten zu <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">echtem Impact</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto">
            So funktioniert unsere KI-Lösung: End-to-End Verarbeitung Ihrer Daten mit maximaler Sicherheit
          </motion.p>
        </div>

        {/* Desktop Workflow Chain */}
        <div className="hidden lg:block mb-20">
          <div className="flex items-center justify-between mb-16">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center relative flex-1">
                  
                  {/* Stage Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`relative mb-6 w-24 h-24 rounded-full bg-gradient-to-br ${stage.color} shadow-xl cursor-pointer`}>
                    <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    
                    {/* Pulsing Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"></div>
                  </motion.div>

                  {/* Label */}
                  <h3 className="font-bold text-slate-900 text-center text-sm">
                    {stage.label}
                  </h3>
                  <p className="text-xs text-slate-500 text-center mt-2 max-w-24">
                    {stage.description}
                  </p>

                  {/* Arrow */}
                  {index < stages.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="absolute -right-6 top-6">
                      <div className="flex items-center gap-1">
                        <motion.div
                          animate={{ x: [0, 6, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-brand-primary">
                          <ArrowRight className="w-6 h-6" />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Workflow */}
        <div className="lg:hidden mb-16">
          <div className="space-y-8">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-6 relative">
                  
                  {/* Vertical Line */}
                  {index < stages.length - 1 && (
                    <div className="absolute left-12 top-20 w-0.5 h-12 bg-gradient-to-b from-brand-primary to-transparent"></div>
                  )}

                  {/* Circle */}
                  <div className={`flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br ${stage.color} shadow-lg flex items-center justify-center relative z-10`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-bold text-slate-900">{stage.label}</h3>
                    <p className="text-sm text-slate-500">{stage.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-slate-200/50 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent mb-2">100%</div>
            <p className="text-slate-600 text-sm">Datenhoheit</p>
          </div>

          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-slate-200/50 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent mb-2">End-to-End</div>
            <p className="text-slate-600 text-sm">Verschlüsselt</p>
          </div>

          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-slate-200/50 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent mb-2">DSGVO</div>
            <p className="text-slate-600 text-sm">Konform</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIWorkflow;
