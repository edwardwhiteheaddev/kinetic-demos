type Props = {
    title: string;
    bullets: string[];
};

export function ExperienceList({ title, bullets }: Props) {
    return (
        <section className="mx-auto max-w-6xl px-4 pb-12">
            <div className="glass rounded-3xl p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Experience</p>
                <h2 className="text-2xl font-semibold text-teal-900">{title}</h2>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                    {bullets.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm text-teal-900/90">
                            <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-teal-500" aria-hidden />
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
