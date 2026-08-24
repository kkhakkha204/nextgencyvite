// src/i18n/context.js
// Context + hook đọc ngôn ngữ hiện tại. Tách khỏi file .jsx để react-refresh
// không cảnh báo "chỉ được export component" trong LanguageProvider.jsx.
import {createContext, useContext} from 'react';
import {DEFAULT_LOCALE, getLocaleConfig, localizePath} from './config.js';

// Giá trị dự phòng: component nằm ngoài Provider vẫn render được bằng tiếng Việt
// thay vì ném lỗi trắng màn hình.
const fallbackValue = {
    locale: DEFAULT_LOCALE,
    localeConfig: getLocaleConfig(DEFAULT_LOCALE),
    t: (key) => key,
    tm: () => [],
    localePath: (path) => localizePath(path, DEFAULT_LOCALE),
    switchLocale: () => {},
    isDefaultLocale: true
};

export const I18nContext = createContext(fallbackValue);

/** Hook chính: `const {t, locale, localePath} = useI18n();` */
export const useI18n = () => useContext(I18nContext);

/** Alias quen tay với ai đã dùng react-i18next. */
export const useTranslation = () => useI18n();
