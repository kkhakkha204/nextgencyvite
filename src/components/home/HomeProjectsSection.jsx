import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
    ArrowUpRight,
    CalendarDays,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    FolderOpen,
    Layers3,
    X
} from 'lucide-react';
import { Link, useI18n } from '../../i18n';
import { getProjectCategories } from '../../data/projectsData';
import { useProjects } from '../../hooks/useProjects';
import DriftWall from '../reactbits/DriftWall';

// Phai khop voi thoi luong animation panel-out trong tailwind.config.js.
const CLOSE_DURATION = 200;

const WALL_GAP = 18;

// He so phong to that su cua mat phang 3D (scale 1.42 + translateZ(-110) voi
// perspective 1250). Lay thap hon thuc te de luon du cot, khong ho hai ben.
const WALL_MAGNIFICATION = 1.2;

const getWallBreakpoint = (viewportWidth) => {
    if (viewportWidth < 640) {
        return { tileWidth: 192, tileHeight: 108, turn: -2, tilt: 4, paddingX: 32 };
    }
    if (viewportWidth < 1024) {
        return { tileWidth: 224, tileHeight: 126, turn: -3, tilt: 6, paddingX: 48 };
    }
    return { tileWidth: 240, tileHeight: 135, turn: -4, tilt: 7, paddingX: 64 };
};

const getWallConfig = () => {
    if (typeof window === 'undefined') {
        return { columns: 5, tileWidth: 240, tileHeight: 135, turn: -4, tilt: 7 };
    }

    const viewportWidth = window.innerWidth;
    const { paddingX, ...breakpoint } = getWallBreakpoint(viewportWidth);
    const innerWidth = Math.min(viewportWidth, 1440) - paddingX;
    const columns = Math.min(
        8,
        Math.max(2, Math.ceil(innerWidth / WALL_MAGNIFICATION / (breakpoint.tileWidth + WALL_GAP)))
    );

    return { columns, ...breakpoint };
};

