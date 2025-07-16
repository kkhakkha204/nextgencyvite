import React from 'react';
import {Link} from "react-router-dom";
import {ArrowUpRight} from "lucide-react";

const Hero = () => {
    return (
        <section className="bg-white py-[60px] lg:py-[90px]">
            <div className="md:max-w-[650px] lg:max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 items-center">
                    {/* Content Column - 60% */}
                    <div className="md:col-span-3 space-y-4 mb-4 lg:mb-0">
                        {/* Title Section */}
                        <div className="space-y-2">
                            <h1 className="text-[24px] md:text-[40px] lg:text-[60px] font-archivo font-semibold bg-gradient-to-r from-black to-[#5534bb] bg-clip-text text-transparent leading-tight">
                                AUTOMATION
                            </h1>
                            <div className="flex items-center gap-4">
                                <h1 className="text-[24px] md:text-[40px] lg:text-[60px] font-archivo font-semibold bg-gradient-to-r from-black to-[#5534bb] bg-clip-text text-transparent leading-tight">
                                    AI & DATA
                                </h1>
                                {/* SVG Circles */}
                                <div className="flex-shrink-0">
                                    <svg
                                        width="94"
                                        height="51"
                                        viewBox="0 0 94 51"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-16 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12"
                                    >
                                        <circle
                                            cx="25.4404"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#E2DDFB"
                                            className="animate-pulse"
                                            style={{ animationDelay: '0s', animationDuration: '2s' }}
                                        />
                                        <circle
                                            cx="40.1005"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#C1B3F4"
                                            className="animate-pulse"
                                            style={{ animationDelay: '0.5s', animationDuration: '2s' }}
                                        />
                                        <circle
                                            cx="53.8994"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#9C84EA"
                                            className="animate-pulse"
                                            style={{ animationDelay: '1s', animationDuration: '2s' }}
                                        />
                                        <circle
                                            cx="68.5596"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#7A5BDC"
                                            className="animate-pulse"
                                            style={{ animationDelay: '1.5s', animationDuration: '2s' }}
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Divider Line */}
                        <div className="hidden lg:block w-72 h-0.5 bg-black"></div>

                        {/* Description */}
                        <div className="space-y-4">
                            <p className="text-[15px] lg:text-[18px] text-black leading-relaxed max-w-2xl">
                                Muốn nhân bản năng suất, giảm thủ công, tăng trải nghiệm? Câu trả lời nằm ở Automation và AI. Nextgency giúp doanh nghiệp chuyển mình thông minh hóa quy trình bằng các giải pháp.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center space-x-4">
                            <Link
                                to="/contact"
                                className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-black text-[15px] sm:text-[16px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group"

                            >
        <span className="">
            Nhận tư vấn
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

                    {/* Image Column - 40% */}
                    <div className="md:col-span-2">
                        <div className="relative">
                            <div className="aspect-[1/1] overflow-hidden rounded-xl bg-gray-100">
                                <img
                                    src="/assets/images/dataai/hero.webp"
                                    alt="AI & Automation Technology"
                                    className=" w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;