"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const T = [
  {
    name: "Marie Dupont",
    role: "Directrice Immobilier",
    company: "Groupe Nexity",
    quote: "L'installation s'est faite en un temps record, sans perturbation pour nos résidents. Le support est exemplaire — une vraie différence avec les autres acteurs du marché.",
    initials: "MD",
  },
  {
    name: "Jean-Pierre Moreau",
    role: "Responsable RSE",
    company: "Carrefour Property",
    quote: "200 bornes sur 12 sites en 6 mois. La plateforme de supervision a réduit nos coûts énergétiques de 18 %. Voltis tient ses promesses, ce qui est rare.",
    initials: "JP",
    featured: true,
  },
  {
    name: "Sophie Laurent",
    role: "Adjointe au Maire",
    company: "Ville de Grenoble",
    quote: "Partenaire fiable qui comprend les contraintes du service public. Notre réseau est devenu une référence régionale en moins d'un an.",
    initials: "SL",
  },
];

export default function Testimonials() {
  const ref = useReveal();
  return (
    <section id="testimonials" className="bg-neutral-50 py-20 md:py-28" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">

        <div className="text-center mb-14 reveal">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-neutral-400 uppercase mb-3">Témoignages</p>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-black leading-tight tracking-tight">
            Ce que disent nos clients.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {T.map((t, i) => (
            <Card key={t.name}
              className={`reveal reveal-delay-${i + 1} border shadow-none rounded-xl transition-shadow duration-300 hover:shadow-lg ${
                t.featured ? "bg-black border-transparent" : "bg-white border-black/8"
              }`}>
              <CardContent className="p-7">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`w-3.5 h-3.5 fill-current ${t.featured ? "text-[#4ade80]" : "text-black"}`} />
                  ))}
                </div>

                <p className={`text-sm leading-relaxed mb-7 ${t.featured ? "text-white/75" : "text-neutral-600"}`}>
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className={`flex items-center gap-3 pt-5 border-t ${t.featured ? "border-white/10" : "border-black/8"}`}>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    t.featured ? "bg-[#16a34a] text-white" : "bg-black text-white"
                  }`}>
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <div className={`text-sm font-semibold truncate ${t.featured ? "text-white" : "text-black"}`}>
                      {t.name}
                    </div>
                    <div className={`text-xs truncate ${t.featured ? "text-white/45" : "text-neutral-400"}`}>
                      {t.role}
                    </div>
                  </div>
                  <div className="ml-auto flex-shrink-0">
                    <Badge variant="secondary"
                      className={`text-[10px] font-medium ${t.featured ? "bg-white/10 text-white/70 hover:bg-white/10 border-0" : "bg-neutral-100 text-neutral-500 hover:bg-neutral-100"}`}>
                      {t.company}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
