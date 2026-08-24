// src/i18n/LanguageProvider.jsx
import React, {useCallback, useEffect, useMemo} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {getLocaleConfig, localizePath, splitLocaleFromPath, DEFAULT_LOCALE} from './config.js';
import {translate, translateList} from './translate.js';
import {I18nContext} from './context.js';

/**
 * Nguồn sự thật của ngôn ngữ là URL (/ , /en , /cn), không phải state.
 * Nhờ vậy mọi link chia sẻ và mọi bản prerender đều mở đúng ngôn ngữ, và
 * crawler thấy đúng nội dung mà không cần chạy JavaScript.
 */
const LanguageProvider = ({children}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const {locale, pathname: pathWithoutLocale} = useMemo(
        () => splitLocaleFromPath(location.pathname),
        [location.pathname]
    );

    const localeConfig = getLocaleConfig(locale);

    // Đồng bộ <html lang> cho trình đọc màn hình và công cụ tìm kiếm
    useEffect(() => {
        document.documentElement.lang = localeConfig.htmlLang;
    }, [localeConfig.htmlLang]);

    const t = useCallback((key, vars) => translate(locale, key, vars), [locale]);
    const tm = useCallback((key) => translateList(locale, key), [locale]);
    const localePath = useCallback((path) => localizePath(path, locale), [locale]);

    /** Đổi ngôn ngữ nhưng giữ nguyên trang đang xem (kèm query + hash). */
    const switchLocale = useCallback(
        (nextLocale) => {
            if (nextLocale === locale) return;
            const target = localizePath(pathWithoutLocale, nextLocale);
            navigate(`${target}${location.search}${location.hash}`);
        },
        [locale, pathWithoutLocale, location.search, location.hash, navigate]
    );

    const value = useMemo(
        () => ({
            locale,
            localeConfig,
            pathWithoutLocale,
            t,
            tm,
            localePath,
            switchLocale,
            isDefaultLocale: locale === DEFAULT_LOCALE
        }),
        [locale, localeConfig, pathWithoutLocale, t, tm, localePath, switchLocale]
    );

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export default LanguageProvider;
