import React, { useEffect, useRef } from 'react';

const ServicesSection = () => {
    const scrollRef = useRef(null);

    const services = [
        {
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop&crop=center",
            name: "Facebook Ads"
        },
        {
            image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=300&fit=crop&crop=center",
            name: "Google Ads"
        },
        {
            image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop&crop=center",
            name: "TikTok Ads"
        },
        {
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
            name: "Website & Landing Page"
        },
        {
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=center",
            name: "Automation-AI-Data"
        },
        {
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
            name: "Facebook Dataset & CRM"
        },
        {
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
            name: "Phòng Marketing Thuê Ngoài"
        }
    ];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollSpeed = 1; // pixels per frame
        const cardWidth = 320; // 280px card + 32px margin
        const totalWidth = services.length * cardWidth;

        const scroll = () => {
            scrollAmount += scrollSpeed;

            if (scrollAmount >= totalWidth) {
                scrollAmount = 0;
            }

            scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
            requestAnimationFrame(scroll);
        };

        const animation = requestAnimationFrame(scroll);

        return () => {
            cancelAnimationFrame(animation);
        };
    }, [services.length]);

    // Create multiple copies for seamless loop
    const infiniteServices = [...services, ...services, ...services, ...services];

    return (
        <section className="bg-white py-[60px] lg:py-[90px] overflow-hidden">
            <div className="relative">
                {/* Infinite Slider Container */}
                <div
                    ref={scrollRef}
                    className="flex will-change-transform"
                    style={{ width: 'fit-content' }}
                >
                    {infiniteServices.map((service, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-72 md:w-80 mx-2"
                        >
                            <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group cursor-pointer">
                                <div className="aspect-video mb-4 overflow-hidden rounded-2xl">
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="w-full h-full object-cover transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="text-center text-[14px] lg:text-[15px] font-medium text-black">
                                    {service.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-14 sm:w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-14 sm:w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>
        </section>
    );
};

export default ServicesSection;