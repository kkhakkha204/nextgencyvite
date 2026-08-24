/* Danh sách dịch vụ dùng chung cho tất cả form nhận tư vấn.
 *
 * `value` là chuỗi ĐƯỢC GHI XUỐNG NocoDB - luôn giữ tiếng Việt/nguyên gốc, không dịch,
 * để dữ liệu của mọi ngôn ngữ đổ về cùng một giá trị và báo cáo không bị vỡ.
 * `i18nKey` chỉ dùng để hiển thị nhãn theo ngôn ngữ đang xem.
 */
export const CONSULTATION_SERVICE_OPTIONS = [
    {value: 'Automation - Data - AI', i18nKey: 'form.serviceOptions.aiData'},
    {value: 'Google Ads', i18nKey: 'form.serviceOptions.googleAds'},
    {value: 'Facebook Ads', i18nKey: 'form.serviceOptions.facebookAds'},
    {value: 'TikTok Ads', i18nKey: 'form.serviceOptions.tiktokAds'},
    {value: 'Facebook Dataset & CRM', i18nKey: 'form.serviceOptions.facebookCrm'},
    {value: 'Tick Xanh Facebook', i18nKey: 'form.serviceOptions.tickXanh'},
    {value: 'Website & Landing Page', i18nKey: 'form.serviceOptions.websiteLanding'},
    {value: 'Hệ thống content AI', i18nKey: 'form.serviceOptions.contentAi'},
    {value: 'Thuê Phòng Marketing', i18nKey: 'form.serviceOptions.marketingOutsource'}
];

/** Danh sách giá trị thuần - giữ lại cho code cũ và cho growthCallContexts.js. */
export const CONSULTATION_SERVICES = CONSULTATION_SERVICE_OPTIONS.map((option) => option.value);
