// src/components/SEO/SEOManager.jsx
import {useEffect} from 'react';
import {resolveOgImage, SITE, toAbsoluteUrl} from '../../pages/seo-configs.js';

/**
 * Cập nhật thẻ meta khi điều hướng trong SPA.
 *
 * LƯU Ý: crawler của Facebook / Zalo / LinkedIn / X KHÔNG chạy JavaScript, nên các thẻ
 * do component này tạo ra chỉ phục vụ trình duyệt và Googlebot. Thumbnail khi chia sẻ
 * link lấy từ HTML tĩnh đã được prerender bởi src/scripts/generate-static.js.
 */
const SEOManager = ({
                        // Truyền nguyên object cấu hình từ seo-configs.js
                        seo,
                        title,
                        description,
                        keywords,
                        author = SITE.name,
                        image,
                        // Đường dẫn tương đối của trang, vd "/services/tool-content-ai"
                        ogUrl,
                        // URL tuyệt đối (giữ lại cho tương thích ngược)
                        url,
                        type = 'website',
                        twitterCard = 'summary_large_image',
                        locale = SITE.locale,
                        canonicalUrl,
                        noindex = false,
                        structuredData,
                        additionalMetaTags = []
                    }) => {
    const finalTitle = title || seo?.title || SITE.siteName;
    const finalDescription = description || seo?.description || '';
    const finalKeywords = keywords || seo?.keywords || '';
    const finalType = type || seo?.type || 'website';
    const finalUrl = toAbsoluteUrl(url || ogUrl || seo?.path || '/');
    const finalCanonicalUrl = canonicalUrl ? toAbsoluteUrl(canonicalUrl) : finalUrl;

    // Serialize để mảng/object mặc định không làm effect chạy lại mỗi lần render
    const extraTagsKey = JSON.stringify(additionalMetaTags);
    const structuredDataKey = JSON.stringify(structuredData ?? null);
    const imageKey = JSON.stringify(resolveOgImage(image || seo?.image));

    useEffect(() => {
        // Đọc lại từ chuỗi đã serialize để dependency của effect luôn ổn định
        const ogImage = JSON.parse(imageKey);

        document.title = finalTitle;
        document.documentElement.lang = SITE.lang;

        const setMeta = (key, value, content) => {
            if (content === undefined || content === null || content === '') return;
            let element = document.head.querySelector(`meta[${key}="${value}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(key, value);
                document.head.appendChild(element);
            }
            element.setAttribute('content', String(content));
        };

        const removeMeta = (key, value) => {
            document.head.querySelector(`meta[${key}="${value}"]`)?.remove();
        };

        const setLink = (rel, href) => {
            let element = document.head.querySelector(`link[rel="${rel}"]`);
            if (!element) {
                element = document.createElement('link');
                element.setAttribute('rel', rel);
                document.head.appendChild(element);
            }
            element.setAttribute('href', href);
        };

        // --- Meta cơ bản ---
        setMeta('name', 'description', finalDescription);
        setMeta('name', 'keywords', finalKeywords);
        setMeta('name', 'author', author);
        setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');
        setMeta('name', 'language', 'Vietnamese');
        setMeta('name', 'geo.region', 'VN');
        setMeta('name', 'geo.placename', 'Ho Chi Minh City');
        setMeta('name', 'theme-color', SITE.themeColor);

        // --- Open Graph ---
        setMeta('property', 'og:type', finalType);
        setMeta('property', 'og:title', finalTitle);
        setMeta('property', 'og:description', finalDescription);
        setMeta('property', 'og:url', finalUrl);
        setMeta('property', 'og:site_name', SITE.siteName);
        setMeta('property', 'og:locale', locale);
        setMeta('property', 'og:image', ogImage.url);
        setMeta('property', 'og:image:secure_url', ogImage.url);
        setMeta('property', 'og:image:alt', ogImage.alt);
        if (ogImage.type) setMeta('property', 'og:image:type', ogImage.type);
        else removeMeta('property', 'og:image:type');
        if (ogImage.width) setMeta('property', 'og:image:width', ogImage.width);
        else removeMeta('property', 'og:image:width');
        if (ogImage.height) setMeta('property', 'og:image:height', ogImage.height);
        else removeMeta('property', 'og:image:height');

        // --- Twitter / X ---
        setMeta('name', 'twitter:card', twitterCard);
        setMeta('name', 'twitter:title', finalTitle);
        setMeta('name', 'twitter:description', finalDescription);
        setMeta('name', 'twitter:image', ogImage.url);
        setMeta('name', 'twitter:image:alt', ogImage.alt);
        setMeta('name', 'twitter:site', SITE.twitterHandle);
        setMeta('name', 'twitter:creator', SITE.twitterHandle);

        setLink('canonical', finalCanonicalUrl);

        // --- Thẻ meta bổ sung theo trang ---
        JSON.parse(extraTagsKey).forEach((tag) => {
            if (tag.name) setMeta('name', tag.name, tag.content);
            else if (tag.property) setMeta('property', tag.property, tag.content);
        });

        // --- Structured data (chấp nhận 1 object hoặc mảng) ---
        document.head.querySelectorAll('script[data-seo-schema]').forEach((node) => node.remove());
        const schemas = JSON.parse(structuredDataKey);
        if (schemas) {
            (Array.isArray(schemas) ? schemas : [schemas]).forEach((schema) => {
                const script = document.createElement('script');
                script.setAttribute('type', 'application/ld+json');
                script.setAttribute('data-seo-schema', 'true');
                script.textContent = JSON.stringify(schema);
                document.head.appendChild(script);
            });
        }

        return () => {
            document.head.querySelectorAll('script[data-seo-schema]').forEach((node) => node.remove());
        };
    }, [
        finalTitle,
        finalDescription,
        finalKeywords,
        finalType,
        finalUrl,
        finalCanonicalUrl,
        imageKey,
        author,
        locale,
        twitterCard,
        noindex,
        extraTagsKey,
        structuredDataKey
    ]);

    return null;
};

export default SEOManager;
