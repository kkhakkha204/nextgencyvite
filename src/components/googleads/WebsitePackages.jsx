import React from 'react';
import {Check, Star, Crown, ArrowRight} from 'lucide-react';

const WebsitePackages = () => {
    const basicFeatures = [
        "Setup tài khoản chuẩn theo cấu trúc Google đề xuất",
        "Cài đặt và theo dõi chuyển đổi",
        "Cài đặt và theo dõi các chỉ số đã cam kết (CPC, CTR, Conversion...)",
        "Đề xuất phương án tối ưu định kỳ (theo tuần hoặc theo tháng)",
        "Hệ thống báo cáo hiệu suất theo chu kỳ",
        "Nextgency hỗ trợ review tài khoản định kỳ",
        "Được hỗ trợ tư vấn riêng nếu cần mở rộng thêm chiến dịch"
    ];

    const standardFeatures = [
        "Setup tài khoản chuẩn từ đầu hoặc cải tiến tài khoản cũ",
        "Cài đặt và theo dõi chuyển đổi (Google Ads Conversion, GA4, GTM…)",
        "Theo dõi và tối ưu các chỉ số đã cam kết (Click, CPC, ROAS, v.v.)",
        "Đề xuất và triển khai chiến dịch phù hợp từng ngành nghề",
        "Báo cáo định kỳ (tuần/tháng), giải trình hiệu quả, khuyến nghị mở rộng",
        "Hệ thống báo cáo tự động hóa qua Data Studio hoặc Google Sheet",
        "Hỗ trợ xây dựng landing page, nội dung, tư vấn funnel chuyển đổi",
        "Được support riêng từ Google thông qua hệ thống của Nextgency"
    ];

    const advancedFeatures = [
        "Cung cấp tài khoản Google Ads Invoice",
        "Nextgency tạo tài khoản và gửi lại cho khách hàng sử dụng",
        "Hướng dẫn kết nối tài sản, phân quyền tài khoản",
        "Được hỗ trợ riêng từ Google thông qua hệ thống Nextgency",
        "Theo dõi thanh toán, hỗ trợ bảo vệ tài khoản, xử lý sự cố",
        "Hỗ trợ kết nối với MCC hoặc các nền tảng kỹ thuật liên quan",
    ];

    return (
        <section className="pt-[60px] lg:pt-[90px]">
            <div className="md:max-w-[500px] lg:max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-semibold text-black mb-1">
                        Các gói dịch vụ
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black max-w-2xl mx-auto leading-relaxed">
                        3 gói chính: Quản trị tài khoản; Trọn gói vận hành & Thuê tài khoản
                    </p>
                </div>

                {/* Packages */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Gói Cơ Bản */}
                    <div className="bg-white border-2 border-black rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between">
                        <div>
                            <div className="mb-6 pb-2 border-b-2 border-black">
                                <h3 className="text-[18px] lg:text-[24px] font-archivo font-medium text-black">
                                    Gói 1
                                    Quản trị tài khoản
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
                                    Gói 2
                                    Trọn gói vận hành
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
                                    Gói 3
                                    Thuê tài khoản
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