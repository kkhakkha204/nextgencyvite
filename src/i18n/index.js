// src/i18n/index.js - đầu mối import duy nhất cho phần đa ngôn ngữ.
export {
    DEFAULT_LOCALE,
    LOCALES,
    LOCALE_CODES,
    getLocaleConfig,
    getLocalePrefix,
    getLocaleFromPath,
    localizePath,
    splitLocaleFromPath,
    stripLocaleFromPath
} from './config.js';
export {I18nContext, useI18n, useTranslation} from './context.js';
export {translate, translateList} from './translate.js';
export {default as LanguageProvider} from './LanguageProvider.jsx';
export {Link, NavLink} from './Link.jsx';
export {useLocalizedNavigate} from './useLocalizedNavigate.js';
