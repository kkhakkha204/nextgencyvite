// src/i18n/config.js
//
// Nguồn khai báo ngôn ngữ duy nhất của toàn site.
// File này KHÔNG import React để `src/scripts/generate-static.js` (chạy bằng Node
// lúc build) có thể dùng lại cùng logic prefix với phía client.
//
//   vi -> "/"            (mặc định, không có prefix)
//   en -> "/en/..."
//   cn -> "/cn/..."      (tiếng Trung giản thể)

export const DEFAULT_LOCALE = 'vi';

export const LOCALES = [
    {
        code: 'vi',
        prefix: '',
        htmlLang: 'vi',
        ogLocale: 'vi_VN',
        hreflang: 'vi',
        label: 'Tiếng Việt',
        short: 'VI',
        metaLanguage: 'Vietnamese'
    },
    {
        code: 'en',
        prefix: '/en',
        htmlLang: 'en',
        ogLocale: 'en_US',
        hreflang: 'en',
        label: 'English',
        short: 'EN',
        metaLanguage: 'English'
    },
    {
        code: 'cn',
        prefix: '/cn',
        htmlLang: 'zh-Hans',
        ogLocale: 'zh_CN',
        hreflang: 'zh-Hans',
        label: '简体中文',
        short: '中文',
        metaLanguage: 'Chinese'
    }
];

export const LOCALE_CODES = LOCALES.map((locale) => locale.code);

/** Cấu hình của một ngôn ngữ; mã lạ -> rơi về tiếng Việt. */
export const getLocaleConfig = (code) =>
    LOCALES.find((locale) => locale.code === code) || LOCALES[0];

/** Prefix URL của một ngôn ngữ: 'vi' -> '', 'en' -> '/en', 'cn' -> '/cn'. */
export const getLocalePrefix = (code) => getLocaleConfig(code).prefix;

// Đường dẫn không phải route nội bộ thì để nguyên, không gắn prefix.
const isExternalTarget = (path) =>
    typeof path !== 'string' || /^([a-z][a-z0-9+.-]*:|\/\/|#|\?)/i.test(path);

/**
 * Tách prefix ngôn ngữ khỏi pathname.
 *   '/en/about'  -> { locale: 'en', pathname: '/about' }
 *   '/cn'        -> { locale: 'cn', pathname: '/' }
 *   '/about'     -> { locale: 'vi', pathname: '/about' }
 *   '/england'   -> { locale: 'vi', pathname: '/england' }   (không khớp nhầm '/en')
 */
export const splitLocaleFromPath = (pathname = '/') => {
    const path = pathname.startsWith('/') ? pathname : `/${pathname}`;

    for (const locale of LOCALES) {
        if (!locale.prefix) continue;
        if (path === locale.prefix || path.startsWith(`${locale.prefix}/`)) {
            const rest = path.slice(locale.prefix.length) || '/';
            return {locale: locale.code, pathname: rest};
        }
    }

    return {locale: DEFAULT_LOCALE, pathname: path};
};

/** Chỉ lấy mã ngôn ngữ từ pathname. */
export const getLocaleFromPath = (pathname = '/') => splitLocaleFromPath(pathname).locale;

/** Bỏ prefix ngôn ngữ, trả về đường dẫn "gốc" dùng để tra cứu route/SEO. */
export const stripLocaleFromPath = (pathname = '/') => splitLocaleFromPath(pathname).pathname;

/**
 * Gắn prefix ngôn ngữ vào một đường dẫn nội bộ.
 * Giữ nguyên link ngoài (https://, mailto:, tel:), anchor (#...) và query rời (?...).
 * Nếu đường dẫn đã có sẵn prefix thì thay bằng prefix của ngôn ngữ đang yêu cầu.
 */
export const localizePath = (path = '/', locale = DEFAULT_LOCALE) => {
    if (isExternalTarget(path)) return path;

    const prefix = getLocalePrefix(locale);

    // Tách phần query/hash để không chèn prefix vào nhầm chỗ
    const separatorIndex = path.search(/[?#]/);
    const purePath = separatorIndex === -1 ? path : path.slice(0, separatorIndex);
    const suffix = separatorIndex === -1 ? '' : path.slice(separatorIndex);

    const {pathname} = splitLocaleFromPath(purePath || '/');
    const normalized = pathname === '/' ? '' : pathname;

    return `${prefix}${normalized}${suffix}` || '/';
};
