import React from 'react';
import {Check, Star, Crown, ArrowRight} from 'lucide-react';

const WebsitePackages = () => {
    const basicFeatures = [
        "Phân tích sản phẩm, ngành hàng và mục tiêu kinh doanh",
        "Lựa chọn định dạng TikTok Ads phù hợp (Traffic, Lead Form, Conversion)",
        "Thiết lập tài khoản & tracking",
        "Lên cấu trúc chiến dịch theo mô hình phễu",
        "Cài đặt nhóm quảng cáo, đối tượng, ngân sách, lịch trình",
        "Lựa chọn content có sẵn hoặc đề xuất nội dung mới",
        "Theo dõi chỉ số & tối ưu hiệu suất",
        "Báo cáo và đề xuất phương án cải tiến chiến dịch"
    ];

    const standardFeatures = [
        "Rà soát ngành hàng, danh mục sản phẩm nổi bật",
        "Xác định thời gian vàng và hành vi mua hàng của khách trên TikTok",
        "Kết nối TikTok Shop với hệ thống quảng cáo",
        "Gắn liên kết sản phẩm trong video/ads",
        "Lên chiến dịch Add to Cart / Product View / Shop Follow",
        "Tối ưu hóa tuyến nội dung kênh",
        "Theo dõi chỉ số & tối ưu hiệu suất",
        "Báo cáo và đề xuất phương án cải tiến chiến dịch"
    ];

    const advancedFeatures = [
        "Đăng ký chiến dịch quảng cáo dạng Live với TikTok",
        "Đảm bảo duyệt nội dung, tránh vi phạm chính sách",
        "Tư vấn kịch bản livestream thu hút (minigame, giới thiệu sản phẩm, feedback...)",
        "Tối ưu không gian, lời thoại, call-to-action",
        "Thiết lập quảng cáo dẫn về livestream theo thời gian thực",
        "Target tệp khách theo độ tuổi, hành vi, ngành hàng",
        "Cập nhật real-time số lượt xem, thời gian xem trung bình",
        "Điều chỉnh nhóm quảng cáo hoặc content giữa phiên (nếu cần)",
        "Tổng kết hiệu quả sau phiên livestream"
    ];

    return (
        <section className="pt-[60px] lg:pt-[90px]">
            <div className="md:max-w-[500px] lg:max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-semibold text-black mb-1">
                        Các gói dịch vụ
                    </h2>
                </div>

                {/* Packages */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Gói Cơ Bản */}
                    <div className="bg-white border-2 border-black rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between">
                        <div>
                            <div className="mb-6 pb-2 border-b-2 border-black">
                                <h3 className="text-[18px] lg:text-[24px] font-archivo font-medium text-black">
                                    Gói quảng cáo chuyển đổi Website/ Landing page
                                </h3>
                            </div>

                            <div className="space-y-4 mb-8">
                                {basicFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-[#2faeec] rounded-full flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-800 text-[13px] lg:text-[14px] leading-relaxed">
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
                    <div className="bg-white border-2 border-[#2faeec] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between">
                        {/* Popular Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-[#2faeec] to-[#1e90ff] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-current" />
                                <span>Phổ Biến</span>
                            </div>
                        </div>

                        <div>
                            <div className="mb-6 pb-2 border-b-2 border-[#2faeec]">
                                <h3 className="text-[18px] lg:text-[24px] font-archivo font-medium text-black">
                                    Gói quảng cáo Tiktok (Chuyển đổi video)
                                </h3>
                            </div>



                            <div className="space-y-4 mb-8">
                                {standardFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-[#2faeec] rounded-full flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-800 text-[13px] lg:text-[14px] leading-relaxed">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center pt-2">
                            <button className="relative flex items-center space-x-3 px-16 py-4 bg-[#2faeec] text-[15px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-300 hover:scale-105 group">
                                <span>Nhận tư vấn</span>
                            </button>
                        </div>
                    </div>

                    {/* Gói Nâng Cao */}
                    <div className="bg-black border-2 border-black rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between">
                        {/* Premium Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-[#5534bb] via-black to-[#5534bb] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                                <Crown className="w-4 h-4 fill-current" />
                                <span>Premium</span>
                            </div>
                        </div>

                        <div>
                            <div className="mb-6 pb-2 border-b-2 border-white">
                                <h3 className="text-[18px] lg:text-[24px] font-archivo font-medium text-white">
                                    Gói quảng cáo Livestream Tiktok
                                </h3>
                            </div>


                            <div className="space-y-4 mb-8">
                                {advancedFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-[#5534bb] rounded-full flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-100 text-[13px] lg:text-[14px] leading-relaxed">
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