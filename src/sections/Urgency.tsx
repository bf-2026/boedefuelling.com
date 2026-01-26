import { Button } from "../components/ui/Button";

export default function Urgency() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
          Warum jetzt handeln?
        </h2>
        <div className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed text-left space-y-4">
          <p className="font-semibold mb-2">
            KI ist kein Zukunftsthema mehr – sie entscheidet heute über
            Kostenvorteile.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Ihre Wettbewerber investieren bereits in produktive KI-Systeme
            </li>
            <li>Wissensverluste durch ausscheidende Mitarbeiter</li>
            <li>Integrationsaufwand und Kosten steigen mit jedem Jahr</li>
            <li>Frühstarter sichern sich dauerhafte Kostenvorteile</li>
            <li>
              Jeder Monat ohne KI-Strategie kostet Zeit, Effizienz und Umsatz
            </li>
          </ul>
        </div>
        <Button
          href="https://cal.com/lucas-fuelling-ytra7k/30min?overlayCalendar=true"
          size="lg"
          className="rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800">
          Jetzt Vorsprung sichern
        </Button>
      </div>
    </section>
  );
}
