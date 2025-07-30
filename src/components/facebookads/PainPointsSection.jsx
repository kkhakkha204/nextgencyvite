import React from "react";

const PainPointsSection = () => {

    const painPoints = [
        {
            title: "Tài khoản ads bị hạn chế",
            description: "Tài khoản quảng cáo liên tục bị hạn chế, khiến chiến dịch đứt gãy và không thể scale.",
            impact: "Chiến dịch đứt gãy",
            isDark: false,
            rotation: "lg:-rotate-1"
        },
        {
            title: "Tích hợp hệ thống kém",
            description: "Không thể tích hợp hệ thống quảng cáo với chatbot, website hay CRM để khai thác dữ liệu hiệu quả.",
            impact: "Ads bị đốt cháy",
            isDark: false,
            rotation: "lg:rotate-1"
        },
        {
            title: "Thiếu hệ thống tracking",
            description: "Chi tiền đều đặn nhưng không biết đơn hàng đến từ đâu – thiếu tracking và báo cáo rõ ràng",
            impact: "Không đo lường ROI",
            isDark: false,
            rotation: "lg:rotate-1"
        },
        {
            title: "Phễu bán hàng thiếu bài bản",
            description: "Khó khăn trong việc xây dựng phễu TOFU – MOFU – BOFU bài bản để tạo chuyển đổi bền vững",
            impact: "Conversion thấp",
            isDark: true,
            rotation: "lg:-rotate-1"
        }
    ];

    return (
        <section className="relative bg-white pt-[60px] lg:pt-[90px]">

            <div className="relative z-10 md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center mb-2">
                        <span className=" text-black rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                            facebook ads
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold leading-[1.45] uppercase text-black mb-1">
                        Nỗi đau của doanh nghiệp
                    </h2>

                </div>

                {/* Pain Points Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {painPoints.map((point, index) => (
                        <div
                            key={index}
                            className={`
        ${point.isDark ? 'bg-black' : 'bg-white'}
        ${point.rotation}
        border-2 border-black rounded-xl p-4 lg:p-6
        shadow-md transform-gpu
        lg:hover:shadow-lg lg:hover:scale-105 lg:hover:rotate-0
        transition-all duration-300 ease-out
      `}
                        >
                            {/* Card Content */}
                            <div className="flex flex-col justify-between h-full">
                                {/* Title & Description Container */}
                                <div>
                                    {/* Title */}
                                    <h3 className={`
              text-[14px] lg:text-[16px] font-medium
              ${point.isDark ? 'text-white' : 'text-black'}
            `}>
                                        {point.title}
                                    </h3>

                                    {/* Description */}
                                    <p className={`
              text-[13px] lg:text-[15px] max-w-sm
              ${point.isDark ? 'text-gray-300' : 'text-gray-700'}
            `}>
                                        {point.description}
                                    </p>
                                </div>

                                {/* Impact */}
                                <div className={`
          inline-flex items-center gap-2 px-3 py-1 rounded-full text-[13px] lg:text-[15px] font-medium mt-4 self-start
          ${point.isDark ? 'bg-[#c08dfe]/20 text-[#c08dfe]' : 'bg-[#1a4498]/10 text-[#1a4498]'}
        `}>
                                    <span className="w-2 h-2 bg-current rounded-full"></span>
                                    {point.impact}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PainPointsSection;