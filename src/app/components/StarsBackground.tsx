'use client'

// components/StarsBackground.tsx
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const StarsBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 50, // Reduced repulse distance
              speed: 0.1
            },
          },
        },
        particles: {
          color: {
            value: "#808080", // Gray
          },
          links: {
            color: "#808080",
            distance: 150,
            enable: true,
            opacity: 0.2, // Reduced opacity
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.5, // Slower particle speed
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default StarsBackground;
