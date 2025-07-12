import React from 'react';
import ServicesDivider from "../../components/googleads/ServicesDivider.jsx";
import PainPointsSection from "../../components/googleads/PainPointsSection.jsx";
import WhyChooseUs from "../../components/googleads/WhyChooseUs.jsx";
import ClientsPartnersSection from "../../components/googleads/ClientsPartnersSection.jsx";
import CommitmentSection from "../../components/googleads/CommitmentSection.jsx";
import WebsitePackages from "../../components/googleads/WebsitePackages.jsx";
import ServicesSection from "../../components/ServicesSection.jsx";

const GoogleAds = () => {
    return (
        <div>
            <ServicesDivider/>
            <PainPointsSection/>
            <WhyChooseUs/>
            <ClientsPartnersSection/>
            <WebsitePackages/>
            <CommitmentSection/>
            <ServicesSection/>
        </div>
    );
};

export default GoogleAds;