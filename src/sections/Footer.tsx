import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-50 py-10 border-t border-slate-200">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BoedeFuelling. Alle Rechte
            vorbehalten.
          </div>
          <div className="flex gap-6">
            <Link
              to="/impressum"
              className="hover:text-slate-900 transition-colors">
              Impressum
            </Link>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
