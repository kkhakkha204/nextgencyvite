import React, { useState } from 'react';
import { CheckCircle, FileText, Globe, Users, TrendingUp, Shield, Award, ChevronDown, ChevronUp } from 'lucide-react';

const ProfileSection = () => {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (index) => {
        setExpandedSections(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const requirements = [
        {
            icon: <CheckCircle className="w-6 h-6" />,
            title: "Thông tin tài khoản chính chủ",
            items: [
                "Tên thật / tên thương hiệu (phải trùng khớp với giấy tờ xác thực)",
                "Ảnh đại diện và ảnh bìa rõ ràng, chuyên nghiệp",
                "Mô tả tài khoản: lĩnh vực hoạt động, vị trí công việc (nếu cá nhân)",
                "Website chính thức (nếu có)"
            ]
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Giấy tờ xác minh danh tính / pháp lý",
            subtitle: "Với cá nhân:",
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
            icon: <Globe className="w-6 h-6" />,
            title: "Tối thiểu 3–5 bài báo chính thống",
            items: [
                "Bài viết từ các đầu báo điện tử uy tín",
                "Bài viết phải có nội dung đề cập trực tiếp đến cá nhân/doanh nghiệp xin tích xanh"
            ]
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Link mạng xã hội liên quan",
            items: [
                "Fanpage chính thức (đã xác minh)",
                "Kênh TikTok nếu có",
                "LinkedIn, Instagram,… (tăng uy tín và tính nhất quán)"
            ]
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Bằng chứng hoạt động & độ ảnh hưởng",
            items: [
                "Số lượng người theo dõi (tối thiểu 20k followers trên Facebook)",
                "Thống kê tương tác 30 ngày gần nhất (reach, comment, share…)",
                "Kết quả truyền thông, chiến dịch đã triển khai"
            ]
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Hồ sơ nội dung chất lượng",
            items: [
                "Bài viết định kỳ (thường xuyên cập nhật)",
                "Nội dung không vi phạm tiêu chuẩn cộng đồng",
                "Lịch sử tài khoản không có cảnh báo/vi phạm"
            ]
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Lý do xin tick xanh",
            items: [
                "Nêu rõ trong biểu mẫu gửi Facebook"
            ]
        }
    ];

    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                        <CheckCircle className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Hồ sơ lên tick xanh Facebook
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Danh sách đầy đủ các yêu cầu và tài liệu cần thiết để xác minh tài khoản Facebook
                    </p>
                </div>

                {/* Requirements Grid */}
                <div className="grid gap-4 md:gap-6">
                    {requirements.map((req, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:bg-gray-100 transition-all duration-300 border border-gray-200"
                        >
                            <div
                                className="flex items-start justify-between cursor-pointer"
                                onClick={() => toggleSection(index)}
                            >
                                <div className="flex items-start space-x-4 flex-1">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                        <div className="text-blue-600">
                                            {req.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {index + 1}. {req.title}
                                        </h3>
                                    </div>
                                </div>
                                <button className="ml-4 text-gray-400 hover:text-gray-600 transition-colors">
                                    {expandedSections[index] ? <ChevronUp /> : <ChevronDown />}
                                </button>
                            </div>

                            {/* Expandable Content */}
                            <div className={`mt-4 ml-16 overflow-hidden transition-all duration-300 ${expandedSections[index] ? 'max-h-96' : 'max-h-0'}`}>
                                {req.subtitle && (
                                    <p className="text-sm font-medium text-gray-700 mb-2">{req.subtitle}</p>
                                )}
                                <ul className="space-y-2">
                                    {req.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="text-gray-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                {req.subtitle2 && (
                                    <>
                                        <p className="text-sm font-medium text-gray-700 mt-4 mb-2">{req.subtitle2}</p>
                                        <ul className="space-y-2">
                                            {req.items2.map((item, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <span className="text-gray-600">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                            Bắt đầu chuẩn bị hồ sơ
                        </button>
                        <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors">
                            Tư vấn miễn phí
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                        <div className="text-gray-600">Tỷ lệ thành công</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                        <div className="text-gray-600">Khách hàng đã hỗ trợ</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">7-14</div>
                        <div className="text-gray-600">Ngày xử lý</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;