import { Button } from "../components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-slate-50 py-20 border-t border-slate-200">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Starten Sie Ihre KI-Transformation
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Buchen Sie ein vertrauliches Strategiegespräch und entdecken Sie,
            wie KI innerhalb von 90 Tagen messbaren Mehrwert in Ihrem
            Unternehmen schafft.
          </p>
          <Button
            variant="brand"
            size="lg"
            className="rounded-full shadow-lg h-14 px-10 text-lg">
            Kontakt aufnehmen
          </Button>
        </div>
      </div>
    </section>
  );
}
