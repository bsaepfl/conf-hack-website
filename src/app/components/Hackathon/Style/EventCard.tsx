import React from "react";
import classNames from "classnames";
import { EventCardProps } from "../types";

const EventCard = ({
  title,
  date,
  description,
  footer,
  color,
}: EventCardProps) => {
  return (
    <div
      className={classNames(
        "rounded-lg px-6 sm:px-10 py-8 sm:py-10 flex flex-col justify-between gap-3 w-full",
        color ? color : "bg-dark-500 "
      )}
    >
      <div className="flex flex-col gap-3 w-full text-white">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className=" italic text-white">{date}</p>
        <p className={date ? "py-4 text-sm" : "py-4 text-sm sm:text-base"}>
          {description}
        </p>
      </div>
      {footer}
    </div>
  );
};

export default EventCard;
