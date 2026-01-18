export default function TrustBar() {
  const items = [
    "KI mit Resultat",
    "Wir liefern Ergebnisse",
    "Intelligent effizient"
  ];

  return (
    <section className="py-8 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm md:text-base font-medium text-slate-500 uppercase tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
