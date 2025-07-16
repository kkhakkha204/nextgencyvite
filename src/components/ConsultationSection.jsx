import React from 'react';

export default function ConsultationSection() {
    return (
        <section
            className="bg-gradient-to-br from-black to-[#5534bb] py-[60px] lg:py-[90px] px-6 sm:px-6 lg:px-8 relative"
        >
            <div className="max-w-[700px] mx-auto">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-semibold text-white mb-1">
                        Nhận tư vấn
                    </h2>
                    <p className="text-[15px] sm:text-[18px] text-white max-w-2xl mx-auto leading-relaxed">
                        Nextgency chân thành cảm ơn bạn đã dành thời gian điền bảng khảo sát này. Đội ngũ của chúng tôi sẽ xem xét kỹ thông tin và liên hệ trong vòng 24h làm việc để tư vấn giải pháp phù hợp nhất.
                    </p>
                </div>

                {/* Glassmorphism Form */}
                <div className="backdrop-blur-3xl bg-white/10 rounded-2xl border-2 border-white/80 shadow-2xl p-4 sm:p-6 lg:p-6">
                    <form className="space-y-6">
                        <div className="space-y-6">
                            {/* Tên khách hàng */}
                            <div className="space-y-2">
                                <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                    Tên khách hàng
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2.5  border-2 border-white/20 rounded-2xl text-black text-[12px] lg:text-[14px] placeholder-gray-700 transition-all duration-300 "
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
                                    className="w-full px-4 py-2.5  border-2 border-white/20 rounded-2xl text-black text-[12px] lg:text-[14px] placeholder-gray-700 transition-all duration-300 "
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
                                    className="w-full px-4 py-2.5  border-2 border-white/20 rounded-2xl text-black text-[12px] lg:text-[14px] placeholder-gray-700 transition-all duration-300 "
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
                                    className="w-full px-4 py-2.5  border-2 border-white/20 rounded-2xl text-black text-[12px] lg:text-[14px] placeholder-gray-700 transition-all duration-300 "
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
                                    className="w-full px-4 py-2.5  border-2 border-white/20 rounded-2xl text-black text-[12px] lg:text-[14px] placeholder-gray-700 transition-all duration-300 "
                                    placeholder="Nhập tên thương hiệu (nếu có)"
                                />
                            </div>

                            {/* Yêu cầu tư vấn */}
                            <div className="space-y-2">
                                <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                    Yêu cầu tư vấn
                                </label>
                                <textarea
                                    rows="5"
                                    className="w-full px-4 py-2.5 border-2 border-white/20 rounded-2xl text-black text-[12px] lg:text-[14px] placeholder-gray-700 transition-all duration-300 "
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
                        className="group relative px-12 py-4 bg-black backdrop-blur-sm border border-white/30 rounded-full text-white font-medium text-lg hover:from-white/30 hover:to-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                        <span className="flex items-center text-[15px] lg:text-[16px]">
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