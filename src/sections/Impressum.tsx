import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function Impressum() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors">
          <ChevronLeft size={20} />
          Zurück zur Startseite
        </button>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Impressum</h1>

          <div className="space-y-8 text-slate-700">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Anbieter
              </h2>
              <div className="space-y-2">
                <p>BoedeFuelling UG (haftungsbeschränkt)</p>
                <p>Finkenweg 21</p>
                <p>71065 Sindelfingen</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Registrierung
              </h2>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Handelsregister:</span> HRB
                  803338
                </p>
                <p>
                  <span className="font-semibold">Registergericht:</span>{" "}
                  Amtsgericht Stuttgart
                </p>
                <p>
                  <span className="font-semibold">
                    Umsatzsteuer-ID gem. § 27a UStG:
                  </span>{" "}
                  DE -----
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Geschäftsführer
              </h2>
              <p>
                Vertretungsberechtigter Geschäftsführer: Lucas Ji-Yan Fülling
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Kontakt
              </h2>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">E-Mail:</span>{" "}
                  <a
                    href="mailto:lucas@boedefuelling.com"
                    className="text-blue-600 hover:text-blue-800">
                    lucas@boedefuelling.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Telefon:</span>{" "}
                  <a
                    href="tel:+4915730967315"
                    className="text-blue-600 hover:text-blue-800">
                    +49-15730967315
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Website:</span>{" "}
                  <a
                    href="https://boedefuelling.com"
                    className="text-blue-600 hover:text-blue-800">
                    https://boedefuelling.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Inhaltlich Verantwortlicher
              </h2>
              <p className="mb-2">gem. § 18 Abs. 2 MStV:</p>
              <div className="space-y-2">
                <p>Lucas Ji-Yan Fülling</p>
                <p>E-Mail: lucas@boedefuelling.com</p>
                <p>Telefon: +886-933952299</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
