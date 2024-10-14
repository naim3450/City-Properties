import React, { useState } from 'react'
import LMP_Card from './LMP_Card';
import { CiSearch } from "react-icons/ci";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger'




const LPM = ({ item }) => {

    const { country, type, price } = item

    const [changeElm, setchangeElm] = useState(false)

    const clickIcon = () => {
        setchangeElm(!changeElm)

        if (!changeElm) {
            gsap.to('.item', {
                x: "-100%",
                opacity: 0,
            })

            gsap.to('.searchBar', {
                x: "0%",
                opacity: 1,
                scale: 1,
            })

        }

        if (changeElm) {
            gsap.to('.searchBar', {
                x: "100%",
                opacity: 0,
                scale: 0
            })
            gsap.to('.item', {
                x: "0%",
                opacity: 1,
                scale: 1,
            })
        }
    }

    return (
        <div className="w-[825px] h-[130px] shadow-md rounded-xl flex items-center relative ">

            <input type="text" placeholder='Search........' className='outline-none w-[630px] px-[1.5vw] py-[1vh] text-[20px] font-Nunito font-medium italic rounded-xl insetShadow searchBar translate-x-[-100%] opacity-0 absolute' />

            <div className="flex item absolute">
                <LMP_Card lmpdata={country} loadName={country.at(-1).name} title={`Location`} />
                <LMP_Card lmpdata={type} loadName={type.at(-1)} title={`Property type`} />
                <LMP_Card lmpdata={price} loadName={price.at(-1)} title={`Max price`} />
            </div>

            <div onClick={clickIcon}
                className="w-[82px] h-[82px] translate-x-[720px] bg-blue flex items-center justify-center rounded-md cursor-pointer">
                <CiSearch className='text-white text-[24px] font-bold font-Nunito' />
            </div>
        </div>
    )
}

export default LPM