import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const usePageTransition = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [currentPath, setCurrentPath] = useState(location.pathname);

    // Custom navigation function với transition
    const navigateWithTransition = useCallback((path) => {
        if (path === currentPath || isTransitioning) return;

        setShowOverlay(true);
        setIsTransitioning(true);

        // Navigate after transition starts
        setTimeout(() => {
            navigate(path);
        }, 150);
    }, [currentPath, navigate, isTransitioning]);

    // Handle transition completion
    const handleTransitionComplete = useCallback(() => {
        setIsTransitioning(false);
        setShowOverlay(false);

        // Scroll to top after transition
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }, 50);
    }, []);

    // Listen for route changes
    useEffect(() => {
        if (location.pathname !== currentPath && !isTransitioning) {
            setCurrentPath(location.pathname);
        }
    }, [location.pathname, currentPath, isTransitioning]);

    // Intercept link clicks để add transition
    useEffect(() => {
        const handleLinkClick = (e) => {
            const link = e.target.closest('a[href]');
            if (link && link.getAttribute('href')) {
                const href = link.getAttribute('href');

                // Chỉ intercept internal links
                if (href.startsWith('/') && href !== currentPath) {
                    e.preventDefault();
                    navigateWithTransition(href);
                }
            }
        };

        // Add event listener với capture phase
        document.addEventListener('click', handleLinkClick, true);

        return () => {
            document.removeEventListener('click', handleLinkClick, true);
        };
    }, [currentPath, navigateWithTransition]);

    // Auto scroll to top on route change (fallback)
    useEffect(() => {
        if (!isTransitioning) {
            const timer = setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [location.pathname, isTransitioning]);

    return {
        isTransitioning,
        showOverlay,
        currentPath,
        navigateWithTransition,
        handleTransitionComplete
    };
};