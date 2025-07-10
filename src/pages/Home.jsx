import React from 'react';
import {ArrowRight, Sparkles} from 'lucide-react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 opacity-20"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center min-h-screen text-center">
                        {/* Logo/Brand */}
                        <div className="mb-8">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-6">
                                <Sparkles className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                                Nextgency
                            </h1>
                        </div>

                        {/* Hero Content */}
                        <div className="max-w-4xl mx-auto mb-12">
                            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                                Định hình tương lai với các giải pháp công nghệ tiên tiến
                            </p>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Chúng tôi mang đến những trải nghiệm số xuất sắc, kết hợp sáng tạo và công nghệ để tạo ra những sản phẩm vượt trội.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center">
                                Khám phá dự án
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-full font-semibold hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">
                                Liên hệ ngay
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                                <div className="text-3xl font-bold text-white mb-2">50+</div>
                                <div className="text-gray-400">Dự án hoàn thành</div>
                            </div>
                            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                                <div className="text-3xl font-bold text-white mb-2">5+</div>
                                <div className="text-gray-400">Năm kinh nghiệm</div>
                            </div>
                            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                                <div className="text-3xl font-bold text-white mb-2">100%</div>
                                <div className="text-gray-400">Khách hàng hài lòng</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 opacity-20"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center min-h-screen text-center">
                        {/* Logo/Brand */}
                        <div className="mb-8">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-6">
                                <Sparkles className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                                Nextgency
                            </h1>
                        </div>

                        {/* Hero Content */}
                        <div className="max-w-4xl mx-auto mb-12">
                            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                                Định hình tương lai với các giải pháp công nghệ tiên tiến
                            </p>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Chúng tôi mang đến những trải nghiệm số xuất sắc, kết hợp sáng tạo và công nghệ để tạo ra những sản phẩm vượt trội.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center">
                                Khám phá dự án
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-full font-semibold hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">
                                Liên hệ ngay
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                                <div className="text-3xl font-bold text-white mb-2">50+</div>
                                <div className="text-gray-400">Dự án hoàn thành</div>
                            </div>
                            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                                <div className="text-3xl font-bold text-white mb-2">5+</div>
                                <div className="text-gray-400">Năm kinh nghiệm</div>
                            </div>
                            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                                <div className="text-3xl font-bold text-white mb-2">100%</div>
                                <div className="text-gray-400">Khách hàng hài lòng</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 opacity-20"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center min-h-screen text-center">
                        {/* Logo/Brand */}
                        <div className="mb-8">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-6">
                                <Sparkles className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                                Nextgency
                            </h1>
                        </div>

                        {/* Hero Content */}
                        <div className="max-w-4xl mx-auto mb-12">
                            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                                Định hình tương lai với các giải pháp công nghệ tiên tiến
                            </p>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Chúng tôi mang đến những trải nghiệm số xuất sắc, kết hợp sáng tạo và công nghệ để tạo ra những sản phẩm vượt trội.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center">
                                Khám phá dự án
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-full font-semibold hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">
                                Liên hệ ngay
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                                <div className="text-3xl font-bold text-white mb-2">50+</div>
                                <div className="text-gray-400">Dự án hoàn thành</div>
                            </div>
                            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                                <div className="text-3xl font-bold text-white mb-2">5+</div>
                                <div className="text-gray-400">Năm kinh nghiệm</div>
                            </div>
                            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                                <div className="text-3xl font-bold text-white mb-2">100%</div>
                                <div className="text-gray-400">Khách hàng hài lòng</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;