"use client";

import type { HeroBlock } from "@/lib/types";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

type Props = {
    hero: HeroBlock;
};

export function Hero({ hero }: Props) {
    return (
        <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6">
                    <motion.span
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800"
                    >
                        {hero.eyebrow}
                    </motion.span>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
                        <h1 className="font-display text-4xl leading-tight text-teal-900 sm:text-5xl">
                            {hero.headline}
                        </h1>
                        <p className="mt-4 text-lg text-teal-900/80 sm:text-xl">{hero.subheadline}</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex flex-wrap gap-3">
                        <Button href="/contact" size="lg">
                            {hero.ctaPrimary}
                        </Button>
                        {hero.ctaSecondary ? (
                            <Button href="/services" variant="ghost" size="lg">
                                {hero.ctaSecondary}
                            </Button>
                        ) : null}
                    </motion.div>
                    {hero.socialProof ? (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.25 }}
                            className="flex items-center gap-2 text-sm font-semibold text-teal-800"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" aria-hidden />
                            {hero.socialProof}
                        </motion.p>
                    ) : null}
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative overflow-hidden rounded-3xl bg-white/70 p-6 shadow-soft"
                >
                    <div className="absolute inset-x-4 top-4 h-32 rounded-2xl bg-gradient-to-br from-teal-500/20 via-sand-300/50 to-white blur-3xl" />
                    <div className="relative grid gap-4 text-sm text-teal-900">
                        <div className="flex items-start justify-between rounded-2xl border border-white/60 bg-white/80 p-4 shadow-soft">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">Location</p>
                                <p className="text-base font-semibold text-teal-900">Norwood Mall, Hamlin St</p>
                                <p>Sandton, Johannesburg</p>
                            </div>
                            <div className="rounded-full bg-teal-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">Open</div>
                        </div>
                        <div className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-soft">
                            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">Hours</p>
                            <p className="text-base font-semibold text-teal-900">09:00 - 17:30</p>
                            <p className="text-sm text-teal-800">Walk-ins welcome • Book ahead to skip the wait</p>
                        </div>
                        <div className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-soft">
                            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">Call</p>
                            <p className="text-lg font-bold text-teal-900">+27 84 945 4506</p>
                            <p className="text-sm text-teal-800">Sandton&apos;s calmest cut and shave ritual.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
