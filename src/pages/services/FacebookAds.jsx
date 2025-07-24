import React from 'react';
import PainPointsSection from "../../components/facebookads/PainPointsSection.jsx";
import Hero from "../../components/facebookads/Hero.jsx";
import WhyChooseUs from "../../components/facebookads/WhyChooseUs.jsx";
import LandingPagePackages from "../../components/facebookads/LandingPagePackages.jsx";
import ClientsPartnersSection from "../../components/facebookads/ClientsPartnersSection.jsx";
import CommitmentSection from "../../components/facebookads/CommitmentSection.jsx";
import ConsultationSection from "../../components/ConsultationSection.jsx";
import ServicesSection from "../../components/ServicesSection.jsx";
import ServicesDivider from "../../components/facebookads/ServicesDivider.jsx";
import OffersSection from "../../components/facebookads/OffersSection.jsx";
import GoogleAdsProcess from "../../components/facebookads/GoogleAdsProcess.jsx";

const FacebookAds = () => {
    return (
        <div>
            <Hero/>
            <ServicesDivider/>
            <PainPointsSection/>
            <WhyChooseUs/>
            <LandingPagePackages/>
            <OffersSection/>
            <GoogleAdsProcess/>
            <ClientsPartnersSection/>
            <CommitmentSection/>
            <ConsultationSection/>
            <ServicesSection/>
        </div>
    );
};

export default FacebookAds;