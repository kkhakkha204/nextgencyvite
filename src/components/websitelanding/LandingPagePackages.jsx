import React from 'react';
import {Check, Star, ArrowRight, ArrowUpRight} from 'lucide-react';
import {Link} from "react-router-dom";

const LandingPagePackages = () => {
    const basicFeatures = [
        "Thiết kế tùy biến theo yêu cầu",
        "Bàn giao đầy đủ source code",
        "Thời gian hoàn thành: 3–7 ngày làm việc",
        "Chỉnh sửa tối đa 3 lần",
        "Giao diện tương thích với các thiết bị: điện thoại, máy tính bảng, máy tính để bàn",
        "Tối ưu tốc độ tải trang từ 1 đến 2 giây",
        "Tối ưu điểm Google PageSpeed",
        "Hỗ trợ tài liệu sử dụng, tích hợp Livechat, Hotline, Facebook, Zalo",
        "Không bao gồm phần mềm chỉnh sửa thiết kế",
        "Nền tảng thiết kế: Ladipage"
    ];

    const advancedFeatures = [
        "Thiết kế tùy biến theo yêu cầu, đảm bảo nhận diện thương hiệu",
        "Bàn giao đầy đủ source code",
        "Thời gian hoàn thành: 3–5 ngày làm việc",
        "Chỉnh sửa tối đa 5 lần",
        "Giao diện tương thích với mọi thiết bị: điện thoại, máy tính bảng, máy tính để bàn",
        "Tối ưu tốc độ truy cập từ 1 đến 2 giây",
        "Tối ưu điểm Google Speed",
        "Tặng kèm 1GB lưu trữ (hosting), không giới hạn băng thông và số lượng truy cập",
        "Chủ động sao lưu tài nguyên",
        "Nền tảng thiết kế: Ladipage hoặc WordPress",
        "Tích hợp hơn 100 ứng dụng và công cụ: Countdown, Notify, Gallery, Gmail, Google Sheet, Facebook Pixel, Google Analytics, Google Ads,..."
    ];

    return (
        <section className="bg-white pt-[60px] lg:pt-[90px]">
            <div className="md:max-w-[500px] lg:max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-semibold text-black mb-1">
                        Gói xây dựng Landing Page
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black max-w-xl mx-auto leading-relaxed">
                        Chọn gói dịch vụ phù hợp để tạo ra landing page chuyên nghiệp,
                        tối ưu hóa chuyển đổi và phù hợp với mọi thiết bị
                    </p>
                </div>

                {/* Packages */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Gói Cơ Bản */}
                    <div className="bg-white border-2 border-black rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between">
                        <div>
                            <div className="mb-6 pb-2 border-b-2 border-black">
                                <h3 className="text-[20px] lg:text-[30px] font-archivo font-medium text-black">
                                    Gói Landing Page Cơ Bản
                                </h3>
                            </div>

                            <div className="space-y-4 mb-8">
                                {basicFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-[#2faeec] rounded-full flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-800 text-[13px] lg:text-[15px] leading-relaxed">
                      {feature}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center pt-2 space-x-4">
                            <Link
                                to="/contact"
                                className="relative flex items-center space-x-3 px-16 lg:px-24 py-4 bg-black text-[15px] sm:text-[16px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group"

                            >
        <span className="">
            Nhận tư vấn
        </span>

                            </Link>

                        </div>
                    </div>

                    {/* Gói Nâng Cao */}
                    <div className="bg-black border-2 border-black rounded-2xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between">
                        {/* Popular Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-[#5534bb] via-black to-[#5534bb] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-current" />
                                <span>Phổ Biến</span>
                            </div>
                        </div>

                        <div>
                            <div className="mb-6 pb-2 border-b-2 border-white">
                                <h3 className="text-[20px] lg:text-[30px] font-medium text-white">
                                    <span className="font-archivo">Gói Landing Page Nâng Cao</span>
                                </h3>
                            </div>

                            <div className="space-y-4 mb-8">
                                {advancedFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-[#5534bb] rounded-full flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-100 text-[13px] lg:text-[15px] leading-relaxed">
                      {feature}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center pt-2 space-x-4">
                            <Link
                                to="/contact"
                                className="relative flex items-center space-x-3 px-16 lg:px-24 py-4 bg-white text-[15px] sm:text-[16px] text-black rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group"

                            >
        <span className="">
            Nhận tư vấn
        </span>

                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingPagePackages;