import { useCallback, useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useI18n } from '../../i18n';

/**
 * Hồ sơ năng lực = 3 bộ slide ghép lại, nên trang được chia thành từng mục để
 * menu bên trái cuộn tới đúng chỗ.
 *
 * === SỬA MENU Ở ĐÂY ===
 * Mỗi phần tử dưới đây là một mục trong menu:
 *   id     - dùng cho anchor, chỉ gồm chữ thường và dấu gạch ngang, không trùng nhau
 *   titleKey - khoá trong từ điển; chữ hiển thị nằm ở `portfolio.sections.*`
 *              trong src/i18n/translations/{vi,en,cn}.js
 *   images - danh sách ảnh thuộc mục đó, đúng theo thứ tự muốn hiển thị
 *
 * Muốn tách một mục làm đôi: cắt mảng `images` ra và thêm một phần tử mới ở đây,
 * rồi thêm khoá tương ứng vào cả ba file từ điển.
 */
const PORTFOLIO_SECTIONS = [
    {
        id: 'thu-ngo',
        titleKey: 'portfolio.sections.letter',
        images: ['0.webp', '2.webp']
    },
    {
        id: 'dau-an-phat-trien',
        titleKey: 'portfolio.sections.milestones',
        images: ['3.webp', '4.webp']
    },
    {
        id: 'co-cau-to-chuc',
        titleKey: 'portfolio.sections.team',
        images: ['5.webp']
    },
    {
        id: 'quy-trinh-trien-khai',
        titleKey: 'portfolio.sections.process',
        images: ['6.webp']
    },
    {
        id: 'khach-hang-doi-tac',
        titleKey: 'portfolio.sections.clients',
        images: ['9.webp']
    },
    {
        id: 'du-an-tieu-bieu',
        titleKey: 'portfolio.sections.featured',
        images: [
            '10.webp', '11.webp', '12.webp', '13.webp', '14.webp',
            '15.webp', '16.webp', '17.webp', '18.webp', '19.webp',
            'a (1).webp', 'a (2).webp', 'a (3).webp', 'a (4).webp', 'a (5).webp',
            'a (6).webp',
        ]
    },
    {
        id: 'du-an-beauty-summit',
        titleKey: 'portfolio.sections.beautySummit',
        images: [
            'a (7).webp', 'a (8).webp', 'a (9).webp', 'a (10).webp',
            'a (11).webp', 'a (12).webp', 'a (13).webp', 'a (14).webp', 'a (15).webp',
            'a (16).webp', 'a (17).webp', 'a (18).webp'
        ]
    },
    {
        id: 'du-an-nghe',
        titleKey: 'portfolio.sections.nghe',
        images: [
            'a (19).webp', 'a (20).webp', '21.webp', '22.webp', '23.webp', '24.webp', '25.webp',
            '26.webp', '27.webp', '28.webp', '29.webp', '30.webp'
        ]
    },
    {
        id: 'du-an-tuki-group',
        titleKey: 'portfolio.sections.tukiGroup',
        images: ['31.webp', '32.webp', '33.webp', '34.webp', '35.webp']
    },
    {
        id: 'du-an-khac',
        titleKey: 'portfolio.sections.otherProjects',
        images: [
            '36.webp', '37.webp', '38.webp', '39.webp', '40.webp',
            '41.webp', '42.webp', '43.webp', '44.webp', '45.webp',
            '46.webp', '47.webp', '48.webp', '49.webp', '50.webp',
            '51.webp', '52.webp', '53.webp', '54.webp', '55.webp'
        ]
    },
    {
        id: 'hang-muc-trien-khai',
        titleKey: 'portfolio.sections.already',
        images: ['56.webp', '57.webp', '58.webp']
    },
    {
        id: 'dich-vu-nextgency',
        titleKey: 'portfolio.sections.services',
        images: ['59.webp', '60.webp', '61.webp']
    },
];

const IMAGE_BASE = '/assets/images/portfolio/';

