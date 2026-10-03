"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Heart } from "lucide-react";
import { navLinks } from "@/content/navigation";
import { organization } from "@/content/organization";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E8E8E2] shadow-xs"
            : "bg-white border-b border-[#E8E8E2]"
        }`}
      >
        {/* Subtle institutional top strip */}
        <div className="bg-[#102A43] text-white text-[11px] py-1.5 px-4 sm:px-8 border-b border-[#102A43]/20">
          <div className="max-w-7xl mx-auto flex items-center justify-between tracking-widest uppercase">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#087A5B] rounded-full inline-block animate-pulse" />
              <span>HQ: {organization.headquarters} • Centers Nationwide</span>
            </span>
            <div className="hidden sm:flex items-center gap-4 text-gray-300">
              <span>{organization.yearsOfService}</span>
              <span className="text-gray-500">•</span>
              <span className="text-[#0088C9] font-medium tracking-widest">{organization.tagline}</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo and Brand */}
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087A5B]"
              aria-label="Norion Caritas Foundation Home"
            >
              {/* Official Norion Logo Image */}
              <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 bg-white border border-[#E8E8E2] p-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xs">
                <Image
                  src="/images/norion-logo.jpg"
                  alt="Norion International / Norion Caritas Foundation Official Logo"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>

              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base md:text-lg tracking-tight text-[#102A43] group-hover:text-[#087A5B] transition-colors leading-tight">
                  {organization.name}
                </span>
                <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#087A5B] uppercase">
                  Humanitarian Outreach • Nigeria
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-medium tracking-wide transition-colors duration-200 relative ${
                      isActive
                        ? "text-[#087A5B] font-semibold"
                        : "text-[#171717] hover:text-[#087A5B]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#087A5B]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 bg-[#087A5B] hover:bg-[#07543F] text-white text-xs uppercase tracking-wider font-semibold px-5 py-3 transition-all duration-200 shadow-xs hover:shadow"
              >
                <Heart className="w-3.5 h-3.5 text-emerald-200" aria-hidden="true" />
                <span>Support the Mission</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/donate"
                onClick={closeMenu}
                className="inline-flex items-center gap-1.5 bg-[#087A5B] text-white text-xs font-semibold px-3 py-2 uppercase tracking-wider"
              >
                <Heart className="w-3 h-3 text-emerald-200" aria-hidden="true" />
                <span>Donate</span>
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 text-[#171717] hover:text-[#087A5B] hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#087A5B]"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[110px] z-50 bg-[#102A43] text-white lg:hidden overflow-y-auto flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="px-6 py-8">
            <div className="mb-6 pb-4 border-b border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 bg-white p-1 shrink-0">
                <Image
                  src="/images/norion-logo.jpg"
                  alt="Norion Logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#0088C9] font-mono block">
                  {organization.name}
                </span>
                <p className="text-xs text-gray-300 mt-0.5">
                  {organization.tagline}
                </p>
              </div>
            </div>

            <nav className="flex flex-col space-y-2" aria-label="Mobile Menu Links">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between py-3.5 px-3 border-b border-white/5 transition-colors ${
                      isActive ? "bg-white/10 text-white font-semibold" : "text-gray-200 hover:text-white"
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-[#087A5B]">0{idx + 1}</span>
                      <span className="text-lg tracking-wide">{link.label}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8 pt-4">
              <Link
                href="/donate"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 bg-[#087A5B] hover:bg-[#07543F] text-white text-sm uppercase tracking-widest font-semibold py-4 transition-colors"
              >
                <Heart className="w-4 h-4 text-emerald-200" />
                <span>Support the Mission</span>
              </Link>
            </div>
          </div>

          <div className="px-6 py-6 bg-black/20 border-t border-white/10 text-xs text-gray-400 space-y-2">
            <p>
              <strong className="text-gray-300">Nigeria WhatsApp:</strong>{" "}
              <a href={organization.contact.phones.nigeriaWhatsAppUrl} className="text-[#0088C9] underline">
                {organization.contact.phones.nigeriaDisplay}
              </a>
            </p>
            <p>
              <strong className="text-gray-300">Headquarters:</strong> {organization.contact.address.full}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
