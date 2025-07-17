import React, { useState } from 'react';
import { Send, Users, Target, Cpu, Link2, Brain, FileSignature, Settings, TestTube, GraduationCap, Wrench } from 'lucide-react';

const WorkflowSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const WorkflowCard = ({ icon, title, description, level = 'primary', id, isActive }) => {
        const levelStyles = {
            primary: 'border-blue-500 bg-blue-50 hover:bg-blue-100',
            secondary: 'border-purple-400 bg-purple-50 hover:bg-purple-100',
            tertiary: 'border-gray-300 bg-gray-50 hover:bg-gray-100',
            process: 'border-blue-400 bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100'
        };

        const iconColors = {
            primary: 'text-blue-600',
            secondary: 'text-purple-600',
            tertiary: 'text-gray-600',
            process: 'text-blue-600'
        };

        const IconComponent = icon;

        return (
            <div
                className={`relative p-6 rounded-lg border-2 transition-all duration-300 transform ${
                    levelStyles[level]
                } ${isActive ? 'scale-105 shadow-lg' : 'shadow-md hover:shadow-lg'} z-10 bg-white`}
                onMouseEnter={() => setHoveredCard(id)}
                onMouseLeave={() => setHoveredCard(null)}
            >
                <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full bg-white shadow-sm ${iconColors[level]}`}>
                        <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
                        {description && (
                            <p className="text-sm text-gray-600">{description}</p>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    const ConnectingLine = ({ vertical = false, height = '100%', color = 'blue' }) => {
        const colorClasses = {
            blue: 'bg-blue-300',
            purple: 'bg-purple-300',
            gray: 'bg-gray-300'
        };

        return (
            <div
                className={`${vertical ? 'w-0.5' : 'h-0.5'} ${colorClasses[color]} ${
                    vertical ? `h-${height}` : 'w-full'
                }`}
                style={vertical ? { height, zIndex: 0 } : { zIndex: 0 }}
            />
        );
    };

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Quy Trình Làm Việc
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Quy trình hợp tác chuyên nghiệp và hiệu quả giữa Nextgency và khách hàng
                    </p>
                </div>

                {/* Workflow Container */}
                <div className="relative">
                    {/* Starting Point */}
                    <div className="mb-12">
                        <WorkflowCard
                            icon={Send}
                            title="Gửi yêu cầu & tư vấn sơ bộ"
                            description="Khởi đầu hành trình chuyển đổi số của bạn"
                            level="primary"
                            id="start"
                            isActive={hoveredCard === 'start'}
                        />
                    </div>

                    {/* Level 1 Branches */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Left Branch */}
                        <div className="relative">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 h-12 ">
                                <ConnectingLine vertical={true} height="48px" color="blue" />
                            </div>
                            <WorkflowCard
                                icon={Users}
                                title="Khách hàng mô tả bài toán"
                                description="Chia sẻ thách thức và mục tiêu kinh doanh"
                                level="secondary"
                                id="customer"
                                isActive={hoveredCard === 'customer'}
                            />
                        </div>

                        {/* Right Branch */}
                        <div className="relative">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 h-12">
                                <ConnectingLine vertical={true} height="48px" color="blue" />
                            </div>
                            <WorkflowCard
                                icon={Target}
                                title="Nextgency phân tích mục tiêu & kênh vận hành"
                                description="Đánh giá toàn diện và đề xuất giải pháp"
                                level="secondary"
                                id="analysis"
                                isActive={hoveredCard === 'analysis'}
                            />
                        </div>
                    </div>

                    {/* Level 2 - Solutions */}
                    <div className="relative mb-12">
                        <div className="absolute top-0 right-1/4 w-px h-12 bg-purple-300 -translate-y-12 hidden md:block"></div>

                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-purple-200 relative z-10">
                            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                                Các Cấp Độ Giải Pháp
                            </h3>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <WorkflowCard
                                    icon={Cpu}
                                    title="Cấp độ 1"
                                    description="Tự động hóa thao tác lặp lại"
                                    level="tertiary"
                                    id="level1"
                                    isActive={hoveredCard === 'level1'}
                                />
                                <WorkflowCard
                                    icon={Link2}
                                    title="Cấp độ 2"
                                    description="Kết nối đa nền tảng (FB, Zalo, CRM...)"
                                    level="tertiary"
                                    id="level2"
                                    isActive={hoveredCard === 'level2'}
                                />
                                <WorkflowCard
                                    icon={Brain}
                                    title="Cấp độ 3"
                                    description="AI tư vấn & phân tích dữ liệu"
                                    level="tertiary"
                                    id="level3"
                                    isActive={hoveredCard === 'level3'}
                                />
                            </div>

                            {/* Contract */}
                            <div className="max-w-md mx-auto">
                                <WorkflowCard
                                    icon={FileSignature}
                                    title="Ký hợp đồng & thống nhất thời gian"
                                    description="Cam kết chính thức và lộ trình rõ ràng"
                                    level="primary"
                                    id="contract"
                                    isActive={hoveredCard === 'contract'}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Deployment Process */}
                    <div className="relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 h-12 ">
                            <ConnectingLine vertical={true} height="48px" color="blue" />
                        </div>

                        <div className="bg-gradient-to-b from-white to-blue-50 rounded-xl p-8 border-2 border-blue-200 relative z-10">
                            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                                Quy Trình Triển Khai
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <WorkflowCard
                                    icon={Settings}
                                    title="Thiết lập hệ thống"
                                    description="Automation - AI - Data Hub"
                                    level="process"
                                    id="setup"
                                    isActive={hoveredCard === 'setup'}
                                />
                                <WorkflowCard
                                    icon={TestTube}
                                    title="Chạy thử & tinh chỉnh"
                                    description="Đảm bảo hoạt động tối ưu"
                                    level="process"
                                    id="test"
                                    isActive={hoveredCard === 'test'}
                                />
                                <WorkflowCard
                                    icon={GraduationCap}
                                    title="Bàn giao & đào tạo"
                                    description="Hướng dẫn sử dụng chi tiết"
                                    level="process"
                                    id="training"
                                    isActive={hoveredCard === 'training'}
                                />
                                <WorkflowCard
                                    icon={Wrench}
                                    title="Bảo trì & tối ưu"
                                    description="Nâng cấp định kỳ"
                                    level="process"
                                    id="maintenance"
                                    isActive={hoveredCard === 'maintenance'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkflowSection;