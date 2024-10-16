
import React from 'react'
import Image from './Image'
import Work_one from '../assets/Image/work_one.jpg'
import { FaEye, FaComments } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";


const BlogPageCard = ({ src, className, h3text, ptext, h4text }) => {
    return (
        <div className="w-[670px] mt-14">
            <div className=' w-[750px]'>
                <div className="ml-5">
                    <Image src={Work_one} className={`w-[740px] h-[300px] rounded-xl ml-1 mt-1`} />
                </div>
                <div className="flex gap-x-20 py-5 ml-10">
                    <div className="flex gap-1">
                        <FaEye className='text-blue mt-1' />


                        <h4 className={`text-base font-Nunito leading-6 `}>35</h4>
                    </div>
                    <div className="flex gap-1">
                        <FaComments className={`text-base font-Nunito leading-6 text-blue`} />
                        <h4 className={`text-base font-Nunito leading-6 font-normal`}>07</h4>
                    </div>
                    <div className="flex gap-1">
                        <MdOutlineFavoriteBorder className={`text-base font-Nunito leading-6 text-blue`} />
                        <h4 className={`text-base font-Nunito leading-6 font-normal`}>13</h4>

                    </div>
                </div>
                <div className="">
                    <h3 className={`w-[700px]text-Nunito font-bold leading-8 text-3xl pt-3 pl-5`}>Homeownership starts  satisfaction Experience Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda.</h3>
                    <p className='text-Nunito font-normal leading-5 text-sm pt-3 pl-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aliquam incidunt! Iste, voluptatibus, ratione quam eius laboriosam impedit commodi nam earum architecto dolores voluptates accusamus provident distinctio culpa, cupiditate esse.</p>
                </div>
                <div className="border-b mt-5 border-black mb-5"></div>
                <button href="#" className='px-7 py-4 border hover:bg-[#EDEFFE] hover:text-black bg-blue rounded-t-lg text-white  duration-500 text-Nunito font-medium leading-6 text-lg ml-3 '>Read More</button>
                
            </div>
        </div>
    )
}

export default BlogPageCard
