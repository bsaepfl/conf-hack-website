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
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-center lg:text-left">
              <BsArrowRight className="mt-1 shrink-0 text-blue-400" />
              <span>Free registration, absolutely{" "}
                <span className="font-semibold text-blue-400">no cost for participants</span>
              </span>
            </li>
            <li className="flex items-start gap-3 text-center lg:text-left">
              <BsArrowRight className="mt-1 shrink-0 text-blue-400" />
              <span>Food, snacks, beverages, coffee provided by{" "}
                <a href="https://www.lasemeuse.ch" target="_blank" rel="noreferrer" className="font-semibold text-blue-400 hover:underline">Cafés La Semeuse</a>
                , energy drinks and much more supplied during the whole event</span>
            </li>
            <li className="flex items-start gap-3 text-center lg:text-left">
              <BsArrowRight className="mt-1 shrink-0 text-blue-400" />
              <span>For international students, accommodation will be provided during the event.</span>
            </li>
            <li className="flex items-start gap-3 text-center lg:text-left">
              <BsArrowRight className="mt-1 shrink-0 text-blue-400" />
              <span>You can also apply for a{" "}
                <span className="font-semibold text-blue-400">$100 travel grant</span>{" "}
                to help with transportation costs. Link to apply will be released soon.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GrantView;
