import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function ArrowLink({
  href,
  children,
  className = "",
  external = false,
}: ArrowLinkProps) {
  const content = (
    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-[#087A5B] hover:text-[#07543F] transition-colors duration-200 group ${className}`}>
      <span className="relative">
        {children}
        <span className="absolute left-0 bottom-0 w-0 h-px bg-[#087A5B] transition-all duration-300 group-hover:w-full" />
      </span>
      <ArrowUpRight
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
