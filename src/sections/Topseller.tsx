import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";

export default function Topseller() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto">
          
          <div className="relative p-10 md:p-12 bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-3xl border-2 border-amber-200/50 shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/40 rounded-full text-sm font-bold text-amber-700 mb-6">
                  <span className="text-xl">🏆</span>
                  <span>Unser Topseller</span>
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Enterprise Chatbot – DSGVO-konform
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-slate-600 leading-relaxed mb-8">
                  Die zentrale Lösung für Wissenstransfer und Automatisierung. Unser DSGVO-konformer Enterprise Chatbot macht internes Wissen aktiv nutzbar – über Abteilungen, Standorte und Systeme hinweg.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="flex flex-wrap gap-4">
                  <Button
                    href="https://cal.com/lucas-fuelling-ytra7k/30min?overlayCalendar=true"
                    variant="brand"
                    size="lg"
                    className="rounded-full text-base font-semibold px-8 shadow-xl shadow-brand-primary/20">
                    Topseller kennenlernen
                  </Button>
                </motion.div>
              </div>

              {/* Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800"
                    alt="Person nutzt KI-Chatbot für Wissenstransfer am Arbeitsplatz"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-xl animate-pulse">
                  #1 Lösung
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
