import React from "react";
import EventCard from "./Style/EventCard";
import { DiscoverButton } from "./Style/NewsPopUp";
import suiImage from "./images/icons/Sui_Symbol_Sea.png"; // <-- adjust path if needed
import bsaLogo from "./images/icons/logo_light.png";

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
            title="Documentation for ???"
            description="Docs for ???, a next-generation smart contract platform with high throughput, low latency, and an asset-oriented programming model powered by Move"
            footer={
              <div className="flex justify-center">
                <DiscoverButton
                  ping={false}
                  title="View"
                  href="https://docs.sui.io/"
                />
              </div>
            }
          />
          <EventCard
            color="bg-base-200/40 backdrop-blur-md"
            title="Documentation for ???"
            description="Docs for ???, a next-generation smart contract platform with high throughput, low latency, and an asset-oriented programming model powered by Move"
            footer={
              <div className="flex justify-center">
                <DiscoverButton
                  ping={false}
                  title="Learn More"
                  href="https://docs.sui.io/learn/why-move"
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
