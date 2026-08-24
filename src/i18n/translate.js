// src/i18n/translate.js
// Bộ tra cứu chuỗi dịch: dot-path + fallback về tiếng Việt + nội suy {{biến}}.
import {DEFAULT_LOCALE} from './config.js';
import {dictionaries} from './translations/index.js';

/** Đi theo dot-path ('nav.services.title') trong một object từ điển. */
const lookup = (dictionary, key) => {
    if (!dictionary) return undefined;
    return key.split('.').reduce((node, segment) => {
        if (node === undefined || node === null) return undefined;
        return node[segment];
    }, dictionary);
};

/** Thay {{name}} bằng vars.name. */
const interpolate = (template, vars) =>
    template.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, name) =>
        Object.prototype.hasOwnProperty.call(vars, name) ? String(vars[name]) : match
    );

const warned = new Set();

const warnMissing = (locale, key) => {
    if (!import.meta.env?.DEV) return;
    const id = `${locale}:${key}`;
    if (warned.has(id)) return;
    warned.add(id);
    console.warn(`[i18n] Thiếu bản dịch "${key}" cho ngôn ngữ "${locale}".`);
};

/**
 * Lấy giá trị đã dịch. Thứ tự ưu tiên: ngôn ngữ hiện tại -> tiếng Việt -> chính key.
 * Trả về nguyên kiểu dữ liệu gốc (chuỗi, mảng, object) để dùng được cho danh sách.
 */
export const translate = (locale, key, vars) => {
    let value = lookup(dictionaries[locale], key);

    if (value === undefined && locale !== DEFAULT_LOCALE) {
        warnMissing(locale, key);
        value = lookup(dictionaries[DEFAULT_LOCALE], key);
    }

    if (value === undefined) {
        warnMissing(locale, key);
        return key;
    }

    if (typeof value === 'string' && vars) return interpolate(value, vars);
    return value;
};

/** Như translate nhưng luôn trả về mảng - dùng cho danh sách trong JSX. */
export const translateList = (locale, key) => {
    const value = translate(locale, key);
    return Array.isArray(value) ? value : [];
};
