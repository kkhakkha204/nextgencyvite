import React, { useEffect, useRef } from 'react';
import {ArrowRight, ArrowUpRight, Sparkles, Zap} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Link} from "react-router-dom";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const sectionRef = useRef(null);
    const bgLogoRef = useRef(null);
    const titleRef = useRef(null);
    const glassCardRef = useRef(null);
    const ctaRef = useRef(null);
    const floatingCardRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const bgLogo = bgLogoRef.current;
        const title = titleRef.current;
        const glassCard = glassCardRef.current;
        const cta = ctaRef.current;
        const floatingCard = floatingCardRef.current;

        // Detect if mobile device and iOS
        const isMobile = window.innerWidth <= 768;
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

        // Create context for better performance
        let ctx = gsap.context(() => {
            // Configure ScrollTrigger for better mobile performance
            ScrollTrigger.config({
                limitCallbacks: true,
                syncInterval: 40, // Sync less frequently on mobile
                ignoreMobileResize: true // Prevent resize issues on iOS
            });

            // Normalize scroll for iOS
            if (isIOS) {
                ScrollTrigger.normalizeScroll(true);
            }

            // Background logo parallax - optimized for 60Hz displays
            gsap.to(bgLogo, {
                yPercent: isMobile ? 25 : 65, // Even less movement on mobile
                ease: "none",
                force3D: true, // Force GPU acceleration
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom top",
                    scrub: isMobile ? 4 : 1.5, // Higher scrub for 60Hz smoothness
                    invalidateOnRefresh: true,
                    fastScrollEnd: true,
                    preventOverlaps: true,
                    anticipatePin: 1 // Improves performance
                }
            });

            // Main title parallax - optimized for performance
            gsap.to(title, {
                yPercent: isMobile ? -40 : -100, // Further reduced for 60Hz
                ease: "none",
                force3D: true,
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom top",
                    scrub: isMobile ? 3.5 : 1,
                    invalidateOnRefresh: true,
                    fastScrollEnd: true,
                    preventOverlaps: true,
                    anticipatePin: 1
                }
            });

            // Glass card parallax effect - simplified for mobile
            if (!isMobile) {
                gsap.to(glassCard, {
                    yPercent: 25,
                    scale: 0.95,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1.2,
                        invalidateOnRefresh: true
                    }
                });
            } else {
                // Simpler effect for mobile
                gsap.to(glassCard, {
                    yPercent: 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: "bottom top",
                        scrub: 3,
                        invalidateOnRefresh: true,
                        fastScrollEnd: true
                    }
                });
            }

            // CTA buttons parallax - minimal on mobile
            gsap.to(cta, {
                yPercent: isMobile ? 10 : 20,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom top",
                    scrub: isMobile ? 2 : 1,
                    invalidateOnRefresh: true,
                    fastScrollEnd: true
                }
            });

            // Floating animation - disabled on mobile for performance
            if (!isMobile && floatingCard) {
                gsap.to(floatingCard, {
                    y: "+=20",
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut"
                });
            }

            // Optimize ScrollTrigger refresh
            let refreshTimeout;
            const handleResize = () => {
                clearTimeout(refreshTimeout);
                refreshTimeout = setTimeout(() => {
                    ScrollTrigger.refresh();
                }, 150);
            };

            window.addEventListener('resize', handleResize);

            // Cleanup resize listener
            return () => {
                window.removeEventListener('resize', handleResize);
                clearTimeout(refreshTimeout);
            };

        }, section);

        // Cleanup
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen w-full bg-white overflow-hidden py-[60px] lg:py-0">
            {/* Large centered logo background */}
            <div ref={bgLogoRef} className="absolute inset-0 flex top-20 lg:items-center justify-center will-change-transform transform-gpu">
                <div className="w-80 h-80 md:w-[500px] md:h-[500px] lg:w-[750px] lg:h-[750px]">
                    <img
                        src="/assets/images/herologo.png"
                        alt="Nextgency Innovation"
                        className="w-full h-full object-contain opacity-70"
                        loading="eager"
                    />
                </div>
            </div>

            {/* Main container */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col lg:justify-center items-center">

                {/* Main title */}
                <h1 ref={titleRef} className="text-[55px] md:text-[150px] xl:text-[240px] tracking-tighter font-bold will-change-transform transform-gpu backface-hidden">
                    NEXTGENCY
                </h1>

                {/* Glassmorphism card */}
                <div ref={glassCardRef} className="w-full max-w-5xl mb-4 will-change-transform transform-gpu backface-hidden">
                    <div className="backdrop-blur-md bg-white/30 border-2 border-white rounded-2xl px-4 py-6 md:px-6">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Column A - Description */}
                            <div className="space-y-10">
                                <p className="text-black text-[15px] lg:text-[18px] max-w-sm text-justify">
                                    Nextgency là đối tác công nghệ hàng đầu, chuyên cung cấp giải pháp số hóa toàn diện.
                                    Chúng tôi biến ý tưởng thành hiện thực với công nghệ tiên tiến nhất.
                                </p>
                                <div className="">
                                    {/* Column A - CTAs */}
                                    <div ref={ctaRef} className="flex flex-row gap-2 will-change-transform transform-gpu justify-center sm:justify-start">
                                        <Link
                                            to="/contact"
                                            className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-black text-[15px] sm:text-[16px] text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group"
                                        >
                                            <span className="">
                                                Tư vấn ngay
                                            </span>
                                            <div
                                                className="w-9 h-9 sm:w-[2.5rem] sm:h-[2.5rem] bg-white rounded-full flex items-center justify-center neu-shadow-xs transition-all duration-300">
                                                <ArrowUpRight
                                                    className="w-5 h-5 text-black transition-all duration-300 group-hover:rotate-12 group-hover:scale-105"
                                                    strokeWidth={2.5}/>
                                            </div>
                                        </Link>
                                        <Link
                                            to="/contact"
                                            className="relative flex items-center space-x-3 px-7 py-1.5 bg-white text-[15px] sm:text-[16px] text-black neu-shadow-xs rounded-full transition-all duration-300 hover:shadow-gray-300 hover:scale-105 group"
                                        >
                                            <span className="">
                                                Tư vấn ngay
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Column B - Image */}
                            <div ref={floatingCardRef} className="relative h-64 md:h-80 overflow-hidden">
                                <img
                                    src="/assets/images/herologo.png"
                                    alt="Nextgency Innovation"
                                    className="w-full h-full object-contain"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;