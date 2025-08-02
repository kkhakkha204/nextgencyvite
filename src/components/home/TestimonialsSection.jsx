import React, { useState, useEffect, useRef } from 'react';
import {ChevronLeft, ChevronRight, Star, Quote, ArrowUpRight} from 'lucide-react';
import {Link} from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const carouselRef = useRef(null);

    // Refs cho animation
    const sectionRef = useRef(null);
    const labelRef = useRef(null);
    const titleRef = useRef(null);
    const mainContainerRef = useRef(null);
    const leftColumnRef = useRef(null);
    const carouselContainerRef = useRef(null);
    const navigationRef = useRef(null);
    const cardsRef = useRef([]);

    // Sample testimonials data
    const testimonials = [
        {
            id: 1,
            content: "Nextgency đã mang đến cho chúng tôi một giải pháp tuyệt vời. Đội ngũ chuyên nghiệp, sáng tạo và luôn lắng nghe khách hàng.",
            author: "Nguyễn Văn A",
            company: "ABC Corporation"
        },
        {
            id: 2,
            content: "Chất lượng dịch vụ vượt trội, thời gian hoàn thành nhanh chóng. Rất hài lòng với kết quả nhận được từ Nextgency.",
            author: "Trần Thị B",
            company: "XYZ Company"
        },
        {
            id: 3,
            content: "Sự chuyên nghiệp và tận tâm của Nextgency thực sự ấn tượng. Họ đã giúp chúng tôi đạt được mục tiêu kinh doanh.",
            author: "Lê Văn C",
            company: "Tech Startup"
        },
        {
            id: 4,
            content: "Đội ngũ Nextgency rất sáng tạo và năng động. Họ luôn đưa ra những ý tưởng mới mẻ và hiệu quả cho dự án của chúng tôi.",
            author: "Phạm Thị D",
            company: "Digital Agency"
        },
        {
            id: 5,
            content: "Hợp tác với Nextgency là một trải nghiệm tuyệt vời. Họ thực sự hiểu nhu cầu của khách hàng và đáp ứng hoàn hảo.",
            author: "Hoàng Văn E",
            company: "E-commerce Platform"
        }
    ];

    const itemsPerSlide = window.innerWidth < 768 ? 1 : 2;
    const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

    // Animation khi mount component
    useEffect(() => {
        const section = sectionRef.current;
        const label = labelRef.current;
        const title = titleRef.current;
        const mainContainer = mainContainerRef.current;
        const leftColumn = leftColumnRef.current;
        const carouselContainer = carouselContainerRef.current;
        const navigation = navigationRef.current;

        // Set initial states
        gsap.set([label, title, mainContainer], {
            opacity: 0,
            y: 40
        });

        gsap.set([leftColumn, carouselContainer, navigation], {
            opacity: 0,
            x: -30
        });

        // Create main timeline
        const mainTl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 60%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        });

        // Animation sequence
        mainTl
            .to(label, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            })
            .to(title, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.4")
            .to(mainContainer, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power2.out"
            }, "-=0.5")
            .to(leftColumn, {
                opacity: 1,
                x: 0,
                duration: 0.7,
                ease: "power2.out"
            }, "-=0.6")
            .to(carouselContainer, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.5")
            .to(navigation, {
                opacity: 1,
                x: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.4");

        // Animation cho cards khi xuất hiện
        const animateCards = () => {
            const visibleCards = cardsRef.current.filter(card => card);
            gsap.fromTo(visibleCards,
                {
                    opacity: 0,
                    y: 30,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out"
                }
            );
        };

        // Gọi animateCards sau khi carousel container được animate
        mainTl.call(animateCards);

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Animation khi chuyển slide
    useEffect(() => {
        const visibleCards = cardsRef.current.filter(card => card);
        if (visibleCards.length > 0) {
            gsap.fromTo(visibleCards,
                {
                    opacity: 0,
                    y: 10,
                    scale: 0.98
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "power2.out",
                    delay: 0.1
                }
            );
        }
    }, [currentIndex]);

    // Setup hover effects cho cards
    useEffect(() => {
        const cards = cardsRef.current.filter(card => card);

        cards.forEach(card => {
            if (!card) return;

            const handleMouseEnter = () => {
                gsap.to(card, {
                    rotation: 2,
                    scale: 1.02,
                    duration: 0.2,
                    ease: "power2.out"
                });

                // Shine effect
                const shine = card.querySelector('.shine-effect');
                if (shine) {
                    gsap.fromTo(shine,
                        {
                            x: '-100%',
                            opacity: 0
                        },
                        {
                            x: '100%',
                            opacity: 1,
                            duration: 0.8,
                            ease: "power2.inOut"
                        }
                    );
                }
            };

            const handleMouseLeave = () => {
                gsap.to(card, {
                    rotation: 0,
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            };

            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);

            // Cleanup
            return () => {
                card.removeEventListener('mouseenter', handleMouseEnter);
                card.removeEventListener('mouseleave', handleMouseLeave);
            };
        });
    }, [currentIndex]);

    // Auto-play carousel
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, totalSlides]);

    // Handle navigation
    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    // Handle touch events
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            goToNext();
        }
        if (isRightSwipe) {
            goToPrevious();
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <section ref={sectionRef} className="w-full bg-white py-[60px] md:py-[90px]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-4 lg:mb-8">
                    <div ref={labelRef} className="inline-flex items-center justify-center mb-4">
                        <span className=" text-black rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                            Testimonials
                        </span>
                    </div>
                    <h2 ref={titleRef} className="text-[26px] md:text-[32px] lg:text-[60px] font-archivo font-bold text-black uppercase leading-[1.45] mb-1">
                        đối tác nói gì về chúng tôi
                    </h2>
                </div>

                {/* Main Content Container */}
                <div ref={mainContainerRef} className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8 p-4 rounded-xl bg-gradient-to-br from-[#2B144D] via-black to-[#2B144D]">
                    {/* Left Column - Description & CTA */}
                    <div ref={leftColumnRef} className="lg:col-span-1 flex flex-col justify-between">
                        <div className="mb-6 lg:mb-0 p-4">
                            <p className="text-[15px] lg:text-[18px] text-white text-justify">
                                Chúng tôi tự hào về những phản hồi <strong>tích cực</strong> từ khách hàng,
                                là động lực để Nextgency không ngừng phát triển.
                            </p>
                        </div>
                        <div className=" ">
                            {/* CTA Button */}
                            <div className="inline-flex items-center">
                                <Link
                                    to="/contact"
                                    className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-white text-[15px] sm:text-[16px] text-black rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group"

                                >
        <span className="">
            Tư vấn ngay
        </span>
                                    <div
                                        className="w-9 h-9 sm:w-[2.5rem] sm:h-[2.5rem] bg-black rounded-full flex items-center justify-center neu-shadow-xs transition-all duration-300">
                                        <ArrowUpRight
                                            className="w-5 h-5 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-105"
                                            strokeWidth={2.5}/>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>

                    {/* Right Column - Carousel */}
                    <div className="lg:col-span-4">
                        <div
                            ref={carouselContainerRef}
                            className="overflow-hidden"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div
                                ref={carouselRef}
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                                    <div key={slideIndex} className="w-full flex-shrink-0">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                                            {testimonials
                                                .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                                                .map((testimonial, cardIndex) => (
                                                    <div
                                                        key={testimonial.id}
                                                        ref={el => cardsRef.current[slideIndex * itemsPerSlide + cardIndex] = el}
                                                        className="relative bg-white rounded-lg p-8 lg:p-12 shadow-md shadow-white transition-all duration-300 hover:border-[#c08dfe]/20 group flex flex-col justify-between min-h-[280px] overflow-hidden cursor-pointer"
                                                    >
                                                        {/* Shine Effect */}
                                                        <div className="shine-effect absolute inset-0 bg-gradient-to-r from-transparent via-[#2B144D]/40 to-transparent transform -translate-x-full opacity-0"></div>

                                                        {/* Top Section - Quote Icon & Content */}
                                                        <div className="relative z-10">
                                                            {/* Quote Icon */}
                                                            <div className="mb-4">
                                                                <Quote className="w-8 h-8 text-[#c08dfe] fill-[#c08dfe]"/>
                                                            </div>

                                                            {/* Content */}
                                                            <p className="text-black text-[14px] lg:text-[16px]">
                                                                {testimonial.content}
                                                            </p>
                                                        </div>

                                                        {/* Bottom Section - Author Info */}
                                                        <div className="pt-4 border-t border-gray-400 relative z-10 mt-6">
                                                            <p className="text-black font-medium text-[14px] lg:text-[16px]">
                                                                {testimonial.author}
                                                            </p>
                                                            <p className="text-[11px] sm:text-[13px] font-medium text-[#c08dfe] uppercase tracking-widest">
                                                                {testimonial.company}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows - Below Carousel */}
                        <div ref={navigationRef} className="flex justify-center items-center gap-3 mt-4">
                            <button
                                onClick={goToPrevious}
                                className=" border-2 border-white rounded-full p-3 text-white transition-all duration-300 group hover:bg-white"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-5 h-5 text-white group-hover:text-black" />
                            </button>


                            <button
                                onClick={goToNext}
                                className=" border-2 border-white rounded-full p-3 text-white transition-all duration-300 group hover:bg-white"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-5 h-5 text-white group-hover:text-black" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;