import type { ServiceItem } from "@/lib/types";

type Props = {
    title: string;
    tagline: string;
    items: ServiceItem[];
};

export function ServicesPreview({ title, tagline, items }: Props) {
    return (
        <section className="mx-auto max-w-6xl px-4 py-12">
            <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Services</p>
                    <h2 className="text-2xl font-semibold text-teal-900">{title}</h2>
                    <p className="text-sm text-teal-900/80">{tagline}</p>
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
                {items.map((service) => (
                    <article key={service.name} className="glass flex h-full flex-col gap-3 rounded-2xl p-5">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-teal-900">{service.name}</h3>
                            {service.price ? <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">{service.price}</span> : null}
                        </div>
                        <p className="text-sm text-teal-900/80">{service.description}</p>
                        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-teal-700">
                            {service.duration ? <span>{service.duration}</span> : null}
                            <span className="h-1 w-1 rounded-full bg-teal-500" aria-hidden />
                            <span>Sandton • Norwood Mall</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
