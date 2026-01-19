import { motion } from "framer-motion";
import chatimage from "../assets/Chat.png";

export default function Solution() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Zentrale Lösung für Wissenstransfer und Automatisierung
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-2xl mx-auto">
            Unser System macht internes Wissen aktiv nutzbar – über Abteilungen,
            Standorte und Systeme hinweg.
          </motion.p>
        </div>

        {/* Dashboard Mockup */}
        <img
          src={chatimage}
          alt="Dashboard Mockup"
          className="mx-auto w-1/2 max-w-4xl rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
