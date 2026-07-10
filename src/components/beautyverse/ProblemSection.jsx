import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CheckCircle2, CircleDot, X } from 'lucide-react';

const oldFlow = [
    { text: 'Truy cập app theo hướng dẫn tại cổng', muted: false },
    { text: 'Check-in', muted: false },
    { text: 'Mở app', muted: true },
    { text: 'Tương tác với thương hiệu', muted: true },
    { text: 'Giữ kết nối sau sự kiện', muted: true },
];

const newFlow = [
    'Check-in QR chỉ là điểm khởi đầu',
    'Gamification tạo nhiệm vụ theo 3 giai đoạn',
    'BPoint — tích điểm, đổi voucher từ 100+ thương hiệu',
    'Bình chọn thương hiệu · bản đồ · lịch trình real-time',
];

const ProblemSection = () => {
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
            { threshold: 0.2 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-white py-18 sm:py-20 lg:py-28">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[12%] top-[22%] h-56 w-56 rounded-full bg-[#99d6ff]/14 blur-3xl" />
                <div className="absolute bottom-[18%] right-[12%] h-64 w-64 rounded-full bg-[#9567ff]/14 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className={`max-w-[980px] transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <p className="text-[13px] font-black uppercase tracking-[0.36em] text-[#214eab]">Bài toán</p>
                    <h2 className="mt-5 font-archivo text-[30px] font-black leading-[0.98] tracking-normal text-[#05050b] sm:text-[42px] lg:text-[50px]">
                        Không phải xây một app —
                        <span className="block">
                            mà giải bài toán{' '}
                            <span className="bg-[linear-gradient(90deg,#24388e_0%,#6d65ff_44%,#a571ff_70%,#9ed6ff_100%)] bg-clip-text text-transparent">
                                giữ chân người dùng.
                            </span>
                        </span>
                    </h2>
                    <p className="mt-7 mb-4 max-w-[760px] text-base font-medium leading-8 text-[#17213f]/82 sm:text-lg">
                        Ban tổ chức từng hợp tác với một đơn vị công nghệ khác để phát triển mini app. Sản phẩm được xây từ góc nhìn kỹ thuật thuần túy, không đúng hành vi thực tế của tệp khách tham dự — và thất bại theo đúng một kịch bản quen thuộc:
                    </p>
                    <button
                        type="button"
                        onClick={() => window.dispatchEvent(new Event('nextgency:open-consultation-popup'))}
                        className="group relative inline-flex w-fit items-center gap-4 overflow-hidden rounded-full bg-gradient-to-r from-[#2B144D] via-[#c08dfe] to-[#2B144D] py-1.5 pl-6 pr-1.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(160,112,255,0.32)] sm:text-[15px]"
                        style={{ backgroundSize: '200% 200%', animation: 'final-cta-gradient 3s ease-in-out infinite' }}
                    >
                        <span className="relative z-10">Triển khai mini app của bạn</span>
                        <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
                            <ArrowUpRight className="h-5 w-5 transition duration-300 group-hover:rotate-12 group-hover:scale-110" strokeWidth={2.3} />
                        </span>
                        <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-[110%]" />
                    </button>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-2">
                    <article
                        className={`relative overflow-hidden rounded-[18px] border border-[#dfe4f1] bg-[#f7f8fc] p-7 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(22,31,68,0.08)] ${
                            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                        }`}
                        style={{ transitionDelay: '140ms' }}
                    >
                        <div className="absolute right-6 top-6 rounded-full border border-[#dfe4f1] bg-white p-2 text-[#9aa3b8]">
                            <X className="h-4 w-4" />
                        </div>
                        <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#8a94ad]">
                            Mini app cũ · góc nhìn kỹ thuật
                        </p>
                        <h3 className="mt-4 font-archivo text-[28px] font-black leading-tight tracking-normal text-[#05050b]">
                            Mở app một lần, rồi thôi.
                        </h3>

                        <ul className="mt-8 space-y-5">
                            {oldFlow.map((item) => (
                                <li key={item.text} className="flex items-center gap-4">
                                    <span className={`h-3 w-3 flex-none rounded-full ${item.muted ? 'bg-[#ccd1df]' : 'bg-[#c7ccda]'}`} />
                                    <span className={`text-base font-medium ${item.muted ? 'text-[#848ca0] line-through decoration-[#848ca0]/70' : 'text-[#17213f]'}`}>
                                        {item.text}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-9 h-px bg-[#dfe4f1]" />
                        <p className="mt-5 text-sm font-medium leading-7 text-[#17213f]/78">
                            App trở thành một bước thủ tục — không tạo ra giá trị cho khách tham dự lẫn Ban tổ chức.
                        </p>
                    </article>

                    <article
                        className={`relative overflow-hidden rounded-[18px] border border-transparent bg-[linear-gradient(135deg,#060614_0%,#263d8f_42%,#9a63ff_78%,#9ed6ff_100%)] p-7 text-white shadow-[0_28px_70px_rgba(65,74,175,0.28)] transition-all duration-700 hover:-translate-y-1 ${
                            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                        }`}
                        style={{ transitionDelay: '260ms' }}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_92%,rgba(255,255,255,0.28),transparent_34%)]" />
                        <div className="relative">
                            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#c5f5ff]">
                                BEAUTYVERSE · góc nhìn hành vi người dùng
                            </p>
                            <h3 className="mt-4 max-w-[560px] font-archivo text-[28px] font-black leading-tight tracking-normal">
                               Lý do quay lại — trước, trong và sau sự kiện.
                            </h3>

                            <ul className="mt-8 space-y-5">
                                {newFlow.map((item) => (
                                    <li key={item} className="flex gap-4 text-base font-bold leading-6 text-white/90">
                                        <CircleDot className="mt-1 h-4 w-4 flex-none text-[#c6b8ff]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-9 h-px bg-white/24" />
                            <p className="mt-5 text-sm font-semibold leading-7 text-white/78">
                                Mỗi tính năng là một lý do để mở lại app — retention trở thành thiết kế, không phải hy vọng.
                            </p>
                        </div>
                    </article>
                </div>

                <div
                    className={`mt-6 grid gap-5 rounded-[18px] border border-[#dfe4f1] bg-[#f7f8fc] p-7 transition-all duration-700 sm:grid-cols-[0.26fr_0.74fr] sm:items-center ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: '380ms' }}
                >
                    <div className="font-archivo text-[34px] font-black leading-none tracking-normal text-[#101645]">
                        2 năm  <span className="bg-[linear-gradient(90deg,#263f96,#a571ff)] bg-clip-text text-transparent">dữ liệu</span>
                    </div>
                    <p className="flex gap-3 text-base font-medium leading-8 text-[#17213f]/82">
                        <CheckCircle2 className="mt-1.5 h-5 w-5 flex-none text-[#5e5cf0]" />
                        <span>
                            Hiểu biết tệp khách tích lũy từ quảng cáo đến check-in qua 2 kỳ sự kiện cho phép Nextgency thiết kế đúng hành vi thực tế của khách tham dự — thay vì đoán.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
