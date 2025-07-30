import React from 'react';
import {Check, Star, Crown, ArrowRight} from 'lucide-react';

const WebsitePackages = () => {
    const basicFeatures = [
        "Tư vấn định hướng chiến lược thương hiệu ban đầu",
        "Thiết lập & chăm sóc Fanpage + Zalo OA",
        "12 bài viết/tháng (gồm nội dung + thiết kế ảnh)",
        "1 landing page cơ bản hoặc tối ưu website hiện có",
        "Setup & theo dõi quảng cáo Facebook Ads ngân sách nhỏ",
        "Báo cáo kết quả theo từng giai đoạn & đề xuất các phương án tiếp theo "
    ];

    const standardFeatures = [
        "Tư vấn mô hình truyền thông & phễu marketing phù hợp",
        "Quản lý Fanpage, Website, Zalo OA, TikTok",
        "20–25 nội dung/tháng (bài viết + thiết kế + clip ngắn)",
        "Thiết kế & triển khai 1–2 landing page phục vụ chuyển đổi",
        "Triển khai quảng cáo Facebook + Google (hoặc TikTok)",
        "Cài đặt tracking & đo lường (Pixel, GA4, GTM)",
        "Báo cáo kết quả theo từng giai đoạn & đề xuất các phương án tiếp theo"
    ];

    const advancedFeatures = [
        "Tư vấn chiến lược truyền thông toàn diện theo mục tiêu kinh doanh",
        "Xây dựng bộ nhận diện thương hiệu đa kênh",
        "Quản trị toàn bộ hệ sinh thái: Fanpage, Website, TikTok, Zalo, YouTube",
        "30+ nội dung/tháng: bài viết, ảnh, video, clip ngắn chuyên sâu",
        "Thiết lập và tối ưu hệ thống automation + CRM (nếu có)",
        "Triển khai chiến dịch Ads đa nền tảng: Facebook – Google – TikTok – Zalo",
        "Báo cáo theo tuần, đánh giá hiệu quả từng kênh, đề xuất mở rộng chiến dịch",
        "Đội ngũ cố vấn đồng hành riêng, họp 1–1 cùng ban lãnh đạo"
    ];

    return (
        <section className="py-[60px] lg:py-[90px] relative">
            <div className="md:max-w-[500px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center lg:text-left mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black leading-[1.45] uppercase mb-1">
                        Các gói dịch vụ
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black">
                        3 gói chính: Cơ bản, Tiêu chuẩn & Nâng cao
                    </p>
                </div>

                {/* Packages */}
                <div className=" bg-gray-50 p-2 rounded-2xl">
                    <div className="grid lg:grid-cols-3 gap-6 bg-white p-2 rounded-xl shadow-md">
                    {/* Gói Cơ Bản */}
                    <div className="bg-white border-2 border-white rounded-lg p-8 neu-shadow-inset-xs transition-all duration-300 relative flex flex-col justify-between">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#c08dfe]/35 to-transparent rounded-full blur-xl"></div>
                        <div>
                            <div className="mb-6 pb-2 border-b border-black">
                                <h3 className="text-[16px] lg:text-[20px] font-medium text-black">
                                    Gói dịch vụ cơ bản
                                </h3>
                            </div>

                            <div className="space-y-4 mb-8">
                                {basicFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-[#c08dfe] rounded-full flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-700 text-[13px] lg:text-[14px] text-justify">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center pt-2">
                            <button className="relative flex items-center space-x-3 px-16 py-4 bg-black text-[15px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group">
                                <span>Nhận tư vấn</span>
                            </button>
                        </div>
                    </div>

                    {/* Gói Tiêu Chuẩn */}
                    <div className="bg-white border-2 border-[#1a4498] rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between">
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
                                    Gói dịch vụ Tiêu Chuẩn
                                </h3>
                            </div>

                            <div className="space-y-4 mb-8">
                                {standardFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-[#1a4498] rounded-full flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-700 text-[13px] lg:text-[14px] text-justify">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center pt-2">
                            <button className="relative flex items-center space-x-3 px-16 py-4 bg-gradient-to-r from-[#1a4498] to-black text-[15px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#0b2f8a]/40 hover:scale-105 group">
                                <span>Nhận tư vấn</span>
                            </button>
                        </div>
                    </div>

                    {/* Gói Nâng Cao */}
                    <div className="bg-black border-2 border-black rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between">
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
                                    Gói dịch vụ Nâng Cao
                                </h3>
                            </div>

                            {/* Subtitle */}
                            <div className="mb-6">
                                <p className="text-white text-[14px] lg:text-[16px] font-medium text-justify">
                                    Bao gồm tất cả trong gói cơ bản và tiêu chuẩn, cộng thêm:
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {advancedFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-[#c08dfe] rounded-full flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-300 text-[13px] lg:text-[14px] text-justify">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center pt-2">
                            <button className="relative flex items-center space-x-3 px-16 py-4 bg-white text-[15px] text-black rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group">
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