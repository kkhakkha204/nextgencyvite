import React from 'react';
import ServicesDivider from "../../components/googleads/ServicesDivider.jsx";
import PainPointsSection from "../../components/googleads/PainPointsSection.jsx";
import WhyChooseUs from "../../components/googleads/WhyChooseUs.jsx";
import ClientsPartnersSection from "../../components/googleads/ClientsPartnersSection.jsx";
import CommitmentSection from "../../components/googleads/CommitmentSection.jsx";
import WebsitePackages from "../../components/googleads/WebsitePackages.jsx";
import ServicesSection from "../../components/ServicesSection.jsx";
import Hero from "../../components/googleads/Hero.jsx";
import AdvertisingFormsSection from "../../components/googleads/AdvertisingFormsSection.jsx";
import OffersSection from "../../components/googleads/OffersSection.jsx";
import ConsultationSection from "../../components/ConsultationSection.jsx";
import GoogleAdsProcess from "../../components/googleads/GoogleAdsProcess.jsx";
import SEOManager from "../../components/SEO/SEOManager.jsx";
import { seoConfigs } from "../seo-configs.js";

const GoogleAds = () => {
    return (
        <>
            <SEOManager
                title={seoConfigs.services['google-ads'].title}
                description={seoConfigs.services['google-ads'].description}
                keywords={seoConfigs.services['google-ads'].keywords}
                url="https://nextgency.vn/services/google-ads"
            />
            <div>
                <Hero/>
                <ServicesDivider/>
                <PainPointsSection/>
                <WhyChooseUs/>
                <WebsitePackages/>
                <AdvertisingFormsSection/>
                <OffersSection/>
                <GoogleAdsProcess/>
                <ClientsPartnersSection/>
                <CommitmentSection/>
                <ConsultationSection/>
                <ServicesSection/>
            </div>
        </>
    );
};

export default GoogleAds;