import React from 'react';
import AboutHeroSection from "../components/aboutus/AboutHeroSection.jsx";
import MyStorySection from "../components/aboutus/MyStorySection.jsx";
import ConsultationSectionPrimary from "../components/ConsultationSectionPrimary.jsx";

const About = () => {
    return (
        <div>
            <AboutHeroSection />
            <MyStorySection/>
            <ConsultationSectionPrimary/>
        </div>
    );
};

export default About;