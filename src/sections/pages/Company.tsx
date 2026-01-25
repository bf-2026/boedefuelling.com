import { motion } from "framer-motion";

export default function CompanyPage() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Über Boedefuelling
          </h1>
          <p className="text-xl text-slate-600">
            Unternehmen durch KI und Automatisierung transformieren
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Unsere Geschichte</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Mit der Mission gegründet, die Lücke zwischen Prozessexpertise und hochmoderner KI-Technologie zu schließen, 
              kombiniert Boedefuelling tiefes Geschäftsverständnis mit modernen Automatisierungslösungen.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Wir glauben, dass erfolgreiche digitale Transformation mehr als nur Technologie erfordert – sie verlangt 
              strategisches Denken, organisatorische Reife und kontinuierliche Unterstützung während der gesamten Reise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <div className="bg-slate-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">In Zahlen</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-3xl font-bold text-brand-primary">50+</p>
                  <p className="text-slate-600">Erfolgreiche Projekte</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-primary">200+</p>
                  <p className="text-slate-600">Zufriedene Kunden</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-primary">15+</p>
                  <p className="text-slate-600">Jahre kombinierte Erfahrung</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
