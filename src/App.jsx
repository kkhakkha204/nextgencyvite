import React from 'react';
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

// Content Overlay Component
const ContentOverlay = ({ isVisible }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9998] bg-white/80 backdrop-blur-sm transition-opacity duration-200" />
    );
};

// Router Content Component
const RouterContent = () => {
    const {
        isTransitioning,
        showOverlay,
        handleTransitionComplete
    } = usePageTransition();

    return (
        <div className="App">
            <Header />
            <main className="page-content pt-[70px] lg:pt-[85px]">
                <Routes>
                    {/* Trang chủ */}
                    <Route path="/" element={<Home />} />

                    {/* Các trang dịch vụ */}
                    <Route path="/services/website-landing-page" element={<WebsiteLandingPage />} />
                    <Route path="/services/ai-data" element={<AiData />} />
                    <Route path="/services/google-ads" element={<GoogleAds />} />
                </Routes>
            </main>
            <Footer />

            {/* Overlay để che nội dung trong quá trình transition */}
            <ContentOverlay isVisible={showOverlay} />

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