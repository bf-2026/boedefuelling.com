export default function Mission() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000" />
      </div>
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="relative z-10">
          <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-2">
            Unsere Mission
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Wir unterstützen Unternehmen dabei, KI als festen Bestandteil ihrer
            Prozesse und Abläufe zu etablieren.
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Wir verbinden tiefes Prozessverständnis, strategisches Denken und
            modernste KI-Technologie. In den nächsten fünf Jahren entscheidet
            KI, welche Unternehmen wachsen und welche den Anschluss verlieren.
          </p>
          <ul className="space-y-4">
            {[
              "KI in Kernprozessen integriert",
              "Daten- und wissensbasierte Entscheidungen",
              "Steigerung der Produktivität pro Mitarbeiter",
              "Unternehmen besitzen und kontrollieren ihre Systeme",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-primary">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          {/* Abstract visual representation of mission/growth */}
          <div className="bg-slate-900 rounded-2xl p-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-white space-y-6">
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <div className="text-white/60 text-sm mb-1">
                    Effizienzsteigerung
                  </div>
                  <div className="text-3xl font-bold text-brand-accent">
                    +45%
                  </div>
                </div>
                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-brand-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <div className="text-white/60 text-sm mb-1">
                    ROI (Durchschnitt)
                  </div>
                  <div className="text-3xl font-bold text-brand-primary">
                    6-12 Mon.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
