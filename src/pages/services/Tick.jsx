import React from 'react';
import HeroSection from "../../components/tick/HeroSection.jsx";
import WhyChooseUs from "../../components/tick/WhyChooseUs.jsx";
import ConsultationSection from "../../components/ConsultationSection.jsx";
import ServicesSection from "../../components/ServicesSection.jsx";
import WebsitePackages from "../../components/tick/WebsitePackages.jsx";
import ProfileSection from "../../components/tick/ProfileSection.jsx";
import ProcessSection from "../../components/tick/ProcessSection.jsx";

const Tick = () => {
    return (
        <div>
            <HeroSection/>
            <WhyChooseUs/>
            <WebsitePackages/>
            <ProfileSection/>
            <ProcessSection/>
            <ConsultationSection/>
            <ServicesSection/>
        </div>
    );
};

export default Tick;