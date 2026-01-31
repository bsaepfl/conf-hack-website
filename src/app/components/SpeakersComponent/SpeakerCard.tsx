'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Speaker {
    name: string;
    image: StaticImageData | string;
    description: string;
    socials: {
        twitter: string;
        linkedin: string;
    };
}

interface SpeakerCardProps {
    speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Make the springs stiffer and more damped for a "firmer" feel
    const springConfig = { stiffness: 300, damping: 30, mass: 0.5 };
    const mouseXSpring = useSpring(x, springConfig);
    const mouseYSpring = useSpring(y, springConfig);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    // Glare/Sheen effect
    // We move a radial gradient opposite to the mouse position or based on the angle
    // A simple approach is to map the mouse position to the gradient center position
    const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const sheenY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);


    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="card bg-base-200/40 backdrop-blur-md text-base-content shadow-md p-6 flex flex-col items-start space-y-4 h-auto relative overflow-hidden group"
        >
            {/* Reflective Sheen Overlay */}
            <motion.div
                style={{
                    background: useTransform(
                        [sheenX, sheenY],
                        ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.2) 0%, transparent 60%)`
                    ),
                    zIndex: 10,
                }}
                className="absolute inset-0 pointer-events-none mix-blend-overlay"
            />

            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="avatar flex justify-center w-full z-20"
            >
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 bg-black/10">
                    <Image
                        src={speaker.image}
                        alt={speaker.name}
                        width={200}
                        height={200}
                        className="object-cover"
                    />
                </div>
            </div>

            <div
                style={{
                    transform: "translateZ(30px)",
                }}
                className="text-left z-20"
            >
                <h2 className="card-title text-xl mb-2">{speaker.name}</h2>
                <p className="text-sm text-base-content mb-4">
                    {speaker.description}
                </p>
            </div>
        </motion.div>
    );
};

export default SpeakerCard;
