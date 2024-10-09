import React, { useEffect, useRef, useState } from 'react'
import Title from './Title'
import Paragraph from './Paragraph'
import Container from './Container'
import Ellipse1 from '../assets/Image/Ellipse1.png'
import Ellipse2 from '../assets/Image/Ellipse2.png'
import Ellipse3 from '../assets/Image/Ellipse3.png'
import Ellipse4 from '../assets/Image/Ellipse4.png'
import Ellipse5 from '../assets/Image/Ellipse5.png'
import LPM from './LPM'
import Property from '../../Property.json'
import Price from '../../Price.json'
import Country from '../../Country.json'
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";



const Hero = () => {

    const btnList = ["Buy", "Sell", "Rent"]

    let [activ, setactiv] = useState(0)

    let obj = [
        {
            id: 1,
            country: Country,
            type: Property,
            price: Price
        }
    ]

    return (
        <div className='h-[100vh] overflow-hidden'>
            <Container>

                <div className="flex">
                    <div className="">
                        <Title text={`Best Real #Estate Advice# #for Your Homey#`} className={`text-[50px] leading-[65px] mt-[50px]`} />

                        <Paragraph className={`w-[485px] mt-[20px]`} text={`We give you thousand recommendations of Apartment, House also Hotel that can make your life become easier than before. Let’s search what you want below`} />
                    </div>

                    <div className="">
                        <img src={Ellipse1} className='absolute left-[1200px] bottom-[80px] w-[300px] h-[300px]' alt="" />
                        <img src={Ellipse2} className='absolute left-[1400px] top-[390px] w-[150px] h-[150px]' alt="" />
                        <img src={Ellipse3} className='absolute left-[1000px] top-[110px] w-[400px] h-[400px]' alt="" />
                        <img src={Ellipse4} className='absolute left-[1550px] bottom-[210px] w-[220px] h-[220px]' alt="" />
                        <img src={Ellipse5} className='absolute left-[1500px] top-[150px] w-[300px] h-[300px]' alt="" />
                    </div>
                </div>

                <div className="w-[381px] h-[70px] mt-[90px] flex justify-between">
                    {
                        btnList.map((item, idx) => {
                            return (
                                <button onClick={() => setactiv(idx)} key={idx}
                                    className={`${activ === idx ? `bg-blue text-white` : `bg-[#EDEFFE] text-blue`} w-[125px] h-[70px] bg-[#EDEFFE] text-blue rounded-t-lg font-Nunito font-semibold text-5`}>
                                    {item}
                                </button>
                            )
                        })
                    }
                </div>

                <div>
                    {
                        obj.map((item, idx) => {
                            return (
                                <LPM key={idx} item={item} />
                            )
                        })
                    }
                </div>
            </Container>
        </div >
    )
}

export default Hero














{/* <select>
{
    api.map((el, idx) => {
        return (
            <option key={idx}>
                {el.region}
            </option>
        )
    })
}
</select >  */}