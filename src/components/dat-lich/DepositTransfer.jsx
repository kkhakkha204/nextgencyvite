import React from 'react';
import { useI18n } from '../../i18n';
import {buildBankRows, buildQrUrl} from './bookingData.js';

/**
 * Khối QR + thông tin chuyển khoản cọc giữ chỗ.
 * variant "light" dùng trong panel đặt lịch, "dark" dùng trên nền navy ở CTA cuối.
 */
const DepositTransfer = ({phone = '', variant = 'light', qrSize = 'w-[132px] h-[132px]'}) => {
    const { t } = useI18n();
    const isDark = variant === 'dark';
    const rows = buildBankRows(t, phone);

    return (
        <div className="flex items-start gap-4 sm:gap-[18px]">
            <div
                className={`${qrSize} flex-none rounded-[14px] bg-white p-1.5 ${
                    isDark ? '' : 'border border-[#dde4ef]'
                }`}
            >
                <img
                    src={buildQrUrl(phone)}
                    alt={t('booking.bank.qrAlt')}
                    loading="lazy"
                    className="h-full w-full object-contain"
                />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2">
                {rows.map((row) => (
                    <div
                        key={row.label}
                        className={`flex justify-between gap-3 border-b border-dashed pb-2 ${
                            isDark ? 'border-white/20 text-[12.5px]' : 'border-[#e6ebf3] text-[13.5px]'
                        }`}
                    >
                        <span className={isDark ? 'text-white/60' : 'text-[#7a8499]'}>{row.label}</span>
                        <span className={`break-all text-right font-bold ${isDark ? 'text-white' : 'text-[#0b0e18]'}`}>
                            {row.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DepositTransfer;
