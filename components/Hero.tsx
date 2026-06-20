"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Borne de recharge électrique"
        fill priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
      <div className="absolute inset-x-0 bottom-0 max-w-screen-xl mx-auto px-6 md:px-10 pb-14 md:pb-20">
        <p className="text-white/60 text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Recharge électrique · France
        </p>
        <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-bold text-white leading-[1.02] tracking-tight max-w-3xl mb-8">
          Powering France&apos;s<br />Electric Future.
        </h1>
        <div className="flex flex-wrap gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-sm font-semibold px-6 py-3.5 rounded transition-colors">
            Demander un devis <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#services" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded transition-colors">
            Explorer les solutions
          </a>
        </div>
      </div>
    </section>
  );
}
