import React from 'react';

const AdvertisingFormsSection = () => {
    const advertisingForms = [
        {
            id: 1,
            title: "Quảng cáo tìm kiếm",
            description: "(Google Search)",
            image: "/assets/images/googleads/ggsearch.webp",
            bgColor: "bg-[#5534bb]"
        },
        {
            id: 2,
            title: "Quảng cáo hiển thị",
            description: "(Google Display)",
            image: "/assets/images/googleads/ggdisplay.webp",
            bgColor: "bg-black"
        },
        {
            id: 3,
            title: "Quảng cáo video",
            description: "(YouTube Ads)",
            image: "/assets/images/googleads/ggvideo.webp",
            bgColor: "bg-[#5534bb]"
        },
        {
            id: 4,
            title: "Quảng cáo Performance Max",
            description: "(Google Max)",
            image: "/assets/images/googleads/ggmax.webp",
            bgColor: "bg-black"
        },
        {
            id: 5,
            title: "Quảng cáo địa phương",
            description: "(Google Local)",
            image: "/assets/images/googleads/gglocal.webp",
            bgColor: "bg-[#5534bb]"
        },
        {
            id: 6,
            title: "Quảng cáo Shopping",
            description: "(Google Shopping)",
            image: "/assets/images/googleads/ggshopping.webp",
            bgColor: "bg-black"
        },
        {
            id: 7,
            title: "Quảng cáo Discovery",
            description: "(Google Discovery)",
            image: "/assets/images/googleads/ggdiscovery.webp",
            bgColor: "bg-[#5534bb]"
        },
        {
            id: 8,
            title: "Quảng cáo Smart",
            description: "(Google Smart)",
            image: "/assets/images/googleads/ggsmart.webp",
            bgColor: "bg-black"
        },
        {
            id: 9,
            title: "Quảng cáo App",
            description: "(Google App)",
            image: "/assets/images/googleads/ggapp.webp",
            bgColor: "bg-[#5534bb]"
        }
    ];

    return (
        <section className="bg-white pt-[60px] lg:pt-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1000px] mx-auto px-6 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-semibold text-black mb-1">
                        9 Hình thức quảng cáo
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black max-w-3xl mx-auto">
                        Mỗi gói sẽ được triển khai 9 hình thức quảng cáo của Google theo yêu cầu từ doanh nghiệp
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {advertisingForms.map((form) => (
                        <div
                            key={form.id}
                            className={`
                ${form.bgColor} 
                overflow-hidden cursor-pointer
                transform transition-all duration-300 ease-out
                hover:scale-105 
                group relative
                aspect-square
              `}
                        >
                            {/* Card Content */}
                            <div className="p-2 lg:p-4 h-full flex flex-col">
                                {/* Image Container - Smaller on mobile */}
                                <div className="mt-8 lg:mt-0 p-2 lg:p-4 overflow-hidden flex-1">
                                    <img
                                        src={form.image}
                                        alt={form.title}
                                        className="w-full h-full object-contain max-h-[180px] lg:max-h-none mx-auto transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-shrink-0 px-2 lg:px-0">
                                    <h3 className="text-center text-[14px] lg:text-[20px] font-medium text-white mb-1 group-hover:text-opacity-90 transition-all duration-300">
                                        {form.title}
                                    </h3>
                                    <p className="text-center text-gray-100 text-[12px] lg:text-[16px] leading-relaxed group-hover:text-opacity-90 transition-all duration-300">
                                        {form.description}
                                    </p>
                                </div>
                            </div>

                            {/* Subtle gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvertisingFormsSection;