import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = "primary", size = "md", ...props }, ref) => (
  <button ref={ref} className={cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    { "bg-primary text-primary-foreground hover:bg-primary/90": variant === "primary", "bg-secondary text-secondary-foreground hover:bg-secondary/90": variant === "secondary", "border border-border bg-background hover:bg-muted": variant === "outline", "hover:bg-muted": variant === "ghost" },
    { "h-8 px-3 text-xs": size === "sm", "h-10 px-5 text-sm": size === "md", "h-12 px-8 text-base": size === "lg" },
    className
  )} {...props} />
));
Button.displayName = "Button";
export { Button };
