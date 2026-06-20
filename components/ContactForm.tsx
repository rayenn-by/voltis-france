"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Loader2, Mail, Phone, MapPin } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const PROJECT_TYPES = ["Entreprise", "Collectivité", "Résidentiel", "Hôtellerie", "Autre"];

export default function ContactForm() {
  const ref = useReveal();
  const [type, setType] = useState("Entreprise");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 1600);
  };

  return (
    <section id="contact" className="bg-white py-20 md:py-28" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">

        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">

          {/* Left */}
          <div className="md:col-span-2 reveal">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-neutral-400 uppercase mb-3">Contact</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-black leading-tight tracking-tight mb-5">
              Démarrons votre projet.
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed mb-10">
              Remplissez le formulaire — un expert Voltis vous répond sous 24 h
              avec une étude de faisabilité personnalisée, sans engagement.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-10">
              {[
                { icon: Mail,   val: "contact@voltis-france.fr" },
                { icon: Phone,  val: "+33 1 23 45 67 89" },
                { icon: MapPin, val: "12 Rue de la Paix — Paris 75001" },
              ].map(({ icon: Icon, val }) => (
                <div key={val} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-black" />
                  </div>
                  <span className="text-sm text-neutral-600">{val}</span>
                </div>
              ))}
            </div>

            {/* Certifs */}
            <div className="flex flex-wrap gap-2">
              {["IRVE P1 P2", "ISO 9001", "ADVENIR", "QUALIFELEC"].map((c) => (
                <Badge key={c} variant="secondary" className="bg-neutral-100 text-neutral-600 hover:bg-neutral-100 text-[10px] font-semibold uppercase tracking-wide">
                  {c}
                </Badge>
              ))}
            </div>
          </div>

          {/* Form card */}
          <div className="md:col-span-3 reveal reveal-delay-1">
            <Card className="border border-black/8 shadow-none rounded-2xl">
              <CardContent className="p-7 md:p-9">
                {done ? (
                  <div className="flex flex-col items-center justify-center py-14 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#16a34a]/10 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6 text-[#16a34a]" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">Demande envoyée !</h3>
                    <p className="text-neutral-500 text-sm max-w-xs">
                      Un expert Voltis vous recontacte dans les 24 heures ouvrées.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-black uppercase tracking-wide">Nom *</label>
                        <Input required placeholder="Jean Dupont" className="h-11 bg-neutral-50 border-black/10 rounded-lg text-sm focus:border-black" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-black uppercase tracking-wide">Entreprise</label>
                        <Input placeholder="Votre société" className="h-11 bg-neutral-50 border-black/10 rounded-lg text-sm focus:border-black" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-black uppercase tracking-wide">Email *</label>
                        <Input required type="email" placeholder="jean@exemple.fr" className="h-11 bg-neutral-50 border-black/10 rounded-lg text-sm focus:border-black" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-black uppercase tracking-wide">Téléphone</label>
                        <Input type="tel" placeholder="+33 6 …" className="h-11 bg-neutral-50 border-black/10 rounded-lg text-sm focus:border-black" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-black uppercase tracking-wide">Type de projet</label>
                      <div className="flex flex-wrap gap-2">
                        {PROJECT_TYPES.map((t) => (
                          <button key={t} type="button" onClick={() => setType(t)}
                            className={`px-3.5 py-2 rounded text-xs font-semibold border transition-colors ${
                              type === t
                                ? "bg-black text-white border-black"
                                : "bg-white text-neutral-600 border-black/15 hover:border-black/30"
                            }`}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-black uppercase tracking-wide">Détails du projet *</label>
                      <Textarea required placeholder="Nombre de bornes, localisation, contraintes particulières…"
                        className="min-h-[120px] bg-neutral-50 border-black/10 rounded-lg text-sm focus:border-black resize-none" />
                    </div>

                    <button type="submit" disabled={loading}
                      className="w-full h-12 bg-black hover:bg-neutral-800 disabled:opacity-60 text-white text-sm font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-2">
                      {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Envoi…</> : "Envoyer ma demande"}
                    </button>

                    <p className="text-[11px] text-neutral-400 text-center leading-relaxed">
                      Réponse garantie sous 24 h · Données protégées · Aucun engagement
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
