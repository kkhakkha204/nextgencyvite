// src/scripts/generate-static.js
//
// Chạy sau `vite build`. Ba việc:
//   1. Sinh sitemap.xml + robots.txt
//   2. Prerender thẻ <head> SEO vào một file HTML tĩnh cho từng route
//   3. Ghi kết quả vào cả public/ (cho dev) lẫn dist/ (cho bản deploy)
//
// Bước 2 là bắt buộc: crawler của Facebook, Zalo, LinkedIn, X không chạy JavaScript,
// nên thẻ og:image do React gắn lúc runtime sẽ không bao giờ tới được chúng.

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
    DEFAULT_OG_IMAGE,
    SITE,
    resolveOgImage,
    seoRoutes,
    toAbsoluteUrl
} from '../pages/seo-configs.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..', '..');
const publicDir = path.join(projectRoot, 'public');
const distDir = path.join(projectRoot, 'dist');

const SEO_BLOCK_START = '<!--SEO-->';
const SEO_BLOCK_END = '<!--/SEO-->';

const escapeHtml = (value) =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

/* ------------------------------------------------------------------ sitemap */

const generateSitemap = () => {
    const lastmod = new Date().toISOString().split('T')[0];
    const urls = seoRoutes
        .map(
            (route) => `  <url>
    <loc>${toAbsoluteUrl(route.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq || 'monthly'}</changefreq>
    <priority>${(route.priority ?? 0.5).toFixed(1)}</priority>
  </url>`
        )
        .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
};

const generateRobots = () => `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /tiktok-verification/

Sitemap: ${SITE.baseUrl}/sitemap.xml
`;

/* ---------------------------------------------------------------- head tags */

const buildSchemas = (route) => {
    const organization = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE.baseUrl}/#organization`,
        name: SITE.name,
        url: SITE.baseUrl,
        logo: toAbsoluteUrl('/assets/images/header/navbarlogoblack.png'),
        image: toAbsoluteUrl(DEFAULT_OG_IMAGE.url),
        description: 'Agency digital marketing: thiết kế website, quảng cáo online, AI và chuyển đổi số.',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Hồ Chí Minh',
            addressCountry: 'VN'
        }
    };

    if (route.path === '/') {
        return [
            organization,
            {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': `${SITE.baseUrl}/#website`,
                url: SITE.baseUrl,
                name: SITE.siteName,
                inLanguage: SITE.lang,
                publisher: {'@id': `${SITE.baseUrl}/#organization`}
            }
        ];
    }

    const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {'@type': 'ListItem', position: 1, name: 'Trang chủ', item: SITE.baseUrl},
            {'@type': 'ListItem', position: 2, name: route.title, item: toAbsoluteUrl(route.path)}
        ]
    };

    if (route.path.startsWith('/services/')) {
        return [
            breadcrumb,
            {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: route.title,
                description: route.description,
                url: toAbsoluteUrl(route.path),
                image: resolveOgImage(route.image).url,
                areaServed: {'@type': 'Country', name: 'Việt Nam'},
                provider: {'@id': `${SITE.baseUrl}/#organization`}
            }
        ];
    }

    return [breadcrumb];
};

const buildHead = (route) => {
    const image = resolveOgImage(route.image);
    const canonical = toAbsoluteUrl(route.path);
    const type = route.type || 'website';

    const tags = [
        `<title>${escapeHtml(route.title)}</title>`,
        `<meta name="description" content="${escapeHtml(route.description)}" />`,
        `<meta name="keywords" content="${escapeHtml(route.keywords || '')}" />`,
        `<meta name="author" content="${escapeHtml(SITE.name)}" />`,
        '<meta name="robots" content="index, follow, max-image-preview:large" />',
        `<meta name="theme-color" content="${SITE.themeColor}" />`,
        '<meta name="language" content="Vietnamese" />',
        '<meta name="geo.region" content="VN" />',
        '<meta name="geo.placename" content="Ho Chi Minh City" />',
        `<link rel="canonical" href="${canonical}" />`,

        `<meta property="og:type" content="${type}" />`,
        `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
        `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
        `<meta property="og:url" content="${canonical}" />`,
        `<meta property="og:site_name" content="${escapeHtml(SITE.siteName)}" />`,
        `<meta property="og:locale" content="${SITE.locale}" />`,
        `<meta property="og:image" content="${image.url}" />`,
        `<meta property="og:image:secure_url" content="${image.url}" />`,
        `<meta property="og:image:alt" content="${escapeHtml(image.alt)}" />`
    ];

    if (image.type) tags.push(`<meta property="og:image:type" content="${image.type}" />`);
    if (image.width) tags.push(`<meta property="og:image:width" content="${image.width}" />`);
    if (image.height) tags.push(`<meta property="og:image:height" content="${image.height}" />`);

    tags.push(
        '<meta name="twitter:card" content="summary_large_image" />',
        `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
        `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
        `<meta name="twitter:image" content="${image.url}" />`,
        `<meta name="twitter:image:alt" content="${escapeHtml(image.alt)}" />`,
        `<meta name="twitter:site" content="${SITE.twitterHandle}" />`,
        `<meta name="twitter:creator" content="${SITE.twitterHandle}" />`
    );

    buildSchemas(route).forEach((schema) => {
        // </script> trong chuỗi JSON sẽ đóng sớm thẻ script -> phải escape
        const json = JSON.stringify(schema).replace(/</g, '\\u003c');
        tags.push(`<script type="application/ld+json" data-seo-schema="true">${json}</script>`);
    });

    return tags.map((tag) => `    ${tag}`).join('\n');
};

/* -------------------------------------------------------------- prerender */

const prerender = () => {
    const templatePath = path.join(distDir, 'index.html');
    if (!fs.existsSync(templatePath)) {
        console.warn('⚠️  Chưa có dist/index.html - chạy `vite build` trước khi prerender.');
        return 0;
    }

    const template = fs.readFileSync(templatePath, 'utf8');
    const startIndex = template.indexOf(SEO_BLOCK_START);
    const endIndex = template.indexOf(SEO_BLOCK_END);

    if (startIndex === -1 || endIndex === -1) {
        console.warn(`⚠️  Không tìm thấy khối ${SEO_BLOCK_START} ... ${SEO_BLOCK_END} trong index.html - bỏ qua prerender.`);
        return 0;
    }

    const before = template.slice(0, startIndex + SEO_BLOCK_START.length);
    const after = template.slice(endIndex);

    let count = 0;
    seoRoutes.forEach((route) => {
        const html = `${before}\n${buildHead(route)}\n${after}`;
        const outputPath =
            route.path === '/'
                ? path.join(distDir, 'index.html')
                : path.join(distDir, route.path.replace(/^\//, ''), 'index.html');

        fs.mkdirSync(path.dirname(outputPath), {recursive: true});
        fs.writeFileSync(outputPath, html, 'utf8');
        count += 1;
    });

    return count;
};

/* -------------------------------------------- kiểm tra rewrite của Vercel */

// Mỗi route prerender cần một rewrite tường minh trong vercel.json, nếu không
// rewrite bắt-tất-cả sẽ trả về index.html của trang chủ và crawler đọc sai thẻ meta.
const checkVercelRewrites = () => {
    const vercelConfigPath = path.join(projectRoot, 'vercel.json');
    if (!fs.existsSync(vercelConfigPath)) return;

    const rewrites = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf8')).rewrites || [];
    const declared = new Set(rewrites.map((rule) => rule.source));
    const missing = seoRoutes
        .map((route) => route.path)
        .filter((routePath) => routePath !== '/' && !declared.has(routePath));

    if (missing.length) {
        console.warn('⚠️  Thiếu rewrite trong vercel.json cho các route sau:');
        missing.forEach((routePath) => {
            console.warn(`     { "source": "${routePath}", "destination": "${routePath}/index.html" },`);
        });
        console.warn('     Thêm vào TRƯỚC rule "/(.*)" để trang được phục vụ đúng HTML đã prerender.');
    }
};

/* ------------------------------------------------------------------- chạy */

const sitemap = generateSitemap();
const robots = generateRobots();

[publicDir, distDir].forEach((dir) => {
    if (!fs.existsSync(dir)) return;
    fs.writeFileSync(path.join(dir, 'sitemap.xml'), sitemap, 'utf8');
    fs.writeFileSync(path.join(dir, 'robots.txt'), robots, 'utf8');
});

const prerendered = prerender();
checkVercelRewrites();

console.log(`✅ sitemap.xml + robots.txt (${seoRoutes.length} route)`);
if (prerendered) console.log(`✅ Prerender thẻ SEO cho ${prerendered} trang trong dist/`);
