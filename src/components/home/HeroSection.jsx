import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);
    const imageContainerRef = useRef(null);
    const mainImageRef = useRef(null);
    const floatingCardsRef = useRef([]);
    const visualLayersRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial animations on load
            gsap.timeline()
                .fromTo(titleRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
                )
                .fromTo(subtitleRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
                    '-=0.5'
                )
                .fromTo(ctaRef.current.children,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out' },
                    '-=0.3'
                );

            // Parallax effect for main image
            gsap.to(mainImageRef.current, {
                yPercent: -20,
                ease: 'none',
                scrollTrigger: {
                    trigger: imageContainerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // Floating cards parallax
            floatingCardsRef.current.forEach((card, index) => {
                const speed = 1 + (index * 0.5);
                gsap.to(card, {
                    y: -50 * speed,
                    rotation: index % 2 === 0 ? 5 : -5,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: imageContainerRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                });
            });

            // Visual layers parallax
            visualLayersRef.current.forEach((layer, index) => {
                gsap.to(layer, {
                    yPercent: -10 * (index + 1),
                    scale: 1 + (index * 0.05),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: imageContainerRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                });
            });

            // Hover effects for CTA buttons
            const buttons = ctaRef.current.querySelectorAll('button');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', () => {
                    gsap.to(button, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
                });
                button.addEventListener('mouseleave', () => {
                    gsap.to(button, { scale: 1, duration: 0.3, ease: 'power2.out' });
                });
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen bg-white overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/20" />

            {/* Content Container */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
                {/* Text Content */}
                <div className="text-center mb-16 lg:mb-24">
                    <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black mb-4">
                        Chuyển đổi số
                    </h1>
                    <h2 ref={subtitleRef} className="text-5xl sm:text-6xl lg:text-8xl font-black bg-gradient-to-r from-[#c08dfe] to-[#1a4498] bg-clip-text text-transparent">
                        NEXTGENCY
                    </h2>

                    {/* CTA Buttons */}
                    <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-[#1a4498] text-white rounded-full font-medium hover:shadow-xl transition-shadow duration-300">
                            Khám phá dịch vụ
                        </button>
                        <button className="px-8 py-4 bg-white border-2 border-[#c08dfe] text-[#c08dfe] rounded-full font-medium hover:bg-[#c08dfe] hover:text-white transition-all duration-300">
                            Liên hệ tư vấn
                        </button>
                    </div>
                </div>

                {/* Image Section with Layers */}
                <div ref={imageContainerRef} className="relative max-w-5xl mx-auto">
                    {/* Main Image Container */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            ref={mainImageRef}
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
                            alt="Digital transformation"
                            className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    {/* Visual Layers */}
                    <div
                        ref={el => visualLayersRef.current[0] = el}
                        className="absolute -top-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-[#c08dfe]/20 to-transparent rounded-full blur-2xl"
                    />
                    <div
                        ref={el => visualLayersRef.current[1] = el}
                        className="absolute -bottom-10 -right-10 w-40 h-40 sm:w-52 sm:h-52 bg-gradient-to-tl from-[#1a4498]/20 to-transparent rounded-full blur-2xl"
                    />

                    {/* Floating Cards */}
                    <div
                        ref={el => floatingCardsRef.current[0] = el}
                        className="absolute top-10 -left-5 sm:top-20 sm:-left-10 bg-white rounded-2xl shadow-xl p-4 sm:p-6 transform rotate-6 hover:rotate-3 transition-transform duration-300"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#c08dfe] to-[#1a4498] rounded-xl" />
                            <div>
                                <p className="font-semibold text-sm sm:text-base">Innovation</p>
                                <p className="text-xs sm:text-sm text-gray-500">Leading tech</p>
                            </div>
                        </div>
                    </div>

                    <div
                        ref={el => floatingCardsRef.current[1] = el}
                        className="absolute top-1/3 -right-5 sm:-right-10 bg-black text-white rounded-2xl shadow-xl p-4 sm:p-6 transform -rotate-6 hover:-rotate-3 transition-transform duration-300"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl" />
                            <div>
                                <p className="font-semibold text-sm sm:text-base">Modern</p>
                                <p className="text-xs sm:text-sm text-gray-300">Solutions</p>
                            </div>
                        </div>
                    </div>

                    <div
                        ref={el => floatingCardsRef.current[2] = el}
                        className="absolute bottom-10 left-5 sm:bottom-20 sm:left-10 bg-gradient-to-r from-[#c08dfe] to-[#1a4498] text-white rounded-2xl shadow-xl p-4 sm:p-6 transform rotate-3 hover:rotate-6 transition-transform duration-300"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur rounded-xl" />
                            <div>
                                <p className="font-semibold text-sm sm:text-base">Creative</p>
                                <p className="text-xs sm:text-sm text-white/80">Design</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats overlay */}
                    <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            <div className="text-center">
                                <p className="text-2xl sm:text-3xl font-bold text-[#1a4498]">500+</p>
                                <p className="text-xs sm:text-sm text-gray-600">Dự án</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl sm:text-3xl font-bold text-[#c08dfe]">98%</p>
                                <p className="text-xs sm:text-sm text-gray-600">Hài lòng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;