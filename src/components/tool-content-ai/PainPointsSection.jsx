import React from 'react';
import {ArrowUpRight, ChevronRight} from 'lucide-react';
import {Link} from "react-router-dom";

const PainPointSection = () => {
    const painPoints = [
        {
            title: "Báo cáo Social đa nền tảng",
            description: "Quét Facebook, TikTok, YouTube, Instagram — AI mổ xẻ nội dung, tương tác và chiến lược đối thủ.",
        },
        {
            title: "Viết bài chuẩn SEO · GEO",
            description: "Nội dung tối ưu để Google xếp hạng và được AI trích dẫn: ChatGPT, Gemini, AI Overviews.",
        },
        {
            title: "Tự động internal link & backlink",
            description: "AI tìm bài liên quan và đi link nội bộ lẫn chéo site — chỉ nối nội dung thật sự liên quan.",
        }
    ];

    const solutions = [
        {
            title: "Phân tích shop sàn TMĐT",
            description: "Báo cáo Shopee, TikTok Shop, Lazada: sản phẩm, đánh giá, giá và cơ hội thị trường.",
        },
        {
            title: "Phân tích kịch bản video",
            description: "Dán link TikTok/YouTube/Facebook — AI bóc tách hook, công thức, timeline theo giây và lý do viral.",
        },
        {
            title: "Phân tích, lên kế hoạch, viết",
            description: "Từ nghiên cứu từ khóa đến kế hoạch nội dung và bài hoàn chỉnh — tất cả bằng AI, trong một luồng.",
        }
    ];

    const OpenNewSite = (e) => {
        e.preventDefault();
        window.open('https://app.nextgency.vn/login', '_blank');
    };

    return (
        <section className="pt-[60px] lg:pt-[90px] relative" id='features'>
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black uppercase leading-[1.45] mb-1">
                        Tất cả những gì bạn cần, trong một nền tảng
                    </h2>
                    <p className="text-black mb-4 text-[15px] lg:text-[18px] transition-colors duration-300">
                        Sáu năng lực cốt lõi giúp bạn thắng cả trên Google lẫn trong câu trả lời của AI.
                    </p>
                </div>

                {/* Pain & Solution Cards */}
                <div className="relative space-y-6 p-2 bg-gray-50 rounded-2xl">
                    {painPoints.map((pain, index) => {
                        return (
                            <div key={index} className="group relative">
                                {/* Connection line */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 hidden md:block">
                                    <div className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center neu-shadow-xs shadow-lg group-hover:border-[#c08dfe] transition-all duration-300">
                                        <ChevronRight className="w-5 h-5 text-[#c08dfe] transition-transform duration-300" />
                                    </div>
                                </div>

                                <div className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] z-20">
                                    <div className="grid md:grid-cols-2 p-2 gap-2">
                                        {/* Pain Point - Left Side */}
                                        <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg px-6 py-5 md:px-16 md:py-7 relative">
                                            <div className="relative z-10">
                                                <div className="flex justify-center mb-2">
                                                </div>
                                                <div className="text-center">
                                                    <h4 className="text-white font-medium text-[15px] lg:text-[18px] mb-1">
                                                        {pain.title}
                                                    </h4>
                                                    <p className="text-gray-300 text-[13px] lg:text-[15px]">
                                                        {pain.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Solution - Right Side */}
                                        <div className="bg-gradient-to-br from-white to-gray-50 neu-shadow-inset-xs rounded-lg px-6 py-5 md:px-16 md:py-7 relative">

                                            {/* Decorative elements */}
                                            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#c08dfe]/35 to-transparent rounded-full blur-xl"></div>

                                            <div className="relative z-10">
                                                <div className="flex justify-center mb-2">
                                                </div>
                                                <div className="text-center">
                                                    <h4 className="text-black font-medium text-[15px] lg:text-[18px] mb-1">
                                                        {solutions[index].title}
                                                    </h4>
                                                    <p className="text-gray-700 text-[13px] lg:text-[15px] mb-2">
                                                        {solutions[index].description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* CTA */}
                <div className="text-center mt-8">
                    <p className="text-black mb-4 text-[15px] lg:text-[18px] transition-colors duration-300">
                        Đăng ký trải nghiệm ngay
                    </p>
                    {/* CTA Button */}
                    <div className="flex items-center justify-center space-x-4">
                        <button
                            onClick={OpenNewSite}
                            className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-gradient-to-r from-[#1a4498] via-[#c08dfe] to-[#1a4498] text-[16px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 group animate-gradient-shift"
                            style={{
                                backgroundSize: '200% 200%'
                            }}
                        >
                            <span className="">
                                Đăng ký dùng thử 
                            </span>
                            <div className="w-[2.5rem] h-[2.5rem] bg-black rounded-full flex items-center justify-center neu-shadow-xs transition-all duration-300">
                                <ArrowUpRight className="w-5 h-5 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-105" strokeWidth={2.5}/>
                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PainPointSection;