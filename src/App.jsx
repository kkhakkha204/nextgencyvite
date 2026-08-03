// App.jsx - Updated with conditional Header/Footer
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from "./components/Footer.jsx";
import WebsiteLandingPage from "./pages/services/WebsiteLandingPage.jsx";
import AiData from "./pages/services/AiData.jsx";
import ToolContentAI from "./pages/services/ToolContentAI.jsx";
import GoogleAds from "./pages/services/GoogleAds.jsx";
import PageTransition from './components/PageTransition';
import { usePageTransition } from './hooks/usePageTransition';
import FacebookAds from "./pages/services/FacebookAds.jsx";
import TiktokAds from "./pages/services/TiktokAds.jsx";
import FacebookCrm from "./pages/services/FacebookCrm.jsx";
import MarketingOutsource from "./pages/services/MarketingOutsource.jsx";
import About from "./pages/About.jsx";
import Tick from "./pages/services/Tick.jsx";
import { useSEO } from './hooks/useSEO';
import NewsListPage from "./pages/news/NewsListPage.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Portfolio from "./pages/projects/Portfolio.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import TiktokVerification from "./pages/TiktokVerification.jsx";
import WorkflowAutomation from "./pages/projects/WorkflowAutomation.jsx";
import ProjectDetail from "./pages/projects/ProjectDetail.jsx";
import NewsDetailPage from "./pages/news/NewsDetailPage.jsx";
import MiniAppBeautyVerse from "./pages/projects/MiniAppBeautyVerse.jsx";
import RouteSEO from "./components/SEO/RouteSEO.jsx";
import DatLich from "./pages/DatLich.jsx";
import NotFound from "./pages/NotFound.jsx";

// Landing page tự mang header/footer riêng - ẩn header/footer chung của site.
const STANDALONE_PATHS = ['/tiktok-verification/', '/dat-lich'];

// Router Content Component
const RouterContent = () => {
    const location = useLocation();
    const {
        isTransitioning,
        handleTransitionComplete
    } = usePageTransition();

    // Initialize SEO hooks
    useSEO();

    // Trang standalone (TiktokVerification, landing đặt lịch) tự lo header/footer
    const isStandalonePage = STANDALONE_PATHS.includes(location.pathname);

    return (
        <div className="App min-h-screen flex flex-col">
            {/* Meta mặc định theo pathname - trang nào tự gắn SEOManager sẽ ghi đè */}
            <RouteSEO />

            {/* Chá»‰ hiá»ƒn thá»‹ Header náº¿u khÃ´ng pháº£i trang standalone */}
            {!isStandalonePage && <Header />}

            <main className={!isStandalonePage ? "page-content flex-1 pt-[70px] lg:pt-[85px]" : "flex-1"}>
                <Routes>
                    {/* Trang chá»§ */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/news" element={<NewsListPage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/dat-lich" element={<DatLich />} />

                    {/* CÃ¡c trang dá»‹ch vá»¥ */}
                    <Route path="/services/website-landing-page" element={<WebsiteLandingPage />} />
                    <Route path="/services/ai-data" element={<AiData />} />
                    <Route path="/ai" element={<ToolContentAI />} />
                    {/* URL cũ của trang Tool Content AI - giữ lại để không gãy link đã chia sẻ */}
                    <Route path="/services/tool-content-ai" element={<Navigate to="/ai" replace />} />
                    <Route path="/services/google-ads" element={<GoogleAds />} />
                    <Route path="/services/facebook-ads" element={<FacebookAds />} />
                    <Route path="/services/tiktok-ads" element={<TiktokAds />} />
                    <Route path="/services/facebook-crm" element={<FacebookCrm />} />
                    <Route path="/services/marketing-outsource" element={<MarketingOutsource />} />
                    <Route path="/services/tick-xanh-facebook" element={<Tick />} />
                    <Route path="/chinh-sach-bao-mat" element={<PrivacyPolicyPage />} />
                    <Route path="/tiktok-verification/" element={<TiktokVerification />} />

                    {/* CÃ¡c trang dá»± Ã¡n */}
                    <Route path="/projects/all" element={<Projects />} />
                    <Route path="/projects/portfolio" element={<Portfolio />} />
                    <Route path="/projects/workflow" element={<WorkflowAutomation />} />
                    <Route path="/miniapp" element={<MiniAppBeautyVerse />} />
                    <Route path="/projects/miniapp-beautysummit-2026" element={<MiniAppBeautyVerse />} />
                    <Route path="/projects/:slug" element={<ProjectDetail />} />
                    {/*trang chi tiáº¿t vá» tin tá»©c cÃ´ng nghá»‡*/}
                    <Route path="/news/:slug" element={<NewsDetailPage />} />

                    {/* Route không khớp -> trang 404 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            {/* Chá»‰ hiá»ƒn thá»‹ Footer náº¿u khÃ´ng pháº£i trang standalone */}
            {!isStandalonePage && <Footer />}

            {/* Page Transition */}
            <PageTransition
                isTransitioning={isTransitioning}
                onTransitionComplete={handleTransitionComplete}
                logoSrc="/assets/images/header/navbarfavicon.png"
            />
        </div>
    );
};

function App() {
    return (
        <Router>
            <RouterContent />
        </Router>
    );
}

export default App;