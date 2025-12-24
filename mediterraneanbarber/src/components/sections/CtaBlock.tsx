import { Button } from "../ui/Button";

type Props = {
    title: string;
    body: string;
    primary: string;
    secondary: string;
};

export function CtaBlock({ title, body, primary, secondary }: Props) {
    return (
        <section className="mx-auto max-w-5xl px-4 pb-16">
            <div className="glass flex flex-col gap-4 rounded-3xl p-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Book</p>
                <h2 className="text-3xl font-semibold text-teal-900">{title}</h2>
                <p className="text-base text-teal-900/80">{body}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                    <Button href="/contact" size="lg">
                        {primary}
                    </Button>
                    <Button href="tel:+27849454506" variant="ghost" size="lg">
                        {secondary}
                    </Button>
                </div>
            </div>
        </section>
    );
}
