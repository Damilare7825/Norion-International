import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
  id?: string;
}

export function Container({
  children,
  className = "",
  size = "default",
  id,
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
  };

  return (
    <div
      id={id}
      className={`mx-auto w-full px-5 sm:px-6 md:px-8 lg:px-12 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
}
