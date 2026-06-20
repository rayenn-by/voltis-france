"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MapPin, Zap } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const PROJECTS = [
  {
    city: "Paris",
    title: "Centre Commercial Les Halles",
    type: "Commerce · 48 bornes",
    kw: "DC 150 kW",
    img: "https://images.unsplash.com/photo-1760539062155-06050cd108fd?w=1200&q=85",
    className: "md:col-span-2 md:row-span-2 min-h-[480px] md:min-h-[560px]",
  },
  {
    city: "Lyon",
    title: "Parc d'Affaires Confluence",
    type: "Entreprise · 120 bornes",
    kw: "AC 22 kW",
    img: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=800&q=85",
    className: "md:col-span-1 md:row-span-1 min-h-[200px]",
  },
  {
    city: "Marseille",
    title: "Réseau Hôtelier Grand Sud",
    type: "Hôtellerie · 35 bornes",
    kw: "AC/DC Mix",
    img: "https://images.unsplash.com/photo-1760539076338-1b1f8806b6d5?w=800&q=85",
    className: "md:col-span-1 md:row-span-1 min-h-[200px]",
  },
];

export default function Projects() {
  const ref = useReveal();
  return (
    <section id="projects" className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-neutral-400 uppercase mb-3">Réalisations</p>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-black leading-tight tracking-tight">
              Nos projets phares.
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-xs leading-relaxed">
            Des installations reconnues pour leur fiabilité, de Paris à la Méditerranée.
          </p>
        </div>

        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[560px]">
          {PROJECTS.map((p, i) => (
            <div key={p.title}
              className={`reveal reveal-delay-${i + 1} ${p.className} group relative overflow-hidden rounded-lg bg-neutral-100 photo-zoom`}>
              {/* fill the entire grid cell */}
              <div className="absolute inset-0 overflow-hidden">
                <Image src={p.img} alt={p.title} fill className="object-cover object-center" sizes="(max-width:768px)100vw,66vw" />
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors duration-500" />
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-white/90 hover:bg-white/90 text-black text-[10px] font-semibold px-2.5 py-1">
                      {p.type}
                    </Badge>
                    <span className="flex items-center gap-1 text-white/80 text-[10px] font-medium">
                      <Zap className="w-3 h-3" />{p.kw}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-white/55 text-[10px] font-medium mb-1.5">
                      <MapPin className="w-3 h-3" />{p.city}
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight">{p.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
