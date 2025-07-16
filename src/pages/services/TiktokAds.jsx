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

const TiktokAds = () => {
    return (
        <div>
            <Hero/>
            <ServicesDivider/>
            <PainPointsSection/>
            <WhyChooseUs/>
            <WebsitePackages/>
            <ClientsPartnersSection/>
            <CommitmentSection/>
            <ConsultationSection/>
            <ServicesSection/>
        </div>
    );
};

export default TiktokAds;