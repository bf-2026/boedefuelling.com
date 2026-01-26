import { motion } from "framer-motion";
import { Zap, Server } from "lucide-react";

const services = [
  {
    category: "Schnellstart Angebote",
    icon: Zap,
    items: [
      "Cloud Consulting",
      "Azure Pricing Assessment",
      "IaC Infrastructure as Code Workshop",
      "Cloud Datenbanken",
      "Docker Beratung",
      "Windows Virtual Desktop",
      "IT-Projekte",
    ],
  },
  {
    category: "Azure Administration",
    icon: Server,
    items: [
      "Crossplane Kubernetes",
      "Souveräne/Private Cloud Architekturen",
      "DevOps Engineering",
      "Internal Developer Platform",
    ],
  },
];

export default function CloudServices() {
  return (
    <section className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Cloud Services & Automation
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Professionelle Cloud-Lösungen für moderne Unternehmen
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow-sm border border-slate-100">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
                alt="Azure"
                className="w-8 h-8"
              />
              <span className="text-slate-700 font-semibold">Azure</span>
            </div>

            <span className="text-slate-300 text-2xl">•</span>

            <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow-sm border border-slate-100">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                alt="AWS"
                className="w-8 h-8"
              />
              <span className="text-slate-700 font-semibold">AWS</span>
            </div>

            <span className="text-slate-300 text-2xl">•</span>

            <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow-sm border border-slate-100">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
                alt="Google Cloud"
                className="w-8 h-8"
              />
              <span className="text-slate-700 font-semibold">GCP</span>
            </div>

            <span className="text-slate-300 text-2xl">•</span>

            <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow-sm border border-slate-100">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
                alt="Kubernetes"
                className="w-8 h-8"
              />
              <span className="text-slate-700 font-semibold">Kubernetes</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />

                <div className="relative h-full p-6 bg-white/90 backdrop-blur-lg rounded-2xl border-2 border-slate-100 group-hover:border-brand-primary/50 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <div className="mb-4 p-3 bg-gradient-to-br from-brand-primary/15 to-brand-accent/10 w-fit rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-brand-primary" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-brand-primary transition-colors">
                    {service.category}
                  </h3>

                  <ul className="space-y-2">
                    {service.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-brand-primary mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
