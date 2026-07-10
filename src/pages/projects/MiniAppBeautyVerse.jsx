import React from 'react';
import SEOManager from '../../components/SEO/SEOManager.jsx';
import BeautyVerseHero from '../../components/beautyverse/BeautyVerseHero.jsx';
import WhyNextgencySection from '../../components/beautyverse/WhyNextgencySection.jsx';
import ProblemSection from '../../components/beautyverse/ProblemSection.jsx';
import ExperienceJourneySection from '../../components/beautyverse/ExperienceJourneySection.jsx';
import ScopeSection from '../../components/beautyverse/ScopeSection.jsx';
import PlatformSection from '../../components/beautyverse/PlatformSection.jsx';
import ResultSection from '../../components/beautyverse/ResultSection.jsx';
import FinalCtaSection from '../../components/beautyverse/FinalCtaSection.jsx';

const MiniAppBeautyVerse = () => {
    return (
        <>
            <SEOManager
                title="Mini App Beauty Summit 2026 - BEAUTYVERSE | Nextgency"
                description="Case study Zalo Mini App BEAUTYVERSE do Nextgency thiet ke va van hanh cho Beauty Summit Vietnam 2026."
                keywords="Zalo Mini App, Beauty Summit 2026, BEAUTYVERSE, Nextgency, gamification, check-in QR, BPoint"
                ogUrl="/projects/miniapp-beautysummit-2026"
            />
            <article className="overflow-hidden bg-[#f7f7f4] text-[#111111]">
                <BeautyVerseHero />
                <WhyNextgencySection />
                <ProblemSection />
                <ExperienceJourneySection />
                <ScopeSection />
                <PlatformSection />
                <ResultSection />
                <FinalCtaSection />
            </article>
        </>
    );
};

export default MiniAppBeautyVerse;
