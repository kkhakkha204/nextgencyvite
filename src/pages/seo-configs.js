// src/pages/seo-configs.js
// Nguồn dữ liệu SEO duy nhất của toàn site.
// Dùng chung cho SEOManager / RouteSEO (phía client) và src/scripts/generate-static.js
// (prerender thẻ meta vào HTML tĩnh + sinh sitemap.xml, robots.txt).

export const SITE = {
    baseUrl: 'https://nextgency.vn',
    name: 'Nextgency',
    siteName: 'Nextgency - Digital Marketing Agency',
    locale: 'vi_VN',
    lang: 'vi',
    twitterHandle: '@nextgency',
    themeColor: '#000000'
};

// Ảnh thumbnail mặc định khi chia sẻ link lên mạng xã hội (Facebook, Zalo, LinkedIn, X...)
export const DEFAULT_OG_IMAGE = {
    url: '/assets/images/seo-banner.webp',
    width: 2721,
    height: 1258,
    type: 'image/webp',
    alt: 'Nextgency - Giải pháp Digital Marketing toàn diện'
};

/** Đổi đường dẫn tương đối thành URL tuyệt đối (bắt buộc với og:image, og:url, canonical). */
export const toAbsoluteUrl = (value) => {
    if (!value) return SITE.baseUrl;
    if (/^https?:\/\//i.test(value)) return value;
    return `${SITE.baseUrl}${value.startsWith('/') ? value : `/${value}`}`;
};

/** Chuẩn hóa ảnh OG: nhận string hoặc object, luôn trả về object có url tuyệt đối. */
export const resolveOgImage = (image) => {
    if (!image) return {...DEFAULT_OG_IMAGE, url: toAbsoluteUrl(DEFAULT_OG_IMAGE.url)};
    if (typeof image === 'string') {
        return {url: toAbsoluteUrl(image), alt: DEFAULT_OG_IMAGE.alt};
    }
    return {...image, url: toAbsoluteUrl(image.url), alt: image.alt || DEFAULT_OG_IMAGE.alt};
};

export const seoConfigs = {
    home: {
        path: '/',
        title: 'Nextgency - Giải pháp Digital Marketing toàn diện',
        description: 'Nextgency là agency digital marketing chuyên thiết kế website, quảng cáo Google Ads, Facebook Ads, TikTok Ads và các giải pháp marketing tổng thể cho doanh nghiệp.',
        keywords: 'nextgency, digital marketing agency, thiết kế website, google ads, facebook ads, tiktok ads, marketing agency vietnam',
        priority: 1.0,
        changefreq: 'weekly'
    },
    about: {
        path: '/about',
        title: 'Về Nextgency - Đội ngũ Digital Marketing',
        description: 'Tìm hiểu về Nextgency - đội ngũ chuyên gia digital marketing nhiều năm kinh nghiệm trong quảng cáo online, công nghệ và phát triển thương hiệu.',
        keywords: 'về nextgency, digital marketing team, marketing agency ho chi minh',
        priority: 0.8,
        changefreq: 'monthly'
    },
    news: {
        path: '/news',
        title: 'Tin tức & Kiến thức Marketing | Nextgency',
        description: 'Cập nhật tin tức, xu hướng và kiến thức thực chiến về digital marketing, quảng cáo online, AI và chuyển đổi số từ đội ngũ Nextgency.',
        keywords: 'tin tức marketing, kiến thức digital marketing, xu hướng quảng cáo, blog nextgency',
        priority: 0.7,
        changefreq: 'weekly'
    },
    contact: {
        path: '/contact',
        title: 'Liên hệ Nextgency - Tư vấn Digital Marketing',
        description: 'Liên hệ Nextgency để được tư vấn miễn phí về website, quảng cáo online và giải pháp marketing phù hợp với ngân sách của doanh nghiệp bạn.',
        keywords: 'liên hệ nextgency, tư vấn marketing, báo giá digital marketing',
        priority: 0.7,
        changefreq: 'monthly'
    },
    privacy: {
        path: '/chinh-sach-bao-mat',
        title: 'Chính sách bảo mật | Nextgency',
        description: 'Chính sách bảo mật của Nextgency: cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ dữ liệu cá nhân của khách hàng.',
        keywords: 'chính sách bảo mật, bảo vệ dữ liệu cá nhân, nextgency',
        priority: 0.3,
        changefreq: 'yearly'
    },
    services: {
        'website-landing-page': {
            path: '/services/website-landing-page',
            title: 'Thiết kế Website & Landing Page chuẩn SEO | Nextgency',
            description: 'Dịch vụ thiết kế website và landing page chuyên nghiệp: tối ưu chuyển đổi, responsive, chuẩn SEO và cam kết hiệu quả kinh doanh.',
            keywords: 'thiết kế website, landing page, website chuyên nghiệp, thiết kế web responsive',
            priority: 0.9,
            changefreq: 'monthly'
        },
        'ai-data': {
            path: '/services/ai-data',
            title: 'AI & Data Analytics cho Marketing | Nextgency',
            description: 'Ứng dụng AI và phân tích dữ liệu để tối ưu chiến dịch marketing: dự đoán xu hướng, phân tích hành vi khách hàng và tối ưu ROI.',
            keywords: 'ai marketing, data analytics, marketing automation, predictive analytics',
            priority: 0.9,
            changefreq: 'monthly'
        },
        'tool-content-ai': {
            path: '/services/tool-content-ai',
            title: 'Tool Content AI - Tự động hóa nội dung SEO | Nextgency',
            description: 'Nền tảng AI phân tích social & sàn TMĐT, lên kế hoạch và viết nội dung chuẩn SEO - AEO - GEO, tự động đi internal link, backlink và xuất bản đa kênh.',
            keywords: 'tool content ai, automation content, viết content ai, seo aeo geo, tự động đi internal link, xuất bản đa kênh',
            // Thumbnail riêng của trang này khi chia sẻ lên mạng xã hội
            image: {
                url: '/assets/images/seo-tool-content-ai.webp',
                width: 1672,
                height: 941,
                type: 'image/webp',
                alt: 'Automation Tool Content AI - Nextgency'
            },
            priority: 0.9,
            changefreq: 'monthly'
        },
        'google-ads': {
            path: '/services/google-ads',
            title: 'Dịch vụ quảng cáo Google Ads chuyên nghiệp | Nextgency',
            description: 'Quản lý và tối ưu chiến dịch Google Ads hiệu quả: tăng doanh số, giảm chi phí quảng cáo với đội ngũ chuyên gia nhiều năm kinh nghiệm.',
            keywords: 'google ads, quảng cáo google, google advertising, sem, search ads',
            priority: 0.9,
            changefreq: 'monthly'
        },
        'facebook-ads': {
            path: '/services/facebook-ads',
            title: 'Dịch vụ quảng cáo Facebook Ads hiệu quả | Nextgency',
            description: 'Chạy quảng cáo Facebook Ads chuyên nghiệp: target đúng khách hàng, tối ưu chi phí và tăng doanh thu bền vững cho doanh nghiệp.',
            keywords: 'facebook ads, quảng cáo facebook, facebook advertising, social media marketing',
            priority: 0.9,
            changefreq: 'monthly'
        },
        'tiktok-ads': {
            path: '/services/tiktok-ads',
            title: 'Dịch vụ quảng cáo TikTok Ads | Nextgency',
            description: 'Khai thác sức mạnh TikTok Ads để tiếp cận khách hàng trẻ với chiến dịch sáng tạo, khả năng lan tỏa cao và chi phí tối ưu.',
            keywords: 'tiktok ads, quảng cáo tiktok, tiktok advertising, tiktok marketing',
            priority: 0.9,
            changefreq: 'monthly'
        },
        'facebook-crm': {
            path: '/services/facebook-crm',
            title: 'Facebook CRM - Quản lý khách hàng Facebook | Nextgency',
            description: 'Giải pháp CRM tích hợp Facebook: quản lý tin nhắn, bình luận và khách hàng tiềm năng từ fanpage một cách tập trung, hiệu quả.',
            keywords: 'facebook crm, quản lý khách hàng facebook, social crm, facebook integration',
            priority: 0.8,
            changefreq: 'monthly'
        },
        'marketing-outsource': {
            path: '/services/marketing-outsource',
            title: 'Marketing Outsource - Thuê ngoài Marketing | Nextgency',
            description: 'Dịch vụ thuê ngoài marketing toàn diện: tiết kiệm chi phí nhân sự, vận hành chuyên nghiệp với đội ngũ chuyên gia đa lĩnh vực.',
            keywords: 'marketing outsource, thuê ngoài marketing, outsourcing marketing, marketing agency',
            priority: 0.9,
            changefreq: 'monthly'
        },
        'tick-xanh-facebook': {
            path: '/services/tick-xanh-facebook',
            title: 'Dịch vụ Tick xanh Facebook | Nextgency',
            description: 'Hỗ trợ xác minh tick xanh Facebook cho doanh nghiệp và thương hiệu, tăng uy tín cùng độ tin cậy cho fanpage của bạn.',
            keywords: 'tick xanh facebook, facebook verification, xác minh facebook, blue tick facebook',
            priority: 0.7,
            changefreq: 'monthly'
        }
    },
    projects: {
        all: {
            path: '/projects/all',
            title: 'Dự án tiêu biểu | Nextgency',
            description: 'Tổng hợp các dự án website, mini app, chiến dịch quảng cáo và giải pháp chuyển đổi số Nextgency đã triển khai cho khách hàng.',
            keywords: 'dự án nextgency, case study marketing, dự án website, dự án chuyển đổi số',
            priority: 0.8,
            changefreq: 'monthly'
        },
        portfolio: {
            path: '/projects/portfolio',
            title: 'Portfolio dự án | Nextgency',
            description: 'Bộ sưu tập hình ảnh các sản phẩm thiết kế, website và ấn phẩm truyền thông do Nextgency thực hiện.',
            keywords: 'portfolio nextgency, mẫu thiết kế website, ấn phẩm truyền thông',
            priority: 0.6,
            changefreq: 'monthly'
        },
        workflow: {
            path: '/projects/workflow',
            title: 'Workflow Automation - Thư viện quy trình tự động | Nextgency',
            description: 'Thư viện các workflow tự động hóa marketing và vận hành: tạo nội dung AI, đồng bộ dữ liệu, chăm sóc khách hàng đa kênh.',
            keywords: 'workflow automation, tự động hóa quy trình, n8n workflow, automation marketing',
            priority: 0.7,
            changefreq: 'monthly'
        },
        'miniapp-beautysummit-2026': {
            path: '/projects/miniapp-beautysummit-2026',
            title: 'Mini App Beauty Summit 2026 - BEAUTYVERSE | Nextgency',
            description: 'Case study Zalo Mini App BEAUTYVERSE do Nextgency thiết kế và vận hành cho Beauty Summit Vietnam 2026: gamification, check-in QR và hệ điểm BPoint.',
            keywords: 'Zalo Mini App, Beauty Summit 2026, BEAUTYVERSE, Nextgency, gamification, check-in QR, BPoint',
            type: 'article',
            priority: 0.8,
            changefreq: 'monthly'
        }
    }
};

/** Danh sách phẳng mọi route tĩnh - dùng cho prerender và sitemap. */
export const seoRoutes = [
    seoConfigs.home,
    seoConfigs.about,
    seoConfigs.news,
    seoConfigs.contact,
    seoConfigs.privacy,
    ...Object.values(seoConfigs.services),
    ...Object.values(seoConfigs.projects)
];

/** Tra cứu cấu hình SEO theo pathname (dùng cho RouteSEO). */
export const getSeoByPath = (pathname = '/') => {
    const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    return seoRoutes.find((route) => route.path === normalized) || null;
};