const ProjectPreviewModal = ({ project, activeSlide, onSlideChange, onClose }) => {
    const { t } = useI18n();
    const closeButtonRef = useRef(null);
    const dialogRef = useRef(null);

    // Giu lai du an dang xem them mot nhip sau khi dong de chay het animation.
    const [rendered, setRendered] = useState(project);

    // Cap nhat ngay trong luc render (khong doi useEffect) de modal kip ve o
    // frame dau tien sau khi bam, thay vi tre mat mot frame.
    if (project && project !== rendered) setRendered(project);

    const closing = !project && Boolean(rendered);

    useEffect(() => {
        if (project) return undefined;
        const timer = window.setTimeout(() => setRendered(null), CLOSE_DURATION);
        return () => window.clearTimeout(timer);
    }, [project]);

    const slides = useMemo(() => rendered?.slides?.filter(Boolean) ?? [], [rendered]);
    const categories = useMemo(() => (rendered ? getProjectCategories(rendered) : []), [rendered]);
    const currentImage = slides[activeSlide] ?? slides[0];

    // Nap san toan bo anh ngay khi mo, de chuyen anh khong phai cho tai.
    useEffect(() => {
        if (!project || slides.length < 2) return;
        slides.forEach((slide) => {
            const image = new Image();
            image.decoding = 'async';
            image.src = slide;
        });
    }, [project, slides]);

    useEffect(() => {
        if (!rendered) return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus({ preventScroll: true });

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [rendered]);

    useEffect(() => {
        if (!project) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose();
            if (event.key === 'Tab') {
                const focusableElements = Array.from(dialogRef.current?.querySelectorAll(
                    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
                ) ?? []).filter((element) => element.getClientRects().length > 0);
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (!firstElement || !lastElement) {
                    event.preventDefault();
                } else if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                } else if (!event.shiftKey && document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
            if (event.key === 'ArrowLeft' && slides.length > 1) {
                onSlideChange((current) => (current - 1 + slides.length) % slides.length);
            }
            if (event.key === 'ArrowRight' && slides.length > 1) {
                onSlideChange((current) => (current + 1) % slides.length);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [project, slides.length, onClose, onSlideChange]);

    if (!rendered || typeof document === 'undefined') return null;

    const showPrevious = () => onSlideChange((activeSlide - 1 + slides.length) % slides.length);
    const showNext = () => onSlideChange((activeSlide + 1) % slides.length);

    return createPortal(
        <div className={`fixed inset-0 z-[1000] ${closing ? 'pointer-events-none' : ''}`}>
            <div
                className={`absolute inset-0 bg-[#05030b]/85 backdrop-blur-[6px] ${
                    closing ? 'animate-overlay-out' : 'animate-overlay-in'
                }`}
                aria-hidden="true"
            />
            <div
                className="relative flex h-full items-center justify-center p-3 sm:p-6"
                onMouseDown={(event) => {
                    if (event.target === event.currentTarget) onClose();
                }}
                role="presentation"
            >
                <div
                    ref={dialogRef}
                    className={`relative grid h-[calc(100dvh-24px)] w-full max-w-6xl grid-rows-[auto_minmax(0,1fr)] overflow-hidden rounded-[26px] border border-white/[0.14] bg-[#0a0711] shadow-[0_40px_120px_-30px_rgba(88,28,235,0.55)] sm:h-[calc(100dvh-48px)] lg:h-[min(760px,calc(100dvh-48px))] lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)] lg:grid-rows-1 ${
                        closing ? 'animate-panel-out' : 'animate-panel-in'
                    }`}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="project-preview-title"
                >
                    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

                    <button
                        ref={closeButtonRef}
                        type="button"
                        onClick={onClose}
                        className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white/80 backdrop-blur transition hover:scale-105 hover:border-purple-300/70 hover:bg-purple-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 sm:right-5 sm:top-5"
                        aria-label={t('home.projectsShowcase.close')}
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div className="relative flex min-h-0 min-w-0 flex-col border-b border-white/10 bg-[#050308] lg:border-b-0 lg:border-r">
                        <div className="group relative aspect-video min-h-0 overflow-hidden lg:aspect-auto lg:flex-1">
                            {currentImage ? (
                                <>
                                    <img
                                        key={`ambient-${currentImage}`}
                                        src={currentImage}
                                        alt=""
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 h-full w-full scale-[1.18] object-cover opacity-30 blur-3xl saturate-150"
                                    />
                                    <img
                                        key={currentImage}
                                        src={currentImage}
                                        alt={`${rendered.name} ${activeSlide + 1}`}
                                        fetchPriority="high"
                                        decoding="async"
                                        draggable={false}
                                        className="animate-slide-swap relative h-full w-full object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.55)]"
                                    />
                                </>
                            ) : (
                                <div className="flex h-full items-center justify-center text-sm text-white/50">
                                    {t('home.projectsShowcase.noImage')}
                                </div>
                            )}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25" />

                            {slides.length > 1 && (
                                <>
                                    <button
                                        type="button"
                                        onClick={showPrevious}
                                        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur transition duration-200 hover:border-purple-300 hover:bg-purple-500 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 group-hover:opacity-100 max-lg:opacity-100 sm:left-5"
                                        aria-label={t('home.projectsShowcase.previousImage')}
                                    >
                                        <ChevronLeft className="h-5 w-5" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={showNext}
                                        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur transition duration-200 hover:border-purple-300 hover:bg-purple-500 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 group-hover:opacity-100 max-lg:opacity-100 sm:right-5"
                                        aria-label={t('home.projectsShowcase.nextImage')}
                                    >
                                        <ChevronRight className="h-5 w-5" />
                                    </button>
                                </>
                            )}

                            <div className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[11px] font-medium tabular-nums text-white/80 backdrop-blur">
                                {activeSlide + 1} / {Math.max(slides.length, 1)}
                            </div>
                        </div>

                        {slides.length > 1 && (
                            <div className="flex gap-2 overflow-x-auto border-t border-white/10 bg-black/40 p-3 [scrollbar-color:rgba(255,255,255,0.18)_transparent] [scrollbar-width:thin] sm:p-4">
                                {slides.map((slide, index) => (
                                    <button
                                        key={`${slide}-${index}`}
                                        type="button"
                                        onClick={() => onSlideChange(index)}
                                        className={`aspect-video w-24 flex-none overflow-hidden rounded-xl border transition duration-200 ${
                                            index === activeSlide
                                                ? 'border-purple-400/80 shadow-[0_0_0_1px_rgba(192,132,252,0.5),0_8px_24px_-8px_rgba(147,51,234,0.8)]'
                                                : 'border-white/10 opacity-50 hover:-translate-y-0.5 hover:border-white/25 hover:opacity-100'
                                        }`}
                                        aria-label={`${t('home.projectsShowcase.image')} ${index + 1}`}
                                        aria-current={index === activeSlide ? 'true' : undefined}
                                    >
                                        <img src={slide} alt="" loading="lazy" className="h-full w-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex min-h-0 min-w-0 flex-col bg-gradient-to-b from-purple-500/[0.07] via-transparent to-transparent">
                        <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-6 pt-6 [scrollbar-color:rgba(255,255,255,0.18)_transparent] [scrollbar-width:thin] sm:px-7 sm:pt-8 lg:px-9">
                            <div className="animate-rise-in pr-12" style={{ animationDelay: '60ms' }}>
                                <h3
                                    id="project-preview-title"
                                    className="mt-4 text-2xl font-bold leading-tight text-white sm:text-[28px]"
                                >
                                    {rendered.name}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-white/60">{rendered.summary}</p>
                            </div>

                            <div
                                className="animate-rise-in mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
                                style={{ animationDelay: '120ms' }}
                            >
                                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition hover:border-purple-400/25 hover:bg-white/[0.05]">
                                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/40">
                                        <CalendarDays className="h-4 w-4 text-purple-300" />
                                        {t('home.projectsShowcase.date')}
                                    </div>
                                    <p className="mt-2 text-sm font-semibold text-white">{rendered.date}</p>
                                </div>
                                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition hover:border-purple-400/25 hover:bg-white/[0.05]">
                                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/40">
                                        <FolderOpen className="h-4 w-4 text-purple-300" />
                                        {t('home.projectsShowcase.partner')}
                                    </div>
                                    <p className="mt-2 text-sm font-semibold text-white">{rendered.partner}</p>
                                </div>
                            </div>

                            {categories.length > 0 && (
                                <div className="animate-rise-in mt-6" style={{ animationDelay: '160ms' }}>
                                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                                        {t('home.projectsShowcase.category')}
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {categories.map((category) => (
                                            <span
                                                key={category}
                                                className="rounded-full border border-purple-400/20 bg-purple-400/[0.08] px-3 py-1.5 text-xs text-purple-100/90"
                                            >
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {rendered.technologies?.length > 0 && (
                                <div className="animate-rise-in mt-6" style={{ animationDelay: '200ms' }}>
                                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/40">
                                        <Layers3 className="h-4 w-4 text-purple-300" />
                                        {t('home.projectsShowcase.technologies')}
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {rendered.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs text-white/70"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {rendered.metrics?.length > 0 && (
                                <div
                                    className="animate-rise-in mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3"
                                    style={{ animationDelay: '240ms' }}
                                >
                                    {rendered.metrics.slice(0, 3).map((metric) => (
                                        <div
                                            key={metric.label}
                                            className="min-w-0 rounded-2xl border border-purple-400/15 bg-gradient-to-b from-purple-400/[0.12] to-purple-400/[0.03] p-3"
                                        >
                                            <p className="text-lg font-bold text-white">{metric.value}</p>
                                            <p className="mt-1 break-words text-[10px] leading-4 text-white/45">{metric.label}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-3 border-t border-white/10 bg-[#0a0711]/95 px-5 py-4 backdrop-blur sm:flex-row sm:px-7 lg:px-9">
                            <Link
                                to={`/projects/${rendered.id}`}
                                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-purple-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                            >
                                {t('home.projectsShowcase.viewDetail')}
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                            {rendered.cta?.url && (
                                <a
                                    href={rendered.cta.url}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-purple-300 hover:bg-purple-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                                >
                                    {t('home.projectsShowcase.viewProject')}
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

const HomeProjectsSection = () => {
    const { t } = useI18n();
    const projects = useProjects();
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [wallConfig, setWallConfig] = useState(getWallConfig);
    const triggerRef = useRef(null);

    const wallItems = useMemo(() => projects
        .filter((project) => project.slides?.[0])
        .map((project) => ({
            image: project.slides[0],
            title: project.name,
            project
        })), [projects]);

    useEffect(() => {
        const updateWallConfig = () => setWallConfig(getWallConfig());
        window.addEventListener('resize', updateWallConfig);
        return () => window.removeEventListener('resize', updateWallConfig);
    }, []);

    const closePreview = useCallback(() => {
        setSelectedProject(null);
        window.requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }));
    }, []);

    const openPreview = useCallback((item, event) => {
        triggerRef.current = event?.currentTarget ?? null;
        setActiveSlide(0);
        setSelectedProject(item.project);
    }, []);

    return (
        <section className="relative overflow-hidden bg-[#f6f3f8] py-16 sm:py-20 lg:py-24">
            <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-300/30 blur-[130px]" />
            <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-3xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-purple-700">
                            {t('home.projectsShowcase.badge')}
                        </p>
                        <h2 className="mt-3 text-[30px] font-bold uppercase leading-tight text-[#151119] sm:text-[40px] lg:text-[58px]">
                            {t('home.projectsShowcase.title')}
                        </h2>
                        <p className="mt-4 max-w-2xl text-sm leading-6 text-black/60 sm:text-base">
                            {t('home.projectsShowcase.description')}
                        </p>
                    </div>
                    <Link
                        to="/projects/all"
                        className="inline-flex w-fit items-center gap-2 rounded-full border border-black/20 px-5 py-3 text-sm font-semibold text-[#151119] transition hover:border-purple-500 hover:bg-purple-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                    >
                        {t('home.projectsShowcase.viewAll')}
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="relative mt-10 h-[520px] overflow-hidden rounded-xl border border-white/10 bg-[#07050c] shadow-2xl shadow-purple-950/30 sm:h-[610px] lg:h-[680px]">
                    <DriftWall
                        items={wallItems}
                        columns={wallConfig.columns}
                        tileWidth={wallConfig.tileWidth}
                        tileHeight={wallConfig.tileHeight}
                        gap={WALL_GAP}
                        radius={9}
                        tilt={wallConfig.tilt}
                        turn={wallConfig.turn}
                        perspective={1250}
                        depth={110}
                        scale={1.42}
                        speed={33}
                        direction="up"
                        variance={0.38}
                        parallax={0.28}
                        pauseOnHover={false}
                        paused={Boolean(selectedProject)}
                        lift={58}
                        fade={0}
                        dim={0.68}
                        overlayColor="#5b21b6"
                        overlayOpacity={0.06}
                        onItemClick={openPreview}
                        ariaLabel={t('home.projectsShowcase.wallLabel')}
                    />
                </div>
            </div>

            <ProjectPreviewModal
                project={selectedProject}
                activeSlide={activeSlide}
                onSlideChange={setActiveSlide}
                onClose={closePreview}
            />
        </section>
    );
};

export default HomeProjectsSection;
