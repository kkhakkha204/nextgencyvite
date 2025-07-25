import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className="relative min-h-screen w-full bg-white overflow-hidden">
            {/* Background subtle pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />

            {/* Large centered logo background */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] ">
                    <img
                        src="/assets/images/herologo.png"
                        alt="Nextgency Innovation"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Main container */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center items-center">

                {/* Main title */}
                <h1 className={`text-6xl md:text-[150px] font-bold bg-black bg-clip-text text-transparent mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    NEXTGENCY
                </h1>

                {/* Glassmorphism card */}
                <div className={`w-full max-w-5xl mb-12 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="backdrop-blur-xl bg-white/70 border border-gray-200/50 rounded-3xl p-8 md:p-12 shadow-xl">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Column A - Description */}
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                                    Đổi mới không ngừng
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Nextgency là đối tác công nghệ hàng đầu, chuyên cung cấp giải pháp số hóa toàn diện.
                                    Chúng tôi biến ý tưởng thành hiện thực với công nghệ tiên tiến nhất.
                                </p>
                                <div className="flex items-center gap-4 pt-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Sparkles className="w-4 h-4 text-indigo-500" />
                                        <span>Innovation First</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Zap className="w-4 h-4 text-purple-500" />
                                        <span>Future Ready</span>
                                    </div>
                                </div>
                            </div>

                            {/* Column B - Image */}
                            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600">
                                    {/* Placeholder for image - replace with actual image */}
                                    <div className="w-full h-full flex items-center justify-center">
                                        <svg className="w-32 h-32 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                        </svg>
                                    </div>
                                </div>
                                <img
                                    src="/assets/images/herologo.png"
                                    alt="Nextgency Innovation"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom section with CTA and floating card */}
                <div className={`w-full max-w-5xl transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="grid md:grid-cols-2 gap-8 items-end">
                        {/* Column A - CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
                                Khám phá ngay
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:border-gray-300 transform hover:-translate-y-0.5 transition-all duration-200">
                                Tư vấn miễn phí
                            </button>
                        </div>

                        {/* Column B - Floating card */}
                        <div className="flex justify-end">
                            <div className="relative">
                                {/* Floating animation */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 animate-pulse" />
                                <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                                            <span className="text-2xl">🚀</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">10+ năm kinh nghiệm</p>
                                            <p className="text-sm text-gray-500">Đối tác tin cậy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-100 rounded-full blur-2xl opacity-50 animate-pulse" />
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-40 animate-pulse delay-1000" />
            </div>
        </section>
    );
};

export default HeroSection;