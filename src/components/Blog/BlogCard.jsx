// src/components/Blog/BlogCard.jsx - Redesigned với toàn bộ card clickable
import React from 'react';
import { urlFor } from '../../sanity';
import { Calendar, Clock } from 'lucide-react';

const BlogCard = ({ post, featured = false }) => {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const handleCardClick = () => {
        window.location.href = `/blog/${post.slug.current}`;
    };

    if (featured) {
        return (
            <article
                onClick={handleCardClick}
                className="group rounded-lg overflow-hidden bg-white/10 backdrop-blur-2xl  transition-all duration-300 h-full flex flex-col cursor-pointer"
            >
                {/* Featured Image */}
                {post.mainImage && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                            src={urlFor(post.mainImage).width(600).height(400).fit('crop').url()}
                            alt={post.mainImage.alt || post.title}
                            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                        />
                        {/* Featured Badge */}
                        <div className="absolute top-2 left-2">
              <span className="inline-flex items-center px-3 py-0.5 bg-white text-black text-[10px] lg:text-[12px] font-medium rounded-full neu-shadow-xs">
                Nổi bật
              </span>
                        </div>
                    </div>
                )}

                <div className="p-3 flex-1 flex flex-col">
                    {/* Categories */}
                    {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                            {post.categories.slice(0, 2).map((category) => (
                                <span
                                    key={category._id}
                                    className=" text-[10px] lg:text-[12px]  font-medium font-archivo uppercase tracking-widest rounded-full"
                                    style={{
                                        color: '#c08dfe'
                                    }}
                                >
                  {category.title}
                </span>
                            ))}
                        </div>
                    )}

                    {/* Title */}
                    <h3 className="text-[14px] lg:text-[16px] font-semibold mb-2 text-white leading-tight group-hover:text-[#c08dfe] transition-colors duration-300 flex-1">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    {post.excerpt && (
                        <p className="text-gray-400 mb-4 line-clamp-2 text-[12px] lg:text-[14px]">
                            {post.excerpt}
                        </p>
                    )}

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-white mt-auto">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{formatDate(post.publishedAt)}</span>
                            </div>

                            {post.readingTime && (
                                <div className="flex items-center space-x-1">
                                    <Clock className="w-3 h-3" />
                                    <span>{post.readingTime}p</span>
                                </div>
                            )}
                        </div>

                        {post.author && (
                            <div className="flex items-center space-x-2">
                                {post.author.image && (
                                    <img
                                        src={urlFor(post.author.image).width(24).height(24).fit('crop').url()}
                                        alt={post.author.name}
                                        className="w-6 h-6 rounded-full object-cover"
                                    />
                                )}
                                <span className="font-medium">{post.author.name}</span>
                            </div>
                        )}
                    </div>
                </div>
            </article>
        );
    }

    // Regular card
    return (
        <article
            onClick={handleCardClick}
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer"
        >
            {/* Image */}
            {post.mainImage && (
                <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                        src={urlFor(post.mainImage).width(600).height(400).fit('crop').url()}
                        alt={post.mainImage.alt || post.title}
                        className="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                </div>
            )}

            <div className="p-3 flex-1 flex flex-col">
                {/* Categories */}
                {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.slice(0, 1).map((category) => (
                            <span
                                key={category._id}
                                className="px-3 py-1 text-[9px] lg:text-[11px]  font-medium font-archivo uppercase tracking-widest rounded-full"
                                style={{
                                    backgroundColor: '#c08dfe',
                                    color: '#FFFFFF'
                                }}
                            >
                {category.title}
              </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h3 className="text-[14px] lg:text-[16px] font-semibold mb-2 text-black leading-tight group-hover:text-[#c08dfe] transition-colors duration-300 flex-1">
                    {post.title}
                </h3>


                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{formatDate(post.publishedAt)}</span>
                        </div>

                        {post.readingTime && (
                            <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{post.readingTime}p</span>
                            </div>
                        )}
                    </div>

                    {post.author && (
                        <div className="flex items-center space-x-2">
                            {post.author.image && (
                                <img
                                    src={urlFor(post.author.image).width(24).height(24).fit('crop').url()}
                                    alt={post.author.name}
                                    className="w-6 h-6 rounded-full object-cover"
                                />
                            )}
                            <span className="font-medium">{post.author.name}</span>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
};

export default BlogCard;