import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { mockNews } from '../../data/newsData';
import ConsultationSection from "../../components/ConsultationSection.jsx";
import ServicesSection from "../../components/ServicesSection.jsx";
import HomeClientsPartnersSection from "../../components/home/HomeClientsPartnersSection.jsx";

const CustomDropdown = ({ label, value, options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const activeOption = options.find((option) => option.value === value) || options[0];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative flex flex-col gap-2">
            <label className="text-sm text-slate-700">{label}</label>
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className={`flex w-full items-center justify-between rounded-full border px-4 py-3 text-sm text-slate-800 shadow-sm transition ${
                    isOpen
                        ? 'border-indigo-400 bg-white'
                        : 'border-slate-200 bg-white/85 hover:border-indigo-300'
                }`}
            >
                <span className="truncate">{activeOption?.label}</span>
                <span
                    className={`ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition ${
                        isOpen ? 'rotate-180 bg-indigo-50 text-indigo-600' : 'bg-slate-50'
                    }`}
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-3.5 w-3.5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                </span>
            </button>

            {isOpen && (
                <div className="absolute top-full z-30 mt-2 w-full rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/70">
                    <div className="max-h-64 space-y-2 overflow-y-auto">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                                className={`flex w-full items-center justify-between rounded-2xl border px-4 py-2.5 text-left text-sm transition ${
                                    option.value === value
                                        ? 'border-indigo-300 bg-indigo-50 text-indigo-700'
                                        : 'border-slate-100 text-slate-700 hover:border-indigo-200 hover:bg-slate-50'
                                }`}
                            >
                                <span>{option.label}</span>
                                {option.value === value && <span className="text-xs text-indigo-500">Dang chon</span>}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const NewsListPage = () => {
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [visible, setVisible] = useState(new Set());
    const articleRefs = useRef([]);

    const categories = useMemo(() => {
        const cats = new Set();
        mockNews.forEach((item) => item.categories?.forEach((category) => cats.add(category)));
        return ['all', ...cats];
    }, []);

    const sortedNews = useMemo(
        () =>
            [...mockNews].sort(
                (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime()
            ),
        []
    );
    const categoryOptions = useMemo(() => {
        return [
            { value: 'all', label: 'Tất cả danh mục' },
            ...categories
                .filter((category) => category !== 'all')
                .map((category) => ({ value: category, label: category })),
        ];
    }, [categories]);

    const filteredNews = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();

        return sortedNews.filter((item) => {
            const matchesCategory = categoryFilter === 'all' || item.categories?.includes(categoryFilter);
            const matchesSearch =
                !term ||
                item.title.toLowerCase().includes(term) ||
                item.description.toLowerCase().includes(term) ||
                item.categories?.some((category) => category.toLowerCase().includes(term)) ||
                item.tags?.some((tag) => tag.toLowerCase().includes(term));

            return matchesCategory && matchesSearch;
        });
    }, [categoryFilter, searchTerm, sortedNews]);

    const hasActiveFilters = categoryFilter !== 'all' || searchTerm.trim().length > 0;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setVisible((prev) => {
                    const next = new Set(prev);
                    let changed = false;

                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const idx = Number(entry.target.getAttribute('data-index'));
                            if (!Number.isNaN(idx) && !next.has(idx)) {
                                next.add(idx);
                                changed = true;
                            }
                        }
                    });

                    return changed ? next : prev;
                });
            },
            { threshold: 0.2 }
        );

        const nodes = articleRefs.current.filter(Boolean);
        nodes.forEach((node) => observer.observe(node));

        return () => {
            nodes.forEach((node) => observer.unobserve(node));
            observer.disconnect();
        };
    }, [filteredNews]);

    useEffect(() => {
        setVisible(new Set());
        articleRefs.current = [];
    }, [categoryFilter, searchTerm]);

    const clearFilters = () => {
        setCategoryFilter('all');
        setSearchTerm('');
    };

    const formatDate = (dateString) =>
        new Date(dateString).toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });

    const categoryClass = (category) => {
        const map = {
            Design: 'bg-pink-500/85 text-pink-50',
            Technology: 'bg-cyan-500/85 text-cyan-50',
            Development: 'bg-blue-500/85 text-blue-50',
            Marketing: 'bg-amber-500/85 text-amber-50',
            Business: 'bg-emerald-500/85 text-emerald-50',
            'UX/UI': 'bg-violet-500/85 text-violet-50',
            SEO: 'bg-emerald-500/85 text-emerald-50',
            Content: 'bg-fuchsia-500/85 text-fuchsia-50',
            Mobile: 'bg-sky-500/85 text-sky-50',
        };

        return map[category] ?? 'bg-indigo-500/85 text-indigo-50';
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50/50 py-10 text-slate-900 lg:py-14">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 pb-8">
                <section className="mb-10 rounded-3xl border border-indigo-100 bg-white/90 px-6 py-8 shadow-xl shadow-indigo-100/60 backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500">Nexntgency news</p>
                    <h1 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl lg:text-5xl">Tin tức & Kiến thức</h1>
                    <p className="mt-2 max-w-2xl text-slate-600">
                        Tổng hợp bài viết về công nghệ, AI, marketing và thiết kế web, được sắp xếp gọn gàng để dễ tìm và dễ đọc.
                    </p>
                </section>

                <section className="mb-10 grid gap-4 lg:grid-cols-[2fr_1fr_1fr]">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-slate-700">Tìm kiếm</label>
                        <input
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            placeholder="Tiêu đề, mô tả, tag..."
                            className="w-full rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20"
                        />
                    </div>

                    <CustomDropdown
                        label="Danh mục"
                        value={categoryFilter}
                        options={categoryOptions}
                        onChange={setCategoryFilter}
                    />

                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-slate-700">Kết quả</label>
                        <div className="flex min-h-[50px] items-center justify-between rounded-full border border-slate-200 bg-white/85 px-4 py-3 text-sm text-slate-800 shadow-sm">
                            <span className="truncate">{filteredNews.length} bài viết</span>
                            {hasActiveFilters ? (
                                <button
                                    type="button"
                                    onClick={clearFilters}
                                    className="ml-3 text-xs font-semibold text-indigo-600 transition hover:text-indigo-500"
                                >
                                    Xóa lọc
                                </button>
                            ) : (
                                <span className="ml-3 text-xs text-slate-400">Sẵn sàng</span>
                            )}
                        </div>
                    </div>
                </section>

                <section className="pb-12 lg:pb-16">
                    {filteredNews.length === 0 ? (
                        <div className="rounded-2xl border border-indigo-100 bg-white/80 p-8 pb-12 text-center text-slate-700 shadow-lg shadow-indigo-100/50">
                            <p className="text-lg font-semibold text-indigo-700">Khong tim thay bai viet phu hop.</p>
                            <p className="mt-2 text-sm text-slate-500">Thu doi tu khoa hoac xoa bo loc de xem them ket qua.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {filteredNews.map((newsItem, index) => (
                                <Link
                                    key={newsItem.id}
                                    to={`/news/${newsItem.slug}-${newsItem.id}`}
                                    state={{ news: newsItem }}
                                    className="block"
                                >
                                    <article
                                        ref={(el) => {
                                            articleRefs.current[index] = el;
                                        }}
                                        data-index={index}
                                        className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70 transition-all duration-500 ease-out ${
                                            visible.has(index) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                        } hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100/70`}
                                    >
                                        <div className="relative aspect-[16/9] overflow-hidden">
                                            <img
                                                src={newsItem.thumbnail}
                                                alt={newsItem.title}
                                                className="h-full w-full object-cover transition-all duration-500 hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                                            <div className="absolute left-2 top-2 flex flex-wrap gap-1">
                                                {(newsItem.categories ?? ['Tin tuc']).map((category) => (
                                                    <span
                                                        key={`${newsItem.id}-${category}`}
                                                        className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] ${categoryClass(category)}`}
                                                    >
                                                        {category}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="p-4 md:p-5">
                                            <div className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">
                                                <span>{formatDate(newsItem.date)}</span>
                                                <span className="text-indigo-500">{newsItem.tags?.slice(0, 2).join(' • ')}</span>
                                            </div>
                                            <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-snug text-slate-950 transition-colors duration-200 hover:text-indigo-600">
                                                {newsItem.title}
                                            </h3>
                                            <p className="mt-2 line-clamp-2 text-sm text-slate-600">{newsItem.description}</p>
                                            <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-indigo-600">
                                                <span className="animate-pulse">Xem thêm</span>
                                                <span className="text-indigo-500">→</span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    )}
                    
                </section>
            </div>
            <HomeClientsPartnersSection/>
            <ConsultationSection/>
            <ServicesSection/>
        </div>
    );
};

export default NewsListPage;
