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
import BookingCtaSection from "../../components/BookingCtaSection.jsx";

const Tick = () => {
    const seoData = seoConfigs.services['tick-xanh-facebook'];
    return (
        <>
            <SEOManager seo={seoData} />
            <div>
                <HeroSection/>
                <WhyChooseUs/>
                <WebsitePackages/>
                <ProfileSection/>
                <ProcessSection/>
                <BookingCtaSection/>
                <ServicesSection/>
            </div>
        </>
    );
};

export default Tick;