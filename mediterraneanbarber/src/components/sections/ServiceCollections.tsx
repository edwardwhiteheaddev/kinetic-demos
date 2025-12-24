import type { SectionCollection } from "@/lib/types";

type Props = {
    sections: SectionCollection[];
};

export function ServiceCollections({ sections }: Props) {
    return (
        <section className="mx-auto max-w-6xl px-4 py-12 space-y-10">
            {sections.map((section) => (
                <div key={section.heading} className="space-y-4">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">{section.heading}</p>
                            <p className="text-sm text-teal-900/80">{section.copy}</p>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        {section.services.map((service) => (
                            <article key={service.name} className="glass flex h-full flex-col gap-3 rounded-2xl p-5">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-teal-900">{service.name}</h3>
                                    {service.price ? <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">{service.price}</span> : null}
                                </div>
                                <p className="text-sm text-teal-900/80">{service.description}</p>
                                <div className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                                    {service.duration}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
