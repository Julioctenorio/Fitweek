import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white font-semibold [text-shadow:0_1px_2px_rgb(0_0_0_/_0.15)] shadow-lg shadow-primary/20 hover:bg-primary hover:brightness-95 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 hover:ring-2 hover:ring-primary/40 active:translate-y-0 active:shadow-md active:brightness-90",

        outline:
          "border-2 border-primary/40 bg-background text-foreground hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0",

        secondary:
          "bg-secondary text-white font-semibold [text-shadow:0_1px_2px_rgb(0_0_0_/_0.15)] shadow-lg shadow-secondary/20 hover:bg-secondary hover:brightness-95 hover:shadow-xl hover:shadow-secondary/50 hover:-translate-y-0.5 hover:ring-2 hover:ring-secondary/40 active:translate-y-0 active:shadow-md active:brightness-90",

        ghost:
          "text-foreground hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0",

        destructive:
          "bg-destructive text-white font-semibold [text-shadow:0_1px_2px_rgb(0_0_0_/_0.15)] shadow-lg shadow-destructive/20 hover:bg-destructive hover:brightness-95 hover:shadow-xl hover:shadow-destructive/50 hover:-translate-y-0.5 hover:ring-2 hover:ring-destructive/40 active:translate-y-0 active:shadow-md active:brightness-90",

        link:
          "text-primary underline-offset-4 hover:underline hover:scale-105 active:scale-95 transition-all duration-200",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

