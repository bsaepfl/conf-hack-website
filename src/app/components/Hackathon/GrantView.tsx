import React from "react";
import { BsArrowRight } from "react-icons/bs";
import grantImage from "./images/icons/cat.jpg";

const GrantView = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center bg-base-100 text-white z-[2]">
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row py-20 px-4 sm:px-10 gap-8 text-sm sm:text-base z-[2]">

        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={grantImage.src}
            alt="Travel Grant"
            className="rounded-2xl shadow-lg object-cover w-full max-h-[350px]"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="w-full font-bold text-3xl sm:text-4xl text-white text-center md:text-left md:indent-2 pb-2">
            Amenities
          </h2>
          <p className="items-center lg:items-start text-center lg:text-left">
            <BsArrowRight className="inline" /> Free registration, absolutely{" "}
            <span className="font-semibold text-blue-400">
              no cost for participants
            </span>{" "}
            <br />
            <BsArrowRight className="inline" /> Food, snacks, beverages, coffee,
            energy drinks and much more supplied during the whole Hackathon{" "}
            <br />
            <BsArrowRight className="inline" /> For international students,
            accommodation will be provided during the event. <br />
            <BsArrowRight className="inline" /> You can also apply for a{" "}
            <span className="font-semibold text-blue-400">$100 travel grant</span>{" "}
            to help with transportation costs. Link to apply will be released soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GrantView;
