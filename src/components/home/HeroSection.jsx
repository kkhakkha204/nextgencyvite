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

    useEffect(() => {
        const section = sectionRef.current;
        const bgLogo = bgLogoRef.current;
        const title = titleRef.current;
        const glassCard = glassCardRef.current;

        // Check if device is mobile (screen width <= 768px)
        const isMobile = window.innerWidth <= 768;

        // Create context for better performance
        let ctx = gsap.context(() => {
            // Background logo parallax - moves slower (always active)
            gsap.to(bgLogo, {
                yPercent: 75,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.5,
                    invalidateOnRefresh: true
                }
            });

            // Main title parallax - only on desktop
            if (!isMobile) {
                gsap.to(title, {
                    yPercent: -80,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1,
                        invalidateOnRefresh: true
                    }
                });
            }

            // Glass card parallax effect - only on desktop
            if (!isMobile) {
                gsap.to(glassCard, {
                    yPercent: 30,
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
            }

            // Refresh ScrollTrigger on window resize for responsive behavior
            ScrollTrigger.refresh();

        }, section);

        // Handle window resize to update parallax effects
        const handleResize = () => {
            const newIsMobile = window.innerWidth <= 768;
            if (newIsMobile !== isMobile) {
                ctx.revert();
                ScrollTrigger.refresh();
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            ctx.revert();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-[80vh] md:max-h-[750px] lg:max-h-[1200px] 2xl:max-h-[900px] w-full bg-white overflow-hidden pt-[60px] lg:pt-0">
            {/* Large centered logo background */}
            <div ref={bgLogoRef} className="absolute inset-0 flex top-20 lg:items-center justify-center will-change-transform">
                <div className="w-80 h-80 md:w-[600px] md:h-[600px] xl:w-[750px] xl:h-[750px]">
                    <img
                        src="/assets/images/herologo.png"
                        alt="Nextgency Innovation"
                        className="w-full h-full object-contain opacity-70"
                    />
                </div>
            </div>

            {/* Main container */}
            <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center md:justify-start items-center">

                {/* Main title */}
                <h1 ref={titleRef} className="text-[55px] md:text-[115px] lg:text-[150px] xl:text-[200px] 2xl:text-[210px] tracking-tighter font-bold will-change-transform">
                    NEXTGENCY
                </h1>

                {/* Glassmorphism card */}
                <div ref={glassCardRef} className="w-full max-w-[1380px] mb-4 will-change-transform">
                    <div className="backdrop-blur-md bg-white/30 border-2 border-white rounded-2xl px-4 py-6 md:px-6">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Column A - Description */}
                            <div className="space-y-10">
                                <div className="inline-flex items-center justify-center">
                        <span className=" text-[#c08dfe] rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                            Digital Services Provided
                        </span>
                                </div>
                                <p className="text-black text-[15px] lg:text-[18px] max-w-sm text-justify">
                                    Nextgency là đối tác công nghệ hàng đầu, chuyên cung cấp giải pháp số hóa toàn diện.
                                    Chúng tôi biến ý tưởng thành hiện thực với công nghệ tiên tiến nhất.
                                </p>
                                <div className="">
                                    {/* Column A - CTAs */}
                                    <div className="flex flex-row gap-2 will-change-transform justify-center sm:justify-start">
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
                                            className="relative flex items-center space-x-3 px-6 py-1.5 bg-white text-[15px] sm:text-[16px] text-black neu-shadow-xs rounded-full transition-all duration-300 hover:shadow-gray-300 hover:scale-105 group"

                                        >
        <span className="">
            Tư vấn ngay
        </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Column B - Image */}
                            <div className="relative h-64 md:h-80 overflow-hidden p-2 bg-gray-100 rounded-2xl">
                                <img
                                    src="/assets/images/test.webp"
                                    alt="Nextgency Innovation"
                                    className="w-full h-full object-cover rounded-xl"
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