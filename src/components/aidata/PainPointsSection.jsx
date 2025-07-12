import React from 'react';
import { ArrowRight, Users, Target, Link, Bot, Clock, TrendingUp, Network, Zap } from 'lucide-react';

const PainPointSection = () => {
    const painPoints = [
        {
            title: "Quy trình thủ công tốn thời gian",
            description: "Sale vẫn đang nhập tay từng đơn, chốt inbox từng khách, gửi tay từng email – mất 80% thời gian cho việc lặp lại."
        },
        {
            title: "Thiếu cá nhân hóa",
            description: "Marketing không thể cá nhân hóa theo hành vi từng khách – nội dung gửi ra bị \"lạnh\", không hiệu quả."
        },
        {
            title: "Dữ liệu rời rạc",
            description: "Thiếu hệ thống liên kết giữa các nền tảng (Zalo, Facebook, Website, CRM) – dữ liệu rời rạc, không thể khai thác."
        },
        {
            title: "Thiếu tự động hóa",
            description: "Không có công cụ để trả lời tự động, tư vấn cá nhân hóa, hoặc gợi ý sản phẩm thông minh."
        }
    ];

    const solutions = [
        {
            title: "Tự động hóa quy trình",
            description: "Biến quy trình thủ công thành tự động – giải phóng 80% thời gian cho đội Sale.",
            highlight: "Tiết kiệm 80% thời gian"
        },
        {
            title: "Cá nhân hóa thông minh",
            description: "Cá nhân hoá nội dung theo hành vi từng khách hàng – tăng mạnh tỷ lệ chuyển đổi.",
            highlight: "Tăng tỷ lệ chuyển đổi"
        },
        {
            title: "Kết nối đa nền tảng",
            description: "Kết nối đa nền tảng: Zalo – Facebook – Website – CRM vào 1 hệ thống duy nhất.",
            highlight: "Quản lý 1 hệ thống"
        },
        {
            title: "AI tư vấn thông minh",
            description: "Kích hoạt AI trả lời thông minh – chatbot tư vấn sản phẩm tự động.",
            highlight: "Áp dụng AI"
        }
    ];

    return (
        <section className=" pt-[60px] lg:pt-[90px]">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-6 lg:mb-10">
                    <h2 className="text-[24px] lg:text-[40px] font-archivo font-semibold text-black mb-1">
                        Nỗi đau của doanh nghiệp
                        <span className="block text-[24px] lg:text-[40px] font-archivo font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-[#5534bb]">
              & Giải pháp cung cấp
            </span>
                    </h2>
                </div>

                {/* Pain & Solution Cards */}
                <div className="space-y-6">
                    {painPoints.map((pain, index) => (
                        <div key={index} className="group relative">
                            <div className="bg-black border-2 border-black rounded-3xl overflow-hidden transition-all duration-300">
                                <div className="grid md:grid-cols-2">
                                    {/* Pain Point - Left Side (Black) */}
                                    <div className="bg-black p-5 md:p-7">
                                        <div className="flex items-start">
                                            <div className="flex-1">
                                                <h4 className="text-white font-medium text-[16px] lg:text-[20px] mb-1">
                                                    {pain.title}
                                                </h4>
                                                <p className="text-gray-100 text-[14px] lg:text-[16px] leading-relaxed">
                                                    {pain.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Solution - Right Side (White) */}
                                    <div className="bg-white p-5 md:p-7">
                                        <div className="flex items-start">
                                            <div className="flex-1">
                                                <h4 className="text-black font-medium text-[16px] lg:text-[20px] mb-1">
                                                    {solutions[index].title}
                                                </h4>
                                                <p className="text-gray-800 text-[14px] lg:text-[16px] leading-relaxed mb-3">
                                                    {solutions[index].description}
                                                </p>

                                                <span className="px-3 py-1.5 bg-gradient-to-r from-[#5534bb] via-[#2faeec] to-[#5534bb] text-white text-[13px] lg:text-[15px] font-medium rounded-full">
                            {solutions[index].highlight}
                          </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PainPointSection;