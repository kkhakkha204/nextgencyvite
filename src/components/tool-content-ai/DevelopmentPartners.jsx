import React from 'react';

/* Hai đơn vị cùng phát triển Tool Content AI */
const DEVELOPERS = [
    {
        name: 'Nextgency',
        role: 'Chiến lược & sản phẩm',
        logo: '/assets/images/header/navbarlogoblack.png',
        logoClass: 'max-h-10 lg:max-h-12 max-w-[80%]'
    },
    {
        name: 'Noti.vn',
        role: 'Nền tảng & công nghệ',
        logo: '/assets/images/partner/noti.webp',
        logoClass: 'max-h-14 lg:max-h-16 max-w-[60%]'
    }
];

const DevelopmentPartners = () => {
    return (
        <section className="bg-white py-[60px] lg:py-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Tiêu đề và mô tả ngắn */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-8">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black uppercase leading-[1.45] mb-1">
                            Đồng hành<br/>Phát triển
                        </h2>
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-right">
                        <p className="text-[15px] lg:text-[18px] text-black">
                            Hai đội ngũ cùng nghiên cứu và xây dựng nền tảng Automation Tool Content AI
                        </p>
                    </div>
                </div>

                {/* Hai logo bên trái - khung mô tả bên phải */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {DEVELOPERS.map((developer) => (
                        <div
                            key={developer.name}
                            className="group relative flex min-h-[160px] flex-col items-center justify-center gap-4
                                       overflow-hidden rounded-xl border border-[#e9d5ff] bg-white p-6
                                       transition-all duration-300 ease-in-out
                                       hover:-translate-y-1 hover:border-[#c08dfe] hover:shadow-lg cursor-pointer"
                        >
                            <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br from-[#c08dfe]/30 to-transparent blur-xl" />
                            <img
                                src={developer.logo}
                                alt={`Logo ${developer.name}`}
                                loading="lazy"
                                className={`relative object-contain transition-opacity duration-300 group-hover:opacity-80 ${developer.logoClass}`}
                            />
                            <div className="relative text-center">
                                <p className="text-[12px] lg:text-[13px] text-gray-600">{developer.role}</p>
                            </div>
                        </div>
                    ))}

                    {/* Khung đen mô tả */}
                    <div className="col-span-2 flex items-center neu-shadow-xs bg-black
                                    rounded-xl p-4 lg:p-6 transition-all duration-500 ease-in-out cursor-pointer">
                        <div>
                            <p className="text-[14px] lg:text-[15px] text-white leading-relaxed mb-2">
                                Automation Tool Content AI là sản phẩm được <strong>Noti.vn</strong> và <strong>Nextgency</strong> cùng
                                nghiên cứu và phát triển – kết hợp năng lực tư vấn chuyển đổi số, dữ liệu marketing với kinh nghiệm
                                vận hành nền tảng công nghệ quy mô lớn.
                            </p>
                            <p className="text-[14px] lg:text-[15px] text-white leading-relaxed">
                                Hai đội ngũ cùng chịu trách nhiệm từ kiến trúc hệ thống, mô hình AI cho tới trải nghiệm người dùng,
                                đảm bảo sản phẩm được cập nhật liên tục theo thay đổi của công cụ tìm kiếm và các nền tảng AI.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevelopmentPartners;
