import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Sparkles, ArrowUpRight } from 'lucide-react';

const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const heroRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const handleMouseMove = (e) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                setMousePosition({
                    x: (e.clientX - rect.left - rect.width / 2) / rect.width,
                    y: (e.clientY - rect.top - rect.height / 2) / rect.height
                });
            }
        };

        const handleTouchMove = (e) => {
            if (heroRef.current && e.touches[0]) {
                const rect = heroRef.current.getBoundingClientRect();
                const touch = e.touches[0];
                setMousePosition({
                    x: (touch.clientX - rect.left - rect.width / 2) / rect.width,
                    y: (touch.clientY - rect.top - rect.height / 2) / rect.height
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-white">
            {/* Subtle Background Gradient */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    transform: `translateY(${scrollY * 0.3}px)`,
                    background: 'radial-gradient(ellipse at top left, #c08dfe 0%, transparent 40%), radial-gradient(ellipse at bottom right, #1a4498 0%, transparent 40%)'
                }}
            />

            {/* Abstract Shapes Layer - More subtle */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Large Circle */}
                <div
                    className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#c08dfe] to-transparent opacity-10"
                    style={{
                        transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20 + scrollY * 0.2}px)`
                    }}
                />

                {/* Blue Circle */}
                <div
                    className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-[#1a4498] to-transparent opacity-10"
                    style={{
                        transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15 + scrollY * 0.15}px)`
                    }}
                />

                {/* Small Accent Circle */}
                <div
                    className="absolute right-[30%] top-[50%] h-48 w-48 rounded-full bg-[#c08dfe] opacity-5"
                    style={{
                        transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30 + scrollY * 0.25}px)`
                    }}
                />
            </div>

            {/* Geometric Pattern */}
            <div className="absolute inset-0">
                {/* Line Pattern */}
                <svg className="absolute left-0 top-0 h-full w-full opacity-10" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                    <defs>
                        <pattern id="lines" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <line x1="0" y1="0" x2="100" y2="100" stroke="#1a4498" strokeWidth="0.25" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#lines)" />
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        {/* Left Content */}
                        <div>
                            {/* Badge */}
                            <div
                                className="mb-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1a4498] to-[#c08dfe] px-3 py-2.5 shadow-sm"
                                style={{ transform: `translateY(${scrollY * -0.1}px)` }}
                            >
                                <Sparkles className="h-5 w-5 text-white" />
                                <span className="text-[11px] lg:text-[13px] font-medium text-white">Digital services Nextgency</span>
                            </div>

                            {/* Main Heading */}
                            <h1
                                className="mb-8 "
                                style={{ transform: `translateY(${scrollY * -0.15}px)` }}
                            >
                <span className="block text-[32px] text-black md:text-[50px] lg:text-[60px] font-archivo font-bold leading-tight">
                  Bứt phá cùng
                </span>
                                <span className="mt-4 block text-[52px] md:text-[60px] lg:text-[86px] leading-none">
                  <span className="bg-gradient-to-r from-black to-[#c08dfe] bg-clip-text text-transparent font-archivo uppercase tracking-tight">Nextgency</span>
                </span>
                            </h1>

                            {/* Subtitle */}
                            <p
                                className="mb-10 max-w-xl text-lg leading-relaxed text-gray-600 sm:text-xl"
                                style={{ transform: `translateY(${scrollY * -0.2}px)` }}
                            >
                                Transforming ambitious ideas into extraordinary digital experiences through innovative design and cutting-edge technology.
                            </p>

                            {/* CTA Buttons */}
                            <div
                                className="flex flex-col gap-4 sm:flex-row"
                                style={{ transform: `translateY(${scrollY * -0.15}px)` }}
                            >
                                <button className="group relative overflow-hidden rounded-full bg-[#1a4498] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a4498] to-[#c08dfe] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </button>

                                <button className="group rounded-full border-2 border-black px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white">
                                    View Portfolio
                                </button>
                            </div>
                        </div>

                        {/* Right Visual - Desktop */}
                        <div
                            className="relative hidden lg:block"
                            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
                        >
                            {/* Minimalist Card Stack */}
                            <div className="relative h-[500px] w-full">
                                {/* Card 1 - Back */}
                                <div
                                    className="absolute right-0 top-0 h-72 w-80 rounded-2xl bg-black shadow-2xl"
                                    style={{
                                        transform: `
                      perspective(1000px)
                      rotateY(${mousePosition.x * 5}deg) 
                      rotateX(${-mousePosition.y * 5}deg)
                      translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)
                    `
                                    }}
                                >
                                    <div className="flex h-full items-center justify-center">
                                        <span className="text-3xl font-bold text-white">Strategy</span>
                                    </div>
                                </div>

                                {/* Card 2 - Middle */}
                                <div
                                    className="absolute left-10 top-16 h-72 w-80 rounded-2xl border-2 border-black bg-white shadow-2xl"
                                    style={{
                                        transform: `
                      perspective(1000px)
                      rotateY(${mousePosition.x * 8}deg) 
                      rotateX(${-mousePosition.y * 8}deg)
                      translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)
                    `
                                    }}
                                >
                                    <div className="flex h-full items-center justify-center">
                                        <span className="text-3xl font-bold text-black">Design</span>
                                    </div>
                                </div>

                                {/* Card 3 - Front */}
                                <div
                                    className="absolute bottom-0 right-10 h-72 w-80 rounded-2xl bg-gradient-to-br from-[#1a4498] to-[#c08dfe] shadow-2xl"
                                    style={{
                                        transform: `
                      perspective(1000px)
                      rotateY(${mousePosition.x * 10}deg) 
                      rotateX(${-mousePosition.y * 10}deg)
                      translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)
                    `
                                    }}
                                >
                                    <div className="flex h-full items-center justify-center">
                                        <span className="text-3xl font-bold text-white">Innovation</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Visual - Only shows on mobile */}
                        <div className="relative mt-12 block lg:hidden">
                            {/* Animated Cards for Mobile */}
                            <div className="relative h-[300px]">
                                <div
                                    className="absolute inset-x-0 top-0 mx-auto h-40 w-72 rounded-2xl bg-gradient-to-br from-[#1a4498] to-[#c08dfe] shadow-2xl"
                                    style={{
                                        transform: `translateY(${scrollY * -0.1}px) rotate(-6deg)`,
                                        animation: 'float 6s ease-in-out infinite'
                                    }}
                                >
                                    <div className="flex h-full items-center justify-center p-6">
                                        <span className="text-2xl font-bold text-white">Innovation</span>
                                    </div>
                                </div>

                                <div
                                    className="absolute inset-x-0 top-16 mx-auto h-40 w-72 rounded-2xl border-2 border-black bg-white shadow-2xl"
                                    style={{
                                        transform: `translateY(${scrollY * -0.15}px) rotate(3deg)`,
                                        animation: 'float 6s ease-in-out infinite 2s'
                                    }}
                                >
                                    <div className="flex h-full items-center justify-center p-6">
                                        <span className="text-2xl font-bold text-black">Design</span>
                                    </div>
                                </div>

                                <div
                                    className="absolute inset-x-0 top-32 mx-auto h-40 w-72 rounded-2xl bg-black shadow-2xl"
                                    style={{
                                        transform: `translateY(${scrollY * -0.2}px) rotate(-3deg)`,
                                        animation: 'float 6s ease-in-out infinite 4s'
                                    }}
                                >
                                    <div className="flex h-full items-center justify-center p-6">
                                        <span className="text-2xl font-bold text-white">Strategy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats - More spacing */}
                    <div
                        className="mt-32 grid grid-cols-2 gap-8 sm:grid-cols-4"
                        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                    >
                        {[
                            { number: '250+', label: 'Projects Delivered' },
                            { number: '98%', label: 'Client Satisfaction' },
                            { number: '50+', label: 'Team Members' },
                            { number: '12+', label: 'Industry Awards' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold md:text-5xl">
                  <span className="bg-gradient-to-r from-[#1a4498] to-[#c08dfe] bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                                </div>
                                <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
                style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-medium text-gray-500">Discover More</span>
                    <ChevronDown className="h-5 w-5 text-[#1a4498]" />
                </div>
            </div>
        </section>
    );
};


export default HeroSection;