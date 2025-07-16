import React from 'react';

const ServicesDivider = () => {
    // Dữ liệu mẫu cho các services
    const services = [
        {
            id: 1,
            title: "Cho thuê tài khoản quảng cáo",
            image: "/assets/images/facebookads/service1.webp",
        },
        {
            id: 2,
            title: "Xây dựng chiến dịch chuyển đổi, remarketing và thu phễu đa tầng (TOFU – MOFU – BOFU)",
            image: "/assets/images/facebookads/service2.webp"
        },
        {
            id: 3,
            title: "Tối ưu theo sự kiện CAPI (Facebook Conversion API)",
            image: "/assets/images/facebookads/service3.webp"
        },
        {
            id: 4,
            title: "Tracking chuẩn từ phễu đầu đến đơn hàng, hỗ trợ tích hợp với website và chatbot",
            image: "/assets/images/facebookads/service4.webp"
        }
    ];

    return (
        <section className="bg-black py-[60px] md:py-[90px]">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group cursor-pointer"
                        >
                            <div className="overflow-hidden">
                                {/* Image Container - Square */}
                                <div className="relative aspect-square overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Content */}
                                <div className="p-1 sm:p-2 text-center">
                                    <h3 className="text-[15px] lg:text-[18px] text-white group-hover:text-blue-400 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesDivider;