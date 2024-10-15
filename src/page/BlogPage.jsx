import React from 'react'
import Container from '../Component/Container'
import Work_one from '../assets/Image/work_one.jpg'
import Work_two from '../assets/Image/work_two.jpg'
import Work_three from '../assets/Image/work_three.jpg'
import Work_four from '../assets/Image/work_four.jpg'
import Work_five from '../assets/Image/work_five.jpg'
import Image from '../Component/Image'
import { FaEye, FaComments } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const BlogPage = () => {
    return (
        <section className='py-20 mt-[150px]'>
            <div className="h-[200px] bg-blue text-center">
                <h3 className='text-white text-Nunito font-bold leading-6 text-5xl pt-14'>Blog</h3>
                <h4 className='text-white text-Nunito font-medium leading-6 text-lg pt-7 italic'>Our all News feed</h4>
            </div>
            <Container>

                <div className="flex gap-x-10 pt-14 ml-8">
                    <button href="#" className='px-7 py-4 border bg-[#EDEFFE] hover:bg-blue rounded-t-lg hover:text-white  duration-500 text-Nunito font-medium leading-6 text-lg'>Recent</button>
                    <button href="#" className='px-7 py-4 border bg-[#EDEFFE] hover:bg-blue rounded-t-lg hover:text-white  duration-500 text-Nunito font-medium leading-6 text-lg'>Popular</button>
                    <button href="#" className='px-7 py-4 border bg-[#EDEFFE] hover:bg-blue rounded-t-lg hover:text-white  duration-500 text-Nunito font-medium leading-6 text-lg'>Trending</button>
                </div>

                <div className="flex flex-wrap justify-center">
                    <div className="w-[370px] mt-14">
                        <div className=' w-[350px] bg-white shadow-xl rounded-lg'>
                            <div className="">
                                <Image src={Work_one} className={`w-[340px] h-[250px] rounded-sm ml-1 mt-1`} />
                            </div>
                            <div className="flex pt-5 mb-3">
                                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal ml-9`}>july 25, 2024</p>
                                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal`}>rooms & Suites</p>

                            </div>
                            <div className="">
                                <h3 className={`text-Nunito font-bold leading-6 text-xl pl-9`}>Finding best desaign in our platform</h3>
                            </div>
                            <div className="border-b mt-5"></div>
                            <div className="flex gap-x-20 justify-center py-5 ">
                                <div className="flex gap-1">
                                    <FaEye className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6`}>35</h4>
                                </div>
                                <div className="flex gap-1">
                                    <MdOutlineFavoriteBorder className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6 font-normal`}>07</h4>
                                </div>
                                <div className="flex gap-1">
                                    <FaComments className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6 font-normal`}>13</h4>
                                </div>
                            </div>
                            <a href="#" className='text-blue font-Nunito text-xl flex justify-center pb-5-5'>see details</a>

                        </div>

                    </div>
                    {/* 2nd */}
                    <div className="w-[370px] mt-14">
                        <div className=' w-[350px] bg-white shadow-xl rounded-lg'>
                            <div className="">
                                <Image src={Work_two} className={`w-[340px] h-[250px] rounded-sm ml-1 mt-1`} />
                            </div>
                            <div className="flex pt-5 mb-3">
                                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal ml-9`}>july 25, 2024</p>
                                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal`}>rooms & Suites</p>

                            </div>
                            <div className="flex relative">
                                <h3 className={`text-Nunito font-bold leading-6 text-xl pl-9`}>Finding best desaign in our platform</h3>
                                <a href="#" className='text-blue font-Nunito text-xl flex justify-center pb-5-5 absolute top-7 right-12'>see details</a>
                            </div>
                            <div className="border-b mt-5"></div>
                            <div className="flex gap-x-20 justify-center py-5 ">
                                <div className="flex gap-1">
                                    <FaEye className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6`}>35</h4>
                                </div>
                                <div className="flex gap-1">
                                    <MdOutlineFavoriteBorder className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6 font-normal`}>07</h4>
                                </div>
                                <div className="flex gap-1">
                                    <FaComments className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6 font-normal`}>13</h4>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* 3rd */}
                    <div className="w-[370px] mt-14">
                        <div className=' w-[350px] bg-white shadow-xl rounded-lg'>
                            <div className="">
                                <Image src={Work_one} className={`w-[340px] h-[250px] rounded-sm ml-1 mt-1`} />
                            </div>
                            <div className="flex pt-5 mb-3">
                                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal ml-9`}>july 25, 2024</p>
                                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal`}>rooms & Suites</p>

                            </div>
                            <div className="">
                                <h3 className={`text-Nunito font-bold leading-6 text-xl pl-9`}>Finding best desaign in our platform</h3>
                            </div>
                            <div className="border-b mt-5"></div>
                            <div className="flex gap-x-20 justify-center py-5 ">
                                <div className="flex gap-1">
                                    <FaEye className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6`}>35</h4>
                                </div>
                                <div className="flex gap-1">
                                    <MdOutlineFavoriteBorder className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6 font-normal`}>07</h4>
                                </div>
                                <div className="flex gap-1">
                                    <FaComments className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6 font-normal`}>13</h4>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* 4th */}
                    <div className="w-[370px] mt-14">
                        <div className=' w-[350px] bg-white shadow-xl rounded-lg'>
                            <div className="">
                                <Image src={Work_two} className={`w-[340px] h-[250px] rounded-sm ml-1 mt-1`} />
                            </div>
                            <div className="flex pt-5 mb-3">
                                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal ml-9`}>july 25, 2024</p>
                                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal`}>rooms & Suites</p>

                            </div>
                            <div className="">
                                <h3 className={`text-Nunito font-bold leading-6 text-xl pl-9`}>Finding best desaign in our platform</h3>
                            </div>
                            <div className="border-b mt-5"></div>
                            <div className="flex gap-x-20 justify-center py-5 ">
                                <div className="flex gap-1">
                                    <FaEye className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6`}>35</h4>
                                </div>
                                <div className="flex gap-1">
                                    <MdOutlineFavoriteBorder className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6 font-normal`}>07</h4>
                                </div>
                                <div className="flex gap-1">
                                    <FaComments className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6 font-normal`}>13</h4>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* 5th */}
                    <div className="w-[370px] mt-14">
                        <div className=' w-[350px] bg-white shadow-xl rounded-lg'>
                            <div className="">
                                <Image src={Work_three} className={`w-[340px] h-[250px] rounded-sm ml-1 mt-1`} />
                            </div>
                            <div className="flex pt-5 mb-3">
                                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal ml-9`}>july 25, 2024</p>
                                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal`}>rooms & Suites</p>

                            </div>
                            <div className="">
                                <h3 className={`text-Nunito font-bold leading-6 text-xl pl-9`}>Finding best desaign in our platform</h3>
                            </div>
                            <div className="border-b mt-5"></div>
                            <div className="flex gap-x-20 justify-center py-5 ">
                                <div className="flex gap-1">
                                    <FaEye className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6`}>35</h4>
                                </div>
                                <div className="flex gap-1">
                                    <MdOutlineFavoriteBorder className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6 font-normal`}>07</h4>
                                </div>
                                <div className="flex gap-1">
                                    <FaComments className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6 font-normal`}>13</h4>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* 6th */}
                    <div className="w-[370px] mt-14">
                        <div className=' w-[350px] bg-white shadow-xl rounded-lg'>
                            <div className="">
                                <Image src={Work_two} className={`w-[340px] h-[250px] rounded-sm ml-1 mt-1`} />
                            </div>
                            <div className="flex pt-5 mb-3">
                                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal ml-9`}>july 25, 2024</p>
                                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal`}>rooms & Suites</p>

                            </div>
                            <div className="">
                                <h3 className={`text-Nunito font-bold leading-6 text-xl pl-9`}>Finding best desaign in our platform</h3>
                            </div>
                            <div className="border-b mt-5"></div>
                            <div className="flex gap-x-20 justify-center py-5 ">
                                <div className="flex gap-1">
                                    <FaEye className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6`}>35</h4>
                                </div>
                                <div className="flex gap-1">
                                    <MdOutlineFavoriteBorder className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6 font-normal`}>07</h4>
                                </div>
                                <div className="flex gap-1">
                                    <FaComments className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6 font-normal`}>13</h4>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* 7th */}
                    <div className="w-[370px] mt-14">
                        <div className=' w-[350px] bg-white shadow-xl rounded-lg'>
                            <div className="">
                                <Image src={Work_three} className={`w-[340px] h-[250px] rounded-sm ml-1 mt-1`} />
                            </div>
                            <div className="flex pt-5 mb-3">
                                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal ml-9`}>july 25, 2024</p>
                                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal`}>rooms & Suites</p>

                            </div>
                            <div className="">
                                <h3 className={`text-Nunito font-bold leading-6 text-xl pl-9`}>Finding best desaign in our platform</h3>
                            </div>
                            <div className="border-b mt-5"></div>
                            <div className="flex gap-x-20 justify-center py-5 ">
                                <div className="flex gap-1">
                                    <FaEye className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6`}>35</h4>
                                </div>
                                <div className="flex gap-1">
                                    <MdOutlineFavoriteBorder className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6 font-normal`}>07</h4>
                                </div>
                                <div className="flex gap-1">
                                    <FaComments className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6 font-normal`}>13</h4>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* 8th */}
                    <div className="w-[370px] mt-14">
                        <div className=' w-[350px] bg-white shadow-xl rounded-lg'>
                            <div className="">
                                <Image src={Work_two} className={`w-[340px] h-[250px] rounded-sm ml-1 mt-1`} />
                            </div>
                            <div className="flex pt-5 mb-3">
                                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal ml-9`}>july 25, 2024</p>
                                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal`}>rooms & Suites</p>

                            </div>
                            <div className="">
                                <h3 className={`text-Nunito font-bold leading-6 text-xl pl-9`}>Finding best desaign in our platform</h3>
                            </div>
                            <div className="border-b mt-5"></div>
                            <div className="flex gap-x-20 justify-center py-5 ">
                                <div className="flex gap-1">
                                    <FaEye className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6`}>35</h4>
                                </div>
                                <div className="flex gap-1">
                                    <MdOutlineFavoriteBorder className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6 font-normal`}>07</h4>
                                </div>
                                <div className="flex gap-1">
                                    <FaComments className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6 font-normal`}>13</h4>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* nine */}
                    <div className="w-[370px] mt-14">
                        <div className=' w-[350px] bg-white shadow-xl rounded-lg'>
                            <div className="">
                                <Image src={Work_one} className={`w-[340px] h-[250px] rounded-sm ml-1 mt-1`} />
                            </div>
                            <div className="flex pt-5 mb-3">
                                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal ml-9`}>july 25, 2024</p>
                                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal`}>rooms & Suites</p>

                            </div>
                            <div className="">
                                <h3 className={`text-Nunito font-bold leading-6 text-xl pl-9`}>Finding best desaign in our platform</h3>
                            </div>
                            <div className="border-b mt-5"></div>
                            <div className="flex gap-x-20 justify-center py-5 ">
                                <div className="flex gap-1">
                                    <FaEye className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6`}>35</h4>
                                </div>
                                <div className="flex gap-1">
                                    <MdOutlineFavoriteBorder className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6 font-normal`}>07</h4>
                                </div>
                                <div className="flex gap-1">
                                    <FaComments className='text-blue mt-1' />
                                    <h4 className={`text-base font-Nunito leading-6 font-normal`}>13</h4>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* 10th */}

                </div>


            </Container>


        </section>
    )
}

export default BlogPage