import React from 'react';
import { Star, CheckCircle, Target } from 'lucide-react';

export default function ConsultationSectionPrimary() {
    return (
        <section
            className="bg-gradient-to-t from-black via-black to-[#2B144D] py-[60px] lg:py-[90px] px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            <div className="max-w-[1440px] mx-auto">
                {/* Header */}
                <div className="text-left mb-4 lg:mb-8">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[60px] font-archivo font-bold text-white mb-1 uppercase">
                        Nhận tư vấn
                    </h2>
                    <p className="text-[15px] sm:text-[18px] text-white">
                        Nextgency chân thành cảm ơn bạn đã dành thời gian điền bảng khảo sát này. Đội ngũ của chúng tôi sẽ xem xét kỹ thông tin và liên hệ trong vòng 24h làm việc để tư vấn giải pháp phù hợp nhất.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Right Side - Form */}
                    <div className="relative">
                        <div className="backdrop-blur-3xl bg-white/5 rounded-xl border-2 border-white/10 shadow-2xl p-4 lg:p-6">
                            <div className="space-y-4">
                                <div className="space-y-4">
                                    {/* Tên khách hàng */}
                                    <div className="space-y-2">
                                        <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                            Tên khách hàng
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2.5 bg-white/95 border-2 border-white/20 rounded-lg text-black text-[13px] lg:text-[15px] placeholder-gray-400 transition-all duration-300 focus:border-[#1a4498] focus:bg-white focus:shadow-lg"
                                            placeholder="Nhập tên của bạn"
                                            required
                                        />
                                    </div>

                                    {/* Row with Phone and Email */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {/* Số điện thoại */}
                                        <div className="space-y-2">
                                            <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                                Số điện thoại
                                            </label>
                                            <input
                                                type="tel"
                                                className="w-full px-4 py-2.5 bg-white/95 border-2 border-white/20 rounded-lg text-black text-[13px] lg:text-[15px] placeholder-gray-400 transition-all duration-300 focus:border-[#1a4498] focus:bg-white focus:shadow-lg"
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
                                                className="w-full px-4 py-2.5 bg-white/95 border-2 border-white/20 rounded-lg text-black text-[13px] lg:text-[15px] placeholder-gray-400 transition-all duration-300 focus:border-[#1a4498] focus:bg-white focus:shadow-lg"
                                                placeholder="example@gmail.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Row with Business Field and Brand */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {/* Lĩnh vực kinh doanh */}
                                        <div className="space-y-2">
                                            <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                                Lĩnh vực kinh doanh
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2.5 bg-white/95 border-2 border-white/20 rounded-lg text-black text-[13px] lg:text-[15px] placeholder-gray-400 transition-all duration-300 focus:border-[#1a4498] focus:bg-white focus:shadow-lg"
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
                                                className="w-full px-4 py-2.5 bg-white/95 border-2 border-white/20 rounded-lg text-black text-[13px] lg:text-[15px] placeholder-gray-400 transition-all duration-300 focus:border-[#1a4498] focus:bg-white focus:shadow-lg"
                                                placeholder="Nhập tên thương hiệu (nếu có)"
                                            />
                                        </div>
                                    </div>

                                    {/* Yêu cầu tư vấn */}
                                    <div className="space-y-2">
                                        <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                            Yêu cầu tư vấn
                                        </label>
                                        <textarea
                                            rows="5"
                                            className="w-full px-4 py-2.5 bg-white/95 border-2 border-white/20 rounded-lg text-black text-[13px] lg:text-[15px] placeholder-gray-400 transition-all duration-300 focus:border-[#1a4498] focus:bg-white focus:shadow-lg resize-none"
                                            placeholder="Mô tả chi tiết yêu cầu tư vấn của bạn..."
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full group relative px-8 py-4 bg-[#c59efe] rounded-lg text-white font-medium text-[15px] lg:text-[16px] hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                                    >
                                        <span className="flex items-center justify-center space-x-2">
                                            <span>Gửi thông tin</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Left Side - Visual Elements */}
                    <div className="relative">
                        {/* Main Visual Card */}
                        <div className="relative ">
                            <div className="space-y-4 ">
                                <div className="flex items-center space-x-3 bg-white/10 p-2 rounded-xl shadow-lg backdrop-blur-3xl">
                                    <div className="w-14 h-14 bg-[#c59efe] rounded-lg flex items-center justify-center">
                                        <Star className="w-8 h-8 text-white" fill="currentColor" />
                                    </div>
                                    <div>
                                        <h3 className="text-white text-[14px] lg:text-[15px] font-medium">Tư vấn miễn phí</h3>
                                        <p className="text-gray-300 text-[12px] lg:text-[14px]">Chuyên gia hàng đầu</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 bg-white/10 p-2 rounded-xl shadow-lg backdrop-blur-3xl">
                                    <div className="w-14 h-14 bg-[#c59efe] rounded-lg flex items-center justify-center">
                                        <CheckCircle className="w-8 h-8 text-white"  />
                                    </div>
                                    <div>
                                        <h3 className="text-white text-[14px] lg:text-[15px] font-medium">Phản hồi nhanh</h3>
                                        <p className="text-gray-300 text-[12px] lg:text-[14px]">Trong vòng 24h</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 bg-white/10 p-2 rounded-xl shadow-lg backdrop-blur-3xl">
                                    <div className="w-14 h-14 bg-[#c59efe] rounded-lg flex items-center justify-center">
                                        <Target className="w-8 h-8 text-white"  />
                                    </div>
                                    <div>
                                        <h3 className="text-white text-[14px] lg:text-[15px] font-medium">Giải pháp tối ưu</h3>
                                        <p className="text-gray-300 text-[12px] lg:text-[14px]">Phù hợp từng doanh nghiệp</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -top-4 -right-0 bg-[#c59efe] rounded-lg px-4 py-2">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">500+</div>
                                    <div className="text-xs text-white">Khách hàng</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}