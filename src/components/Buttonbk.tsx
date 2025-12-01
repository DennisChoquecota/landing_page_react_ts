// src/components/ui/Button.tsx
import React from "react";
import { BANNERDATA } from "../db/db";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button = ({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const bgColor =
    variant === "primary"
      ? BANNERDATA.bgColorBtnOne
      : BANNERDATA.bgColorBtnTwo;
  const textColor = 
    variant === "primary" 
        ? BANNERDATA.textBtnColorOne 
        : BANNERDATA.textBtnColorTwo;
  const baseStyles = `btn-animated font-semibold sm:px-7.5 px-5 py-2.5 sm:py-3.75 transition-all duration-300`;

  return (
    <a href={href} className={`${bgColor} ${textColor} ${baseStyles} ${className} `}>
      <span className="relative z-10">{children}</span>
    </a>
  );
};

export default Button;
