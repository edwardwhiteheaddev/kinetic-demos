type Props = {
    mission: string;
    story: string;
    community: string;
    reasons: string[];
    bodyHtml: string;
};

export function AboutStory({ mission, story, community, reasons, bodyHtml }: Props) {
    return (
        <section className="mx-auto max-w-5xl px-4 py-12 space-y-8">
            <div className="glass rounded-3xl p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Mission</p>
                <h2 className="text-2xl font-semibold text-teal-900">{mission}</h2>
            </div>
            <div className="glass rounded-3xl p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Story</p>
                <p className="mt-2 text-base text-teal-900/85">{story}</p>
            </div>
            <div className="glass rounded-3xl p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Community</p>
                <p className="mt-2 text-base text-teal-900/85">{community}</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {reasons.map((reason) => (
                        <div key={reason} className="flex items-start gap-3 text-sm text-teal-900/90">
                            <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-teal-500" aria-hidden />
                            <p>{reason}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="prose prose-teal max-w-none text-teal-900/85" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
        </section>
    );
}
