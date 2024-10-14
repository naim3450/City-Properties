import React, { useEffect, useRef, useState } from "react";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Container from "./Container";
import Ellipse1 from "../assets/Image/Ellipse1.png";
import Ellipse2 from "../assets/Image/Ellipse2.png";
import Ellipse3 from "../assets/Image/Ellipse3.png";
import Ellipse4 from "../assets/Image/Ellipse4.png";
import Ellipse5 from "../assets/Image/Ellipse5.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  const btnList = ["Buy", "Sell", "Rent"];

  const [first, setfirst] = useState(false);

  let [activ, setactiv] = useState(0);

  let listClick = () => {
    setfirst(!first);
    if (first == false) {
      document.querySelector(".listMenu").style.display = "block";
    } else {
      document.querySelector(".listMenu").style.display = "none";
    }
  };

  const [api, setapi] = useState([]);
  useEffect(() => {
    async function all() {
      let data = await axios.get("https://restcountries.com/v3.1/all");
      setapi(data.data);
    }

    all();
  }, []);

  return (
    <div className="relative h-[86.5vh] overflow-hidden">
      <Container className={`flex`}>
        <div className="">
          <Title
            text={`Best Real #Estate Advice# #for Your Homey#`}
            className={`text-[50px] leading-[65px] mt-[50px]`}
          />

          <Paragraph
            className={`w-[485px] mt-[20px]`}
            text={`We give you thousand recommendations of Apartment, House also Hotel that can make your life become easier than before. Let’s search what you want below`}
          />
        </div>

        <div className="">
          <img
            src={Ellipse1}
            className="absolute left-[1300px] bottom-[80px] w-[300px] h-[300px]"
            alt=""
          />
          <img
            src={Ellipse2}
            className="absolute left-[1520px] top-[230px] w-[150px] h-[150px]"
            alt=""
          />
          <img
            src={Ellipse3}
            className="absolute left-[1100px] top-0 w-[400px] h-[400px]"
            alt=""
          />
          <img
            src={Ellipse4}
            className="absolute left-[1620px] bottom-[220px] w-[220px] h-[220px]"
            alt=""
          />
          <img
            src={Ellipse5}
            className="absolute left-[1700px] top-[50px] w-[300px] h-[300px]"
            alt=""
          />
        </div>
      </Container>

      <div className="w-[825px] h-[200px] mt-[150px] absolute left-[375px] shadow-md">
        <div className="">
          {btnList.map((item, idx) => {
            return (
              <button
                onClick={() => setactiv(idx)}
                key={idx}
                className={`${
                  activ === idx
                    ? `bg-blue text-white`
                    : `bg-[#EDEFFE] text-blue`
                } w-[125px] h-[70px] bg-[#EDEFFE] text-blue rounded-t-lg font-Nunito font-semibold text-5`}
              >
                {item}
              </button>
            );
          })}

          <div className="mt-[25px] flex">
            <div className="w-[160px] flex items-center justify-between ml-[40px]">
              <div className="">
                <button
                  onClick={listClick}
                  className="text-title font-bold text-[20px] outline-none cursor-pointer w-[110px] flex justify-between items-center mb-[0.5vh]"
                >
                  Location {!first ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
                </button>

                <h4 className="text-[#6A6A6A] font-Nunito text-base outline-none">
                  New York
                </h4>

                {/* started hidden part */}
                <ul className="listMenu w-[150px] h-screen hidden text-black bg-[#a7a7a7] text-md font-bold text-[18px] font-Nunito  fixed top-0 ml-[110px] z-50">
                  {api.map((el, idx) => {
                    // console.log(el.region);
                    return (
                      <li
                        key={idx}
                        className="border-b-[1px] border-white py-[5px] pl-[10px] hover:pl-[15px]"
                      >
                        {el.region}
                      </li>
                    );
                  })}
                </ul>

                {/* end hidden part */}
              </div>

              <span className="h-[73px] w-[2px] bg-blue roc"></span>
            </div>

            <div className="w-[82px] ml-[90px] h-[82px] bg-blue flex items-center justify-center rounded-md">
              <CiSearch className="text-white text-[24px] font-bold font-Nunito" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
