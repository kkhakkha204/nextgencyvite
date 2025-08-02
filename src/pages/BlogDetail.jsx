// src/pages/BlogDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePostBySlug } from '../hooks/useSanity';
import { urlFor } from '../sanity';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '../components/PortableText/PortableTextComponents';
import {
    Calendar,
    Clock,
    ArrowLeft,
    Share2,
    Bookmark,
    User,
    Tag,
    ChevronRight
} from 'lucide-react';
import BlogCard from '../components/Blog/BlogCard';

const BlogDetail = () => {
    const { slug } = useParams();
    const { data: post, isLoading, error } = usePostBySlug(slug);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('vi-VN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link đã được sao chép!');
        }
    };

    // Loading state
    if (isLoading) {
        return (
            <div className="min-h-screen ">
                {/* Header skeleton */}
                <div className="bg-white border-b border-gray-100">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="animate-pulse">
                            <div className="h-4 bg-gray-200 rounded w-32 mb-6" />
                            <div className="h-10 bg-gray-200 rounded mb-4" />
                            <div className="h-6 bg-gray-200 rounded w-3/4 mb-6" />
                            <div className="flex items-center space-x-6">
                                <div className="h-4 bg-gray-200 rounded w-24" />
                                <div className="h-4 bg-gray-200 rounded w-20" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content skeleton */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="animate-pulse">
                        <div className="aspect-video bg-gray-200 rounded-xl mb-8" />
                        <div className="space-y-4">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="h-4 bg-gray-200 rounded" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Error state
    if (error || !post) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center max-w-md mx-auto px-4">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ArrowLeft className="w-10 h-10 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {error ? 'Lỗi tải bài viết' : 'Không tìm thấy bài viết'}
                    </h2>
                    <p className="text-gray-600 mb-6">
                        {error ? 'Có lỗi xảy ra khi tải bài viết.' : 'Bài viết này không tồn tại hoặc đã bị xóa.'}
                    </p>
                    <Link
                        to="/blog"
                        className="inline-flex items-center px-6 py-3 bg-[#1a4498] text-white rounded-lg font-medium hover:bg-[#1a4498]/90 transition-colors duration-300"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Quay lại Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-black">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <nav className="flex items-center space-x-2 text-sm text-gray-400">
                        <Link to="/" className="hover:text-[#c08dfe] transition-colors">
                            Trang chủ
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link to="/blog" className="hover:text-[#c08dfe] transition-colors">
                            Blog
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-[#c08dfe] font-medium truncate">
              {post.title}
            </span>
                    </nav>
                </div>
            </div>

            {/* Article Header */}
            <article className="bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Back button */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-gray-600 hover:text-[#1a4498] transition-colors duration-300 mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                        Quay lại Blog
                    </Link>

                    {/* Categories */}
                    {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.categories.map((category) => (
                                <span
                                    key={category._id}
                                    className="px-4 py-2 text-sm font-medium rounded-full"
                                    style={{
                                        backgroundColor: category.color?.hex || '#c08dfe',
                                        color: '#FFFFFF'
                                    }}
                                >
                  {category.title}
                </span>
                            ))}
                        </div>
                    )}

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {/* Excerpt */}
                    {post.excerpt && (
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {post.excerpt}
                        </p>
                    )}

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
                        {/* Author */}
                        {post.author && (
                            <div className="flex items-center space-x-3">
                                {post.author.image && (
                                    <img
                                        src={urlFor(post.author.image).width(48).height(48).fit('crop').url()}
                                        alt={post.author.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                )}
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <User className="w-4 h-4" />
                                        <span className="font-medium text-gray-900">{post.author.name}</span>
                                    </div>
                                    {post.author.bio && (
                                        <p className="text-sm text-gray-500 mt-1">{post.author.bio}</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Date and reading time */}
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(post.publishedAt)}</span>
                            </div>

                            {post.readingTime && (
                                <div className="flex items-center space-x-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{post.readingTime} phút đọc</span>
                                </div>
                            )}
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center space-x-4 ml-auto">
                            <button
                                onClick={handleShare}
                                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-[#1a4498] hover:bg-gray-50 rounded-lg transition-all duration-300"
                            >
                                <Share2 className="w-4 h-4" />
                                <span className="hidden sm:inline">Chia sẻ</span>
                            </button>

                            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-[#1a4498] hover:bg-gray-50 rounded-lg transition-all duration-300">
                                <Bookmark className="w-4 h-4" />
                                <span className="hidden sm:inline">Lưu</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                {post.mainImage && (
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={urlFor(post.mainImage).width(1200).height(675).fit('crop').url()}
                                alt={post.mainImage.alt || post.title}
                                className="w-full h-full object-cover"
                            />
                            {post.mainImage.caption && (
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                    <p className="text-white text-sm italic">
                                        {post.mainImage.caption}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Article Content */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                    <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#1a4498] prose-strong:text-gray-900">
                        <PortableText
                            value={post.body}
                            components={portableTextComponents}
                        />
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex items-center space-x-3 mb-4">
                                <Tag className="w-5 h-5 text-gray-600" />
                                <h3 className="text-lg font-semibold text-gray-900">Tags</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors duration-200"
                                    >
                    #{tag}
                  </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Author Bio */}
                    {post.author && post.author.bio && (
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Về tác giả</h3>
                                <div className="flex items-start space-x-4">
                                    {post.author.image && (
                                        <img
                                            src={urlFor(post.author.image).width(80).height(80).fit('crop').url()}
                                            alt={post.author.name}
                                            className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                                        />
                                    )}
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">{post.author.name}</h4>
                                        <p className="text-gray-700 leading-relaxed mb-4">{post.author.bio}</p>

                                        {/* Social links */}
                                        {post.author.socialMedia && (
                                            <div className="flex items-center space-x-4">
                                                {Object.entries(post.author.socialMedia).map(([platform, url]) => (
                                                    url && (
                                                        <a
                                                            key={platform}
                                                            href={url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-[#1a4498] hover:text-[#c08dfe] transition-colors duration-300 capitalize"
                                                        >
                                                            {platform}
                                                        </a>
                                                    )
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </article>

            {/* Related Posts */}
            {post.relatedPosts && post.relatedPosts.length > 0 && (
                <section className="bg-white border-t border-gray-100 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Bài viết liên quan</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {post.relatedPosts.slice(0, 3).map((relatedPost) => (
                                <BlogCard key={relatedPost._id} post={relatedPost} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default BlogDetail;