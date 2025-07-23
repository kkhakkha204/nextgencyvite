import React from 'react';
import {Check, Star, Crown, ArrowRight} from 'lucide-react';

const WebsitePackages = () => {
    const basicFeatures = [
        "Giao diện web cơ bản, dựng trong 2–3 ngày",
        "Miễn phí tên miền .com",
        "Tặng Hosting SSD",
        "Thiết kế chuẩn SEO, tối ưu tốc độ tải trang",
        "Responsive – tương thích mọi thiết bị",
        "Tích hợp live chat, Messenger, Zalo",
        "Cài sẵn plugin cơ bản và SSL",
        "Hỗ trợ xử lý sự cố (có thu phí 1 số hạng mục nếu phát sinh ngoài hợp đồng)",
        "Tư vấn quảng cáo đa nền tảng (Meta, Google, TikTok)"
    ];

    const standardFeatures = [
        "Thiết kế giao diện trung bình hoặc theo yêu cầu",
        "Tặng tên miền .com hoặc .net",
        "Hosting SSD lưu trữ tốc độ cao",
        "Dựng website trong 3–7 ngày",
        "Thiết kế chuẩn SEO, UX/UI, tối ưu tốc độ tải trang",
        "Tương thích mọi thiết bị",
        "Tặng 5–10 bài viết nội dung cơ bản (chuẩn SEO)",
        "Tích hợp live chat, Messenger, Zalo",
        "Tư vấn chiến dịch quảng cáo Meta, Google, TikTok",
        "Tặng plugin, chứng chỉ SSL",
        "Hỗ trợ kỹ thuật (có thu phí 1 số hạng mục nếu phát sinh ngoài hợp đồng)"
    ];

    const advancedFeatures = [
        "Thiết kế giao diện website cao cấp",
        "Tặng tên miền .com, .net",
        "Hosting SSD lưu trữ tốc độ cao",
        "Dựng website 7–10 ngày",
        "Tặng 20 bài viết chuẩn SEO",
        "Cấu hình đầy đủ: tracking đa kênh, chuyển đổi động, đồng bộ danh mục sản phẩm",
        "Tối ưu tốc độ – chuẩn mobile",
        "Tư vấn và đồng hành chạy Ads đa nền tảng",
        "Cấp tài khoản TikTok Ads miễn phí",
        "Miễn phí thông báo website với Bộ Công Thương",
        "Tặng full plugin, chứng chỉ SSL",
        "Hỗ trợ kỹ thuật miễn phí trọn gói"
    ];

    return (
        <section className="py-[60px] lg:py-[90px] relative">
            <div className="md:max-w-[500px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center  mb-4 lg:mb-8">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black leading-tight mb-1">
                        Các gói xây dựng website
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black">
                        3 gói chính: Cơ bản, Tiêu chuẩn & Nâng cao
                    </p>
                </div>

                {/* Packages */}
                <div className="grid lg:grid-cols-3 gap-6 bg-gray-50 p-2 rounded-2xl">
                    {/* Gói Cơ Bản */}
                    <div className="bg-white border-2 border-white rounded-lg p-8 neu-shadow-inset-xs transition-all duration-300 relative flex flex-col justify-between">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#c08dfe]/35 to-transparent rounded-full blur-xl"></div>
                        <div>
                            <div className="mb-6 pb-2 border-b border-black">
                                <h3 className="text-[16px] lg:text-[20px] font-medium text-black">
                                    Gói website cơ bản
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
                            <div className="bg-[#1a4498] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-current" />
                                <span>Phổ Biến</span>
                            </div>
                        </div>

                        <div>
                            <div className="mb-4 pb-2 border-b border-[#1a4498]">
                                <h3 className="text-[16px] lg:text-[20px] font-medium text-black">
                                    Gói website tiêu chuẩn
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
                            <button className="relative flex items-center space-x-3 px-16 py-4 bg-[#1a4498] text-[15px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#0b2f8a]/40 hover:scale-105 group">
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
                                    Gói website nâng cao
                                </h3>
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
        </section>
    );
};

export default WebsitePackages;