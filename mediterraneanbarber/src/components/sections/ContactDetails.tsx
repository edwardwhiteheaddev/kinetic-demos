type Props = {
    address: { line1: string; city: string; region: string; postal: string; country: string };
    phone: string;
    hours: string;
    mapEmbed: string;
    cta: string;
    bodyHtml: string;
};

export function ContactDetails({ address, phone, hours, mapEmbed, cta, bodyHtml }: Props) {
    const formattedAddress = `${address.line1}, ${address.city}, ${address.region}, ${address.postal}, ${address.country}`;

    return (
        <section className="mx-auto max-w-5xl px-4 py-12 space-y-8">
            <div className="glass grid gap-6 rounded-3xl p-8 md:grid-cols-2">
                <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Visit</p>
                    <h2 className="text-2xl font-semibold text-teal-900">Find us in Norwood Mall</h2>
                    <p className="text-base text-teal-900/85">{cta}</p>
                    <div className="text-sm text-teal-900/90">
                        <p className="font-semibold text-teal-900">Address</p>
                        <p>{formattedAddress}</p>
                    </div>
                    <div className="text-sm text-teal-900/90">
                        <p className="font-semibold text-teal-900">Phone</p>
                        <p>{phone}</p>
                    </div>
                    <div className="text-sm text-teal-900/90">
                        <p className="font-semibold text-teal-900">Hours</p>
                        <p>{hours}</p>
                    </div>
                    <div className="prose prose-sm prose-teal max-w-none text-teal-900/85" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/70 shadow-soft">
                    <iframe
                        title="Mediterranean Barber map"
                        src={mapEmbed}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="h-[360px] w-full"
                    />
                </div>
            </div>
        </section>
    );
}
