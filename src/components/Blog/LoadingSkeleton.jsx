// src/components/Blog/LoadingSkeleton.jsx
import React from 'react';

const BlogCardSkeleton = ({ featured = false }) => {
    if (featured) {
        return (
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
                <div className="aspect-[16/10] bg-gray-200" />
                <div className="p-8">
                    <div className="flex space-x-2 mb-4">
                        <div className="h-6 bg-gray-200 rounded-full w-16" />
                        <div className="h-6 bg-gray-200 rounded-full w-20" />
                    </div>
                    <div className="h-8 bg-gray-200 rounded mb-4" />
                    <div className="h-4 bg-gray-200 rounded mb-2" />
                    <div className="h-4 bg-gray-200 rounded mb-6 w-3/4" />
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-6">
                            <div className="h-4 bg-gray-200 rounded w-24" />
                            <div className="h-4 bg-gray-200 rounded w-20" />
                        </div>
                        <div className="h-4 bg-gray-200 rounded w-16" />
                    </div>
                    <div className="flex items-center space-x-3 mt-6 pt-6 border-t border-gray-100">
                        <div className="w-10 h-10 bg-gray-200 rounded-full" />
                        <div>
                            <div className="h-4 bg-gray-200 rounded w-20 mb-1" />
                            <div className="h-3 bg-gray-200 rounded w-16" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 animate-pulse h-full flex flex-col">
            <div className="aspect-[16/9] bg-gray-200" />
            <div className="p-6 flex-1 flex flex-col">
                <div className="h-6 bg-gray-200 rounded-full w-16 mb-3" />
                <div className="h-6 bg-gray-200 rounded mb-3" />
                <div className="h-4 bg-gray-200 rounded mb-2" />
                <div className="h-4 bg-gray-200 rounded mb-4 w-2/3" />
                <div className="flex justify-between items-center mt-auto">
                    <div className="flex space-x-3">
                        <div className="h-3 bg-gray-200 rounded w-16" />
                        <div className="h-3 bg-gray-200 rounded w-12" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gray-200 rounded-full" />
                        <div className="h-3 bg-gray-200 rounded w-16" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const CategoryFilterSkeleton = () => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-pulse">
            <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gray-200 rounded-lg" />
                <div className="h-5 bg-gray-200 rounded w-20" />
            </div>
            <div className="space-y-2">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-12 bg-gray-200 rounded-lg" />
                ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <div className="h-3 bg-gray-200 rounded w-20" />
                        <div className="h-3 bg-gray-200 rounded w-8" />
                    </div>
                    <div className="flex justify-between">
                        <div className="h-3 bg-gray-200 rounded w-16" />
                        <div className="h-3 bg-gray-200 rounded w-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const LoadingSkeleton = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Skeleton */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center animate-pulse">
                        <div className="h-12 bg-gray-200 rounded mx-auto mb-6 w-80" />
                        <div className="h-6 bg-gray-200 rounded mx-auto w-96" />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Skeleton */}
                    <div className="lg:col-span-1">
                        <CategoryFilterSkeleton />
                    </div>

                    {/* Main Content Skeleton */}
                    <div className="lg:col-span-3">
                        {/* Featured Section Skeleton */}
                        <section className="mb-16">
                            <div className="h-8 bg-gray-200 rounded w-48 mb-8 animate-pulse" />
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <BlogCardSkeleton featured />
                                <div className="space-y-6">
                                    <BlogCardSkeleton />
                                    <BlogCardSkeleton />
                                </div>
                            </div>
                        </section>

                        {/* All Posts Section Skeleton */}
                        <section>
                            <div className="h-8 bg-gray-200 rounded w-40 mb-8 animate-pulse" />
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {[...Array(6)].map((_, i) => (
                                    <BlogCardSkeleton key={i} />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { BlogCardSkeleton, CategoryFilterSkeleton, LoadingSkeleton };