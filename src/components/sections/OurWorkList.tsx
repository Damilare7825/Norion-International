"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { programs } from "@/content/programs";

export function OurWorkList() {
  const [activeId, setActiveId] = useState<string>(programs[0].id);

  const activeProgram = programs.find((p) => p.id === activeId) || programs[0];

  return (
    <section className="py-24 md:py-32 bg-[#F7F7F4] border-b border-[#E8E8E2]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E8E8E2]">
          <div>
            <SectionLabel number="05" label="Humanitarian Pillars" />
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight">
              Our Work
            </h2>
          </div>
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[#087A5B] hover:text-[#07543F] group"
          >
            <span>Explore all programs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Two-column Interactive Editorial List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial List */}
          <div className="lg:col-span-7 divide-y divide-[#E8E8E2] border-y border-[#E8E8E2]">
            {programs.map((prog) => {
              const isActive = prog.id === activeId;
              return (
                <div
                  key={prog.id}
                  onMouseEnter={() => setActiveId(prog.id)}
                  onClick={() => setActiveId(prog.id)}
                  className={`py-6 md:py-8 px-4 transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isActive ? "bg-white shadow-xs" : "hover:bg-white/60"
                  }`}
                >
                  <div className="flex items-baseline gap-4 md:gap-6">
                    <span
                      className={`font-mono text-xs md:text-sm font-bold ${
                        isActive ? "text-[#087A5B]" : "text-[#6B6B6B]"
                      }`}
                    >
                      {prog.number}
                    </span>
                    <div>
                      <h3
                        className={`font-heading text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                          isActive
                            ? "text-[#087A5B]"
                            : "text-[#102A43] group-hover:text-[#087A5B]"
                        }`}
                      >
                        {prog.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 line-clamp-1">
                        {prog.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 ml-4">
                    <ArrowUpRight
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isActive
                          ? "text-[#087A5B] translate-x-1 -translate-y-1"
                          : "text-gray-300 group-hover:text-[#102A43]"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Display */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white border border-[#E8E8E2] p-8 shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-[#6B6B6B] pb-3 border-b border-[#E8E8E2] mb-6">
                <span className="text-[#087A5B] font-bold">PILLAR {activeProgram.number}</span>
                <span className="uppercase tracking-wider">VERIFIED INITIATIVE</span>
              </div>

              {/* Video or Image Preview */}
              {activeProgram.featuredVideo && (
                <div className="relative aspect-video bg-neutral-900 border border-[#E8E8E2] mb-6 overflow-hidden">
                  <video
                    key={activeProgram.featuredVideo}
                    src={activeProgram.featuredVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white font-mono text-[10px] px-2 py-0.5 tracking-wider uppercase">
                    Field Recording
                  </div>
                </div>
              )}

              <h3 className="font-heading text-2xl font-bold text-[#102A43] mb-3">
                {activeProgram.title}
              </h3>

              <p className="text-sm text-[#171717] leading-relaxed mb-6">
                {activeProgram.fullDescription}
              </p>

              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#087A5B]">
                  Direct Field Actions:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#6B6B6B]">
                  {activeProgram.keyActions.slice(0, 3).map((act, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#087A5B] font-bold">•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/our-work#${activeProgram.id}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#102A43] hover:bg-[#07543F] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
              >
                <span>Read Full Program Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
