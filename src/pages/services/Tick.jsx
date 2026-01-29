import React from 'react';
import HeroSection from "../../components/tick/HeroSection.jsx";
import WhyChooseUs from "../../components/tick/WhyChooseUs.jsx";
import ConsultationSection from "../../components/ConsultationSection.jsx";
import ServicesSection from "../../components/ServicesSection.jsx";
import WebsitePackages from "../../components/tick/WebsitePackages.jsx";
import ProfileSection from "../../components/tick/ProfileSection.jsx";
import ProcessSection from "../../components/tick/ProcessSection.jsx";
import SEOManager from "../../components/SEO/SEOManager.jsx";
import { seoConfigs } from "../seo-configs.js";

const Tick = () => {
    return (
        <>
            <SEOManager
                title={seoConfigs.services['tick-xanh-facebook'].title}
                description={seoConfigs.services['tick-xanh-facebook'].description}
                keywords={seoConfigs.services['tick-xanh-facebook'].keywords}
                url="https://nextgency.vn/services/tick-xanh-facebook"
            />
            <div>
                <HeroSection/>
                <WhyChooseUs/>
                <WebsitePackages/>
                <ProfileSection/>
                <ProcessSection/>
                <ConsultationSection/>
                <ServicesSection/>
            </div>
        </>
    );
};

export default Tick;