// src/pages/Blog.jsx - Simplified without filter
import React, { useState, useMemo } from 'react';
import { usePosts, useFeaturedPosts } from '../hooks/useSanity';
import BlogCard from '../components/Blog/BlogCard';
import Pagination from '../components/Blog/Pagination';
import { LoadingSkeleton } from '../components/Blog/LoadingSkeleton';
import { Search, Sparkles, BookOpen } from 'lucide-react';

const POSTS_PER_PAGE = 6;

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch data từ Sanity
    const { data: posts, isLoading: postsLoading, error: postsError } = usePosts();
    const { data: featuredPosts, isLoading: featuredLoading } = useFeaturedPosts();

    // Filter và pagination logic
    const { filteredPosts, totalPages, totalFilteredCount } = useMemo(() => {
        if (!posts) return { filteredPosts: [], totalPages: 0, totalFilteredCount: 0 };

        let filtered = posts;

        // Filter by search term
        if (searchTerm.trim()) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(term) ||
                post.excerpt?.toLowerCase().includes(term) ||
                post.tags?.some(tag => tag.toLowerCase().includes(term))
            );
        }

        // Pagination
        const totalCount = filtered.length;
        const total = Math.ceil(totalCount / POSTS_PER_PAGE);
        const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
        const paginatedPosts = filtered.slice(startIndex, startIndex + POSTS_PER_PAGE);

        return {
            filteredPosts: paginatedPosts,
            totalPages: total,
            totalFilteredCount: totalCount
        };
    }, [posts, searchTerm, currentPage]);

    // Reset pagination when search changes
    React.useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    // Handle search
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Error state
    if (postsError) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center max-w-md mx-auto px-4">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <BookOpen className="w-10 h-10 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Lỗi kết nối</h2>
                    <p className="text-gray-600 mb-6">
                        Không thể tải dữ liệu từ Sanity. Vui lòng kiểm tra cấu hình.
                    </p>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-sm text-red-700 font-mono">
                            {postsError.message}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Loading state
    if (postsLoading || featuredLoading) {
        return <LoadingSkeleton />;
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Header */}
            <div className="relative ">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[60px] lg:py-[90px]">
                    <div className="text-center max-w-4xl mx-auto">

                        <h1 className="text-[26px] md:text-[32px] font-archivo lg:text-[60px] font-bold text-black uppercase mb-1 leading-[1.45]">
                            Blog{' '}
                            <span className="font-archivo bg-gradient-to-r from-black to-[#c08dfe] bg-clip-text text-transparent">
                Nextgency
              </span>
                        </h1>

                        <p className="text-[15px] lg:text-[18px] text-black mb-4 lg:mb-8">
                            Chia sẻ kiến thức, xu hướng và insights mới nhất về Digital Marketing
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-xl mx-auto">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Tìm kiếm bài viết..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="w-full pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a4498] focus:border-transparent shadow-sm transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Featured Posts Section */}
                {!featuredLoading && featuredPosts && featuredPosts.length > 0 && !searchTerm && (
                    <section className="mb-4 lg:mb-8 bg-gradient-to-br from-[#2B144D] via-black to-[#2B144D] p-2 rounded-2xl">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredPosts.slice(0, 3).map((post) => (
                                <BlogCard key={post._id} post={post} featured={true} />
                            ))}
                        </div>
                    </section>
                )}

                {/* All Posts Section */}
                <section className="">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-7 h-7 bg-[#1a4498] rounded-md flex items-center justify-center">
                                <BookOpen className="w-4 h-4 text-white" />
                            </div>
                            <h2 className="text-[20px] lg:text-[20px] font-bold text-black uppercase font-archivo">
                                {searchTerm ? `Kết quả tìm kiếm "${searchTerm}"` : 'Tất cả bài viết'}
                            </h2>
                        </div>
                    </div>

                    {filteredPosts && filteredPosts.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {filteredPosts.map((post) => (
                                    <BlogCard key={post._id} post={post} />
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex justify-center">
                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={setCurrentPage}
                                        className="bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100"
                                    />
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <BookOpen className="w-10 h-10 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {searchTerm ? 'Không tìm thấy bài viết' : 'Chưa có bài viết nào'}
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {searchTerm ? 'Hãy thử tìm kiếm với từ khóa khác' : 'Hãy quay lại sau để xem các bài viết mới'}
                            </p>

                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="inline-flex items-center px-6 py-3 bg-[#1a4498] text-white rounded-lg font-medium hover:bg-[#1a4498]/90 transition-colors duration-300"
                                >
                                    Xem tất cả bài viết
                                </button>
                            )}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Blog;