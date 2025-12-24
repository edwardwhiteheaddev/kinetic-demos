import type { SectionContent } from "@/lib/content";
import clsx from "clsx";
import { CTAGroup } from "./cta-group";
import { MarkdownBlock } from "./markdown-block";

export function SectionCard({
    section,
    tone = "default",
}: {
    section: SectionContent;
    tone?: "default" | "accent" | "muted";
}) {
    const { heading, subheading, body, cta, secondaryCta, badge, pills } = section;

    return (
        <div
            className={clsx(
                "relative overflow-hidden rounded-2xl border border-white/70 bg-white/70 p-6 shadow-[0_18px_60px_-28px_rgba(0,0,0,0.28)] backdrop-blur",
                tone === "accent" && "bg-gradient-to-br from-orange-50/90 via-white to-white",
                tone === "muted" && "bg-sky-50/70"
            )}
        >
            {badge ? (
                <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                    {badge}
                </span>
            ) : null}
            {heading ? (
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                    {heading}
                </h2>
            ) : null}
            {subheading ? (
                <p className="mt-2 text-base text-slate-700">{subheading}</p>
            ) : null}
            <div className="mt-3">
                <MarkdownBlock>{body}</MarkdownBlock>
            </div>
            {pills && pills.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                    {pills.map((pill) => (
                        <span
                            key={pill}
                            className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-800 shadow-inner"
                        >
                            {pill}
                        </span>
                    ))}
                </div>
            ) : null}
            {(cta || secondaryCta) && (
                <div className="mt-5">
                    <CTAGroup primary={cta} secondary={secondaryCta} />
                </div>
            )}
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/40" />
        </div>
    );
}
