import Hero from "../../components/websitelanding/Hero.jsx";
import ProjectCarousel from "../../components/websitelanding/ProjectCarousel.jsx";
import ServicesDivider from "../../components/websitelanding/ServicesDivider.jsx";
import PainPointsSection from "../../components/websitelanding/PainPointsSection.jsx";
import WhyChooseUs from "../../components/websitelanding/WhyChooseUs.jsx";
import VideoSection from "../../components/websitelanding/VideoSection.jsx";

const WebsiteLandingPage = () => {

    return (
        <div>
            <Hero/>
            <ProjectCarousel/>
            <ServicesDivider/>
            <PainPointsSection/>
            <WhyChooseUs/>
            <VideoSection/>
        </div>
    );
};

export default WebsiteLandingPage;