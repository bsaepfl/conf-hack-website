import React from "react";
import { DiscoverButton } from "../../NewsPopUp";
import { BsArrowRight } from "react-icons/bs";

const ApplyView = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center bg-white text-black z-[2]">
      <div className="w-full max-w-[1100px] flex flex-col py-20 px-4 sm:px-10 gap-8 text-sm sm:text-base z-[2]">
        <div className="w-full mb-6">
          <iframe
            src="https://dorahacks.io/hackathon/bsa-stablecoins-payments/"
            title="DoraHacks - BSA Stablecoins & Payments"
            className="w-full min-h-[520px] rounded-xl border border-black/10"
            loading="lazy"
            allowFullScreen
          />
        </div>
        <h2 className="w-full font-bold text-3xl sm:text-4xl text-dark-100 text-center pb-4">
          How To Apply - Join a Team
        </h2>
        <p className="text-center">
          <BsArrowRight className="inline" /> Sign in or sign up for a Dorahacks
          account using your email, Google, GitHub, or Wallet. <br />
          <BsArrowRight className="inline" /> Apply to the BSA - EPFL | Stablecoins
          & Payments Hackathon on Dorahacks.
          <br />
          <BsArrowRight className="inline" /> Join or create a team, or you can
          also choose to hack alone.
        </p>
        <div className="w-full flex items-center justify-center lg:justify-start">
          <a
            href="https://dorahacks.io/hackathon/bsa-stablecoins-payments/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center h-[44px] w-[312px] rounded-[4px] bg-dark-100 text-white font-semibold hover:opacity-90"
          >
            Apply on DoraHacks
          </a>
        </div>
      </div>
    </div>
  );
};

export default ApplyView;
