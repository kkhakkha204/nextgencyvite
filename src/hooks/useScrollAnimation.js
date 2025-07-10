// hooks/useScrollAnimation.js
import { useEffect, useRef } from 'react';

const useScrollAnimation = (threshold = 0.1) => {
    const elementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    } else {
                        // Uncomment next line if you want animation to reverse when scrolling up
                        // entry.target.classList.remove('is-visible');
                    }
                });
            },
            {
                threshold: threshold,
                rootMargin: '-50px 0px',
            }
        );

        // Observe all elements with scroll-trigger class
        const elements = document.querySelectorAll('.scroll-trigger, .animate-on-scroll');
        elements.forEach((el) => {
            observer.observe(el);
        });

        elementsRef.current = elements;

        return () => {
            elements.forEach((el) => {
                observer.unobserve(el);
            });
        };
    }, [threshold]);

    return elementsRef;
};

export default useScrollAnimation;