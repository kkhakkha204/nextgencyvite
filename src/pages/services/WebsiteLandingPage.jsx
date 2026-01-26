import Hero from "../../components/websitelanding/Hero.jsx";
import ProjectCarousel from "../../components/websitelanding/ProjectCarousel.jsx";
import ServicesDivider from "../../components/websitelanding/ServicesDivider.jsx";
import PainPointsSection from "../../components/websitelanding/PainPointsSection.jsx";
import WhyChooseUs from "../../components/websitelanding/WhyChooseUs.jsx";
import VideoSection from "../../components/websitelanding/VideoSection.jsx";
import LandingPagePackages from "../../components/websitelanding/LandingPagePackages.jsx";
import WebsitePackages from "../../components/websitelanding/WebsitePackages.jsx";
import OffersSection from "../../components/websitelanding/OffersSection.jsx";
import ClientsPartnersSection from "../../components/websitelanding/ClientsPartnersSection.jsx";
import PortfolioShowcase from "../../components/websitelanding/PortfolioShowcase.jsx";
import CommitmentSection from "../../components/websitelanding/CommitmentSection.jsx";
import ConsultationSection from "../../components/ConsultationSection.jsx";
import ServicesSection from "../../components/ServicesSection.jsx";
import GoogleAdsProcess from "../../components/websitelanding/GoogleAdsProcess.jsx";

const WebsiteLandingPage = () => {

    return (
        <div className="relative">

                <Hero/>
                <ProjectCarousel/>
                <ServicesDivider/>
                <PainPointsSection/>
                <WhyChooseUs/>
                <VideoSection/>
                <LandingPagePackages/>
                <WebsitePackages/>
                <OffersSection/>
                <GoogleAdsProcess/>
                <ClientsPartnersSection/>
                <PortfolioShowcase/>
                <CommitmentSection/>
                <ConsultationSection/>
                <ServicesSection/>
        </div>
    );
};

export default WebsiteLandingPage;