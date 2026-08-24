import React, { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../i18n';
import { Award, Sparkles, TrendingUp, Users } from 'lucide-react';

// Con số giữ trong code; chữ lấy từ từ điển (metrics[0..2] là nhãn, [1] là ghi chú)
const buildResultStats = (tm) => {
    const labels = tm('beautyverse.result.metrics');
    return [
        {value: 7000, display: "7.000", label: labels[0], note: labels[1], featured: true},
        {value: 3500, prefix: "~", display: "~3.500", label: labels[2]},
        {value: 100, suffix: "+", display: "100+", label: labels[3]}
    ];
};

const buildEvidenceImages = (tm) => {
    const labels = tm('beautyverse.result.metrics');
    return [
        {src: '/assets/images/projects/miniapp_1.webp', label: 'Beauty Summit Mini App BEAUTYVERSE'},
        {src: '/assets/images/projects/miniapp_2.webp', label: labels[4]},
        {src: '/assets/images/projects/miniapp_3.webp', label: labels[5]},
        {src: '/assets/images/projects/miniapp_4.webp', label: 'Brand Voting trong mini app'}
    ];
};

const buildHighlights = (tm) => {
    const labels = tm('beautyverse.result.metrics');
    return [
        {icon: Users, text: labels[6]},
        {icon: TrendingUp, text: labels[7]},
        {icon: Award, text: labels[8]}
    ];
};

const formatValue = (value) => new Intl.NumberFormat('vi-VN').format(value);

const useInView = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
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

    return [ref, isVisible];
};

const CountNumber = ({ stat, active, className = '' }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!active) return undefined;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setDisplayValue(stat.value);
            return undefined;
        }

        const duration = stat.featured ? 1500 : 1200;
        const startTime = performance.now();

        const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            setDisplayValue(Math.round(stat.value * eased));

            if (progress < 1) {
                window.requestAnimationFrame(tick);
            }
        };

        const frame = window.requestAnimationFrame(tick);
        return () => window.cancelAnimationFrame(frame);
    }, [active, stat.featured, stat.value]);

    return (
        <div className={className}>
            <span>{stat.prefix}</span>
            <span>{formatValue(displayValue)}</span>
            <span>{stat.suffix}</span>
        </div>
    );
};

const ResultSection = () => {
    const { t, tm } = useI18n();
    const resultStats = buildResultStats(tm);
    const evidenceImages = buildEvidenceImages(tm);
    const highlights = buildHighlights(tm);
    const [sectionRef, isVisible] = useInView();

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-[#070814] py-18 text-white sm:py-20 lg:py-28">
            <div className="absolute inset-0 bg-[linear-gradient(112deg,#070814_0%,#17155f_28%,#315d9f_54%,#9564f5_82%,#9bd8ff_100%)]" />
            <div className="pointer-events-none absolute inset-0">
                <div className="result-dot-field absolute inset-0 opacity-55" />
                <div className="absolute left-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[#050611]/70 blur-3xl" />
                <div className="absolute bottom-[-35%] right-[18%] h-[520px] w-[520px] rounded-full bg-[#ad79ff]/22 blur-3xl" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            <div className="relative mx-auto max-w-[1280px] py-8 px-4 sm:px-6 lg:px-8">
                <div
                    className={`mx-auto max-w-[760px] transition-all duration-700 lg:mx-0 lg:ml-[18%] ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                >
                    <div className="inline-flex items-center gap-3 text-[12px] font-black uppercase tracking-[0.32em] text-[#8ed2ff]">
                        <Sparkles className="h-4 w-4" />
                        <span>{t('beautyverse.result.badge')}</span>
                    </div>
                    <h2 className="mt-2 font-archivo text-[30px] font-black leading-tight tracking-normal sm:text-[40px] lg:text-[48px]">
                        {t('beautyverse.result.title')}
                    </h2>
                </div>

                <div className="mx-auto mt-12 grid max-w-[880px] gap-8 lg:ml-[18%] lg:grid-cols-[1.15fr_1fr] lg:items-center">
                    <div
                        className={`transition-all delay-100 duration-700 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                    >
                        <CountNumber
                            stat={resultStats[0]}
                            active={isVisible}
                            className="bg-[linear-gradient(90deg,#9bd8ff_0%,#ac78ff_58%,#f0a5ff_100%)] bg-clip-text font-archivo text-[82px] font-black leading-none tracking-normal text-transparent sm:text-[116px]"
                        />
                        <p className="mt-5 max-w-[360px] font-mono text-[11px] font-bold uppercase leading-5 tracking-[0.22em] text-white/42">
                            {resultStats[0].label}
                            <span className="block">{resultStats[0].note}</span>
                        </p>
                    </div>

                    <div
                        className={`grid gap-2 border-white/20 transition-all delay-200 duration-700 lg:border-l lg:pl-9 ${
                            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                        }`}
                    >
                        {resultStats.slice(1).map((stat, index) => (
                            <div key={stat.label} className="group">
                                <CountNumber
                                    stat={stat}
                                    active={isVisible}
                                    className="font-archivo text-4xl font-black leading-none tracking-normal text-white transition group-hover:text-[#b7f06b] sm:text-5xl"
                                />
                                <p className="mt-2 max-w-[330px] font-mono text-[10px] font-bold uppercase leading-5 tracking-[0.2em] text-white/44">
                                    {stat.label}
                                </p>
                                {index === 0 && <div className="mt-5 h-px w-full bg-white/14" />}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    {evidenceImages.map((image, index) => (
                        <figure
                            key={image.label}
                            className={`group overflow-hidden rounded-[18px] border border-white/12 bg-white/8 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur transition-all duration-700 hover:-translate-y-2 hover:border-white/26 hover:bg-white/12 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                            style={{ transitionDelay: `${360 + index * 90}ms` }}
                        >
                            <div className="aspect-[16/9] overflow-hidden bg-[#0c102a]">
                                <img
                                    src={image.src}
                                    alt={image.label}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />
                            </div>
                            <figcaption className="border-t border-white/10 p-4 font-mono text-[10px] font-bold uppercase leading-5 tracking-[0.16em] text-white/58">
                                {image.label}
                            </figcaption>
                        </figure>
                    ))}
                </div>

                <div
                    className={`mx-auto mt-16 flex flex-col sm:flex-row max-w-[1080px] gap-4 border-l border-white/18 pl-6 transition-all delay-300 duration-700  justify-between lg:items-start ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                >
                    <p className="text-base font-bold leading-8 text-white/86 w-[100%] sm:w-[60%]">
                        {t('beautyverse.result.description')}
                    </p>
                    <div className="grid gap-3">
                        {highlights.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div key={item.text} className="flex items-center gap-3 text-sm font-semibold text-white/72">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#9bd8ff] ring-1 ring-white/14">
                                        <Icon className="h-4 w-4" />
                                    </span>
                                    <span>{item.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style>{`
                .result-dot-field {
                    background-image: radial-gradient(circle, rgba(255,255,255,0.28) 1px, transparent 1.4px);
                    background-size: 34px 34px;
                    animation: result-dots 20s linear infinite;
                    mask-image: radial-gradient(circle at 48% 45%, #000 0%, rgba(0,0,0,0.75) 34%, transparent 78%);
                }

                @keyframes result-dots {
                    from { transform: translate3d(0, 0, 0); }
                    to { transform: translate3d(34px, 34px, 0); }
                }

                @media (prefers-reduced-motion: reduce) {
                    .result-dot-field {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default ResultSection;
