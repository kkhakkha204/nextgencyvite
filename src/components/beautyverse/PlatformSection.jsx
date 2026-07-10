import React, { useEffect, useRef, useState } from 'react';
import { Bell, Database, Globe2, Megaphone, QrCode, Trophy } from 'lucide-react';

const platformItems = [
    {
        kicker: 'Từ 2024',
        title: 'Quảng cáo hai luồng B2B / B2C',
        text: 'Bán gian hàng cho thương hiệu và bán vé cho khách tham dự — hai chiến dịch độc lập.',
        icon: Megaphone,
    },
    {
        kicker: 'Từ 2024',
        title: 'Luồng vé — check-in tự động toàn trình',
        text: 'Đăng ký → thanh toán → vé điện tử → check-in QR, không khâu thủ công..',
        icon: QrCode,
    },
    {
        kicker: 'Từ 2024',
        title: 'Notify đa kênh',
        text: 'Zalo ZNS, Email, Messenger — tự động phân loại theo trạng thái khách hàng.',
        icon: Bell,
    },
    {
        kicker: 'Từ 2024',
        title: 'Dataset khách hàng',
        text: 'Cấu trúc lại sau mỗi đợt chạy — Custom & Lookalike Audience, tối ưu chi phí chuyển đổi.',
        icon: Database,
    },
    {
        kicker: 'Từ 2025',
        title: 'Website beautysummit.vn',
        text: 'Thông tin sự kiện, danh sách thương hiệu, luồng đăng ký mua vé.',
        icon: Globe2,
    },
    {
        kicker: 'Từ 2025',
        title: 'Hệ thống Beauty Award',
        text: 'Bình chọn tự động từ đề cử đến kết quả — tiền thân của Brand Voting trong app.',
        icon: Trophy,
    },
];

const PlatformSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return undefined;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
            setIsVisible(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setIsVisible(true);
                observer.disconnect();
            },
            { threshold: 0.22 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-[#f5f7fc] py-18 sm:py-20 lg:py-28">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-[12%] top-[10%] h-64 w-64 rounded-full bg-[#9ed6ff]/16 blur-3xl" />
                <div className="absolute bottom-[12%] left-[8%] h-72 w-72 rounded-full bg-[#9a63ff]/10 blur-3xl" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9def4] to-transparent" />
            </div>

            <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className={`max-w-[860px] transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <p className="text-[13px] font-black uppercase tracking-[0.36em] text-[#214eab]">
                        Nền tảng phía sau
                    </p>
                    <h2 className="mt-5 font-archivo text-[30px] font-black leading-[0.98] tracking-normal text-[#05050b] sm:text-[46px] lg:text-[54px]">
                        Mini app đứng trên hạ tầng
                        <span className="block">đã chạy ổn định 2 năm</span>
                    </h2>
                    <p className="mt-7 max-w-[760px] text-base font-medium leading-8 text-[#17213f]/82 sm:text-lg">
                        BEAUTYVERSE không vận hành một mình — toàn bộ hạng mục 2024–2025 được duy trì song song trong kỳ 2026:
                    </p>
                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {platformItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.title}
                                className={`group relative min-h-[210px] overflow-hidden rounded-[18px] border border-[#dfe4f1] bg-white p-7 shadow-[0_18px_55px_rgba(13,20,45,0.045)] transition-all duration-700 hover:-translate-y-2 hover:border-[#bfcaf0] hover:shadow-[0_26px_70px_rgba(13,20,45,0.1)] ${
                                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                                style={{ transitionDelay: `${140 + index * 80}ms` }}
                            >
                                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[linear-gradient(90deg,#214eab,#9a63ff,#9ed6ff)] transition-transform duration-500 group-hover:scale-x-100" />
                                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#f5f7fc] text-[#214eab] transition group-hover:bg-[#101645] group-hover:text-white">
                                    <Icon className="h-5 w-5" />
                                </div>

                                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-[#214eab]">
                                    {item.kicker}
                                </p>
                                <h3 className="mt-4 max-w-[280px] font-archivo text-[23px] font-black leading-tight tracking-normal text-[#05050b]">
                                    {item.title}
                                </h3>
                                <p className="mt-4 max-w-[340px] text-sm font-medium leading-7 text-[#17213f]/78">
                                    {item.text}
                                </p>

                                <div className="absolute bottom-0 right-0 h-20 w-20 translate-x-8 translate-y-8 rounded-full bg-[#9a63ff]/10 blur-2xl transition group-hover:bg-[#9ed6ff]/20" />
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PlatformSection;
