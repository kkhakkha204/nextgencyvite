import React from 'react';
import {Check, Star, Crown, ArrowRight} from 'lucide-react';

const WebsitePackages = () => {
    const freeFeatures = [
        "10 bài AI/tháng",
        "1 báo cáo Social/tháng (chỉ Facebook)",
        "1 nhân viên",
        "1 biz"
    ];

    const starterFeatures = [
        "50 bài AI/tháng",
        "20 báo cáo Social/tháng (chỉ Facebook)",
        "2 nhân viên",
        "1 biz"
    ];

    const proFeatures = [
        "250 bài AI/tháng",
        "50 báo cáo Social/tháng (chỉ Facebook)",
        "5 nhân viên",
        "1 biz",
        "Duyệt bài",
        "Giọng thương hiệu",
        "API/Webhook",
        "Kiểm chứng dữ kiện",
        "Nhân hóa văn phong"
    ];

    const agencyFeatures = [
        "1.000 bài AI/tháng",
        "100 báo cáo Social/tháng (chỉ Facebook)",
        "20 nhân viên",
        "10 biz",
        "Duyệt bài",
        "Giọng thương hiệu",
        "API/Webhook",
        "Kiểm chứng dữ kiện",
        "Nhân hóa văn phong",
        "White-label + báo cáo khách"
    ];

    const enterpriseFeatures = [
        "∞ bài AI/tháng",
        "∞ báo cáo Social/tháng (chỉ Facebook)",
        "∞ nhân viên",
        "∞ biz",
        "Duyệt bài",
        "Giọng thương hiệu",
        "API/Webhook",
        "Kiểm chứng dữ kiện",
        "Nhân hóa văn phong",
        "White-label + báo cáo khách"
    ];


    const openRegisterLink = () => {
        window.open('https://seo.eventhub.vn/login', '_blank', 'noopener,noreferrer');
    };
    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('lilcontact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className="py-[60px] lg:py-[90px] relative">
            <div className="md:max-w-[900px] lg:max-w-[1800px] mx-auto px-4 sm:px-4 lg:px-8">
                {/* Header */}
                <div className="text-center lg:text-center mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black uppercase leading-[1.45] mb-1">
                        Các gói dịch vụ
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black">
                        5 gói chính: Free, Starter, Pro, Agency & Enterprise
                    </p>
                </div>

                {/* Packages */}
                <div className=" bg-gray-50 p-2 rounded-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 bg-white p-2 rounded-xl shadow-md">
                    {/* Gói Cơ Bản */}
                    <div className="bg-white border-2 border-white rounded-lg p-5 xl:p-8 neu-shadow-inset-xs transition-all duration-300 relative flex flex-col justify-between">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#c08dfe]/35 to-transparent rounded-full blur-xl"></div>
                        <div>
                            <div className="mb-6 pb-2 border-b border-black">
                                <h3 className="text-[16px] lg:text-[20px] font-medium text-black">
                                    Free
                                </h3>
                                <span className="text-[20px] lg:text-[24px] font-bold text-black">
                                    Miễn phí
                                </span>
                            </div>

                            <div className="space-y-4 mb-8">
                                {freeFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-[#c08dfe] rounded-full flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-700 text-[13px] lg:text-[14px] text-left">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center pt-2">
                            <button
                                onClick={openRegisterLink}
                                className="relative flex items-center space-x-3 px-6 xl:px-16 py-3 xl:py-4 bg-black text-[15px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group">

                                <span>Đăng ký ngay</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-white rounded-lg p-5 xl:p-8 neu-shadow-inset-xs transition-all duration-300 relative flex flex-col justify-between">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#c08dfe]/35 to-transparent rounded-full blur-xl"></div>
                        <div>
                            <div className="mb-6 pb-2 border-b border-black">
                                <h3 className="text-[16px] lg:text-[20px] font-medium text-black">
                                    Starter
                                </h3>
                                <span className="text-[20px] lg:text-[24px] font-bold text-black">
                                    199.000đ /tháng
                                </span>
                            </div>

                            <div className="space-y-4 mb-8">
                                {starterFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-[#c08dfe] rounded-full flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-700 text-[13px] lg:text-[14px] text-left">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center pt-2">
                            <button
                                onClick={openRegisterLink}
                                className="relative flex items-center space-x-3 px-6 xl:px-16 py-3 xl:py-4 bg-black text-[15px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group">

                                <span>Đăng ký ngay</span>
                            </button>
                        </div>
                    </div>

                    {/* Gói Tiêu Chuẩn */}
                    <div className="bg-white border-2 border-[#1a4498] rounded-lg p-5 xl:p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between">
                        {/* Decorative elements */}
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-[#1a4498]/35 to-transparent rounded-full blur-xl"></div>
                        {/* Popular Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-[#1a4498] to-black text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-current" />
                                <span>Phổ Biến</span>
                            </div>
                        </div>

                        <div>
                            <div className="mb-4 pb-2 border-b border-[#1a4498]">
                                 <h3 className="text-[16px] lg:text-[20px] font-medium text-black">
                                    Pro
                                </h3>
                                <span className="text-[20px] lg:text-[24px] font-bold text-black">
                                    699.000đ /tháng
                                </span>
                            </div>

                            <div className="space-y-4 mb-8">
                                {proFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-[#1a4498] rounded-full flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-700 text-[13px] lg:text-[14px] text-left">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center pt-2">
                            <button
                                onClick={openRegisterLink}
                                className="relative flex items-center space-x-3 px-6 xl:px-16 py-3 xl:py-4 bg-gradient-to-r from-[#1a4498] to-black text-[15px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#0b2f8a]/40 hover:scale-105 group">
                                <span>Đăng ký ngay</span>
                            </button>
                        </div>
                    </div>

                    {/* Gói Nâng Cao */}
                    <div className="bg-black border-2 border-black rounded-lg p-5 xl:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between">
                        {/* Premium Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-[#c08dfe] via-black to-[#c08dfe] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                                <Crown className="w-4 h-4 fill-current" />
                                <span>Premium</span>
                            </div>
                        </div>

                        <div>
                            <div className="mb-4 pb-2 border-b border-white">
                                <h3 className="text-[16px] lg:text-[20px] font-medium text-white">
                                    Agency
                                </h3>
                                <span className="text-[20px] lg:text-[24px] font-bold text-white">
                                    2.490.000đ 
                                </span>
                            </div>

                            <div className="space-y-4 mb-8">
                                {agencyFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-[#c08dfe] rounded-full flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-300 text-[13px] lg:text-[14px] text-left">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center pt-2">
                            <button
                                onClick={openRegisterLink}
                                className="relative flex items-center space-x-3 px-6 xl:px-16 py-3 xl:py-4 bg-white text-[15px] text-black rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group">
                                <span>Đăng ký ngay</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-white rounded-lg p-5 xl:p-8 neu-shadow-inset-xs transition-all duration-300 relative flex flex-col justify-between">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#c08dfe]/35 to-transparent rounded-full blur-xl"></div>
                        <div>
                            <div className="mb-6 pb-2 border-b border-black">
                                 <h3 className="text-[16px] lg:text-[20px] font-medium text-black">
                                    Enterprise
                                </h3>
                                <span className="text-[20px] lg:text-[24px] font-bold text-black">
                                    Liên hệ
                                </span>
                            </div>

                            <div className="space-y-4 mb-8">
                                {enterpriseFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-[#c08dfe] rounded-full flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-700 text-[13px] lg:text-[14px] text-left">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center pt-2">
                            <button
                                onClick={scrollToContact}
                                className="relative flex items-center space-x-3 px-6 xl:px-16 py-3 xl:py-4 bg-black text-[15px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group">

                                <span>Nhận tư vấn</span>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebsitePackages;