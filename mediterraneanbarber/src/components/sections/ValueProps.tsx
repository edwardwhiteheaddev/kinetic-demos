import type { ValueProp } from "@/lib/types";

type Props = {
    items: ValueProp[];
};

export function ValueProps({ items }: Props) {
    return (
        <section className="mx-auto max-w-6xl px-4 py-12">
            <div className="grid gap-6 md:grid-cols-3">
                {items.map((item) => (
                    <article key={item.title} className="glass flex h-full flex-col gap-3 rounded-2xl p-6 text-teal-900">
                        <h3 className="text-lg font-semibold text-teal-900">{item.title}</h3>
                        <p className="text-sm text-teal-900/80">{item.body ?? item.detail}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
