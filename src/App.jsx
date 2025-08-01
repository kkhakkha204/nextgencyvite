// App.jsx - Updated with custom SEO solution for React 19
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from "./components/Footer.jsx";
import WebsiteLandingPage from "./pages/services/WebsiteLandingPage.jsx";
import AiData from "./pages/services/AiData.jsx";
import GoogleAds from "./pages/services/GoogleAds.jsx";
import PageTransition from './components/PageTransition';
import { usePageTransition } from './hooks/usePageTransition';
import FacebookAds from "./pages/services/FacebookAds.jsx";
import TiktokAds from "./pages/services/TiktokAds.jsx";
import FacebookCrm from "./pages/services/FacebookCrm.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import MarketingOutsource from "./pages/services/MarketingOutsource.jsx";
import About from "./pages/About.jsx";
import Tick from "./pages/services/Tick.jsx";
import { useSEO } from './hooks/useSEO';
import SEOManager from './components/SEO/SEOManager';
import { localBusinessSchema } from './components/SEO/schemas';

// Create a client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 5 * 60 * 1000, // 5 minutes
        },
    },
});

// Router Content Component
const RouterContent = () => {
    const {
        isTransitioning,
        handleTransitionComplete
    } = usePageTransition();

    // Initialize SEO hooks
    useSEO();
    return (
        <div className="App">
            {/* Global SEO for all pages - this sets default values */}
            <SEOManager
                structuredData={localBusinessSchema}
                additionalMetaTags={[
                    { name: 'theme-color', content: '#000000' },
                    { name: 'apple-mobile-web-app-capable', content: 'yes' },
                    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
                    { name: 'format-detection', content: 'telephone=no' }
                ]}
            />

            <Header />
            <main className="page-content pt-[70px] lg:pt-[85px]">
                <Routes>
                    {/* Trang chủ */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />

                    {/* Các trang dịch vụ */}
                    <Route path="/services/website-landing-page" element={<WebsiteLandingPage />} />
                    <Route path="/services/ai-data" element={<AiData />} />
                    <Route path="/services/google-ads" element={<GoogleAds />} />
                    <Route path="/services/facebook-ads" element={<FacebookAds />} />
                    <Route path="/services/tiktok-ads" element={<TiktokAds />} />
                    <Route path="/services/facebook-crm" element={<FacebookCrm />} />
                    <Route path="/services/marketing-outsource" element={<MarketingOutsource />} />
                    <Route path="/services/tick-xanh-facebook" element={<Tick />} />
                </Routes>
            </main>
            <Footer />
            <CustomCursor/>
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
        <QueryClientProvider client={queryClient}>
            <Router>
                <RouterContent />
            </Router>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;