import React from 'react'
import Navber from '../Component/Navber'
import Hero from '../Component/Hero'
import SlidePart from '../Component/SlidePart'
import AboutUs from '../Component/AboutUs'
import WorkPart from '../Component/WorkPart'
import HappyClint from '../Component/HappyClint'
import Footer from '../Component/Footer'
import Properties from '../Component/Properties'
import CounterUp from '../Component/CounterUp'
import PropertyPage from '../Component/PropertyPage'

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
            <PropertyPage/>
        </div>
    )
}

export default Home;
