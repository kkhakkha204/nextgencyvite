import React from 'react';
import SEOManager from '../components/SEO/SEOManager.jsx';
import BookingHero from '../components/dat-lich/BookingHero.jsx';
import ProblemSection from '../components/dat-lich/ProblemSection.jsx';
import GrowthServicesSection from '../components/dat-lich/GrowthServicesSection.jsx';
import CallAgendaSection from '../components/dat-lich/CallAgendaSection.jsx';
import DepositPolicySection from '../components/dat-lich/DepositPolicySection.jsx';
import FinalCtaSection from '../components/dat-lich/FinalCtaSection.jsx';
import BookingFooter from '../components/dat-lich/BookingFooter.jsx';
import {seoConfigs} from './seo-configs.js';

const DatLich = () => (
    <>
        <SEOManager seo={seoConfigs.datLich} />
        <div className="bg-[#f6f8fc] text-[#0b0e18]">
            <BookingHero />
            <ProblemSection />
            <GrowthServicesSection />
            <CallAgendaSection />
            <DepositPolicySection />
            <FinalCtaSection />
            <BookingFooter />
        </div>
    </>
);

export default DatLich;
