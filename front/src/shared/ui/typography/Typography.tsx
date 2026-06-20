import type { TypographyProps } from './typography.types'
import { cn } from "@/shared/lib/cn";

const variantClasses = {
  display: "typography-display",
  h1: "typography-h1",
  h2: "typography-h2",
  h3: "typography-h3",
  body: "typography-body",
  small: "typography-small",
  caption: "typography-caption",
};

export function Typography({
    children,
    variant = "body",
    className,
}: TypographyProps) {
  return (
    <p className={cn(variantClasses[variant], className)}>
        {children}
    </p>
  )
}
