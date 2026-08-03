/*
 * Ánh xạ ?ctx= trên URL /dat-lich sang tên dịch vụ gửi kèm form.
 * Key là slug cuối của trang dịch vụ (do BookingCtaSection tự lấy từ pathname).
 * Value lấy đúng theo CONSULTATION_SERVICES để dữ liệu đồng bộ với các form tư vấn khác.
 */
export const GROWTH_CALL_CONTEXTS = {
    'ai-data': 'Automation - Data - AI',
    'google-ads': 'Google Ads',
    'facebook-ads': 'Facebook Ads',
    'tiktok-ads': 'TikTok Ads',
    'facebook-crm': 'Facebook Dataset & CRM',
    'tick-xanh-facebook': 'Tick Xanh Facebook',
    'website-landing-page': 'Website & Landing Page',
    'marketing-outsource': 'Thuê Phòng Marketing',
    'ai': 'Hệ thống content AI'
};

/** Khách vào thẳng /dat-lich, không qua trang dịch vụ nào. */
export const DEFAULT_CONTEXT_SERVICE = 'Tư vấn tăng trưởng tổng thể';

/** Slug lạ hoặc thiếu -> rơi về nhãn mặc định, không bao giờ trả undefined. */
export const resolveContextService = (ctx) => {
    if (!ctx) return DEFAULT_CONTEXT_SERVICE;
    return GROWTH_CALL_CONTEXTS[ctx.trim().toLowerCase()] || DEFAULT_CONTEXT_SERVICE;
};
