import React from 'react';

const ServicesDivider = () => {
    // Service data
    const services = [
        {
            id: 1,
            title: "UI/UX Design",
            description: "Tự động hoá quy trình nội bộ &\nmarketing bằng n8n.",
            ellipseRotation: "rotate-3",
            hoverRotation: "group-hover:rotate-6",
            badgeRotation: "group-hover:rotate-12"
        },
        {
            id: 2,
            title: "Integration",
            description: "Xây dựng AI Agent:\nChatbot thông minh, tư vấn DISC, tạo nội dung.",
            ellipseRotation: "-rotate-2",
            hoverRotation: "group-hover:-rotate-4",
            badgeRotation: "group-hover:-rotate-12"
        },
        {
            id: 3,
            title: "Hosting & Maintenance",
            description: "Kết nối các nền tảng: Facebook, Zalo, Website, Email, CRM.",
            ellipseRotation: "rotate-1",
            hoverRotation: "group-hover:rotate-3",
            badgeRotation: "group-hover:rotate-6"
        }
    ];

    // CheckMark SVG Icon Component
    const CheckMarkIcon = ({ className }) => (
        <svg
            width="32"
            height="32"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M32.4999 21.6663L23.8332 30.3329L19.4999 25.9996M28.6998 7.49405L31.3452 9.74846C32.0117 10.3164 32.8392 10.6598 33.7121 10.7295L37.1767 11.0056C39.2136 11.1681 40.8316 12.7851 40.9941 14.822L41.2696 18.2872C41.3392 19.1601 41.6838 19.9888 42.2518 20.6553L44.5052 23.2999C45.8306 24.8552 45.8308 27.143 44.5054 28.6983L42.252 31.3434C41.684 32.0099 41.3399 32.8389 41.2702 33.7118L40.9931 37.1764C40.8305 39.2133 39.2151 40.8313 37.1781 40.9938L33.7123 41.2703C32.8394 41.34 32.0111 41.6825 31.3446 42.2504L28.6998 44.5049C27.1445 45.8303 24.8553 45.8306 23.3 44.5052L20.6552 42.2506C19.9887 41.6827 19.1604 41.3396 18.2875 41.2699L14.8217 40.9938C12.7847 40.8313 11.1693 39.2137 11.0067 37.1768L10.7296 33.712C10.6599 32.8391 10.3157 32.0108 9.74778 31.3443L7.49436 28.6984C6.16896 27.1431 6.16834 24.8561 7.49374 23.3008L9.74919 20.6549C10.3172 19.9884 10.658 19.1601 10.7277 18.2872L11.0048 14.8224C11.1674 12.7855 12.7875 11.1679 14.8244 11.0054L18.2864 10.7292C19.1593 10.6596 19.988 10.3165 20.6545 9.74853L23.3002 7.49405C24.8555 6.16865 27.1445 6.16865 28.6998 7.49405Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    return (
        <section className="relative bg-gradient-to-br from-black via-black to-[#1a4498] pt-[90px] pb-[60px] lg:pt-[120px] lg:pb-[90px] z-10">
            <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {services.map((service) => (
                        <div key={service.id} className="flex flex-col items-center text-center group">
                            <div className="relative mb-6">
                                {/* Ellipse Container */}
                                <div className={`relative w-64 h-24 md:w-52 md:h-28 lg:w-80 lg:h-40 flex items-center justify-center transform ${service.ellipseRotation} ${service.hoverRotation} transition-transform duration-500`}>
                                    {/* Ellipse Border */}
                                    <div className="absolute inset-0 rounded-full border-2 border-white transition-colors duration-300"></div>

                                    {/* Content Inside Ellipse */}
                                    <div className="px-4 py-4 text-white">
                                            <p className="text-[10px] lg:text-[16px] whitespace-pre-line">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Circular Badge */}
                                <div className="absolute  -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-black border-2 border-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <CheckMarkIcon className={`transition-transform duration-300  ${service.badgeRotation}`}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesDivider;