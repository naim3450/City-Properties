import React, { useState } from "react";
import img from "../assets/Image/1.png";
import locationIcon from "../assets/Image/location.png";
import bed from "../assets/Image/bed.png";
import ft from "../assets/Image/ft.png";
import bath from "../assets/Image/bath.png";
import { IoShareSocialOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import userImg from "../assets/Image/user.png";

const Card = ({ image }) => {
  const [show, setshow] = useState(false);

  const HandleMore = () => {
    setshow(!show);
  };
  return (
    <div className="max-w-[370px] p-5 rounded-[10px] shadow-md">
      {/* img */}
      <div className="h-[200px] w-full rounded-[10px] overflow-hidden">
        <img src={image ? image : img} alt={image} className="w-full h-full" />
      </div>
      {/* content */}

      <div className="flex items-center gap-x-[10px] mt-5">
        <img src={locationIcon} alt="" />
        <span className="text-base font-NunitoSans text-thirdColor font-normal">
          Ranch Triangle , Chicago
        </span>
      </div>
      <h3 className="text-2xl font-NunitoSans font-bold text-primaryColor py-2">
        Beautiful home for sale in chicago
      </h3>
      <h5 className="font-NunitoSans font-bold text-2xl text-secondaryColor pb-3">
        $1,500,000
      </h5>
      <p className="font-NunitoSans font-normal text-base text-thirdColor">
        Beautiful, updated, ground level co-oprative apartment in the desirable
        Bay Terrace neighborhood{show ? "" : "..."}
        {show
          ? " Beautiful, updated, ground level co-oprative apartment in the desirable Bay Terrace neighborhood"
          : ""}
        <span
          onClick={HandleMore}
          className="font-bold pl-2 text-blue text-secondaryColor max-w-[300px] cursor-pointer"
        >
          {show ? "Less" : "More"}
        </span>
      </p>
      {/* features */}
      <div className="pt-3 pb-5 flex items-center justify-between">
        <div className="flex items-center gap-x-1">
          <img src={bed} alt="" />
          <span className="font-NunitoSans font-normal text-balance text-thirdColor">
            5
          </span>
        </div>
        <div className="flex items-center gap-x-1">
          <img src={ft} alt="" />
          <span className="font-NunitoSans font-normal text-balance text-thirdColor">
            3
          </span>
        </div>
        <div className="flex items-center gap-x-1">
          <img src={bath} alt="" />
          <span className="font-NunitoSans font-normal text-balance text-thirdColor">
            250.00 ft
          </span>
        </div>
        <button className="font-NunitoSans font-normal text-base text-white  bg-blue py-[2px] px-2 rounded-md">
          Details
        </button>
      </div>
      {/* user */}
      <div className="flex items-center justify-between pt-7 border-t-2">
        <div className="flex items-center gap-x-2">
          <img src={userImg} alt="" />
          <h5 className="font-NunitoSans font-bold text-base text-primaryColor">
            Maria Barlow
          </h5>
        </div>
        {/* share & wishlist */}
        <div className="flex items-center gap-x-5 text-2xl text-thirdColor">
          <span>
            <IoShareSocialOutline />
          </span>

          <span>
            <CiHeart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
