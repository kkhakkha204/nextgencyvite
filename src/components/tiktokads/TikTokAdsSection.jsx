import React from 'react';
import { Lightbulb, TrendingUp, ShoppingCart, Video, Heart, Smartphone } from 'lucide-react';

const TikTokAdsSection = () => {
    const services = [
        {
            id: 1,
            icon: Lightbulb,
            title: 'Branding',
            subtitle: 'Brand Takeover, Top View, In-feed Reach & Frequency',
            description: 'Quảng cáo tăng nhận diện thương hiệu xuất hiện đầu app hoặc trong luồng',
            delay: 'delay-[100ms]'
        },
        {
            id: 2,
            icon: TrendingUp,
            title: 'Lead & Chuyển đổi',
            subtitle: 'Lead Gen Ads, Traffic Ads, Conversion Ads',
            description: 'Quảng cáo thu data, kéo về web hoặc landing page',
            delay: 'delay-[200ms]'
        },
        {
            id: 3,
            icon: ShoppingCart,
            title: 'TikTok Shop',
            subtitle: 'In-feed Add-to-Cart, Shop Now',
            description: 'Quảng cáo video bán hàng, tăng view, click, chốt đơn',
            delay: 'delay-[300ms]'
        },
        {
            id: 4,
            icon: Video,
            title: 'Livestream',
            subtitle: 'Live Ads, Top View to Live',
            description: 'Đẩy người xem về livestream, tăng tương tác thực',
            delay: 'delay-[400ms]'
        },
        {
            id: 5,
            icon: Heart,
            title: 'Engagement & Personal Brand',
            subtitle: 'Engagement Ads',
            description: 'Tăng lượt theo dõi, view kênh, phù hợp với creator, chuyên gia, KOLs',
            delay: 'delay-[500ms]'
        },
        {
            id: 6,
            icon: Smartphone,
            title: 'App & Sản phẩm số',
            subtitle: 'App Install App',
            description: 'Quảng cáo cài app, tăng người dùng thử nghiệm sản phẩm',
            delay: 'delay-[600ms]'
        }
    ];

    return (
        <section className="py-[60px] lg:py-[90px] bg-white">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black mb-1 leading-[1.45] uppercase">
                        Định dạng quảng cáo Tiktok
                    </h2>
                    <p className="text-black text-[15px] lg:text-[18px] max-w-xl mx-auto">
                        Nextgency hỗ trợ triển khai đầy đủ các hình thức quảng cáo Tiktok,
                        tối ưu cho từng mục tiêu kinh doanh của bạn
                    </p>
                </div>

                {/* Services Grid */}
                <div className=" p-2 bg-gray-50 rounded-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 p-2 bg-white rounded-xl shadow-sm">
                        {services.map((service) => {
                            const Icon = service.icon;
                            const isLastCard = service.id === 6;

                            return (
                                <div
                                    key={service.id}
                                    className={`group ${isLastCard ? 'bg-black' : 'bg-white'} border-2 border-gray-50 rounded-lg p-6 lg:p-8 ${isLastCard ? '' : 'neu-shadow-inset-xs'} transition-all duration-500 hover:-translate-y-2 ${service.delay}`}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-14 h-14 ${isLastCard ? 'bg-gradient-to-br from-white to-gray-200' : 'bg-gradient-to-br from-black to-[#1a4498]'} rounded-xl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                            <Icon className={`w-7 h-7 ${isLastCard ? 'text-black' : 'text-white'}`} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <h3 className={`text-[14px] lg:text-[16px] font-medium ${isLastCard ? 'text-white' : 'text-black'} mb-3 relative`}>
                                        <span className="relative z-10">{service.title}</span>
                                        <span className={`absolute inset-0 ${isLastCard ? 'bg-gradient-to-r from-transparent via-white/5 to-white/30' : 'bg-gradient-to-r from-transparent via-[#1a4498]/5 to-[#1a4498]/30'} rounded-2xl`}></span>
                                    </h3>
                                    <p className={`${isLastCard ? 'text-gray-300' : 'text-gray-700'} text-[13px] lg:text-[15px]`}>
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TikTokAdsSection;