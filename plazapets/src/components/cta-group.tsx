import type { CTA } from "@/lib/content";
import clsx from "clsx";
import Link from "next/link";

function CTAButton({ cta, variant = "primary" }: { cta?: CTA; variant?: CTA["variant"] }) {
    if (!cta) return null;

    const isExternal = /^(https?:\/\/|tel:|mailto:)/.test(cta.href);
    const baseClasses = clsx(
        "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition shadow-sm",
        variant === "secondary" &&
        "border border-slate-200 bg-white/80 text-slate-900 hover:border-orange-200 hover:bg-orange-50",
        variant === "ghost" &&
        "border border-transparent text-slate-900 hover:border-orange-100 hover:bg-orange-50",
        (!variant || variant === "primary") &&
        "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-[0_14px_40px_-16px_rgba(249,115,22,0.8)] hover:from-orange-400 hover:to-orange-500"
    );

    if (isExternal) {
        return (
            <a className={baseClasses} href={cta.href} target="_blank" rel="noopener noreferrer">
                {cta.label}
            </a>
        );
    }

    return (
        <Link className={baseClasses} href={cta.href}>
            {cta.label}
        </Link>
    );
}

export function CTAGroup({ primary, secondary }: { primary?: CTA; secondary?: CTA }) {
    if (!primary && !secondary) return null;

    return (
        <div className="flex flex-wrap gap-3">
            <CTAButton cta={primary} variant={primary?.variant ?? "primary"} />
            <CTAButton cta={secondary} variant={secondary?.variant ?? "secondary"} />
        </div>
    );
}
