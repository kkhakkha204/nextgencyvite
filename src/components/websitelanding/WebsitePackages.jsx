import React from 'react';
import {Check, Star, Crown, ArrowRight} from 'lucide-react';

const WebsitePackages = () => {
    const basicFeatures = [
        "Thiết kế tùy biến theo yêu cầu",
        "Bàn giao đầy đủ source code",
        "Thời gian hoàn thành: 7–14 ngày làm việc",
        "Chỉnh sửa tối đa 3 lần",
        "Giao diện responsive trên mọi thiết bị",
        "Tối ưu tốc độ tải trang",
        "Tối ưu SEO cơ bản",
        "Tích hợp Google Analytics",
        "Hỗ trợ tài liệu sử dụng",
        "Nền tảng: WordPress hoặc Static HTML"
    ];

    const standardFeatures = [
        "Thiết kế tùy biến theo yêu cầu chuyên nghiệp",
        "Bàn giao đầy đủ source code",
        "Thời gian hoàn thành: 10–21 ngày làm việc",
        "Chỉnh sửa tối đa 5 lần",
        "Giao diện responsive cao cấp",
        "Tối ưu tốc độ tải trang nâng cao",
        "Tối ưu SEO toàn diện",
        "Tích hợp CMS quản lý nội dung",
        "Tích hợp Google Analytics, Facebook Pixel",
        "Hệ thống liên hệ và form đăng ký",
        "Tặng kèm 2GB hosting trong 1 năm",
        "Nền tảng: WordPress hoặc React"
    ];

    const advancedFeatures = [
        "Thiết kế tùy biến cao cấp, đảm bảo nhận diện thương hiệu",
        "Bàn giao đầy đủ source code và tài liệu kỹ thuật",
        "Thời gian hoàn thành: 14–30 ngày làm việc",
        "Chỉnh sửa không giới hạn trong 30 ngày",
        "Giao diện responsive premium với hiệu ứng cao cấp",
        "Tối ưu tốc độ tải trang tối đa",
        "Tối ưu SEO chuyên sâu và kỹ thuật",
        "Hệ thống CMS quản lý nội dung nâng cao",
        "Tích hợp đầy đủ công cụ marketing",
        "Hệ thống email marketing tự động",
        "Tích hợp thanh toán trực tuyến",
        "Tặng kèm 5GB hosting cao cấp trong 1 năm",
        "Bảo trì miễn phí 3 tháng đầu",
        "Nền tảng: WordPress, React hoặc Next.js"
    ];

    return (
        <section className="bg-gray-50 pt-[60px] lg:py-[90px]">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-6 lg:mb-10">
                    <h2 className="text-[24px] lg:text-[60px] font-archivo font-semibold text-black mb-4">
                        Gói xây dựng Website
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black max-w-2xl mx-auto leading-relaxed">
                        Chọn gói dịch vụ phù hợp để xây dựng website chuyên nghiệp,
                        tối ưu hóa hiệu suất và phù hợp với mọi nhu cầu kinh doanh
                    </p>
                </div>

                {/* Packages */}
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-8">
                    {/* Gói Cơ Bản */}
                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between">
                        <div>
                            <div className="mb-6 pb-2 border-b-2 border-gray-200">
                                <h3 className="text-[18px] lg:text-[24px] font-archivo font-medium text-black">
                                    Gói Cơ Bản
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
                            <button className="relative flex items-center space-x-3 px-8 py-4 bg-black text-[15px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group">
                                <span>Hợp tác ngay</span>
                            </button>
                        </div>
                    </div>

                    {/* Gói Tiêu Chuẩn */}
                    <div className="bg-white border-2 border-[#2faeec] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between">
                        {/* Popular Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-[#2faeec] to-[#1e90ff] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-current" />
                                <span>Phổ biến</span>
                            </div>
                        </div>

                        <div>
                            <div className="mb-6 pb-2 border-b-2 border-[#2faeec]">
                                <h3 className="text-[18px] lg:text-[24px] font-archivo font-medium text-black">
                                    Gói Tiêu Chuẩn
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
                            <button className="relative flex items-center space-x-3 px-8 py-4 bg-[#2faeec] text-[15px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-300 hover:scale-105 group">
                                <span>Hợp tác ngay</span>
                            </button>
                        </div>
                    </div>

                    {/* Gói Nâng Cao */}
                    <div className="bg-black border-2 border-black rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between">
                        {/* Premium Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-[#5534bb] via-[#8b5cf6] to-[#5534bb] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                                <Crown className="w-4 h-4 fill-current" />
                                <span>Premium</span>
                            </div>
                        </div>

                        <div>
                            <div className="mb-6 pb-2 border-b border-white">
                                <h3 className="text-[18px] lg:text-[24px] font-archivo font-medium text-white">
                                    Gói Nâng Cao
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
                            <button className="relative flex items-center space-x-3 px-8 py-4 bg-white text-[15px] text-black rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group">
                                <span>Hợp tác ngay</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebsitePackages;