import React, { useState } from 'react';
import {Code, Globe, Smartphone, ShoppingCart, Database, Cloud, Shield, Cpu, ArrowUpRight} from 'lucide-react';
import {Link} from "react-router-dom";

const ServicesSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const services = [
        {
            id: 0,
            name: 'Web Development',
            icon: <Globe className="w-4 h-4" />,
            title: 'Phát triển Website chuyên nghiệp',
            description: 'Chúng tôi xây dựng các website hiện đại với hiệu suất cao, tối ưu SEO và trải nghiệm người dùng tuyệt vời. Từ landing page đến ứng dụng web phức tạp, chúng tôi đều có thể đáp ứng.',
            image: '/assets/images/test.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'React' },
                { icon: <Code className="w-4 h-4" />, name: 'Next.js' },
                { icon: <Code className="w-4 h-4" />, name: 'Tailwind CSS' },
                { icon: <Code className="w-4 h-4" />, name: 'Node.js' }
            ],
            completedDate: '2024-12-15',
            note: 'Đảm bảo website hoạt động mượt mà trên mọi thiết bị'
        },
        {
            id: 1,
            name: 'Mobile App',
            icon: <Smartphone className="w-4 h-4" />,
            title: 'Ứng dụng di động đa nền tảng',
            description: 'Phát triển ứng dụng mobile native và cross-platform với React Native. Tối ưu hiệu suất và trải nghiệm người dùng trên cả iOS và Android.',
            image: '/assets/images/test.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'React Native' },
                { icon: <Code className="w-4 h-4" />, name: 'Flutter' },
                { icon: <Code className="w-4 h-4" />, name: 'Swift' },
                { icon: <Code className="w-4 h-4" />, name: 'Kotlin' }
            ],
            completedDate: '2024-11-20',
            note: 'Hỗ trợ cập nhật và bảo trì liên tục'
        },
        {
            id: 2,
            name: 'E-Commerce',
            icon: <ShoppingCart className="w-4 h-4" />,
            title: 'Giải pháp thương mại điện tử',
            description: 'Xây dựng hệ thống e-commerce hoàn chỉnh với tính năng quản lý sản phẩm, giỏ hàng, thanh toán online và báo cáo doanh thu chi tiết.',
            image: '/assets/images/test.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'WooCommerce' },
                { icon: <Code className="w-4 h-4" />, name: 'Shopify' },
                { icon: <Code className="w-4 h-4" />, name: 'Magento' },
                { icon: <Code className="w-4 h-4" />, name: 'Stripe API' }
            ],
            completedDate: '2024-10-30',
            note: 'Tích hợp đầy đủ cổng thanh toán trong nước và quốc tế'
        },
        {
            id: 3,
            name: 'CMS Development',
            icon: <Database className="w-4 h-4" />,
            title: 'Hệ thống quản lý nội dung',
            description: 'Phát triển CMS tùy chỉnh hoặc tích hợp các CMS phổ biến như WordPress, Sanity, Strapi. Giúp quản lý nội dung dễ dàng và hiệu quả.',
            image: '/assets/images/test.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'WordPress' },
                { icon: <Code className="w-4 h-4" />, name: 'Sanity' },
                { icon: <Code className="w-4 h-4" />, name: 'Strapi' },
                { icon: <Code className="w-4 h-4" />, name: 'Directus' }
            ],
            completedDate: '2024-09-15',
            note: 'Giao diện quản trị thân thiện, dễ sử dụng'
        },
        {
            id: 4,
            name: 'Cloud Solutions',
            icon: <Cloud className="w-4 h-4" />,
            title: 'Giải pháp đám mây',
            description: 'Triển khai và quản lý hạ tầng trên cloud với AWS, Google Cloud, Azure. Đảm bảo hệ thống luôn sẵn sàng và có khả năng mở rộng cao.',
            image: '/assets/images/test.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'AWS' },
                { icon: <Code className="w-4 h-4" />, name: 'Google Cloud' },
                { icon: <Code className="w-4 h-4" />, name: 'Docker' },
                { icon: <Code className="w-4 h-4" />, name: 'Kubernetes' }
            ],
            completedDate: '2024-08-20',
            note: 'Giám sát 24/7 và tự động scale khi cần thiết'
        },
        {
            id: 5,
            name: 'Security',
            icon: <Shield className="w-4 h-4" />,
            title: 'Bảo mật ứng dụng',
            description: 'Đánh giá và tăng cường bảo mật cho hệ thống. Thực hiện penetration testing, audit code và triển khai các biện pháp bảo vệ hiện đại.',
            image: '/assets/images/test.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'OWASP' },
                { icon: <Code className="w-4 h-4" />, name: 'SSL/TLS' },
                { icon: <Code className="w-4 h-4" />, name: 'WAF' },
                { icon: <Code className="w-4 h-4" />, name: '2FA' }
            ],
            completedDate: '2024-07-10',
            note: 'Cập nhật thường xuyên theo các tiêu chuẩn bảo mật mới nhất'
        },
        {
            id: 6,
            name: 'API Development',
            icon: <Cpu className="w-4 h-4"/>,
            title: 'Phát triển API',
            description: 'Xây dựng RESTful API và GraphQL với hiệu suất cao. Tích hợp với các hệ thống bên thứ ba và cung cấp documentation đầy đủ.',
            image: '/assets/images/test.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'REST API' },
                { icon: <Code className="w-4 h-4" />, name: 'GraphQL' },
                { icon: <Code className="w-4 h-4" />, name: 'Swagger' },
                { icon: <Code className="w-4 h-4" />, name: 'Postman' }
            ],
            completedDate: '2024-06-25',
            note: 'Documentation chi tiết và hỗ trợ integration'
        },
        {
            id: 7,
            name: 'Consulting',
            icon: <Code className="w-4 h-4" />,
            title: 'Tư vấn công nghệ',
            description: 'Tư vấn chiến lược công nghệ, lựa chọn tech stack phù hợp và xây dựng roadmap phát triển. Đánh giá và tối ưu hóa hệ thống hiện tại.',
            image: '/assets/images/test.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'Tech Audit' },
                { icon: <Code className="w-4 h-4" />, name: 'Architecture' },
                { icon: <Code className="w-4 h-4" />, name: 'Roadmap' },
                { icon: <Code className="w-4 h-4" />, name: 'Best Practices' }
            ],
            completedDate: '2024-05-30',
            note: 'Đội ngũ chuyên gia với kinh nghiệm 10+ năm'
        }
    ];

    return (
        <section className="bg-gradient-to-t from-black via-black to-[#2B144D] py-[60px] lg:py-[90px]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-4 sm:mb-8">
                    <div className="inline-flex items-center justify-center">
                        <span className=" text-white rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                            Services
                        </span>
                    </div>
                    <h2 className="text-[26px] md:text-[32px] lg:text-[60px] font-archivo font-bold text-white mb-1 uppercase">
                        Dịch vụ từ Nextgency
                    </h2>
                    <p className="text-gray-400 text-[15px] lg:text-[18px] max-w-2xl">
                        Cung cấp <span className="text-white">giải pháp</span> công nghệ <span className="text-white">toàn diện</span>, từ thiết kế đến triển khai.
                    </p>
                </div>

                {/* Tabs */}
                <div className="mb-4 sm:mb-8">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                        {services.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(index)}
                                className={`flex items-center gap-1 px-4 py-2.5 rounded-full transition-all duration-300 text-[12px] lg:text-[15px] ${
                                    activeTab === index
                                        ? 'bg-white text-black neu-shadow-xs'
                                        : 'bg-white/5 text-gray-100 hover:bg-white/10 border border-white/25'
                                }`}
                            >
                                {service.icon}
                                <span className="">{service.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="">
                {/* Tab Content */}
                <div className=" overflow-hidden ">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`transition-all duration-500 ${
                                activeTab === index
                                    ? 'opacity-100 transform translate-y-0'
                                    : 'opacity-0 transform translate-y-4 absolute pointer-events-none'
                            }`}
                        >
                            {activeTab === index && (
                                <div className="">
                                    {/* Row 1: Title */}
                                    <h3 className="text-[18px] md:text-[24px] lg:text-[32px] font-medium text-white mb-4 sm:mb-8 border-b border-gray-100 pb-4">
                                        {service.title}
                                    </h3>

                                    {/* Row 2: Two columns */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                                        {/* Column 1: Description & Image */}
                                        <div className="space-y-12 p-4">
                                            <div>
                                                <h4 className="text-[11px] sm:text-[13px] font-medium text-[#c08dfe] mb-4 uppercase tracking-widest">Mô tả</h4>
                                                <p className="text-white text-[14px] sm:text-[16px] text-justify">
                                                    {service.description}
                                                </p>
                                            </div>

                                            <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden p-2 bg-white/10 backdrop-blur-2xl">
                                                <img
                                                    src={service.image}
                                                    alt={service.name}
                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                            </div>
                                        </div>

                                        {/* Column 2: Technologies, Date, Note */}
                                        <div className="">
                                            <div className="space-y-12 p-4">
                                                {/* Technologies */}
                                                <div className="">
                                                    <h4 className="text-[11px] sm:text-[13px] font-medium text-[#c08dfe] mb-4 uppercase tracking-widest">Công nghệ sử dụng</h4>
                                                    <div className="flex flex-wrap gap-3">
                                                        {service.technologies.map((tech, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="flex items-center gap-2 pr-4 text-white transition-colors"
                                                            >
                                                                {tech.icon}
                                                                <span className="text-sm text-[14px] lg:text-[16px]">{tech.name}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Completed Date */}
                                                <div>
                                                    <h4 className="text-[11px] sm:text-[13px] font-medium text-[#c08dfe] mb-4 uppercase tracking-widest">Ngày hoàn thành</h4>
                                                    <p className="text-[14px] lg:text-[16px] text-white inline-block">
                                                        {service.completedDate}
                                                    </p>
                                                </div>

                                                {/* Note */}
                                                <div>
                                                    <h4 className="text-[11px] sm:text-[13px] font-medium text-[#c08dfe] mb-4 uppercase tracking-widest">Lưu ý</h4>
                                                    <p className="text-[14px] lg:text-[16px] text-white">
                                                        {service.note}
                                                    </p>
                                                </div>

                                            </div>
                                            <div className=" mt-8">
                                                {/* CTA Button */}
                                                <div className="flex items-center space-x-2 ">
                                                    <Link
                                                        to="/contact"
                                                        className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-gradient-to-r from-[#1a4498] via-[#c08dfe] to-[#1a4498] text-[15px] sm:text-[16px] text-white rounded-full transition-all duration-300  hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 group animate-gradient-shift"

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
                                                    <Link
                                                        to="/contact"
                                                        className="relative flex items-center space-x-3 px-6 py-3.5 text-[15px] sm:text-[16px] text-white border-x border-white rounded-full transition-all duration-300 hover:shadow-gray-300 hover:scale-105 group"

                                                    >
        <span className="">
            Tư vấn ngay
        </span>
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;