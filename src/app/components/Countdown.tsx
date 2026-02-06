'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CONFERENCE_DATE = new Date('2026-03-20T09:00:00+01:00');

function getTimeLeft() {
    const now = new Date();
    const diff = CONFERENCE_DATE.getTime() - now.getTime();

    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
    };
}

function pad(n: number) {
    return n.toString().padStart(2, '0');
}

function FlipDigit({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative w-20 h-24 sm:w-28 sm:h-32 md:w-32 md:h-36 rounded-xl bg-base-200/40 backdrop-blur-md border border-white/5 shadow-lg flex items-center justify-center overflow-hidden">
                {/* Subtle horizontal divider line */}
                <div className="absolute inset-x-0 top-1/2 h-px bg-white/5" />

                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={value}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold"
                        style={{ color: '#7c6bb4' }}
                    >
                        {value}
                    </motion.span>
                </AnimatePresence>
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-white/70 uppercase">
                {label}
            </span>
        </div>
    );
}

export default function Countdown() {
    const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

    useEffect(() => {
        setTime(getTimeLeft());
        const interval = setInterval(() => setTime(getTimeLeft()), 1000);
        return () => clearInterval(interval);
    }, []);

    if (!time) {
        return (
            <div className="relative z-10 w-full flex justify-center py-8">
                <div className="flex gap-3 sm:gap-5 md:gap-6">
                    {['Days', 'Hours', 'Mins', 'Secs'].map((label) => (
                        <FlipDigit key={label} value="--" label={label} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="relative z-10 w-full flex justify-center py-8">
            <div className="flex gap-3 sm:gap-5 md:gap-6">
                <FlipDigit value={pad(time.days)} label="Days" />
                <FlipDigit value={pad(time.hours)} label="Hours" />
                <FlipDigit value={pad(time.mins)} label="Mins" />
                <FlipDigit value={pad(time.secs)} label="Secs" />
            </div>
        </div>
    );
}
