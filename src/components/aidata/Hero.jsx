import React from 'react';
import {Link} from "react-router-dom";
import {ArrowUpRight} from "lucide-react";

const Hero = () => {
    return (
        <section className="bg-white py-[60px] lg:py-[90px]">
            <div className="relative md:max-w-[700px] lg:max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 items-center">
                    {/* Content Column - 60% */}
                    <div className="lg:col-span-3 space-y-4 mb-4 lg:mb-0">
                        {/* Title Section */}
                        <div className="space-y-2">
                            <h1 className="text-[28px] md:text-[40px] lg:text-[60px] font-archivo font-bold bg-black  bg-clip-text text-transparent leading-none">
                                AUTOMATION
                            </h1>
                            <div className="flex items-center gap-4">
                                <h1 className="text-[28px] md:text-[40px] lg:text-[60px] font-archivo font-bold bg-gradient-to-r from-black to-[#c59efe] bg-clip-text text-transparent leading-none">
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
                                            fill="#f3e8ff"
                                            className="animate-pulse"
                                            style={{ animationDelay: '0s', animationDuration: '2s' }}
                                        />
                                        <circle
                                            cx="40.1005"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#e9d5ff"
                                            className="animate-pulse"
                                            style={{ animationDelay: '0.5s', animationDuration: '2s' }}
                                        />
                                        <circle
                                            cx="53.8994"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#d8b4fe"
                                            className="animate-pulse"
                                            style={{ animationDelay: '1s', animationDuration: '2s' }}
                                        />
                                        <circle
                                            cx="68.5596"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#c59efe"
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
                            <p className="text-[15px] lg:text-[18px] text-black text-justify max-w-xl">
                                Muốn nhân bản năng suất, giảm thủ công, tăng trải nghiệm? Câu trả lời nằm ở Automation và AI. Nextgency giúp doanh nghiệp chuyển mình thông minh hóa quy trình bằng các giải pháp:
                            </p>

                            {/* Bullet Points */}
                            <div className="">
                                <div className="flex items-start space-x-2">
                                    <div className="w-1.5 h-1.5 bg-[#c59efe] rounded-full mt-2.5 flex-shrink-0"></div>
                                    <p className="text-[13px] lg:text-[16px] text-black">
                                        Tự động hóa quy trình nghiệp vụ.
                                    </p>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <div className="w-1.5 h-1.5 bg-[#c59efe] rounded-full mt-2.5 flex-shrink-0"></div>
                                    <p className="text-[13px] lg:text-[16px] text-black">
                                        Phân tích dữ liệu thông minh.
                                    </p>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <div className="w-1.5 h-1.5 bg-[#c59efe] rounded-full mt-2.5 flex-shrink-0"></div>
                                    <p className="text-[13px] lg:text-[16px] text-black">
                                        Tích hợp AI vào doanh nghiệp.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center space-x-4">
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

                    {/* Image Column - 40% */}
                    <div className="lg:col-span-2">
                        <div className="relative">
                            <div className="aspect-[1/1] p-2 overflow-hidden rounded-2xl bg-gray-50">
                                <img
                                    src="/assets/images/dataai/hero.webp"
                                    alt="AI & Automation Technology"
                                    className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Top Right Floating Card */}
                            <div className="absolute -top-3 -right-3 bg-white rounded-xl p-2 shadow-xl border-2 border-white hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                <div className="flex items-center space-x-3">
                                    <div className=" rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-black" fill="#111111" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-[12px] font-medium text-black">AI Powered</div>
                                        <div className="text-[10px] text-gray-800">Smart Solutions</div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;