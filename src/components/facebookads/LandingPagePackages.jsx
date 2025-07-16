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
            features: []
        },
        {
            subtitle: "5. Ưu đãi cho khách hàng lớn",
            features: [
                "Chính sách chiết khấu theo mức ngân sách tháng.",
                "Hỗ trợ tài khoản riêng biệt nếu chi tiêu lớn (>500 triệu/tháng).",
                "Hỗ trợ xử lý khi quảng cáo không được duyệt, tài khoản bị hạn chế.",
                "Hướng dẫn kỹ thuật sử dụng tài khoản, đảm bảo chạy đúng quy trình Facebook.",
                "Hỗ trợ kỹ thuật cơ bản nếu khách hàng có đội chạy riêng."
            ]
        }
    ];

    return (
        <section className="bg-white pt-[60px] lg:pt-[90px]">
            <div className="md:max-w-[500px] lg:max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-6 lg:mb-10">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center mb-2">
            <span className="bg-gradient-to-r from-[#5534bb] via-[#2faeec] to-[#5534bb] text-white px-4 py-2 rounded-full text-[14px] lg:text-[16px] font-medium">
              Website & Landing page
            </span>
                    </div>
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-semibold text-black mb-1">
                        Gói xây dựng Landing Page
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black max-w-xl mx-auto leading-relaxed">
                        Chọn gói dịch vụ phù hợp để tạo ra landing page chuyên nghiệp,
                        tối ưu hóa chuyển đổi và phù hợp với mọi thiết bị
                    </p>
                </div>

                {/* Packages */}
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Gói Cơ Bản */}
                    <div className="bg-white border-2 border-black rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between">
                        <div>
                            <div className="mb-6 pb-2 border-b-2 border-black">
                                <h3 className="text-[20px] lg:text-[30px] font-archivo font-medium text-black">
                                    Gói Landing Page Cơ Bản
                                </h3>
                            </div>

                            <div className="space-y-6 mb-8">
                                {basicPackage.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="space-y-3">
                                        <h4 className="text-[14px] lg:text-[16px] font-semibold text-black">
                                            {section.subtitle}
                                        </h4>
                                        <div className="space-y-2 ml-4">
                                            {section.features.map((feature, index) => (
                                                <div key={index} className="flex items-start space-x-3">
                                                    <div className="flex-shrink-0 w-4 h-4 bg-[#2faeec] rounded-full flex items-center justify-center mt-1">
                                                        <Check className="w-2.5 h-2.5 text-white" />
                                                    </div>
                                                    <span className="text-gray-800 text-[13px] lg:text-[15px] leading-relaxed">
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

                            <div className="space-y-6 mb-8">
                                {advancedPackage.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="space-y-3">
                                        <h4 className="text-[14px] lg:text-[16px] font-semibold text-white">
                                            {section.subtitle}
                                        </h4>
                                        {section.features.length > 0 && (
                                            <div className="space-y-2 ml-4">
                                                {section.features.map((feature, index) => (
                                                    <div key={index} className="flex items-start space-x-3">
                                                        <div className="flex-shrink-0 w-4 h-4 bg-[#5534bb] rounded-full flex items-center justify-center mt-1">
                                                            <Check className="w-2.5 h-2.5 text-white" />
                                                        </div>
                                                        <span className="text-gray-100 text-[13px] lg:text-[15px] leading-relaxed">
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
        </section>
    );
};

export default LandingPagePackages;