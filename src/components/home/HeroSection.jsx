import React, { useState, useEffect } from 'react';

const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setScrollY(window.scrollY);
            });
        };

        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePosition({ x, y });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden bg-white">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gradient Orbs */}
                <div
                    className="absolute w-96 h-96 rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, #c08dfe 0%, transparent 70%)',
                        top: '-10%',
                        right: '10%',
                        transform: `translate3d(${mousePosition.x * 20}px, ${scrollY * 0.1}px, 0)`,
                        filter: 'blur(40px)',
                    }}
                />
                <div
                    className="absolute w-64 h-64 rounded-full opacity-30"
                    style={{
                        background: 'radial-gradient(circle, #1a4498 0%, transparent 70%)',
                        bottom: '20%',
                        left: '5%',
                        transform: `translate3d(${mousePosition.x * -15}px, ${scrollY * 0.15}px, 0)`,
                        filter: 'blur(30px)',
                    }}
                />
            </div>

            {/* Main Container */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Content Section */}
                <div className="relative z-20 pt-20 pb-16 lg:pt-32 lg:pb-24">
                    {/* Title Section */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                        <h1
                            className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black mb-4 lg:mb-0"
                            style={{
                                transform: `translate3d(0, ${scrollY * 0.2}px, 0)`,
                            }}
                        >
                            Bứt phá
                        </h1>
                        <div
                            className="text-sm lg:text-base text-gray-600 lg:text-right"
                            style={{
                                transform: `translate3d(0, ${scrollY * 0.15}px, 0)`,
                            }}
                        >
                            <p>Based on</p>
                            <p>Ha Noi</p>
                        </div>
                    </div>

                    {/* Subtitle Section */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
                        <p
                            className="text-xl lg:text-2xl text-gray-700 mb-4 lg:mb-0"
                            style={{
                                transform: `translate3d(0, ${scrollY * 0.25}px, 0)`,
                            }}
                        >
                            Cung cấp dịch vụ chuyển đổi số
                        </p>
                        <h2
                            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#c08dfe] to-[#1a4498] bg-clip-text text-transparent"
                            style={{
                                transform: `translate3d(0, ${scrollY * 0.2}px, 0)`,
                            }}
                        >
                            Nextgency
                        </h2>
                    </div>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-col sm:flex-row gap-4"
                        style={{
                            transform: `translate3d(0, ${scrollY * 0.3}px, 0)`,
                        }}
                    >
                        <button className="group relative px-8 py-4 bg-[#1a4498] text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl">
                            <span className="relative z-10 font-medium">Khám phá dịch vụ</span>
                            <div className="absolute inset-0 bg-[#c08dfe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </button>
                        <button className="px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-300">
                            Liên hệ ngay
                        </button>
                    </div>
                </div>

                {/* Visual Container */}
                <div className="relative pb-20 lg:pb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
                        {/* Left Column */}
                        <div className="relative">
                            {/* Floating Card */}
                            <div
                                className="absolute -top-10 -left-5 w-48 h-64 bg-white rounded-2xl shadow-2xl p-6 hidden lg:block"
                                style={{
                                    transform: `translate3d(${mousePosition.x * -10}px, ${scrollY * 0.4 + mousePosition.y * -10}px, 0) rotate(${mousePosition.x * 2}deg)`,
                                }}
                            >
                                <div className="h-full bg-gradient-to-br from-[#c08dfe]/20 to-[#1a4498]/20 rounded-xl"></div>
                            </div>

                            {/* Main Image */}
                            <div
                                className="relative overflow-hidden rounded-2xl shadow-xl"
                                style={{
                                    transform: `translate3d(0, ${scrollY * 0.3}px, 0)`,
                                }}
                            >
                                <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200">
                                    <img
                                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=600&fit=crop"
                                        alt="Office space"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Center Column */}
                        <div className="relative">
                            {/* Geometric Shape */}
                            <div
                                className="absolute -top-20 right-10 w-32 h-32 hidden lg:block"
                                style={{
                                    transform: `translate3d(${mousePosition.x * 15}px, ${scrollY * 0.2 + mousePosition.y * 15}px, 0) rotate(${45 + scrollY * 0.1}deg)`,
                                }}
                            >
                                <div className="w-full h-full border-4 border-[#c08dfe] rounded-lg"></div>
                            </div>

                            {/* Main Center Image */}
                            <div
                                className="relative overflow-hidden rounded-2xl shadow-2xl"
                                style={{
                                    transform: `translate3d(0, ${scrollY * 0.2}px, 0) scale(${1 + scrollY * 0.0001})`,
                                }}
                            >
                                <div className="aspect-[4/5] bg-gradient-to-br from-[#1a4498] to-[#c08dfe]">
                                    <img
                                        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=800&fit=crop"
                                        alt="Modern workspace"
                                        className="w-full h-full object-cover mix-blend-overlay opacity-80"
                                    />
                                </div>
                            </div>

                            {/* Floating Stats Card */}
                            <div
                                className="absolute -bottom-10 -right-10 bg-white rounded-2xl shadow-2xl p-6 hidden lg:block"
                                style={{
                                    transform: `translate3d(${mousePosition.x * 10}px, ${scrollY * 0.5 + mousePosition.y * 10}px, 0)`,
                                }}
                            >
                                <div className="text-3xl font-bold text-[#1a4498]">98%</div>
                                <div className="text-sm text-gray-600">Khách hàng hài lòng</div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="relative">
                            {/* Circle Element */}
                            <div
                                className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-[#c08dfe]/30 hidden lg:block"
                                style={{
                                    transform: `translate3d(${mousePosition.x * -20}px, ${scrollY * 0.3 + mousePosition.y * -20}px, 0)`,
                                }}
                            />

                            {/* Main Image */}
                            <div
                                className="relative overflow-hidden rounded-2xl shadow-xl"
                                style={{
                                    transform: `translate3d(0, ${scrollY * 0.4}px, 0)`,
                                }}
                            >
                                <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-100">
                                    <img
                                        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=600&fit=crop"
                                        alt="Team collaboration"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Tech Stack Card */}
                            <div
                                className="absolute -bottom-5 -left-10 bg-black text-white rounded-2xl p-4 hidden lg:block"
                                style={{
                                    transform: `translate3d(${mousePosition.x * -15}px, ${scrollY * 0.6 + mousePosition.y * -15}px, 0) rotate(${mousePosition.x * -2}deg)`,
                                }}
                            >
                                <div className="text-xs font-mono">{'<NextGen />'}</div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Gradient Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
                </div>
            </div>

            {/* Additional Decorative Elements */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;