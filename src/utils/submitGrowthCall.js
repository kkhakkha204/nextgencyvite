import {DEPOSIT, DEPOSIT_FULL} from '../components/dat-lich/bookingData.js';
import {resolveContextService} from '../data/growthCallContexts.js';

const WEBHOOK_ENDPOINT = 'https://nextg.nextgency.vn/webhook/tu-van-ngo-hong-son';

/**
 * Gửi thông tin đặt lịch Growth Call ngay khi khách bấm giữ chỗ - trước bước chuyển khoản.
 * Lead vào hệ thống kể cả khi khách chưa cọc.
 */
export const submitGrowthCall = ({form, dateLabel, slot, ctx}) => fetch(WEBHOOK_ENDPOINT, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        customer_name: form.name.trim(),
        phone: form.phone.trim(),
        website: form.web.trim(),
        consultation_request: form.note.trim(),
        service: resolveContextService(ctx),
        ctx: ctx || '',
        booking_date: dateLabel,
        booking_slot: slot,
        booking_label: `${dateLabel}${slot ? ` · ${slot}` : ''}`,
        deposit: DEPOSIT,
        deposit_text: DEPOSIT_FULL,
        payment_status: 'Chưa chuyển cọc',
        source_url: typeof window !== 'undefined' ? window.location.href : '',
        created_at: new Date().toISOString(),
        status: 'New'
    })
});
