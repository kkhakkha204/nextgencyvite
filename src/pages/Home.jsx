import React from 'react';
import HeroSection from "../components/home/HeroSection.jsx";
import InfiniteLogoSlider from "../components/home/InfiniteLogoSlider.jsx";
import InfiniteProjectSlider from "../components/home/InfiniteProjectSlider.jsx";
import InfiniteServiceSlider from "../components/home/InfiniteServiceSlider.jsx";
import ServicesSection from "../components/home/ServicesSection.jsx";
import AboutUsSection from "../components/home/AboutUsSection.jsx";
import TestimonialsSection from "../components/home/TestimonialsSection.jsx";
import ConsultationSectionPrimary from "../components/ConsultationSectionPrimary.jsx";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <InfiniteLogoSlider/>
            <InfiniteProjectSlider/>
            <InfiniteServiceSlider/>
            <AboutUsSection/>
            <ServicesSection/>
            <TestimonialsSection/>
            <ConsultationSectionPrimary/>
        </div>
    );
};

export default Home;