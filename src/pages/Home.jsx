import React from 'react';
import HeroSection from "../components/home/HeroSection.jsx";
import InfiniteLogoSlider from "../components/home/InfiniteLogoSlider.jsx";
import InfiniteProjectSlider from "../components/home/InfiniteProjectSlider.jsx";
import InfiniteServiceSlider from "../components/home/InfiniteServiceSlider.jsx";
import ServicesSection from "../components/home/ServicesSection.jsx";
import AboutUsSection from "../components/home/AboutUsSection.jsx";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <InfiniteLogoSlider/>
            <InfiniteProjectSlider/>
            <InfiniteServiceSlider/>
            <AboutUsSection/>
            <ServicesSection/>
        </div>
    );
};

export default Home;