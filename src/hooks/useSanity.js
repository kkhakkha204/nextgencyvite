// src/hooks/useSanity.js - Custom hooks cho Sanity data
import { useQuery } from '@tanstack/react-query';
import { fetchSanityData, queries } from '../sanity';

// Hook để lấy tất cả bài viết
export const usePosts = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: () => fetchSanityData(queries.allPosts),
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 10 * 60 * 1000, // 10 minutes
    });
};

// Hook để lấy bài viết featured
export const useFeaturedPosts = () => {
    return useQuery({
        queryKey: ['featuredPosts'],
        queryFn: () => fetchSanityData(queries.featuredPosts),
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
    });
};

// Hook để lấy bài viết theo slug
export const usePostBySlug = (slug) => {
    return useQuery({
        queryKey: ['post', slug],
        queryFn: () => fetchSanityData(queries.postBySlug, { slug }),
        enabled: !!slug, // Chỉ chạy khi có slug
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
    });
};

// Hook để lấy tất cả categories
export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: () => fetchSanityData(queries.allCategories),
        staleTime: 10 * 60 * 1000, // Categories ít thay đổi
        cacheTime: 15 * 60 * 1000,
    });
};

// Hook để lấy bài viết theo category
export const usePostsByCategory = (categoryId) => {
    return useQuery({
        queryKey: ['postsByCategory', categoryId],
        queryFn: () => fetchSanityData(queries.postsByCategory, { categoryId }),
        enabled: !!categoryId,
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
    });
};

// Hook để lấy tất cả authors
export const useAuthors = () => {
    return useQuery({
        queryKey: ['authors'],
        queryFn: () => fetchSanityData(queries.allAuthors),
        staleTime: 10 * 60 * 1000,
        cacheTime: 15 * 60 * 1000,
    });
};

// Hook để search bài viết
export const useSearchPosts = (searchTerm) => {
    return useQuery({
        queryKey: ['searchPosts', searchTerm],
        queryFn: () => fetchSanityData(queries.searchPosts, { searchTerm }),
        enabled: !!searchTerm && searchTerm.length >= 2, // Chỉ search khi có ít nhất 2 ký tự
        staleTime: 2 * 60 * 1000, // Search results có thể thay đổi nhanh
        cacheTime: 5 * 60 * 1000,
    });
};

// Hook để lấy posts với pagination
export const usePostsPaginated = (page = 0, limit = 10) => {
    const query = `*[_type == "post" && status == "published"] | order(publishedAt desc) [$start...$end] {
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
  }`;

    return useQuery({
        queryKey: ['postsPaginated', page, limit],
        queryFn: () => fetchSanityData(query, {
            start: page * limit,
            end: (page * limit) + limit
        }),
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
    });
};

// Hook để đếm tổng số posts
export const usePostsCount = () => {
    const countQuery = `count(*[_type == "post" && status == "published"])`;

    return useQuery({
        queryKey: ['postsCount'],
        queryFn: () => fetchSanityData(countQuery),
        staleTime: 10 * 60 * 1000,
        cacheTime: 15 * 60 * 1000,
    });
};