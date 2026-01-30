'use client';
import React, { useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";
import BoxText from "./Style/BoxText";
import { motion } from "framer-motion";
import suiLogo from './images/icons/Sui_Logo_Sea.png';
import bsaLogo from './images/icons/Logo-dark.png';
import SpinningCoin from "../SpinningCoin";

interface HeroProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  date?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = (
    <>
      BSA Hackathon
      <img
        src={bsaLogo.src}
        alt="BSA Logo"
        className="h-8 md:h-14 inline-block object-contain align-middle px-2 pb-2"
      />
      <br />
      Stablecoin & Payments
    </>
  ),
  description = (
    <p className="text-black max-w-[500px] mb-2 font-normal text-center">
      Participate in the {" "}
      <span className="font-semibold"> BSA Stablecoin & Payments Hackathon</span> at EPFL
      campus and compete for an outstanding{" "}
      <span className="font-semibold">$20,000</span> prize pool.
    </p>
  ),
  date = "DATES TBD — EPFL CAMPUS",
}) => {
  const goToPrizes = () => {
    document.getElementById("Prizes")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-dark-800 flex flex-col items-center justify-center py-16 md:py-20 font-semibold min-h-screen w-full relative">

      {/* Centered content */}
      <div className="flex flex-col items-center w-full max-w-7xl px-4 gap-8 text-center flex-grow justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
          <div className="w-full md:w-1/2 h-[300px] md:h-[400px]">
            <SpinningCoin />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-black text-center md:text-left">
            {title}
          </h1>
        </div>

        <BoxText
          text={description}
          boxColor="border-dark-450"
        />

        <p className="md:text-lg font-light text-black">
          {date}
        </p>

        {/* Register Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md bg-white/70 backdrop-blur-md rounded-xl p-3 shadow-lg"
        >
          <div className="relative w-full aspect-[4/3] min-h-[260px]">
            <iframe
              src="https://lu.ma/embed/calendar/cal-KuAvNkii7TFKkpK/events"
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full rounded-lg"
              style={{ border: "1px solid rgba(191, 203, 218, 0.4)" }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </motion.div>
      </div>

      {/* Discover button (pinned lower but not forcing push-up) */}
      <div className="mt-12">
        <button
          type="button"
          onClick={goToPrizes}
          className="h-20 flex flex-col items-center justify-center px-4 group hover:opacity-80"
        >
          <p className="text-sm sm:text-base md:text-lg font-light text-black uppercase">
            Discover
          </p>
          <SlArrowDown className="group-hover:translate-y-[2px] duration-100 text-black" />
        </button>
      </div>
    </div>

  );
};

export default Hero;
