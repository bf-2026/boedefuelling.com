// Define the shape of the props
interface FeatureCardProps {
  title: string;
  description: string;
}
const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section className="w-full py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">

      {/* --- First Row: Text Left, Image Right --- */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
        <div className="space-y-6">
          <FeatureCard
            title="Effizienzsteigerung für Ihr Team"
            description="Wir optimieren Fachprozesse & interne Abläufe – von Support, Preisprüfungen bis Verwaltung. Ihr Team wird spürbar entlastet!"
          />
          <FeatureCard
            title="Mehr Zeit für das Wesentliche – ohne zusätzliche Mitarbeiter und Fachkräftestress"
            description="Optimierte Prozesse sparen Zeit und reduzieren Ihren Personalbedarf. Wo früher zwei Mitarbeiter nötig waren, reicht heute einer. So bleibt mehr Zeit für das, was wirklich zählt"
          />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
            alt="Team working on tablet"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* --- Second Row: Image Left, Text Right --- */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
            alt="Office discussion"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <FeatureCard
            title="Ein roter Faden für Ihre KI-Strategie"
            description="Mit unserem KI-Fahrplan führen wir Sie von der Digitalisierung zur Automatisierung – lernen Sie aus den Fehlern anderer & optimieren Sie gezielt!"
          />
          <FeatureCard
            title="Updates zu gesetzlichen Änderungen"
            description="Bleiben Sie up to date: Wir informieren Sie über gesetzliche Änderungen rund um KI"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
