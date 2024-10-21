import React, { useState, useRef } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const PropertyCard = ({
  title,
  description,
  image,
  price,
  additionalText,
  location,
  to,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-[370px] h-[440px] bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative">
      <div>
        <img
          src={image}
          alt={`Image of ${title}`}
          className="w-full h-64 object-cover cursor-pointer transition-transform duration-300 hover:scale-105 rounded-lg"
        />
      </div>

      <h3 className="text-xl p-2 font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
        {title}
      </h3>

      <p className="font-Nunito font-semibold text-md text-gray-600 pr-28 pl-2 relative">
        {description}
        <div
          ref={contentRef}
          style={
            isOpen
              ? { maxHeight: `${contentRef.current.scrollHeight}px`, opacity: 1 }
              : { maxHeight: "0px", opacity: 0 }
          }
          className="transition-all duration-1000 ease-in-out overflow-hidden absolute"
        >
          <p className="font-NunitoSans font-normal text-base text-gray-500 rounded-sm bg-white pt-2 pr-8">
            {additionalText}
          </p>
        </div>
        <span
          onClick={toggleAccordion}
          className="font-bold pl-2  text-blue cursor-pointer"
        >
          {isOpen ? "Less" : "More"}
        </span>
      </p>

      <div className="pl-2 ">
        <div className="flex gap-x-2 pb-3 pt-4">
          <IoLocationOutline className="text-blue" />
          <Link to={to} className="font-Nunito text-sm text-gray-400">{location}</Link>
        </div>
        <span className="text-lg font-semibold  text-[#798cf8] pt-10">
          ${price.toLocaleString()}
        </span>
      </div>
    </div>

  );
};

export default PropertyCard;
