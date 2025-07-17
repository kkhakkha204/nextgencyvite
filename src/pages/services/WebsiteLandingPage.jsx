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

const WebsiteLandingPage = () => {

    return (
        <div className="relative">
            {/*/!* Left Mesh Gradient - Circular Blobs *!/*/}
            {/*<div className="fixed left-0 top-0 w-full h-full z-50 pointer-events-none">*/}
            {/*    /!* Top left blob *!/*/}
            {/*    <div className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300 rounded-full blur-3xl"></div>*/}

            {/*    /!* Middle left blob *!/*/}
            {/*    <div className="absolute top-1/2 -left-24 w-80 h-80 bg-gradient-to-br from-purple-300 via-pink-300 to-rose-300 rounded-full blur-2xl"></div>*/}

            {/*    /!* Bottom left blob *!/*/}
            {/*    <div className="absolute bottom-32 -left-40 w-72 h-72 bg-gradient-to-br from-pink-300 via-rose-300 to-orange-300 rounded-full blur-3xl"></div>*/}

            {/*    /!* Additional small blob *!/*/}
            {/*    <div className="absolute top-2/3 left-8 w-48 h-48 bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-2xl"></div>*/}
            {/*</div>*/}

            {/*/!* Right Mesh Gradient - Circular Blobs *!/*/}
            {/*<div className="fixed right-0 top-0 w-full h-full z-50 pointer-events-none">*/}
            {/*    /!* Top right blob *!/*/}
            {/*    <div className="absolute top-32 -right-32 w-96 h-96 bg-gradient-to-bl from-purple-300 via-pink-300 to-rose-300 rounded-full blur-3xl"></div>*/}

            {/*    /!* Middle right blob *!/*/}
            {/*    <div className="absolute top-1/2 -right-24 w-80 h-80 bg-gradient-to-bl from-pink-300 via-rose-300 to-orange-300 rounded-full blur-2xl"></div>*/}

            {/*    /!* Bottom right blob *!/*/}
            {/*    <div className="absolute bottom-20 -right-40 w-72 h-72 bg-gradient-to-bl from-rose-300 via-orange-300 to-yellow-300 rounded-full blur-3xl"></div>*/}

            {/*    /!* Additional small blob *!/*/}
            {/*    <div className="absolute top-1/4 right-8 w-48 h-48 bg-gradient-to-bl from-purple-300 via-pink-300 to-rose-300 rounded-full blur-2xl"></div>*/}
            {/*</div>*/}

            {/* Main Content */}
            <div className="relative z-10">
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
                <CommitmentSection/>
                <ConsultationSection/>
                <ServicesSection/>
            </div>
        </div>
    );
};

export default WebsiteLandingPage;