const Portfolio = () => {
    const { t } = useI18n();
    const [imageErrors, setImageErrors] = useState({});
    const [activeSection, setActiveSection] = useState(PORTFOLIO_SECTIONS[0].id);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const sectionRefs = useRef({});

    const handleImageError = (src) => {
        setImageErrors((prev) => ({ ...prev, [src]: true }));
    };

    // Mục nào đang chiếm phần trên của khung nhìn thì mục đó sáng trong menu
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible.length) setActiveSection(visible[0].target.id);
            },
            // Chỉ tính vùng ngay dưới header, tránh mục cuối trang luôn thắng
            { rootMargin: '-96px 0px -70% 0px', threshold: 0 }
        );

        Object.values(sectionRefs.current).forEach((node) => {
            if (node) observer.observe(node);
        });
        return () => observer.disconnect();
    }, []);

    const scrollToSection = useCallback((sectionId) => {
        const node = sectionRefs.current[sectionId];
        if (!node) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        node.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: 'start'
        });
        setActiveSection(sectionId);
        setIsMobileMenuOpen(false);
    }, []);

    const menuItems = PORTFOLIO_SECTIONS.map((section) => (
        <li key={section.id}>
            <button
                type="button"
                onClick={() => scrollToSection(section.id)}
                aria-current={activeSection === section.id ? 'true' : undefined}
                className={`w-full rounded-lg px-3 py-2 text-left text-[13px] leading-snug transition-colors duration-200 ${
                    activeSection === section.id
                        ? 'bg-black font-semibold text-white'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                }`}
            >
                {t(section.titleKey)}
            </button>
        </li>
    ));

    return (
        <div className="mx-auto w-full max-w-[1380px] px-0 lg:px-4 xl:py-[20px]">
            {/* Menu mobile: thanh gọn nằm dính trên đầu, bấm mới mở danh sách */}
            <div className="sticky top-[70px] z-30 border-b border-gray-200 bg-white/95 backdrop-blur lg:hidden">
                <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen((open) => !open)}
                    aria-expanded={isMobileMenuOpen}
                    className="flex w-full items-center justify-between px-4 py-3 text-[14px] font-semibold text-black"
                >
                    <span className="truncate">
                        {t(
                            PORTFOLIO_SECTIONS.find((section) => section.id === activeSection)
                                ?.titleKey || PORTFOLIO_SECTIONS[0].titleKey
                        )}
                    </span>
                    {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>

                {isMobileMenuOpen && (
                    <nav aria-label={t('portfolio.menuTitle')} className="max-h-[60vh] overflow-y-auto px-2 pb-3">
                        <ul className="space-y-1">{menuItems}</ul>
                    </nav>
                )}
            </div>

            <div className="lg:flex lg:gap-8">
                {/* Menu desktop: dính bên trái, luôn thấy trong lúc cuộn */}
                <aside className="hidden lg:block lg:w-[248px] lg:flex-none">
                    <nav
                        aria-label={t('portfolio.menuTitle')}
                        className="sticky top-[105px] max-h-[calc(100vh-125px)] overflow-y-auto rounded-2xl border-2 border-black bg-white p-3"
                    >
                        <p className="mb-2 px-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500">
                            {t('portfolio.menuTitle')}
                        </p>
                        <ul className="space-y-1">{menuItems}</ul>
                    </nav>
                </aside>

                <div className="min-w-0 flex-1 space-y-2 md:space-y-4">
                    {PORTFOLIO_SECTIONS.map((section) => (
                        <section
                            key={section.id}
                            id={section.id}
                            ref={(node) => {
                                sectionRefs.current[section.id] = node;
                            }}
                            aria-label={t(section.titleKey)}
                            // Chừa chỗ cho header cố định khi cuộn tới
                            className="scroll-mt-[120px] space-y-2 md:space-y-4 lg:scroll-mt-[105px]"
                        >
                            {section.images.map((fileName) => {
                                const src = `${IMAGE_BASE}${fileName}`;
                                return imageErrors[src] ? (
                                    <div
                                        key={fileName}
                                        className="flex h-96 w-full items-center justify-center bg-gray-200"
                                    >
                                        <p className="text-center text-gray-500">
                                            {t('portfolio.imageError', { file: fileName })}
                                        </p>
                                    </div>
                                ) : (
                                    <img
                                        key={fileName}
                                        src={src}
                                        alt={t(section.titleKey)}
                                        className="block h-auto w-full"
                                        onError={() => handleImageError(src)}
                                        loading="lazy"
                                    />
                                );
                            })}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
