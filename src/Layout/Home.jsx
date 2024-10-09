import React from "react";
import Navber from "../Component/Navber";
import Hero from "../Component/Hero";
import SlidePart from "../Component/SlidePart";
import AboutUs from "../Component/AboutUs";
import WorkPart from "../Component/WorkPart";
import HappyClint from "../Component/HappyClint";
import Footer from "../Component/Footer";
import Properties from "../Component/Properties";
import Subscribe from "../Component/Subscribe";

const Home = () => {
  return (
    <div>
      <Navber />
      <Hero />
      <SlidePart />
      <AboutUs />
      <WorkPart />
      <Properties />
      <Subscribe />
      <HappyClint />
      <Footer />
    </div>
  );
};

export default Home;
