import React from 'react';
import { Clock, TrendingUp, Package, Gift, Percent, CreditCard, ChevronRight } from 'lucide-react';

const OffersSection = () => {
    const commitmentOffers = [
        {
            duration: '3 tháng',
            discount: '5%',
            bonus: null
        },
        {
            duration: '6 tháng',
            discount: '10%',
            bonus: null
        },
        {
            duration: '12 tháng',
            discount: '15%',
            bonus: 'Tặng bộ mẫu quảng cáo & landing chuyển đổi cao'
        }
    ];

    const growthOffers = [
        {
            budget: '100tr/th',
            cashback: '2%',
            method: 'Trừ vào tháng kế tiếp'
        },
        {
            budget: '200tr/th',
            cashback: '5%',
            method: 'Trừ vào tháng kế tiếp'
        },
        {
            budget: '350tr/th',
            cashback: '8%',
            method: 'Trừ vào tháng kế tiếp'
        }
    ];

    const comboOffers = [
        {
            services: '2 dịch vụ',
            discount: '3%'
        },
        {
            services: '3 dịch vụ',
            discount: '5%'
        }
    ];

    return (
        <section className="bg-gradient-to-br from-black via-black to-[#1a4498] py-[60px] lg:py-[90px] mt-[60px] lg:mt-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-semibold text-white leading-tight">
                        Ưu đãi đặc biệt
                    </h2>
                </div>

                {/* Offers Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-2 bg-gray-950 rounded-2xl">
                    {/* Gói cam kết */}
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-white transition-all duration-500 group hover:bg-gradient-to-br hover:from-white/8 hover:to-white/15 hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-1">
                        <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#c59efe] rounded-xl mb-4 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#c59efe]/30">
                                <Clock className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <h3 className="text-[16px] font-medium text-white mb-2 transition-colors duration-300 group-hover:text-[#c59efe]">Gói cam kết</h3>
                            <p className="text-gray-400 text-sm transition-colors duration-300 group-hover:text-gray-300">Cam kết thời gian sử dụng</p>
                        </div>

                        <div className="space-y-4">
                            {commitmentOffers.map((offer, index) => (
                                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 offer-item">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-white font-semibold transition-colors duration-300">{offer.duration}</span>
                                        <span className="text-[#c59efe] font-bold text-lg transition-all duration-300 group-hover:text-[#d4b5ff]">Giảm {offer.discount}</span>
                                    </div>
                                    {offer.bonus && (
                                        <div className="flex items-start gap-2 mt-3 pt-3 border-t border-white/10 transition-colors duration-300">
                                            <Gift className="w-4 h-4 text-[#c59efe] mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover:text-[#d4b5ff]" />
                                            <p className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-gray-200">{offer.bonus}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gói tăng trưởng */}
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 group hover:bg-gradient-to-br hover:from-white/8 hover:to-white/15 hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-1">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#1a4498] to-[#c59efe] rounded-xl mb-4 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#1e4fb8] group-hover:to-[#d4b5ff] group-hover:shadow-lg group-hover:shadow-[#c59efe]/30">
                                <TrendingUp className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#c59efe]">Gói tăng trưởng</h3>
                            <p className="text-gray-400 text-sm transition-colors duration-300 group-hover:text-gray-300">Dựa trên ngân sách đầu tư</p>
                        </div>

                        <div className="space-y-4">
                            <div className="grid grid-cols-3 gap-2 text-xs font-semibold text-gray-400 mb-2 transition-colors duration-300 group-hover:text-gray-300">
                                <span>Ngân sách</span>
                                <span>Cashback</span>
                                <span>Hình thức</span>
                            </div>
                            {growthOffers.map((offer, index) => (
                                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                                    <div className="grid grid-cols-3 gap-2 items-center">
                                        <div className="flex items-center gap-1">
                                            <ChevronRight className="w-4 h-4 text-[#c59efe] transition-colors duration-300 group-hover:text-[#d4b5ff]" />
                                            <span className="text-white font-semibold text-sm transition-colors duration-300">{offer.budget}</span>
                                        </div>
                                        <span className="text-[#c59efe] font-bold text-lg transition-colors duration-300 group-hover:text-[#d4b5ff]">{offer.cashback}</span>
                                        <div className="flex items-center gap-1">
                                            <CreditCard className="w-3 h-3 text-gray-400 transition-colors duration-300 group-hover:text-gray-300" />
                                            <span className="text-xs text-gray-300 transition-colors duration-300 group-hover:text-gray-200">{offer.method}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gói combo đa kênh */}
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 group hover:bg-gradient-to-br hover:from-white/8 hover:to-white/15 hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-1">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#1a4498] to-[#c59efe] rounded-xl mb-4 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#1e4fb8] group-hover:to-[#d4b5ff] group-hover:shadow-lg group-hover:shadow-[#c59efe]/30">
                                <Package className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#c59efe]">Gói combo đa kênh</h3>
                            <p className="text-gray-400 text-sm transition-colors duration-300 group-hover:text-gray-300">Kết hợp nhiều dịch vụ</p>
                        </div>

                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-gray-400 mb-2 transition-colors duration-300 group-hover:text-gray-300">
                                <span>Số dịch vụ</span>
                                <span>Ưu đãi áp dụng</span>
                            </div>
                            {comboOffers.map((offer, index) => (
                                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1">
                                            {index === 1 && <ChevronRight className="w-4 h-4 text-[#c59efe] transition-colors duration-300 group-hover:text-[#d4b5ff]" />}
                                            <span className="text-white font-semibold transition-colors duration-300">{offer.services}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Percent className="w-4 h-4 text-[#c59efe] transition-colors duration-300 group-hover:text-[#d4b5ff]" />
                                            <span className="text-[#c59efe] font-bold text-lg transition-colors duration-300 group-hover:text-[#d4b5ff]">Giảm {offer.discount}</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2 transition-colors duration-300 group-hover:text-gray-300">tổng chi phí</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-300 mb-8 text-lg transition-colors duration-300">
                        Liên hệ ngay để được tư vấn gói ưu đãi phù hợp nhất
                    </p>
                    <button className="bg-gradient-to-r from-[#1a4498] to-[#c59efe] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-[#1e4fb8] hover:to-[#d4b5ff] hover:shadow-xl hover:shadow-[#c59efe]/25 hover:scale-105 active:scale-95">
                        Tư vấn ngay
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OffersSection;