// src/components/Blog/BlogDetailSEO.jsx - SEO component cho blog detail
import React from 'react';
import SEOManager from '../SEO/SEOManager';
import { urlFor } from '../../sanity';

const BlogDetailSEO = ({ post }) => {
    if (!post) return null;

    // Prepare SEO data
    const seoTitle = post.seo?.metaTitle || post.title;
    const seoDescription = post.seo?.metaDescription || post.excerpt || `Đọc bài viết "${post.title}" trên blog Nextgency`;
    const seoKeywords = post.seo?.keywords || post.tags || [];

    // Open Graph image
    const ogImage = post.seo?.ogImage
        ? urlFor(post.seo.ogImage).width(1200).height(630).url()
        : post.mainImage
            ? urlFor(post.mainImage).width(1200).height(630).url()
            : null;

    // Structured data for article
    const articleStructuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt || seoDescription,
        "image": ogImage ? [ogImage] : undefined,
        "datePublished": post.publishedAt,
        "dateModified": post._updatedAt || post.publishedAt,
        "author": post.author ? {
            "@type": "Person",
            "name": post.author.name,
            "description": post.author.bio,
            "image": post.author.image ? urlFor(post.author.image).width(400).height(400).url() : undefined
        } : undefined,
        "publisher": {
            "@type": "Organization",
            "name": "Nextgency",
            "logo": {
                "@type": "ImageObject",
                "url": "https://nextgency.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": window.location.href
        },
        "keywords": Array.isArray(seoKeywords) ? seoKeywords.join(', ') : seoKeywords,
        "articleSection": post.categories?.map(cat => cat.title).join(', '),
        "wordCount": post.body ? JSON.stringify(post.body).length : undefined,
        "timeRequired": post.readingTime ? `PT${post.readingTime}M` : undefined
    };

    return (
        <SEOManager
            title={seoTitle}
            description={seoDescription}
            keywords={Array.isArray(seoKeywords) ? seoKeywords.join(', ') : seoKeywords}
            ogImage={ogImage}
            ogType="article"
            structuredData={articleStructuredData}
            additionalMetaTags={[
                // Article specific meta tags
                { name: 'article:published_time', content: post.publishedAt },
                { name: 'article:modified_time', content: post._updatedAt || post.publishedAt },
                { name: 'article:author', content: post.author?.name },
                { name: 'article:section', content: post.categories?.[0]?.title },
                ...(post.tags || []).map(tag => ({ name: 'article:tag', content: tag })),

                // Twitter Card
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: seoTitle },
                { name: 'twitter:description', content: seoDescription },
                { name: 'twitter:image', content: ogImage },

                // Additional meta
                { name: 'reading-time', content: post.readingTime ? `${post.readingTime} minutes` : undefined },
                { name: 'word-count', content: post.body ? JSON.stringify(post.body).length.toString() : undefined }
            ]}
        />
    );
};

export default BlogDetailSEO;