import React from 'react';
import { AlertTriangle } from 'lucide-react';

const CommitmentSection = () => {
    const commitments = [
        {
            id: 1,
            title: "Thiết kế tùy biến theo yêu cầu",
            description: "Cam kết giao diện được thiết kế tùy biến theo yêu cầu, đồng thời tuân thủ nguyên tắc thiết kế chuẩn UX/UI"
        },
        {
            id: 2,
            title: "Tối ưu tốc độ tải < 2 giây",
            description: "Cam kết Website/Landing Page được tối ưu tốc độ tải < 2 giây (khi chạy thực tế), đáp ứng tiêu chuẩn Google PageSpeed"
        },
        {
            id: 3,
            title: "Hỗ trợ kỹ thuật chuyên nghiệp",
            description: "Cam kết hỗ trợ kỹ thuật & chỉnh sửa theo thoả thuận của từng gói dịch vụ"
        },
        {
            id: 4,
            title: "Bàn giao đầy đủ quyền sở hữu",
            description: "Cam kết mọi dữ liệu, source code và quyền truy cập được bàn giao đầy đủ cho khách hàng"
        },
        {
            id: 5,
            title: "Bảo mật thông tin tuyệt đối",
            description: "Cam kết không sử dụng hoặc chia sẻ dữ liệu khách hàng với bất kỳ bên thứ ba nào"
        },
        {
            id: 6,
            title: "Xử lý khiếu nại chuyên nghiệp",
            description: "Trong mọi tình huống khiếu nại, Nextgency cam kết:",
            subCommitments: [
                "Phản hồi trong vòng 24h làm việc",
                "Có biên bản làm việc rõ ràng về trách nhiệm, giải pháp và phương án xử lý triệt để",
                "Bồi thường bằng dịch vụ bổ sung hoặc hoàn tiền hợp lý nếu lỗi thuộc về đội ngũ vận hành"
            ]
        }
    ];

    return (
        <section className="bg-white py-[60px] lg:py-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center mb-2">
                        <span className=" text-black rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                            Automation-ai-data
                        </span>
                    </div>
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black uppercase leading-[1.45] mb-1">
                        Cam kết của chúng tôi
                    </h2>
                </div>
                {/* Commitments List */}
                <div className=" mx-auto p-2 bg-gray-50 rounded-2xl">
                    <div className="space-y-6 ">
                        {commitments.map((commitment) => (
                            <div
                                key={commitment.id}
                                className={`group relative rounded-lg p-2 shadow-md hover:shadow-lg transition-all duration-300 ${
                                    commitment.id === 6
                                        ? 'bg-black border-2 border-black'
                                        : 'bg-white border-2 border-black'
                                }`}
                            >
                                <div className="flex items-center space-x-4 ">
                                    {/* Number/Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="relative">
                                            <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                                                commitment.id === 6
                                                    ? 'bg-[#c59efe]'
                                                    : 'bg-black'
                                            }`}>
                                                {commitment.id === 6 ? (
                                                    <AlertTriangle className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                                                ) : (
                                                    <span className="text-[14px] sm:text-[16px] font-semibold text-white transition-colors duration-300">
                                                        {commitment.id}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="w-full">
                                            <p className={`text-[13px] lg:text-[15px]  ${
                                                commitment.id === 6 ? 'text-white' : 'text-black'
                                            }`}>
                                                {commitment.description}
                                            </p>

                                            {/* Sub-commitments for item 6 */}
                                            {commitment.subCommitments && (
                                                <div className="space-y-2 mt-2 pl-4 ml-1 border-l-2 border-white">
                                                    {commitment.subCommitments.map((subCommitment, index) => (
                                                        <div key={index} className="flex items-start space-x-2">
                                                            <div className="flex-shrink-0 w-6 h-6 bg-[#c59efe] rounded-full flex items-center justify-center mt-0.5">
                                                                <span className="text-xs font-semibold text-white">
                                                                    {index + 1}
                                                                </span>
                                                            </div>
                                                            <p className="text-gray-100 text-[12px] sm:text-[14px] italic mt-1">
                                                                {subCommitment}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommitmentSection;