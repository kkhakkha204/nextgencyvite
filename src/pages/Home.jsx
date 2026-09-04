import React from 'react';
import HeroSection from "../components/home/HeroSection.jsx";
import InfiniteLogoSlider from "../components/home/InfiniteLogoSlider.jsx";
import InfiniteProjectSlider from "../components/home/InfiniteProjectSlider.jsx";
import InfiniteServiceSlider from "../components/home/InfiniteServiceSlider.jsx";
import ServicesSection from "../components/home/ServicesSection.jsx";
import AboutUsSection from "../components/home/AboutUsSection.jsx";
import TestimonialsSection from "../components/home/TestimonialsSection.jsx";
import ConsultationSectionPrimary from "../components/ConsultationSectionPrimary.jsx";
import {seoConfigs} from "./seo-configs.js";
import SEOManager from "../components/SEO/SEOManager.jsx";
import {generateBreadcrumbSchema, organizationSchema, websiteSchema} from "../components/SEO/schemas.js";
import HomeClientsPartnersSection from "../components/home/HomeClientsPartnersSection.jsx";
import HomeProjectsSection from "../components/home/HomeProjectsSection.jsx";

const Home = () => {
    const breadcrumbs = [
        { name: 'Trang chủ', url: 'https://nextgency.vn' }
    ];
    return (
        <>
            <SEOManager
                seo={seoConfigs.home}
                structuredData={[organizationSchema, websiteSchema, generateBreadcrumbSchema(breadcrumbs)]}
            />
            <div className="home-page">
                <HeroSection />
                <InfiniteLogoSlider/>
                <AboutUsSection/>
                <ServicesSection/>
                <HomeProjectsSection/>
                <TestimonialsSection/>
                <HomeClientsPartnersSection/>
            </div>
        </>

    );
};

export default Home;
