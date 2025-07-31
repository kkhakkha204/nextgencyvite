// src/hooks/useSEO.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useSEO = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);

        // Update HTML lang attribute
        document.documentElement.lang = 'vi';

        // Preload critical resources
        const preloadResources = () => {
            const resources = [
                { href: '/assets/fonts/inter-var.woff2', as: 'font', type: 'font/woff2' },
                { href: '/assets/css/critical.css', as: 'style' }
            ];

            resources.forEach(resource => {
                const existingLink = document.querySelector(`link[href="${resource.href}"]`);
                if (!existingLink) {
                    const link = document.createElement('link');
                    link.rel = 'preload';
                    link.as = resource.as;
                    link.href = resource.href;
                    if (resource.type) link.type = resource.type;
                    if (resource.as === 'font') link.crossOrigin = 'anonymous';
                    document.head.appendChild(link);
                }
            });
        };

        preloadResources();
    }, [location]);

    // Performance monitoring
    useEffect(() => {
        // Log Core Web Vitals
        const logWebVitals = async () => {
            if ('web-vital' in window) return;

            try {
                const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');

                getCLS(console.log);
                getFID(console.log);
                getFCP(console.log);
                getLCP(console.log);
                getTTFB(console.log);
                // eslint-disable-next-line no-unused-vars
            } catch (error) {
                console.log('Web Vitals not available');
            }
        };

        logWebVitals();
    }, []);
};