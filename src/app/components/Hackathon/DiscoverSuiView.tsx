import React from "react";
import EventCard from "./Style/EventCard";
import { DiscoverButton } from "./Style/NewsPopUp";
import suiImage from "./images/icons/Sui_Symbol_Sea.png"; // <-- adjust path if needed
const bsaLogo = { src: "/images/logo-white.png" };

const DiscoverSuiView = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center bg-dark-800 relative">
      <div className="w-full max-w-[1100px] flex flex-col items-center py-20 px-4 sm:px-10 gap-16">

        {/* Image as a left-aligned "title" */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
          <img
            src={bsaLogo.src}
            alt="PlaceHolder Logo"
            className="h-10 sm:h-12 object-contain"
          />
          {/* then title */}
          <h2 className="font-bold text-3xl sm:text-4xl text-white text-center">
            Discover
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-between gap-10 sm:gap-20 relative">
          <EventCard
            color="bg-base-200/40 backdrop-blur-md"
            title="Documentation for TON"
            description="TON is the blockchain powering Telegram’s Web3 ecosystem, designed for fast, scalable payments and apps. Explore the official docs to build on TON."
            footer={
              <div className="flex justify-center">
                <DiscoverButton
                  ping={false}
                  title="View"
                  href="https://docs.ton.org/"
                />
              </div>
            }
          />
          <EventCard
            color="bg-base-200/40 backdrop-blur-md"
            title="Documentation for XRPL"
            description="XRPL (XRP Ledger) is a decentralized blockchain for payments and asset issuance with low fees and fast settlement. Use the docs to start building."
            footer={
              <div className="flex justify-center">
                <DiscoverButton
                  ping={false}
                  title="View"
                  href="https://xrpl.org/docs/"
                />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default DiscoverSuiView;
