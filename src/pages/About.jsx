import React from 'react';
import AboutHeroSection from "../components/aboutus/AboutHeroSection.jsx";
import MyStorySection from "../components/aboutus/MyStorySection.jsx";
import ConsultationSectionPrimary from "../components/ConsultationSectionPrimary.jsx";
import ConsultationSection from "../components/ConsultationSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import HomeClientsPartnersSection from "../components/home/HomeClientsPartnersSection.jsx";
import SEOManager from "../components/SEO/SEOManager.jsx";
import {seoConfigs} from "./seo-configs.js";

const About = () => {
    return (
        <div>
            <SEOManager
                title={seoConfigs.about.title}
                description={seoConfigs.about.description}
                keywords={seoConfigs.about.keywords}
                ogUrl="/about"
            />
            <AboutHeroSection />
            <MyStorySection/>
            <HomeClientsPartnersSection/>
            <ConsultationSection/>
            <ServicesSection/>
        </div>
    );
};

export default About;