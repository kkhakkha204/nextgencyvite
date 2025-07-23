import React from 'react';
import {Link} from "react-router-dom";
import {ArrowUpRight} from "lucide-react";

const AdvertisingFormsSection = () => {
    const advertisingForms = [
        {
            id: 1,
            title: "Quảng cáo tìm kiếm",
            description: "(Google Search)",
            image: "/assets/images/googleads/ggsearch.webp",
            bgColor: "bg-[#c08dfe]"
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
            bgColor: "bg-[#c08dfe]"
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
            bgColor: "bg-[#c08dfe]"
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
            bgColor: "bg-[#c08dfe]"
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
            bgColor: "bg-[#c08dfe]"
        }
    ];

    return (
        <section className="bg-white py-[60px] lg:py-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black mb-1">
                        9 Hình thức quảng cáo
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black max-w-3xl mx-auto">
                        Mỗi gói sẽ được triển khai 9 hình thức quảng cáo của Google theo yêu cầu từ doanh nghiệp
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 px-11 md:px-0">
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
                            <div className="p-4 h-full flex flex-col">
                                {/* Image Container - Smaller on mobile */}
                                <div className="mt-8 lg:mt-0 p-2 lg:p-4 overflow-hidden flex-1">
                                    <img
                                        src={form.image}
                                        alt={form.title}
                                        className="w-full h-full object-contain max-h-[160px] lg:max-h-none mx-auto transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-shrink-0 lg:px-0">
                                    <h3 className="text-center text-[15px] lg:text-[18px] font-medium text-white mb-0.5 transition-all duration-300">
                                        {form.title}
                                    </h3>
                                    <p className="text-center text-gray-100 text-[14px] lg:text-[16px] transition-all duration-300">
                                        {form.description}
                                    </p>
                                </div>
                            </div>

                            {/* Subtle gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <p className="text-black mb-4 text-[15px] lg:text-[18px] transition-colors duration-300">
                        Liên hệ ngay để nhận tư vấn và báo giá.
                    </p>
                    {/* CTA Button */}
                    <div className="flex items-center justify-center space-x-4">
                        <Link
                            to="/contact"
                            className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-black text-[15px] sm:text-[16px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group"

                        >
        <span className="">
            Tư vấn ngay
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
        </section>
    );
};

export default AdvertisingFormsSection;