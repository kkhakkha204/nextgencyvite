import React from 'react';
import { ChevronRight } from 'lucide-react';

const PainPointSection = () => {
    const painPoints = [
        {
            title: "Quy trình thủ công tốn thời gian",
            description: "Sale vẫn đang nhập tay từng đơn, chốt inbox từng khách, gửi tay từng email – mất 80% thời gian cho việc lặp lại.",
        },
        {
            title: "Thiếu cá nhân hóa",
            description: "Marketing không thể cá nhân hóa theo hành vi từng khách – nội dung gửi ra bị \"lạnh\", không hiệu quả.",
        },
        {
            title: "Dữ liệu rời rạc",
            description: "Thiếu hệ thống liên kết giữa các nền tảng (Zalo, Facebook, Website, CRM) – dữ liệu rời rạc, không thể khai thác.",
        },
        {
            title: "Thiếu tự động hóa",
            description: "Không có công cụ để trả lời tự động, tư vấn cá nhân hóa, hoặc gợi ý sản phẩm thông minh.",
        }
    ];

    const solutions = [
        {
            title: "Tự động hóa quy trình",
            description: "Biến quy trình thủ công thành tự động – giải phóng 80% thời gian cho đội Sale.",
            highlight: "Tiết kiệm 80% thời gian",
        },
        {
            title: "Cá nhân hóa thông minh",
            description: "Cá nhân hoá nội dung theo hành vi từng khách hàng – tăng mạnh tỷ lệ chuyển đổi.",
            highlight: "Tăng tỷ lệ chuyển đổi",
        },
        {
            title: "Kết nối đa nền tảng",
            description: "Kết nối đa nền tảng: Zalo – Facebook – Website – CRM vào 1 hệ thống duy nhất.",
            highlight: "Quản lý 1 hệ thống",
        },
        {
            title: "AI tư vấn thông minh",
            description: "Kích hoạt AI trả lời thông minh – chatbot tư vấn sản phẩm tự động.",
            highlight: "Áp dụng AI",
        }
    ];

    return (
        <section className="pt-[60px] lg:pt-[90px] relative">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center mb-2">
                        <span className="bg-gradient-to-r from-[#5534bb] via-[#2faeec] to-[#5534bb] text-white px-4 py-2 rounded-full text-[13px] lg:text-[15px] font-medium shadow-lg shadow-[#5534bb]/25">
                            Automation - Data
                        </span>
                    </div>
                    <h2 className="text-[24px] md:text-[32px] font-archivo font-semibold text-black">
                        Nỗi đau của doanh nghiệp
                        <span className="block text-[24px] md:text-[36px] lg:text-[44px] font-archivo font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-[#5534bb]">
                            & Giải pháp cung cấp
                        </span>
                    </h2>
                </div>

                {/* Pain & Solution Cards */}
                <div className="space-y-6">
                    {painPoints.map((pain, index) => {
                        const PainIcon = pain.icon;
                        const SolutionIcon = solutions[index].icon;

                        return (
                            <div key={index} className="group relative">
                                {/* Connection line */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                                    <div className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center neu-shadow-xs shadow-lg group-hover:border-[#5534bb] transition-all duration-300">
                                        <ChevronRight className="w-5 h-5 text-[#5534bb] transition-transform duration-300" />
                                    </div>
                                </div>

                                <div className="bg-white border-2 border-black rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                                    <div className="grid md:grid-cols-2 p-2 gap-2">
                                        {/* Pain Point - Left Side */}
                                        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-5 md:p-7 relative">
                                            <div className="relative z-10">
                                                <div className="flex justify-center mb-4">
                                                </div>
                                                <div className="text-center">
                                                    <h4 className="text-white font-medium font-archivo text-[16px] lg:text-[20px] mb-1">
                                                        {pain.title}
                                                    </h4>
                                                    <p className="text-gray-100 text-[14px] lg:text-[16px] leading-relaxed max-w-lg mx-auto">
                                                        {pain.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Solution - Right Side */}
                                        <div className="bg-gradient-to-br from-white to-gray-50 neu-shadow-inset-xs rounded-xl p-5 md:p-7 relative">
                                            {/* Decorative elements */}
                                            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#2faeec]/25 to-transparent rounded-full blur-xl"></div>

                                            <div className="relative z-10">
                                                <div className="flex justify-center mb-4">
                                                </div>
                                                <div className="text-center">
                                                    <h4 className="text-black font-medium font-archivo text-[16px] lg:text-[20px] mb-1">
                                                        {solutions[index].title}
                                                    </h4>
                                                    <p className="text-gray-800 text-[14px] lg:text-[16px] leading-relaxed max-w-lg mx-auto mb-3">
                                                        {solutions[index].description}
                                                    </p>

                                                    <span className="inline-flex items-center px-3 py-1.5 bg-[#5534bb]/10 text-[#5534bb] text-[13px] lg:text-[15px] font-medium rounded-full border border-[#5534bb]/20 hover:from-[#5534bb]/20 hover:to-[#2faeec]/20 transition-all duration-300">
                                                        {solutions[index].highlight}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PainPointSection;