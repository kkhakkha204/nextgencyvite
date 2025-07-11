import React from 'react';

const ClientsPartnersSection = () => {
    return (
        <section className="bg-white pt-[60px] lg:pt-[90px]">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                {/* Thẻ chứa A - Tiêu đề và mô tả */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-10">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-[24px] lg:text-[40px] font-archivo font-semibold text-black mb-1">
                            Khách hàng &<br/>Đối tác chiến lược
                        </h2>
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-right">
                        <p className="text-[15px] lg:text-[18px] text-black leading-relaxed">
                            Những người bạn đồng hành cùng Nextgency trên hành trình kiến tạo chuyển đổi số bền vững
                        </p>
                    </div>
                </div>

                {/* Thẻ chứa B - 4 cột với 2 logo mỗi cột */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {/* Cột 1 */}
                    <div className="flex flex-col space-y-6">
                        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20">
                            <img
                                src="/assets/images/header/navbarlogoblack.png"
                                alt="Partner Logo 1"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20">
                            <img
                                src="/assets/images/header/navbarlogoblack.png"
                                alt="Partner Logo 2"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Cột 2 */}
                    <div className="flex flex-col space-y-6">
                        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20">
                            <img
                                src="/assets/images/header/navbarlogoblack.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20">
                            <img src="/assets/images/header/navbarlogoblack.png"
                                alt="Partner Logo 4"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Cột 3 */}
                    <div className="flex flex-col space-y-6">
                        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20">
                            <img src="/assets/images/header/navbarlogoblack.png"
                                alt="Partner Logo 5"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20">
                            <img src="/assets/images/header/navbarlogoblack.png"
                                alt="Partner Logo 6"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Cột 4 */}
                    <div className="flex flex-col space-y-6">
                        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20">
                            <img src="/assets/images/header/navbarlogoblack.png"
                                alt="Partner Logo 7"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20">
                            <img src="/assets/images/header/navbarlogoblack.png"
                                alt="Partner Logo 8"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Thẻ chứa C - 4 cột (cột C và D merge chứa mô tả) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {/* Cột A - 2 logo */}
                    <div className="flex flex-col space-y-6">
                        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20">
                            <img src="/assets/images/header/navbarlogoblack.png"
                                alt="Partner Logo 9"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20">
                            <img
                                 src="/assets/images/header/navbarlogoblack.png"
                                alt="Partner Logo 10"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Cột B - 2 logo */}
                    <div className="flex flex-col space-y-6">
                        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20">
                            <img
                                 src="/assets/images/header/navbarlogoblack.png"
                                alt="Partner Logo 11"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20">
                            <img
                                 src="/assets/images/header/navbarlogoblack.png"
                                alt="Partner Logo 12"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Cột C & D merge - Mô tả */}
                    <div className="col-span-2 flex justify-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                        <div className="">
                            <p className="text- text-gray-800 leading-relaxed">
                                Trong suốt hành trình phát triển, Nextgency tự hào được đồng hành cùng hơn 100+ doanh nghiệp và tổ chức trong nhiều lĩnh vực khác nhau: từ làm đẹp, giáo dục, y tế, công nghệ đến dịch vụ công và sản xuất.
                            </p>
                            <p className="text-gray-800 leading-relaxed">
                                Chúng tôi không chỉ triển khai các dự án công nghệ, mà còn đóng vai trò là đối tác tư vấn chiến lược – cùng khách hàng phân tích dữ liệu, thiết kế giải pháp và tối ưu hiệu quả kinh doanh theo từng giai đoạn.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Thẻ chứa D - 4 cột (cột A có text, cột B,C,D có logo) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Cột A - Text */}
                    <div className="flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg p-4">
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-2">100+</div>
                            <div className="text-sm uppercase tracking-wide">
                                Đối tác chiến lược
                            </div>
                        </div>
                    </div>

                    {/* Cột B - 2 logo */}
                    <div className="flex flex-col space-y-6">
                        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20">
                            <img
                                 src="/assets/images/header/navbarlogoblack.png"
                                alt="Partner Logo 13"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20">
                            <img
                                 src="/assets/images/header/navbarlogoblack.png"
                                alt="Partner Logo 14"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Cột C - 2 logo */}
                    <div className="flex flex-col space-y-6">
                        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20">
                            <img
                                 src="/assets/images/header/navbarlogoblack.png"
                                alt="Partner Logo 15"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20">
                            <img
                                 src="/assets/images/header/navbarlogoblack.png"
                                alt="Partner Logo 16"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Cột D - 2 logo */}
                    <div className="flex flex-col space-y-6">
                        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20">
                            <img
                                 src="/assets/images/header/navbarlogoblack.png"
                                alt="Partner Logo 17"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20">
                            <img
                                 src="/assets/images/header/navbarlogoblack.png"
                                alt="Partner Logo 18"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsPartnersSection;