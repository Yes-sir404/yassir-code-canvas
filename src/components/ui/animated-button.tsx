import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "hero" | "emerald";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export const AnimatedButton = ({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
  icon,
  disabled = false
}: AnimatedButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "hero":
        return "bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground shadow-primary hover:shadow-primary/60 border-0";
      case "emerald":
        return "bg-gradient-emerald hover:bg-gradient-emerald/90 text-emerald-foreground shadow-emerald hover:shadow-emerald/60 border-0";
      case "outline":
        return "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent";
      case "secondary":
        return "bg-secondary hover:bg-secondary/90 text-secondary-foreground";
      default:
        return "bg-primary hover:bg-primary/90 text-primary-foreground";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-4 py-2 text-sm";
      case "lg":
        return "px-8 py-4 text-lg";
      default:
        return "px-6 py-3 text-base";
    }
  };

  const buttonContent = (
    <motion.div
      className="flex items-center gap-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.div>
  );

  const buttonClass = cn(
    "relative overflow-hidden font-semibold transition-all duration-300 rounded-lg",
    "transform hover:scale-105 active:scale-95",
    getVariantClasses(),
    getSizeClasses(),
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClass}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {buttonContent}
    </motion.button>
  );
};