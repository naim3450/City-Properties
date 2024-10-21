import React from 'react'
import Image from './Image'
import { FaCalendarAlt } from "react-icons/fa";
import Work_four from '../assets/Image/work_four.jpg'






const RecentCard = () => {
  return (
     <div className="flex gap-5">
       <div className="">
       <Image src={Work_four} className={`h-[100px] w-[250px] rounded-xl ml-3`}/>
       </div>
       <div className="">
       <h3 className='text-black text-Nunito font-medium leading-6 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. neque?</h3>
        <div className="flex gap-1 mt-2">
            <FaCalendarAlt className='text-black mt-1'/>
            <p className='text-black text-Nunito font-normal leading-6 text-base'>Jun 07,2024</p>
        </div>
       </div>
     </div>
  )
}

export default RecentCard