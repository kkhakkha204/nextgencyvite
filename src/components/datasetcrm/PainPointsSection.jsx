const PainPointsSection = () => {
    const painPoints = [
        {
            title: "Lãng phí dữ liệu khách hàng",
            description: "Đã có hàng trăm đơn hàng, hàng ngàn lượt inbox – nhưng không biết cách tận dụng lại dữ liệu đó.",
            impact: "Tiền ads bị đốt cháy",
            isDark: false,
            rotation: "lg:-rotate-1"
        },
        {
            title: "Targeting quảng cáo không chính xác",
            description: "Chạy quảng cáo Facebook chỉ target theo sở thích, độ tuổi – không đủ gần gũi để tạo chuyển đổi thật sự.",
            impact: "Tỷ lệ chuyển đổi thấp",
            isDark: false,
            rotation: "lg:rotate-1"
        },
        {
            title: "Không có dữ liệu lookalike",
            description: "Không xây được tệp lookalike đúng chuẩn – dẫn đến lãng phí ngân sách quảng cáo vào những người không quan tâm.",
            impact: "Ads tiếp cận sai đối tượng",
            isDark: false,
            rotation: "lg:rotate-1"
        },
        {
            title: "Dữ liệu không đồng bộ",
            description: "Dữ liệu form, web, chatbot… không được đồng bộ về CRM hoặc Facebook CAPI – bị đứt mạch remarketing.",
            impact: "Mất cơ hội remarketing",
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
            <span className="bg-black text-white px-3 py-2 rounded-full text-[11px] lg:text-[13px] font-medium">
              Dataset & CRM
            </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-archivo font-bold leading-tight text-black mb-1">
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