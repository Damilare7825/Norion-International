import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  external?: boolean;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  className = "",
  external = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-none border text-center cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none group";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs tracking-wider uppercase font-semibold gap-2",
    md: "px-6 py-3.5 text-sm tracking-wide gap-2.5",
    lg: "px-8 py-4 text-base tracking-wide gap-3",
  };

  const variantStyles = {
    primary:
      "bg-[#087A5B] hover:bg-[#07543F] text-white border-[#087A5B] hover:border-[#07543F] shadow-sm hover:shadow",
    secondary:
      "bg-[#102A43] hover:bg-[#0c2033] text-white border-[#102A43]",
    outline:
      "bg-transparent hover:bg-[#171717] text-[#171717] hover:text-white border-[#171717]/30 hover:border-[#171717]",
    white:
      "bg-white hover:bg-neutral-100 text-[#102A43] border-white shadow-sm",
    ghost:
      "bg-transparent hover:bg-black/5 text-[#171717] border-transparent",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon && iconPosition === "left" && icon}
          <span>{children}</span>
          {icon && iconPosition === "right" && icon}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {icon && iconPosition === "left" && icon}
        <span>{children}</span>
        {icon && iconPosition === "right" && icon}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === "left" && icon}
      <span>{children}</span>
      {icon && iconPosition === "right" && icon}
    </button>
  );
}
