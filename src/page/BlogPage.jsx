import React from 'react'
import Container from '../Component/Container'
import Work_one from '../assets/Image/work_one.jpg'
import Work_two from '../assets/Image/work_two.jpg'
import Work_three from '../assets/Image/work_three.jpg'
import Work_four from '../assets/Image/work_four.jpg'
import Work_five from '../assets/Image/work_five.jpg'
import Image from '../Component/Image'
import { CiSearch } from "react-icons/ci";

import BlogPageCard from '../Component/BlogPageCard'
import RecentCard from '../Component/RecentCard'

const BlogPage = () => {
    return (
        <section className='py-10'>
            <div className="h-[200px] bg-blue text-center">
                <h3 className='text-white text-Nunito font-bold leading-6 text-5xl pt-14'>Blog</h3>
                <h4 className='text-white text-Nunito font-medium leading-6 text-lg pt-7 italic'>Our all News feed</h4>
            </div>
            <div className="py-10">
                <Container>
                    <div className="flex justify-between">

                        <div className="">
                            <BlogPageCard />
                            <BlogPageCard />
                            <BlogPageCard />
                            <BlogPageCard />
                            <BlogPageCard />
                            <BlogPageCard />
                            <BlogPageCard />
                            <BlogPageCard />
                            <BlogPageCard />
                            <BlogPageCard />
                            <BlogPageCard />
                        </div>
                        <div className="ml-32 ">

                            <div className="bg-blue h-36 w-[400px] mt-16 rounded-2xl relative">
                                <input type="search" placeholder='srarch' className='py-4 px-20 rounded-2xl ml-8 mt-12 '></input>
                                <CiSearch className='absolute top-[70px] right-12' />
                            </div>
                            {/* 2nd part */}
                            <div className="mt-40 rounded-xl w-[400px]">
                                <div className="mb-4">
                                    <h3 className='text-black text-Nunito font-bold leading-6 text-2xl pt-7 pl-3'>Recent Project</h3>
                                </div>
                                <div className='border-b border-gray-600'></div>
                                <div className="">
                                    <div className="mt-8"><RecentCard /></div>
                                    <div className="mt-8"><RecentCard /></div>
                                    <div className="mt-8"><RecentCard /></div>
                                    <div className="mt-8"><RecentCard /></div>

                                </div>
                            </div>
                        </div>

                    </div>



                </Container>
            </div>
        </section>
    )
}

export default BlogPage