const PainPointsSection = () => {
    const painPoints = [
        {
            title: "Tải chậm, trải nghiệm tệ",
            description: "Website nhìn đẹp mắt, nhưng load chậm – không tối ưu trải nghiệm người dùng (UX/UI).",
            impact: "Khách hàng rời đi sau 3 giây",
            isDark: false,
            rotation: "lg:-rotate-1"
        },
        {
            title: "Không responsive mobile",
            description: "Giao diện không tối ưu trên mobile – trong khi 80% khách hàng đang lướt bằng điện thoại.",
            impact: "Mất 80% khách hàng tiềm năng",
            isDark: false,
            rotation: "lg:rotate-1"
        },
        {
            title: "Không theo dõi được dữ liệu",
            description: "Không tích hợp chatbot, pixel hay công cụ đo lường – không biết khách từ đâu đến, ở lại bao lâu, có mua hay không.",
            impact: "Không tối ưu được marketing",
            isDark: false,
            rotation: "lg:rotate-1"
        },
        {
            title: "CTA không rõ ràng",
            description: "Landing page không rõ ràng Call To Action – khách hàng truy cập, lướt web qua lại sau đó… rời đi luôn.",
            impact: "Tỷ lệ chuyển đổi thấp",
            isDark: true,
            rotation: "lg:-rotate-1"
        }
    ];

    return (
        <section className="relative bg-white pt-[60px] lg:pt-[90px]">

            <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-6 lg:mb-10">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center mb-2 lg:mb-4">
            <span className="bg-gradient-to-r from-[#5534bb] via-[#2faeec] to-[#5534bb] text-white px-4 py-2 rounded-full text-[14px] lg:text-[16px] font-medium">
              Website & Landing page
            </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-[24px] lg:text-[60px] font-archivo font-semibold text-black mb-2 lg:mb-4">
                        Nỗi đau của doanh nghiệp
                    </h2>

                    {/* Description */}
                    <p className="text-[15px] lg:text-[18px] text-black max-w-3xl mx-auto">
                        Những vấn đề phổ biến mà doanh nghiệp gặp phải<br/>tạo nên một website không hiệu quả
                    </p>
                </div>

                {/* Pain Points Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {painPoints.map((point, index) => (
                        <div
                            key={index}
                            className={`
                ${point.isDark ? 'bg-black' : 'bg-white/80 lg:bg-white/60 lg:backdrop-blur-sm'}
                ${point.rotation}
                border-2 border-black rounded-3xl p-6 lg:p-8
                shadow-md transform-gpu
                lg:hover:shadow-lg lg:hover:scale-105 lg:hover:rotate-0
                transition-all duration-300 ease-out
              `}
                        >
                            {/* Card Content */}
                            <div className="space-y-4">

                                {/* Title */}
                                <h3 className={`
                  text-[16px] lg:text-[20px] font-medium
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