import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="pt-[60px] lg:pt-[90px] bg-white">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] font-archivo font-semibold leading-tight">
                        Vì sao bạn nên chọn<br />
                        <span className="bg-gradient-to-r from-black to-[#5534bb] bg-clip-text text-transparent font-archivo text-[40px] md:text-[50px] lg:text-[60px] uppercase">
              Nextgency?
            </span>
                    </h2>
                    <p className="hidden lg:block text-black text-[15px] lg:text-[18px] max-w-2xl mx-auto leading-relaxed">
                        Nextgency là đơn vị thiết kế web và landing page uy tín với 3 năm kinh nghiệm, chuyên tạo giao diện đẹp, tối ưu chuyển đổi và dễ quản lý – đồng hành cùng hàng trăm doanh nghiệp nâng tầm thương hiệu số.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Cột A (40%) */}
                    <div className="lg:col-span-2 bg-black rounded-2xl px-6 pt-6 text-white lg:h-[500px]">
                        {/* Row A (45%) */}
                        <div className="mb-6 lg:mb-8 lg:h-[20%] flex flex-col justify-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {/* Cột mô tả */}
                                <div className="flex flex-col justify-center">
                                    <p className="text-gray-100 text-[14px] lg:text-[16px] leading-relaxed">
                                        Biến quy trình thủ công thành tự động – giải phóng 80% thời gian cho đội Sale
                                    </p>
                                </div>

                                {/* Cột badges */}
                                <div className="flex flex-wrap gap-3 items-center justify-center">
                                    <div className="bg-gradient-to-r from-[#2faeec] via-black to-black text-white px-4 py-2 rounded-full text-sm font-medium transform -rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-300 ease-out cursor-pointer hover:shadow-lg hover:shadow-cyan-500/25">
                                        Nhiệt tình
                                    </div>
                                    <div className="bg-gradient-to-r from-black via-black to-[#5534bb] text-white px-4 py-2 rounded-full text-sm font-medium transform rotate-2 hover:rotate-0 hover:scale-110 transition-all duration-300 ease-out cursor-pointer hover:shadow-lg hover:shadow-purple-500/25">
                                        Trẻ trung
                                    </div>
                                    <div className="bg-gradient-to-r from-[#2faeec] via-black to-[#5534bb] text-white px-4 py-2 rounded-full text-sm font-medium transform -rotate-1 hover:rotate-0 hover:scale-110 transition-all duration-300 ease-out cursor-pointer hover:shadow-lg hover:shadow-indigo-500/25">
                                        Giàu kinh nghiệm
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row B (55%) - Ảnh nhân sự */}
                        <div className="h-[80%] flex lg:pb-8">
                            <div className="w-full h-56 md:h-full pb-6 overflow-hidden">
                                <img
                                    src="/assets/images/whychooseus.webp"
                                    alt="Đội ngũ chuyên gia Nextgency"
                                    className="w-full h-full rounded-2xl object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Cột B (60%) */}
                    <div className="lg:col-span-3 space-y-3 lg:h-[500px]">
                        {/* Row A (50%) */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:h-[245px]">
                            {/* Cột 60% */}
                            <div className="md:col-span-3 rounded-2xl p-6 relative overflow-hidden h-full">
                                <h3 className="text-[16px] lg:text-[20px] font-medium mb-4 text-black">
                                    Kinh nghiệm 3+ năm
                                </h3>
                                <p className="text-[14px] lg:text-[16px] text-gray-800 leading-relaxed">
                                    Cá nhân hoá nội dung theo hành vi từng khách hàng – tăng mạnh tỷ lệ chuyển đổi.
                                </p>
                                <div className="absolute bottom-2 right-2 lg:bottom-6 lg:right-6">
                                    <svg className="w-11+ h-11 lg:w-20 lg:h-20 text-black opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path fill="black" stroke="none" d="M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" d="M9 12l2 2 4-4"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Cột 40% */}
                            <div className="md:col-span-2 bg-gradient-to-br from-[#5534bb] to-black rounded-2xl p-6 flex flex-col h-full">
                                <h3 className="text-[16px] lg:text-[20px] font-medium mb-4 text-white">
                                    Tối ưu SEO
                                </h3>
                                <p className="text-[14px] lg:text-[16px] text-gray-100 leading-relaxed">
                                    Kết nối đa nền tảng: Zalo – Facebook – Website – CRM vào 1 hệ thống duy nhất
                                </p>
                            </div>
                        </div>

                        {/* Row B (50%) */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:h-[245px]">
                            {/* Cột 40% */}
                            <div className="md:col-span-2 border-2 border-black rounded-2xl p-6 flex flex-col h-full">
                                <h3 className="text-[16px] lg:text-[20px] font-medium mb-4 text-[#1c1c1c]">
                                    Hỗ trợ 24/7
                                </h3>
                                <p className="text-[14px] lg:text-[16px] text-gray-800 leading-relaxed">
                                    Kích hoạt AI trả lời thông minh – chatbot tư vấn sản phẩm tự động
                                </p>
                            </div>

                            {/* Cột 60% */}
                            <div className="md:col-span-3 bg-black rounded-2xl p-6 flex flex-col justify-center items-center text-center text-white h-full">
                                <p className="text-gray-100 text-[14px] lg:text-[16px] ">
                                    Được tin tưởng bởi
                                </p>
                                <div className="text-[40px] lg:text-[56px] font-semibold bg-[#ae80fd] bg-clip-text text-transparent">
                                    100+
                                </div>
                                <p className="text-gray-100 text-[14px] lg:text-[16px]">
                                    Doanh nghiệp
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;