import React, { useEffect, useMemo, useState } from "react";
import { useI18n } from '../../i18n';
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    Clock3,
    Copy,
    Share2,
} from "lucide-react";
import { mockNews } from "../../data/newsData";
import SEOManager from "../../components/SEO/SEOManager.jsx";
import { generateArticleSchema } from "../../components/SEO/schemas.js";

const slugify = (text = "") =>
    text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

const extractText = (children) =>
    React.Children.toArray(children)
        .map((child) => {
            if (typeof child === "string" || typeof child === "number") {
                return String(child);
            }

            if (React.isValidElement(child)) {
                return extractText(child.props.children);
            }

            return "";
        })
        .join("");

const createHeadingMeta = (level, title, counters) => {
    if (level === 1) {
        counters.h1 += 1;
        counters.h2 = 0;
        counters.h3 = 0;

        return {
            id: slugify(`${counters.h1}-${title}`),
            number: `${counters.h1}`,
        };
    }

    if (level === 2) {
        if (counters.h1 === 0) counters.h1 = 1;
        counters.h2 += 1;
        counters.h3 = 0;

        return {
            id: slugify(`${counters.h1}-${counters.h2}-${title}`),
            number: `${counters.h1}.${counters.h2}`,
        };
    }

    if (counters.h1 === 0) counters.h1 = 1;
    if (counters.h2 === 0) counters.h2 = 1;
    counters.h3 += 1;

    return {
        id: slugify(`${counters.h1}-${counters.h2}-${counters.h3}-${title}`),
        number: `${counters.h1}.${counters.h2}.${counters.h3}`,
    };
};

const generateTOC = (markdown = "") => {
    const counters = { h1: 0, h2: 0, h3: 0 };

    return markdown
        .split("\n")
        .map((line) => {
            const match = line.match(/^(#{1,2})\s+(.+)/);

            if (!match) {
                return null;
            }

            const level = match[1].length;
            const title = match[2].trim();
            const meta = createHeadingMeta(level, title, counters);

            return {
                title,
                level,
                ...meta,
            };
        })
        .filter(Boolean);
};

const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

const estimateReadingTime = (markdown = "") => {
    const plainText = markdown
        .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
        .replace(/\[[^\]]*]\([^)]*\)/g, " ")
        .replace(/[#>*_`-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    if (!plainText) {
        return 1;
    }

    const wordCount = plainText.split(" ").filter(Boolean).length;
    return Math.max(1, Math.ceil(wordCount / 220));
};

const categoryClass = (category) => {
    const map = {
        Design: "bg-pink-500/85 text-pink-50",
        Technology: "bg-cyan-500/85 text-cyan-50",
        Development: "bg-blue-500/85 text-blue-50",
        Marketing: "bg-amber-500/85 text-amber-50",
        Business: "bg-emerald-500/85 text-emerald-50",
        "UX/UI": "bg-violet-500/85 text-violet-50",
        SEO: "bg-emerald-500/85 text-emerald-50",
        Content: "bg-fuchsia-500/85 text-fuchsia-50",
        Mobile: "bg-sky-500/85 text-sky-50",
    };

    return map[category] ?? "bg-indigo-500/85 text-indigo-50";
};

const shuffleWithSeed = (items, seed = 1) => {
    const list = [...items];
    let currentSeed = seed * 9301 + 49297;

    for (let index = list.length - 1; index > 0; index -= 1) {
        currentSeed = (currentSeed * 9301 + 49297) % 233280;
        const random = currentSeed / 233280;
        const swapIndex = Math.floor(random * (index + 1));
        [list[index], list[swapIndex]] = [list[swapIndex], list[index]];
    }

    return list;
};

const NewsCard = ({ item }) => {
    const { t } = useI18n();
    return (
    <Link to={`/news/${item.slug}-${item.id}`} state={{ news: item }} className="block">
        <article className="overflow-hidden rounded-2xl border border-slate-600/40 bg-gradient-to-br from-slate-900/95 via-slate-900/70 to-slate-800/80 shadow-2xl shadow-black/25 transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400/60 hover:shadow-2xl">
            <div className="relative aspect-[16/9] overflow-hidden">
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-full w-full object-cover transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute left-2 top-2 flex flex-wrap gap-1">
                    {(item.categories ?? [t('news.detail.breadcrumb')]).map((category) => (
                        <span
                            key={`${item.id}-${category}`}
                            className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] ${categoryClass(category)}`}
                        >
                            {category}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-4 md:p-5">
                <div className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-300">
                    <span className="text-slate-200">{formatDate(item.date)}</span>
                    <span className="text-indigo-300">{item.tags?.slice(0, 2).join(" • ")}</span>
                </div>
                <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-snug text-slate-100 transition-colors duration-200 hover:text-indigo-300">
                    {item.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-300">{item.description}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-indigo-300">
                    <span className="animate-pulse">{t('news.detail.loadMore')}</span>
                    <span className="text-indigo-300">→</span>
                </div>
            </div>
        </article>
    </Link>
    );
};

const NavigationCard = ({ direction, item }) => {
    const { t } = useI18n();
    const isPrevious = direction === "previous";
    const Icon = isPrevious ? ArrowLeft : ArrowRight;

    if (!item) {
        return (
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5 opacity-60">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {isPrevious ? t('news.detail.previous') : t('news.detail.next')}
                </p>
                <p className="mt-3 text-sm text-slate-500">{t('news.detail.empty')}</p>
            </div>
        );
    }

    return (
        <Link
            to={`/news/${item.slug}-${item.id}`}
            state={{ news: item }}
            className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-[0_28px_70px_rgba(99,102,241,0.14)]"
        >
            <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {isPrevious ? t('news.detail.previous') : t('news.detail.next')}
                </p>
                <Icon className="h-4 w-4 text-indigo-500 transition-transform duration-300 group-hover:translate-x-0.5" />
            </div>
            <h3 className="mt-3 line-clamp-2 text-base font-semibold leading-7 text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
                {item.title}
            </h3>
            <p className="mt-2 text-sm text-slate-500">{formatDate(item.date)}</p>
        </Link>
    );
};

const NewsDetailPage = () => {
    const { t } = useI18n();
    const { slug } = useParams();
    const [activeHeadingId, setActiveHeadingId] = useState("");
    const [copied, setCopied] = useState(false);

    const sortedNews = useMemo(
        () =>
            [...mockNews].sort(
                (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime()
            ),
        []
    );

    const news = useMemo(() => {
        const id = Number(slug?.split("-").pop());
        return sortedNews.find((item) => item.id === id) ?? null;
    }, [slug, sortedNews]);

    const toc = useMemo(() => generateTOC(news?.context ?? ""), [news]);
    const readingTime = useMemo(() => estimateReadingTime(news?.context ?? ""), [news]);

    const currentIndex = useMemo(
        () => sortedNews.findIndex((item) => item.id === news?.id),
        [news?.id, sortedNews]
    );

    const previousArticle = currentIndex > 0 ? sortedNews[currentIndex - 1] : null;
    const nextArticle =
        currentIndex >= 0 && currentIndex < sortedNews.length - 1
            ? sortedNews[currentIndex + 1]
            : null;

    const relatedArticles = useMemo(() => {
        if (!news) {
            return [];
        }

        return shuffleWithSeed(
            sortedNews.filter((item) => item.id !== news.id),
            news.id
        ).slice(0, 3);
    }, [news, sortedNews]);

    useEffect(() => {
        if (!toc.length) {
            setActiveHeadingId("");
            return;
        }

        const updateActiveHeading = () => {
            const offset = 150;
            let current = toc[0].id;

            toc.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element && element.getBoundingClientRect().top - offset <= 0) {
                    current = item.id;
                }
            });

            setActiveHeadingId(current);
        };

        updateActiveHeading();
        window.addEventListener("scroll", updateActiveHeading, { passive: true });

        return () => {
            window.removeEventListener("scroll", updateActiveHeading);
        };
    }, [toc]);

    useEffect(() => {
        if (!copied) {
            return undefined;
        }

        const timer = window.setTimeout(() => {
            setCopied(false);
        }, 2200);

        return () => {
            window.clearTimeout(timer);
        };
    }, [copied]);

    const scrollToHeading = (id) => {
        const section = document.getElementById(id);
        if (!section) {
            return;
        }

        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveHeadingId(id);
    };

    const handleCopyLink = async () => {
        if (!news) {
            return;
        }

        const url = new URL(`/news/${news.slug}-${news.id}`, window.location.origin).toString();

        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
        } catch {
            window.prompt(t('news.detail.copyLinkLabel'), url);
        }
    };

    const handleShare = async () => {
        if (!news) {
            return;
        }

        const url = new URL(`/news/${news.slug}-${news.id}`, window.location.origin).toString();

        if (navigator.share) {
            try {
                await navigator.share({
                    title: news.title,
                    text: news.description,
                    url,
                });
                return;
            } catch (error) {
                if (error?.name === "AbortError") {
                    return;
                }
            }
        }

        await handleCopyLink();
    };

    const fallbackHeadingCounters = { h1: 0, h2: 0, h3: 0 };
    let renderedHeadingIndex = 0;

    const renderHeading = (level, children, props) => {
        const title = extractText(children);
        let meta = toc[renderedHeadingIndex];

        if (meta && meta.level === level && meta.title === title) {
            renderedHeadingIndex += 1;
        } else {
            const matchedIndex = toc.findIndex(
                (item, index) => index >= renderedHeadingIndex && item.level === level && item.title === title
            );

            if (matchedIndex !== -1) {
                meta = toc[matchedIndex];
                renderedHeadingIndex = matchedIndex + 1;
            } else {
                meta = createHeadingMeta(level, title, fallbackHeadingCounters);
            }
        }

        const Tag = `h${level}`;
        const sizeClass =
            level === 1
                ? "text-3xl md:text-4xl"
                : level === 2
                ? "text-2xl md:text-[1.75rem]"
                : "text-xl md:text-2xl";

        return (
            <Tag
                id={meta.id}
                className={`scroll-mt-32 lg:scroll-mt-40 border-l-4 border-indigo-500 pl-4 font-bold leading-tight text-slate-950 ${sizeClass} ${
                    level === 1 ? "mt-12 mb-5" : "mt-10 mb-4"
                }`}
                {...props}
            >
                <span className="mr-2 text-indigo-500">{meta.number}.</span>
                {children}
            </Tag>
        );
    };

    const markdownComponents = {
        h1: ({ children, ...props }) => renderHeading(1, children, props),
        h2: ({ children, ...props }) => renderHeading(2, children, props),
        h3: ({ children, ...props }) => renderHeading(3, children, props),
        p: ({ ...props }) => (
            <p className="mt-4 text-[15px] leading-8 text-slate-700 md:text-[17px]" {...props} />
        ),
        ul: ({ ...props }) => (
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700" {...props} />
        ),
        ol: ({ ...props }) => (
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-700" {...props} />
        ),
        li: ({ ...props }) => <li className="leading-8" {...props} />,
        strong: ({ ...props }) => <strong className="font-semibold text-slate-950" {...props} />,
        blockquote: ({ ...props }) => (
            <blockquote
                className="mt-6 rounded-r-2xl border-l-4 border-indigo-400 bg-indigo-50 px-5 py-4 text-slate-700"
                {...props}
            />
        ),
        img: ({ ...props }) => (
            <img
                className="mt-6 w-full rounded-[1.5rem] border border-slate-200 object-cover shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
                loading="lazy"
                {...props}
            />
        ),
        a: ({ ...props }) => (
            <a
                className="font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-4"
                {...props}
            />
        ),
        code: ({ inline, children, ...props }) => {
            if (inline) {
                return (
                    <code
                        className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[0.95em] text-indigo-700"
                        {...props}
                    >
                        {children}
                    </code>
                );
            }

            return (
                <code
                    className="block overflow-x-auto rounded-[1.25rem] bg-slate-950 p-4 text-sm text-cyan-200"
                    {...props}
                >
                    {children}
                </code>
            );
        },
        pre: ({ ...props }) => <pre className="mt-6 overflow-x-auto" {...props} />,
    };

    if (!news) {
        return (
            <div className="min-h-[calc(100vh-220px)] bg-gradient-to-b from-slate-50 via-white to-indigo-50 py-16 text-slate-900">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-500">{t('news.detail.breadcrumb')}</p>
                        <h1 className="mt-4 text-3xl font-bold text-slate-950">{t('news.detail.notFoundTitle')}</h1>
                        <p className="mt-3 text-slate-600">
                            {t('news.detail.notFoundDescription')}
                        </p>
                        <Link
                            to="/news"
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            {t('news.detail.backToNews')}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[calc(100vh-220px)] bg-gradient-to-b from-slate-50 via-white to-indigo-50 py-10 text-slate-900 lg:py-16">
            <SEOManager
                title={`${news.title} | Nextgency`}
                description={news.description}
                image={news.thumbnail}
                ogUrl={`/news/${news.slug}-${news.id}`}
                type="article"
                structuredData={generateArticleSchema({
                    title: news.title,
                    description: news.description,
                    image: news.thumbnail,
                    url: `/news/${news.slug}-${news.id}`,
                    publishedTime: news.date
                })}
            />
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                <nav className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                    <Link to="/" className="transition hover:text-indigo-600">
                        {t('news.detail.home')}
                    </Link>
                    <span>/</span>
                    <Link to="/news" className="transition hover:text-indigo-600">
                        {t('news.detail.breadcrumb')}
                    </Link>
                    <span>/</span>
                    <span className="line-clamp-1 text-slate-700">{news.title}</span>
                </nav>

                <section className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-14">
                    <div className="min-w-0">
                        <article className=" backdrop-blur">
                            <h1 className="max-w-5xl text-3xl font-bold leading-tight text-slate-950 md:text-4xl lg:text-5xl">
                                {news.title}
                            </h1>

                            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 font-semibold text-indigo-600">
                                    {news.categories?.[0] ?? t('news.detail.breadcrumb')}
                                </span>
                                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block" />
                                <span className="inline-flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4 text-indigo-500" />
                                    {formatDate(news.date)}
                                </span>
                                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block" />
                                <span className="inline-flex items-center gap-2">
                                    <Clock3 className="h-4 w-4 text-indigo-500" />
                                    {readingTime} phút đọc
                                </span>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {(news.categories ?? []).map((category, index) => (
                                    <span
                                        key={`${category}-${index}`}
                                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-slate-600"
                                    >
                                        {category}
                                    </span>
                                ))}
                            </div>

                            {news.description && (
                                <p className="mt-6 max-w-4xl text-[16px] leading-9 text-slate-600">
                                    {news.description}
                                </p>
                            )}

                            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
                                <img
                                    src={news.thumbnail}
                                    alt={news.title}
                                    className="aspect-[16/9] w-full object-cover"
                                />
                            </div>

                            <div className="mt-10">
                                <ReactMarkdown components={markdownComponents}>{news.context}</ReactMarkdown>
                            </div>

                            <div className="mt-12 rounded-[1.5rem] border border-slate-200 bg-slate-50/90 p-5">
                                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">{t('news.detail.shareTitle')}</p>
                                        <p className="mt-1 text-sm text-slate-500">
                                            {t('news.detail.shareDescription')}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-3">
                                        <button
                                            type="button"
                                            onClick={handleShare}
                                            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600"
                                        >
                                            <Share2 className="h-4 w-4" />
                                            {t('news.detail.share')}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleCopyLink}
                                            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600"
                                        >
                                            <Copy className="h-4 w-4" />
                                            {copied ? t('news.detail.copied') : t('news.detail.copyLink')}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 grid gap-4 md:grid-cols-2">
                                <NavigationCard direction="previous" item={previousArticle} />
                                <NavigationCard direction="next" item={nextArticle} />
                            </div>
                        </article>
                    </div>

                    <aside className="h-fit xl:sticky xl:top-24 xl:self-start">
                        <div className="rounded-[16px] border border-slate-200 bg-white/95 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                            <h2 className="text-2xl font-bold text-slate-950">{t('news.detail.toc')}</h2>
                            <div className="mt-4 h-px bg-slate-200" />

                            {toc.length > 0 ? (
                                <div className="mt-4 space-y-1">
                                    {toc.map((item) => (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => scrollToHeading(item.id)}
                                            className={`block w-full text-left text-sm leading-7 transition-all duration-200 ${
                                                activeHeadingId === item.id
                                                    ? " text-indigo-600"
                                                    : "text-slate-600 hover:text-slate-950"
                                            } ${item.level === 1 ? "pl-3" : "pl-5"}`}
                                        >
                                            <span className="mr-2 font-semibold text-indigo-500">{item.number}</span>
                                            <span>{item.title}</span>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <p className="mt-4 text-sm leading-7 text-slate-500">
                                    {t('news.detail.tocEmpty')}
                                </p>
                            )}
                        </div>
                    </aside>
                </section>

                <section className="mt-12 pb-6 lg:mt-16 lg:pb-10">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
                                {t('news.detail.related')}
                            </p>
                            <h2 className="mt-2 text-2xl font-bold text-slate-950 md:text-3xl">
                                {t('news.detail.relatedTitle')}
                            </h2>
                            <p className="mt-2 max-w-2xl text-sm text-slate-500 md:text-base">
                                {t('news.detail.relatedDescription')}
                            </p>
                        </div>

                        <Link
                            to="/news"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-500"
                        >
                            {t('news.detail.viewAll')}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {relatedArticles.map((item) => (
                            <NewsCard key={item.id} item={item} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default NewsDetailPage;
