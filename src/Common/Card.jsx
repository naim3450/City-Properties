import React from "react";
import locationIcon from "../assets/Image/location.png";
import bed from "../assets/Image/bed.png";
import ft from "../assets/Image/ft.png";
import bath from "../assets/Image/bath.png";
import { IoShareSocialOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import userImg from "../assets/Image/user.png";

const Card = ({ item }) => {
  const { title, images, thumbnail, returnPolicy, price, description, stock } = item

  return (
    <div className="max-w-[370px] p-5 rounded-[10px] shadow-md">
      {/* img */}
      <div className="h-[200px] w-full rounded-[10px] overflow-hidden">
        <img src={thumbnail} className="w-full h-full" />
      </div>
      {/* content */}

      <div className="flex items-center gap-x-[10px] mt-5">
        <img src={locationIcon} alt="" />
        <span className="text-base font-Nunito text-thirdColor font-normal">
          {title}
        </span>
      </div>
      <h3 className="text-2xl font-Nunito font-bold text-primaryColor py-2">
        {returnPolicy}
      </h3>
      <h5 className="font-Nunito font-bold text-2xl text-secondaryColor pb-3">
        ${price}
      </h5>
      <p className="font-Nunito font-normal text-base text-thirdColor">
        {description.slice(1, 100) + '....'}

        <span className="font-bold text-secondaryColor max-w-[300px] cursor-pointer">
          More
        </span>
      </p>
      {/* features */}
      <div className="pt-3 pb-5 flex items-center justify-between">
        <div className="flex items-center gap-x-1">
          <img src={bed} alt="" />
          <span className="font-Nunito font-normal text-balance text-thirdColor">
            5
          </span>
        </div>
        <div className="flex items-center gap-x-1">
          <img src={ft} alt="" />
          <span className="font-Nunito font-normal text-balance text-thirdColor">
            3
          </span>
        </div>
        <div className="flex items-center gap-x-1">
          <img src={bath} alt="" />
          <span className="font-Nunito font-normal text-balance text-thirdColor">
            {stock + `.00 ft`}
          </span>
        </div>
        <button className="font-Nunito font-normal text-base text-white  bg-secondaryColor py-[2px] px-2 rounded-md">
          Details
        </button>
      </div>
      {/* user */}
      <div className="flex items-center justify-between pt-7 border-t-2">
        <div className="flex items-center gap-x-2">
          <img src={userImg} alt="" />
          <h5 className="font-Nunito font-bold text-base text-primaryColor">
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
