import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Heart, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { organization } from "@/content/organization";
import { footerLinks, socialMediaLinks } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="bg-[#102A43] text-white border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Top Banner / Callout */}
      <div className="border-b border-white/10 py-12 md:py-16 bg-[#0c2135]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[#0088C9] font-mono text-xs uppercase tracking-[0.25em] font-semibold">
                Direct Humanitarian Support
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mt-2">
                &ldquo;Renew. Empower. Strengthen. Transform.&rdquo;
              </h3>
              <p className="text-gray-300 text-sm md:text-base mt-3 leading-relaxed">
                Direct bank transfer via Zenith Bank (1014999717) or contact our team directly in Benin City to discuss support, material donations, and partnerships.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 bg-[#087A5B] hover:bg-[#07543F] text-white px-6 py-4 text-xs uppercase tracking-widest font-semibold transition-colors duration-200"
              >
                <Heart className="w-4 h-4 text-emerald-200" aria-hidden="true" />
                <span>Support the Mission</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-6 py-4 text-xs uppercase tracking-widest font-semibold transition-colors duration-200"
              >
                <span>Contact Norion</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Organization Bio */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white p-1 shrink-0 border border-white/20">
                <Image
                  src="/images/norion-logo.jpg"
                  alt="Norion International / Norion Caritas Foundation Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white block">
                  {organization.name}
                </span>
                <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">
                  Founder: {organization.founderName}
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              {organization.goal}
            </p>

            <blockquote className="border-l-2 border-[#0088C9] pl-3 italic text-xs text-gray-300">
              &ldquo;{organization.foundingScripture.text}&rdquo; &mdash; {organization.foundingScripture.reference}
            </blockquote>

            <div className="p-4 bg-white/5 border border-white/10 space-y-2 text-xs">
              <span className="font-mono text-[#0088C9] uppercase tracking-wider font-semibold block">
                Official Bank Information:
              </span>
              <p className="text-white font-medium">
                {organization.bankDetails.bankName} • Account:{" "}
                <span className="font-mono tracking-wider font-bold text-emerald-300">
                  {organization.bankDetails.accountNumber}
                </span>
              </p>
              <p className="text-gray-400">
                Account Name: {organization.bankDetails.accountName}
              </p>
            </div>
          </div>

          {/* About Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#0088C9]">
              Organization
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#0088C9]">
              Our Focus
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {footerLinks.work.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#0088C9]">
              Headquarters
            </h4>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#087A5B] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{organization.contact.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#087A5B] shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${organization.contact.phones.nigeria}`}
                  className="hover:text-white transition-colors"
                >
                  {organization.contact.phones.nigeriaDisplay} (Nigeria)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#0088C9] shrink-0" aria-hidden="true" />
                <a
                  href={organization.contact.phones.nigeriaWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Nigeria WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#0088C9] shrink-0" aria-hidden="true" />
                <a
                  href={organization.contact.phones.ukWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  UK WhatsApp: {organization.contact.phones.ukWhatsAppDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#087A5B] shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${organization.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {organization.contact.email}
                </a>
              </li>
            </ul>

            {/* Verified Social References */}
            <div className="pt-2 border-t border-white/10">
              <span className="text-[11px] text-gray-400 block mb-2 font-mono">
                Founder: {organization.founderName}
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {socialMediaLinks.map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/5 hover:bg-white/15 border border-white/10 transition-colors text-gray-300 hover:text-white"
                  >
                    <span>{s.platform}:</span>
                    <span className="font-medium text-white">{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-white/10 bg-black/30 py-6 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {organization.name}. Headquartered in Benin City, Edo State. Centers nationwide.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <Link href="/donate" className="hover:text-white transition-colors text-emerald-400">
              Direct Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
