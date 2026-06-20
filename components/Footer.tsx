import { Zap, ArrowUpRight } from "lucide-react";

const COLS = {
  "Solutions": ["Recharge Entreprise", "Réseaux Publics", "Résidentiel", "Flottes"],
  "Entreprise": ["À propos", "Certifications", "Partenaires", "Presse"],
  "Support": ["Documentation", "FAQ", "Centre d'aide", "Status réseau"],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Wide CTA strip */}
      <div className="border-b border-white/8">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
              Prêt à électrifier votre site ?
            </h3>
            <p className="text-white/45 text-sm">Étude de faisabilité gratuite · Réponse en 24 h</p>
          </div>
          <a href="#contact"
            className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-sm font-semibold px-6 py-3.5 rounded transition-colors whitespace-nowrap flex-shrink-0">
            Demander un devis <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-14">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand col */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded bg-white flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-black" strokeWidth={3} />
              </div>
              <span className="font-semibold text-[15px] tracking-tight">VOLTIS FRANCE</span>
            </div>
            <p className="text-white/40 text-xs leading-relaxed mb-6 max-w-[200px]">
              Pionnier de la recharge EV en France depuis 2018.
            </p>
            <div className="flex gap-2">
              {["in", "𝕏", "ig"].map((s) => (
                <a key={s} href="#"
                  className="w-8 h-8 rounded bg-white/6 hover:bg-white/14 flex items-center justify-center text-xs font-bold transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(COLS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[10px] font-semibold tracking-[0.2em] text-white/35 uppercase mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white/55 hover:text-white text-sm transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/30">
          <span>© {new Date().getFullYear()} Voltis France SAS — Tous droits réservés</span>
          <div className="flex gap-6">
            {["Mentions légales", "Confidentialité", "CGV"].map((l) => (
              <a key={l} href="#" className="hover:text-white/60 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
