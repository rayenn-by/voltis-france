"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useReveal } from "@/hooks/useReveal";

const SERVICES = [
  {
    slug: "entreprise",
    label: "Business Charging",
    title: "Recharge\nEntreprise",
    desc: "Bornes AC/DC pour parkings d'entreprise, flottes et sites industriels. Gestion centralisée, facturation automatique.",
    img: "https://images.unsplash.com/photo-1751553822302-b8d5934a76b5?w=900&q=85",
    tags: ["AC 7–22 kW", "DC 50–150 kW", "IoT"],
  },
  {
    slug: "public",
    label: "Public Networks",
    title: "Réseaux\nPublics",
    desc: "Hubs de recharge rapide pour collectivités, autoroutes et zones commerciales. Interopérabilité OCPP 2.0.",
    img: "https://images.unsplash.com/photo-1760539137814-ece85bca58cc?w=900&q=85",
    tags: ["Sans contact", "Roaming", "24/7"],
    featured: true,
  },
  {
    slug: "residentiel",
    label: "Residential",
    title: "Installations\nRésidentielles",
    desc: "Wallbox intelligentes pour particuliers et copropriétés. Éligible aides ADVENIR. Installation en 48 h.",
    img: "https://images.unsplash.com/photo-1760539120788-8529cccfea75?w=900&q=85",
    tags: ["Wallbox", "ADVENIR", "Domotique"],
  },
];

export default function Services() {
  const ref = useReveal();
  return (
    <section id="services" className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-neutral-400 uppercase mb-3">Nos solutions</p>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-black leading-tight tracking-tight">
              Un service sur mesure<br />pour chaque besoin.
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-black underline underline-offset-4 hover:text-neutral-500 transition-colors whitespace-nowrap">
            Demander un audit <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <a key={s.slug} href="#contact"
              className={`reveal reveal-delay-${i + 1} photo-zoom group relative flex flex-col overflow-hidden rounded-lg ${s.featured ? "md:scale-[1.02] shadow-2xl" : ""}`}>
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                <Image src={s.img} alt={s.title} fill className="object-cover object-center" sizes="(max-width:768px)100vw,33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                {s.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#16a34a] hover:bg-[#16a34a] text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded">Populaire</Badge>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-white/55 text-[10px] font-semibold tracking-[0.18em] uppercase mb-2">{s.label}</p>
                  <h3 className="text-white text-xl font-bold leading-tight whitespace-pre-line mb-3">{s.title}</h3>
                  <p className="text-white/70 text-xs leading-relaxed mb-4 max-w-xs">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="bg-white/15 hover:bg-white/15 text-white border-0 text-[10px] font-medium">{t}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
