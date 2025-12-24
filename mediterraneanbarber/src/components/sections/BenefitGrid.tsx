import type { ValueProp } from "@/lib/types";

type Props = {
    items: ValueProp[];
    title?: string;
};

export function BenefitGrid({ items, title }: Props) {
    return (
        <section className="mx-auto max-w-6xl px-4 pb-14">
            <div className="glass rounded-3xl p-8">
                {title ? <h2 className="text-2xl font-semibold text-teal-900">{title}</h2> : null}
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                    {items.map((item) => (
                        <div key={item.title} className="rounded-2xl border border-white/70 bg-white/70 p-5 shadow-soft">
                            <h3 className="text-lg font-semibold text-teal-900">{item.title}</h3>
                            <p className="mt-2 text-sm text-teal-900/80">{item.body ?? item.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
