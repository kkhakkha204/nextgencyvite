import React from 'react';
import {ArrowRight, ArrowUpRight, Play} from 'lucide-react';
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <section className="py-[60px] lg:py-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8">

                {/* Row A - Hidden on mobile */}
                <div className="hidden lg:block">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img
                            src="/assets/images/tiktokads/hero.webp"
                            alt="Team collaboration"
                            className="w-full h-48 lg:h-96 object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                </div>

                {/* Row B - Main content */}
                <div className="py-4 lg:py-6">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 items-center">

                        {/* Column A - Content (40%) */}
                        <div className="md:col-span-2 space-y-6">
                            <div className="space-y-6">
                                <h1 className="text-[24px] md:text-[40px] lg:text-[60px] font-archivo font-semibold text-black uppercase leading-tight">
                                    Tiktok Ads
                                </h1>

                                <p className="text-[15px] lg:text-[18px] text-black leading-relaxed max-w-xl">
                                    Virus tuy nhỏ nhưng một khi đã lây lan thì sẽ tạo nên hiệu ứng khổng lồ, cũng như cách quảng cáo của anh chị viral trên nền tảng Tiktok để mang về doanh thu và độ nhận diện phủ khắp. Giải pháp từ dịch vụ Tiktok Ads của Nextgency:
                                </p>
                            </div>

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

                        {/* Column B - Images (60%) */}
                        <div className="md:col-span-3 grid grid-cols-10 gap-4 h-60 lg:h-[450px]">

                            {/* B1 - 60% column */}
                            <div className="col-span-6 relative">
                                <div className="h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                                    <img
                                        src="/assets/images/tiktokads/hero2.webp"
                                        alt="Modern workspace"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t rounded-lg from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>

                            {/* B2 - 40% column */}
                            <div className="col-span-4 relative">
                                <div className="h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                                    <img
                                        src="/assets/images/tiktokads/hero2.webp"
                                        alt="Innovation"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t rounded-lg  from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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