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
import BookingCtaSection from "../../components/BookingCtaSection.jsx";

const TiktokAds = () => {
    const seoData = seoConfigs.services['tiktok-ads'];
    return (
        <>
            <SEOManager seo={seoData} />
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
                <BookingCtaSection/>
                <ServicesSection/>
            </div>
        </>
    );
};

export default TiktokAds;