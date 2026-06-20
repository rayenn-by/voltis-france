"use client";
import { ShieldCheck, MonitorSmartphone, Headphones, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useReveal } from "@/hooks/useReveal";

const REASONS = [
  { icon: ShieldCheck, title: "Équipes Certifiées IRVE", desc: "Techniciens certifiés P1/P2, formés aux normes NF C 15-100 et RGIE. Chaque installation livrée avec son rapport de conformité." },
  { icon: MonitorSmartphone, title: "Supervision Temps Réel", desc: "Tableau de bord IoT centralisé — statut, énergie consommée, alertes et mise à jour firmware à distance." },
  { icon: Headphones, title: "Intervention en 4 h", desc: "Astreinte 24/7 et engagement contractuel d'intervention sur site en moins de 4 heures sur toute la France." },
  { icon: Leaf, title: "100 % Énergie Verte", desc: "Approvisionnement exclusif auprès de producteurs français d'énergie renouvelable certifiés. Bilan carbone fourni." },
];

export default function WhyUs() {
  const ref = useReveal();
  return (
    <section className="bg-neutral-50 py-20 md:py-28" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-neutral-400 uppercase mb-3">
              Pourquoi Voltis
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-black leading-tight tracking-tight mb-6">
              L&apos;infrastructure que vos clients méritent.
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed mb-10 max-w-md">
              Nous ne déployons pas seulement des bornes — nous concevons des réseaux
              qui durent. Chaque projet intègre monitoring, maintenance et optimisation
              énergétique dès le premier jour.
            </p>

            {/* KPI row */}
            <div className="flex gap-8 border-t border-black/8 pt-8">
              {[["99.2 %", "disponibilité réseau"], ["< 4 h", "temps d'intervention"], ["ISO 9001", "certification qualité"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <div className="text-xl font-bold text-black">{val}</div>
                  <div className="text-neutral-400 text-xs mt-0.5">{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — ShadCN Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REASONS.map((r, i) => {
              const Icon = r.icon;
              return (
                <Card key={r.title}
                  className={`reveal reveal-delay-${i + 1} border border-black/8 shadow-none hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-xl`}>
                  <CardContent className="p-5">
                    <div className="w-9 h-9 rounded-lg bg-black flex items-center justify-center mb-4">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-semibold text-black text-sm mb-2">{r.title}</h3>
                    <p className="text-neutral-500 text-xs leading-relaxed">{r.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
