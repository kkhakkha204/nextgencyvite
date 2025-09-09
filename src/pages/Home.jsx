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
import {generateBreadcrumbSchema} from "../components/SEO/schemas.js";

const Home = () => {
    const breadcrumbs = [
        { name: 'Trang chủ', url: 'https://nextgency.vn' }
    ];
    return (
        <>
            <SEOManager
            title={seoConfigs.home.title}
            description={seoConfigs.home.description}
            keywords={seoConfigs.home.keywords}
            url="https://nextgency.vn"
            image="https://nextgency.vn/assets/images/home-og-image.jpg"
            structuredData={generateBreadcrumbSchema(breadcrumbs)}
            />
            <div className="home-page">
                <HeroSection />
                <InfiniteLogoSlider/>
                <InfiniteProjectSlider/>
                <InfiniteServiceSlider/>
                <AboutUsSection/>
                <ServicesSection/>
                <TestimonialsSection/>

            </div>
        </>

    );
};

export default Home;