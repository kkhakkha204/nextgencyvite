import React, {useState, useEffect, useRef} from 'react';
import {ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight} from 'lucide-react';
import {Link} from "react-router-dom";

const ProjectCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const carouselRef = useRef(null);

    // Portfolio items data
    const portfolioItems = [
        {
            id: 1,
            image: '/assets/images/website&landingpage/beautysummit.webp',
            gradient: 'from-[#A4FCFF]/20 to-[#C8A4FE]/20'
        },
        {
            id: 2,
            image: '/assets/images/website&landingpage/katskin.webp',
            gradient: 'from-[#C8A4FE]/20 to-[#5a37c0]/20'
        },
        {
            id: 3,
            image: '/assets/images/website&landingpage/woodplus.webp',
            gradient: 'from-[#A4FCFF]/20 to-[#5a37c0]/20'
        },
        {
            id: 4,
            image: '/assets/images/website&landingpage/femme.webp',
            gradient: 'from-[#C8A4FE]/20 to-[#A4FCFF]/20'
        }
    ];

    // Determine how many items to show based on screen size
    const getItemsPerView = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1024) return 2; // Desktop
            if (window.innerWidth >= 768) return 1; // Tablet
            return 1; // Mobile
        }
        return 2;
    };

    const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

    // Create extended items array for smooth infinite loop
    const createExtendedItems = () => {
        const itemsToShow = itemsPerView;
        const totalItems = portfolioItems.length;

        // If we have enough items to fill the view, create seamless loop
        if (totalItems >= itemsToShow) {
            // Add clones at the end to ensure smooth transition
            const clonesAtEnd = portfolioItems.slice(0, Math.ceil(itemsToShow));
            return [...portfolioItems, ...clonesAtEnd];
        }

        // If not enough items, repeat the array until we have enough
        const multiplier = Math.ceil(itemsToShow / totalItems) + 1;
        return Array(multiplier).fill(portfolioItems).flat();
    };

    const extendedItems = createExtendedItems();
    const maxIndex = portfolioItems.length - 1;

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setItemsPerView(getItemsPerView());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Autoplay carousel
    // ✅ Đúng: dependency array chỉ có maxIndex (ít thay đổi)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                return nextIndex > maxIndex ? 0 : nextIndex;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [maxIndex]); // ← Chỉ phụ thuộc vào maxIndex

    const handleNext = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
            // Reset to 0 when reaching the end of original items
            return nextIndex > maxIndex ? 0 : nextIndex;
        });

        setTimeout(() => setIsTransitioning(false), 500);
    };

    const handlePrev = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex - 1;
            // Go to last item when going below 0
            return nextIndex < 0 ? maxIndex : nextIndex;
        });

        setTimeout(() => setIsTransitioning(false), 500);
    };

    const getTransform = () => {
        const itemWidth = 100 / itemsPerView;
        const translateX = -(currentIndex * itemWidth);
        return `translateX(${translateX}%)`;
    };

    // Touch handlers for mobile swipe
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

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
            handleNext();
        } else if (isRightSwipe) {
            handlePrev();
        }
    };

    return (
        <section className="bg-white pb-[60px] pb-[90px] lg:pt-[30px]">
            <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-12 w-full">
                    {/* Cột 1: Description & CTA (20%) */}
                    <div className="w-full lg:w-1/5 flex flex-col space-y-6">
                        <div className="space-y-4 py-4">
                            <p className="text-[#1c1c1c] text-[14px] lg:text-[18px] leading-relaxed text-justify">
                                <strong>Website & Landing Page</strong> không chỉ là nơi khách hàng "ghé chơi", mà là
                                đích đến giúp họ ở lại – chuyển đổi – và quay lại. Nextgency thiết kế nền tảng số hiện
                                đại với giải pháp trọn gói.
                            </p>

                            {/* CTA Button */}
                            <div className="flex items-center space-x-4">
                                <Link
                                    to="/contact"
                                    className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-black text-[15px] sm:text-[16px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group"

                                >
        <span className="">
            Hợp tác ngay
        </span>
                                    <div
                                        className="w-9 h-9 sm:w-[2.5rem] sm:h-[2.5rem] bg-white rounded-full flex items-center justify-center neu-shadow-xs transition-all duration-300">
                                        <ArrowUpRight
                                            className="w-5 h-5 text-black transition-all duration-300 group-hover:rotate-12 group-hover:scale-105"
                                            strokeWidth={2.5}/>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>

                    {/* Cột 2: Portfolio Carousel (80%) */}
                    <div className="w-full lg:w-4/5">
                        <div className="relative">
                            {/* Carousel Container */}
                            <div
                                className="overflow-hidden py-4"
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                <div
                                    ref={carouselRef}
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{transform: getTransform()}}
                                >
                                    {/* Render extended portfolio items for smooth infinite loop */}
                                    {extendedItems.map((item, index) => (
                                        <div
                                            key={`${item.id}-${index}`}
                                            className="flex-shrink-0 px-1 sm:px-3"
                                            style={{
                                                width: `${100 / itemsPerView}%`
                                            }}
                                        >
                                            <div className="group cursor-pointer">
                                                <div
                                                    className="relative aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                                                    {/* Gradient overlay */}
                                                    <div
                                                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} z-10`}></div>

                                                    {/* Project image */}
                                                    <img
                                                        src={item.image}
                                                        alt={item.alt}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            // Fallback in case image doesn't load
                                                            e.target.style.display = 'none';
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <div className="flex justify-center sm:justify-end sm:px-[12px] mt-2 space-x-2">
                                <button
                                    onClick={handlePrev}
                                    disabled={isTransitioning}
                                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:border-[#A368FE] hover:bg-[#A368FE] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <ChevronLeft className="w-5 h-5" strokeWidth={2.5}/>
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={isTransitioning}
                                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:border-[#A368FE] hover:bg-[#A368FE] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <ChevronRight className="w-5 h-5" strokeWidth={2.5}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectCarousel;