import React from "react";
import { DiscoverButton } from "../../NewsPopUp";

const RulesView = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center bg-base-100 text-white">
      <div className="w-full max-w-[1100px] flex flex-col py-20 px-4 sm:px-10 gap-8 text-sm sm:text-base ">
        <h2 className="w-full font-bold text-3xl sm:text-4xl text-white indent-2 pb-8">
          Rules
        </h2>
        <p className="text-white">
          {" "}
          To ensure a fair and exciting competition, please take a moment to
          review the <b className="font-semibold">
            official Hackathon Rules
          </b>{" "}
          document. <br /> It contains important guidelines and information
          about the event.{" "}
        </p>
        {/* <div> */}
        <div className="w-full flex items-center justify-center lg:justify-start">
          <a
            href="/Assets/BSA_Hackathon_Rules.pdf"
            target="_blank"
            download
            className="w-fit gap-3 uppercase rounded-md bg-white hover:bg-white border border-black text-black font-medium hover:text-dark-100 hover:border-dark-100 duration-100 px-10 py-2"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default RulesView;
