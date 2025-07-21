    import React from 'react';
    import {
        ChevronDown,
        Dot,
        FileSignature,
        Settings,
        TestTube,
        GraduationCap,
        Wrench
    } from 'lucide-react';

    const WorkflowSection = () => {
        return (
            <section className="pt-[60px] lg:pt-[90px] bg-white">
                <div className="md:max-w-[700px] lg:max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Tiêu đề chính */}
                    <div className="text-center mb-4 lg:mb-8">
                        <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black leading-tight">
                            Quy trình làm việc Automation - AI - Data
                        </h2>
                    </div>

                    {/* GIAI ĐOẠN 1 */}
                    <div className="mb-4 lg:mb-4 p-2 bg-gray-50 rounded-2xl">
                        <div className=" p-2 bg-gradient-to-br from-[#c08dfe] via-black to-[#c08dfe] rounded-xl">
                        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 p-2 bg-gray-50 neu-shadow-inset-xs rounded-xl">
                            {/* Cột trái - Nội dung */}
                            <div className="flex flex-col justify-center">
                                {/* Card 1 */}
                                <div className="p-4 rounded-lg bg-white border-2 border-white transition-all duration-300 shadow-sm">
                                    <div className="flex items-start">
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-black">
                                                Gửi yêu cầu & tư vấn sơ bộ
                                            </h3>
                                            <p className="text-gray-700 text-[12px] lg:text-[13px]">
                                                Tiếp nhận nhu cầu - tư vấn giải pháp
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="flex flex-col items-center">
                                    <Dot className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
                                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-black -mt-4" />
                                </div>

                                {/* Card 2 */}
                                <div className="p-4 rounded-lg bg-white border-2 border-white transition-all duration-300 shadow-sm">
                                    <div className="flex items-start ">
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-black">
                                                Khách hàng mô tả bài toán
                                            </h3>
                                            <p className="text-gray-700 text-[12px] lg:text-[13px]">
                                                Thảo luận vấn đề cần giải quyết
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="flex flex-col items-center">
                                    <Dot className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
                                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-black -mt-4" />
                                </div>

                                {/* Card 3 */}
                                <div className="p-4 rounded-lg bg-white border-2 border-white transition-all duration-300 shadow-sm">
                                    <div className="flex items-start ">
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-black">
                                                Phân tích mục tiêu, kênh vận hành
                                            </h3>
                                            <p className="text-gray-700 text-[12px] lg:text-[13px]">
                                                Xác định mục tiêu và kênh triển khai
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cột phải - Ảnh */}
                            <div className="flex items-center justify-center">
                                <img
                                    src="/assets/images/aaa.png"
                                    alt="Consultation Process"
                                    className="object-contain w-full max-w-[240px] md:max-w-[300px] aspect-square"
                                />
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* GIAI ĐOẠN 2 */}
                    <div className="mb-4 lg:mb-4 p-2 bg-gray-50 rounded-2xl">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-2 neu-dark-shadow-inset-xs bg-black rounded-xl shadow-lg">
                            {/* Cột trái - Ảnh */}
                            <div className="relative order-2 lg:order-1 flex items-center justify-center">
                                <img
                                    src="/assets/images/aaa.png"
                                    alt="Solution Levels"
                                    className="object-contain w-full max-w-[240px] md:max-w-[300px] aspect-square"
                                />
                            </div>

                            {/* Cột phải - Nội dung */}
                            <div className="order-1 lg:order-2 flex flex-col justify-center">
                                {/* Card 1 */}
                                <div className="p-4 rounded-lg shadow-sm shadow-gray-700 bg-black border-2 border-black transition-all duration-300">
                                    <div className="flex items-start">
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-white">
                                                Cấp độ 1: tự động hóa thao tác lặp lại
                                            </h3>
                                            <p className="text-gray-300 text-[12px] lg:text-[13px]">
                                                Giải phóng nhân lực khỏi các công việc thủ công
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="flex flex-col items-center">
                                    <Dot className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-white -mt-4" />
                                </div>

                                {/* Card 2 */}
                                <div className="p-4 rounded-lg shadow-sm shadow-gray-700 bg-black border-2 border-black transition-all duration-300">
                                    <div className="flex items-start">
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-white">
                                                Cấp độ 2: kết nối đa nền tảng (FB, Zalo, CRM...)
                                            </h3>
                                            <p className="text-gray-300 text-[12px] lg:text-[13px]">
                                                Tích hợp liền mạch giữa các hệ thống
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="flex flex-col items-center">
                                    <Dot className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-white -mt-4" />
                                </div>

                                {/* Card 3 */}
                                <div className="p-4 rounded-lg shadow-sm shadow-gray-700 bg-black border-2 border-black transition-all duration-300">
                                    <div className="flex items-start ">
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-white">
                                                Cấp độ 3: AI tư vấn & phân tích dữ liệu
                                            </h3>
                                            <p className="text-gray-300 text-[12px] lg:text-[13px]">
                                                Ứng dụng trí tuệ nhân tạo để tối ưu quy trình
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="flex flex-col items-center">
                                    <Dot className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-white -mt-4" />
                                </div>

                                {/* Card 4 - Highlight */}
                                <div className="p-4 rounded-lg bg-white border-2 border-white transition-all duration-300">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 md:p-3 rounded-lg bg-black">
                                            <FileSignature className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-black">
                                                Ký hợp đồng, thống nhất thời gian
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GIAI ĐOẠN 3 */}
                    <div className=" p-2 bg-gray-50 rounded-2xl">
                        <div className=" p-2 bg-gradient-to-br from-[#c08dfe] via-black to-[#c08dfe] rounded-xl">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-2 bg-gray-50 neu-shadow-inset-xs rounded-xl">
                            {/* Cột trái - Nội dung */}
                            <div className="flex flex-col justify-center">

                                {/* Card 1 */}
                                <div className="p-4 rounded-lg bg-white shadow-sm border-2 border-white transition-all duration-300">
                                    <div className="flex items-start gap-2">
                                        <div className="p-3 rounded-lg bg-black">
                                            <Settings className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-black">
                                                Thiết lập hệ thống
                                            </h3>
                                            <p className="text-gray-700 text-[12px] lg:text-[13px]">
                                                Triển khai giải pháp theo yêu cầu đã thống nhất
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="flex flex-col items-center">
                                    <Dot className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
                                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-black -mt-4" />
                                </div>

                                {/* Card 2 */}
                                <div className="p-4 rounded-lg bg-white shadow-sm border-2 border-white transition-all duration-300">
                                    <div className="flex items-start gap-2">
                                        <div className="p-3 rounded-lg bg-black">
                                            <TestTube className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-black">
                                                Chạy thử & tinh chỉnh
                                            </h3>
                                            <p className="text-gray-700 text-[12px] lg:text-[13px]">
                                                Kiểm tra và tối ưu hóa hiệu suất hệ thống
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="flex flex-col items-center">
                                    <Dot className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
                                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-black -mt-4" />
                                </div>

                                {/* Card 3 */}
                                <div className="p-4 rounded-lg bg-white shadow-sm border-2 border-white transition-all duration-300">
                                    <div className="flex items-start gap-2">
                                        <div className="p-3 rounded-lg bg-black">
                                            <GraduationCap className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-black">
                                                Bàn giao & đào tạo
                                            </h3>
                                            <p className="text-gray-700 text-[12px] lg:text-[13px]">
                                                Hướng dẫn sử dụng và chuyển giao công nghệ
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="flex flex-col items-center">
                                    <Dot className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
                                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-black -mt-4" />
                                </div>

                                {/* Card 4 */}
                                <div className="p-4 rounded-lg bg-black shadow-sm border-2 border-white transition-all duration-300">
                                    <div className="flex items-start gap-2">
                                        <div className="p-3 rounded-lg bg-white">
                                            <Wrench className="w-5 h-5 text-black" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium  text-white">
                                                Bảo trì & tối ưu
                                            </h3>
                                            <p className="text-gray-300 text-[12px] lg:text-[13px]">
                                                Hỗ trợ liên tục và cập nhật tính năng mới
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cột phải - Ảnh */}
                            <div className="flex items-center justify-center">
                                <img
                                    src="/assets/images/aaa.png"
                                    alt="Consultation Process"
                                    className="object-contain w-full max-w-[240px] md:max-w-[300px] aspect-square"
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