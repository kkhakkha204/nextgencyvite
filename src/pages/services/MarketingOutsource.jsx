import React from 'react';
import Hero from "../../components/marketing/Hero.jsx";
import ServicesDivider from "../../components/marketing/ServicesDivider.jsx";
import PainPointsSection from "../../components/marketing/PainPointsSection.jsx";
import WhyChooseUs from "../../components/marketing/WhyChooseUs.jsx";
import WebsitePackages from "../../components/marketing/WebsitePackages.jsx";
import CommitmentSection from "../../components/marketing/CommitmentSection.jsx";
import ConsultationSection from "../../components/ConsultationSection.jsx";
import ServicesSection from "../../components/ServicesSection.jsx";
import SEOManager from "../../components/SEO/SEOManager.jsx";
import { seoConfigs } from "../seo-configs.js";

const MarketingOutsource = () => {
    return (
        <>
            <SEOManager
                title={seoConfigs.services['marketing-outsource'].title}
                description={seoConfigs.services['marketing-outsource'].description}
                keywords={seoConfigs.services['marketing-outsource'].keywords}
                url="https://nextgency.vn/services/marketing-outsource"
            />
            <div>
                <Hero/>
                <ServicesDivider/>
                <PainPointsSection/>
                <WhyChooseUs/>
                <WebsitePackages/>
                <CommitmentSection/>
                <ConsultationSection/>
                <ServicesSection/>
            </div>
        </>
    );
};

export default MarketingOutsource;