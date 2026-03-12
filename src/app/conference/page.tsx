'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import NavbarH from '../components/NavbarH';
import Footer from '../components/Footer';
import SpinningCoin from '../components/SpinningCoin';
import LocationView from '../components/Hackathon/LocationView';
import FaqView from '../components/Hackathon/FaqView';
import StarsBackground from '../components/StarsBackground';
import ScheduleView from '../components/Agenda/ScheduleView';
import ThankView from '../components/Hackathon/ThankView';
import GrantView from '../components/Hackathon/GrantView';
import SpeakersComponent from '../components/SpeakersComponent/SpeakersComponent';
import PreviousSpeakersComponent from '../components/SpeakersComponent/PreviousSpeakersComponent';
import LumaEmbed from '../components/LumaEmbed';
import Countdown from '../components/Countdown';

const textStyle = (gradient: string): React.CSSProperties => ({
    fontSize: 'clamp(1.8rem, 5vw, 4.5rem)',
    lineHeight: 1,
    background: gradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
});

export default function Conference() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const [locked, setLocked] = useState(true);
    const progress = useMotionValue(0);

    // Skip animation on mobile
    useEffect(() => {
        if (isMobile) {
            progress.set(1);
            setLocked(false);
        }
    }, [isMobile, progress]);

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
            const deltaY = lastY - currentY; // positive = scroll down
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
                { label: 'Speakers', id: 'speakers' },
                { label: 'Sponsors', id: 'sponsors' },
                { label: 'Schedule', id: 'schedule' },
                { label: 'Amenities', id: 'grant' },
                { label: 'Location', id: 'location' },
                { label: 'FAQ', id: 'faq' },
            ]} />
            <main className="flex-grow flex flex-col items-center justify-center w-full overflow-x-hidden">

                {/* Hero — scroll-jacked until text converges */}
                <section className="relative w-full min-h-screen flex flex-col items-center justify-center">
                    <div className="w-full max-w-6xl px-4">
                        {/* Row 1: BSA CONFERENCE */}
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
                                CONFERENCE
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
                        Join us for the <span className="font-semibold text-white">BSA Stablecoin & Payments Conference</span> at EPFL.
                        Engage with industry leaders and explore the future of payments.
                    </p>
                </section>

                <Countdown />

                <div id="register" className="w-full">
                    <LumaEmbed
                        eventId="evt-CJf7KtWdVOHFx8q"
                        title="Register for the Conference"
                        description="Secure your spot at the BSA Stablecoin & Payments Conference. Registration is free and open to all."
                    />
                </div>

                <div id="speakers" className="w-full">
                    <SpeakersComponent />
                </div>
                
                <div id="previous-speakers" className="w-full">
                    <PreviousSpeakersComponent />
                </div>

                <div id="sponsors" className="w-full">
                    <ThankView />
                </div>

                <div id="schedule" className="w-full">
                    <ScheduleView />
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
