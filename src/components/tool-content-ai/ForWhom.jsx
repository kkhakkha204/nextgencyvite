import React from "react";

const ForWhom = () => {
    const painPoints = [
        {
            title: "Chủ shop & doanh nghiệp",
            description: "Tự chủ nội dung website, kéo khách từ tìm kiếm mà không cần đội SEO riêng.",
            impact: "Tối ưu chi phí",
            isDark: false,
            rotation: "lg:-rotate-1"
        },
        {
            title: "Agency & freelancer SEO",
            description: "Tăng sản lượng bài chất lượng cho nhiều khách hàng, nhiều ngôn ngữ, trong thời gian ngắn.",
            impact: "Scale-up dễ dàng",
            isDark: false,
            rotation: "lg:rotate-1"
        },
        {
            title: "Đội marketing in-house",
            description: "Chuẩn hóa quy trình viết - tối ưu - duyệt - đăng và cộng tác nhiều người trên cùng nền tảng.",
            impact: "Quản lý tập trung",
            isDark: false,
            rotation: "lg:rotate-1"
        },
        {
            title: "Người sáng tạo nội dung",
            description: "Biến ý tưởng thành bài chuẩn SEO/GEO thật nhanh, tập trung vào chất lượng thay vì thao tác thủ công.",
            impact: "Khơi nguồn sáng tạo",
            isDark: true,
            rotation: "lg:-rotate-1"
        }
    ];

    return (
        <section className="relative bg-white pt-[60px] lg:pt-[90px] pb-20">

            <div className="relative z-10 md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center mb-2">
                        <span className=" text-black rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                            Automation-content-ai
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold leading-[1.45] uppercase text-black mb-1">
                        Công cụ này dành cho ai?
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

export default ForWhom;