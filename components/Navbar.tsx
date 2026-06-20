"use client";
import { useState, useEffect } from "react";
import { Zap, Menu, X } from "lucide-react";

const NAV = [
  { label: "Solutions", href: "#services" },
  { label: "Projets", href: "#projects" },
  { label: "Durabilité", href: "#sustainability" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/98 backdrop-blur-sm border-b border-black/8" : ""}`}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <div className={`w-7 h-7 rounded flex items-center justify-center transition-colors ${scrolled ? "bg-black" : "bg-white"}`}>
            <Zap className={`w-3.5 h-3.5 transition-colors ${scrolled ? "text-white" : "text-black"}`} strokeWidth={3} />
          </div>
          <span className={`font-semibold text-[15px] tracking-tight transition-colors ${scrolled ? "text-black" : "text-white"}`}>
            VOLTIS FRANCE
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((l) => (
            <a key={l.href} href={l.href}
              className={`text-[13px] font-medium tracking-wide transition-colors hover:opacity-60 ${scrolled ? "text-black" : "text-white"}`}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#contact"
            className={`text-[13px] font-semibold px-5 py-2.5 rounded transition-all duration-200 ${
              scrolled
                ? "bg-black text-white hover:bg-neutral-800"
                : "bg-white text-black hover:bg-white/90"
            }`}>
            Devis gratuit
          </a>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className={`md:hidden transition-colors ${scrolled ? "text-black" : "text-white"}`}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden bg-white border-t border-black/8 transition-all duration-300 overflow-hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="px-6 py-5 flex flex-col gap-4">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm font-medium text-black hover:text-neutral-500 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="mt-2 text-center bg-black text-white text-sm font-semibold py-3 rounded">
            Devis gratuit
          </a>
        </div>
      </div>
    </header>
  );
}
