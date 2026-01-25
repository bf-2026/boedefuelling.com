import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900/5 via-white to-slate-50 py-16 border-t border-slate-200/50 md:pr-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl opacity-30" />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm mb-8 pb-8 border-b border-slate-200/50">
          <div className="mb-4 md:mb-0 font-medium text-slate-800">
            &copy; {new Date().getFullYear()} BoedeFuelling. Alle Rechte vorbehalten.
          </div>
          <div className="flex gap-8">
            <Link
              to="/impressum"
              className="hover:text-slate-900 hover:text-brand-primary transition-colors font-medium">
              Impressum
            </Link>
            <a href="#" className="hover:text-slate-900 hover:text-brand-primary transition-colors font-medium">
              Datenschutz
            </a>
          </div>
        </div>
        <div className="text-xs text-slate-500">
          Gebaut mit Leidenschaft für Industrie und KI
        </div>
      </div>
    </footer>
  );
}
