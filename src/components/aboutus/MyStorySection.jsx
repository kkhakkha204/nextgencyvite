import React from 'react';
import {Link} from "react-router-dom";
import {ArrowUpRight} from "lucide-react";

const MyStorySection = () => {
    return (
        <section className="bg-gradient-to-t from-black via-black to-[#2B144D] py-[60px] lg:py-[90px]">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ">

                    {/* Column A - Images */}
                    <div className="relative order-last lg:order-first">
                        {/* Main Large Image */}
                        <div className="relative aspect-[7/8] lg:aspect-[6/7] p-2 bg-white/10 backdrop-blur-2xl rounded-xl overflow-hidden">
                            <img
                                src="/assets/images/test.webp"
                                alt="Our story"
                                className="w-full h-full object-cover rounded-xl"
                            />

                            {/* Small Image - Bottom Left */}
                            <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48
                bg-black rounded-lg overflow-hidden">
                                <img
                                    src="/assets/images/test.webp"
                                    alt="Team moment"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Column B - Content */}
                    <div className="space-y-4 text-white">
                        {/* Badge */}
                        <div className="inline-flex items-center justify-center">
                        <span className=" text-white rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                            About Nextgency
                        </span>
                        </div>

                        {/* Title */}
                        <div className="space-y-4">
                            <h2 className="text-[26px] md:text-[32px] lg:text-[60px] font-archivo font-bold leading-tight uppercase">
                                Câu chuyện
                                <span className="font-archivo block text-transparent bg-clip-text bg-gradient-to-r from-white to-[#c08dfe] uppercase">
                  Của chúng tôi
                </span>
                            </h2>
                        </div>

                        {/* Descriptions with dot icons */}
                        <div className="space-y-4">
                            {/* Subtitle */}
                            <p className="text-[15px] md:text-[18px] text-[#c08dfe]">
                                Công nghệ – Bước ngoặt cho sự bứt phá
                            </p>
                            <div className="flex gap-4">
                                <div className="w-2 h-2 bg-[#c08dfe] rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-white text-[14px] md:text-[16px] max-w-lg">
                                    Nextgency được thành lập vào năm 2025, sau khi founder chính đã có hơn 5 năm kinh nghiệm kinh doanh trong lĩnh vực thương mại điện tử. Trong hành trình đó, founder nhận ra: công nghệ chính là chìa khóa thay đổi toàn bộ mô hình kinh doanh – từ quản lý vận hành, marketing cho đến tối ưu lợi nhuận.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-2 h-2 bg-[#c08dfe] rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-white text-[14px] md:text-[16px] max-w-lg">
                                    Nhờ ứng dụng công nghệ đúng cách, doanh nghiệp của founder đã bứt phá mạnh mẽ, vượt qua giới hạn cũ và mở ra con đường tăng trưởng mới. Thành công ấy trở thành minh chứng sống động rằng công nghệ không chỉ hỗ trợ, mà còn tái định hình tương lai doanh nghiệp.
                                    Từ nền tảng thực tiễn này, đội ngũ core team đã cùng nhau thành lập Nextgency, với sứ mệnh đồng hành và mang giải pháp công nghệ đã được kiểm chứng đến nhiều doanh nghiệp khác, giúp họ không chỉ giải quyết vấn đề hiện tại mà còn kiến tạo lợi thế cạnh tranh dài hạn.
                                </p>
                            </div>
                        </div>
                        <div className="">
                            {/* CTA Button */}
                            <div className="flex items-center pt-4">
                                <Link
                                    to="/contact"
                                    className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-gradient-to-r from-[#1a4498] via-[#c08dfe] to-[#1a4498] text-[15px] sm:text-[16px] text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 group animate-gradient-shift"

                                >
        <span className="">
            Tư vấn ngay
        </span>
                                    <div
                                        className="w-9 h-9 sm:w-[2.5rem] sm:h-[2.5rem] bg-black rounded-full flex items-center justify-center neu-shadow-xs transition-all duration-300">
                                        <ArrowUpRight
                                            className="w-5 h-5 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-105"
                                            strokeWidth={2.5}/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyStorySection;