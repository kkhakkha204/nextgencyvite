import React, { useState, useEffect, useRef } from 'react';
import {
    Code,
    Globe,
    Smartphone,
    ArrowUpRight,
    Bot,
    Target, Music, Users, BarChart3, CheckCircle
} from 'lucide-react';
import { Link } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    // Refs cho animation
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const labelRef = useRef(null);
    const titleRef = useRef(null);
    const tabsRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    const services = [
        {
            id: 0,
            name: 'Automation - Ai - Data',
            icon: <Bot className="w-4 h-4" />,
            title: 'Automation - ai - data',
            description: 'Muốn nhân bản năng suất, giảm thủ công, tăng trải nghiệm? Câu trả lời nằm ở Automation và AI. Nextgency giúp doanh nghiệp chuyển mình thông minh hóa quy trình.',
            image: '/assets/images/test.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'React' },
                { icon: <Code className="w-4 h-4" />, name: 'Next.js' },
                { icon: <Code className="w-4 h-4" />, name: 'Tailwind CSS' },
                { icon: <Code className="w-4 h-4" />, name: 'Node.js' }
            ],
            completedDate: '99 ngày',
            note: 'Đảm bảo website hoạt động mượt mà trên mọi thiết bị',
            link:'/services/ai-data'
        },
        {
            id: 1,
            name: 'Google Ads',
            icon: <Target className="w-4 h-4" />,
            title: 'Google ads',
            description: 'Nextgency triển khai Google Ads với đa dạng chiến dịch để đưa doanh nghiệp lên top 1 trong tâm trí người dùng khi nhắc tới lĩnh vực của bạn.',
            image: '/assets/images/test.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'React Native' },
                { icon: <Code className="w-4 h-4" />, name: 'Flutter' },
                { icon: <Code className="w-4 h-4" />, name: 'Swift' },
                { icon: <Code className="w-4 h-4" />, name: 'Kotlin' }
            ],
            completedDate: '99 ngày',
            note: 'Hỗ trợ cập nhật và bảo trì liên tục',
            link:'/services/google-ads'
        },
        {
            id: 2,
            name: 'Facebook Ads',
            icon: <Smartphone className="w-4 h-4" />,
            title: 'Facebook ads',
            description: 'Dịch vụ Facebook Ads từ Nextgency chính là cánh tay phải đắc lực giúp doanh nghiệp "khai thác mỏ vàng" từ vùng đất Facebook đầy cơ hội.',
            image: '/assets/images/test.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'WooCommerce' },
                { icon: <Code className="w-4 h-4" />, name: 'Shopify' },
                { icon: <Code className="w-4 h-4" />, name: 'Magento' },
                { icon: <Code className="w-4 h-4" />, name: 'Stripe API' }
            ],
            completedDate: '99 ngày',
            note: 'Tích hợp đầy đủ cổng thanh toán trong nước và quốc tế',
            link:'/services/facebook-ads'
        },
        {
            id: 3,
            name: 'Website & Landing Page',
            icon: <Globe className="w-4 h-4" />,
            title: 'Website & landing page',
            description: 'Website & Landing Page không chỉ là nơi khách hàng "ghé chơi", mà là đích đến giúp họ ở lại – chuyển đổi – và quay lại. Nextgency thiết kế nền tảng số hiện đại với giải pháp trọn gói.',
            image: '/assets/images/test.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'WordPress' },
                { icon: <Code className="w-4 h-4" />, name: 'Sanity' },
                { icon: <Code className="w-4 h-4" />, name: 'Strapi' },
                { icon: <Code className="w-4 h-4" />, name: 'Directus' }
            ],
            completedDate: '99 ngày',
            note: 'Giao diện quản trị thân thiện, dễ sử dụng',
            link:'/services/website-landing-page'
        },
        {
            id: 4,
            name: 'TikTok Ads',
            icon: <Music className="w-4 h-4" />,
            title: 'Tiktok ads',
            description: 'Virus tuy nhỏ nhưng một khi đã lây lan thì sẽ tạo nên hiệu ứng khổng lồ, cũng như cách quảng cáo của anh chị viral trên nền tảng Tiktok để mang về doanh thu và độ nhận diện phủ khắp..',
            image: '/assets/images/test.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'AWS' },
                { icon: <Code className="w-4 h-4" />, name: 'Google Cloud' },
                { icon: <Code className="w-4 h-4" />, name: 'Docker' },
                { icon: <Code className="w-4 h-4" />, name: 'Kubernetes' }
            ],
            completedDate: '99 ngày',
            note: 'Giám sát 24/7 và tự động scale khi cần thiết',
            link:'/services/tiktok-ads'
        },
        {
            id: 5,
            name: 'Facebook Dataset & CRM',
            icon: <Users className="w-4 h-4" />,
            title: 'Facebook dataset & crm',
            description: 'Trong thời đại dữ liệu là "mỏ kim cương", Nextgency giúp doanh nghiệp biến từng hành vi, từng tương tác thành đòn bẩy quảng cáo hiệu quả qua dịch vụ Facebook Dataset & CRM.',
            image: '/assets/images/test.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'OWASP' },
                { icon: <Code className="w-4 h-4" />, name: 'SSL/TLS' },
                { icon: <Code className="w-4 h-4" />, name: 'WAF' },
                { icon: <Code className="w-4 h-4" />, name: '2FA' }
            ],
            completedDate: '99 ngày',
            note: 'Cập nhật thường xuyên theo các tiêu chuẩn bảo mật mới nhất',
            link:'/services/facebook-crm'
        },
        {
            id: 6,
            name: 'Thuê Phòng Marketing',
            icon: <BarChart3 className="w-4 h-4"/>,
            title: 'Phòng marketing thuê ngoài',
            description: 'Đem chất xám từ đội ngũ của chúng tôi để rót vào những dự án đầy tiềm năng của các doanh nghiệp chính là phương chấm cống hiến của Nextgency khi cung cấp dịch vụ Phòng Marketing thuê ngoài.',
            image: '/assets/images/test.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'REST API' },
                { icon: <Code className="w-4 h-4" />, name: 'GraphQL' },
                { icon: <Code className="w-4 h-4" />, name: 'Swagger' },
                { icon: <Code className="w-4 h-4" />, name: 'Postman' }
            ],
            completedDate: '99 ngày',
            note: 'Documentation chi tiết và hỗ trợ integration',
            link:'/services/marketing-outsource'
        },
        {
            id: 7,
            name: 'Tick Xanh Facebook',
            icon: <CheckCircle className="w-4 h-4" />,
            title: 'Tick xanh facebook',
            description: 'Nextgency cung cấp dịch vụ đăng ký tích xanh Facebook trọn gói từ A–Z, giúp khách hàng rút ngắn thời gian xét duyệt, chuẩn hóa hồ sơ và tăng tỷ lệ được phê duyệt thực tế.',
            image: '/assets/images/test.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'Tech Audit' },
                { icon: <Code className="w-4 h-4" />, name: 'Architecture' },
                { icon: <Code className="w-4 h-4" />, name: 'Roadmap' },
                { icon: <Code className="w-4 h-4" />, name: 'Best Practices' }
            ],
            completedDate: '99 ngày',
            note: 'Đội ngũ chuyên gia với kinh nghiệm 10+ năm',
            link:'/services/tick-xanh-facebook'
        }
    ];

    // Animation khi mount component
    useEffect(() => {
        const section = sectionRef.current;
        const label = labelRef.current;
        const title = titleRef.current;
        const tabs = tabsRef.current;
        const content = contentRef.current;

        // Set initial states
        gsap.set([label, title, tabs, content], {
            opacity: 0,
            y: 40
        });

        // Create main timeline
        const mainTl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 60%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        });

        // Animation sequence
        mainTl
            .to(label, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            })
            .to(title, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.4")
            .to(tabs, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.4")
            .to(content, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power2.out"
            }, "-=0.6");

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Animation khi thay đổi tab
    useEffect(() => {
        const content = contentRef.current;
        const image = imageRef.current;

        if (content) {
            // Animation cho content khi thay đổi tab
            gsap.fromTo(content,
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out"
                }
            );

            // Animation cho các elements bên trong content
            const contentElements = content.querySelectorAll('.animate-content');
            gsap.fromTo(contentElements,
                {
                    opacity: 0,
                    y: 15
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "power2.out",
                    delay: 0.2
                }
            );

            // Hiệu ứng đặc biệt cho ảnh khi thay đổi tab
            if (image) {
                const img = image.querySelector('img');
                const overlay = image.querySelector('.image-overlay');

                // Set initial state cho ảnh
                gsap.set(overlay, { scaleX: 1 });

                // Animation timeline cho ảnh
                const imageTimeline = gsap.timeline({ delay: 0.3 });

                imageTimeline
                    .to(overlay, {
                        scaleX: 0,
                        duration: 0.8,
                        ease: "power2.inOut",
                        transformOrigin: "left center"
                    })
                    .to(img, {
                        scale: 1,
                        rotation: 0,
                        duration: 1.2,
                        ease: "power2.out"
                    }, "-=0.6");
            }
        }
    }, [activeTab]);

    // Animation parallax cho ảnh khi scroll
    useEffect(() => {
        const image = imageRef.current;

        if (image) {
            const img = image.querySelector('img');

            // Hover effect cho container ảnh
            image.addEventListener('mouseenter', () => {
                gsap.to(img, {
                    duration: 0.6,
                    ease: "power2.out"
                });
            });

            image.addEventListener('mouseleave', () => {
                gsap.to(img, {
                    duration: 0.6,
                    ease: "power2.out"
                });
            });
        }

        // Cleanup
        return () => {
            if (image) {
                image.removeEventListener('mouseenter', () => {});
                image.removeEventListener('mouseleave', () => {});
            }
        };
    }, [activeTab]);

    return (
        <section ref={sectionRef} className="bg-gradient-to-t from-black via-black to-[#2B144D] py-[60px] lg:py-[90px]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div ref={headerRef} className="mb-4 sm:mb-8">
                    <div ref={labelRef} className="inline-flex items-center justify-center">
                        <span className=" text-white rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                            Services
                        </span>
                    </div>
                    <h2 ref={titleRef} className="text-[26px] md:text-[32px] lg:text-[60px] font-archivo font-bold text-white mb-1 uppercase">
                        Dịch vụ từ Nextgency
                    </h2>
                </div>

                {/* Tabs */}
                <div ref={tabsRef} className="mb-4 sm:mb-8">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                        {services.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(index)}
                                className={`flex items-center gap-1 px-4 py-2.5 rounded-sm transition-all duration-300 text-[12px] lg:text-[15px] ${
                                    activeTab === index
                                        ? 'bg-white text-black'
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
                                    <div ref={contentRef} className="">
                                        {/* Row 1: Title */}
                                        <h3 className="animate-content text-[18px] md:text-[24px] lg:text-[32px] font-medium text-white mb-4 sm:mb-8 border-b border-gray-100 pb-4">

                                        </h3>

                                        {/* Row 2: Two columns */}
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                                            {/* Column 1: Description & Image */}
                                            <div className="space-y-12 p-4">
                                                <div className="animate-content">
                                                    <h4 className="text-[11px] sm:text-[13px] font-medium text-[#c08dfe] mb-4 uppercase tracking-widest">Mô tả</h4>
                                                    <p className="text-white text-[14px] sm:text-[16px] text-justify">
                                                        {service.description}
                                                    </p>
                                                </div>

                                                <div ref={imageRef} className="animate-content relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden group">

                                                    <img
                                                        src={service.image}
                                                        alt={service.name}
                                                        className="w-full h-full object-cover rounded-lg transition-all duration-700"
                                                    />
                                                </div>
                                            </div>

                                            {/* Column 2: Technologies, Date, Note */}
                                            <div className="">
                                                <div className="space-y-12 p-4">
                                                    {/* Technologies */}
                                                    <div className="animate-content">
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
                                                    <div className="animate-content">
                                                        <h4 className="text-[11px] sm:text-[13px] font-medium text-[#c08dfe] mb-4 uppercase tracking-widest">Ngày hoàn thành</h4>
                                                        <p className="text-[14px] lg:text-[16px] text-white inline-block">
                                                            {service.completedDate}
                                                        </p>
                                                    </div>

                                                    {/* Note */}
                                                    <div className="animate-content">
                                                        <h4 className="text-[11px] sm:text-[13px] font-medium text-[#c08dfe] mb-4 uppercase tracking-widest">Lưu ý</h4>
                                                        <p className="text-[14px] lg:text-[16px] text-white">
                                                            {service.note}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="animate-content mt-8">
                                                    {/* CTA Button */}
                                                    <div className="flex items-center space-x-2 ">
                                                        <Link
                                                            to={service.link}
                                                            className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-gradient-to-r from-[#2B144D] via-[#c08dfe] to-[#2B144D] text-[15px] sm:text-[16px] text-white rounded-full transition-all duration-300 hover:scale-105 group animate-gradient-shift"
                                                        >
                                                            <span className="">
                                                                Xem thêm
                                                            </span>
                                                            <div className="w-9 h-9 sm:w-[2.5rem] sm:h-[2.5rem] bg-black rounded-full flex items-center justify-center neu-shadow-xs transition-all duration-300">
                                                                <ArrowUpRight
                                                                    className="w-5 h-5 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-105"
                                                                    strokeWidth={2.5}
                                                                />
                                                            </div>
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