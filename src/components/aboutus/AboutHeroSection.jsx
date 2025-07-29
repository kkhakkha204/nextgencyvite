import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const AboutHeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
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
                containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [isMobile]);

    const cards = [
        {
            title: "Innovation",
            subtitle: "Digital First",
            description: "Pioneering solutions that transform businesses",
            style: "bg-gray-900 text-white",
            position: "right-0 top-0",
            mobilePosition: "top-0"
        },
        {
            title: "Strategy",
            subtitle: "Result Driven",
            description: "Data-driven approaches for measurable outcomes",
            style: "bg-white text-gray-900 border-2 border-gray-900",
            position: "left-10 top-20",
            mobilePosition: "top-20"
        },
        {
            title: "Partnership",
            subtitle: "Client Focus",
            description: "Building lasting relationships through trust",
            style: "bg-gradient-to-br from-blue-500 to-purple-600 text-white",
            position: "right-10 bottom-0",
            mobilePosition: "top-40"
        }
    ];

    return (
        <section className="bg-white py-20 lg:py-32 overflow-hidden" ref={containerRef}>
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Column A - Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                                About Nextgency
                            </p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                We craft digital
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  experiences that matter
                </span>
                            </h1>
                        </div>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            At Nextgency, we believe in the power of technology to transform ideas into reality.
                            Our passionate team of innovators, designers, and developers work together to create
                            solutions that drive your business forward.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium
                hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
                                Get to know us
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="px-8 py-4 border-2 border-gray-200 text-gray-900 rounded-full
                font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
                                View our work
                            </button>
                        </div>
                    </div>

                    {/* Column B - Stacked Square Cards */}
                    <div ref={cardsRef}>
                        {/* Mobile Layout - Vertical Stack with 3D Effect */}
                        <div className="lg:hidden relative h-[400px] mx-auto max-w-[320px]">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`absolute ${card.mobilePosition} left-0 right-0 mx-auto
                    w-[260px] h-[260px] rounded-2xl shadow-xl p-6 
                    flex flex-col justify-between ${card.style}`}
                                    style={{
                                        transform: `translateZ(${index * -20}px)`,
                                        zIndex: 3 - index
                                    }}
                                >
                                    <div className="space-y-3">
                                        <div>
                                            <p className={`text-xs font-medium mb-1 
                        ${card.style.includes('bg-white') ? 'text-gray-500' : 'text-white/80'}`}>
                                                {card.subtitle}
                                            </p>
                                            <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                                            <p className={`text-xs leading-relaxed 
                        ${card.style.includes('bg-white') ? 'text-gray-600' : 'text-white/90'}`}>
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full
                      ${card.style.includes('bg-white') ? 'bg-green-500' : 'bg-white'}`}></div>
                                        <span className={`text-xs 
                      ${card.style.includes('bg-white') ? 'text-gray-500' : 'text-white/80'}`}>
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
                                    <div className="space-y-4">
                                        <div>
                                            <p className={`text-sm font-medium mb-1 
                        ${card.style.includes('bg-white') ? 'text-gray-500' : 'text-white/80'}`}>
                                                {card.subtitle}
                                            </p>
                                            <h3 className="text-3xl font-bold mb-3">{card.title}</h3>
                                            <p className={`text-sm leading-relaxed 
                        ${card.style.includes('bg-white') ? 'text-gray-600' : 'text-white/90'}`}>
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full
                        ${card.style.includes('bg-white') ? 'bg-green-500' : 'bg-white'}`}></div>
                                            <span className={`text-xs 
                        ${card.style.includes('bg-white') ? 'text-gray-500' : 'text-white/80'}`}>
                        Active
                      </span>
                                        </div>
                                        <div className="flex -space-x-2">
                                            {[...Array(3)].map((_, i) => (
                                                <div key={i} className={`w-6 h-6 rounded-full border-2 
                          ${card.style.includes('bg-white') ? 'bg-gray-200 border-white' : 'bg-white/20 border-white/40'}`}>
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