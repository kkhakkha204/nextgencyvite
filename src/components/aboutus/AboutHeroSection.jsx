import React, { useState, useRef, useEffect } from 'react';
import {ArrowRight, ArrowUpRight} from 'lucide-react';
import {Link} from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AboutHeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);
    const cardsRef = useRef(null);

    // Refs cho animation
    const sectionRef = useRef(null);
    const badgeRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Animation khi mount component
    useEffect(() => {
        const section = sectionRef.current;
        const badge = badgeRef.current;
        const title = titleRef.current;
        const description = descriptionRef.current;
        const buttons = buttonsRef.current;

        // Set initial states
        gsap.set([badge, title, description, buttons], {
            opacity: 0,
            y: 30
        });

        // Create timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        });

        // Animation sequence
        tl.to(badge, {
            opacity: 1,
            y: 0,
            delay: 0.3,
            duration: 0.6,
            ease: "power2.out"
        })
            .to(title, {
                opacity: 1,
                y: 0,
                delay: 0.3,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.4")
            .to(description, {
                opacity: 1,
                y: 0,
                delay: 0.3,
                duration: 0.7,
                ease: "power2.out"
            }, "-=0.5")
            .to(buttons, {
                opacity: 1,
                y: 0,
                delay: 0.3,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.4");

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    useEffect(() => {
        if (isMobile) return; // Skip mouse tracking on mobile

        const handleMouseMove = (e) => {
            if (!cardsRef.current) return;

            const rect = cardsRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const mouseX = (e.clientX - centerX) / rect.width;
            const mouseY = (e.clientY - centerY) / rect.height;

            setMousePosition({ x: mouseX, y: mouseY });
        };

        const handleMouseLeave = () => {
            setMousePosition({ x: 0, y: 0 });
        };

        if (containerRef.current) {
            containerRef.current.addEventListener('mousemove', handleMouseMove);
            containerRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('mousemove', handleMouseMove);
                // eslint-disable-next-line react-hooks/exhaustive-deps
                containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [isMobile]);

    const cards = [
        {
            title: "Innovation",
            subtitle: "Nhiệt tình",
            description: "Pioneering solutions that transform businesses",
            style: "bg-black text-white",
            position: "right-0 top-0",
            mobilePosition: "top-0 right-32"
        },
        {
            title: "Strategy",
            subtitle: "Trẻ Trung",
            description: "Data-driven approaches for measurable outcomes",
            style: "bg-white text-black neu-shadow-xs",
            position: "left-10 top-20",
            mobilePosition: "top-20 left-32"
        },
        {
            title: "Partnership",
            subtitle: "Kinh nghiệm",
            description: "Building lasting relationships through trust",
            style: "bg-gradient-to-b from-black via-black to-[#c08dfe] text-white border-t-2 border-white",
            position: "right-10 bottom-0",
            mobilePosition: "top-[168px] right-24"
        }
    ];

    return (
        <section className="bg-white py-[60px] lg:py-[90px] lg:flex lg:items-center " ref={containerRef}>
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Column A - Content */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <span ref={badgeRef} className=" text-black rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                            About Nexgency
                        </span>
                            <h1 ref={titleRef} className="text-[38px] md:text-[32px] lg:text-[64px] font-archivo font-bold text-black uppercase leading-[1.45] mb-1">
                                Đối tác
                                <span className="font-archivo block text-transparent bg-clip-text bg-gradient-to-r from-black to-[#c08dfe] ">
                  chuyển đổi số đa năng
                </span>
                            </h1>
                        </div>

                        <p ref={descriptionRef} className="text-[15px] lg:text-[18px] text-black">
                            Nextgency là đối tác chiến lược của bạn trong kỷ nguyên số. Chúng tôi cung cấp giải pháp <strong>chuyển đổi số</strong>, giúp doanh nghiệp bạn tăng tốc phát triển.
                        </p>

                        <div ref={buttonsRef} className=" mt-2">
                            {/* CTA Button */}
                            <div className="flex items-center space-x-2 ">
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
                                    className="relative flex items-center space-x-3 px-6 py-3.5 bg-white text-[15px] sm:text-[16px] text-black neu-shadow-xs rounded-full transition-all duration-300 hover:shadow-gray-300 hover:scale-105 group"

                                >
        <span className="">
            Tư vấn ngay
        </span>
                                </Link>

                            </div>
                        </div>
                    </div>

                    {/* Column B - Stacked Square Cards */}
                    <div ref={cardsRef}>
                        {/* Mobile Layout - Compatible Stack without 3D */}
                        <div className="lg:hidden relative h-[360px] mx-auto">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`absolute ${card.mobilePosition} left-0 right-0 mx-auto
                w-[220px] h-[180px] rounded-lg p-4
                flex flex-col justify-between ${card.style}
                shadow-lg`} // Thêm shadow để tạo độ sâu
                                    style={{
                                        top: `${index * 85}px`, // Offset theo chiều dọc thay vì translateZ
                                        left: `${index * 25}px`, // Offset nhẹ theo chiều ngang
                                        zIndex: 3 + index, // Giữ nguyên thứ tự như code gốc
                                    }}
                                >
                                    <div className="space-y-2">
                                        <div>
                                            <p className={`text-[11px] font-archivo font-medium text-[#c08dfe] uppercase tracking-widest mb-1 
                        ${card.style.includes('bg-white') ? '' : ''}`}>
                                                {card.subtitle}
                                            </p>
                                            <p className={`text-[14px] leading-relaxed 
                        ${card.style.includes('bg-white') ? 'text-gray-800' : 'text-gray-200'}`}>
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full
                    ${card.style.includes('bg-white') ? 'bg-green-500' : 'bg-green-500'}`}></div>
                                        <span className={`text-xs 
                    ${card.style.includes('bg-white') ? 'text-black' : 'text-white'}`}>
                    Active
                </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop Layout - Overlapping Stack */}
                        <div className="hidden lg:block relative h-[600px]">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`absolute ${card.position} w-[320px] h-[320px] rounded-3xl 
                    shadow-2xl p-8 flex flex-col justify-between ${card.style} 
                    transition-transform duration-300 ease-out cursor-pointer`}
                                    style={{
                                        transform: `
                      perspective(1000px)
                      rotateY(${mousePosition.x * (5 + index * 3)}deg) 
                      rotateX(${-mousePosition.y * (5 + index * 3)}deg)
                      translate(${mousePosition.x * (10 + index * 5)}px, ${mousePosition.y * (10 + index * 5)}px)
                    `
                                    }}
                                >
                                    <div className="space-y-2">
                                        <div>
                                            <p className={`text-[13px] font-archivo font-medium text-[#c08dfe] uppercase tracking-widest mb-1 
                        ${card.style.includes('bg-white') ? '' : ''}`}>
                                                {card.subtitle}
                                            </p>
                                            <p className={`text-[16px]
                        ${card.style.includes('bg-white') ? 'text-gray-800' : 'text-gray-200'}`}>
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full
                        ${card.style.includes('bg-white') ? 'bg-green-500' : 'bg-green-500'}`}></div>
                                            <span className={`text-xs 
                        ${card.style.includes('bg-white') ? 'text-black' : 'text-white'}`}>
                        Active
                      </span>
                                        </div>
                                        <div className="flex -space-x-2">
                                            {[...Array(3)].map((_, i) => (
                                                <div key={i} className={`w-6 h-6 rounded-full border-2 
                          ${card.style.includes('bg-white') ? 'bg-gray-200 border-white' : 'bg-white/80 border-white/80'}`}>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHeroSection;