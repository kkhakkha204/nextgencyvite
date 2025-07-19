import React, { useState } from 'react';
import { Send, Users, Target, Cpu, Link2, Brain, FileSignature, Settings, TestTube, GraduationCap, Wrench, ChevronDown } from 'lucide-react';

const WorkflowSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="bg-white pt-[60px] md:pt-[90px]">
            <div className=" md:max-w-[700px] lg:max-w-[1000px] mx-auto px-6 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black leading-tight mb-1">
                        Quy trình làm việc
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black">
                        Quy trình hợp tác chuyên nghiệp và hiệu quả giữa Nextgency và khách hàng
                    </p>
                </div>

                {/* Workflow Container */}
                <div className="relative p-2 bg-gray-50 rounded-2xl">
                    {/* Starting Point */}
                    <div className="mb-4">
                        <div
                            className={`relative p-5 rounded-xl border-2 transition-all duration-300 transform
                border-white bg-gradient-to-br from-black via-black to-[#1a4498] z-10
                ${hoveredCard === 'start' ? 'scale-105 shadow-lg' : 'shadow-md hover:shadow-lg'}`}
                            onMouseEnter={() => setHoveredCard('start')}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-white neu-shadow-xs text-black">
                                    <Send size={20}/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[13px] lg:text-[15px] font-medium text-white mb-1">Gửi yêu cầu & tư vấn sơ bộ</h4>
                                    <p className="text-[12px] lg:text-[14px] text-gray-200">Khởi đầu hành trình chuyển đổi số của bạn</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Level 1 Branches */}
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                        {/* Left Branch - Customer */}
                        <div className="relative">
                            <div
                                className={`relative p-5 rounded-xl border-2 border-white transition-all duration-300 transform bg-black z-10
                  ${hoveredCard === 'customer' ? 'scale-105 shadow-lg' : 'shadow-md hover:shadow-lg'}`}
                                onMouseEnter={() => setHoveredCard('customer')}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-white neu-shadow-xs text-black">
                                        <Users size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[13px] lg:text-[15px] font-medium text-white mb-1">Khách hàng mô tả bài toán</h4>
                                        <p className="text-[12px] lg:text-[14px] text-gray-200">Chia sẻ thách thức và mục tiêu</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Branch - Analysis */}
                        <div className="relative">
                            <div
                                className={`relative p-5 rounded-xl border-2 border-white transition-all duration-300 transform bg-black z-10
                  ${hoveredCard === 'analysis' ? 'scale-105 shadow-lg' : 'shadow-md hover:shadow-lg'}`}
                                onMouseEnter={() => setHoveredCard('analysis')}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-white neu-shadow-xs text-black">
                                        <Target size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[13px] lg:text-[15px] font-medium text-white mb-1">Phân tích mục tiêu & kênh vận hành</h4>
                                        <p className="text-[12px] lg:text-[14px] text-gray-200">Đánh giá toàn diện và đề xuất giải pháp</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Connector */}
                    <div className="flex justify-center mb-4">
                        <ChevronDown size={32} className="text-[#1a4498]" />
                    </div>

                    {/* Level 2 - Solutions */}
                    <div className="relative mb-4">
                        <div className="bg-white rounded-xl p-2 shadow-md border-2 border-black relative z-10">
                            <div className="grid md:grid-cols-3 gap-6 mb-6">
                                {/* Level 1 */}
                                <div
                                    className={`relative p-5 rounded-lg transition-all duration-300 transform neu-shadow-inset-xs bg-white border-2 border-white z-10`}
                                    onMouseEnter={() => setHoveredCard('level1')}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-1">
                                            <p className="text-[13px] lg:text-[15px] text-black">Tự động hóa thao tác lặp lại</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Level 2 */}
                                <div
                                    className={`relative p-5 rounded-lg transition-all duration-300 transform neu-shadow-inset-xs bg-white border-2 border-white z-10`}
                                    onMouseEnter={() => setHoveredCard('level2')}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-1">
                                            <p className="text-[13px] lg:text-[15px] text-black">Kết nối đa nền tảng (FB, Zalo, CRM...)</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Level 3 */}
                                <div
                                    className={`relative p-5 rounded-lg transition-all duration-300 transform neu-shadow-inset-xs bg-white border-2 border-white z-10`}
                                    onMouseEnter={() => setHoveredCard('level3')}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-1">
                                            <p className="text-[13px] lg:text-[15px] text-black">AI tư vấn & phân tích dữ liệu</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contract */}
                            <div className="max-w-md mx-auto">
                                <div
                                    className={`relative p-6 rounded-lg border-2 transition-all duration-300 transform
                    border-white bg-black z-10
                    ${hoveredCard === 'contract' ? 'scale-105 shadow-lg' : 'shadow-md hover:shadow-lg'}`}
                                    onMouseEnter={() => setHoveredCard('contract')}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-1">
                                            <h4 className="font-medium text-[13px] lg:text-[15px] text-white mb-1">Ký hợp đồng & thống nhất thời gian</h4>
                                            <p className="text-[12px] lg:text-[14px] text-gray-200">Cam kết chính thức và lộ trình rõ ràng</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Connector */}
                    <div className="flex justify-center mb-4">
                        <ChevronDown size={32} className="text-[#1a4498]" />
                    </div>

                    {/* Deployment Process */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-black via-[#c59efe] to-black rounded-xl p-2 relative z-10">
                            <div className="bg-gray-50 rounded-lg p-2 m-1 neu-shadow-inset-xs">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Setup */}
                                    <div
                                        className={`relative p-5 rounded-lg border-2 transition-all duration-300 transform
                        border-white bg-white z-10
                        ${hoveredCard === 'setup' ? 'scale-105 shadow-lg' : 'shadow-md hover:shadow-lg'}`}
                                        onMouseEnter={() => setHoveredCard('setup')}
                                        onMouseLeave={() => setHoveredCard(null)}
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 rounded-full bg-black shadow-sm text-white">
                                                <Settings size={20} />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-medium text-[13px] lg:text-[15px] text-black mb-1">Thiết lập hệ thống</h4>
                                                <p className="text-[12px] lg:text-[14px] text-gray-800">Automation - AI - Data Hub</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Test */}
                                    <div
                                        className={`relative p-5 rounded-lg border-2 transition-all duration-300 transform
                        border-white bg-white z-10
                        ${hoveredCard === 'test' ? 'scale-105 shadow-lg' : 'shadow-md hover:shadow-lg'}`}
                                        onMouseEnter={() => setHoveredCard('test')}
                                        onMouseLeave={() => setHoveredCard(null)}
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 rounded-full bg-black shadow-sm text-white">
                                                <TestTube size={20} />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-medium text-[13px] lg:text-[15px] text-black mb-1">Chạy thử & tinh chỉnh</h4>
                                                <p className="text-[12px] lg:text-[14px] text-gray-800">Đảm bảo hoạt động tối ưu</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Training */}
                                    <div
                                        className={`relative p-5 rounded-lg border-2 transition-all duration-300 transform
                        border-white bg-white z-10
                        ${hoveredCard === 'training' ? 'scale-105 shadow-lg' : 'shadow-md hover:shadow-lg'}`}
                                        onMouseEnter={() => setHoveredCard('training')}
                                        onMouseLeave={() => setHoveredCard(null)}
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 rounded-full bg-black shadow-sm text-white">
                                                <GraduationCap size={20} />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-medium text-[13px] lg:text-[15px] text-black mb-1">Bàn giao & đào tạo</h4>
                                                <p className="text-[12px] lg:text-[14px] text-gray-800">Hướng dẫn sử dụng chi tiết</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Maintenance */}
                                    <div
                                        className={`relative p-5 rounded-lg border-2 transition-all duration-300 transform
                        border-white bg-white z-10
                        ${hoveredCard === 'maintenance' ? 'scale-105 shadow-lg' : 'shadow-md hover:shadow-lg'}`}
                                        onMouseEnter={() => setHoveredCard('maintenance')}
                                        onMouseLeave={() => setHoveredCard(null)}
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 rounded-full bg-black shadow-sm text-white">
                                                <Wrench size={20} />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-medium text-[13px] lg:text-[15px] text-black mb-1">Bảo trì & tối ưu</h4>
                                                <p className="text-[12px] lg:text-[14px] text-gray-800">Nâng cấp định kỳ</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkflowSection;