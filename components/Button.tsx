import React from 'react'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
    "relative group border text-foreground text-center rounded-full inline-flex items-center justify-center",
    {
        variants: {
            variant: {
                default: "bg-blue-500/5 hover:bg-blue-500/0 border-blue-500/20",
                solid: "bg-blue-500 hover:bg-blue-600 text-white border-transparent hover:border-foreground/50 transition-all duration-200",
                ghost: "border-transparent bg-transparent hover:border-zinc-600 hover:bg-white/10",
            },
            size: {
                default: "px-7 py-1.5 ",
                sm: "px-4 py-0.5 ",
                lg: "px-10 py-2.5 ",
                icon: "w-12 h-12 p-0", // Added icon size for social buttons
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    neon?: boolean;
    href?: string;
    target?: string;
    rel?: string;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ className, neon = true, size, variant, children, href, ...props }, ref) => {
        const commonProps = {
            className: cn(buttonVariants({ variant, size }), className),
            ...props
        };

        const content = (
            <>
                {/* Glow effect */}
                <span className={cn("absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-blue-500/20 blur-md", neon && "block")} />
                <span className={cn("absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out shadow-[0_0_15px_rgba(59,130,246,0.6)]", neon && "block")} />
                <span className="relative z-10">{children}</span>
            </>
        );

        if (href) {
            return (
                <a
                    href={href}
                    {...(commonProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                >
                    {content}
                </a>
            );
        }

        return (
            <button
                {...commonProps}
                ref={ref as React.Ref<HTMLButtonElement>}
            >
                {content}
            </button>
        );
    }
)

Button.displayName = 'Button';

export { Button, buttonVariants };
