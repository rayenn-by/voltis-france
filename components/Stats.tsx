"use client";
import { useReveal } from "@/hooks/useReveal";

const STATS = [
  { n: "2 500+", label: "Bornes installées" },
  { n: "400+",   label: "Clients" },
  { n: "98 %",   label: "Satisfaction" },
  { n: "96",     label: "Départements couverts" },
];

export default function Stats() {
  const ref = useReveal();
  return (
    <section className="bg-black py-14 md:py-20" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {STATS.map((s, i) => (
            <div key={s.label}
              className={`reveal reveal-delay-${i + 1} px-6 md:px-10 first:pl-0 last:pr-0 py-4`}>
              <div className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-none tracking-tight mb-1">
                {s.n}
              </div>
              <div className="text-white/45 text-xs md:text-sm font-medium uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
