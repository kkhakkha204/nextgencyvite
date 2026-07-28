import React from 'react';
import ServicesDivider from "../../components/tool-content-ai/ServicesDivider.jsx";
import WhyChooseUs from "../../components/tool-content-ai/WhyChooseUs.jsx";
import WebsitePackages from "../../components/tool-content-ai/WebsitePackages.jsx";
import ClientsPartnersSection from "../../components/tool-content-ai/ClientsPartnersSection.jsx";
import ProfileSection from "../../components/tool-content-ai/ProfileSection.jsx";
import ConsultationSection from "../../components/ConsultationSection.jsx";
import ServicesSection from "../../components/ServicesSection.jsx";
import Hero from "../../components/tool-content-ai/Hero.jsx";
import PainPointsSection from "../../components/tool-content-ai/PainPointsSection.jsx";
import OffersSection from "../../components/tool-content-ai/OffersSection.jsx";
import ForWhom from "../../components/tool-content-ai/ForWhom.jsx";
import BenefitSection from "../../components/tool-content-ai/BenefitSection.jsx";
import DevelopmentPartners from "../../components/tool-content-ai/DevelopmentPartners.jsx";
import SEOManager from "../../components/SEO/SEOManager.jsx";
import { seoConfigs } from "../seo-configs.js";

const ToolContentAI = () => {
    const seoData = seoConfigs.services['tool-content-ai'];
    return (
        <>
            <SEOManager seo={seoData} />
            <div>
                <Hero/>
                <ServicesDivider/>
                <PainPointsSection/>
                <ForWhom/>
                <BenefitSection/>
                <WebsitePackages/>
                <DevelopmentPartners/>
                <ProfileSection/>
                <ConsultationSection/>
                <ServicesSection/>
            </div>
        </>
    );
};

export default ToolContentAI;