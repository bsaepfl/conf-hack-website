import React from "react";
import { DiscoverButton } from "./Style/NewsPopUp";

const LocationView = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center bg-base-100 text-white">
      <div className="w-full max-w-[1100px] flex flex-col py-20 px-4 sm:px-10 gap-8">
        <h2 className="w-full font-bold text-3xl sm:text-4xl text-white indent-2 pb-2">
          Location
        </h2>

        {/* Map + Info Card */}
        <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
          {/* Google Maps Embed */}
          <div className="w-full aspect-[16/9] sm:aspect-[2/1]">
            <iframe
              src="https://maps.google.com/maps?q=EPFL+BC+Building,+Ecublens,+Switzerland&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EPFL BC Building Location"
            />
          </div>

          {/* Venue Info Bar */}
          <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 bg-white/[0.03]">
            <div className="min-w-0">
              <h3 className="text-lg font-bold text-white truncate">
                EPFL - BC Building
              </h3>
              <p className="text-sm text-white/50">
                1015 Ecublens VD, Switzerland
              </p>
            </div>
            <DiscoverButton
              ping={false}
              title="Directions"
              href="https://maps.app.goo.gl/UHxRRQ77PmhX5zwz5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationView;
