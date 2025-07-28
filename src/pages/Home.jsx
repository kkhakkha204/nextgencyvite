import React from 'react';
import HeroSection from "../components/home/HeroSection.jsx";
import InfiniteLogoSlider from "../components/home/InfiniteLogoSlider.jsx";
import InfiniteProjectSlider from "../components/home/InfiniteProjectSlider.jsx";
import InfiniteServiceSlider from "../components/home/InfiniteServiceSlider.jsx";
import ServicesSection from "../components/home/ServicesSection.jsx";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <InfiniteLogoSlider/>
            <InfiniteProjectSlider/>
            <InfiniteServiceSlider/>
            <ServicesSection/>
        </div>
    );
};

export default Home;