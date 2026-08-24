// src/scripts/check-translations.js
//
// Chạy: npm run check-i18n
//
// Đối chiếu en.js và cn.js với vi.js (ngôn ngữ gốc) rồi báo:
//   - key có ở tiếng Việt nhưng thiếu ở ngôn ngữ khác  -> sẽ hiển thị ra tiếng Việt
//   - key thừa (đã xoá ở tiếng Việt nhưng còn sót lại)  -> nên dọn
//   - trang chưa khai báo `translations` trong seo-configs.js -> đang bị noindex
//
// Thoát với mã 1 nếu thiếu key, để cắm được vào CI.

import fs from 'node:fs';
import path from 'node:path';
import {LOCALES, DEFAULT_LOCALE} from '../i18n/config.js';
import {dictionaries} from '../i18n/translations/index.js';
import {seoRoutes} from '../pages/seo-configs.js';

/**
 * Duỗi phẳng object từ điển thành danh sách dot-path.
 * Đi vào cả trong mảng (dạng key[0], key[1]...) để bắt được trường hợp bản dịch
 * thiếu bớt phần tử - nếu chỉ đếm tới tên mảng thì mảng 2 phần tử vs 3 phần tử
 * vẫn coi là khớp và nội dung sẽ âm thầm rơi mất.
 */
const flatten = (node, prefix = '') => {
    if (Array.isArray(node)) {
        return node.flatMap((value, index) => flatten(value, `${prefix}[${index}]`));
    }
    if (node === null || typeof node !== 'object') return [prefix];
    return Object.entries(node).flatMap(([key, value]) => flatten(value, prefix ? `${prefix}.${key}` : key));
};

const baseKeys = flatten(dictionaries[DEFAULT_LOCALE]);
const baseKeySet = new Set(baseKeys);

let hasMissing = false;

console.log(`Ngôn ngữ gốc "${DEFAULT_LOCALE}": ${baseKeys.length} key.\n`);

for (const locale of LOCALES) {
    if (locale.code === DEFAULT_LOCALE) continue;

    const keys = new Set(flatten(dictionaries[locale.code]));
    const missing = baseKeys.filter((key) => !keys.has(key));
    const extra = [...keys].filter((key) => !baseKeySet.has(key));

    const done = baseKeys.length - missing.length;
    const percent = Math.round((done / baseKeys.length) * 100);
    console.log(`[${locale.code}] ${locale.label}: ${done}/${baseKeys.length} key (${percent}%)`);

    if (missing.length) {
        hasMissing = true;
        console.log(`  Thiếu ${missing.length} key:`);
        missing.forEach((key) => console.log(`    - ${key}`));
    }
    if (extra.length) {
        console.log(`  Thừa ${extra.length} key (không còn ở tiếng Việt):`);
        extra.forEach((key) => console.log(`    - ${key}`));
    }
    console.log('');
}

// Meta SEO: trang thiếu bản dịch sẽ bị noindex ở ngôn ngữ đó
for (const locale of LOCALES) {
    if (locale.code === DEFAULT_LOCALE) continue;

    const untranslated = seoRoutes
        .filter((route) => !route.translations?.[locale.code])
        .map((route) => route.path);

    if (untranslated.length) {
        console.log(
            `[${locale.code}] ${untranslated.length}/${seoRoutes.length} trang chưa có meta SEO -> đang noindex:`
        );
        untranslated.forEach((routePath) => console.log(`    - ${locale.prefix}${routePath === '/' ? '' : routePath}`));
        console.log('');
    }
}

/* ------------------------------------------------------------------------ */
/* Key được gọi trong code nhưng KHÔNG có trong từ điển.                     */
/* Loại lỗi này không làm gãy build - trang chỉ in ra đúng cái tên key.      */
/* ------------------------------------------------------------------------ */

// Bỏ qua chính thư mục i18n và scripts (ví dụ trong comment sẽ bị bắt nhầm)
const SKIP_DIRS = new Set(['i18n', 'scripts']);

const walkSource = (dir) =>
    fs.readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
        const child = path.join(dir, entry.name);
        if (entry.isDirectory()) return SKIP_DIRS.has(entry.name) ? [] : walkSource(child);
        return /\.jsx?$/.test(entry.name) ? [child] : [];
    });

// Chỉ soi key tĩnh: t('a.b.c') / tm("a.b"). Key dựng động bằng template literal thì bỏ qua.
const KEY_CALL = /\b(?:t|tm)\(\s*(['"])([a-zA-Z0-9_.[\]]+)\1/g;

const unknownKeys = new Map();
for (const file of walkSource('src')) {
    const source = fs.readFileSync(file, 'utf8');
    for (const match of source.matchAll(KEY_CALL)) {
        const key = match[2];
        if (baseKeySet.has(key)) continue;
        // Key trỏ tới cả một nhánh (mảng/object) cũng hợp lệ
        if (baseKeys.some((candidate) => candidate.startsWith(`${key}.`) || candidate.startsWith(`${key}[`))) continue;
        if (!unknownKeys.has(key)) unknownKeys.set(key, new Set());
        unknownKeys.get(key).add(file);
    }
}

if (unknownKeys.size) {
    hasMissing = true;
    console.log(`Key được gọi trong code nhưng không có trong từ điển (${unknownKeys.size}):`);
    for (const [key, files] of unknownKeys) {
        console.log(`    - ${key}  →  ${[...files].join(', ')}`);
    }
    console.log('');
}

if (hasMissing) {
    console.error('❌ Còn key chưa dịch hoặc key gọi trong code mà từ điển không có.');
    process.exit(1);
}

console.log('✅ Ba bộ từ điển khớp nhau, mọi key dùng trong code đều tồn tại.');
