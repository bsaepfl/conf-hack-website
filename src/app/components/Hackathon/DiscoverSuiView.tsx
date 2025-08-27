import React from "react";
import EventCard from "./Style/EventCard";
import { DiscoverButton } from "./Style/NewsPopUp";
import suiImage from "./images/icons/Sui_Symbol_Sea.png"; // <-- adjust path if needed

const DiscoverSuiView = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center bg-dark-800 relative">
      <div className="w-full max-w-[1100px] flex flex-col items-center py-20 px-4 sm:px-10 gap-16">
        
        {/* Image as a left-aligned "title" */}
        <div className="w-full flex items-center">
          <img
            src={suiImage.src}
            alt="Sui Logo"
            className="h-10 sm:h-12 object-contain"
          />
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-between gap-10 sm:gap-20 relative">
          <EventCard
            color="bg-white"
            title="Sui Documentation"
            description="Docs for Sui, a next-generation smart contract platform with high throughput, low latency, and an asset-oriented programming model powered by Move"
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
            color="bg-white"
            title="Move Language"
            description="Sui is written in move and supports smart contracts written in Sui Move — a powerful asset-centric adaptation of Move for the Sui blockchain — to define assets that may have an owner."
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
