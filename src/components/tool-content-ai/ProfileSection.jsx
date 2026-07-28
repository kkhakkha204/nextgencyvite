import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ProfileSection = () => {
    const [expandedSections, setExpandedSections] = useState({ 0: true });

    const toggleSection = (index) => {
        setExpandedSections(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const requirements = [
        {
            title: "SEO, AEO và GEO khác nhau thế nào?",
            desc: "SEO tối ưu để xếp hạng trên Google. AEO tối ưu để được chọn làm câu trả lời trực tiếp (featured snippet, People Also Ask). GEO tối ưu để các engine AI như ChatGPT, Perplexity và Google AI Overviews trích dẫn nội dung của bạn.",
            items: [
                "Tên thật / tên thương hiệu (phải trùng khớp với giấy tờ xác thực)",
                "Ảnh đại diện và ảnh bìa rõ ràng, chuyên nghiệp",
                "Mô tả tài khoản: lĩnh vực hoạt động, vị trí công việc (nếu cá nhân)",
                "Website chính thức (nếu có)"
            ]
        },
        {
            title: "Tôi có cần biết kỹ thuật không?",
            desc: "Không. Bạn chỉ cần nhập chủ đề; nền tảng lo phần nghiên cứu, viết, tối ưu và chấm điểm. Có hướng dẫn chi tiết và tutorial cho người mới.",
            items: [
                "CCCD/Hộ chiếu (bản scan rõ ràng 2 mặt)",
                "Giấy phép hành nghề (nếu có)"
            ],
            subtitle2: "Với tổ chức/doanh nghiệp:",
            items2: [
                "Giấy đăng ký kinh doanh",
                "Biên lai thanh toán thuế (nếu cần)",
                "Công văn xác nhận đại diện pháp lý"
            ]
        },
        {
            title: "Đăng bài lên được những đâu?",
            desc: "WordPress, Wix, Shopify, Haravan, Sapo và Google Sheet. Sửa bài cũ rồi đăng lại sẽ cập nhật đúng bài, không tạo bản trùng.",
            items: [
                "Bài viết từ các đầu báo điện tử uy tín",
                "Bài viết phải có nội dung đề cập trực tiếp đến cá nhân/doanh nghiệp xin tích xanh"
            ]
        },
        {
            title: "Có hỗ trợ nhiều ngôn ngữ không?",
            desc: "Có. Giao diện và nội dung hỗ trợ 10 ngôn ngữ, kèm khả năng bản địa hóa bài viết theo từ khóa của từng thị trường.",
            items: [
                "Fanpage chính thức (đã xác minh)",
                "Kênh TikTok nếu có",
                "LinkedIn, Instagram,… (tăng uy tín và tính nhất quán)"
            ]
        },
        {
            title: "Tôi bắt đầu như thế nào?",
            desc: "Đăng nhập, nhập khóa API AI, kết nối website và viết bài đầu tiên - chỉ vài bước là xong.",
            items: [
                "Số lượng người theo dõi (tối thiểu 20k followers trên Facebook)",
                "Thống kê tương tác 30 ngày gần nhất (reach, comment, share…)",
                "Kết quả truyền thông, chiến dịch đã triển khai"
            ]
        }
    ];

    return (
        <section className="w-full bg-white py-[60px] lg:py-[90px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black leading-[1.45] mb-1 uppercase">
                        Câu hỏi thường gặp
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black max-w-3xl mx-auto">
                        Giải đáp các thắc mắc về Automation Tool Content AI
                    </p>
                </div>

                {/* Requirements Accordion */}
                <div className="space-y-4 p-2 bg-gray-50 rounded-2xl">
                    {requirements.map((req, index) => {
                        const isExpanded = expandedSections[index];
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-lg border-2 border-white shadow-md transition-all duration-300 ${
                                    isExpanded
                                        ? 'bg-white border-[#1a4498] shadow-lg'
                                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                                }`}
                            >
                                {/* Active Indicator */}
                                {isExpanded && (
                                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-black to-[#1a4498]"></div>
                                )}

                                {/* Header */}
                                <div
                                    className={`flex items-center justify-between cursor-pointer p-6 transition-all duration-300 ${
                                        isExpanded ? 'pb-4' : 'hover:bg-gray-50'
                                    }`}
                                    onClick={() => toggleSection(index)}
                                >
                                    <div className="flex items-center space-x-5 flex-1">
                                        {/* Number Badge */}
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-[16px] transition-all duration-300 ${
                                            isExpanded
                                                ? 'bg-[#1a4498] text-white'
                                                : 'bg-black text-white group-hover:bg-[#1a4498]'
                                        }`}>
                                            {String(index + 1).padStart(2,)}
                                        </div>

                                        {/* Title */}
                                        <h3 className={`text-[14px] md:text-[16px] font-medium transition-all duration-300 ${
                                            isExpanded ? 'text-black' : 'text-gray-700 group-hover:text-black'
                                        }`}>
                                            {req.title}
                                        </h3>
                                    </div>

                                    {/* Expand Icon */}
                                    <button className={`ml-4 p-2 rounded-lg transition-all duration-300 ${
                                        isExpanded
                                            ? ' text-[#1a4498] rotate-180'
                                            : ' text-gray-500 hover:bg-gray-200'
                                    }`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Expandable Content */}
                                <div className={`transition-all duration-300 ${
                                    isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                }`} style={{
                                    maxHeight: isExpanded ? '600px' : '0px',
                                    overflow: 'hidden'
                                }}>
                                    <div className="px-6 pb-6">
                                        <p className="ml-15 text-gray-600 text-[13px] lg:text-[15px] leading-relaxed">
                                            {req.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;