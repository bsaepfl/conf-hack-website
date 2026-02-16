'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import NavbarH from '../components/NavbarH';
import Footer from '../components/Footer';
import SpinningCoin from '../components/SpinningCoin';
import ApplyView from '../components/Hackathon/ApplyView';
import PrizeView from '../components/Hackathon/PrizeView';
import DiscoverSuiView from '../components/Hackathon/DiscoverSuiView';
import LocationView from '../components/Hackathon/LocationView';
import FaqView from '../components/Hackathon/FaqView';
import RulesView from '../components/Hackathon/RulesView';
import StarsBackground from '../components/StarsBackground';
import Countdown from '../components/Countdown';
import LumaEmbed from '../components/LumaEmbed';

const textStyle = (gradient: string): React.CSSProperties => ({
    fontSize: 'clamp(1.8rem, 5vw, 4.5rem)',
    lineHeight: 1,
    background: gradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
});

export default function HackathonPage() {
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
            <StarsBackground />
            <NavbarH links={[
                { label: 'Apply', id: 'apply' },
                { label: 'Prizes', id: 'prize' },
                { label: 'Discover', id: 'discover' },
                { label: 'Location', id: 'location' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Rules', id: 'rules' },
            ]} />
            <main className="flex-grow flex flex-col items-center justify-center w-full overflow-x-hidden">

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
                                HACKATHON
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

                    <p className="text-white/70 max-w-[500px] mt-8 font-normal text-center text-base md:text-lg px-4">
                        Participate in the <span className="font-semibold text-white">BSA Stablecoin & Payments Hackathon</span> at EPFL
                        campus and compete for an outstanding <span className="font-semibold text-white">$20,000</span> prize pool.
                    </p>

                    <p className="md:text-lg font-light text-white mt-4">
                        SATURDAY, MARCH 21 — EPFL CAMPUS
                    </p>
                </section>

                <Countdown />

                <div id="register" className="w-full">
                    <LumaEmbed
                        eventId="evt-U3ixoqjZHnM3CnO"
                        title="Register for the Hackathon"
                        description="Join us for an exciting hackathon experience. Register now to secure your spot!"
                    />
                </div>

                <div id="apply" className="w-full">
                    <ApplyView />
                </div>

                <div id="prize" className="w-full">
                    <PrizeView />
                </div>

                <div id="discover" className="w-full">
                    <DiscoverSuiView />
                </div>

                <div id="location" className="w-full">
                    <LocationView />
                </div>

                <div id="faq" className="w-full">
                    <FaqView />
                </div>

                <div id="rules" className="w-full mb-12">
                    <RulesView />
                </div>
            </main>
            <Footer />
        </div>
    );
}
