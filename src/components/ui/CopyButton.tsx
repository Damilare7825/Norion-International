"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  successLabel?: string;
  className?: string;
}

export function CopyButton({
  textToCopy,
  label = "Copy Account Number",
  successLabel = "Account Number Copied!",
  className = "",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2800);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2800);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold tracking-wider uppercase transition-all duration-200 border select-none cursor-pointer ${
        copied
          ? "bg-[#07543F] text-white border-[#07543F]"
          : "bg-[#087A5B] hover:bg-[#07543F] text-white border-[#087A5B] hover:border-[#07543F]"
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-emerald-200" aria-hidden="true" />
          <span>{successLabel}</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 opacity-80" aria-hidden="true" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
