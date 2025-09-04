import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform hover:scale-105",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl",
        outline:
          "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-md hover:shadow-lg",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        cta: "bg-gradient-to-r from-red-accent to-charcoal text-white hover:from-charcoal hover:to-red-accent shadow-lg hover:shadow-2xl font-bold tracking-wide border-0",
        hero: "bg-gradient-to-r from-chrome-light to-chrome backdrop-blur-sm text-primary border-2 border-chrome/30 hover:from-chrome hover:to-chrome-light hover:border-chrome/60 font-bold tracking-wide shadow-xl hover:shadow-2xl",
        phone: "bg-charcoal text-white hover:bg-red-accent border-2 border-charcoal hover:border-red-accent shadow-lg hover:shadow-xl transition-all duration-300",
        glass: "bg-white/10 backdrop-blur-md border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/40 shadow-xl hover:shadow-2xl font-semibold",
        metallic: "bg-gradient-to-r from-chrome-dark via-chrome-light to-chrome text-charcoal hover:from-chrome-light hover:via-chrome hover:to-chrome-dark shadow-lg hover:shadow-xl font-bold border border-chrome-dark/20",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-md px-4",
        lg: "h-14 rounded-lg px-8 text-base",
        xl: "h-16 rounded-xl px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
