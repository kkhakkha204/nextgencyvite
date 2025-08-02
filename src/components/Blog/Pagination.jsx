// src/components/Blog/Pagination.jsx
import React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

const Pagination = ({
                        currentPage,
                        totalPages,
                        onPageChange,
                        className = ''
                    }) => {
    if (totalPages <= 1) return null;

    const getVisiblePages = () => {
        const pages = [];
        const showEllipsis = totalPages > 7;

        if (!showEllipsis) {
            // Hiển thị tất cả pages nếu <= 7 pages
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Logic cho ellipsis
            if (currentPage <= 4) {
                // Đầu: 1,2,3,4,5,...,last
                pages.push(1, 2, 3, 4, 5);
                if (totalPages > 6) {
                    pages.push('ellipsis');
                    pages.push(totalPages);
                }
            } else if (currentPage >= totalPages - 3) {
                // Cuối: 1,...,last-4,last-3,last-2,last-1,last
                pages.push(1);
                if (totalPages > 6) {
                    pages.push('ellipsis');
                }
                for (let i = totalPages - 4; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                // Giữa: 1,...,current-1,current,current+1,...,last
                pages.push(1, 'ellipsis');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push('ellipsis', totalPages);
            }
        }

        return pages;
    };

    const visiblePages = getVisiblePages();

    return (
        <nav className={`flex items-center justify-center space-x-2 ${className}`} aria-label="Pagination">
            {/* Previous button */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:text-[#1a4498] hover:bg-gray-50'
                }`}
            >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Trước</span>
            </button>

            {/* Page numbers */}
            <div className="flex items-center space-x-1">
                {visiblePages.map((page, index) => {
                    if (page === 'ellipsis') {
                        return (
                            <div key={`ellipsis-${index}`} className="px-3 py-2">
                                <MoreHorizontal className="w-4 h-4 text-gray-400" />
                            </div>
                        );
                    }

                    const isCurrentPage = page === currentPage;

                    return (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-300 ${
                                isCurrentPage
                                    ? 'bg-[#1a4498] text-white shadow-lg shadow-[#1a4498]/25 transform scale-105'
                                    : 'text-gray-700 hover:text-[#1a4498] hover:bg-gray-50 border border-gray-200 hover:border-[#1a4498]/30'
                            }`}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>

            {/* Next button */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:text-[#1a4498] hover:bg-gray-50'
                }`}
            >
                <span className="hidden sm:inline">Tiếp</span>
                <ChevronRight className="w-4 h-4" />
            </button>
        </nav>
    );
};

export default Pagination;