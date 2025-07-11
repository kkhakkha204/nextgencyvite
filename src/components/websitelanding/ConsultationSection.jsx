import React from 'react';
import { Send } from 'lucide-react';

export default function ConsultationSection() {
    return (
        <section
            className="bg-gradient-to-br from-black to-[#5534bb] py-[60px] lg:py-[90px] px-6 sm:px-6 lg:px-8 relative"
        >
            <div className="max-w-[700px] mx-auto">
                {/* Header */}
                <div className="text-center mb-6 lg:mb-10">
                    <h2 className="text-[24px] lg:text-[40px] font-archivo font-semibold text-white mb-1">
                        Nhận tư vấn
                    </h2>
                    <p className="text-[15px] sm:text-[18px] text-white max-w-2xl mx-auto leading-relaxed">
                        Để lại thông tin của bạn, chúng tôi sẽ liên hệ và tư vấn giải pháp phù hợp nhất
                    </p>
                </div>

                {/* Glassmorphism Form */}
                <div className="backdrop-blur-3xl bg-white/10 rounded-3xl border-2 border-white shadow-2xl p-4 sm:p-6 lg:p-6">
                    <form className="space-y-6">
                        <div className="space-y-6">
                            {/* Tên khách hàng */}
                            <div className="space-y-2">
                                <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                    Tên khách hàng
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2.5 bg-white/10 border-2 border-white/20 rounded-xl text-white text-[12px] lg:text-[14px] placeholder-gray-300 focus:outline-none  focus:border-white/80 transition-all duration-300 backdrop-blur-sm"
                                    placeholder="Nhập tên của bạn"
                                    required
                                />
                            </div>

                            {/* Số điện thoại */}
                            <div className="space-y-2">
                                <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                    Số điện thoại
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-2.5 bg-white/10 border-2 border-white/20 rounded-xl text-white text-[12px] lg:text-[14px] placeholder-gray-300 focus:outline-none  focus:border-white/80 transition-all duration-300 backdrop-blur-sm"
                                    placeholder="Nhập số điện thoại"
                                    required
                                />
                            </div>

                            {/* Gmail */}
                            <div className="space-y-2">
                                <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                    Gmail
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2.5 bg-white/10 border-2 border-white/20 rounded-xl text-white text-[12px] lg:text-[14px] placeholder-gray-300 focus:outline-none  focus:border-white/80 transition-all duration-300 backdrop-blur-sm"
                                    placeholder="example@gmail.com"
                                    required
                                />
                            </div>

                            {/* Lĩnh vực kinh doanh */}
                            <div className="space-y-2">
                                <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                    Lĩnh vực kinh doanh / hoạt động
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2.5 bg-white/10 border-2 border-white/20 rounded-xl text-white text-[12px] lg:text-[14px] placeholder-gray-300 focus:outline-none  focus:border-white/80 transition-all duration-300 backdrop-blur-sm"
                                    placeholder="Ví dụ: Thương mại điện tử, F&B..."
                                    required
                                />
                            </div>

                            {/* Tên thương hiệu */}
                            <div className="space-y-2">
                                <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                    Tên thương hiệu
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2.5 bg-white/10 border-2 border-white/20 rounded-xl text-white text-[12px] lg:text-[14px] placeholder-gray-300 focus:outline-none  focus:border-white/80 transition-all duration-300 backdrop-blur-sm"
                                    placeholder="Nhập tên thương hiệu (nếu có)"
                                />
                            </div>

                            {/* Yêu cầu tư vấn */}
                            <div className="space-y-2">
                                <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                    Yêu cầu tư vấn
                                </label>
                                <textarea
                                    rows="6"
                                    className="w-full px-4 py-2.5 bg-white/10 border-2 border-white/20 rounded-xl text-white text-[12px] lg:text-[14px] placeholder-gray-300 focus:outline-none  focus:border-white/80 transition-all duration-300 backdrop-blur-sm resize-none"
                                    placeholder="Mô tả chi tiết yêu cầu tư vấn của bạn..."
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Submit Button - Outside Form */}
                <div className="text-center pt-8">
                    <button
                        type="button"
                        className="group relative px-12 py-4 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white font-semibold text-lg hover:from-white/30 hover:to-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                        <span className="flex items-center gap-3">
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            Gửi thông tin
                        </span>
                    </button>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
}