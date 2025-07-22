import React from 'react';
import {Link} from "react-router-dom";
import {ArrowUpRight} from "lucide-react";

const Hero = () => {
    return (
        <section className="bg-white py-[60px] lg:py-[90px] relative overflow-hidden">
            {/* Top Left Mesh Gradient Circle */}
            <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 lg:-top-40 lg:-left-40 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 ">
                <div className="w-full h-full rounded-full bg-gradient-radial from-[#1a4498] via-[#7c5fb8] to-[#c08dfe] blur-xl animate-pulse"
                     style={{
                         background: 'radial-gradient(circle, #1a4498 0%, #7c5fb8 40%, #c08dfe 70%, transparent 100%)',
                         animationDuration: '4s'
                     }}>
                </div>
            </div>

            {/* Bottom Right Mesh Gradient Circle */}
            <div className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 lg:-bottom-40 lg:-right-40 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 opacity-25 lg:opacity-15">
                <div className="w-full h-full rounded-full bg-gradient-radial from-[#c08dfe] via-[#7c5fb8] to-[#1a4498] blur-2xl animate-pulse"
                     style={{
                         background: 'radial-gradient(circle, #c08dfe 0%, #7c5fb8 40%, #1a4498 70%, transparent 100%)',
                         animationDelay: '2s',
                         animationDuration: '4s'
                     }}>
                </div>
            </div>

            <div className="relative md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 items-center">
                    {/* Content Column - 60% */}
                    <div className="lg:col-span-3 space-y-4 mb-4 lg:mb-0">
                        {/* Title Section */}
                        <div className="space-y-2">
                            <h1 className="text-[32px] md:text-[40px] lg:text-[60px] font-archivo font-bold bg-black  bg-clip-text text-transparent leading-none">
                                AUTOMATION
                            </h1>
                            <div className="flex items-center gap-4">
                                <h1 className="text-[32px] md:text-[40px] lg:text-[60px] font-archivo font-bold bg-gradient-to-r from-black to-[#c08dfe] bg-clip-text text-transparent leading-none">
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
                                Muốn nhân bản năng suất, giảm thủ công, tăng trải nghiệm? Câu trả lời nằm ở <span className="text-[#c08dfe]">Automation và AI.</span> Nextgency giúp doanh nghiệp chuyển mình thông minh hóa quy trình bằng các giải pháp:
                            </p>

                            {/* Bullet Points */}
                            <div className="">
                                <div className="flex items-start space-x-2">
                                    <div className="w-1.5 h-1.5 bg-[#c08dfe] rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-[13px] lg:text-[16px] text-gray-700">
                                        Tự động hoá quy trình nội bộ & marketing bằng n8n.
                                    </p>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <div className="w-1.5 h-1.5 bg-[#c08dfe] rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-[13px] lg:text-[16px] text-gray-700">
                                        Xây dựng AI Agent: Chatbot thông minh, tư vấn DISC, tạo nội dung.
                                    </p>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <div className="w-1.5 h-1.5 bg-[#c08dfe] rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-[13px] lg:text-[16px] text-gray-700">
                                        Kết nối các nền tảng: Facebook, Zalo, Website, Email, CRM.
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