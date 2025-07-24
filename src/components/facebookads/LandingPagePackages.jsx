import React from 'react';
import {Check, Star, ArrowRight, ArrowUpRight} from 'lucide-react';

const LandingPagePackages = () => {
    const basicPackage = [
        {
            subtitle: "1. Tư vấn chiến lược & xây dựng phễu quảng cáo",
            features: [
                "Phân tích ngành hàng, hành vi khách hàng và mục tiêu kinh doanh.",
                "Xây dựng phễu quảng cáo đa tầng: TOFU – MOFU – BOFU.",
                "Lên roadmap ngân sách, mục tiêu KPI theo giai đoạn."
            ]
        },
        {
            subtitle: "2. Thiết lập chiến dịch quảng cáo",
            features: [
                "Setup tài khoản quảng cáo (nếu chưa có).",
                "Cài đặt pixel và Facebook Conversion API (CAPI).",
                "Thiết lập và phân loại tệp đối tượng (custom audience, lookalike...).",
                "Tạo và triển khai chiến dịch quảng cáo (tối ưu chuyển đổi, tin nhắn, remarketing...)."
            ]
        },
        {
            subtitle: "3. Thiết kế nội dung quảng cáo",
            features: [
                "Viết nội dung (caption, call-to-action) phù hợp với hành trình khách hàng.",
                "Thiết kế hình ảnh tĩnh hoặc video ngắn (nếu có yêu cầu).",
                "Test A/B nhiều phiên bản mẫu quảng cáo."
            ]
        },
        {
            subtitle: "4. Tracking – đo lường – tối ưu hóa",
            features: [
                "Theo dõi hiệu quả theo từng nhóm chiến dịch: CPM, CPC, CTR, ROAS, CPA.",
                "Báo cáo chi tiết nguồn đơn, tệp chuyển đổi tốt nhất.",
                "Tối ưu ngân sách theo thời gian thực, loại trừ đối tượng không hiệu quả."
            ]
        },
        {
            subtitle: "5. Tích hợp và hỗ trợ liên nền tảng",
            features: [
                "Kết nối với website, chatbot, CRM (nếu có).",
                "Tư vấn và hỗ trợ xây dựng fanpage, landing page phục vụ quảng cáo."
            ]
        },
        {
            subtitle: "6. Báo cáo & đồng hành",
            features: [
                "Báo cáo định kỳ: theo ngày, tuần, hoặc theo yêu cầu.",
                "Đánh giá và điều chỉnh mục tiêu KPI theo từng giai đoạn."
            ]
        }
    ];

    const advancedPackage = [
        {
            subtitle: "1. Cung cấp tài khoản quảng cáo Invoice",
            features: [
                "Tài khoản BM lớn, độ uy tín cao, được cấp trực tiếp từ Facebook.",
                "Khả năng chi tiêu lớn, ổn định, ít bị khóa hoặc hạn chế.",
                "Có thể chạy các ngành đặc thù hoặc khó lên quảng cáo."
            ]
        },
        {
            subtitle: "2. Hỗ trợ khởi tạo và kết nối tài sản",
            features: [
                "THỗ trợ kết nối page, pixel, domain xác minh, BM con...",
                "Cấp quyền phù hợp cho đội ngũ chạy quảng cáo của khách hàng."
            ]
        },
        {
            subtitle: "3. Quy trình nạp tiền và quản lý tài chính",
            features: [
                "Nạp tiền linh hoạt qua chuyển khoản.",
                "Xác nhận số dư nhanh chóng, đảm bảo không gián đoạn chiến dịch.",
                "Cung cấp báo cáo chi tiêu định kỳ theo yêu cầu."
            ]
        },
        {
            subtitle: "4. Hỗ trợ vận hành và xử lý sự cố",
            features: [
                "Hỗ trợ xử lý khi quảng cáo không được duyệt, tài khoản bị hạn chế.",
                "Hướng dẫn kỹ thuật sử dụng tài khoản, đảm bảo chạy đúng quy trình Facebook.",
                "Hỗ trợ kỹ thuật cơ bản nếu khách hàng có đội chạy riêng."
            ]
        },
        {
            subtitle: "5. Ưu đãi cho khách hàng lớn",
            features: [
                "Chính sách chiết khấu theo mức ngân sách tháng.",
                "Hỗ trợ tài khoản riêng biệt nếu chi tiêu lớn (>500 triệu/tháng).",

            ]
        }
    ];

    return (
        <section className="bg-white py-[60px] lg:py-[90px]">
            <div className="md:max-w-[500px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black leading-tight mb-1">
                        Gói dịch vụ Facebook Ads
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black max-w-xl mx-auto">
                        2 gói chính: Chạy quảng cáo chuyển đổi/ Cho thuê tài khoản Invoice
                    </p>
                </div>

                {/* Packages */}
                <div className=" p-2 bg-gray-50 rounded-2xl">
                    <div className="grid lg:grid-cols-2 gap-6 p-2 bg-white rounded-xl shadow-md">
                    {/* Gói Cơ Bản */}
                    <div className="bg-white border-2 border-white rounded-lg p-8 neu-shadow-inset-xs transition-all duration-300 relative flex flex-col justify-between">
                        <div>
                            <div className="mb-6 pb-2 border-b border-black">
                                <h3 className="text-[16px] lg:text-[20px] font-medium text-black">
                                    Gói 1: Chạy quảng cáo chuyển đổi:
                                </h3>
                            </div>

                            <div className="space-y-4 mb-8">
                                {basicPackage.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="space-y-3">
                                        <h4 className="text-[14px] lg:text-[16px] font-medium text-black">
                                            {section.subtitle}
                                        </h4>
                                        <div className="space-y-2 ml-4">
                                            {section.features.map((feature, index) => (
                                                <div key={index} className="flex items-start space-x-3">
                                                    <div className="flex-shrink-0 w-4 h-4 bg-[#c08dfe] rounded-full flex items-center justify-center mt-1">
                                                        <Check className="w-2.5 h-2.5 text-white" />
                                                    </div>
                                                    <span className="text-gray-700 text-[13px] lg:text-[14px] leading-relaxed">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center pt-2 space-x-4">
                            <a
                                href="/contact"
                                className="relative flex items-center space-x-3 px-16 lg:px-24 py-4 bg-black text-[15px] sm:text-[16px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group"
                            >
                                <span className="">
                                    Nhận tư vấn
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Gói Nâng Cao */}
                    <div className="bg-black border-2 border-black rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between">
                        {/* Popular Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-[#c08dfe] via-black to-[#c08dfe] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-current" />
                                <span>Phổ Biến</span>
                            </div>
                        </div>

                        <div>
                            <div className="mb-6 pb-2 border-b border-white">
                                <h3 className="text-[16px] lg:text-[20px] font-medium text-white">
                                    <span className="">Gói 2: Cho thuê tài khoản quảng cáo (Invoice)</span>
                                </h3>
                            </div>

                            <div className="space-y-4 mb-8">
                                {advancedPackage.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="space-y-3">
                                        <h4 className="text-[14px] lg:text-[16px] font-medium text-white">
                                            {section.subtitle}
                                        </h4>
                                        {section.features.length > 0 && (
                                            <div className="space-y-2 ml-4">
                                                {section.features.map((feature, index) => (
                                                    <div key={index} className="flex items-start space-x-3">
                                                        <div className="flex-shrink-0 w-4 h-4 bg-[#c08dfe] rounded-full flex items-center justify-center mt-1">
                                                            <Check className="w-2.5 h-2.5 text-white" />
                                                        </div>
                                                        <span className="text-gray-300 text-[13px] lg:text-[14px] leading-relaxed">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center pt-2 space-x-4">
                            <a
                                href="/contact"
                                className="relative flex items-center space-x-3 px-16 lg:px-24 py-4 bg-white text-[15px] sm:text-[16px] text-black rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group"
                            >
                                <span className="">
                                    Nhận tư vấn
                                </span>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingPagePackages;