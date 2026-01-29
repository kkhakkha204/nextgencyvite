import React from 'react';
import AboutHeroSection from "../components/aboutus/AboutHeroSection.jsx";
import MyStorySection from "../components/aboutus/MyStorySection.jsx";
import ConsultationSectionPrimary from "../components/ConsultationSectionPrimary.jsx";
import ConsultationSection from "../components/ConsultationSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import HomeClientsPartnersSection from "../components/home/HomeClientsPartnersSection.jsx";

const About = () => {
    return (
        <div>
            <AboutHeroSection />
            <MyStorySection/>
            <HomeClientsPartnersSection/>
            <ConsultationSection/>
            <ServicesSection/>
        </div>
    );
};

export default About;