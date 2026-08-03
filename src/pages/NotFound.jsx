import React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {ArrowLeft, ArrowUpRight, Bot, CalendarClock, FolderOpen, Building2, Newspaper} from 'lucide-react';
import SEOManager from '../components/SEO/SEOManager.jsx';

const QUICK_LINKS = [
    {
        to: '/about',
        icon: Building2,
        title: 'Giới thiệu',
        desc: 'Giới thiệu tổng quan về Nextgency'
    },
    {
        to: '/ai',
        icon: Bot,
        title: 'Automation Content AI',
        desc: 'Viết nội dung chuẩn SEO · AEO · GEO bằng AI.'
    },
    {
        to: '/projects/all',
        icon: FolderOpen,
        title: 'Dự án đã triển khai',
        desc: 'Xem Nextgency đã làm gì cho khách hàng.'
    },
    {
        to: '/news',
        icon: Newspaper,
        title: 'Tin tức & kiến thức',
        desc: 'Góc nhìn thực chiến về marketing và AI.'
    }
];

const NotFound = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <SEOManager
                title="Không tìm thấy trang | Nextgency"
                description="Đường dẫn bạn truy cập không tồn tại hoặc đã được chuyển sang địa chỉ khác."
                ogUrl={pathname}
                noindex
            />

            {/* Trừ chiều cao header để trang luôn lấp đầy màn hình, footer không bị đẩy lên giữa */}
            <section className="relative flex min-h-[calc(100vh-70px)] items-center overflow-hidden bg-white py-[60px] lg:min-h-[calc(100vh-85px)] lg:py-[90px]">
                {/* Lưới nền mờ */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(26,68,152,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(26,68,152,.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
                {/* Quầng sáng thương hiệu */}
                <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#c08dfe]/25 blur-3xl" />

                <div className="relative z-10 mx-auto px-4 sm:px-6 md:max-w-[700px] lg:max-w-[1280px] lg:px-8">
                    <div className="text-center">
                        {/* Con số 404 chồng lên cụm vòng tròn thương hiệu */}
                        <div className="relative inline-flex items-center justify-center">
                            <svg
                                width="94"
                                height="51"
                                viewBox="0 0 94 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="absolute -top-2 h-16 w-32 opacity-90 sm:h-20 sm:w-40 lg:h-24 lg:w-48"
                            >
                                <circle cx="25.4404" cy="25.4404" r="25.4404" fill="#f3e8ff" className="animate-pulse" style={{animationDelay: '0s', animationDuration: '2s'}} />
                                <circle cx="40.1005" cy="25.4404" r="25.4404" fill="#e9d5ff" className="animate-pulse" style={{animationDelay: '0.5s', animationDuration: '2s'}} />
                                <circle cx="53.8994" cy="25.4404" r="25.4404" fill="#d8b4fe" className="animate-pulse" style={{animationDelay: '1s', animationDuration: '2s'}} />
                                <circle cx="68.5596" cy="25.4404" r="25.4404" fill="#c59efe" className="animate-pulse" style={{animationDelay: '1.5s', animationDuration: '2s'}} />
                            </svg>

                            <span className="relative bg-gradient-to-r from-black via-[#1a4498] to-[#c08dfe] bg-clip-text font-archivo text-[88px] font-bold leading-none tracking-tight text-transparent sm:text-[120px] lg:text-[160px]">
                                404
                            </span>
                        </div>

                        <h1 className="mt-4 font-archivo text-[24px] font-bold uppercase leading-[1.45] text-black md:text-[32px] lg:text-[40px]">
                            Trang này không tồn tại
                        </h1>

                        <p className="mx-auto mt-2 max-w-[560px] text-[15px] text-gray-700 lg:text-[18px]">
                            Đường dẫn có thể đã đổi địa chỉ, bị gõ sai hoặc không còn được dùng nữa. Bạn thử quay lại
                            hoặc đi tới một trong những trang bên dưới nhé.
                        </p>

                        {/* Đường dẫn khách vừa truy cập */}
                        <div className="mt-4 inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-gray-50 px-4 py-2">
                            <span className="h-1.5 w-1.5 flex-none rounded-full bg-[#c08dfe]" />
                            <span className="truncate font-mono text-[12px] text-gray-600 lg:text-[13px]">{pathname}</span>
                        </div>

                        {/* CTA */}
                        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                            <Link
                                to="/"
                                className="group relative flex animate-gradient-shift items-center space-x-3 rounded-full bg-gradient-to-r from-[#1a4498] via-[#c08dfe] to-[#1a4498] py-1.5 pl-6 pr-1.5 text-[16px] font-medium text-white no-underline transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 hover:no-underline"
                                style={{backgroundSize: '200% 200%'}}
                            >
                                <span>Về trang chủ</span>
                                <span className="neu-shadow-xs flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-black transition-all duration-300">
                                    <ArrowUpRight
                                        className="h-5 w-5 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-105"
                                        strokeWidth={2.5}
                                    />
                                </span>
                            </Link>

                            <button
                                type="button"
                                onClick={() => navigate(-1)}
                                className="group flex items-center space-x-3 rounded-full bg-black py-1.5 pl-2 pr-6 text-[16px] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-300"
                            >
                                <span className="neu-shadow-xs flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-white transition-all duration-300">
                                    <ArrowLeft
                                        className="h-5 w-5 text-black transition-all duration-300 group-hover:-translate-x-0.5"
                                        strokeWidth={2.5}
                                    />
                                </span>
                                <span>Quay lại trang trước</span>
                            </button>
                        </div>
                    </div>

                    {/* Lối đi nhanh */}
                    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
                        {QUICK_LINKS.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="group flex transform-gpu flex-col rounded-xl border-2 border-black bg-white p-4 no-underline shadow-md transition-all duration-300 ease-out hover:no-underline lg:p-6 lg:hover:-translate-y-1 lg:hover:shadow-lg"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a4498]/10 text-[#1a4498] transition-colors duration-300 group-hover:bg-[#1a4498] group-hover:text-white">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                        <ArrowUpRight className="h-4 w-4 text-gray-400 transition-all duration-300 group-hover:rotate-12 group-hover:text-black" />
                                    </div>
                                    <h2 className="mt-4 text-[14px] font-medium text-black lg:text-[16px]">{link.title}</h2>
                                    <p className="mt-0.5 text-[13px] text-gray-700 lg:text-[15px]">{link.desc}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default NotFound;
