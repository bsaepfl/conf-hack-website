import React from "react";

import alphaton from "../../images/sponsors/alphaton.png";
import ledger from "../../images/sponsors/ledger.png";
import xrpl from "../../images/sponsors/xrpl.png";
import ens from "../../images/sponsors/ens.png";
import raiffeisen from "../../images/sponsors/raiffeisen.png";
import swissquote from "../../images/sponsors/swissquote.png";
import taurus from "../../images/sponsors/taurus2.png";

type Sponsor = {
  name: string;
  logo: string;
  url?: string;
};

type SponsorTier = {
  label: string;
  color: string;
  borderColor: string;
  bgColor: string;
  logoSize: string;
  gridCols: string;
  sponsors: Sponsor[];
};

const tiers: SponsorTier[] = [
  {
    label: "Diamond",
    color: "text-cyan-300",
    borderColor: "border-cyan-400/30",
    bgColor: "bg-cyan-400/5",
    logoSize: "w-56 sm:w-72 lg:w-80",
    gridCols: "grid-cols-1",
    sponsors: [
      { name: "AlphaTON Capital", logo: alphaton.src, url: "https://alphatoncapital.com" },
    ],
  },
  {
    label: "Gold",
    color: "text-yellow-400",
    borderColor: "border-yellow-400/30",
    bgColor: "bg-yellow-400/5",
    logoSize: "w-44 sm:w-56 lg:w-64",
    gridCols: "grid-cols-1 sm:grid-cols-2",
    sponsors: [
      { name: "Ledger", logo: ledger.src, url: "https://www.ledger.com" },
      { name: "XRPL Commons", logo: xrpl.src, url: "https://xrplcommons.org" },
    ],
  },
  {
    label: "Silver",
    color: "text-gray-300",
    borderColor: "border-gray-400/30",
    bgColor: "bg-gray-400/5",
    Size: "w-36 sm:w-44 lg:w-52",
    gridCols: "grid-cols-1",
    sponsors: [
      { name: "ENS", logo: ens.src, url: "https://ens.domains" },
    ],
  },
  {
    label: "Bronze",
    color: "text-orange-400",
    borderColor: "border-orange-400/30",
    bgColor: "bg-orange-400/5",
    logoSize: "w-28 sm:w-36 lg:w-44",
    gridCols: "grid-cols-2 sm:grid-cols-3",
    sponsors: [
      { name: "Raiffeisen", logo: raiffeisen.src, url: "https://www.raiffeisen.ch" },
      { name: "Swissquote", logo: swissquote.src, url: "https://www.swissquote.com" },
      { name: "Taurus", logo: taurus.src, url: "https://www.taurushq.com" },
    ],
  },
];

const SponsorThanks = () => {
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
            Our Sponsors
          </span>
          <span className="text-white text-lg sm:text-xl lg:text-2xl font-medium">
            Making the BSA Stablecoin & Payments events possible
          </span>
        </h2>

        {/* Sponsor Tiers */}
        {tiers.map((tier) => (
          <div
            key={tier.label}
            className={`${tier.bgColor} ${tier.borderColor} border backdrop-blur-md rounded-2xl shadow-md p-8 sm:p-10 flex flex-col items-center justify-center gap-6`}
          >
            <span className={`${tier.color} text-lg sm:text-xl font-semibold uppercase tracking-widest`}>
              {tier.label}
            </span>
            <div className={`grid ${tier.gridCols} gap-10 place-items-center w-full`}>
              {tier.sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-4"
                >
                  {sponsor.url ? (
                    <a
                      href={sponsor.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-col items-center justify-center gap-4 hover:opacity-90"
                    >
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className={`${tier.logoSize} object-contain opacity-60`}
                      />
                      <span className="text-white/50 font-medium text-sm sm:text-base text-center">
                        {sponsor.name}
                      </span>
                    </a>
                  ) : (
                    <>
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className={`${tier.logoSize} object-contain opacity-60`}
                      />
                      <span className="text-white/50 font-medium text-sm sm:text-base text-center">
                        {sponsor.name}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorThanks;
