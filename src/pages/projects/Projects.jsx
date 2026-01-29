import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjectCategories, getProjectFilters, projectsData } from '../../data/projectsData';
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
            <label className="text-sm text-white/70">{label}</label>
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className={`flex w-full items-center justify-between rounded-full border px-4 py-3 text-sm text-white transition ${
                    isOpen
                        ? 'border-purple-400 bg-white/10'
                        : 'border-white/10 bg-white/5 hover:border-purple-400/60'
                }`}
            >
                <span className="truncate">{activeOption?.label}</span>
                <span
                    className={`ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 transition ${
                        isOpen ? 'rotate-180 bg-white/10' : 'bg-white/5'
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
                <div className="absolute top-full z-30 mt-2 w-full rounded-3xl border border-white/10 bg-black/95 p-2 shadow-xl shadow-black/40">
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
                                        ? 'border-purple-400 bg-purple-500/15 text-white'
                                        : 'border-white/10 text-white/80 hover:border-purple-400/60 hover:bg-white/5'
                                }`}
                            >
                                <span>{option.label}</span>
                                {option.value === value && (
                                    <span className="text-xs text-purple-300">Đang chọn</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const Projects = () => {
    const { categories, technologies } = getProjectFilters();
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('all');
    const [technology, setTechnology] = useState('all');

    const getProjectDateValue = (value) => {
        if (!value || typeof value !== 'string') {
            return 0;
        }

        const [monthText, yearText] = value.split('/');
        const month = Number(monthText);
        const year = Number(yearText);

        if (!Number.isFinite(month) || !Number.isFinite(year)) {
            return 0;
        }

        return year * 12 + month;
    };

    const categoryOptions = useMemo(() => {
        return [
            { value: 'all', label: 'Tất cả danh mục' },
            ...categories.map((item) => ({ value: item, label: item }))
        ];
    }, [categories]);

    const technologyOptions = useMemo(() => {
        return [
            { value: 'all', label: 'Tất cả công nghệ' },
            ...technologies.map((item) => ({ value: item, label: item }))
        ];
    }, [technologies]);

    const filteredProjects = useMemo(() => {
        return projectsData
            .filter((project) => {
            const matchesSearch =
                project.name.toLowerCase().includes(search.toLowerCase()) ||
                project.summary.toLowerCase().includes(search.toLowerCase()) ||
                project.partner.toLowerCase().includes(search.toLowerCase());

            const projectCategories = getProjectCategories(project);
            const matchesCategory =
                category === 'all' || projectCategories.includes(category);
            const matchesTechnology =
                technology === 'all' || project.technologies.includes(technology);

            return matchesSearch && matchesCategory && matchesTechnology;
        })
            .sort((a, b) => getProjectDateValue(b.date) - getProjectDateValue(a.date));
    }, [search, category, technology]);

    const categoryStats = useMemo(() => {
        return categories.map((item) => ({
            name: item,
            count: projectsData.filter((project) =>
                getProjectCategories(project).includes(item)
            ).length
        }));
    }, [categories]);

    return (
        <section className="bg-black text-white">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <p className="text-sm uppercase tracking-[0.4em] text-purple-300">
                    projects
                    </p>
                    <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                        DỰ ÁN TIÊU BIỂU
                    </h1>
                </div>

                <div className="mb-6 flex gap-3 overflow-x-auto pb-2">
                    {categoryStats.map((stat) => (
                        <button
                            key={stat.name}
                            type="button"
                            onClick={() => setCategory(stat.name)}
                            className={`flex min-w-[180px] items-start justify-between flex-col rounded-2xl border px-4 py-3 text-left transition ${
                                category === stat.name
                                    ? 'border-purple-400 bg-purple-500/10'
                                    : 'border-white/10 bg-white/5 hover:border-purple-400/60'
                            }`}
                        >
                            <div className="text-xm font-semibold text-white mb-2">{stat.count} + Dự án</div>
                            <div>
                                <div className="text-sm font-semibold text-white">
                                    {stat.name}
                                </div>
                            </div>

                        </button>
                    ))}
                </div>

                <div className="mb-10 grid gap-4 lg:grid-cols-[2fr_1fr_1fr]">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-white/70">Tìm kiếm</label>
                        <input
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Tên dự án, thương hiệu, mô tả..."
                            className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400"
                        />
                    </div>
                    <CustomDropdown
                        label="Danh mục"
                        value={category}
                        options={categoryOptions}
                        onChange={setCategory}
                    />
                    <CustomDropdown
                        label="Công nghệ"
                        value={technology}
                        options={technologyOptions}
                        onChange={setTechnology}
                    />
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {filteredProjects.map((project) => {
                        const projectCategories = getProjectCategories(project);
                        const primaryCategory = projectCategories[0] || 'Khác';
                        const remainingCategoryCount = Math.max(projectCategories.length - 1, 0);
                        const categoryLabel = remainingCategoryCount > 0
                            ? `${primaryCategory} +${remainingCategoryCount}`
                            : primaryCategory;

                        return (
                        <Link
                            key={project.id}
                            to={`/projects/${project.id}`}
                            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-purple-400"
                        >
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={project.slides[0]}
                                    alt={project.name}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
                                    {categoryLabel}
                                </span>
                            </div>
                            <div className="flex flex-1 flex-col gap-4 p-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                                    <p className="mt-2 text-sm text-white/70">{project.summary}</p>
                                </div>
                                <div className="text-xs text-white/60">
                                    <span className="font-medium text-white/80">Đối tác:</span>{' '}
                                    {project.partner}
                                </div>
                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                        );
                    })}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-sm text-white/70">
                        Không tìm thấy dự án phù hợp. Hãy thử thay đổi bộ lọc hoặc từ khóa.
                    </div>
                )}
            </div>
            <HomeClientsPartnersSection/>
            <ConsultationSection/>
            <ServicesSection/>
        </section>
    );
};

export default Projects;
