import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Users } from 'lucide-react';
import { Link } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const descriptionRef = useRef(null);
    const cardsRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const buttonsRef = useRef(null);
    const labelRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;
        const title = titleRef.current;
        const subtitle = subtitleRef.current;
        const description = descriptionRef.current;
        const cards = cardsRef.current;
        const card1 = card1Ref.current;
        const card2 = card2Ref.current;
        const buttons = buttonsRef.current;
        const label = labelRef.current;

        const isMobile = window.innerWidth <= 768;

        gsap.to(label, {
            y: -60,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
            }
        });

        // Parallax effects during scroll
        gsap.to(container, {
            y: 30,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 2.5
            }
        });

        // Individual element parallax with different speeds
        gsap.to(title, {
            y: -80,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
            }
        });

        gsap.to(description, {
            y: -65,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2
            }
        });

        gsap.to(buttons, {
            y: 25,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 2.2
            }
        });

        // Floating animation for cards
        gsap.to(card1, {
            y: "+=22",
            duration: 3,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1
        });
        if (!isMobile) {
            gsap.to(card2, {
                y: "-=68",
                duration: 4,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1,
                delay: 1
            });
        }
        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.killTweensOf([section, container, title, subtitle, description, cards, card1, card2, buttons, label]);
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-white py-[60px] lg:py-[90px] overflow-hidden">
            {/* Container */}
            <div ref={containerRef} className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center py-8 lg:border-b border-black">

                    {/* Cột A - Content */}
                    <div className="space-y-4">
                        <div ref={labelRef} className="inline-flex items-center justify-center">
                            <span className="text-black rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                                About Nexgency
                            </span>
                        </div>

                        {/* Tiêu đề */}
                        <h2 ref={titleRef} className="text-[26px] md:text-[32px] lg:text-[60px] font-archivo font-bold text-black uppercase leading-[1.45] mb-1">
                            Tiên Phong
                            <span
                                ref={subtitleRef}
                                className="block font-archivo text-transparent bg-clip-text bg-gradient-to-r from-black via-[#c08dfe] to-black lg:-mt-3"
                                style={{
                                    backgroundSize: '200% 100%',
                                    backgroundPosition: '0% center'
                                }}
                            >
                                Chuyển Đổi Số
                            </span>
                        </h2>

                        {/* Mô tả */}
                        <p ref={descriptionRef} className="text-[15px] lg:text-[18px] text-black">
                            Nextgency là đối tác chiến lược của bạn trong kỷ nguyên số. Chúng tôi cung cấp giải pháp <strong>chuyển đổi số</strong>, giúp doanh nghiệp bạn tăng tốc phát triển.
                        </p>
                    </div>

                    {/* Cột B - Cards */}
                    <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl">
                        {/* Card A */}
                        <div
                            ref={card1Ref}
                            className="bg-white neu-shadow-xs rounded-lg p-6 space-y-2 hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-[15px] lg:text-[18px] font-medium text-black">ABCDEF</h3>
                            <p className="text-gray-600 text-[14px] lg:text-[16px]">
                                Happy clients worldwide trust us to bring their vision to life
                            </p>
                        </div>

                        {/* Card B với ảnh */}
                        <div
                            ref={card2Ref}
                            className="relative rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="aspect-[8/7] w-full">
                                <img
                                    src="/assets/images/test.webp"
                                    alt="Our team at work"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={buttonsRef} className="mt-4">
                    {/* CTA Button */}
                    <div className="flex items-center space-x-2">
                        <Link
                            to="/about"
                            className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-black text-[15px] sm:text-[16px] text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group"
                        >
                            <span>Xem thêm</span>
                            <div className="w-9 h-9 sm:w-[2.5rem] sm:h-[2.5rem] bg-white rounded-full flex items-center justify-center neu-shadow-xs transition-all duration-300">
                                <ArrowUpRight
                                    className="w-5 h-5 text-black transition-all duration-300 group-hover:rotate-12 group-hover:scale-105"
                                    strokeWidth={2.5}
                                />
                            </div>
                        </Link>
                        <Link
                            to="/about#contact"
                            className="relative flex items-center space-x-3 px-6 py-3.5 bg-white text-[15px] sm:text-[16px] text-black neu-shadow-xs rounded-full transition-all duration-300 hover:shadow-gray-300 hover:scale-105 group"
                        >
                            <span>Tư vấn ngay</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;