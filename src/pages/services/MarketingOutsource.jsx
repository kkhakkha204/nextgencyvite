import React from 'react';
import Hero from "../../components/marketing/Hero.jsx";
import ServicesDivider from "../../components/marketing/ServicesDivider.jsx";
import PainPointsSection from "../../components/marketing/PainPointsSection.jsx";
import WhyChooseUs from "../../components/marketing/WhyChooseUs.jsx";
import WebsitePackages from "../../components/marketing/WebsitePackages.jsx";
import CommitmentSection from "../../components/marketing/CommitmentSection.jsx";
import ConsultationSection from "../../components/ConsultationSection.jsx";
import ServicesSection from "../../components/ServicesSection.jsx";

const MarketingOutsource = () => {
    return (
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
    );
};

export default MarketingOutsource;