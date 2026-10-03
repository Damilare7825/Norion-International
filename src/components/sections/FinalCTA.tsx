import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heart, ArrowRight, Phone } from "lucide-react";
import { organization } from "@/content/organization";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-36 bg-[#102A43] text-white relative overflow-hidden border-b border-white/10">
      {/* Subtle texture / background lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" />

      <Container size="narrow">
        <div className="text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-white/15 text-xs font-mono tracking-widest uppercase text-emerald-300">
            <span>Norion Caritas Foundation</span>
            <span>•</span>
            <span>Benin City, Nigeria</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            &ldquo;Let&apos;s do some good together.&rdquo;
          </h2>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Whether through direct bank support to feed widows, funding a micro-business grant, or partnering in field outreach, your contribution touches real lives with enduring dignity.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/donate"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#087A5B] hover:bg-[#07543F] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-md group"
            >
              <Heart className="w-4 h-4 text-emerald-200 group-hover:scale-110 transition-transform" />
              <span>Support the Mission</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-200 group"
            >
              <Phone className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              <span>Contact Norion</span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <p className="text-xs text-gray-400 font-mono pt-4">
            Direct WhatsApp inquiries welcome: {organization.contact.phones.nigeriaDisplay} (Nigeria) / {organization.contact.phones.ukWhatsAppDisplay} (UK)
          </p>
        </div>
      </Container>
    </section>
  );
}
