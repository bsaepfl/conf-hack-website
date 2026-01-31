import React from "react";

import nissinLogo from "./images/icons/Nissin.jpg";
import cbLogo from "./images/icons/CB.gif";
import suiLogo from "./images/icons/Sui_Symbol_Sea.png";
import bsaLogo from "./images/icons/Logo-dark.png";

import snatts from "./images/icons/snatts.png";
import brite from "./images/icons/Brite.png";


const SponsorThanks = () => {
  const sponsors = [
    { name: "Camille Bloch", logo: cbLogo },
    { name: "Nissin", logo: nissinLogo },

    { name: "Snatt's", logo: snatts },

    { name: "Brite", logo: brite },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-20 bg-transparent relative pb-20">
      <div
        id="Sponsors"
        className="h-[52px] sm:h-[70px] w-full absolute -top-[52px] sm:-top-[70px] pointer-events-none"
      />

      <div className="w-full max-w-[1100px] flex flex-col py-20 px-4 sm:px-10 gap-14 text-sm sm:text-base">
        {/* Title */}
        <h2 className="flex flex-col items-center justify-center gap-2 text-center">
          <span className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-200 select-none">
            Thank You to Our Sponsors
          </span>
          <span className="text-white text-lg sm:text-xl lg:text-2xl font-medium">
            Making the BSA Stablecoin & Payments Hackathon possible
          </span>
        </h2>

        {/* Main Sponsor (Visually Separated Card) */}
        <div className="bg-base-200/40 backdrop-blur-md rounded-2xl shadow-md p-10 flex flex-col items-center justify-center gap-6">
          <span className="text-gray-300 text-lg sm:text-xl font-semibold uppercase tracking-wide">
            Main Sponsor
          </span>
          <img
            src={bsaLogo.src}
            alt="PlaceHolder Logo"
            className="w-40 sm:w-56 lg:w-72 object-contain"
          />
          <p className="text-center text-white max-w-[700px]">
            We are deeply grateful to <b className="font-semibold">???</b> for
            sponsoring and supporting this hackathon.
            Their commitment to innovation and builders worldwide made this event possible.
          </p>
        </div>

        {/* Secondary Sponsors */}

        <div className="flex flex-col items-center justify-center gap-8 pt-10 pb-10 bg-base-200/40 backdrop-blur-md rounded-2xl shadow-md">

          <span className="text-gray-300 text-base sm:text-lg font-semibold uppercase tracking-wide">
            Food & Beverage Sponsors
          </span>
          <div className="grid grid-cols-4 sm:grid-cols-4 gap-10 place-items-center">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-4"
              >
                <img
                  src={typeof sponsor.logo === "string" ? sponsor.logo : sponsor.logo.src}
                  alt={sponsor.name}
                  className="w-24 sm:w-28 lg:w-32 object-contain"
                />
                <span className="text-white font-medium text-sm sm:text-base text-center">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorThanks;