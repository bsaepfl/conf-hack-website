import React from "react";
import { DiscoverButton } from "../../NewsPopUp";


const ApplyView = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center bg-base-100 text-white z-[2]">
      <div className="w-full max-w-[1100px] flex flex-col py-20 px-4 sm:px-10 gap-8 text-sm sm:text-base z-[2]">
        <h2 className="w-full font-bold text-3xl sm:text-4xl text-white text-center pb-4">
          How To Apply - Join a Team
        </h2>
        <div className="flex flex-col gap-4 w-full max-w-[700px] mx-auto">
          {[
            "Sign in or sign up for a Dorahacks account using your email, Google, GitHub, or Wallet.",
            <>
              Apply to the BSA - EPFL | Stablecoins & Payments Hackathon on{" "}
              <a
                href="https://dorahacks.io/hackathon/bsa-stablecoins-payments/detail"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:text-black/60"
              >
                Dorahacks
              </a>
              .
            </>,
            "Join or create a team, or you can also choose to hack alone.",
          ].map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-lg border border-black/10 bg-black/[0.03] px-5 py-4"
            >
              <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-black text-white text-sm font-semibold mt-0.5">
                {i + 1}
              </span>
              <p className="text-white/80 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center">
          <a
            href="https://dorahacks.io/hackathon/bsa-stablecoins-payments/detail"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center h-[44px] w-[312px] rounded-[4px] bg-white text-black font-semibold hover:opacity-90"
          >
            Apply on DoraHacks
          </a>
        </div>
      </div>
    </div>
  );
};

export default ApplyView;
