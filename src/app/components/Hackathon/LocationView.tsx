import React from "react";
import { DiscoverButton } from "./Style/NewsPopUp";
import Image from "next/image";

const LocationView = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center bg-base-100 text-white">
      <div className="w-full max-w-[1100px] flex flex-col py-20 px-4 sm:px-10 gap-8 text-sm sm:text-base ">
        <div className="w-full grid grid-rows-1 lg:grid-rows-1 grid-cols-1 md:grid-cols-2 justify-between gap-10 sm:gap-20 relative">
          <div className="hidden md:flex rounded-xl overflow-hidden">
            <Image
              height={500}
              width={500}
              src="/images/batiment-bc-epfl.jpg" // Set src to the path in public folder
              alt="BC builduing EPFL"
              className="w-full"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 ">
            <h2 className="w-full font-bold text-3xl sm:text-4xl text-white indent-2 pb-8">
              Location
            </h2>

            <div className="w-full flex flex-col gap-5 items-center justify-center md:items-start md:justify-start">
              <div className="flex md:hidden rounded-xl overflow-hidden w-full max-w-[400px]">
                <Image
                  height={500}
                  width={500}
                  src="/images/batiment-bc-epfl.jpg" // Set src to the path in public folder
                  alt="BC builduing EPFL"
                  className="w-full"
                />
              </div>
              <p className=" pl-2 md:pl-0 text-left w-full max-w-[400px] text-white">
                EPFL - BC Building, <br /> 1015 Ecublens VD, Switzerland
              </p>
              {/* </div> */}

              {/* <div className="w-full flex items-center justify-center md:justify-start"> */}
              <DiscoverButton
                ping={false}
                title="Get Directions"
                href="https://maps.app.goo.gl/UHxRRQ77PmhX5zwz5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationView;
