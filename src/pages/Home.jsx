import React from 'react';
import {ArrowRight, Sparkles} from 'lucide-react';
import HeroSection from "../components/home/HeroSection.jsx";
import WebsitePackages from "../components/aidata/WebsitePackages.jsx";
import ServicesDivider from "../components/aidata/ServicesDivider.jsx";

const Home = () => {
    return (
        <div>
 <HeroSection />
            <ServicesDivider/>
            <WebsitePackages/>
            <WebsitePackages/>
            <WebsitePackages/>
            <WebsitePackages/>
        </div>
    );
};

export default Home;