import clsx from "clsx";
import Link from "next/link";
import { forwardRef } from "react";

type Variant = "primary" | "ghost" | "subtle";
type Size = "md" | "lg";

const baseStyles = "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantStyles: Record<Variant, string> = {
    primary: "bg-teal-600 text-white shadow-soft hover:bg-teal-700 focus-visible:outline-teal-700",
    ghost: "bg-white/70 text-teal-800 border border-teal-700/10 hover:border-teal-700/30 focus-visible:outline-teal-700",
    subtle: "bg-sand-100 text-teal-900 hover:bg-sand-200 focus-visible:outline-teal-700"
};

const sizeStyles: Record<Size, string> = {
    md: "px-4 py-2",
    lg: "px-6 py-3"
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: string;
    variant?: Variant;
    size?: Size;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    { className, variant = "primary", size = "md", href, children, ...props },
    ref
) {
    const classes = clsx(baseStyles, variantStyles[variant], sizeStyles[size], className);

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button ref={ref} className={classes} {...props}>
            {children}
        </button>
    );
});
