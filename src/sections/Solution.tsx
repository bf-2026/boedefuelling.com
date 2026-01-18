import { motion } from 'framer-motion';

export default function Solution() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Zentrale Lösung für Wissenstransfer und Automatisierung
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Unser System macht internes Wissen erstmals aktiv nutzbar – über Abteilungen, Standorte und Systeme hinweg.
          </motion.p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="relative max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-2 md:p-4 relative z-10">
             {/* Fake browser header */}
             <div className="flex items-center gap-2 mb-4 px-2">
               <div className="w-3 h-3 rounded-full bg-red-400" />
               <div className="w-3 h-3 rounded-full bg-yellow-400" />
               <div className="w-3 h-3 rounded-full bg-green-400" />
             </div>
             
             {/* Dashboard Layout */}
             <div className="grid grid-cols-12 gap-4 h-[400px] md:h-[500px]">
               {/* Sidebar */}
               <div className="col-span-3 hidden md:block bg-slate-50 rounded-lg p-4 border border-slate-100">
                  <div className="w-32 h-6 bg-slate-200 rounded mb-6" />
                  <div className="space-y-3">
                    <div className="w-full h-4 bg-slate-200/70 rounded" />
                    <div className="w-full h-4 bg-brand-primary/20 rounded" />
                    <div className="w-full h-4 bg-slate-200/70 rounded" />
                    <div className="w-full h-4 bg-slate-200/70 rounded" />
                  </div>
               </div>
               
               {/* Main Content */}
               <div className="col-span-12 md:col-span-9 grid grid-cols-2 gap-4">
                  {/* Header chart */}
                  <div className="col-span-2 bg-white rounded-lg border border-slate-100 p-6 flex flex-col justify-between">
                     <div className="flex justify-between items-center mb-4">
                       <div className="w-48 h-5 bg-slate-200 rounded" />
                       <div className="w-24 h-8 bg-brand-primary/10 text-brand-primary text-xs font-bold flex items-center justify-center rounded">LIVE DATA</div>
                     </div>
                     <div className="flex-1 w-full bg-gradient-to-t from-brand-primary/20 to-transparent rounded-b-lg relative overflow-hidden">
                       <div className="absolute bottom-0 left-0 w-full h-px bg-brand-primary" />
                        {/* Mock Graph Lines */}
                        <svg className="absolute bottom-0 left-0 w-full h-full" overflow="visible">
                          <path d="M0 100 Q 100 50 200 80 T 400 40 T 600 60 T 800 20" fill="none" stroke="#0E9EFF" strokeWidth="2" />
                        </svg>
                     </div>
                  </div>
                  
                  {/* Smaller widgets */}
                  <div className="bg-brand-accent/5 rounded-lg border border-brand-accent/20 p-6">
                    <div className="w-10 h-10 rounded-full bg-brand-accent/20 mb-4 flex items-center justify-center text-brand-primary font-bold">AI</div>
                    <div className="w-24 h-4 bg-slate-200 rounded mb-2" />
                    <div className="w-16 h-8 bg-slate-800 rounded" />
                  </div>
                  
                  <div className="bg-white rounded-lg border border-slate-100 p-6">
                    <div className="w-32 h-4 bg-slate-200 rounded mb-4" />
                    <div className="space-y-2">
                       <div className="w-full h-2 bg-slate-100 rounded" />
                       <div className="w-4/5 h-2 bg-slate-100 rounded" />
                       <div className="w-full h-2 bg-slate-100 rounded" />
                    </div>
                  </div>
               </div>
             </div>
          </div>
          
          {/* Decorative glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-primary/20 blur-[100px] -z-10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
