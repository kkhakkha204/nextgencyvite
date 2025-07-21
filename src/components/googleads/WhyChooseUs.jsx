import React from 'react';
import {Link} from "react-router-dom";
import {ArrowUpRight} from "lucide-react";

const WhyChooseUs = () => {
    return (
        <section className="pt-[60px] lg:pt-[90px] bg-white">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h2 className="text-[26px] md:text-[32px] font-archivo font-bold leading-tight">
                        Vì sao bạn nên chọn<br />
                        <span className="bg-gradient-to-r from-black to-[#c08dfe] bg-clip-text text-transparent font-archivo text-[36px] md:text-[50px] lg:text-[60px] uppercase">
              Nextgency?
            </span>
                    </h2>
                    <p className="hidden lg:block text-black text-[15px] lg:text-[18px] max-w-lg mx-auto">
                        Nextgency là đơn vị uy tín với 3 năm kinh nghiệm – đồng hành cùng hàng trăm doanh nghiệp nâng tầm thương hiệu số.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-2 bg-gray-50 rounded-2xl">
                    {/* Cột A (40%) */}
                    <div className="lg:col-span-2 bg-black rounded-lg px-6 pt-6 text-white lg:h-[500px]">
                        {/* Row A (45%) */}
                        <div className="mb-6 lg:mb-8 lg:h-[20%] flex flex-col justify-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Cột mô tả */}
                                <div className="flex flex-col justify-center">
                                    <p className="text-white text-[13px] lg:text-[15px]">
                                        Chiến lược quảng cáo Google đa kênh, nắm rõ hành trình khách hàng trong chiến dịch.
                                    </p>
                                </div>

                                {/* Cột badges */}
                                <div className="flex flex-wrap gap-3 items-center justify-center">
                                    <div className="bg-gradient-to-r from-[#1a4498] via-black to-black text-white px-3 py-2 rounded-full text-[11px] lg:text-[13px] font-medium transform -rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-300 ease-out cursor-pointer hover:shadow-lg hover:shadow-cyan-500/25">
                                        Nhiệt tình.
                                    </div>
                                    <div className="bg-gradient-to-r from-black via-black to-[#c08dfe] text-white px-3 py-2 rounded-full text-[11px] lg:text-[13px] font-medium transform rotate-2 hover:rotate-0 hover:scale-110 transition-all duration-300 ease-out cursor-pointer hover:shadow-lg hover:shadow-purple-500/25">
                                        Trẻ trung.
                                    </div>
                                    <div className="bg-gradient-to-r from-[#1a4498] via-black to-[#c08dfe] text-white px-3 py-2 rounded-full text-[11px] lg:text-[13px] font-medium transform -rotate-1 hover:rotate-0 hover:scale-110 transition-all duration-300 ease-out cursor-pointer hover:shadow-lg hover:shadow-indigo-500/25">
                                        Giàu kinh nghiệm.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row B (55%) - Ảnh nhân sự */}
                        <div className="h-[80%] flex lg:pb-8">
                            <div className="w-full h-56 md:h-full pb-6 overflow-hidden">
                                <img
                                    src="/assets/images/whychooseus.webp"
                                    alt="Đội ngũ chuyên gia Nextgency"
                                    className="w-full h-full rounded-2xl object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Cột B (60%) */}
                    <div className="lg:col-span-3 space-y-3 lg:h-[500px]">
                        {/* Row A (50%) */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:h-[245px]">
                            {/* Cột 60% */}
                            <div className="md:col-span-3 rounded-lg p-6 bg-white relative overflow-hidden h-full">
                                <h3 className="text-[15px] lg:text-[18px] font-medium mb-1 text-black">
                                    Kinh nghiệm 3+ năm.
                                </h3>
                                <p className="text-[13px] lg:text-[15px] text-gray-700">
                                    Tối ưu theo từ khóa – hành vi – nguồn đơn, không chỉ dừng ở lượt hiển thị.
                                </p>
                                <div className="absolute bottom-2 right-2 lg:bottom-6 lg:right-6">
                                    <svg className="w-11+ h-11 lg:w-20 lg:h-20 text-black opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path fill="black" stroke="none" d="M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" d="M9 12l2 2 4-4"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Cột 40% */}
                            <div className="md:col-span-2 bg-gradient-to-tl from-[#1a4498] to-black rounded-lg p-6 flex flex-col h-full">
                                <h3 className="text-[15px] lg:text-[18px] font-medium mb-1 text-white">
                                    Tối ưu landing page.
                                </h3>
                                <p className="text-[13px] lg:text-[15px] text-gray-300 ">
                                    Tối ưu landing page – cá nhân hóa trải nghiệm người dùng (UX/UI).
                                </p>
                            </div>
                        </div>

                        {/* Row B (50%) */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:h-[245px]">
                            {/* Cột 40% */}
                            <div className="md:col-span-2 border-2 bg-white border-black rounded-lg p-6 flex flex-col h-full">
                                <h3 className="text-[15px] lg:text-[18px] font-medium mb-1 text-black">
                                    Hỗ trợ 24/7.
                                </h3>
                                <p className="text-[13px] lg:text-[15px] text-gray-700">
                                    Đồng hành toàn diện – báo cáo rõ ràng – điều chỉnh chiến dịch theo mục tiêu kinh doanh.
                                </p>
                            </div>

                            {/* Cột 60% */}
                            <div className="md:col-span-3 bg-black rounded-lg p-6 flex flex-col justify-center items-center text-center text-white h-full">
                                <p className="text-gray-100 text-[13px] lg:text-[15px] -mb-1">
                                    Được tin tưởng bởi
                                </p>
                                <div className="text-[32px] lg:text-[50px] font-semibold bg-[#c08dfe] bg-clip-text text-transparent">
                                    100+
                                </div>
                                <p className="text-gray-100 text-[13px] lg:text-[15px] -mt-1">
                                    Doanh nghiệp
                                </p>
                            </div>
                        </div>
                    </div>
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

export default WhyChooseUs;