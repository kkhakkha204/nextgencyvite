import React from 'react';
import {ArrowRight, Sparkles} from 'lucide-react';
import HeroSection from "../components/home/HeroSection.jsx";
import WebsitePackages from "../components/aidata/WebsitePackages.jsx";

const Home = () => {
    return (
        <div>
 <HeroSection />
            <WebsitePackages/>
            <WebsitePackages/>
            <WebsitePackages/>
            <WebsitePackages/>
        </div>
    );
};

export default Home;