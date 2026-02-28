'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';
import NavbarH from './components/NavbarH';
import Footer from './components/Footer';
import SpinningCoin from './components/SpinningCoin';
import PrizeView from './components/Hackathon/PrizeView';
import DiscoverSuiView from './components/Hackathon/DiscoverSuiView';
import LocationView from './components/Hackathon/LocationView';
import FaqView from './components/Hackathon/FaqView';
import StarsBackground from './components/StarsBackground';
import Countdown from './components/Countdown';
import SplashIntro from './components/SplashIntro';
import ScheduleView from './components/Agenda/ScheduleView';
import ThankView from './components/Hackathon/ThankView';
import GrantView from './components/Hackathon/GrantView';

const textStyle = (gradient: string): React.CSSProperties => ({
    fontSize: 'clamp(1.8rem, 5vw, 4.5rem)',
    lineHeight: 1,
    background: gradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
});

export default function Hackathon() {
    const [locked, setLocked] = useState(true);
    const progress = useMotionValue(0);

    // Lock body scroll while animation is active
    useEffect(() => {
        if (locked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [locked]);

    // Intercept wheel events to drive the text animation
    useEffect(() => {
        if (!locked) return;

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            const current = progress.get();
            const next = Math.min(1, Math.max(0, current + e.deltaY * 0.002));
            progress.set(next);
            if (next >= 1) setLocked(false);
        };

        window.addEventListener('wheel', onWheel, { passive: false });
        return () => window.removeEventListener('wheel', onWheel);
    }, [locked, progress]);

    // Touch support for mobile
    useEffect(() => {
        if (!locked) return;

        let lastY = 0;
        const onTouchStart = (e: TouchEvent) => {
            lastY = e.touches[0].clientY;
        };
        const onTouchMove = (e: TouchEvent) => {
            e.preventDefault();
            const currentY = e.touches[0].clientY;
            const deltaY = lastY - currentY;
            lastY = currentY;
            const current = progress.get();
            const next = Math.min(1, Math.max(0, current + deltaY * 0.004));
            progress.set(next);
            if (next >= 1) setLocked(false);
        };

        window.addEventListener('touchstart', onTouchStart, { passive: false });
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        return () => {
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
        };
    }, [locked, progress]);

    // Text offsets driven by progress (0 = fully spread, 1 = converged)
    const x1Left = useTransform(progress, [0, 1], [-150, 0]);
    const x1Right = useTransform(progress, [0, 1], [150, 0]);
    const x2Left = useTransform(progress, [0, 1], [-150, 0]);
    const x2Right = useTransform(progress, [0, 1], [150, 0]);

    return (
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
            <SplashIntro />
            <StarsBackground />
            <NavbarH />
            <main className="flex-grow flex flex-col items-center justify-center bg-base-100 w-full overflow-x-hidden">

                {/* Hero — scroll-jacked until text converges */}
                <section className="relative w-full min-h-screen flex flex-col items-center justify-center">
                    <div className="w-full max-w-6xl px-4">
                        {/* Row 1: BSA HACKATHON */}
                        <div className="flex justify-center items-baseline whitespace-nowrap">
                            <motion.span
                                style={{ x: x1Left, ...textStyle('linear-gradient(180deg, #ffffff 0%, #f0d4bb 100%)') }}
                                className="font-black uppercase tracking-tight select-none"
                            >
                                BSA{'\u00A0'}
                            </motion.span>
                            <motion.span
                                style={{ x: x1Right, ...textStyle('linear-gradient(180deg, #ffffff 0%, #f0d4bb 100%)') }}
                                className="font-black uppercase tracking-tight select-none"
                            >
                                EVENT
                            </motion.span>
                        </div>

                        {/* Spinning coin */}
                        <div className="h-[200px] md:h-[300px] w-full flex items-center justify-center my-4">
                            <SpinningCoin />
                        </div>

                        {/* Row 2: STABLECOIN & PAYMENTS */}
                        <div className="flex justify-center items-baseline whitespace-nowrap">
                            <motion.span
                                style={{ x: x2Left, ...textStyle('linear-gradient(180deg, #f5c6a0 0%, #e8a87c 100%)') }}
                                className="font-black uppercase tracking-tight select-none"
                            >
                                STABLECOIN{'\u00A0'}
                            </motion.span>
                            <motion.span
                                style={{ x: x2Right, ...textStyle('linear-gradient(180deg, #f5c6a0 0%, #e8a87c 100%)') }}
                                className="font-black uppercase tracking-tight select-none"
                            >
                                & PAYMENTS
                            </motion.span>
                        </div>
                    </div>

                    <p className="text-white/50 text-sm uppercase tracking-[0.15em] mt-10 mb-4">
                        Explore the event
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 px-4">
                        <Link
                            href="/conference"
                            className="group relative px-8 py-4 rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                        >
                            <div className="relative z-10 text-center">
                                <span className="block text-lg font-semibold text-white tracking-wide">Conference</span>
                                <span className="block text-xs text-white/50 mt-1">March 20 — Talks & Panels</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/0 to-[#2563eb]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>

                        <Link
                            href="/hackathon"
                            className="group relative px-8 py-4 rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                        >
                            <div className="relative z-10 text-center">
                                <span className="block text-lg font-semibold text-white tracking-wide">Hackathon</span>
                                <span className="block text-xs text-white/50 mt-1">March 21–22 — $16,000 Prize Pool</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/0 to-[#7c3aed]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                    </div>

                    <p className="md:text-sm font-light text-white/40 mt-6">
                        MARCH 20–22 — EPFL CAMPUS
                    </p>
                </section>

                <Countdown />

                <div id="prize" className="w-full">
                    <PrizeView />
                </div>

                <div id="sponsors" className="w-full">
                    <ThankView />
                </div>

                <div id="schedule" className="w-full">
                    <ScheduleView />
                </div>

                <div id="discover" className="w-full">
                    <DiscoverSuiView />
                </div>

                <div id="grant" className="w-full">
                    <GrantView />
                </div>

                <div id="location" className="w-full">
                    <LocationView />
                </div>

                <div id="faq" className="w-full">
                    <FaqView />
                </div>
            </main>
            <Footer />
        </div>
    );
}
