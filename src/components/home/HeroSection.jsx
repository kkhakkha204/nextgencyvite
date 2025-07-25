import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Sparkles, Zap, Globe } from 'lucide-react';

const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0);
    const heroRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                const scrollPercentage = Math.max(0, Math.min(1, -rect.top / rect.height));
                setScrollY(scrollPercentage);
            }
        };

        const handleVisibility = () => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleVisibility);
        handleVisibility();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleVisibility);
        };
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen bg-white overflow-hidden">
            {/* Background Gradient Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#c08dfe]/10 to-transparent rounded-full blur-3xl"
                     style={{ transform: `translateY(${scrollY * 100}px)` }} />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#1a4498]/10 to-transparent rounded-full blur-3xl"
                     style={{ transform: `translateY(${-scrollY * 100}px)` }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
                {/* Header Content */}
                <div className="text-center mb-20">
                    {/* Top Title - "Chuyển đổi số" */}
                    <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight"
                        style={{ transform: `translateY(${scrollY * -30}px)`, opacity: 1 - scrollY * 0.3 }}>
            <span className="bg-gradient-to-r from-[#1a4498] to-[#c08dfe] bg-clip-text text-transparent">
              Chuyển đổi số
            </span>
                    </h2>

                    {/* Main Title with Logo - Same Row */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mb-12"
                         style={{ transform: `translateY(${scrollY * -20}px)` }}>
                        {/* Circular Logo */}
                        <div className="w-[145px] h-[145px] bg-black rounded-full flex items-center justify-center relative overflow-hidden flex-shrink-0">
                            <svg
                                className="absolute inset-0 w-full h-full animate-spin"
                                viewBox="0 0 145 145"
                                style={{ animationDuration: '20s' }}
                            >
                                <path
                                    id="circle-path"
                                    d="M 72.5, 72.5 m -60.5, 0 a 60.5,60.5 0 1,1 121,0 a 60.5,60.5 0 1,1 -121,0"
                                    fill="none"
                                    stroke="none"
                                />
                                <text className="text-white text-[8px] font-medium tracking-wider uppercase" fill="white">
                                    <textPath href="#circle-path" startOffset="0%">
                                        Website • Landing page • User interface • User experience • Website • Landing page • User interface • User experience
                                    </textPath>
                                </text>
                            </svg>
                            <div className="w-[6.6rem] h-[6.6rem] bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                                <img
                                    src="/api/placeholder/48/48"
                                    alt="Nextgency Logo"
                                    className="h-12 w-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Company Name */}
                        <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">
                            <span className="text-black">NEXTGENCY</span>
                        </h1>
                    </div>

                    {/* CTA Button */}
                    <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-[#1a4498] transition-all duration-300 transform hover:scale-105"
                            style={{ transform: `translateY(${scrollY * -10}px)` }}>
                        <span className="font-medium">Khám phá dịch vụ</span>
                        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#c08dfe] to-[#1a4498] opacity-0 group-hover:opacity-20 transition-opacity" />
                    </button>
                </div>

                {/* Visual Gallery Section */}
                <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Left Column - Small Image */}
                    <div className="relative h-[300px] lg:h-[500px] group"
                         style={{ transform: `translateY(${scrollY * 240}px)` }}>
                        <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#c08dfe]/20 to-[#1a4498]/20">
                            <img
                                src="/api/placeholder/400/500"
                                alt="Digital Innovation"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Floating Card */}
                        <div className={`absolute -right-4 top-10 bg-white rounded-2xl shadow-2xl p-6 w-48 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                             style={{ transitionDelay: '200ms' }}>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 bg-[#c08dfe]/10 rounded-full flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-[#c08dfe]" />
                                </div>
                                <span className="font-semibold text-sm">Tốc độ</span>
                            </div>
                            <p className="text-xs text-gray-600">Triển khai nhanh chóng</p>
                        </div>
                    </div>

                    {/* Center Column - Large Image */}
                    <div className="relative h-[400px] lg:h-[600px] group lg:-mt-12"
                         style={{ transform: `translateY(${scrollY * 20}px)` }}>
                        <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a4498]/20 to-[#c08dfe]/20">
                            <img
                                src="/api/placeholder/600/600"
                                alt="Modern Technology"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Floating Card Top */}
                        <div className={`absolute -left-4 top-20 bg-white rounded-2xl shadow-2xl p-6 w-52 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                             style={{ transitionDelay: '400ms' }}>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 bg-[#1a4498]/10 rounded-full flex items-center justify-center">
                                    <Globe className="w-5 h-5 text-[#1a4498]" />
                                </div>
                                <span className="font-semibold text-sm">Toàn cầu</span>
                            </div>
                            <p className="text-xs text-gray-600">Giải pháp không giới hạn</p>
                        </div>

                        {/* Floating Card Bottom */}
                        <div className={`absolute -right-4 bottom-20 bg-black text-white rounded-2xl shadow-2xl p-6 w-52 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                             style={{ transitionDelay: '600ms' }}>
                            <h3 className="font-bold text-lg mb-1">10+ năm</h3>
                            <p className="text-sm opacity-90">Kinh nghiệm chuyển đổi số</p>
                        </div>
                    </div>

                    {/* Right Column - Small Image */}
                    <div className="relative h-[300px] lg:h-[500px] group"
                         style={{ transform: `translateY(${scrollY * 420}px)` }}>
                        <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a4498]/20 to-[#c08dfe]/20">
                            <img
                                src="/api/placeholder/400/500"
                                alt="Creative Solutions"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Floating Stats */}
                        <div className={`absolute -left-4 bottom-10 bg-gradient-to-br from-[#c08dfe] to-[#1a4498] text-white rounded-2xl shadow-2xl p-6 w-48 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                             style={{ transitionDelay: '800ms' }}>
                            <h3 className="font-bold text-3xl mb-1">500+</h3>
                            <p className="text-sm opacity-90">Dự án thành công</p>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-10 w-20 h-20 border border-[#c08dfe]/20 rounded-full"
                     style={{ transform: `translateY(${scrollY * -60}px) rotate(${scrollY * 45}deg)` }} />
                <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-[#1a4498]/20 rounded-full"
                     style={{ transform: `translateY(${scrollY * -80}px) rotate(${scrollY * -45}deg)` }} />
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>
    );
};

export default HeroSection;