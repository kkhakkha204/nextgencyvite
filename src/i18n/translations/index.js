// src/i18n/translations/index.js
import vi from './vi.js';
import en from './en.js';
import cn from './cn.js';

// Ba bộ từ điển được nạp tĩnh: không có màn hình chờ, không nháy chữ chưa dịch
// khi đổi ngôn ngữ. Nếu về sau nội dung phình to, có thể chuyển sang import().
export const dictionaries = {vi, en, cn};

export default dictionaries;
