import React from 'react'
import Hero from '../Component/Hero'
import SlidePart from '../Component/SlidePart'
import AboutUs from '../Component/AboutUs'
import WorkPart from '../Component/WorkPart'
import HappyClint from '../Component/HappyClint'
import Properties from '../Component/Properties'
import CounterUp from '../Component/CounterUp'

const Home = () => {
    return (
        <div>

            <Hero />
            <SlidePart />
            <AboutUs />
            <Properties />
            <WorkPart />
            <HappyClint />
            <CounterUp />
        </div>
    )
}

export default Home;
