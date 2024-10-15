
import React from 'react'
import Image from './Image'
import { FaEye, FaComments } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
 



const BlogPageCard = ({ src, className, h3text, ptext, h4text }) => {
    return (
        <div className=' w-[350px] bg-white shadow-2xl rounded-lg'>
            <div className="">
                <Image src={src} className={`w-[350px] h-[250px] rounded-xl`} />
            </div>
            <div className="flex">
                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal ml-9 mb-8`}>ptext</p>
                <h4 className={`w-[460px] text-base font-Nunito leading-6 font-normal ml-9 mb-8`}>h4text</h4>
            </div>
            <div className="">
            <h3 className={`text-Nunito font-bold leading-6 text-xl pl-9`}>h3text</h3>
            </div>
            <div className="flex gap-x-14">
                <div className="flex">
                <FaEye />
                <h4 className={`w-[460px] text-base font-Nunito leading-6`}>h4text</h4>
                </div>
                <div className="flex">
                <MdOutlineFavoriteBorder />
                <h4 className={`w-[460px] text-base font-Nunito leading-6 font-normal`}>h4text</h4>
                </div>
                <div className="flex">
                <FaComments />
                <h4 className={`w-[460px] text-base font-Nunito leading-6 font-normal`}>h4text</h4>
                </div>
            </div>
            
        </div>
    )
}

export default BlogPageCard
