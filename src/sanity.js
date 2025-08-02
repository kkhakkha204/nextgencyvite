// src/sanity.js - Cấu hình kết nối Sanity với Environment Variables
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Kiểm tra environment variables
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01';
const token = import.meta.env.VITE_SANITY_TOKEN;

// Validation
if (!projectId) {
    console.error('Missing VITE_SANITY_PROJECT_ID in environment variables');
    console.error('Please add your Sanity Project ID to .env file');
}

// Tạo Sanity client
export const client = createClient({
    projectId,
    dataset,
    useCdn: true, // Sử dụng CDN cho tốc độ nhanh hơn (production)
    apiVersion,

    // Nếu bạn cần write operations (create, update, delete)
    ...(token && { token }),
});

// Helper để tạo image URLs
const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    if (!source) return null;
    return builder.image(source);
};

// Helper functions để query data
export const queries = {
    // Lấy tất cả bài viết được publish
    allPosts: `*[_type == "post" && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    author->{
      name,
      slug,
      image
    },
    categories[]->{
      title,
      slug,
      color,
      icon
    },
    tags,
    publishedAt,
    featured,
    readingTime,
    seo
  }`,

    // Lấy bài viết featured
    featuredPosts: `*[_type == "post" && status == "published" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    author->{
      name,
      slug,
      image
    },
    categories[]->{
      title,
      slug,
      color,
      icon
    },
    publishedAt,
    readingTime
  }`,

    // Lấy bài viết theo slug
    postBySlug: `*[_type == "post" && slug.current == $slug && status == "published"][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    mainImage,
    author->{
      name,
      slug,
      image,
      bio,
      socialMedia
    },
    categories[]->{
      title,
      slug,
      color,
      icon
    },
    tags,
    publishedAt,
    readingTime,
    seo,
    relatedPosts[]->{
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      readingTime
    }
  }`,

    // Lấy tất cả categories
    allCategories: `*[_type == "category" && isActive == true] | order(order asc) {
    _id,
    title,
    slug,
    description,
    color,
    icon,
    order
  }`,

    // Lấy bài viết theo category
    postsByCategory: `*[_type == "post" && status == "published" && references($categoryId)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    author->{
      name,
      slug,
      image
    },
    categories[]->{
      title,
      slug,
      color,
      icon
    },
    publishedAt,
    readingTime
  }`,

    // Lấy tất cả authors
    allAuthors: `*[_type == "author"] {
    _id,
    name,
    slug,
    image,
    bio,
    email,
    socialMedia
  }`,

    // Search posts
    searchPosts: `*[_type == "post" && status == "published" && (
    title match $searchTerm + "*" ||
    excerpt match $searchTerm + "*" ||
    tags[] match $searchTerm + "*"
  )] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    author->{
      name,
      slug,
      image
    },
    categories[]->{
      title,
      slug,
      color,
      icon
    },
    publishedAt,
    readingTime
  }`
};

// Helper function để fetch data với error handling
export const fetchSanityData = async (query, params = {}) => {
    try {
        // Kiểm tra xem có project ID không
        if (!projectId) {
            throw new Error('Sanity Project ID is missing. Please check your environment variables.');
        }

        const data = await client.fetch(query, params);
        return data;
    } catch (error) {
        console.error('Sanity fetch error:', error);

        // Log chi tiết hơn về lỗi
        if (error.message.includes('project not found')) {
            console.error('Project ID không tồn tại. Vui lòng kiểm tra VITE_SANITY_PROJECT_ID');
        } else if (error.message.includes('dataset not found')) {
            console.error('Dataset không tồn tại. Vui lòng kiểm tra VITE_SANITY_DATASET');
        }

        throw error;
    }
};

// Helper để test kết nối
export const testConnection = async () => {
    try {
        console.log('Testing Sanity connection...');
        console.log('Project ID:', projectId);
        console.log('Dataset:', dataset);

        const result = await client.fetch('*[_type == "post"][0...1]');
        console.log('✅ Sanity connection successful!');
        console.log('Sample data:', result);
        return true;
    } catch (error) {
        console.error('❌ Sanity connection failed:', error);
        return false;
    }
};