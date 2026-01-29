import React from 'react';
import Hero from "../../components/tiktokads/Hero.jsx";
import ServicesDivider from "../../components/tiktokads/ServicesDivider.jsx";
import PainPointsSection from "../../components/tiktokads/PainPointsSection.jsx";
import WhyChooseUs from "../../components/tiktokads/WhyChooseUs.jsx";
import WebsitePackages from "../../components/tiktokads/WebsitePackages.jsx";
import ClientsPartnersSection from "../../components/tiktokads/ClientsPartnersSection.jsx";
import CommitmentSection from "../../components/tiktokads/CommitmentSection.jsx";
import ConsultationSection from "../../components/ConsultationSection.jsx";
import ServicesSection from "../../components/ServicesSection.jsx";
import TikTokAdsSection from "../../components/tiktokads/TikTokAdsSection.jsx";
import OffersSection from "../../components/tiktokads/OffersSection.jsx";
import SEOManager from "../../components/SEO/SEOManager.jsx";
import { seoConfigs } from "../seo-configs.js";

const TiktokAds = () => {
    return (
        <>
            <SEOManager
                title={seoConfigs.services['tiktok-ads'].title}
                description={seoConfigs.services['tiktok-ads'].description}
                keywords={seoConfigs.services['tiktok-ads'].keywords}
                url="https://nextgency.vn/services/tiktok-ads"
            />
            <div>
                <Hero/>
                <ServicesDivider/>
                <PainPointsSection/>
                <WhyChooseUs/>
                <WebsitePackages/>
                <TikTokAdsSection/>
                <OffersSection/>
                <ClientsPartnersSection/>
                <CommitmentSection/>
                <ConsultationSection/>
                <ServicesSection/>
            </div>
        </>
    );
};

export default TiktokAds;