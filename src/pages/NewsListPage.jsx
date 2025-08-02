import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, ChevronDown } from 'lucide-react';

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
            date: "2025-01-15"
        },
        {
            id: 2,
            title: "React 19 Features: Những tính năng mới đáng chú ý",
            description: "Tìm hiểu về các tính năng mới trong React 19 và cách áp dụng vào dự án",
            thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
            categories: ["Technology", "Development"],
            tags: ["react", "javascript", "frontend"],
            date: "2025-01-12"
        },
        {
            id: 3,
            title: "Chiến lược Digital Marketing hiệu quả cho doanh nghiệp",
            description: "Phương pháp xây dựng chiến lược marketing số hiệu quả trong thời đại 4.0",
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
            categories: ["Marketing", "Business"],
            tags: ["digital marketing", "strategy", "business"],
            date: "2025-01-10"
        },
        {
            id: 4,
            title: "UX/UI Best Practices: Tạo trải nghiệm người dùng tốt nhất",
            description: "Những nguyên tắc cơ bản để thiết kế giao diện người dùng chuyên nghiệp",
            thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop",
            categories: ["Design", "UX/UI"],
            tags: ["UX", "UI", "design principles"],
            date: "2025-01-08"
        },
        {
            id: 5,
            title: "Tối ưu hóa hiệu suất website với Core Web Vitals",
            description: "Hướng dẫn chi tiết cách cải thiện Core Web Vitals cho website của bạn",
            thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
            categories: ["Technology", "SEO"],
            tags: ["performance", "SEO", "web vitals"],
            date: "2025-01-05"
        },
        {
            id: 6,
            title: "Headless CMS: Tương lai của quản lý nội dung",
            description: "Tại sao Headless CMS là lựa chọn tốt cho các dự án web hiện đại",
            thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
            categories: ["Technology", "Development"],
            tags: ["CMS", "headless", "content management"],
            date: "2025-01-03"
        },
        {
            id: 7,
            title: "Microinteractions: Chi tiết nhỏ tạo nên trải nghiệm lớn",
            description: "Cách sử dụng microinteractions để nâng cao trải nghiệm người dùng",
            thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop",
            categories: ["Design", "UX/UI"],
            tags: ["microinteractions", "animation", "UX"],
            date: "2025-01-01"
        },
        {
            id: 8,
            title: "JAMstack Architecture: Xây dựng website hiệu suất cao",
            description: "Tìm hiểu về kiến trúc JAMstack và lợi ích trong phát triển web",
            thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
            categories: ["Technology", "Development"],
            tags: ["JAMstack", "architecture", "performance"],
            date: "2024-12-28"
        },
        {
            id: 9,
            title: "Content Strategy: Xây dựng nội dung hiệu quả",
            description: "Chiến lược nội dung để thu hút và giữ chân khách hàng",
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
            categories: ["Marketing", "Content"],
            tags: ["content strategy", "marketing", "engagement"],
            date: "2024-12-25"
        },
        {
            id: 10,
            title: "Mobile-First Design: Thiết kế ưu tiên thiết bị di động",
            description: "Phương pháp thiết kế mobile-first cho website hiện đại",
            thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop",
            categories: ["Design", "Mobile"],
            tags: ["mobile-first", "responsive", "design"],
            date: "2024-12-22"
        }
    ];

    const allCategories = [...new Set(mockNews.flatMap(news => news.categories))];
    const allTags = [...new Set(mockNews.flatMap(news => news.tags))];

    // States
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showCategoryFilter, setShowCategoryFilter] = useState(false);
    const [showTagFilter, setShowTagFilter] = useState(false);
    const itemsPerPage = 6;

    // Filter logic
    const filteredNews = useMemo(() => {
        return mockNews.filter(news => {
            const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                news.description.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesCategories = selectedCategories.length === 0 ||
                selectedCategories.some(cat => news.categories.includes(cat));

            const matchesTags = selectedTags.length === 0 ||
                selectedTags.some(tag => news.tags.includes(tag));

            return matchesSearch && matchesCategories && matchesTags;
        });
    }, [searchTerm, selectedCategories, selectedTags]);

    const paginatedNews = filteredNews.slice(0, currentPage * itemsPerPage);
    const hasMore = filteredNews.length > currentPage * itemsPerPage;

    // Event handlers
    const handleCategoryToggle = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
        setCurrentPage(1);
    };

    const handleTagToggle = (tag) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
        setCurrentPage(1);
    };

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
                <div className="lg:grid lg:grid-cols-12 lg:gap-6">
                    {/* Sidebar - 30% */}
                    <div className="lg:col-span-3 mb-4 lg:mb-0">
                        <div className="sticky top-24 space-y-4 p-2 bg-gray-50 rounded-2xl">
                            {/* Search */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Tìm kiếm bài viết..."
                                        value={searchTerm}
                                        onChange={(e) => {
                                            setSearchTerm(e.target.value);
                                            setCurrentPage(1);
                                        }}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-200 placeholder:text-gray-600 rounded-md focus:ring-2 focus:ring-purple-200 focus:border-transparent transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Categories Filter */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                                <button
                                    onClick={() => setShowCategoryFilter(!showCategoryFilter)}
                                    className="flex items-center justify-between w-full text-[14px] lg:text-[16px] font-medium text-black mb-4"
                                >
                                    <span>Danh mục</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform ${showCategoryFilter ? 'rotate-180' : ''}`} />
                                </button>

                                <div className={`space-y-2.5 ${showCategoryFilter ? 'block' : 'hidden'}`}>
                                    {allCategories.map(category => (
                                        <label key={category} className="flex items-center cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(category)}
                                                onChange={() => handleCategoryToggle(category)}
                                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <span className="ml-2 text-[13px] lg:text-[15px] text-gray-600 group-hover:text-gray-900 transition-colors">
                        {category}
                      </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Tags Filter */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                                <button
                                    onClick={() => setShowTagFilter(!showTagFilter)}
                                    className="flex items-center justify-between w-full text-[14px] lg:text-[16px] font-medium text-black mb-4"
                                >
                                    <span>Tags</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform ${showTagFilter ? 'rotate-180' : ''}`} />
                                </button>

                                <div className={`flex flex-wrap gap-2 ${showTagFilter ? 'block' : 'hidden'}`}>
                                    {allTags.map(tag => (
                                        <button
                                            key={tag}
                                            onClick={() => handleTagToggle(tag)}
                                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                                                selectedTags.includes(tag)
                                                    ? 'bg-black text-white'
                                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-200 border border-gray-200'
                                            }`}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* News Grid - 70% */}
                    <div className="lg:col-span-9">

                        {/* News Grid */}
                        {paginatedNews.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 p-2 bg-gray-50 rounded-2xl">
                                {paginatedNews.map(news => (
                                    <article key={news.id} className="bg-white rounded-xl overflow-hidden neu-shadow-inset-xs border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
                                        {/* Thumbnail */}
                                        <div className="aspect-[16/10] overflow-hidden p-1.5">
                                            <img
                                                src={news.thumbnail}
                                                alt={news.title}
                                                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-4">
                                            {/* Categories */}
                                            <div className="flex flex-wrap gap-4 mb-1">
                                                {news.categories.map(category => (
                                                    <span
                                                        key={category}
                                                        className="text-[#c08dfe] text-[10px] lg:text-[11px] font-archivo font-medium uppercase tracking-widest"
                                                    >
                            {category}
                          </span>
                                                ))}
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-[14px] lg:text-[16px] font-archivo font-medium uppercase text-black mb-3 line-clamp-2 group-hover:text-[#c08dfe] transition-colors">
                                                {news.title}
                                            </h3>

                                            {/* Date */}
                                            <div className="flex items-center text-gray-600 text-sm">
                                                {formatDate(news.date)}
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                                    <Search className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Không tìm thấy bài viết</h3>
                                <p className="text-gray-600">Hãy thử thay đổi từ khóa tìm kiếm hoặc bộ lọc</p>
                            </div>
                        )}

                        {/* Load More Button */}
                        {hasMore && (
                            <div className="text-center mt-8">
                                <button
                                    onClick={handleLoadMore}
                                    className="inline-flex items-center px-8 py-4 bg-[#c08dfe] border border-gray-200 rounded-xl text-white font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
                                >
                                    Xem thêm bài viết
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsListPage;