// src/components/Blog/CategoryFilter.jsx - Redesigned với palette màu mới
import React from 'react';
import { Filter } from 'lucide-react';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
            <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-[#1a4498] rounded-lg flex items-center justify-center">
                    <Filter className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Danh mục</h3>
            </div>

            <div className="space-y-2">
                <button
                    onClick={() => onCategoryChange(null)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        !selectedCategory
                            ? 'bg-[#1a4498] text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                >
                    Tất cả bài viết
                </button>

                {categories?.map((category) => (
                    <button
                        key={category._id}
                        onClick={() => onCategoryChange(category._id)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                            selectedCategory === category._id
                                ? 'text-white shadow-md transform scale-[1.02]'
                                : 'text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                        }`}
                        style={{
                            backgroundColor: selectedCategory === category._id
                                ? (category.color?.hex || '#c08dfe')
                                : undefined
                        }}
                    >
                        <span className="relative z-10">{category.title}</span>
                        {selectedCategory === category._id && (
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    background: `linear-gradient(45deg, ${category.color?.hex || '#c08dfe'}, transparent)`
                                }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Stats */}
            <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex justify-between">
                        <span>Tổng bài viết:</span>
                        <span className="font-medium">
              {categories?.reduce((total, cat) => total + (cat.postCount || 0), 0) || 0}
            </span>
                    </div>
                    <div className="flex justify-between">
                        <span>Danh mục:</span>
                        <span className="font-medium">{categories?.length || 0}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryFilter;