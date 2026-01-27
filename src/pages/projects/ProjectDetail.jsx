import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProjectById, getProjectCategories } from '../../data/projectsData';
import ConsultationSection from "../../components/ConsultationSection.jsx";
import ServicesSection from "../../components/ServicesSection.jsx";
import HomeClientsPartnersSection from "../../components/home/HomeClientsPartnersSection.jsx";

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = useMemo(() => getProjectById(slug), [slug]);
    const [activeSlide, setActiveSlide] = useState(0);

    if (!project) {
        return (
            <section className="bg-black text-white">
                <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-semibold">Không tìm thấy dự án</h1>
                    <p className="mt-4 text-white/70">
                        Dự án bạn tìm không tồn tại hoặc đã được cập nhật.
                    </p>
                    <Link
                        to="/projects/all"
                        className="mt-8 inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:border-purple-400"
                    >
                        Quay lại danh sách dự án
                    </Link>
                </div>
            </section>
        );
    }

    const slides = project.slides || [];
    const activeImage = slides[activeSlide] || slides[0];

    const handleNext = () => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="bg-black text-white">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <Link
                        to="/projects/all"
                        className="text-sm text-white/60 transition hover:text-purple-300"
                    >
                        ← Quay lại Projects
                    </Link>
                    <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">{project.name}</h1>
                </div>

                <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
                    <div>
                        <div className="relative overflow-hidden rounded-3xl border border-white/10">
                            <img
                                src={activeImage}
                                alt={project.name}
                                className="h-[380px] w-full object-cover"
                            />
                            {slides.length > 1 && (
                                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                                    <button
                                        onClick={handlePrev}
                                        className="rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs text-white"
                                    >
                                        Trước
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs text-white"
                                    >
                                        Sau
                                    </button>
                                </div>
                            )}
                        </div>

                        {slides.length > 1 && (
                            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                                {slides.map((slide, index) => (
                                    <button
                                        key={slide}
                                        onClick={() => setActiveSlide(index)}
                                        className={`h-16 w-24 flex-shrink-0 overflow-hidden rounded-2xl border transition ${
                                            index === activeSlide
                                                ? 'border-purple-400'
                                                : 'border-white/10'
                                        }`}
                                    >
                                        <img
                                            src={slide}
                                            alt={`${project.name} ${index + 1}`}
                                            className="h-full w-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}

                        <div className="mb-10">
                            <p className="mt-4 max-w-3xl text-base text-white/70">
                                {project.description}
                            </p>
                            {project.details?.length > 0 && (
                                <div className="mt-6 space-y-4">
                                    {project.details.map((detail) => (
                                        <p key={detail} className="max-w-4xl text-sm text-white/70">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <aside className="flex flex-col gap-6">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                            <div className="text-sm text-white/60">Ngày thực hiện</div>
                            <div className="mt-1 text-lg font-semibold text-white">{project.date}</div>
                            <div className="mt-4 text-sm text-white/60">Danh mục</div>
                            <div className="mt-1 text-base font-semibold text-white">
                                {(() => {
                                    const projectCategories = getProjectCategories(project);
                                    return projectCategories.length > 0
                                        ? projectCategories.join(', ')
                                        : 'Khác';
                                })()}
                            </div>
                            <div className="mt-4 text-sm text-white/60">Đối tác / Thương hiệu</div>
                            <div className="mt-1 text-base font-semibold text-white">
                                {project.partner}
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                            <div className="text-sm text-white/60">Công nghệ sử dụng</div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                            <div className="text-sm text-white/60">Kết quả & số liệu</div>
                            <div className="mt-4 grid gap-4">
                                {project.metrics.map((metric) => (
                                    <div key={metric.label} className="flex items-center justify-between">
                                        <span className="text-sm text-white/70">{metric.label}</span>
                                        <span className="text-base font-semibold text-white">
                                            {metric.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {project.cta?.url && (
                            <a
                                href={project.cta.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-600"
                            >
                                {project.cta.label || 'Trải nghiệm'}
                            </a>
                        )}
                    </aside>
                </div>

                {project.videoUrl && (
                    <div className="mt-12">
                        <h2 className="text-xl font-semibold">Video giới thiệu</h2>
                        <div className="mt-4 overflow-hidden rounded-3xl border border-white/10">
                            <iframe
                                title={`video-${project.id}`}
                                src={project.videoUrl}
                                className="h-full w-full aspect-video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}
            </div>
            <HomeClientsPartnersSection/>
            <ConsultationSection/>
            <ServicesSection/>
        </section>
    );
};

export default ProjectDetail;
