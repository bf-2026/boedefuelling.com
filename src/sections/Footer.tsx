import { Button } from '../components/ui/Button';

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Starten Sie Ihre KI-Transformation
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Buchen Sie ein vertrauliches Strategiegespräch und entdecken Sie, wie KI innerhalb von 90 Tagen messbaren Mehrwert in Ihrem Unternehmen schafft.
          </p>
          <Button variant="brand" size="lg" className="rounded-full shadow-lg h-14 px-10 text-lg">
             Kontakt aufnehmen
          </Button>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BoedeFuelling. Alle Rechte vorbehalten.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Impressum</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
