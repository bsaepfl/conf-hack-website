'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import bsaLogo from './Hackathon/images/icons/Logo-dark.png';

export default function SplashIntro() {
    // Start true so the black overlay is painted immediately (no flash)
    const [show, setShow] = useState(true);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('splashSeen')) {
            // Returning visitor this session — hide instantly
            setShow(false);
            return;
        }
        sessionStorage.setItem('splashSeen', '1');
        // Small delay to ensure the overlay is painted before we kick off the animation
        requestAnimationFrame(() => setAnimate(true));
    }, []);

    if (!show) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={animate ? { opacity: [1, 1, 0] } : { opacity: 1 }}
            transition={{ duration: 2, times: [0, 0.55, 1], ease: 'easeIn' }}
            onAnimationComplete={() => {
                if (animate) setShow(false);
            }}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 100,
                background: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
            }}
        >
            <motion.img
                src={bsaLogo.src}
                alt="BSA"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={animate ? {
                    scale: [0.8, 1, 12],
                    opacity: [0, 1, 1],
                } : { scale: 0.8, opacity: 0 }}
                transition={{
                    duration: 2,
                    times: [0, 0.3, 1],
                    ease: [
                        [0.25, 0.1, 0.25, 1],
                        [0.4, 0, 1, 1],
                    ],
                }}
                style={{
                    width: 120,
                    height: 120,
                }}
            />
        </motion.div>
    );
}
