"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const PILLARS = [
  { val: "42 000 t", lbl: "CO₂ évitées" },
  { val: "18 GWh",   lbl: "énergie renouvelable" },
  { val: "2 500",    lbl: "arbres plantés" },
  { val: "100 %",    lbl: "électricité verte" },
];

export default function Sustainability() {
  const ref = useReveal();
  return (
    <section id="sustainability" className="bg-black py-20 md:py-28 overflow-hidden" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Photo */}
          <div className="reveal relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1615829386703-e2bb66a7cb7d?w=900&q=85"
              alt="Énergie renouvelable"
              fill
              className="object-cover"
              sizes="(max-width:768px)100vw,50vw"
            />
            <div className="absolute inset-0 bg-[#16a34a]/20" />
          </div>

          {/* Text */}
          <div>
            <p className="reveal text-[11px] font-semibold tracking-[0.22em] text-neutral-500 uppercase mb-4">
              Engagement durable
            </p>
            <h2 className="reveal reveal-delay-1 text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-tight tracking-tight mb-6">
              Chaque borne, un pas vers un avenir plus vert.
            </h2>
            <p className="reveal reveal-delay-2 text-neutral-400 text-base leading-relaxed mb-10">
              Chez Voltis France, la durabilité n&apos;est pas un argument marketing.
              Nos contrats d&apos;énergie sont 100 % renouvelables, nos bornes peuvent
              être couplées à des ombrières solaires, et pour chaque installation
              nous plantons un arbre en partenariat avec Reforest&apos;Action.
            </p>

            {/* Stat grid */}
            <div className="reveal reveal-delay-3 grid grid-cols-2 gap-px bg-white/8 rounded-lg overflow-hidden border border-white/8">
              {PILLARS.map((p) => (
                <div key={p.lbl} className="bg-black px-6 py-5">
                  <div className="text-2xl font-bold text-[#4ade80] mb-0.5">{p.val}</div>
                  <div className="text-neutral-500 text-xs">{p.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
