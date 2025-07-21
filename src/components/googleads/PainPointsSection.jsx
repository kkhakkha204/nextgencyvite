const PainPointsSection = () => {
    const painPoints = [
        {
            title: "Landing page không tối ưu",
            description: "Quảng cáo hiện top nhưng vẫn không ra đơn vì landing page không được tối ưu cho chuyển đổi.",
            impact: "Tiền ads bị đốt cháy vô ích",
            isDark: false,
            rotation: "lg:-rotate-1"
        },
        {
            title: "Không biết từ khóa hiệu quả",
            description: "Mỗi ngày tiêu tiền trên Google nhưng không biết từ khóa nào thực sự hiệu quả.",
            impact: "Ngân sách marketing lãng phí",
            isDark: false,
            rotation: "lg:rotate-1"
        },
        {
            title: "Thiếu hệ thống tracking",
            description: "Không có hệ thống tracking hành vi rõ ràng – không đo được hiệu suất theo từng chiến dịch.",
            impact: "Không tối ưu marketing",
            isDark: false,
            rotation: "lg:rotate-1"
        },
        {
            title: "Quảng cáo không thu hút",
            description: "Mẫu quảng cáo nhàm chán, không thu hút – tệp khách tiềm năng bị đối thủ cướp mất.",
            impact: "Mất khách hàng",
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
              Google Ads
            </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black mb-1">
                        Nỗi đau của doanh nghiệp
                    </h2>

                    {/* Description */}
                    <p className="text-[15px] lg:text-[18px] text-black max-w-lg mx-auto">
                        Những vấn đề phổ biến mà doanh nghiệp gặp phải tạo nên một website không hiệu quả
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