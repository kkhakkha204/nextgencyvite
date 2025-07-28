import React from 'react';

const InfiniteProjectSlider = () => {
    // Dữ liệu mẫu cho các dự án
    const projects = [
        {
            id: 1,
            image: "/assets/images/test.webp",
            title: "Digital Marketing Platform"
        },
        {
            id: 2,
            image: "/assets/images/test.webp",
            title: "E-commerce Solution"
        },
        {
            id: 3,
            image: "/assets/images/test.webp",
            title: "Corporate Website"
        },
        {
            id: 4,
            image: "/assets/images/test.webp",
            title: "Mobile Application"
        },
        {
            id: 5,
            image: "/assets/images/test.webp",
            title: "Data Analytics Dashboard"
        },
        {
            id: 6,
            image: "/assets/images/test.webp",
            title: "Brand Identity Design"
        }
    ];

    // Nhân đôi array để tạo hiệu ứng infinite
    const duplicatedProjects = [...projects, ...projects];

    return (
        <div className="w-full bg-black/90 overflow-hidden relative py-2">
            {/* Container với chiều cao responsive */}
            <div className="relative h-[160px] md:h-[260px] lg:h-[300px]">
                {/* Slider container */}
                <div className="flex h-full">
                    {/* Track với animation */}
                    <div className="flex animate-scroll-right">
                        {duplicatedProjects.map((project, index) => (
                            <div
                                key={`${project.id}-${index}`}
                                className="flex-shrink-0 px-2 h-full flex items-center"
                            >
                                {/* Project card */}
                                <div className="relative h-[160px] md:h-[260px] lg:h-[300px] w-[200px] sm:w-[280px] md:w-[360px] lg:w-[440px] group">
                                    {/* Image container với aspect ratio cố định */}
                                    <div className="relative h-full w-full overflow-hidden rounded-lg">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Overlay gradient subtle */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Styles cho animation */}
            <style jsx>{`
                @keyframes scrollRight {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .animate-scroll-right {
                    animation: scrollRight 70s linear infinite;
                }

                /* Điều chỉnh tốc độ cho mobile */
                @media (max-width: 640px) {
                    .animate-scroll-right {
                        animation-duration: 70s;
                    }
                }

                /* Smooth animation */
                .animate-scroll-right {
                    will-change: transform;
                }
            `}</style>
        </div>
    );
};

export default InfiniteProjectSlider;