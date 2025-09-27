import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsListPage = () => {
    // Mock data
    const mockNews = [
        {
            id: 1,
            title: "Xu hướng thiết kế web 2025: Minimalism và AI Integration",
            description: "Khám phá những xu hướng thiết kế web mới nhất sẽ định hình năm 2025",
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
            categories: ["Design", "Technology"],
            tags: ["web design", "AI", "trends"],
            date: "2025-01-15",
            slug: "xu-huong-thiet-ke-web-2025"
        },
        {
            id: 2,
            title: "React 19 Features: Những tính năng mới đáng chú ý",
            description: "Tìm hiểu về các tính năng mới trong React 19 và cách áp dụng vào dự án",
            thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
            categories: ["Technology", "Development"],
            tags: ["react", "javascript", "frontend"],
            date: "2025-01-12",
            slug: "react-19-features"
        },
        {
            id: 3,
            title: "Chiến lược Digital Marketing hiệu quả cho doanh nghiệp",
            description: "Phương pháp xây dựng chiến lược marketing số hiệu quả trong thời đại 4.0",
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
            categories: ["Marketing", "Business"],
            tags: ["digital marketing", "strategy", "business"],
            date: "2025-01-10",
            slug: "chien-luoc-digital-marketing"
        },
        {
            id: 4,
            title: "UX/UI Best Practices: Tạo trải nghiệm người dùng tốt nhất",
            description: "Những nguyên tắc cơ bản để thiết kế giao diện người dùng chuyên nghiệp",
            thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop",
            categories: ["Design", "UX/UI"],
            tags: ["UX", "UI", "design principles"],
            date: "2025-01-08",
            slug: "ux-ui-best-practices"
        },
        {
            id: 5,
            title: "Tối ưu hóa hiệu suất website với Core Web Vitals",
            description: "Hướng dẫn chi tiết cách cải thiện Core Web Vitals cho website của bạn",
            thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
            categories: ["Technology", "SEO"],
            tags: ["performance", "SEO", "web vitals"],
            date: "2025-01-05",
            slug: "toi-uu-hoa-hieu-suat-website"
        },
        {
            id: 6,
            title: "Headless CMS: Tương lai của quản lý nội dung",
            description: "Tại sao Headless CMS là lựa chọn tốt cho các dự án web hiện đại",
            thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
            categories: ["Technology", "Development"],
            tags: ["CMS", "headless", "content management"],
            date: "2025-01-03",
            slug: "headless-cms-tuong-lai"
        },
        {
            id: 7,
            title: "Microinteractions: Chi tiết nhỏ tạo nên trải nghiệm lớn",
            description: "Cách sử dụng microinteractions để nâng cao trải nghiệm người dùng",
            thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop",
            categories: ["Design", "UX/UI"],
            tags: ["microinteractions", "animation", "UX"],
            date: "2025-01-01",
            slug: "microinteractions-chi-tiet-nho"
        },
        {
            id: 8,
            title: "JAMstack Architecture: Xây dựng website hiệu suất cao",
            description: "Tìm hiểu về kiến trúc JAMstack và lợi ích trong phát triển web",
            thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
            categories: ["Technology", "Development"],
            tags: ["JAMstack", "architecture", "performance"],
            date: "2024-12-28",
            slug: "jamstack-architecture"
        },
        {
            id: 9,
            title: "Content Strategy: Xây dựng nội dung hiệu quả",
            description: "Chiến lược nội dung để thu hút và giữ chân khách hàng",
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
            categories: ["Marketing", "Content"],
            tags: ["content strategy", "marketing", "engagement"],
            date: "2024-12-25",
            slug: "content-strategy"
        },
        {
            id: 10,
            title: "Mobile-First Design: Thiết kế ưu tiên thiết bị di động",
            description: "Phương pháp thiết kế mobile-first cho website hiện đại",
            thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop",
            categories: ["Design", "Mobile"],
            tags: ["mobile-first", "responsive", "design"],
            date: "2024-12-22",
            slug: "mobile-first-design"
        }
    ];

    // States
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const paginatedNews = mockNews.slice(0, currentPage * itemsPerPage);
    const hasMore = mockNews.length > currentPage * itemsPerPage;

    // Event handlers
    const handleLoadMore = () => {
        setCurrentPage(prev => prev + 1);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    return (
        <div className="min-h-screen py-[60px] lg:[90px]">
            {/* Header Section */}
            <div className="bg-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-4 lg:mb-8">
                    <div className="">
                        <span className=" text-black rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                            Nexgency news
                        </span>
                        <h1 className="text-[26px] md:text-[32px] lg:text-[60px] font-archivo font-bold text-black mb-1 uppercase leading-[1.45] tracking-tight">
                            Khám phá kiến thức &<br/> xu hướng công nghệ
                        </h1>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* News Grid - 2 columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-lg">
                    {paginatedNews.map(news => (
                        <Link
                            key={news.id}
                            to={`/news/${news.slug}`}
                            className="block"
                        >
                            <article className="bg-black rounded-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                                {/* Content */}
                                <div className="p-8">

                                    {/* Title */}
                                    <h3 className="text-[14px] lg:text-[24px] font-archivo font-medium uppercase text-white mb-3 line-clamp-2 group-hover:text-[#c08dfe] transition-colors">
                                        {news.title}
                                    </h3>

                                    {/* Date */}
                                    <div className="flex items-center text-white text-sm">
                                        {formatDate(news.date)}
                                    </div>
                                </div>
                                {/* Thumbnail */}
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img
                                        src={news.thumbnail}
                                        alt={news.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>


                            </article>
                        </Link>
                    ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                    <div className="text-center mt-8">
                        <button
                            onClick={handleLoadMore}
                            className="inline-flex items-center px-8 py-4 bg-[#c08dfe] border border-gray-200 rounded-xl text-white font-medium hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 transition-colors shadow-sm"
                        >
                            Xem thêm bài viết
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsListPage;