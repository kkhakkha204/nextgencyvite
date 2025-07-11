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

const WebsiteLandingPage = () => {

    return (
        <div>
            <Hero/>
            <ProjectCarousel/>
            <ServicesDivider/>
            <PainPointsSection/>
            <WhyChooseUs/>
            <VideoSection/>
            <LandingPagePackages/>
            <WebsitePackages/>
            <OffersSection/>
            <ClientsPartnersSection/>
            <PortfolioShowcase/>
        </div>
    );
};

export default WebsiteLandingPage;