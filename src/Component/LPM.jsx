import React from 'react'
import LMP_Card from './LMP_Card';
import { CiSearch } from "react-icons/ci";



const LPM = ({ item }) => {

    const { country, type, price } = item

    return (
        <div className="w-[825px] h-[130px] shadow-md rounded-xl flex items-center">
            <LMP_Card lmpdata={country} loadName={country.at(-1).name} title={`Location`} />
            <LMP_Card lmpdata={type} loadName={type.at(-1)} title={`Property type`} />
            <LMP_Card lmpdata={price} loadName={price.at(-1)} title={`Max price`} />


            <div className="w-[82px] h-[82px] ml-[90px] bg-blue flex items-center justify-center rounded-md">
                <CiSearch className='text-white text-[24px] font-bold font-Nunito' />
            </div>

        </div>
    )
}

export default LPM