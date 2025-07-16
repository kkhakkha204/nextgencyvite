const PainPointsSection = () => {
    const painPoints = [
        {
            title: "Video content kém chất lượng",
            description: "Không theo kịp trend TikTok, đội in-house thiếu kinh nghiệm làm video hấp dẫn.",
            impact: "Ads burn tiền vô ích",
            isDark: false,
            rotation: "lg:-rotate-1"
        },
        {
            title: "Content không chuyển đổi",
            description: "Đã đầu tư vào quảng cáo nhưng nội dung không đủ chạm – view có, tương tác có nhưng không chuyển đổi.",
            impact: "ROI thấp, lãng phí budget",
            isDark: false,
            rotation: "lg:rotate-1"
        },
        {
            title: "Mất khách đã quan tâm",
            description: "Thiếu hệ thống retargeting khách đã xem, đã tương tác – bỏ lỡ hàng ngàn cơ hội mua lại.",
            impact: "Bỏ lỡ cơ hội bán hàng",
            isDark: false,
            rotation: "lg:rotate-1"
        },
        {
            title: "TikTok Pixel chưa chuẩn",
            description: "Không cài được TikTok Pixel chuẩn – không tối ưu hóa được tệp người dùng tiềm năng.",
            impact: "Targeting không chính xác",
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
            <span className="bg-gradient-to-r from-[#5534bb] via-[#2faeec] to-[#5534bb] text-white px-4 py-2 rounded-full text-[14px] lg:text-[16px] font-medium">
              Google Ads
            </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-semibold text-black mb-1">
                        Nỗi đau của doanh nghiệp
                    </h2>

                    {/* Description */}
                    <p className="text-[15px] lg:text-[18px] text-black max-w-xl mx-auto">
                        Những vấn đề phổ biến mà doanh nghiệp gặp phải<br/>tạo nên một website không hiệu quả
                    </p>
                </div>

                {/* Pain Points Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {painPoints.map((point, index) => (
                        <div
                            key={index}
                            className={`
                ${point.isDark ? 'bg-black' : 'bg-white/80'}
                ${point.rotation}
                border-2 border-black rounded-2xl p-6 lg:p-8
                shadow-md transform-gpu
                lg:hover:shadow-lg lg:hover:scale-105 lg:hover:rotate-0
                transition-all duration-300 ease-out
              `}
                        >
                            {/* Card Content */}
                            <div className="space-y-4">

                                {/* Title */}
                                <h3 className={`
                  text-[16px] lg:text-[20px] font-archivo font-medium
                  ${point.isDark ? 'text-white' : 'text-black'}
                `}>
                                    {point.title}
                                </h3>

                                {/* Description */}
                                <p className={`
                  text-[14px] lg:text-[16px] leading-relaxed
                  ${point.isDark ? 'text-gray-100' : 'text-gray-700'}
                `}>
                                    {point.description}
                                </p>

                                {/* Impact */}
                                <div className={`
                  inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium
                  ${point.isDark ? 'bg-[#60c9f7]/20 text-[#60c9f7]' : 'bg-purple-50 text-[#5534bb]'}
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