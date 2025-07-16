import React from 'react';
import {ArrowRight, ArrowUpRight} from 'lucide-react';
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative min-h-[60%] lg:min-h-[1020px] flex items-center justify-center overflow-hidden">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                {/* Desktop Background */}
                <div className="hidden md:block absolute inset-0">
                    <img
                        src="/assets/images/crm/herodesktop.webp"
                        alt="Facebook Dataset & CRM - Desktop Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Mobile Background */}
                <div className="block md:hidden absolute inset-0">
                    <img
                        src="/assets/images/crm/herodesktop.webp"
                        alt="Facebook Dataset & CRM - Mobile Background"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 sm:px-6 lg:px-8">
                <div className="text-left space-y-6 py-20">
                    {/* Main Title */}
                    <h1 className="text-[24px] lg:text-[60px] font-archivo font-semibold text-black leading-tight uppercase">
                        <span className="block">Facebook<br/>Dataset & CRM</span>
                    </h1>

                    {/* Description */}
                    <div className="max-w-3xl">
                        <p className="text-[15px] lg:text-[18px] text-black leading-relaxed">
                            Trong thời đại dữ liệu là{' '}
                            <span className="text-black">"mỏ kim cương"</span>,
                            Nextgency giúp doanh nghiệp biến từng hành vi, từng tương tác thành đòn bẩy quảng cáo hiệu quả qua dịch vụ Facebook Dataset & CRM:
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
            </div>
        </section>
    );
};

export default Hero;