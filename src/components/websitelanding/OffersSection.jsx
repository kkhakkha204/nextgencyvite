import React from 'react';

const OffersSection = () => {
    const offers = [
        {
            id: 1,
            title: "COMBO\nLANDINGPAGE &\n WEBSITE",
            discount: "15%",
            discountLabel: "Giảm",
            description: "tổng chi phí",
            align: "left",
            gradient: "from-[#D4CEF5] to-[#C5BCF1]"
        },
        {
            id: 2,
            title: "COMBO\nWEBSITE &\nDỊCH VỤ ADS",
            discount: "10%",
            discountLabel: "Giảm",
            description: "Chi phí Ads trong tháng đầu tiên",
            align: "left",
            gradient: "from-[#C5BCF1] to-[#C5BCF1]"
        },
        {
            id: 3,
            title: "COMBO\nLANDINGPAGE & \nWEBSITE & ADS",
            discount: "3",
            discountLabel: "trong",
            discountSuffix: "1",
            description: "Tặng thêm 1 tháng kĩ thuật miễn phí",
            align: "center",
            gradient: "from-orange-600 to-red-600",
            isRadial: true,
            isWhiteText: true
        }
    ];

    return (
        <section className="bg-black py-[60px] lg:py-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-4 sm:mb-8 ">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-white leading-[1.45] uppercase">
                        Chương trình ưu đãi<br/>khi đăng ký COMBO
                    </h2>
                    <p className="text-white text-[15px] lg:text-[18px] text-center sm:text-right">
                        Ưu đãi dành cho mọi đối tượng<br/>khách hàng
                    </p>
                </div>

                {/* Offers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20">
                    {offers.map((offer) => (
                        <div
                            key={offer.id}
                            className="relative group cursor-pointer"
                        >
                            {/* Voucher Card with Hexagon Shape */}
                            <div className="relative overflow-hidden">
                                {/* Background with gradient and hexagon clip-path */}
                                <div
                                    className={`
                    relative mx-auto h-60 sm:h-72 lg:h-80 w-72 sm:w-72 border-2 lg:w-80 ${offer.isRadial ? 'bg-radial-gradient' : `bg-gradient-to-br ${offer.gradient}`}
                    transform transition-all duration-300
                    shadow-2xl group-hover:shadow-3xl
                  `}
                                    style={{
                                        clipPath: 'polygon(0% 0%, 75% 0%, 100% 25%, 100% 100%, 25% 100%, 0% 75%)',
                                        ...(offer.isRadial && {
                                            background: 'radial-gradient(circle at center, #5534bb, #8866ee , #B3BDEE)'
                                        })
                                    }}
                                >
                                    {/* Content */}
                                    <div className={`
                    relative z-10 h-full flex flex-col pr-4 pl-12 sm:px-8 pt-8
                    ${offer.align === 'center' ? 'items-start text-left' : 'items-start text-left'}
                  `}>
                                        {/* Title */}
                                        <h3 className={`font-archivo font-semibold text-[20px] sm:text-[22px] mb-4 leading-tight w-full ${
                                            offer.isWhiteText ? 'text-white' : 'text-[#5534bb]'
                                        }`}>
                                            {offer.title.split('\n').map((line, index) => (
                                                <React.Fragment key={index}>
                                                    {line}
                                                    {index < offer.title.split('\n').length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </h3>

                                        {/* Discount Section */}
                                        <div className={`w-full ${offer.align === 'center' ? 'text-left' : 'text-left'}`}>
                                            {/* Only show discountLabel if there's no discountSuffix */}
                                            {!offer.discountSuffix && (
                                                <p className={`text-[13px] sm:text-[15px] font-medium ${
                                                    offer.isWhiteText ? 'text-white' : 'text-[#5534bb]'
                                                }`}>
                                                    {offer.discountLabel}
                                                </p>
                                            )}
                                            <div className={`flex items-baseline ${offer.align === 'center' ? 'justify-start' : 'justify-start'}`}>
                        <span className={`font-black text-5xl lg:text-7xl ${
                            offer.isWhiteText ? 'text-white' : 'text-[#5534bb]'
                        }`}>
                          {offer.discount}
                        </span>
                                                {offer.discountSuffix && (
                                                    <>
                            <span className={`text-base sm:text-lg font-medium mx-1 ${
                                offer.isWhiteText ? 'text-white' : 'text-[#5534bb]'
                            }`}>
                              {offer.discountLabel}
                            </span>
                                                        <span className={`font-black text-5xl lg:text-7xl ${
                                                            offer.isWhiteText ? 'text-white' : 'text-[#5534bb]'
                                                        }`}>
                              {offer.discountSuffix}
                            </span>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className={`text-[13px] sm:text-[15px] font-medium leading-relaxed w-full ${
                                            offer.isWhiteText ? 'text-white' : 'text-[#5534bb]'
                                        }`}>
                                            {offer.description}
                                        </p>
                                    </div>

                                    {/* Shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OffersSection;