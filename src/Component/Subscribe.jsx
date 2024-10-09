import React from "react";

const Subscribe = () => {
  return (
    <div className="pb-[100px]">
      <div className="container">
        <div className="bg-secondaryColor py-[100px] rounded-2xl flex-col flex items-center justify-center text-center">
          <h3 className="text-[40px] font-bold text-white font-NunitoSans max-w-[815px] leading-[60px]">
            Sign Up Now to see Newest Update about Real Estate from Entire the
            World
          </h3>
          <p className="font-NunitoSans font-normal text-base text-white opacity-[70%] max-w-[681px] pt-5">
            Just insert your email into the field below. You already can to know
            update about Real Estate from entire the world. What are you waiting
            for?
          </p>
          <div className="relative w-[380px] mt-7">
            <input
              type="text"
              placeholder="Your Emaill"
              className="pl-5 py-4 bg-white placeholder:text-base placeholder:text-thirdColor placeholder:font-NunitoSans placeholder:font-normal rounded-lg w-full"
            />
            <button className="absolute -translate-y-[50%] top-[50%] right-1 bg-secondaryColor text-base text-white font-bold font-NunitoSans rounded-lg py-3 px-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
