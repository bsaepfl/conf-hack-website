import React from "react";

const PrizeView = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-20 bg-transparent relative">
      <div
        id="Prizes"
        className="h-[52px] sm:h-[70px] w-full absolute -top-[52px] sm:-top-[70px] pointer-events-none"
      />
      <div className="w-full max-w-[1100px] flex flex-col py-20 px-4 sm:px-10 gap-8 text-sm sm:text-base ">
        <h2 className="flex flex-col items-center justify-center gap-1 pb-10 sm:py-10">
          <span className=" font-extrabold text-6xl sm:text-7xl l²g:text-9xl text-gray-200 select-none">
            $16,000
          </span>
          <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-medium">
            Available in prizes
          </span>
        </h2>

        <div className="w-full max-w-[700px] mx-auto flex flex-col gap-4">
          <p className="text-white/80 text-center leading-relaxed">
            From <span className="font-semibold text-white">Saturday, March 21 at 8:30 AM</span>, we
            are welcoming builders from around the globe to participate in the
            Stablecoin & Payments Hackathon of the{" "}
            <span className="font-semibold text-white">BSA</span> at EPFL, a
            prestigious institution at the forefront of technology and innovation.
          </p>
          <p className="text-center text-lg font-semibold text-white rounded-lg border border-white/15 bg-white/5 px-5 py-4">
            Get to win over $16,000 USD in prizes and build something amazing in just 36 hours!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrizeView;
